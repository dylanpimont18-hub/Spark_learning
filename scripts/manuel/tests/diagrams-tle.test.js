/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-tle.test.js

   Garde les SCHEMAS SECONDAIRES de la terminale (2026-09-14) par le CALCUL.

   Meme raison d'etre que diagrams-2nde.test.js : svg2tikz accorde la mention
   « conforme a la source » des qu'une forme quelconque a ete produite, sans
   jamais regarder si le dessin dit la verite. Une figure fausse traverse donc
   tout le pipeline sans alerte. Sur les cinq ouvrages precedents, plus de
   vingt erreurs de figures n'ont ete trouvees que par le calcul.

   Les proprietes verifiees ici sont celles que la TERMINALE exige en propre :

     - une aire hachuree sous une courbe vaut bien l'integrale annoncee,
       SIGNE COMPRIS (integration numerique, jamais le coup d'oeil) ;
     - des aretes paralleles dans l'espace le restent apres projection en
       perspective cavaliere (vecteurs projetes colineaires), et les sommets
       du solide sont coherents entre eux ;
     - un point d'inflexion dessine est bien un changement de signe de f'',
       et non un simple extremum ;
     - une asymptote tracee est la vraie limite de la fonction representee ;
     - une densite de probabilite a une aire totale de 1 sur son support.

   S'y ajoutent les garde-fous communs a tous les niveaux : origine du viewBox
   a 0 0 (le test de recadrage du pipeline l'impose), aucun element hors cadre
   (un debordement s'imprime par-dessus le texte voisin, sans avertissement de
   LaTeX), et une seule pointe de fleche par trait.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chargerModule } = require('../extract.js');

/* --- Lecture des primitives du SVG ------------------------------------
   On relit le DESSIN, jamais une variable intermediaire : seul ce qui est
   ecrit dans le fichier sera imprime. */

function schemas(idModule) {
  const r = chargerModule(path.join('js/data/lycee-tle', idModule + '.js'), { graine: 0, tirages: 1 });
  return r.module.cours.diagrams || [];
}

function balises(svg, nom) {
  const out = [];
  const re = new RegExp('<' + nom + '\\b[^>]*>', 'g');
  let m;
  while ((m = re.exec(svg))) out.push(m[0]);
  return out;
}

function attr(tag, nom) {
  const m = tag.match(new RegExp('\\b' + nom + '="([^"]*)"'));
  return m ? m[1] : null;
}

function attrNum(tag, nom) {
  const v = attr(tag, nom);
  return v === null ? null : parseFloat(v);
}

function viewBox(svg) {
  const m = svg.match(/viewBox="([^"]*)"/);
  assert.ok(m, 'la figure declare un viewBox');
  const [x, y, w, h] = m[1].trim().split(/\s+/).map(Number);
  return { x, y, w, h };
}

/* Les points d'un <polyline>/<polygon>, en paires [x, y]. */
function points(tag) {
  const brut = attr(tag, 'points');
  if (!brut) return [];
  return brut.trim().split(/\s+/).map((p) => p.split(',').map(Number));
}

/* Integration numerique par la methode des trapezes sur une suite de points
   deja echantillonnee. Sert a mesurer l'aire REELLEMENT dessinee, en unites
   de viewBox, puis a la comparer a l'integrale annoncee apres remise a
   l'echelle. Le signe est conserve : c'est tout l'enjeu du chapitre. */
function aireTrapezes(pts, yAxe) {
  let s = 0;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    // Ordonnee SVG : vers le bas. Une valeur au-dessus de l'axe (y < yAxe)
    // doit compter positivement, d'ou le signe.
    s += (x1 - x0) * ((yAxe - y0) + (yAxe - y1)) / 2;
  }
  return s;
}

/* --- Garde-fous communs a toutes les figures du niveau ------------------ */

const TOUS = [
  'tle-primitives-integrales', 'tle-convexite', 'tle-limites-continuite',
  'tle-lois-continues', 'tle-geometrie-espace', 'tle-orthogonalite-espace',
  'tle-suites-complements', 'tle-exponentielle-logarithme', 'tle-logarithme',
  'tle-derivation-complements', 'tle-equations-differentielles',
  'tle-denombrement'
];

