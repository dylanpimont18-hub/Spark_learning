/* =========================================================
   Spark Learning – scripts/manuel/tests/figures-exercices.test.js
   Les figures parametriques d'exercice (2026-09-12).

   LE TEST CENTRAL EST « cotesConformes » : une figure qui affiche 8 cm quand
   l'enonce dit 12 cm est un bug GRAVE ET SILENCIEUX — rien ne casse, le livre
   compile, et l'eleve qui mesure a la regle trouve autre chose que la reponse
   attendue. On verifie donc sur plusieurs tirages reels, module par module, que
   toute valeur cotee dans la figure figure aussi dans l'enonce, et que le
   RAPPORT DES LONGUEURS DESSINEES est celui des valeurs annoncees.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chargerModule, RACINE } = require('../extract.js');
const { preparerFigureExercice, figureUtilisable, LARGEUR_FIGURE_EXERCICE_MM } = require('../figures.js');
const { versLatex, nonMappes, definirOrigine } = require('../latex.js');

/* Contexte minimal donnant acces aux helpers de figure hors navigateur, pour
   les tester unitairement sans passer par un module. */
function bacAFigures() {
  const bac = { window: { MODULES: [] }, console, Math };
  vm.createContext(bac);
  const lire = (p) => fs.readFileSync(path.join(RACINE, p), 'utf8');
  vm.runInContext(lire('js/data/helpers.js') + '\n' + lire('js/data/figures-exercices.js'), bac);
  return bac;
}
const BAC = bacAFigures();
const appeler = (expr) => vm.runInContext(expr, BAC);

/* Extrait les couples (largeur, hauteur) d'un <rect>, les points d'un
   <polygon> et le rayon d'un <circle> : de quoi mesurer le dessin lui-meme,
   independamment de ce que les etiquettes racontent. */
function rects(svg) {
  return [...svg.matchAll(/<rect\b[^>]*>/g)].map(m => ({
    w: Number((/width="([\d.]+)"/.exec(m[0]) || [])[1]),
    h: Number((/height="([\d.]+)"/.exec(m[0]) || [])[1])
  }));
}
function textes(svg) {
  return [...svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1]);
}

test('le rectangle est dessine a l echelle des valeurs cotees', () => {
  for (const [L, l] of [[12, 7], [15, 4], [5, 5], [9, 3]]) {
    const svg = appeler(`figureRectangle(${L}, ${l})`);
    const r = rects(svg)[0];
    // Rapport dessine == rapport annonce, a la tolerance d'arrondi pres.
    assert.ok(Math.abs((r.w / r.h) - (L / l)) < 0.02,
      `rectangle ${L}x${l} : rapport dessine ${(r.w / r.h).toFixed(3)} au lieu de ${(L / l).toFixed(3)}`);
  }
});

test('un rectangle trop allonge est comprime ET le declare', () => {
  // 20x2 depasse le rapport maximal de 4 : le dessin est comprime, la figure
  // doit alors porter la mention, sous peine de laisser croire a une echelle.
  const svg = appeler('figureRectangle(20, 2)');
  const r = rects(svg)[0];
  assert.ok(Math.abs((r.w / r.h) - 4) < 0.02, 'le rapport doit etre ramene a 4');
  assert.ok(/non a l echelle/.test(svg), 'la compression doit etre annoncee');
  // ... et le rectangle honnete ne doit surtout pas la porter.
  assert.ok(!/non a l echelle/.test(appeler('figureRectangle(12, 7)')));
});

test('le carre est carre', () => {
  const r = rects(appeler('figureCarre(6)'))[0];
  assert.ok(Math.abs(r.w - r.h) < 0.02, 'les deux cotes d un carre doivent etre egaux');
});

test('le disque a le rayon annonce et le diametre vaut deux rayons', () => {
  const svgR = appeler('figureDisque(5)');
  assert.ok(/r = 5 cm/.test(svgR), 'le rayon doit etre cote');
  const svgD = appeler('figureDisque(5, { diametre: true })');
  assert.ok(/d = 10 cm/.test(svgD), 'le diametre cote doit valoir 2r');
});

