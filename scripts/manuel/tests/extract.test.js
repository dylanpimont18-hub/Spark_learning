const test = require('node:test');
const assert = require('node:assert');
const { chargerModule } = require('../extract.js');

const THALES = 'js/data/3e/3e-thales.js';

test('charge un module reel et le valide', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 2 });
  assert.strictEqual(r.module.id, '3e-thales');
  assert.strictEqual(r.validation.ok, true, 'erreurs : ' + r.validation.erreurs.join(' | '));
});

test('produit le nombre de tirages demande', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 3 });
  assert.strictEqual(r.exercices.length, 3);
});

test('la meme graine produit exactement les memes exercices', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 7, tirages: 4 });
  assert.deepStrictEqual(a.exercices, b.exercices);
});

test('deux graines differentes produisent des exercices differents', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 8, tirages: 4 });
  assert.notDeepStrictEqual(a.exercices, b.exercices);
});

test('les exercices sont normalises : solution toujours en tableau', () => {
  const r = chargerModule('js/data/bts-prep/bts-prep-logarithme.js', { graine: 1, tirages: 1 });
  assert.ok(Array.isArray(r.exercices[0].solution));
});

test('une banque large ne contient aucun enonce en double', () => {
  // La banque du professeur tire 18 exercices par chapitre. Sans
  // deduplication, les modules les moins varies en repetaient jusqu'a deux.
  for (const f of ['js/data/6e/6e-symetrie-axiale.js', 'js/data/6e/6e-volumes.js',
                   'js/data/6e/6e-figures-geometriques.js', THALES]) {
    const r = chargerModule(f, { graine: 20260816, tirages: 18 });
    const enonces = r.exercices.map(e => String(e.statement).trim());
    assert.strictEqual(new Set(enonces).size, enonces.length,
      f + ' : ' + (enonces.length - new Set(enonces).size) + ' doublon(s)');
  }
});

test('la deduplication ne casse pas le determinisme', () => {
  const a = chargerModule('js/data/6e/6e-symetrie-axiale.js', { graine: 5, tirages: 18 });
  const b = chargerModule('js/data/6e/6e-symetrie-axiale.js', { graine: 5, tirages: 18 });
  assert.deepStrictEqual(a.exercices, b.exercices);
});

test('le budget borne le tirage au lieu de boucler, et ne rend jamais de doublon', () => {
  // Le contrat n'est pas « rendre moins » : c'est « terminer, sans doublon ».
  // Un generateur riche atteint le nombre demande ; un generateur pauvre rend
  // une banque plus courte. Les deux sont acceptables, une boucle ne l'est pas.
  for (const f of ['js/data/6e/6e-symetrie-axiale.js', 'js/data/6e/6e-angles.js']) {
    const r = chargerModule(f, { graine: 1, tirages: 200 });
    const enonces = r.exercices.map(e => String(e.statement).trim());
    assert.strictEqual(new Set(enonces).size, enonces.length, f + ' : doublon');
    assert.ok(r.exercices.length <= 200);
    assert.ok(r.exercices.length > 20, f + ' : banque trop courte');
  }
});

test('un chemin inexistant leve une erreur explicite', () => {
  assert.throws(() => chargerModule('js/data/nexiste-pas.js', { graine: 1, tirages: 1 }),
    /nexiste-pas/);
});

test('2nde-droites-systemes ne plante plus (bug const b2)', () => {
  // Avant correction, 24,5 % des tirages levaient une TypeError.
  for (let g = 0; g < 60; g++) {
    chargerModule('js/data/lycee-2nde/2nde-droites-systemes.js', { graine: g, tirages: 3 });
  }
});

/* --- Plafond de repetition d'un MOULE d'enonce (2026-09-13) --------------
   La banque du professeur est passee de 6 a 15-30 enonces par chapitre. A
   cette taille, la deduplication par enonce EXACT ne protege plus de rien :
   les generateurs combinent des valeurs numeriques quasi a l'infini, donc 60
   tirages « tous distincts » peuvent sortir de 9 moules seulement — le meme
   exercice imprime sept fois avec d'autres nombres. */