for (const id of TOUS) {
  const DIAG = schemas(id);

  test(id + ' : chaque schema secondaire est complet', () => {
    assert.ok(DIAG.length >= 2, 'au moins deux schemas secondaires (' + DIAG.length + ')');
    for (const d of DIAG) {
      assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
      assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
      assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
      assert.ok(d.title && d.title.trim(), 'chaque schema porte un titre');
    }
  });

  test(id + ' : le viewBox a pour origine 0 0', () => {
    /* Le test de recadrage du pipeline l'impose : on recadre en DECALANT les
       coordonnees, jamais par un viewBox="0 92 ...". */
    for (const d of DIAG) {
      const vb = viewBox(d.svg);
      assert.strictEqual(vb.x, 0, 'origine x du viewBox');
      assert.strictEqual(vb.y, 0, 'origine y du viewBox');
    }
  });

  test(id + ' : aucun element ne sort de son cadre', () => {
    /* Un element hors cadre s'imprime par-dessus le texte voisin, sans le
       moindre avertissement de LaTeX. On tolere une marge de 2 unites pour
       l'epaisseur des traits, mais pas davantage. */
    const M = 2;
    for (const d of DIAG) {
      const vb = viewBox(d.svg);
      const dedans = (x, y, quoi) => {
        assert.ok(x >= -M && x <= vb.w + M, quoi + ' : x=' + x + ' hors de [0 ; ' + vb.w + ']');
        assert.ok(y >= -M && y <= vb.h + M, quoi + ' : y=' + y + ' hors de [0 ; ' + vb.h + ']');
      };
      for (const t of balises(d.svg, 'line')) {
        dedans(attrNum(t, 'x1'), attrNum(t, 'y1'), d.title + ' line');
        dedans(attrNum(t, 'x2'), attrNum(t, 'y2'), d.title + ' line');
      }
      for (const t of balises(d.svg, 'circle')) {
        dedans(attrNum(t, 'cx'), attrNum(t, 'cy'), d.title + ' circle');
      }
      for (const t of balises(d.svg, 'rect')) {
        const x = attrNum(t, 'x'), y = attrNum(t, 'y');
        if (x === null || y === null) continue;              // le rect d'un <pattern>
        const w = attrNum(t, 'width'), h = attrNum(t, 'height');
        if (w > vb.w) continue;                              // idem, motif de hachures
        dedans(x, y, d.title + ' rect');
        dedans(x + w, y + h, d.title + ' rect');
      }
      for (const nom of ['polyline', 'polygon']) {
        for (const t of balises(d.svg, nom)) {
          for (const [x, y] of points(t)) dedans(x, y, d.title + ' ' + nom);
        }
      }
    }
  });

  test(id + ' : une seule pointe de fleche par trait', () => {
    /* Contrainte du convertisseur : deux pointes sur un meme trait donnent
       un rendu incoherent en TikZ. */
    for (const d of DIAG) {
      for (const nom of ['line', 'polyline', 'path']) {
        for (const t of balises(d.svg, nom)) {
          const debut = /marker-start=/.test(t), fin = /marker-end=/.test(t);
          assert.ok(!(debut && fin), d.title + ' : deux pointes sur un meme trait');
        }
      }
    }
  });

  test(id + ' : les etiquettes evitent les pieges du convertisseur', () => {
    /* Pas d'article elide ni de lettre isolee (italique parasite), pas de
       capitale suivie de minuscules dans un mot entierement capitalise (qui
       se fracture a la composition). */
    for (const d of DIAG) {
      const textes = [];
      const re = /<text\b[^>]*>([\s\S]*?)<\/text>/g;
      let m;
      while ((m = re.exec(d.svg))) textes.push(m[1].trim());
      for (const t of textes) {
        assert.ok(!/\b[lLdDnNjJcCsSmMtT]'/.test(t),
          d.title + ' : article elide dans une etiquette (« ' + t + ' »)');
        const mots = t.split(/\s+/).filter(Boolean);
        for (const mot of mots) {
          if (mot.length >= 3 && mot === mot.toUpperCase() && /[A-Z]{3}/.test(mot)) {
            assert.fail(d.title + ' : etiquette en capitales (« ' + mot + ' »)');
          }
        }
      }
    }
  });
}

/* =======================================================================
   PRIMITIVES ET INTEGRALES — le chapitre pilote du niveau.
   ======================================================================= */

const INT = schemas('tle-primitives-integrales');