test('le triangle porte sa base, sa hauteur et le codage de l angle droit', () => {
  const svg = appeler('figureTriangle(8, 6)');
  assert.ok(/base = 8 cm/.test(svg));
  assert.ok(/h = 6 cm/.test(svg));
  assert.ok(/<path class="grid-line"/.test(svg), 'l angle droit doit etre code');
});

test('le triangle d angles dessine les VRAIS angles', () => {
  /* On remesure les angles du polygone effectivement trace : c'est la seule
     verification qui a du sens ici. Une figure qui annonce 40 degres et en
     dessine 70 est lisible au rapporteur par n'importe quel eleve. */
  for (const [a1, a2] of [[40, 60], [30, 110], [70, 70], [25, 45]]) {
    const svg = appeler(`figureTriangleAngles(${a1}, ${a2})`);
    const pts = (/points="([^"]+)"/.exec(svg) || [])[1].trim().split(/\s+/)
      .map(p => p.split(',').map(Number));
    const [A, B, C] = pts;
    const angle = (S, P, Q) => {
      const u = [P[0] - S[0], P[1] - S[1]], v = [Q[0] - S[0], Q[1] - S[1]];
      const c = (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v));
      return Math.acos(Math.min(1, Math.max(-1, c))) * 180 / Math.PI;
    };
    assert.ok(Math.abs(angle(A, B, C) - a1) < 0.6,
      `angle en A : ${angle(A, B, C).toFixed(2)} au lieu de ${a1}`);
    assert.ok(Math.abs(angle(B, C, A) - a2) < 0.6,
      `angle en B : ${angle(B, C, A).toFixed(2)} au lieu de ${a2}`);
    // Le troisieme angle n'est jamais chiffre : la figure ne donne pas la reponse.
    assert.ok(!new RegExp(`>${180 - a1 - a2}°<`).test(svg),
      'la figure ne doit pas reveler le troisieme angle');
  }
});

test('les angles adjacents sont traces a leur vraie mesure', () => {
  for (const [a, total] of [[35, 90], [110, 180], [20, 90]]) {
    const svg = appeler(`figureAnglesAdjacents(${a}, ${total})`);
    const lignes = [...svg.matchAll(/<line class="frame-line"[^>]*>/g)].map(m => ({
      x1: Number(/x1="([-\d.]+)"/.exec(m[0])[1]), y1: Number(/y1="([-\d.]+)"/.exec(m[0])[1]),
      x2: Number(/x2="([-\d.]+)"/.exec(m[0])[1]), y2: Number(/y2="([-\d.]+)"/.exec(m[0])[1])
    }));
    assert.equal(lignes.length, 3, 'trois demi-droites');
    // y descend dans le repere SVG : l'angle geometrique est -atan2(dy, dx).
    const dir = (L) => (Math.atan2(-(L.y2 - L.y1), L.x2 - L.x1) * 180 / Math.PI + 360) % 360;
    const angles = lignes.map(dir).sort((x, y) => x - y);
    assert.ok(Math.abs(angles[1] - a) < 0.5, `premier angle ${angles[1].toFixed(2)} au lieu de ${a}`);
    assert.ok(Math.abs(angles[2] - total) < 0.5, `angle total ${angles[2].toFixed(2)} au lieu de ${total}`);
  }
});

test('la symetrie place le point A a sa vraie abscisse et ne chiffre pas la reponse', () => {
  const svg = appeler('figureSymetrie(9, 5)');
  assert.ok(/axe x = 5/.test(svg), 'l axe doit porter sa valeur');
  assert.ok(/A' = \?/.test(svg), 'le symetrique reste une inconnue');
  assert.ok(!/>1</.test(svg.replace(/<text class="tick-label"[^>]*>[^<]*<\/text>/g, '')),
    'la valeur du symetrique ne doit apparaitre que comme graduation');
});

/* --- Le pave droit ------------------------------------------------------ */

test('le pave cote ses trois dimensions, le cube une seule', () => {
  const p = appeler('figurePave(30, 20, 15)');
  assert.ok(/L = 30 cm/.test(p) && /l = 20 cm/.test(p) && /h = 15 cm/.test(p));
  const c = appeler('figurePave(7, 7, 7, { cube: true })');
  assert.ok(/arete = 7 cm/.test(c), 'le cube ne cote que son arete');
  assert.ok(!/L = /.test(c), 'un cube ne repete pas trois fois la meme cote');
});

test('la face avant du pave est a l echelle de L et h', () => {
  const svg = appeler('figurePave(40, 25, 20)');
  const pts = (/points="([^"]+)"/.exec(svg) || [])[1].trim().split(/\s+/)
    .map(p => p.split(',').map(Number));
  const w = Math.abs(pts[1][0] - pts[0][0]);
  const h = Math.abs(pts[2][1] - pts[1][1]);
  assert.ok(Math.abs((w / h) - (40 / 20)) < 0.02,
    `face avant : rapport ${(w / h).toFixed(3)} au lieu de ${(40 / 20).toFixed(3)}`);
});

