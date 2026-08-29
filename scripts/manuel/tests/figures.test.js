const test = require('node:test');
const assert = require('node:assert');
const { preparerFigures, figureUtilisable } = require('../figures.js');

/* Ajoute le 2026-08-20 en meme temps que le support de cours.diagrams[] :
   avant cette date-la, preparerFigures() n'avait aucun test dedie (seulement
   exercee indirectement via le corpus reel dans corpus.test.js). */

const SVG_VALIDE = '<svg viewBox="0 0 360 240">' +
  '<line class="axis" x1="0" y1="0" x2="1" y2="1"></line></svg>';

function mod(id, diagram, diagrams) {
  return { id, subject: 'physique', cours: { diagram, diagrams } };
}

test('un module sans cours.diagram donne une figure sans provenance, raison aucun schema', () => {
  const r = preparerFigures([mod('sans-schema', null)]);
  assert.strictEqual(r['sans-schema'].provenance, null);
  assert.strictEqual(r['sans-schema'].raison, 'aucun schema');
  assert.ok(!figureUtilisable(r['sans-schema']));
  assert.strictEqual(r['sans-schema'].secondaires, undefined,
    'pas de cours.diagrams -> pas de champ secondaires du tout');
});

test('un cours.diagram valide donne une figure exploitable, meme forme qu avant l ajout des secondaires', () => {
  const r = preparerFigures([mod('avec-schema', { svg: SVG_VALIDE })]);
  assert.ok(figureUtilisable(r['avec-schema']));
  assert.ok(r['avec-schema'].provenance, 'provenance manquante');
  assert.ok(r['avec-schema'].tikz.length > 0, 'tikz vide');
  assert.strictEqual(r['avec-schema'].secondaires, undefined);
});

test('cours.diagrams[] est converti dans .secondaires, sans toucher au schema principal', () => {
  const r = preparerFigures([mod('deux-schemas',
    { svg: SVG_VALIDE }, [{ svg: SVG_VALIDE }, { svg: SVG_VALIDE }])]);

  assert.ok(figureUtilisable(r['deux-schemas']), 'le schema principal doit rester exploitable');
  assert.ok(Array.isArray(r['deux-schemas'].secondaires), 'secondaires doit etre un tableau');
  assert.strictEqual(r['deux-schemas'].secondaires.length, 2);
  for (const s of r['deux-schemas'].secondaires) assert.ok(figureUtilisable(s));
});

test('un schema secondaire sans svg est bloque sans affecter le principal ni les autres secondaires', () => {
  const r = preparerFigures([mod('secondaire-casse',
    { svg: SVG_VALIDE }, [{ svg: SVG_VALIDE }, { /* pas de svg */ }])]);

  assert.ok(figureUtilisable(r['secondaire-casse']), 'le principal ne doit pas etre affecte');
  assert.strictEqual(r['secondaire-casse'].secondaires.length, 2);
  assert.ok(figureUtilisable(r['secondaire-casse'].secondaires[0]), 'le 1er secondaire est valide');
  assert.ok(!figureUtilisable(r['secondaire-casse'].secondaires[1]), 'le 2e secondaire est casse');
  assert.strictEqual(r['secondaire-casse'].secondaires[1].raison, 'aucun schema');
});

test('un cours.diagrams vide (tableau present mais sans element) ne cree pas de champ secondaires', () => {
  const r = preparerFigures([mod('tableau-vide', { svg: SVG_VALIDE }, [])]);
  assert.strictEqual(r['tableau-vide'].secondaires, undefined);
});

test('plusieurs modules sont indexes independamment par id', () => {
  const r = preparerFigures([
    mod('m1', { svg: SVG_VALIDE }),
    mod('m2', null)
  ]);
  assert.ok(figureUtilisable(r.m1));
  assert.ok(!figureUtilisable(r.m2));
});
