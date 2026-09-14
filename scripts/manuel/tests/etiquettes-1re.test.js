/* =========================================================
   Spark Learning – scripts/manuel/tests/etiquettes-1re.test.js

   DETECTE LES ETIQUETTES QUI SE CHEVAUCHENT dans les schemas de la premiere
   (2026-09-14).

   POURQUOI CE TEST EXISTE. Le controle visuel de l'edition professeur a montre,
   page 66, que « longueur 2 » et « pied » s'imprimaient l'une par-dessus
   l'autre dans le schema de projection orthogonale du produit scalaire : les
   deux etiquettes etaient ancrees a quatre unites de hauteur d'ecart, sur des
   abscisses qui se recouvraient.

   AUCUN CONTROLE EXISTANT NE POUVAIT LE VOIR :
     - le corpus est valide, les deux etiquettes sont du texte bien forme ;
     - la compilation est propre, LaTeX superpose sans se plaindre ;
     - le test de debordement est satisfait, les deux restent dans le cadre ;
     - les tests de geometrie sont satisfaits, les COORDONNEES sont justes.
   Seul un lecteur voit que deux mots occupent la meme place. C'est exactement
   l'argument du cahier des charges en faveur de l'epreuve en image, et la
   raison pour laquelle une session precedente a du corriger « des cotes posees
   sur les traits » en rattrapage.

   CE QUE CE TEST APPROCHE, ET SES LIMITES. Il estime la boite de chaque
   etiquette a partir de sa longueur, de la taille de sa classe et de son
   ancrage, puis cherche les recouvrements. C'est une APPROXIMATION : la largeur
   reelle depend de la fonte et du rendu mathematique. Le seuil est donc pose
   large, pour ne signaler que les chevauchements francs — ceux qu'un lecteur
   verrait. Il ne remplace pas l'epreuve en image, il en retient les lecons.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chargerModule } = require('../extract.js');

/* Largeur moyenne d'un caractere, en unites de viewBox, par classe. Ce sont
   les tailles de css/styles.css, reduites au facteur d'impression : voir
   POLICES et REDUCTION dans scripts/manuel/svg2tikz.js. */
const LARGEUR_CAR = {
  'axis-label': 7.2,
  'annotation-label': 7.2,
  'label': 6.6,
  'tick-label': 6.0,
  'label-soft': 6.0
};
const HAUTEUR = {
  'axis-label': 13,
  'annotation-label': 13,
  'label': 12,
  'tick-label': 11,
  'label-soft': 11
};

function etiquettes(svg) {
  const out = [];
  const re = /<text\b([^>]*)>([^<]*)<\/text>/g;
  let m;
  while ((m = re.exec(svg))) {
    const attrs = m[1];
    const texte = m[2].trim();
    if (!texte) continue;
    const cl = (attrs.match(/\bclass="([^"]*)"/) || [, 'annotation-label'])[1].trim();
    const x = parseFloat((attrs.match(/\bx="([^"]*)"/) || [, '0'])[1]);
    const y = parseFloat((attrs.match(/\by="([^"]*)"/) || [, '0'])[1]);
    const ancre = (attrs.match(/text-anchor="([^"]*)"/) || [, 'start'])[1];

    const lc = LARGEUR_CAR[cl] || 7;
    const h = HAUTEUR[cl] || 12;
    const l = texte.length * lc;
    let x0 = x;
    if (ancre === 'middle') x0 = x - l / 2;
    else if (ancre === 'end') x0 = x - l;
    // y est la LIGNE DE BASE : la boite monte au-dessus.
    out.push({ texte, cl, x0, x1: x0 + l, y0: y - h * 0.78, y1: y + h * 0.22 });
  }
  return out;
}

function recouvrement(a, b) {
  const dx = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0);
  const dy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
  if (dx <= 0 || dy <= 0) return 0;
  // Fraction de la PLUS PETITE des deux boites qui est recouverte.
  const aire = dx * dy;
  const petite = Math.min((a.x1 - a.x0) * (a.y1 - a.y0), (b.x1 - b.x0) * (b.y1 - b.y0));
  return petite > 0 ? aire / petite : 0;
}

/* Seuil volontairement haut : on ne signale que le chevauchement FRANC, celui
   qu'un lecteur remarque. Deux etiquettes qui se frolent de quelques pour cent
   restent lisibles, et un seuil serre ferait echouer le test sur des figures
   parfaitement correctes. */
const SEUIL = 0.40;

const MODULES = [
  '1re-derivation', '1re-suites', '1re-produit-scalaire', '1re-second-degre',
  '1re-polynomes-signe', '1re-trigonometrie', '1re-geometrie-reperee',
  '1re-probas-conditionnelles', '1re-variables-aleatoires', '1re-information-chiffree'
];

test('1re : aucune etiquette de schema ne s imprime par-dessus une autre', () => {
  const fautes = [];

  for (const id of MODULES) {
    const mod = chargerModule(path.join('js/data/lycee-1re', id + '.js'),
      { graine: 0, tirages: 1 }).module;
    const c = mod.cours || {};
    const figures = [].concat(c.diagram ? [c.diagram] : [], c.diagrams || []);

    figures.forEach((d, k) => {
      const et = etiquettes(d.svg || '');
      for (let i = 0; i < et.length; i++) {
        for (let j = i + 1; j < et.length; j++) {
          const r = recouvrement(et[i], et[j]);
          if (r >= SEUIL) {
            fautes.push(id + ' / figure ' + (k + 1) + ' (« ' + (d.title || '') + ' ») : ' +
              '« ' + et[i].texte + ' » et « ' + et[j].texte + ' » se recouvrent a ' +
              Math.round(r * 100) + ' %');
          }
        }
      }
    });
  }

  assert.deepStrictEqual(fautes, [],
    'deux etiquettes superposees sont illisibles a l impression :\n  - ' + fautes.join('\n  - '));
});

/* Regle de composition du cahier des charges (section 9) : pas d'etiquette en
   capitales, qui se fracture a la conversion, et pas de lettre isolee ni
   d'article elide, qui declenchent un italique parasite. */
test('1re : les etiquettes respectent les contraintes du convertisseur', () => {
  const fautes = [];

  for (const id of MODULES) {
    const mod = chargerModule(path.join('js/data/lycee-1re', id + '.js'),
      { graine: 0, tirages: 1 }).module;
    const c = mod.cours || {};
    const figures = [].concat(c.diagram ? [c.diagram] : [], c.diagrams || []);

    figures.forEach((d, k) => {
      for (const e of etiquettes(d.svg || '')) {
        const lettres = e.texte.replace(/[^A-Za-zÀ-ÿ]/g, '');
        if (lettres.length >= 3 && lettres === lettres.toUpperCase()) {
          fautes.push(id + ' / figure ' + (k + 1) + ' : « ' + e.texte +
            ' » est en capitales, et se fracture a la conversion');
        }
        if (/\b[ldcjmnst]['’]/i.test(e.texte)) {
          fautes.push(id + ' / figure ' + (k + 1) + ' : « ' + e.texte +
            ' » porte un article elide, qui declenche un italique parasite');
        }
      }
    });
  }

  assert.deepStrictEqual(fautes, [], fautes.join('\n  - '));
});