/* --- Toutes les figures traversent le pipeline -------------------------- */

test('toute figure produite est convertible en TikZ avec provenance', () => {
  const cas = [
    'figureRectangle(12, 7)', 'figureCarre(6)', 'figureTriangle(8, 6)',
    'figureDisque(5)', 'figureDisque(4, { diametre: true })',
    'figurePave(30, 20, 15)', 'figurePave(7, 7, 7, { cube: true })',
    'figureTriangleAngles(40, 60)', 'figureAnglesAdjacents(35, 90)',
    'figureAnglesAdjacents(110, 180)', 'figureSymetrie(9, 5)'
  ];
  for (const expr of cas) {
    const svg = appeler(expr);
    const r = preparerFigureExercice({ id: 'test', subject: 'maths' }, { figure: { svg } }, 0);
    assert.ok(figureUtilisable(r), expr + ' : ' + (r && r.raison));
    assert.equal(r.provenance, 'svg-exact', expr + ' doit venir d un SVG');
    assert.ok(/\\begin\{tikzpicture\}/.test(r.tikz), expr + ' doit produire du TikZ');
  }
});

test('une figure d exercice est nettement plus petite qu une figure de chapitre', () => {
  // Garde-fou de pagination : douze exercices par chapitre a 128 mm feraient
  // exploser l'ouvrage. La valeur doit rester dans la fourchette visee.
  assert.ok(LARGEUR_FIGURE_EXERCICE_MM >= 45 && LARGEUR_FIGURE_EXERCICE_MM <= 60,
    'largeur hors de la fourchette 45-60 mm : ' + LARGEUR_FIGURE_EXERCICE_MM);
});