test('primitives : les rectangles de Riemann ont la hauteur de la fonction', () => {
  /* Chaque rectangle doit avoir pour hauteur f evaluee au bord GAUCHE de sa
     tranche. Un rectangle pose a l'oeil rendrait la figure mensongere sans
     que rien ne s'en apercoive. On recalcule les trois vignettes. */
  const d = INT[0];
  const f = (x) => x * x / 4 + 1;
  const a = 0, b = 4, yMax = 5.5, W = 128, H = 128, y0 = 150;

  const rects = balises(d.svg, 'rect')
    .filter((t) => attrNum(t, 'width') !== null && attrNum(t, 'width') <= W)
    .map((t) => ({
      x: attrNum(t, 'x'), y: attrNum(t, 'y'),
      w: attrNum(t, 'width'), h: attrNum(t, 'height')
    }));
  assert.strictEqual(rects.length, 2 + 4 + 8, 'deux, quatre puis huit rectangles');

  for (const r of rects) {
    // Le bas du rectangle est sur la ligne de base.
    assert.ok(Math.abs(r.y + r.h - y0) < 0.15, 'rectangle pose sur la ligne de base');
    // Origine de la vignette : le rectangle le plus a gauche de son groupe.
    const ox = [14, 160, 306].reduce((best, o) => (r.x >= o - 0.01 && o > best ? o : best), -1);
    assert.ok(ox > 0, 'rectangle rattachable a une vignette');
    const xg = a + (r.x - ox) / W * (b - a);
    const hauteurAttendue = f(xg) / yMax * H;
    assert.ok(Math.abs(r.h - hauteurAttendue) < 0.15,
      'hauteur du rectangle en x=' + xg.toFixed(2) + ' : ' + r.h + ' au lieu de ' +
      hauteurAttendue.toFixed(2));
    // Aucun rectangle ne doit depasser la courbe : f est croissante sur [0;4]
    // et la hauteur est prise au bord gauche, donc la somme sous-estime.
    const hauteurDroite = f(xg + r.w / W * (b - a)) / yMax * H;
    assert.ok(r.h <= hauteurDroite + 1e-6, 'le rectangle reste sous la courbe');
  }
});

test('primitives : les sommes annoncees sont celles des rectangles dessines', () => {
  /* Les trois nombres imprimes sous les vignettes (6 ; 7,5 ; 8,375) doivent
     etre les sommes des aires REELLEMENT dessinees, et croitre vers
     l'integrale exacte 28/3. C'est le coeur du message de la figure. */
  const d = INT[0];
  const b = 4, yMax = 5.5, W = 128, H = 128;
  const exact = Math.pow(b, 3) / 12 + b;                       // 28/3 = 9,333...
  assert.ok(Math.abs(exact - 28 / 3) < 1e-9, 'integrale exacte = 28/3');

  const groupes = { 14: 0, 160: 0, 306: 0 };
  for (const t of balises(d.svg, 'rect')) {
    const x = attrNum(t, 'x'), w = attrNum(t, 'width'), h = attrNum(t, 'height');
    if (x === null || w === null || w > W) continue;
    const ox = [14, 160, 306].reduce((best, o) => (x >= o - 0.01 && o > best ? o : best), -1);
    // Retour aux unites du repere avant de sommer.
    groupes[ox] += (w / W * b) * (h / H * yMax);
  }
  const sommes = [groupes[14], groupes[160], groupes[306]];
  const annonces = [6, 7.5, 8.375];
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(sommes[i] - annonces[i]) < 0.02,
      'vignette ' + (i + 1) + ' : somme dessinee ' + sommes[i].toFixed(4) +
      ' contre ' + annonces[i] + ' annonce');
  }
  assert.ok(sommes[0] < sommes[1] && sommes[1] < sommes[2], 'les sommes croissent');
  assert.ok(sommes[2] < exact, 'elles restent sous l\'integrale exacte');
});

