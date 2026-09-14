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

/* Chapitres SANS schema secondaire, et c'est un choix documente, pas un
   oubli. Le cahier des charges est explicite : « une figure par malentendu,
   pas une figure par formule », et « on n'ajoute pas de figure pour faire du
   chiffre ».

   tle-denombrement : ses malentendus sont de nature LOGIQUE — l'ordre
   compte-t-il, peut-on repeter — et non geometrique. Ils se traitent par
   l'enumeration exhaustive d'un petit cas (trois coureurs, deux places), pas
   par un dessin. Le brief du niveau le classait d'ailleurs parmi les
   chapitres les moins demandeurs en figures.

   Une entree ici doit TOUJOURS etre justifiee en commentaire : sans cela,
   la liste deviendrait une porte de sortie commode pour un chapitre qu'on
   n'a pas eu le temps d'illustrer. */
const SANS_SCHEMA = new Set(['tle-denombrement']);

for (const id of TOUS) {
  const DIAG = schemas(id);

  test(id + ' : chaque schema secondaire est complet', () => {
    if (SANS_SCHEMA.has(id)) {
      assert.strictEqual(DIAG.length, 0,
        id + ' est declare sans schema secondaire, mais en porte ' + DIAG.length +
        ' — retirer le module de SANS_SCHEMA plutot que de laisser les deux etats coexister');
      return;
    }
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

/* =======================================================================
   CHAPITRES CONFIES AUX SESSIONS PARALLELES — verifications ajoutees le
   2026-09-14 par la session qui coordonne le niveau.

   Les schemas de ces chapitres ont ete ecrits par d'autres sessions, et
   livres SANS test de calcul propre : seuls les garde-fous communs
   (viewBox, debordement, fleches, etiquettes) les couvraient. Or ce sont
   precisement les proprietes MATHEMATIQUES qu'aucun garde-fou generique ne
   regarde, et c'est par elles que plus de vingt erreurs de figures ont ete
   trouvees sur les ouvrages precedents.

   On verifie donc ici, par le calcul, les deux affirmations les plus
   couteuses du niveau : qu'une densite de probabilite a bien une aire totale
   de 1, et qu'un point d'inflexion dessine est bien un changement de signe de
   la derivee seconde et non un simple extremum.
   ======================================================================= */

const LOIS = schemas('tle-lois-continues');

test('lois continues : la densite uniforme a une aire totale de 1', () => {
  /* LA verification propre au chapitre. L'eleve confond densite et
     probabilite, et une figure qui montrerait une densite d'aire differente
     de 1 installerait la confusion au lieu de la lever.

     On relit l'echelle sur le DESSIN : le palier va de l'origine du repere a
     l'abscisse 10, et sa hauteur vaut 0,1 par construction d'une loi uniforme
     sur [0 ; 10]. L'aire dessinee doit alors valoir 1. */
  const d = LOIS[0];
  const palier = balises(d.svg, 'line')
    .filter((t) => /curve-main/.test(t))
    .map((t) => ({ x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
                   x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2') }))
    .find((s) => Math.abs(s.y1 - s.y2) < 0.01);
  assert.ok(palier, 'la densite uniforme est un palier horizontal');

  const axes = balises(d.svg, 'line').filter((t) => /class="axis"/.test(t))
    .map((t) => ({ x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
                   x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2') }));
  const horizontal = axes.find((s) => Math.abs(s.y1 - s.y2) < 0.01);
  const vertical = axes.find((s) => Math.abs(s.x1 - s.x2) < 0.01);
  assert.ok(horizontal && vertical, 'un axe horizontal et un axe vertical');

  const y0 = horizontal.y1, xOrigine = vertical.x1;
  // Le palier part de l'origine du repere et court jusqu'a l'abscisse 10.
  assert.ok(Math.abs(palier.x1 - xOrigine) < 0.5,
    'le palier demarre a l origine du repere');
  const echelleX = (palier.x2 - palier.x1) / 10;      // support [0 ; 10]
  const hauteurPix = y0 - palier.y1;
  const echelleY = hauteurPix / 0.1;                  // hauteur 0,1
  const aireTotale = ((palier.x2 - palier.x1) / echelleX) * (hauteurPix / echelleY);
  assert.ok(Math.abs(aireTotale - 1) < 0.005,
    'aire totale sous la densite : ' + aireTotale.toFixed(6) + ' au lieu de 1');
});

test('lois continues : l aire hachuree vaut la probabilite annoncee', () => {
  /* Le rectangle hachure doit valoir 0,4 — soit P(2 <= X <= 6) pour une loi
     uniforme sur [0 ; 10] — et s'appuyer exactement sur l'axe et sur le
     palier. Un rectangle qui flotterait entre les deux ferait mentir la
     figure sans qu'aucun controle ne le dise. */
  const d = LOIS[0];
  const rects = balises(d.svg, 'rect')
    .filter((t) => /url\(#/.test(t))
    .map((t) => ({ x: attrNum(t, 'x'), y: attrNum(t, 'y'),
                   w: attrNum(t, 'width'), h: attrNum(t, 'height') }))
    .filter((r) => r.x !== null && r.w > 20);
  assert.strictEqual(rects.length, 1, 'un seul aplat hachure');
  const r = rects[0];

  const lignes = balises(d.svg, 'line');
  const palier = lignes.filter((t) => /curve-main/.test(t))
    .map((t) => ({ x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
                   x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2') }))
    .find((s) => Math.abs(s.y1 - s.y2) < 0.01);
  const y0 = lignes.filter((t) => /class="axis"/.test(t))
    .map((t) => ({ y1: attrNum(t, 'y1'), y2: attrNum(t, 'y2') }))
    .find((s) => Math.abs(s.y1 - s.y2) < 0.01).y1;

  assert.ok(Math.abs(r.y - palier.y1) < 0.05,
    'le haut du rectangle doit coincider avec le palier de densite');
  assert.ok(Math.abs(r.y + r.h - y0) < 0.05,
    'le bas du rectangle doit reposer sur l axe des abscisses');

  const echelleX = (palier.x2 - palier.x1) / 10;
  const echelleY = (y0 - palier.y1) / 0.1;
  const aire = (r.w / echelleX) * (r.h / echelleY);
  assert.ok(Math.abs(aire - 0.4) < 0.005,
    'aire hachuree : ' + aire.toFixed(6) + ' au lieu de 0,4');
});

const CONVEX = schemas('tle-convexite');

test('convexite : le point d inflexion est un changement de signe de f seconde', () => {
  /* LA verification propre au chapitre, et la plus facile a rater : une
     figure qui dessinerait un simple extremum en l'appelant point
     d'inflexion serait indetectable a l'oeil.

     Les deux vignettes opposent x^3 (inflexion en 0) et x^2 (minimum en 0).
     On verifie sur les points REELLEMENT traces que la premiere courbe passe
     de part et d'autre de sa tangente horizontale, et que la seconde reste
     du meme cote. C'est la traduction geometrique exacte du changement de
     signe de la derivee seconde. */
  const d = CONVEX[0];
  const courbes = balises(d.svg, 'polyline')
    .filter((t) => /curve-main/.test(t)).map(points);
  assert.strictEqual(courbes.length, 2, 'deux courbes comparees');

  const tangentes = balises(d.svg, 'line')
    .filter((t) => /guide-line/.test(t))
    .map((t) => ({ x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
                   x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2') }));
  assert.strictEqual(tangentes.length, 2, 'une tangente par courbe');
  for (const t of tangentes) {
    assert.ok(Math.abs(t.y1 - t.y2) < 0.01, 'les deux tangentes sont horizontales');
  }

  // Chaque courbe est rapprochee de la tangente qui la recouvre en abscisse.
  for (let i = 0; i < 2; i++) {
    const c = courbes[i];
    const xMin = Math.min.apply(null, c.map((p) => p[0]));
    const t = tangentes.find((g) => Math.min(g.x1, g.x2) <= xMin + 6 &&
                                    Math.max(g.x1, g.x2) >= xMin);
    assert.ok(t, 'chaque courbe a sa tangente');
    // Signe de l'ecart courbe - tangente, de part et d'autre du point marque.
    const ecarts = c.map((p) => p[1] - t.y1);
    const negatifs = ecarts.filter((e) => e < -1).length;
    const positifs = ecarts.filter((e) => e > 1).length;
    if (i === 0) {
      // x^3 : la courbe TRAVERSE, donc elle est des deux cotes.
      assert.ok(negatifs > 5 && positifs > 5,
        'la premiere courbe doit traverser sa tangente (points au-dessus : ' +
        positifs + ', en dessous : ' + negatifs + ')');
    } else {
      // x^2 : la courbe REBONDIT, donc elle reste d'un seul cote.
      assert.ok(negatifs < 2 || positifs < 2,
        'la seconde courbe doit rester du meme cote de sa tangente (au-dessus : ' +
        positifs + ', en dessous : ' + negatifs + ')');
    }
  }
});

/* =======================================================================
   CONVEXITE, LIMITES ET CONTINUITE, SUITES (complements), LOIS CONTINUES
   — bloc ajoute le 2026-09-14, a la suite du chapitre pilote.

   Meme exigence que ci-dessus : on relit le DESSIN et on recalcule, on ne
   fait jamais confiance a l'allure. Les proprietes verifiees ici sont celles
   que ces quatre chapitres engagent en propre, et qu'une figure fausse
   contredirait sans qu'aucune autre verification ne s'en apercoive :

     - convexite : le point d'inflexion dessine est bien un CHANGEMENT DE
       SIGNE de f'' (et pas un simple extremum), et la tangente y TRAVERSE
       reellement la courbe ;
     - limites : les asymptotes tracees sont les VRAIES limites de la
       fonction representee, et le zoom montre bien la meme fonction que la
       vue d'ensemble ;
     - suites : les termes traces sont bien ceux de la suite annoncee, et le
       chemin en escalier est bien celui de la relation de recurrence ;
     - lois continues : la densite dessinee a une AIRE TOTALE DE 1 sur son
       support, et l'aire hachuree vaut la probabilite annoncee (integration
       numerique dans les deux cas).
   ======================================================================= */

/* Integration de Simpson sur une fonction continue. Sert a mesurer une aire
   ANNONCEE par une figure, independamment de la facon dont elle est
   dessinee. */
function simpson(f, a, b, n) {
  if (n % 2) n++;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return s * h / 3;
}

/* --- CONVEXITE --------------------------------------------------------- */

const CVX = schemas('tle-convexite');

test('convexite : le point marque a gauche est une inflexion, celui de droite un extremum', () => {
  /* LA verification du chapitre. La premiere figure oppose deux tangentes
     horizontales : a gauche elle doit TRAVERSER la courbe (f'' change de
     signe), a droite non (f'' garde son signe). Une figure qui se
     tromperait de cote enseignerait exactement l'erreur qu'elle pretend
     corriger. */
  const d = CVX[0];
  const courbes = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(courbes.length, 2, 'deux courbes : le cube et le carre');

  // Les deux tangentes sont les traits « guide-line », et elles doivent
  // etre HORIZONTALES (tangente en un point a derivee nulle).
  const tangentes = balises(d.svg, 'line')
    .filter((t) => /guide-line/.test(t))
    .map((t) => ({
      x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
      x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2')
    }));
  assert.strictEqual(tangentes.length, 2, 'une tangente par vignette');
  for (const t of tangentes) {
    assert.ok(Math.abs(t.y1 - t.y2) < 1e-9, 'tangente horizontale');
  }

  /* Pour chaque vignette : on regarde de quel cote de la tangente se trouve
     la courbe, a gauche puis a droite du point de contact. Une TRAVERSEE se
     lit comme un changement de signe de cet ecart. */
  const traverse = (courbe, yTangente, xContact) => {
    let gauche = 0, droite = 0;
    for (const [x, y] of courbe) {
      // Ordonnee SVG vers le bas : « au-dessus de la tangente » est y < yT.
      const ecart = yTangente - y;
      if (x < xContact - 12) gauche = ecart;
      if (x > xContact + 12 && droite === 0) droite = ecart;
    }
    assert.ok(gauche !== 0 && droite !== 0, 'ecarts mesurables des deux cotes');
    return gauche * droite < 0;
  };

  // Les points marques donnent les abscisses de contact.
  const marques = balises(d.svg, 'circle').map((t) => [attrNum(t, 'cx'), attrNum(t, 'cy')]);
  assert.strictEqual(marques.length, 2, 'un point marque par vignette');

  // Vignette de gauche (cube) : la tangente TRAVERSE.
  assert.ok(traverse(courbes[0], tangentes[0].y1, marques[0][0]),
    'vignette gauche : la tangente doit traverser la courbe (point inflexion)');
  // Vignette de droite (carre) : la tangente NE traverse PAS.
  assert.ok(!traverse(courbes[1], tangentes[1].y1, marques[1][0]),
    'vignette droite : la tangente ne doit PAS traverser la courbe (extremum)');

  // Et chaque point marque est bien pose sur sa courbe.
  for (let i = 0; i < 2; i++) {
    const [mx, my] = marques[i];
    const proche = courbes[i].some(([x, y]) => Math.abs(x - mx) < 3.5 && Math.abs(y - my) < 1.5);
    assert.ok(proche, 'point marque pose sur sa courbe (vignette ' + (i + 1) + ')');
  }
});

test('convexite : la derivee seconde de x^4 dessinee ne devient jamais negative', () => {
  /* Le message de la deuxieme figure : f'' TOUCHE zero sans le traverser.
     Si la courbe du bas passait sous son axe, ne serait-ce que d'une unite,
     la figure affirmerait le contraire de ce qu'elle explique. */
  const d = CVX[1];
  const courbes = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(courbes.length, 2, 'la fonction et sa derivee seconde');

  // L'axe du repere du bas est la ligne « axis » horizontale la plus basse.
  const axesH = balises(d.svg, 'line')
    .filter((t) => /class="axis"/.test(t))
    .filter((t) => Math.abs(attrNum(t, 'y1') - attrNum(t, 'y2')) < 1e-9)
    .map((t) => attrNum(t, 'y1'))
    .sort((a, b) => a - b);
  assert.ok(axesH.length >= 2, 'deux axes horizontaux (haut et bas)');
  const axeBas = axesH[axesH.length - 1];

  const derivee = courbes[1];
  for (const [, y] of derivee) {
    // Vers le bas : « en dessous de l'axe » serait y > axeBas.
    assert.ok(y <= axeBas + 1e-6,
      'la derivee seconde dessinee passe sous son axe (y=' + y + ' contre ' + axeBas + ')');
  }

  // Elle doit TOUCHER l'axe exactement une fois, en son minimum.
  const minY = Math.max(...derivee.map(([, y]) => y));
  assert.ok(Math.abs(minY - axeBas) < 0.15,
    'la derivee seconde doit toucher son axe (ecart ' + (axeBas - minY).toFixed(3) + ')');

  /* Et la forme dessinee est bien 12x^2 a l'echelle declaree : on verifie
     que la courbe est symetrique par rapport a son minimum. */
  const n = derivee.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    assert.ok(Math.abs(derivee[i][1] - derivee[n - 1 - i][1]) < 0.15,
      'derivee seconde non symetrique au rang ' + i);
  }
});

test('convexite : les tangentes restent du bon cote de chaque courbe', () => {
  /* Troisieme figure : a gauche (convexe) les deux tangentes sont SOUS la
     courbe partout, a droite (concave) AU-DESSUS partout. C'est la
     caracterisation meme de la convexite : une inversion rendrait la figure
     mensongere. */
  const d = CVX[2];
  const courbes = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(courbes.length, 2, 'une courbe par vignette');

  const tangentes = balises(d.svg, 'line')
    .filter((t) => /guide-line/.test(t))
    .map((t) => ({
      x1: attrNum(t, 'x1'), y1: attrNum(t, 'y1'),
      x2: attrNum(t, 'x2'), y2: attrNum(t, 'y2')
    }));
  assert.strictEqual(tangentes.length, 4, 'deux tangentes par vignette');

  // Ordonnee de la courbe a une abscisse donnee, par interpolation lineaire.
  const surCourbe = (courbe, x) => {
    for (let i = 1; i < courbe.length; i++) {
      const [xa, ya] = courbe[i - 1], [xb, yb] = courbe[i];
      if (x >= xa && x <= xb) return ya + (yb - ya) * (x - xa) / (xb - xa);
    }
    return null;
  };

  for (let k = 0; k < 4; k++) {
    const t = tangentes[k];
    const courbe = courbes[k < 2 ? 0 : 1];
    const convexe = k < 2;
    let verifies = 0;
    for (let p = 0; p <= 10; p++) {
      const x = t.x1 + (t.x2 - t.x1) * p / 10;
      const yT = t.y1 + (t.y2 - t.y1) * p / 10;
      const yC = surCourbe(courbe, x);
      if (yC === null) continue;
      verifies++;
      /* Ordonnee SVG vers le bas. « La tangente est SOUS la courbe » se lit
         donc yT >= yC. On tolere un dixieme d'unite au point de contact. */
      if (convexe) {
        assert.ok(yT >= yC - 0.1,
          'tangente convexe passee au-dessus de la courbe en x=' + x.toFixed(1));
      } else {
        assert.ok(yT <= yC + 0.1,
          'tangente concave passee sous la courbe en x=' + x.toFixed(1));
      }
    }
    assert.ok(verifies >= 8, 'assez de points compares sur la tangente ' + k);
  }
});

/* --- LIMITES ET CONTINUITE --------------------------------------------- */

const LIM = schemas('tle-limites-continuite');

test('limites : les asymptotes tracees sont les vraies limites de la fonction', () => {
  /* LA verification du chapitre. La fonction representee est
     f(x) = 2 + 3/(x-1) : l'asymptote verticale doit etre a x = 1 et
     l'horizontale a y = 2, aux echelles declarees. Une asymptote posee a
     l'oeil enseignerait une limite fausse. */
  const d = LIM[0];
  const f = (x) => 2 + 3 / (x - 1);

  // Echelle relue sur la figure : x de -3 a 5 sur [40 ; 380], y de -4 a 8
  // sur [26 ; 246].
  const xMin = -3, xMax = 5, X0 = 40, W = 340;
  const yMin = -4, yMax = 8, Y0 = 26, H = 220;
  const Y = (y) => Y0 + (yMax - y) / (yMax - yMin) * H;

  const focus = balises(d.svg, 'line').filter((t) => /focus-line/.test(t));
  assert.strictEqual(focus.length, 2, 'deux asymptotes tracees');

  const verticale = focus.find((t) => Math.abs(attrNum(t, 'x1') - attrNum(t, 'x2')) < 1e-9);
  const horizontale = focus.find((t) => Math.abs(attrNum(t, 'y1') - attrNum(t, 'y2')) < 1e-9);
  assert.ok(verticale && horizontale, 'une verticale et une horizontale');

  // L'asymptote verticale est au pole de f, donc en x = 1.
  const xAsym = xMin + (attrNum(verticale, 'x1') - X0) / W * (xMax - xMin);
  assert.ok(Math.abs(xAsym - 1) < 0.02,
    'asymptote verticale dessinee en x=' + xAsym.toFixed(3) + ' au lieu de 1');
  // Et f y explose bien : on verifie de part et d'autre.
  assert.ok(f(xAsym + 0.001) > 1000, 'f explose a droite du pole');
  assert.ok(f(xAsym - 0.001) < -1000, 'f explose a gauche du pole');

  // L'asymptote horizontale est la limite en l'infini, donc y = 2.
  const yAsym = yMax - (attrNum(horizontale, 'y1') - Y0) / H * (yMax - yMin);
  assert.ok(Math.abs(yAsym - 2) < 0.02,
    'asymptote horizontale dessinee en y=' + yAsym.toFixed(3) + ' au lieu de 2');
  assert.ok(Math.abs(f(1e7) - yAsym) < 0.001, 'f tend bien vers cette hauteur en +infini');
  assert.ok(Math.abs(f(-1e7) - yAsym) < 0.001, 'f tend bien vers cette hauteur en -infini');

  // Les deux branches dessinees suivent reellement f.
  const branches = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(branches.length, 2, 'deux branches separees par le pole');
  let pire = 0;
  for (const branche of branches) {
    for (const [px, py] of branche) {
      const x = xMin + (px - X0) / W * (xMax - xMin);
      pire = Math.max(pire, Math.abs(py - Y(f(x))));
    }
  }
  assert.ok(pire < 0.2, 'ecart maximal a la vraie courbe : ' + pire.toFixed(4));
});

test('limites : le trou et le saut sont a la bonne hauteur', () => {
  /* Deuxieme figure : a gauche la limite existe (4) mais la valeur manque ;
     a droite la valeur existe mais les deux limites laterales different.
     Les deux cercles evides doivent etre poses aux bonnes ordonnees, sinon
     la figure raconte autre chose que sa legende. */
  const d = LIM[1];

  // Vignette de gauche : la droite y = x + 2, percee en x = 2.
  const morceaux = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(morceaux.length, 2, 'la droite percee, en deux morceaux');
  // Les deux morceaux sont alignes : meme pente, et le trou est sur leur
  // prolongement commun.
  const pente = (p) => (p[p.length - 1][1] - p[0][1]) / (p[p.length - 1][0] - p[0][0]);
  assert.ok(Math.abs(pente(morceaux[0]) - pente(morceaux[1])) < 1e-6,
    'les deux morceaux ne sont pas alignes');

  const cerclesG = balises(d.svg, 'circle')
    .map((t) => ({ cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy'), vide: /fill="none"/.test(t) }))
    .filter((c) => c.cx < 220);
  assert.strictEqual(cerclesG.length, 1, 'un seul point marque a gauche : le trou');
  assert.ok(cerclesG[0].vide, 'le trou doit etre un cercle EVIDE');

  // Le trou est sur le prolongement : on extrapole le premier morceau.
  const m0 = morceaux[0];
  const a = pente(m0);
  const attendu = m0[0][1] + a * (cerclesG[0].cx - m0[0][0]);
  assert.ok(Math.abs(cerclesG[0].cy - attendu) < 1.2,
    'le trou n est pas sur le prolongement de la droite (' +
    cerclesG[0].cy + ' contre ' + attendu.toFixed(2) + ')');

  // Vignette de droite : deux paliers HORIZONTAUX a des hauteurs
  // DIFFERENTES, un cercle vide en bas et un plein en haut.
  const paliers = balises(d.svg, 'line')
    .filter((t) => /graph-line/.test(t))
    .filter((t) => Math.abs(attrNum(t, 'y1') - attrNum(t, 'y2')) < 1e-9)
    .filter((t) => attrNum(t, 'x1') > 220);
  assert.strictEqual(paliers.length, 2, 'deux paliers a droite');
  const h1 = attrNum(paliers[0], 'y1'), h2 = attrNum(paliers[1], 'y1');
  assert.ok(Math.abs(h1 - h2) > 20, 'les deux paliers doivent etre nettement separes (le saut)');

  const cerclesD = balises(d.svg, 'circle')
    .map((t) => ({ cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy'), vide: /fill="none"/.test(t) }))
    .filter((c) => c.cx > 220);
  assert.strictEqual(cerclesD.length, 2, 'deux points marques a droite');
  assert.strictEqual(cerclesD.filter((c) => c.vide).length, 1, 'exactement un cercle evide');
  assert.strictEqual(cerclesD.filter((c) => !c.vide).length, 1, 'exactement un cercle plein');
  // Chacun est pose sur un palier, et les deux ne sont pas sur le meme.
  const hauteurs = [h1, h2].sort((x, y) => x - y);
  const posesSur = cerclesD.map((c) =>
    hauteurs.findIndex((h) => Math.abs(h - c.cy) < 1.5));
  assert.ok(posesSur.every((i) => i >= 0), 'chaque cercle est pose sur un palier');
  assert.notStrictEqual(posesSur[0], posesSur[1], 'les deux cercles sont sur des paliers differents');
});

test('limites : le zoom montre bien la meme fonction que la vue de loin', () => {
  /* Troisieme figure : deux vignettes de la MEME fonction x + 2, a deux
     echelles. Si la vignette zoomee ne suivait pas la meme loi, la figure
     ferait croire que zoomer change la fonction. */
  const d = LIM[2];
  const courbes = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(courbes.length, 4, 'deux morceaux par vignette');

  // Vignette 1 : x de 0 a 4 sur [42 ; 202], y de 0 a 6 sur [30 ; 180].
  const v1 = { X0: 42, W: 160, x0: 0, x1: 4, Y0: 30, H: 150, y0: 0, y1: 6 };
  // Vignette 2 : x de 1,9 a 2,1 sur [252 ; 412], y de 3,9 a 4,1.
  const v2 = { X0: 252, W: 160, x0: 1.9, x1: 2.1, Y0: 30, H: 150, y0: 3.9, y1: 4.1 };
  const g = (x) => x + 2;

  const controle = (courbe, v) => {
    let pire = 0;
    for (const [px, py] of courbe) {
      const x = v.x0 + (px - v.X0) / v.W * (v.x1 - v.x0);
      const yAttendu = v.Y0 + (v.y1 - g(x)) / (v.y1 - v.y0) * v.H;
      pire = Math.max(pire, Math.abs(py - yAttendu));
    }
    return pire;
  };

  assert.ok(controle(courbes[0], v1) < 0.2, 'vignette de loin, morceau gauche');
  assert.ok(controle(courbes[1], v1) < 0.2, 'vignette de loin, morceau droit');
  assert.ok(controle(courbes[2], v2) < 0.2, 'vignette zoomee, morceau gauche');
  assert.ok(controle(courbes[3], v2) < 0.2, 'vignette zoomee, morceau droit');

  // Le trou de la vignette zoomee est bien a la hauteur 4.
  const trouZoom = balises(d.svg, 'circle')
    .map((t) => ({ cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy') }))
    .find((c) => c.cx > 250);
  assert.ok(trouZoom, 'un trou marque dans la vignette zoomee');
  const yQuatre = v2.Y0 + (v2.y1 - 4) / (v2.y1 - v2.y0) * v2.H;
  assert.ok(Math.abs(trouZoom.cy - yQuatre) < 1,
    'le trou du zoom doit etre a la hauteur 4');
});

/* --- SUITES (complements) ---------------------------------------------- */

const SUI = schemas('tle-suites-complements');

test('suites : les deux rangees de dominos ont le meme espacement', () => {
  /* Tout le message de la figure tient la-dedans : l'HEREDITE est identique
     dans les deux rangees, seule l'initialisation change. Si les dominos du
     bas etaient plus espaces, la figure suggererait que la chute ne se
     propage pas faute de contact — c'est-a-dire exactement le contraire de
     ce qu'elle veut dire. */
  const d = SUI[0];
  const tombes = balises(d.svg, 'polygon').map(points);
  const debout = balises(d.svg, 'rect')
    .filter((t) => attrNum(t, 'x') !== null)
    .map((t) => ({ x: attrNum(t, 'x'), w: attrNum(t, 'width'), h: attrNum(t, 'height') }));

  assert.strictEqual(tombes.length, 7, 'sept dominos tombes');
  assert.strictEqual(debout.length, 7, 'sept dominos debout');

  // Abscisses du pied gauche de chaque domino, dans les deux rangees.
  const xsTombes = tombes.map((p) => Math.min(...p.map(([x]) => x))).sort((a, b) => a - b);
  const xsDebout = debout.map((r) => r.x).sort((a, b) => a - b);

  for (let i = 0; i < 7; i++) {
    assert.ok(Math.abs(xsTombes[i] - xsDebout[i]) < 1e-6,
      'domino ' + i + ' : abscisses differentes entre les deux rangees');
  }
  // Espacement regulier, et identique dans les deux rangees.
  const pas = xsDebout[1] - xsDebout[0];
  for (let i = 1; i < 7; i++) {
    assert.ok(Math.abs((xsDebout[i] - xsDebout[i - 1]) - pas) < 1e-6, 'espacement irregulier');
    assert.ok(Math.abs((xsTombes[i] - xsTombes[i - 1]) - pas) < 1e-6, 'espacement irregulier');
  }
  // Et un domino couche doit pouvoir atteindre le suivant : sa portee
  // horizontale depasse l'espacement.
  const portee = Math.max(...tombes[0].map(([x]) => x)) - Math.min(...tombes[0].map(([x]) => x));
  assert.ok(portee > pas,
    'un domino couche (portee ' + portee + ') n atteint pas le suivant (pas ' + pas + ')');
});

test('suites : les batons traces sont bien les termes des deux suites geometriques', () => {
  /* Deuxieme figure. Les sommets doivent valoir 0,7^n et 1,35^n a l'echelle
     declaree — pas « une suite qui descend » et « une suite qui monte ». */
  const d = SUI[1];

  // Echelle relue : rangs 0 a 6 sur [52 ; 392], valeurs 0 a 7 sur
  // l'intervalle vertical dont l'axe est a y = 210.
  const X0 = 52, XN = 392, N = 6;
  const yAxe = 210, yMax = 7, Y0 = 30, H = 180;
  const Y = (v) => Y0 + (yMax - v) / yMax * H;
  assert.ok(Math.abs(Y(0) - yAxe) < 1e-9, 'echelle coherente avec la position de l axe');

  const cercles = balises(d.svg, 'circle').map((t) => ({
    cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy'), alt: /plot-point-alt/.test(t)
  }));
  const serie07 = cercles.filter((c) => !c.alt).sort((a, b) => a.cx - b.cx);
  const serie135 = cercles.filter((c) => c.alt).sort((a, b) => a.cx - b.cx);
  assert.strictEqual(serie07.length, 7, 'sept termes pour la suite convergente');
  assert.strictEqual(serie135.length, 7, 'sept termes pour la suite divergente');

  for (let n = 0; n <= N; n++) {
    const xAttendu = X0 + n / N * (XN - X0);
    assert.ok(Math.abs(serie07[n].cx - xAttendu) < 0.2, 'abscisse du rang ' + n);
    assert.ok(Math.abs(serie135[n].cx - xAttendu) < 0.2, 'abscisse du rang ' + n);
    assert.ok(Math.abs(serie07[n].cy - Y(Math.pow(0.7, n))) < 0.2,
      'terme 0,7^' + n + ' mal place');
    assert.ok(Math.abs(serie135[n].cy - Y(Math.pow(1.35, n))) < 0.2,
      'terme 1,35^' + n + ' mal place');
  }

  // L'une descend vers l'axe, l'autre s'en eloigne : c'est le message.
  assert.ok(serie07[6].cy > serie07[0].cy, 'la suite de raison 0,7 doit descendre');
  assert.ok(serie135[6].cy < serie135[0].cy, 'la suite de raison 1,35 doit monter');
});

test('suites : les chemins en escalier suivent bien leurs relations de recurrence', () => {
  /* Troisieme figure. Chaque sommet du chemin doit etre soit sur la droite
     y = x, soit sur la droite de f : c'est ce qui fait qu'un escalier
     represente une suite et non un gribouillis. On verifie en plus que les
     deux chemins convergent vers le MEME point fixe. */
  const d = SUI[2];
  const chemins = balises(d.svg, 'polyline').map(points);
  assert.strictEqual(chemins.length, 2, 'un chemin par vignette');

  // Cadres : gauche [44 ; 212], droite [252 ; 420], meme echelle u de 3,4 a 8,2.
  const lo = 3.4, hi = 8.2, W = 168, H = 168, oy = 26;
  const reperes = [
    { ox: 44, f: (u) => 0.5 * u + 3 },
    { ox: 252, f: (u) => -0.8 * u + 10.8 }
  ];

  for (let k = 0; k < 2; k++) {
    const { ox, f } = reperes[k];
    const versU = (px) => lo + (px - ox) / W * (hi - lo);
    const versV = (py) => hi - (py - oy) / H * (hi - lo);
    const chemin = chemins[k];

    /* Un escalier alterne des segments VERTICAUX (on monte jusqu'a la
       courbe) et HORIZONTAUX (on revient sur la diagonale). Chaque sommet
       doit donc etre sur l'une des deux droites. */
    let surDiagonale = 0, surCourbe = 0;
    for (const [px, py] of chemin) {
      const u = versU(px), v = versV(py);
      if (Math.abs(v - u) < 0.05) surDiagonale++;
      else if (Math.abs(v - f(u)) < 0.05) surCourbe++;
      else assert.fail('sommet (' + u.toFixed(3) + ' ; ' + v.toFixed(3) +
        ') ni sur la diagonale ni sur la courbe (vignette ' + (k + 1) + ')');
    }
    /* Le chemin compte 13 sommets : le depart sur la diagonale, puis six
       couples (montee vers la courbe, retour sur la diagonale). On attend
       donc 7 sommets sur la diagonale et 6 sur la courbe pour la vignette
       de gauche — l'ecart d'un entre les deux vignettes vient du dernier
       sommet, qui tombe sur l'une ou l'autre selon le sens de la marche.
       Ce qui compte vraiment, c'est qu'AUCUN sommet ne soit ailleurs, et
       c'est l'assert.fail ci-dessus qui le garantit. */
    assert.ok(surDiagonale >= 5, 'assez de sommets sur la diagonale (' + surDiagonale + ')');
    assert.ok(surCourbe >= 5, 'assez de sommets sur la courbe (' + surCourbe + ')');
    assert.strictEqual(surDiagonale + surCourbe, chemin.length,
      'tous les sommets doivent etre sur l une des deux droites');

    // Le chemin se resserre : les marches retrecissent.
    const premiere = Math.abs(versV(chemin[1][1]) - versV(chemin[0][1]));
    const derniere = Math.abs(versV(chemin[chemin.length - 1][1]) -
                              versV(chemin[chemin.length - 2][1]));
    assert.ok(derniere < premiere, 'les marches doivent retrecir (vignette ' + (k + 1) + ')');

    // Le point fixe marque est bien la solution de u = f(u), c'est-a-dire 6.
    const pf = balises(d.svg, 'circle')
      .map((t) => ({ cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy'), alt: /plot-point-alt/.test(t) }))
      .filter((c) => c.alt && c.cx >= ox && c.cx <= ox + W);
    assert.strictEqual(pf.length, 1, 'un point fixe marque par vignette');
    const uPF = versU(pf[0].cx), vPF = versV(pf[0].cy);
    assert.ok(Math.abs(uPF - 6) < 0.05, 'point fixe dessine en u=' + uPF.toFixed(3) + ' au lieu de 6');
    assert.ok(Math.abs(vPF - 6) < 0.05, 'le point fixe doit etre sur la diagonale');
    assert.ok(Math.abs(f(uPF) - uPF) < 0.05, 'et verifier reellement u = f(u)');
  }

  /* La vignette de gauche est MONOTONE (le chemin ne change jamais de cote
     par rapport au point fixe), celle de droite OSCILLE. C'est la difference
     que la figure enseigne. */
  const cote = (k) => {
    const { ox } = reperes[k];
    const versU = (px) => lo + (px - ox) / W * (hi - lo);
    const signes = chemins[k].map(([px]) => Math.sign(versU(px) - 6)).filter((s) => s !== 0);
    return new Set(signes).size;
  };
  assert.strictEqual(cote(0), 1, 'vignette gauche : le chemin doit rester du meme cote');
  assert.strictEqual(cote(1), 2, 'vignette droite : le chemin doit passer des deux cotes');
});

/* --- LOIS DE PROBABILITE CONTINUES ------------------------------------- */

const LOI = schemas('tle-lois-continues');

test('lois continues : la densite uniforme a une aire totale de 1 et l aire hachuree vaut la probabilite', () => {
  /* LA verification du chapitre, et celle qui compte le plus : toute la
     figure dit « la probabilite EST l'aire ». Si l'aire dessinee ne valait
     pas la probabilite annoncee, la figure demolirait le point qu'elle
     enseigne. On mesure le rectangle REELLEMENT dessine. */
  const d = LOI[0];

  // Echelle relue sur la figure : x de -1,2 a 11,4 sur [56 ; 386],
  // y de 0 a 0,145 sur une hauteur de 150 depuis y=40.
  const xMin = -1.2, xMax = 11.4, X0 = 56, W = 330;
  const yMax = 0.145, Y0 = 40, H = 150;
  const versX = (px) => xMin + (px - X0) / W * (xMax - xMin);
  const versY = (py) => yMax - (py - Y0) / H * yMax;

  // Le palier de la densite.
  const palier = balises(d.svg, 'line').find((t) => /curve-main/.test(t));
  assert.ok(palier, 'le palier de densite est trace');
  const hauteur = versY(attrNum(palier, 'y1'));
  const gauche = versX(attrNum(palier, 'x1'));
  const droite = versX(attrNum(palier, 'x2'));

  assert.ok(Math.abs(gauche - 0) < 0.02, 'le support commence en 0');
  assert.ok(Math.abs(droite - 10) < 0.02, 'le support finit en 10');
  assert.ok(Math.abs(hauteur - 0.1) < 0.001,
    'hauteur de densite dessinee : ' + hauteur.toFixed(5) + ' au lieu de 0,1');

  // AIRE TOTALE = 1, par integration de la densite reellement dessinee.
  const densite = (x) => (x >= gauche && x <= droite ? hauteur : 0);
  const total = simpson(densite, gauche, droite, 2000);
  assert.ok(Math.abs(total - 1) < 0.002,
    'aire totale sous la densite : ' + total.toFixed(5) + ' au lieu de 1');

  // Le rectangle hachure, et sa probabilite.
  const hach = balises(d.svg, 'rect')
    .filter((t) => attrNum(t, 'x') !== null && attrNum(t, 'width') <= W)
    .map((t) => ({
      x: attrNum(t, 'x'), y: attrNum(t, 'y'),
      w: attrNum(t, 'width'), h: attrNum(t, 'height')
    }));
  assert.strictEqual(hach.length, 1, 'un seul aplat hachure');
  const c = versX(hach[0].x), e = versX(hach[0].x + hach[0].w);
  assert.ok(Math.abs(c - 2) < 0.03, 'borne gauche hachuree en ' + c.toFixed(3) + ' au lieu de 2');
  assert.ok(Math.abs(e - 6) < 0.03, 'borne droite hachuree en ' + e.toFixed(3) + ' au lieu de 6');

  const aire = simpson(densite, c, e, 2000);
  assert.ok(Math.abs(aire - 0.4) < 0.005,
    'aire hachuree : ' + aire.toFixed(5) + ' au lieu de 0,4');
  // Le haut du rectangle est bien sur le palier, son bas sur l'axe.
  assert.ok(Math.abs(versY(hach[0].y) - hauteur) < 0.001, 'le rectangle monte jusqu au palier');
  assert.ok(Math.abs(versY(hach[0].y + hach[0].h)) < 0.001, 'et descend jusqu a l axe');
  // La legende annonce bien ce nombre.
  assert.match(d.caption, /0\{,\}4/);
});

test('lois continues : les trois bandes ont des aires decroissantes d un facteur dix', () => {
  /* Deuxieme figure : la largeur est divisee par dix a chaque vignette,
     donc l'aire aussi. C'est ce qui rend P(X = a) = 0 credible. Une
     vignette dessinee « a peu pres plus fine » ruinerait la demonstration. */
  const d = LOI[1];

  const rects = balises(d.svg, 'rect')
    .filter((t) => attrNum(t, 'x') !== null)
    .map((t) => ({ x: attrNum(t, 'x'), w: attrNum(t, 'width') }))
    .sort((a, b) => a.x - b.x);
  assert.strictEqual(rects.length, 3, 'un aplat par vignette');

  /* Les trois vignettes ont la MEME echelle : on lit la largeur d'un
     support pour la calibrer, puis on convertit chaque bande. */
  const paliers = balises(d.svg, 'line')
    .filter((t) => /curve-main/.test(t))
    .map((t) => ({ x1: attrNum(t, 'x1'), x2: attrNum(t, 'x2') }))
    .sort((a, b) => a.x1 - b.x1);
  assert.strictEqual(paliers.length, 3, 'un palier de densite par vignette');

  const aires = [];
  for (let i = 0; i < 3; i++) {
    // Le support couvre 10 unites, de hauteur 0,1 : l'aire vaut 1.
    const unitesParPixel = 10 / (paliers[i].x2 - paliers[i].x1);
    const largeur = rects[i].w * unitesParPixel;
    aires.push(largeur * 0.1);
  }

  const attendues = [0.2, 0.02, 0.002];
  for (let i = 0; i < 3; i++) {
    /* Marge proportionnelle : chaque bande doit valoir son aire annoncee a
       2 % pres, y compris la troisieme. Elle est plus fine qu'un trait de
       crayon, et c'est precisement le message — on ne l'elargit donc PAS
       pour la rendre visible, sans quoi la figure annoncerait 0,002 en
       dessinant 0,0036. */
    assert.ok(Math.abs(aires[i] - attendues[i]) < attendues[i] * 0.02,
      'vignette ' + (i + 1) + ' : aire ' + aires[i].toFixed(5) +
      ' au lieu de ' + attendues[i]);
  }
  assert.ok(aires[0] > aires[1] && aires[1] > aires[2], 'les aires doivent decroitre');
  assert.ok(aires[2] < aires[0] / 50, 'la derniere bande est bien negligeable');
});

test('lois continues : la cloche dessinee est la vraie densite normale et l aire hachuree vaut 0,683', () => {
  /* Troisieme figure. On verifie deux choses par le calcul : la courbe est
     bien la densite normale centree reduite a l'echelle declaree, et l'aplat
     hachure entre -1 et +1 vaut bien les 68,3 % annonces. */
  const d = LOI[2];
  const phi = (z) => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);

  // Echelle relue : z de -3,6 a 3,6 sur [50 ; 400], densite de 0 a 0,45
  // sur une hauteur de 160 depuis y = 34.
  const zMin = -3.6, zMax = 3.6, X0 = 50, W = 350;
  const yMax = 0.45, Y0 = 34, H = 160;
  const X = (z) => X0 + (z - zMin) / (zMax - zMin) * W;
  const Y = (y) => Y0 + (yMax - y) / yMax * H;

  // La courbe suit reellement phi.
  const courbe = balises(d.svg, 'polyline').map(points)[0];
  let pire = 0;
  for (const [px, py] of courbe) {
    const z = zMin + (px - X0) / W * (zMax - zMin);
    pire = Math.max(pire, Math.abs(py - Y(phi(z))));
  }
  assert.ok(pire < 0.2, 'ecart maximal a la vraie densite normale : ' + pire.toFixed(4));

  // AIRE TOTALE de la densite = 1 (propriete de toute densite).
  const total = simpson(phi, -12, 12, 4000);
  assert.ok(Math.abs(total - 1) < 1e-6,
    'aire totale sous la densite normale : ' + total.toFixed(8));

  /* L'aplat hachure : on releve ses bornes sur le DESSIN, puis on integre
     la vraie densite entre ces bornes-la. */
  const aplat = balises(d.svg, 'polygon').map(points);
  assert.strictEqual(aplat.length, 1, 'un seul aplat hachure');
  const xs = aplat[0].map(([x]) => x);
  const zGauche = zMin + (Math.min(...xs) - X0) / W * (zMax - zMin);
  const zDroite = zMin + (Math.max(...xs) - X0) / W * (zMax - zMin);
  assert.ok(Math.abs(zGauche + 1) < 0.02, 'borne gauche hachuree en ' + zGauche.toFixed(3));
  assert.ok(Math.abs(zDroite - 1) < 0.02, 'borne droite hachuree en ' + zDroite.toFixed(3));

  const aire = simpson(phi, zGauche, zDroite, 2000);
  assert.ok(Math.abs(aire - 0.683) < 0.002,
    'aire hachuree : ' + aire.toFixed(5) + ' au lieu des 0,683 annonces');

  // Les deux autres valeurs annoncees par la figure doivent l'etre aussi.
  assert.ok(Math.abs(simpson(phi, -2, 2, 2000) - 0.954) < 0.002, 'regle des 2 sigma');
  assert.ok(Math.abs(simpson(phi, -3, 3, 2000) - 0.997) < 0.002, 'regle des 3 sigma');

  // Le sommet marque est bien au maximum de la densite, en z = 0.
  const sommet = balises(d.svg, 'circle').map((t) => ({
    cx: attrNum(t, 'cx'), cy: attrNum(t, 'cy')
  }))[0];
  assert.ok(Math.abs(sommet.cx - X(0)) < 0.5, 'le sommet doit etre en z = 0');
  assert.ok(Math.abs(sommet.cy - Y(phi(0))) < 0.5, 'et a la hauteur de la densite maximale');
});