test('aucune couleur n est ecrite en dur dans les figures', () => {
  // Les couleurs passent par les variables du projet : une couleur en dur
  // casserait le theme sombre du site et le noir et blanc du livre.
  const cas = ['figureRectangle(12, 7)', 'figureTriangle(8, 6)', 'figureDisque(5)',
    'figurePave(30, 20, 15)', 'figureTriangleAngles(40, 60)',
    'figureAnglesAdjacents(35, 90)', 'figureSymetrie(9, 5)'];
  for (const expr of cas) {
    const svg = appeler(expr);
    assert.ok(!/#[0-9a-fA-F]{3,6}\b/.test(svg), expr + ' : couleur hexadecimale en dur');
    assert.ok(!/\b(?:rgb|hsl)\(/.test(svg), expr + ' : couleur rgb/hsl en dur');
  }
});

/* --- LE TEST CENTRAL : la figure ne ment pas sur le tirage --------------- */

/* Recupere les nombres cotes dans les etiquettes d'une figure, en ignorant les
   graduations d'axe (classe tick-label), qui numerotent la regle et non la
   figure. */
function valeursCotees(svg) {
  const out = [];
  for (const m of svg.matchAll(/<text class="(annotation-label|label-soft)"[^>]*>([\s\S]*?)<\/text>/g)) {
    for (const n of m[2].matchAll(/(\d+(?:\{,\}\d+)?)/g)) {
      out.push(Number(n[1].replace('{,}', '.')));
    }
  }
  return out;
}

/* Les nombres presents dans l'enonce (et son coup de pouce, qui reprend les
   memes donnees). On y cherche chaque valeur cotee. */
function valeursEnoncees(ex) {
  const texte = [ex.statement, ex.hint].join(' ');
  return new Set([...texte.matchAll(/(\d+(?:[.,{,}]+\d+)?)/g)]
    .map(m => Number(String(m[1]).replace(/\{,\}|,/, '.'))).filter(n => !isNaN(n)));
}

/* Les chapitres de 6e qui portent au moins une figure d'exercice. Les cinq
   premiers sont les chapitres de geometrie et de grandeurs, equipes de bout en
   bout ; 6e-multiplication n'y figure que pour sa tache « aire d'un rectangle »,
   la seule tache geometrique d'un chapitre par ailleurs arithmetique. Les
   quatre autres chapitres de 6e (addition-soustraction, division, fractions,
   nombres-decimaux) sont du calcul pur et n'ont volontairement aucune figure. */
const MODULES_6E = [
  '6e-perimetres-aires', '6e-volumes', '6e-angles',
  '6e-figures-geometriques', '6e-symetrie-axiale', '6e-multiplication'
];

test('la figure de chaque exercice tire correspond aux valeurs de son enonce', () => {
  let avecFigure = 0;
  for (const id of MODULES_6E) {
    // Plusieurs graines : chacune tire d'autres valeurs ET d'autres variantes.
    for (const graine of [1, 7, 20260912, 4242]) {
      const { exercices } = chargerModule('js/data/6e/' + id + '.js', { graine, tirages: 8 });
      for (const ex of exercices) {
        if (!ex.figure) continue;
        avecFigure++;
        const cotees = valeursCotees(ex.figure.svg);
        assert.ok(cotees.length, `${id} (graine ${graine}) : figure sans aucune cote`);
        const enoncees = valeursEnoncees(ex);
        for (const v of cotees) {
          assert.ok(enoncees.has(v),
            `${id} (graine ${graine}) : la figure cote ${v}, absent de l enonce ` +
            `« ${ex.statement.replace(/<[^>]*>/g, ' ').slice(0, 110)} » ` +
            `(valeurs de l enonce : ${[...enoncees].join(', ')})`);
        }
      }
    }
  }
  // Garde-fou : un test qui ne rencontrerait aucune figure passerait a vide.
  assert.ok(avecFigure >= 40, 'trop peu d exercices equipes rencontres : ' + avecFigure);
});

test('les figures des exercices de 6e traversent toutes le convertisseur', () => {
  nonMappes.clear();
  for (const id of MODULES_6E) {
    const { module: mod, exercices } = chargerModule('js/data/6e/' + id + '.js',
      { graine: 20260912, tirages: 18 });
    definirOrigine(mod.id);
    exercices.forEach((ex, i) => {
      if (!ex.figure) return;
      const r = preparerFigureExercice(mod, ex, i);
      assert.ok(figureUtilisable(r), `${id} ex${i + 1} : ${r && r.raison}`);
      // Le TikZ produit doit aussi passer le convertisseur de texte sans
      // laisser de caractere non traduit derriere lui.
      versLatex(ex.figure.caption || '');
    });
  }
  assert.equal(nonMappes.size, 0,
    'caracteres non traduits dans les figures : ' + [...nonMappes.keys()].join(' '));
});

test('la notation decimale des cotes est francaise', () => {
  // Bug recurrent du projet : une decimale anglaise (0.75) qui fuit dans une
  // etiquette, ou une accolade fermante oubliee ({, au lieu de {,}).
  const svg = appeler('figureRectangle(12.5, 7)');
  assert.ok(/12\{,\}5/.test(svg), 'la virgule francaise a accolades est attendue');
  assert.ok(!/12\.5/.test(svg), 'aucune decimale anglaise ne doit sortir');
});

/* --- BALAYAGE EXHAUSTIF DU DOMAINE (audit du 2026-09-12) ----------------

   Les tests ci-dessus ECHANTILLONNENT : quelques couples choisis a la main.
   Or ces figures sont PARAMETRIQUES, et les quatre defauts trouves lors de
   l'audit n'apparaissaient chacun que sur une petite partie du domaine —
   invisibles a l'echantillon, bien reels a l'impression. Les tests qui suivent
   balaient donc TOUT le domaine reellement atteignable, celui des rand() des
   generate() qui appellent ces helpers. */

/* Largeur approchee d'une etiquette en unites de viewBox, avec la meme
   convention que la reserve de figures-exercices.js. */
function largeurTexte(t) { return String(t).replace(/\{,\}/g, ',').length * 6.2; }

/* Boite englobante horizontale d'une etiquette, ancrage compris. */
function boiteTexte(svg) {
  return [...svg.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)].map(m => {
    const a = {};
    for (const k of m[1].matchAll(/([\w:-]+)="([^"]*)"/g)) a[k[1]] = k[2];
    const w = largeurTexte(m[2]), x = Number(a.x), y = Number(a.y);
    const anc = a['text-anchor'] || 'start';
    const x1 = anc === 'middle' ? x - w / 2 : anc === 'end' ? x - w : x;
    return { x1, x2: x1 + w, y, txt: m[2] };
  });
}

test('aucune cote ne sort du viewBox, sur tout le domaine tire', () => {
  /* POURQUOI CE TEST EST CRITIQUE : svg2tikz fige la boite TikZ sur le viewBox
     (\useasboundingbox). Une etiquette posee hors du viewBox n'agrandit donc
     PAS la boite : LaTeX ne la voit pas, ne signale aucun Overfull, et elle
     s'imprime par-dessus le texte voisin. Le defaut est totalement silencieux.
     Avant correction, 12 des 89 figures d'exercice du tirage courant
     debordaient, jusqu'a 3,9 mm. */
  const cas = [];
  for (let L = 4; L <= 15; L++) for (let l = 2; l <= L - 1; l++) cas.push(['figureRectangle', L, l]);
  for (let L = 20; L <= 120; L += 3) for (let l = 20; l <= 90; l += 3) cas.push(['figureRectangle', L / 10, l / 10]);
  for (let b = 4; b <= 12; b++) for (let h = 3; h <= 10; h++) cas.push(['figureTriangle', b, h]);
  for (let r = 2; r <= 24; r++) cas.push(['figureDisque', r]);
  for (let c = 5; c <= 20; c++) cas.push(['figureCarre', c]);

  for (const [nom, ...args] of cas) {
    const svg = appeler(`${nom}(${args.join(', ')})`);
    for (const b of boiteTexte(svg)) {
      assert.ok(b.x1 >= -1 && b.x2 <= 261,
        `${nom}(${args.join(',')}) : « ${b.txt} » occupe [${b.x1.toFixed(1)}, ${b.x2.toFixed(1)}] hors du viewBox 0..260`);
    }
  }
});

test('les cotes du pave restent dans le viewBox sur les quatre scenarios', () => {
  // Les scenarios de 6e-volumes : reservoir 40-100 cm de long, etc. C'est le
  // pave le plus large qui pousse « l = ... » hors du cadre a droite.
  const scen = [[[20, 60], [15, 40], [10, 30]], [[30, 80], [20, 40], [20, 50]],
                [[25, 35], [12, 20], [8, 15]], [[40, 100], [20, 50], [15, 40]]];
  let n = 0;
  for (const [Lr, lr, hr] of scen)
    for (let L = Lr[0]; L <= Lr[1]; L += 5)
      for (let l = lr[0]; l <= lr[1]; l += 5)
        for (let h = hr[0]; h <= hr[1]; h += 5) {
          n++;
          for (const svg of [appeler(`figurePave(${L}, ${l}, ${h})`),
                             appeler(`figurePave(${L}, ${l}, ${h}, { hauteurInconnue: true })`)]) {
            for (const b of boiteTexte(svg)) {
              assert.ok(b.x1 >= -1 && b.x2 <= 261,
                `figurePave(${L},${l},${h}) : « ${b.txt} » occupe [${b.x1.toFixed(1)}, ${b.x2.toFixed(1)}]`);
            }
          }
        }
  assert.ok(n > 100, 'balayage trop maigre : ' + n);
});

test('la fuyante du pave dit la vraie profondeur, ou declare sa compression', () => {
  /* LE DEFAUT MODELE : la profondeur etait bornee en silence par
     min(l, max(L, h)). Sur un pave 20x40x30 la fuyante etait dessinee pour
     30 cm alors que l'etiquette annonçait « l = 40 cm » — la figure
     contredisait sa propre cote, sans mention « non a l'echelle ». */
  const cas = [[20, 40, 30], [30, 80, 20], [100, 50, 15], [40, 25, 20], [25, 12, 8], [4, 3, 9]];
  for (const [L, l, h] of cas) {
    const svg = appeler(`figurePave(${L}, ${l}, ${h})`);
    const pts = (/points="([^"]+)"/.exec(svg) || [])[1].trim().split(/\s+/)
      .map(p => p.split(',').map(Number));
    const w = Math.abs(pts[1][0] - pts[0][0]);
    const e = w / L;                                  // echelle de la face avant
    const lignes = [...svg.matchAll(/<line\b[^>]*>/g)].map(m => {
      const a = {}; for (const k of m[0].matchAll(/([\w:-]+)="([^"]*)"/g)) a[k[1]] = k[2]; return a;
    });
    const f = lignes.find(L2 => Math.abs(Math.abs(+L2.x2 - +L2.x1) - Math.abs(+L2.y2 - +L2.y1)) < 0.05
      && Math.abs(+L2.x2 - +L2.x1) > 0.5);
    // Longueur reelle que la fuyante dessinee represente, a l'echelle de la face.
    const lVu = Math.hypot(+f.x2 - +f.x1, +f.y2 - +f.y1) / Math.SQRT2 / 0.7071 / 0.5 / e;
    const comprime = /non a l echelle/.test(svg);
    if (!comprime) {
      assert.ok(Math.abs(lVu - l) < 0.05 * l,
        `figurePave(${L},${l},${h}) : la fuyante montre ${lVu.toFixed(1)} cm pour « l = ${l} cm », sans mention`);
    }
  }
  // Un pave tres plat DOIT porter la mention, et un pave normal ne doit pas.
  assert.ok(/non a l echelle/.test(appeler('figurePave(100, 5, 20)')),
    'une fuyante comprimee doit etre declaree');
  assert.ok(!/non a l echelle/.test(appeler('figurePave(40, 25, 20)')),
    'un pave honnete ne doit pas porter la mention');
});