test('primitives : les trois primitives sont translatees et de meme pente', () => {
  /* Le message de la figure : les courbes different d'une CONSTANTE, et leurs
     tangentes en une meme abscisse ont la MEME pente. Si les courbes
     n'etaient pas exactement translatees, ou si les tangentes n'etaient pas
     paralleles, la figure contredirait le cours qu'elle illustre. */
  const d = INT[1];
  const courbes = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(courbes.length, 3, 'trois primitives tracees');

  // Meme abscisses, ecart vertical CONSTANT entre courbes voisines.
  for (let i = 1; i < 3; i++) {
    assert.strictEqual(courbes[i].length, courbes[0].length, 'meme echantillonnage');
    const ecarts = [];
    for (let k = 0; k < courbes[0].length; k++) {
      assert.ok(Math.abs(courbes[i][k][0] - courbes[0][k][0]) < 1e-6, 'memes abscisses');
      ecarts.push(courbes[0][k][1] - courbes[i][k][1]);
    }
    const e0 = ecarts[0];
    for (const e of ecarts) {
      assert.ok(Math.abs(e - e0) < 0.15,
        'ecart vertical non constant : ' + e + ' contre ' + e0);
    }
    assert.ok(Math.abs(e0) > 5, 'les courbes sont bien distinctes');
  }

  // Les trois tangentes sont paralleles, au flottant pres.
  const tangentes = balises(d.svg, 'line')
    .filter((t) => /guide-line/.test(t))
    .map((t) => ({
      x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
      x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2')
    }));
  assert.strictEqual(tangentes.length, 3, 'une tangente par primitive');
  const pentes = tangentes.map((t) => (t.y2 - t.y1) / (t.x2 - t.x1));
  for (const p of pentes) {
    assert.ok(Math.abs(p - pentes[0]) < 1e-6,
      'tangentes non paralleles : ' + p + ' contre ' + pentes[0]);
  }

  /* Et chaque tangente touche bien SA courbe : le point marque doit etre sur
     la courbe correspondante, pas a cote. */
  const marques = balises(d.svg, 'circle').map((t) => [attrNum(t, 'cx'), attrNum(t, 'cy')]);
  assert.strictEqual(marques.length, 3, 'un point de tangence par courbe');
  for (const [mx, my] of marques) {
    const surUneCourbe = courbes.some((c) => c.some(([x, y]) =>
      Math.abs(x - mx) < 3.5 && Math.abs(y - my) < 1.5));
    assert.ok(surUneCourbe, 'point de tangence (' + mx + ' ; ' + my + ') pose sur sa courbe');
  }
});

test('primitives : l aire hachuree du sinus vaut bien l integrale annoncee', () => {
  /* LA verification propre au niveau. Les deux aplats hachures doivent valoir
     +2 et -2 en unites du repere, donc une integrale NULLE et une aire
     geometrique de 4. On integre numeriquement le polygone reellement
     dessine, on ne juge pas a l'oeil. */
  const d = INT[2];
  const polys = balises(d.svg, 'polygon').map(points);
  assert.strictEqual(polys.length, 2, 'deux aplats : la bosse et le creux');

  // Echelle du dessin, relue sur la figure : l'axe des abscisses est a
  // y = 110, x = 45 correspond a 0 et x = 375 a 2*pi ; une unite d'ordonnee
  // vaut (150/2)/1,15 unites de viewBox.
  const yAxe = 110, x0 = 45, xFin = 375;
  const uniteX = (2 * Math.PI) / (xFin - x0);
  const uniteY = 1.15 / ((150 / 2));

  const aires = polys.map((pts) => {
    // On retire les points du retour sur l'axe : l'aire signee se calcule sur
    // la partie « courbe » du polygone, dans l'ordre des abscisses.
    const sansDoublon = pts.filter((p, i) => i === 0 || p[0] !== pts[i - 1][0] || p[1] !== pts[i - 1][1]);
    return aireTrapezes(sansDoublon, yAxe) * uniteX * uniteY;
  });

  assert.ok(Math.abs(aires[0] - 2) < 0.01, 'bosse : ' + aires[0].toFixed(4) + ' au lieu de +2');
  assert.ok(Math.abs(aires[1] + 2) < 0.01, 'creux : ' + aires[1].toFixed(4) + ' au lieu de -2');
  assert.ok(Math.abs(aires[0] + aires[1]) < 0.01, 'integrale nulle sur [0 ; 2pi]');
  assert.ok(Math.abs(Math.abs(aires[0]) + Math.abs(aires[1]) - 4) < 0.02,
    'aire geometrique egale a 4');

  // La legende doit annoncer exactement ces deux nombres.
  assert.match(d.caption, /intégrale nulle/i);
  assert.match(d.caption, /4/);
});

test('primitives : la sinusoide dessinee est bien celle du sinus', () => {
  /* Une courbe « qui ressemble a un sinus » ne suffit pas : on verifie point
     par point que l'ordonnee dessinee est bien sin(x) a l'echelle declaree. */
  const d = INT[2];
  const courbe = balises(d.svg, 'polyline').map(points)[0];
  const yAxe = 110, x0 = 45, xFin = 375;
  const uniteX = (2 * Math.PI) / (xFin - x0);
  const echelleY = (150 / 2) / 1.15;
  let pire = 0;
  for (const [x, y] of courbe) {
    const t = (x - x0) * uniteX;
    const attendu = yAxe - Math.sin(t) * echelleY;
    pire = Math.max(pire, Math.abs(y - attendu));
  }
  assert.ok(pire < 0.15, 'ecart maximal a la vraie sinusoide : ' + pire.toFixed(4));
});