test('sans plafond, la deduplication exacte laisse passer le meme moule en boucle', () => {
  // Constat qui justifie la mesure : le probleme est reel, pas theorique.
  const { squeletteEnonce } = require('../extract.js');
  const r = chargerModule('js/data/6e/6e-angles.js', { graine: 20260816, tirages: 60 });
  const moules = new Set(r.exercices.map(e => squeletteEnonce(e.statement)));
  assert.ok(r.exercices.length >= 50, 'la dedup exacte ne sature pas');
  assert.ok(moules.size <= 12, 'et pourtant une poignee de moules seulement : ' + moules.size);
});

test('le plafond borne le nombre de fois qu un meme moule ressort', () => {
  const { squeletteEnonce } = require('../extract.js');
  for (const f of ['js/data/6e/6e-angles.js', 'js/data/6e/6e-perimetres-aires.js',
                   'js/data/6e/6e-fractions.js', THALES]) {
    const r = chargerModule(f, { graine: 20260816, tirages: 42, repetitionsMax: 3 });
    const cpt = new Map();
    for (const e of r.exercices) {
      const k = squeletteEnonce(e.statement);
      cpt.set(k, (cpt.get(k) || 0) + 1);
    }
    assert.ok(Math.max(...cpt.values()) <= 3,
      f + ' : un moule ressort ' + Math.max(...cpt.values()) + ' fois');
  }
});

test('le plafond n empeche pas la banque d etre fournie', () => {
  // Le but n'est pas de raboter : c'est d'obtenir une trentaine d'enonces
  // quand le generateur en est capable, et moins quand il ne l'est pas.
  const riche = chargerModule('js/data/6e/6e-perimetres-aires.js',
    { graine: 20260816, tirages: 42, repetitionsMax: 3 });
  assert.ok(riche.exercices.length >= 40, 'chapitre riche : ' + riche.exercices.length);
  const pauvre = chargerModule('js/data/6e/6e-angles.js',
    { graine: 20260816, tirages: 42, repetitionsMax: 3 });
  assert.ok(pauvre.exercices.length < riche.exercices.length,
    'un chapitre pauvre doit rendre moins, pas remplir a tout prix');
  assert.ok(pauvre.exercices.length >= 12 + 10,
    'mais il doit rester une banque exploitable : ' + pauvre.exercices.length);
});

test('le plafond ne casse ni le determinisme ni l unicite des enonces', () => {
  const a = chargerModule('js/data/6e/6e-symetrie-axiale.js', { graine: 5, tirages: 42, repetitionsMax: 3 });
  const b = chargerModule('js/data/6e/6e-symetrie-axiale.js', { graine: 5, tirages: 42, repetitionsMax: 3 });
  assert.deepStrictEqual(a.exercices, b.exercices);
  const enonces = a.exercices.map(e => String(e.statement).trim());
  assert.strictEqual(new Set(enonces).size, enonces.length, 'doublon exact');
});

test('les 12 premiers tirages ne bougent pas quand le plafond entre en jeu', () => {
  /* Non negociable : l'eleve recoit les 12 premiers, le professeur les memes
     12 corriges. Le plafond ne doit donc reordonner ni ecarter aucun des 12
     premiers, sinon les deux editions cessent d'etre superposables. */
  for (const f of ['js/data/6e/6e-angles.js', 'js/data/6e/6e-fractions.js']) {
    const sans = chargerModule(f, { graine: 20260816, tirages: 12 });
    const avec = chargerModule(f, { graine: 20260816, tirages: 42, repetitionsMax: 3 });
    assert.deepStrictEqual(avec.exercices.slice(0, 12), sans.exercices, f);
  }
});

test('squeletteEnonce masque les nombres, y compris la notation decimale francaise', () => {
  const { squeletteEnonce } = require('../extract.js');
  assert.strictEqual(squeletteEnonce('Le rayon vaut $12$ cm'), squeletteEnonce('Le rayon vaut $7$ cm'));
  assert.strictEqual(squeletteEnonce('Aire de $3{,}5$ m'), squeletteEnonce('Aire de $12{,}75$ m'));
  assert.notStrictEqual(squeletteEnonce('Calcule le rayon'), squeletteEnonce('Calcule le diametre'));
});