test('les etiquettes d angle ne se superposent jamais, meme sur un triangle pointu', () => {
  /* Sur l'isocele pointu, les deux bissectrices de base se rejoignaient avant
     le recul fixe de 30 unites : les deux « ? » — les deux angles CHERCHES —
     se posaient au meme endroit (0,06 unite d'ecart a 30 degres au sommet),
     soit un seul glyphe surimprime. La figure ne posait plus sa question. */
  const paires = [];
  for (let a1 = 20; a1 <= 70; a1++) for (let a2 = 20; a2 <= 70; a2++) paires.push([a1, a2, '']);
  for (let s = 20; s <= 101; s++) {
    const sp = (180 - s) % 2 === 0 ? s : s + 1;
    const b = (180 - sp) / 2;
    paires.push([b, b, ", { cherche: 'base' }"]);
  }
  for (const [a1, a2, opt] of paires) {
    const svg = appeler(`figureTriangleAngles(${a1}, ${a2}${opt})`);
    const B = boiteTexte(svg);
    for (let i = 0; i < B.length; i++) for (let j = i + 1; j < B.length; j++) {
      const ox = Math.min(B[i].x2, B[j].x2) - Math.max(B[i].x1, B[j].x1);
      const oy = Math.min(B[i].y + 3, B[j].y + 3) - Math.max(B[i].y - 9, B[j].y - 9);
      assert.ok(!(ox > 1 && oy > 1),
        `figureTriangleAngles(${a1},${a2}${opt}) : « ${B[i].txt} » et « ${B[j].txt} » se chevauchent`);
    }
  }
});

test('la regle graduee porte toujours A, l axe et le symetrique', () => {
  /* Au pas de 2, la graduation partait de `min` sans egard pour la parite des
     trois valeurs utiles : sur figureSymetrie(8, 2), la regle n'affichait que
     des impairs alors que A = 8, l'axe = 2 et la reponse = -4 sont pairs.
     Aucune des trois n'avait de trait — or lire le symetrique sur la regle est
     TOUTE la raison d'etre de cette figure. 7 tirages sur 42 etaient touches. */
  let n = 0;
  for (let k = 2; k <= 8; k++) for (let pv = k + 1; pv <= k + 6; pv++) {
    n++;
    const svg = appeler(`figureSymetrie(${pv}, ${k})`);
    const grad = [...svg.matchAll(/<text class="tick-label"[^>]*>([^<]*)<\/text>/g)].map(m => Number(m[1]));
    for (const [nom, v] of [['A', pv], ['l axe', k], ['le symetrique', 2 * k - pv]]) {
      assert.ok(grad.includes(v),
        `figureSymetrie(${pv}, ${k}) : ${nom} = ${v} n a pas de graduation (regle : ${grad.join(', ')})`);
    }
  }
  assert.equal(n, 42, 'le domaine de 6e-symetrie-axiale compte 42 tirages');
});

test('aucune figure ne divulgue la reponse, sur tout le domaine', () => {
  // Le sommet cherche porte « ? » et jamais un nombre, quel que soit le tirage.
  for (let a1 = 20; a1 <= 70; a1++) for (let a2 = 20; a2 <= 70; a2++) {
    const t = [...appeler(`figureTriangleAngles(${a1}, ${a2})`)
      .matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1]);
    assert.equal(t[2], '?', `figureTriangleAngles(${a1},${a2}) : le 3e sommet porte « ${t[2]} »`);
  }
  // Angles adjacents : le second secteur reste une inconnue.
  for (const [a, tot] of [[10, 90], [45, 90], [80, 90], [20, 180], [90, 180], [160, 180]]) {
    const t = [...appeler(`figureAnglesAdjacents(${a}, ${tot})`)
      .matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1]);
    assert.equal(t[1], '?', `figureAnglesAdjacents(${a},${tot}) : le second angle porte « ${t[1]} »`);
  }
  // Hauteur cherchee : jamais chiffree, sur tout le domaine de 6e-volumes.
  for (let L = 4; L <= 12; L++) for (let l = 3; l <= 10; l++) for (let h = 2; h <= 9; h++) {
    const svg = appeler(`figurePave(${L}, ${l}, ${h}, { hauteurInconnue: true })`);
    assert.ok(/h = \?/.test(svg) && !new RegExp(`h = ${h} cm`).test(svg),
      `figurePave(${L},${l},${h}) hauteurInconnue : la hauteur est chiffree`);
  }
});

test('la notation francaise tient sur tout le domaine decimal de 6e-multiplication', () => {
  // randFloat(2,12,1) x randFloat(2,9,1) : 101 x 71 couples possibles, tous
  // decimaux. Une seule decimale anglaise qui fuit et l'enonce est faux.
  for (let L = 20; L <= 120; L++) for (let l = 20; l <= 90; l += 7) {
    const svg = appeler(`figureRectangle(${L / 10}, ${l / 10})`);
    for (const b of boiteTexte(svg)) {
      assert.ok(!/\d\.\d/.test(b.txt), `figureRectangle(${L / 10},${l / 10}) : decimale anglaise « ${b.txt} »`);
      assert.ok(!/\{,(?!\})/.test(b.txt), `figureRectangle(${L / 10},${l / 10}) : accolade manquante « ${b.txt} »`);
    }
  }
});

test('le champ figure survit a la normalisation du schema', () => {
  // Regression garantie sinon : normaliserExercice reconstruit l'exercice champ
  // par champ, et tout champ oublie disparait SANS erreur.
  const { normaliserExercice } = require('../schema.js');
  const chaine = normaliserExercice({ statement: 'x', solution: [], figure: '<svg viewBox="0 0 1 1"></svg>' });
  assert.ok(chaine.figure && chaine.figure.svg, 'une figure en chaine doit etre acceptee');
  const objet = normaliserExercice({ statement: 'x', solution: [],
    figure: { svg: '<svg viewBox="0 0 1 1"></svg>', caption: 'Le rectangle' } });
  assert.equal(objet.figure.caption, 'Le rectangle');
  assert.equal(normaliserExercice({ statement: 'x', solution: [] }).figure, null);
});
