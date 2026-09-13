/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-2nde.test.js

   Garde les SCHEMAS SECONDAIRES de la seconde (2026-09-13) par le CALCUL.

   Ces schemas sont ecrits a la main, en SVG, dans js/data/lycee-2nde/. Rien
   ne les verifie a la compilation : svg2tikz accorde la mention « conforme a
   la source » des qu'une forme quelconque a ete produite, sans regarder si le
   dessin dit la verite. Une figure fausse traverse donc tout le pipeline sans
   la moindre alerte, et c'est ainsi que vingt et une erreurs de figures ont
   ete trouvees sur les trois ouvrages precedents — uniquement par le calcul.

   Les proprietes verifiees ici sont celles que la SECONDE exige en propre,
   et que le brief de la vague nomme explicitement :
     - les vecteurs EGAUX dessines ont des composantes STRICTEMENT egales,
       et non « visuellement paralleles » ;
     - la relation de Chasles dessinee est exacte ;
     - aucun element ne sort du viewBox declare (un debordement s'imprime
       par-dessus le texte voisin, sans aucun avertissement de LaTeX).
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chargerModule } = require('../extract.js');

function schemas(idModule) {
  const r = chargerModule(path.join('js/data/lycee-2nde', idModule + '.js'), { graine: 0, tirages: 1 });
  return r.module.cours.diagrams || [];
}

/* Lecture des primitives du SVG. On relit le DESSIN, jamais une variable
   intermediaire : seul ce qui est ecrit dans le fichier sera imprime. */
function balises(svg, nom) {
  const out = [];
  const re = new RegExp('<' + nom + '\\b[^>]*>', 'g');
  let m;
  while ((m = re.exec(svg))) out.push(m[0]);
  return out;
}
function attr(tag, nom) {
  const m = tag.match(new RegExp('\\b' + nom + '="([^"]*)"'));
  return m ? parseFloat(m[1]) : null;
}
function viewBox(svg) {
  const m = svg.match(/viewBox="([^"]*)"/);
  assert.ok(m, 'la figure declare un viewBox');
  const [x, y, w, h] = m[1].trim().split(/\s+/).map(Number);
  return { x, y, w, h };
}

const DIAGRAMMES = schemas('vecteurs');

test('vecteurs : le chapitre porte bien ses trois schemas secondaires', () => {
  assert.strictEqual(DIAGRAMMES.length, 3);
  for (const d of DIAGRAMMES) {
    assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
    assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
    assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
  }
});

test('vecteurs, schema 1 : les trois representants ont des composantes STRICTEMENT egales', () => {
  const svg = DIAGRAMMES[0].svg;
  /* Les representants sont les traits qui portent une pointe de fleche et la
     classe curve-main. Les traits de quadrillage (grid-line) en sont exclus. */
  const fleches = balises(svg, 'line').filter(t => t.includes('curve-main') && t.includes('marker-end'));
  assert.strictEqual(fleches.length, 3, 'trois representants dessines');

  const comps = fleches.map(t => ({
    dx: attr(t, 'x2') - attr(t, 'x1'),
    dy: attr(t, 'y2') - attr(t, 'y1')
  }));
  /* EGALITE STRICTE, pas « a peu pres parallele ». Deux fleches paralleles
     mais de longueurs differentes ne representent PAS le meme vecteur, et
     c'est exactement ce que le schema pretend montrer. */
  for (const c of comps) {
    assert.strictEqual(c.dx, comps[0].dx, 'meme composante horizontale');
    assert.strictEqual(c.dy, comps[0].dy, 'meme composante verticale');
  }

  /* Les origines, elles, doivent etre DISTINCTES : trois fleches superposees
     ne montreraient rien. */
  const origines = fleches.map(t => attr(t, 'x1') + ':' + attr(t, 'y1'));
  assert.strictEqual(new Set(origines).size, 3, 'trois origines distinctes');

  /* Les composantes annoncees par la legende sont (3 ; -2), a l'echelle de
     30 unites de viewBox par graduation. On verifie que le dessin les tient :
     +90 en x, +60 en y d'ecran (donc -2 en ordonnee de repere). */
  assert.strictEqual(comps[0].dx, 90, '3 graduations vers la droite');
  assert.strictEqual(comps[0].dy, 60, '2 graduations vers le bas');
});

test('vecteurs, schema 2 : les deux vignettes partagent l echelle et la hauteur de A', () => {
  const svg = DIAGRAMMES[1].svg;
  /* Le point A de gauche est un plot-point, celui de droite un
     plot-point-alt (origine du vecteur). Les deux doivent etre a la MEME
     ordonnee : c'est le patron « comparaison », ou la seule difference
     visible doit etre la nature de l'objet. */
  const ronds = balises(svg, 'circle');
  const gauche = ronds.find(t => t.includes('class="plot-point"'));
  const droite = ronds.filter(t => t.includes('plot-point-alt'));
  assert.ok(gauche, 'le point A de gauche est dessine');
  assert.strictEqual(droite.length, 2, 'A et B sont dessines a droite');

  const yGauche = attr(gauche, 'cy');
  const yA = attr(droite[0], 'cy');
  assert.strictEqual(yGauche, yA, 'A occupe la meme hauteur dans les deux vignettes');

  // Le vecteur AB porte bien les composantes (3 ; -2) a l'echelle 18.
  const vect = balises(svg, 'line').find(t => t.includes('curve-main') && t.includes('marker-end'));
  assert.ok(vect, 'le vecteur AB est trace');
  assert.strictEqual(attr(vect, 'x2') - attr(vect, 'x1'), 54, '3 graduations de 18 unites');
  assert.strictEqual(attr(vect, 'y2') - attr(vect, 'y1'), 36, '2 graduations vers le bas');
});

test('vecteurs, schema 3 : la relation de Chasles est EXACTE sur le dessin', () => {
  const svg = DIAGRAMMES[2].svg;
  const pleins = balises(svg, 'line').filter(t => t.includes('curve-main'));
  const tirets = balises(svg, 'line').filter(t => t.includes('guide-line') && t.includes('marker-end'));
  assert.strictEqual(pleins.length, 2, 'les deux etapes AB et BC sont tracees');
  assert.strictEqual(tirets.length, 1, 'le raccourci AC est trace, en tirets');

  const vec = (t) => [attr(t, 'x2') - attr(t, 'x1'), attr(t, 'y2') - attr(t, 'y1')];
  const [ab, bc] = pleins.map(vec);
  const ac = vec(tirets[0]);

  /* AB + BC = AC, au pixel pres et non « a peu pres ». Une somme fausse
     detruirait la seule chose que le schema pretend montrer. */
  assert.strictEqual(ab[0] + bc[0], ac[0], 'composantes horizontales : AB + BC = AC');
  assert.strictEqual(ab[1] + bc[1], ac[1], 'composantes verticales : AB + BC = AC');

  /* Le chemin doit etre CONTINU : l'arrivee de AB est le depart de BC. */
  assert.strictEqual(attr(pleins[0], 'x2'), attr(pleins[1], 'x1'), 'AB arrive ou BC repart');
  assert.strictEqual(attr(pleins[0], 'y2'), attr(pleins[1], 'y1'), 'AB arrive ou BC repart');

  /* Les trois points ne sont pas alignes : un triangle aplati ne montrerait
     aucun detour, donc aucune raison d'ecrire Chasles. */
  const croix = ab[0] * bc[1] - ab[1] * bc[0];
  assert.notStrictEqual(croix, 0, 'A, B et C ne sont pas alignes');
});

/* ---------------------------------------------------------------------------
   GARDES GENERIQUES, etendues a TOUS les chapitres le 2026-09-13.

   Ces trois controles ne dependent d'aucune propriete mathematique : ils
   valent pour n'importe quelle figure. Ils ne tournaient pourtant que sur
   « vecteurs », le chapitre pilote, et les 29 schemas des dix autres
   chapitres n'etaient donc gardes par rien — y compris les huit chapitres
   commites en urgence le 2026-09-13 (e0b0c09), qui n'avaient ete ni passes
   au build ni relus.
   --------------------------------------------------------------------------- */

const MODULES_2NDE = [
  'vecteurs', 'fonctions-affines', '2nde-ensembles-nombres', '2nde-calcul-algebrique',
  '2nde-equations-inequations', '2nde-fonctions-generalites', '2nde-fonctions-reference',
  '2nde-reperage-plan', '2nde-droites-systemes', '2nde-geometrie-plane',
  '2nde-statistiques', '2nde-probabilites', '2nde-echantillonnage', '2nde-algorithmique'
];

/* Chargement unique : chargerModule execute le fichier de donnees entier, ce
   qui coute cher repete quatorze fois par test. */
const TOUS = MODULES_2NDE.map((id) => [id, schemas(id)]);

test('aucun element ne sort du viewBox declare, sur les quatorze chapitres', () => {
  /* Un debordement s'imprime PAR-DESSUS le texte voisin et ne produit aucun
     avertissement : svg2tikz fige la boite TikZ sur le viewBox entier, donc
     LaTeX ne voit rien. C'est le defaut qui a touche douze figures sur
     quatre-vingt-neuf en sixieme, jusqu'a 3,9 mm. */
  for (const [id, liste] of TOUS) {
    for (const [i, d] of liste.entries()) {
      const svg = d.svg;
      const vb = viewBox(svg);
      const ou = id + ' schema ' + (i + 1) + ' : ';
      const dans = (x, y, quoi) => {
        if (x === null || y === null || Number.isNaN(x) || Number.isNaN(y)) return;
        assert.ok(x >= vb.x - 0.01 && x <= vb.x + vb.w + 0.01,
          ou + quoi + ' a l abscisse ' + x + ' sort du viewBox large de ' + vb.w);
        assert.ok(y >= vb.y - 0.01 && y <= vb.y + vb.h + 0.01,
          ou + quoi + ' a l ordonnee ' + y + ' sort du viewBox haut de ' + vb.h);
      };
      for (const t of balises(svg, 'line')) {
        dans(attr(t, 'x1'), attr(t, 'y1'), 'un trait');
        dans(attr(t, 'x2'), attr(t, 'y2'), 'un trait');
      }
      /* Un point est un DISQUE : c'est son bord qui deborde, pas son centre.
         Le rayon doit donc entrer dans le test, sans quoi un point pose sur
         le bord passerait alors qu'il mord dessus. */
      for (const t of balises(svg, 'circle')) {
        const cx = attr(t, 'cx'), cy = attr(t, 'cy'), r = attr(t, 'r') || 0;
        dans(cx - r, cy - r, 'un point');
        dans(cx + r, cy + r, 'un point');
      }
      for (const t of balises(svg, 'rect')) {
        const x = attr(t, 'x'), y = attr(t, 'y');
        dans(x, y, 'un rectangle');
        dans(x + (attr(t, 'width') || 0), y + (attr(t, 'height') || 0), 'un rectangle');
      }
      /* Les etiquettes ne sont bornees que sur leur point d'ancrage : leur
         largeur reelle depend de la fonte. On verifie au moins que l'ancre est
         dans le cadre, ce qui attrape les fautes grossieres. */
      for (const t of balises(svg, 'text')) {
        dans(attr(t, 'x'), attr(t, 'y'), 'une etiquette');
      }
      for (const t of balises(svg, 'polyline')) {
        const pts = (t.match(/\bpoints="([^"]*)"/) || [])[1];
        if (!pts) continue;
        for (const p of pts.trim().split(/\s+/)) {
          const [x, y] = p.split(',').map(Number);
          dans(x, y, 'un point de courbe');
        }
      }
    }
  }
});

test('les etiquettes respectent les contraintes du convertisseur, partout', () => {
  /* Contraintes du cahier des charges (section 9), imposees par svg2tikz :
     pas d etiquette tout en capitales, qui se fracture a la conversion. Les
     noms de points (A, B, C) et de vecteurs sont des cas legitimes d une
     seule ou deux lettres, on ne les compte pas. */
  for (const [id, liste] of TOUS) {
    for (const [i, d] of liste.entries()) {
      const textes = [];
      for (const m of d.svg.matchAll(/<text\b[^>]*>([^<]*)</g)) textes.push(m[1].trim());
      for (const txt of textes) {
        if (txt.length <= 2) continue;               // noms de points
        if (!/[A-Za-z]/.test(txt)) continue;         // purement chiffre
        assert.ok(txt !== txt.toUpperCase() || !/[A-Z]{3,}/.test(txt),
          id + ' schema ' + (i + 1) + ' : etiquette en capitales « ' + txt + ' »');
      }
    }
  }
});

test('une seule pointe de fleche par trait, partout', () => {
  for (const [id, liste] of TOUS) {
    for (const [i, d] of liste.entries()) {
      for (const t of [...balises(d.svg, 'line'), ...balises(d.svg, 'path'),
                       ...balises(d.svg, 'polyline')]) {
        const nb = (t.match(/marker-(start|end|mid)=/g) || []).length;
        assert.ok(nb <= 1, id + ' schema ' + (i + 1) + ' : un trait porte ' + nb + ' pointes');
      }
    }
  }
});

test('chaque schema secondaire porte source, legende et notes', () => {
  for (const [id, liste] of TOUS) {
    for (const [i, d] of liste.entries()) {
      const ou = id + ' schema ' + (i + 1) + ' : ';
      assert.ok(d.svg && d.svg.includes('<svg'), ou + 'source SVG manquante');
      assert.ok(d.caption && d.caption.trim(), ou + 'legende manquante');
      assert.ok(d.notes && d.notes.length >= 2, ou + 'au moins deux notes');
      assert.ok(d.title && d.title.trim(), ou + 'titre manquant');
      /* Le lecteur d'ecran, et le fichier LaTeX, reprennent le <desc> : une
         figure sans description est inaccessible et muette a l'impression. */
      assert.ok(/<desc\b[^>]*>[^<]{40,}/.test(d.svg), ou + 'description trop courte ou absente');
    }
  }
});

/* ---------------------------------------------------------------------------
   2nde-equations-inequations — trois schemas ajoutes le 2026-09-13.
   --------------------------------------------------------------------------- */

const INEQ = schemas('2nde-equations-inequations');

test('equations : le chapitre porte ses trois schemas secondaires', () => {
  assert.strictEqual(INEQ.length, 3);
});

test('equations, schema 1 : les deux droites partagent EXACTEMENT l echelle', () => {
  /* Patron « comparaison » : la seule difference visible doit etre le cote
     colorie. Si les deux droites n'avaient pas la meme echelle ni la meme
     origine, l'oeil lirait cette difference comme un argument. */
  const svg = INEQ[0].svg;
  const grad = balises(svg, 'line').filter(t => t.includes('grid-line'));
  const haut = grad.filter(t => attr(t, 'y1') === 65).map(t => attr(t, 'x1'));
  const bas = grad.filter(t => attr(t, 'y1') === 165).map(t => attr(t, 'x1'));
  assert.strictEqual(haut.length, 8, 'huit graduations en haut');
  assert.deepStrictEqual(bas, haut, 'les graduations du bas sont aux MEMES abscisses');

  /* Le pas est constant : une droite graduee dont le pas varierait mentirait
     sur les distances entre les nombres. */
  const pas = haut.slice(1).map((x, k) => x - haut[k]);
  for (const p of pas) assert.strictEqual(p, 30, 'pas constant de 30 unites');

  /* La borne -3 tombe sur la meme abscisse dans les deux droites, et c'est
     bien la graduation calculee : x = 0 en 200, 30 unites par unite. */
  const O = 200, S = 30;
  assert.strictEqual(O + S * (-3), 110, '-3 tombe a l abscisse 110');
  const ronds = balises(svg, 'circle');
  assert.strictEqual(ronds.length, 2, 'une borne dessinee sur chaque droite');
  for (const r of ronds) assert.strictEqual(attr(r, 'cx'), 110, 'la borne est a -3');
});

test('equations, schema 1 : les deux zones sont OPPOSEES, sans recouvrement', () => {
  /* C'est tout ce que la figure pretend montrer : la bonne reponse et
     l'erreur n'ont aucun nombre en commun. Si les deux fleches pointaient du
     meme cote, le schema serait faux sans que cela se voie. */
  const svg = INEQ[0].svg;
  const bonne = balises(svg, 'line').find(t => t.includes('curve-main') && t.includes('marker-end'));
  const fausse = balises(svg, 'line').find(t => t.includes('guide-line') && t.includes('marker-end'));
  assert.ok(bonne && fausse, 'les deux demi-droites sont tracees');

  const sens = (t) => Math.sign(attr(t, 'x2') - attr(t, 'x1'));
  assert.strictEqual(sens(bonne), 1, 'x > -3 part vers la DROITE');
  assert.strictEqual(sens(fausse), -1, 'x < -3 part vers la GAUCHE');

  /* Les deux partent bien du meme point : la borne ne bouge pas, seul le
     sens change. C'est exactement ce que fait la division par un negatif. */
  assert.strictEqual(attr(bonne, 'x1'), 110, 'la bonne zone part de -3');
  assert.strictEqual(attr(fausse, 'x1'), 110, 'la zone fausse part de -3 aussi');

  /* Et la valeur test des notes, x = 0, doit reellement tomber dans la zone
     du haut et hors de celle du bas — sans quoi la note mentirait. */
  const xZero = 200;
  assert.ok(xZero > attr(bonne, 'x1') && xZero <= attr(bonne, 'x2'),
    '0 appartient a la zone du haut, comme l affirment les notes');
  assert.ok(xZero > attr(fausse, 'x1'), '0 est hors de la zone du bas');
});

test('equations, schema 2 : la borne et l ensemble partent du MEME nombre', () => {
  const svg = INEQ[1].svg;
  const O = 70, S = 40;                 // x = 0 en 70, 40 unites par unite
  assert.strictEqual(O + S * 4, 230, '4 tombe a l abscisse 230');

  const ronds = balises(svg, 'circle');
  const pleins = ronds.filter(t => t.includes('class="plot-point"'));
  assert.strictEqual(pleins.length, 2, 'la borne est marquee sur les deux droites');
  for (const r of pleins) assert.strictEqual(attr(r, 'cx'), 230, 'la borne vaut 4 partout');

  /* La demi-droite part de la borne et va vers la DROITE, car la solution de
     x - 4 >= 0 est [4 ; +infini[. Une fleche vers la gauche dirait le
     contraire de la legende. */
  const demi = balises(svg, 'line').find(t => t.includes('curve-main'));
  assert.strictEqual(attr(demi, 'x1'), 230, 'la solution commence a la borne');
  assert.ok(attr(demi, 'x2') > attr(demi, 'x1'), 'elle s etend vers les grands nombres');

  /* Les trois valeurs d exemple annoncees (4,1 ; 5 ; 7) doivent toutes se
     trouver DANS la demi-droite, sinon les notes seraient fausses. */
  const exemples = ronds.filter(t => t.includes('plot-point-alt')).map(t => attr(t, 'cx'));
  assert.strictEqual(exemples.length, 3, 'trois valeurs d exemple');
  for (const x of exemples) {
    assert.ok(x >= attr(demi, 'x1') && x <= attr(demi, 'x2'),
      'la valeur ' + ((x - O) / S) + ' doit appartenir a la solution');
  }
  /* 5 et 7 tombent exactement sur leur graduation ; 4,1 est volontairement
     tres proche de la borne, ce que le dessin doit refleter. */
  assert.ok(exemples.includes(270), '5 est marque a son abscisse exacte');
  assert.ok(exemples.includes(350), '7 est marque a son abscisse exacte');
});

/* ---------------------------------------------------------------------------
   2nde-fonctions-reference — troisieme schema ajoute le 2026-09-13.
   --------------------------------------------------------------------------- */

const REF = schemas('2nde-fonctions-reference');

test('fonctions de reference : le chapitre porte bien TROIS schemas', () => {
  /* Il n'en portait que deux, les deux premieres erreurs de la fiche etant
     seules illustrees. La quatrieme — chercher le domaine seulement quand on
     y pense — meritait pourtant une figure plus que les autres : c'est la
     seule ou l'eleve produit un nombre qui n'existe pas sans qu'aucun signal
     ne l'arrete. */
  assert.strictEqual(REF.length, 3);
});

test('fonctions de reference, schema 3 : la courbe DEMARRE a la borne exacte', () => {
  const svg = REF[2].svg;
  const OX = 60, SX = 34, OY = 220, SY = 26;
  const x = (X) => (X - OX) / SX;
  const y = (Y) => (OY - Y) / SY;

  const pts = (svg.match(/<polyline[^>]*points="([^"]*)"/) || [])[1]
    .trim().split(/\s+/).map((p) => p.split(',').map(Number));

  /* La borne du domaine se RECALCULE : 3x - 12 >= 0 donne x >= 4. */
  const borne = 12 / 3;
  assert.strictEqual(borne, 4, 'la borne du domaine vaut 4');

  /* Le premier point de la courbe tombe exactement sur (4 ; 0), c'est-a-dire
     SUR l'axe. Une courbe qui demarrerait un peu avant ou un peu au-dessus
     dementirait la legende, et personne ne le verrait. */
  assert.strictEqual(x(pts[0][0]), borne, 'la courbe commence a l abscisse 4');
  assert.strictEqual(y(pts[0][1]), 0, 'et exactement sur l axe des abscisses');

  /* Aucun point de courbe a gauche de la borne : c'est tout le propos. */
  for (const [X] of pts) {
    assert.ok(x(X) >= borne - 1e-9, 'aucun point de courbe hors du domaine');
  }

  /* Chaque point verifie la definition de la fonction. */
  let pire = 0;
  for (const [X, Y] of pts) pire = Math.max(pire, Math.abs(y(Y) - Math.sqrt(3 * x(X) - 12)));
  assert.ok(pire < 0.005, 'ecart max a racine(3x-12) : ' + pire + ' unite');

  /* Le point remarquable annonce, f(7) = 3, tombe sur ses deux graduations. */
  const marques = balises(svg, 'circle').map((t) => [x(attr(t, 'cx')), y(attr(t, 'cy'))]);
  assert.ok(marques.some((p) => p[0] === 7 && p[1] === 3), 'le point (7 ; 3) est marque');
  assert.strictEqual(Math.sqrt(3 * 7 - 12), 3, 'et f(7) vaut bien 3');
  assert.ok(marques.some((p) => p[0] === 4 && p[1] === 0), 'la borne est marquee sur l axe');

  /* La verticale en tirets marque la frontiere, pas autre chose. */
  const frontiere = balises(svg, 'line').find((t) => t.includes('guide-line'));
  assert.ok(frontiere, 'la frontiere du domaine est tracee');
  assert.strictEqual(x(attr(frontiere, 'x1')), borne, 'elle tombe sur la borne');
  assert.strictEqual(attr(frontiere, 'x1'), attr(frontiere, 'x2'), 'et elle est verticale');

  /* La valeur citee comme impossible l'est reellement. */
  assert.ok(3 * 1 - 12 < 0, 'f(1) est bien hors du domaine, comme l affirme la figure');
});

/* ---------------------------------------------------------------------------
   2nde-algorithmique — trois schemas ajoutes le 2026-09-13.

   Particularite de ce chapitre : ses figures n'affirment pas des proprietes
   geometriques mais des resultats d'EXECUTION. On ne les verifie donc pas en
   relisant des coordonnees, mais en REJOUANT le programme et en comparant au
   tableau imprime. C'est la seule maniere honnete de garder une figure qui
   pretend derouler du code.
   --------------------------------------------------------------------------- */

const ALGO = schemas('2nde-algorithmique');

/* Contenu des <text> d'un SVG, dans l'ordre du document. */
function etiquettes(svg) {
  const out = [];
  for (const m of svg.matchAll(/<text\b[^>]*>([^<]*)</g)) out.push(m[1].trim());
  return out;
}

test('algorithmique : le chapitre porte ses trois schemas secondaires', () => {
  assert.strictEqual(ALGO.length, 3);
});

test('algorithmique, schema 1 : les deux rangees ont le MEME nombre de cases', () => {
  /* C'est le coeur du malentendu : range(5) et le comptage de 1 a 5 donnent
     autant de valeurs, et l'eleve en conclut que ce sont les memes. Si le
     dessin ne montrait pas deux rangees de longueur egale, il raterait
     precisement ce qu'il doit corriger. */
  const svg = ALGO[0].svg;
  const cadres = balises(svg, 'rect').filter((t) => t.includes('frame-line'));
  const haut = cadres.filter((t) => attr(t, 'y') === 46);
  const bas = cadres.filter((t) => attr(t, 'y') === 154);
  assert.strictEqual(haut.length, 5, 'cinq cases en haut');
  assert.strictEqual(bas.length, 5, 'cinq cases en bas');

  /* Memes abscisses et memes largeurs, case par case. */
  for (let i = 0; i < 5; i++) {
    assert.strictEqual(attr(haut[i], 'x'), attr(bas[i], 'x'), 'case ' + i + ' : meme abscisse');
    assert.strictEqual(attr(haut[i], 'width'), attr(bas[i], 'width'), 'case ' + i + ' : meme largeur');
  }

  /* Et les valeurs affichees sont celles que Python produirait reellement.
     On les REGENERE plutot que de les relire. */
  const attendus = [...Array(5).keys()];                 // range(5)
  const naif = attendus.map((k) => k + 1);               // 1..5
  const lues = etiquettes(svg).filter((t) => /^\d+$/.test(t)).map(Number);
  assert.deepStrictEqual(lues.slice(0, 5), attendus, 'la rangee du haut est range(5)');
  assert.deepStrictEqual(lues.slice(5, 10), naif, 'la rangee du bas est le comptage de 1 a 5');
  assert.strictEqual(attendus.length, naif.length, 'meme effectif, valeurs decalees');
});

test('algorithmique, schema 2 : le tableau de suivi est REJOUE, pas recopie', () => {
  /* On execute reellement « s = 0 ; for i in range(4) : s = s + i » et on
     compare ligne a ligne au tableau imprime. Une valeur recopiee de travers
     serait invisible a la relecture et fausse dans le manuel. */
  const lignes = [];
  let s = 0;
  for (let i = 0; i < 4; i++) {
    const avant = s;
    s = s + i;
    lignes.push([i, avant, s]);
  }
  assert.strictEqual(s, 6, 'le programme donne bien 6');
  assert.notStrictEqual(s, 10, 'et non 10, qui est la reponse intuitive fausse');

  /* Le tableau imprime : on retire l'en-tete (trois mots) et la mention
     finale, puis on relit les douze nombres dans l'ordre du document. */
  const nombres = etiquettes(ALGO[1].svg).filter((t) => /^\d+$/.test(t)).map(Number);
  assert.strictEqual(nombres.length, 12, 'quatre lignes de trois valeurs');
  for (let k = 0; k < 4; k++) {
    assert.deepStrictEqual(nombres.slice(k * 3, k * 3 + 3), lignes[k],
      'ligne ' + (k + 1) + ' du tableau conforme au deroule reel');
  }

  /* Coherence interne : la somme « apres » d'un tour est la somme « avant »
     du tour suivant. Un tableau qui violerait cela decrirait un programme
     qui n'existe pas. */
  for (let k = 0; k < 3; k++) {
    assert.strictEqual(lignes[k][2], lignes[k + 1][1],
      'la somme apres le tour ' + k + ' est la somme avant le tour ' + (k + 1));
  }
});

test('algorithmique, schema 3 : une seule branche est mise en avant', () => {
  /* La hierarchie des aplats porte ici tout le sens : la voie parcourue doit
     etre en teinte FORTE et en trait plein, l'autre en teinte faible et en
     tirets. Les intervertir dirait le contraire du texte. */
  const svg = ALGO[2].svg;
  const fleches = balises(svg, 'line');
  const prise = fleches.find((t) => t.includes('curve-main'));
  const delaissee = fleches.find((t) => t.includes('guide-line'));
  assert.ok(prise && delaissee, 'les deux branches sont tracees');

  /* Elles partent du losange et divergent : l'une vers la gauche, l'autre
     vers la droite. */
  assert.ok(attr(prise, 'x2') < attr(prise, 'x1'), 'la branche oui part vers la gauche');
  assert.ok(attr(delaissee, 'x2') > attr(delaissee, 'x1'), 'la branche non part vers la droite');

  /* Symetrie : les deux branches descendent de la meme hauteur et s'ecartent
     d'autant, pour ne privilegier visuellement aucune des deux avant lecture. */
  assert.strictEqual(attr(prise, 'y1'), attr(delaissee, 'y1'), 'meme depart en hauteur');
  assert.strictEqual(attr(prise, 'y2'), attr(delaissee, 'y2'), 'meme arrivee en hauteur');
  assert.strictEqual(attr(prise, 'x1') - attr(prise, 'x2'),
    attr(delaissee, 'x2') - attr(delaissee, 'x1'), 'ecart symetrique');

  /* Les deux cases d'arrivee ont la meme taille : seule leur teinte differe. */
  const cadres = balises(svg, 'rect').filter((t) => t.includes('frame-line'));
  assert.strictEqual(cadres.length, 2, 'deux cases d arrivee');
  assert.strictEqual(attr(cadres[0], 'width'), attr(cadres[1], 'width'), 'meme largeur');
  assert.strictEqual(attr(cadres[0], 'height'), attr(cadres[1], 'height'), 'meme hauteur');
  assert.strictEqual(attr(cadres[0], 'y'), attr(cadres[1], 'y'), 'meme hauteur de pose');

  /* Et l'exemple annonce est coherent : 14 >= 10, donc c'est bien la branche
     « oui » qui doit etre celle mise en avant. */
  assert.ok(14 >= 10, 'la note de l exemple verifie la condition');
});

/* ---------------------------------------------------------------------------
   2nde-ensembles-nombres — deux schemas ajoutes le 2026-09-13.
   --------------------------------------------------------------------------- */

const ENS = schemas('2nde-ensembles-nombres');

test('ensembles de nombres : DEUX schemas, et c est un choix assume', () => {
  /* La troisieme erreur de la fiche — croire qu'un nombre a virgule ne peut
     pas etre rationnel — se tranche par un CALCUL (1,333... = 4/3) et non par
     un dessin. Une figure y serait decorative, ce que la section 10 du cahier
     des charges signale comme pire qu'une definition. */
  assert.strictEqual(ENS.length, 2, 'deux schemas secondaires, volontairement');
});

test('ensembles, schema 1 : les deux intervalles couvrent la MEME portion', () => {
  /* Toute la demonstration tient la : [2;5] et ]2;5[ occupent exactement la
     meme place, et ne different QUE par le remplissage des ronds. Si les deux
     segments n'avaient pas les memes abscisses, la figure suggererait une
     difference de longueur qui n'existe pas. */
  const svg = ENS[0].svg;
  const O = 60, S = 45;
  const segments = balises(svg, 'line').filter((t) => t.includes('curve-main'));
  assert.strictEqual(segments.length, 2, 'deux segments traces');
  assert.strictEqual(attr(segments[0], 'x1'), attr(segments[1], 'x1'), 'meme debut');
  assert.strictEqual(attr(segments[0], 'x2'), attr(segments[1], 'x2'), 'meme fin');

  /* Et ces abscisses sont bien celles de 2 et 5 a l'echelle declaree. */
  assert.strictEqual((attr(segments[0], 'x1') - O) / S, 2, 'le segment commence a 2');
  assert.strictEqual((attr(segments[0], 'x2') - O) / S, 5, 'et finit a 5');

  /* Les bornes du HAUT sont pleines (plot-point), celles du BAS vides
     (plot-point-alt) : c'est la seule difference, et elle doit etre la
     bonne. Les inverser dirait exactement le contraire de la legende. */
  const pleins = balises(svg, 'circle').filter((t) => t.includes('class="plot-point"'));
  const vides = balises(svg, 'circle').filter((t) => t.includes('plot-point-alt'));
  assert.strictEqual(pleins.length, 2, 'deux bornes incluses en haut');
  assert.strictEqual(vides.length, 2, 'deux bornes exclues en bas');
  const yHaut = attr(segments[0], 'y1'), yBas = attr(segments[1], 'y1');
  for (const t of pleins) assert.strictEqual(attr(t, 'cy'), yHaut, 'les ronds pleins sont en haut');
  for (const t of vides) assert.strictEqual(attr(t, 'cy'), yBas, 'les ronds vides sont en bas');

  /* Chaque borne est POSEE sur son extremite de segment, pas a cote. */
  for (const t of [...pleins, ...vides]) {
    const cx = attr(t, 'cx');
    assert.ok(cx === attr(segments[0], 'x1') || cx === attr(segments[0], 'x2'),
      'la borne tombe sur une extremite du segment');
  }
});

test('ensembles, schema 2 : intersection plus COURTE, reunion plus LONGUE', () => {
  /* C'est le moyen mnemotechnique que la lecture propose a l'eleve. Si les
     longueurs dessinees ne le verifiaient pas, la figure contredirait son
     propre texte. */
  const svg = ENS[1].svg;
  const O = 60, S = 38;
  const seg = balises(svg, 'line').filter((t) => t.includes('curve-main'))
    .map((t) => [(attr(t, 'x1') - O) / S, (attr(t, 'x2') - O) / S]);
  assert.strictEqual(seg.length, 4, 'I, J, I inter J et I union J');

  const [I, J, inter, union] = seg;
  assert.deepStrictEqual(I, [1, 6], 'I = [1 ; 6]');
  assert.deepStrictEqual(J, [4, 9], 'J = [4 ; 9]');

  /* Les bornes de l'intersection et de la reunion ne sont pas posees a
     l'oeil : elles se RECALCULENT a partir de I et J. */
  assert.deepStrictEqual(inter, [Math.max(I[0], J[0]), Math.min(I[1], J[1])],
    'l intersection va du plus grand debut au plus petit fin');
  assert.deepStrictEqual(union, [Math.min(I[0], J[0]), Math.max(I[1], J[1])],
    'la reunion va du plus petit debut a la plus grande fin');

  const lg = (s) => s[1] - s[0];
  assert.ok(lg(inter) < lg(I) && lg(inter) < lg(J),
    'l intersection est plus courte que chacun des deux intervalles');
  assert.ok(lg(union) > lg(I) && lg(union) > lg(J),
    'la reunion est plus longue que chacun des deux intervalles');

  /* Les quatre droites partagent la meme echelle et la meme origine : sans
     cela, comparer des longueurs n'aurait aucun sens. */
  const axes = balises(svg, 'line').filter((t) => t.includes('class="axis"'));
  assert.strictEqual(axes.length, 4, 'quatre droites graduees');
  for (const a of axes) {
    assert.strictEqual(attr(a, 'x1'), attr(axes[0], 'x1'), 'meme origine');
    assert.strictEqual(attr(a, 'x2'), attr(axes[0], 'x2'), 'meme etendue');
  }

  /* Les deux verticales de lecture tombent sur les bornes de
     l'intersection, sinon elles designeraient autre chose que ce qu'elles
     pretendent montrer. */
  const traits = balises(svg, 'line').filter((t) => t.includes('guide-line'));
  assert.strictEqual(traits.length, 2, 'deux verticales de lecture');
  const vx = traits.map((t) => (attr(t, 'x1') - O) / S).sort((a, b) => a - b);
  assert.deepStrictEqual(vx, inter, 'les verticales encadrent l intersection');
});

/* ---------------------------------------------------------------------------
   2nde-calcul-algebrique — deux schemas ajoutes le 2026-09-13.
   --------------------------------------------------------------------------- */

const ALG = schemas('2nde-calcul-algebrique');

test('calcul algebrique : DEUX schemas, et c est un choix assume', () => {
  /* Ce chapitre porte deliberement deux schemas la ou d'autres en portent
     trois : sa troisieme erreur (oublier le double produit) est deja traitee
     par la figure PRINCIPALE du chapitre, le carre de cote (x+4) decoupe en
     quatre aires. Une troisieme figure illustrerait une formule et non un
     malentendu, ce que la section 9 du cahier des charges proscrit.

     Ce test fige ce choix pour qu'il ne soit pas pris pour un travail
     interrompu par la vague suivante. */
  assert.strictEqual(ALG.length, 2, 'deux schemas secondaires, volontairement');
});

test('calcul algebrique, schema 1 : les deux paraboles sont EXACTES', () => {
  const svg = ALG[0].svg;
  const OX = 170, OY = 210, SX = 26, SY = 7;
  const x = (X) => (X - OX) / SX;
  const y = (Y) => (OY - Y) / SY;

  const courbes = balises(svg, 'polyline').map((t) => {
    const pts = (t.match(/\bpoints="([^"]*)"/) || [])[1];
    return pts.trim().split(/\s+/).map((p) => p.split(',').map(Number));
  });
  assert.strictEqual(courbes.length, 2, 'les deux paraboles sont tracees');

  /* Chaque point doit verifier sa definition. Une parabole tracee a l'oeil
     rate son sommet sans que personne ne le voie ; c'est exactement le
     defaut que le calcul doit attraper. */
  for (const [k, f] of [[0, (v) => v * v + 9], [1, (v) => v * v - 9]]) {
    let pire = 0;
    for (const [X, Y] of courbes[k]) {
      pire = Math.max(pire, Math.abs(y(Y) - f(x(X))));
    }
    assert.ok(pire < 0.005, 'courbe ' + (k + 1) + ' : ecart max ' + pire + ' unite a sa definition');
  }

  /* Les deux courbes occupent les MEMES abscisses : sans cela, la
     comparaison de leurs positions par rapport a l'axe n'aurait pas de sens. */
  assert.strictEqual(courbes[0].length, courbes[1].length, 'meme nombre de points');
  for (let i = 0; i < courbes[0].length; i++) {
    assert.strictEqual(courbes[0][i][0], courbes[1][i][0], 'memes abscisses');
  }
});

test('calcul algebrique, schema 1 : une courbe touche l axe, l autre jamais', () => {
  /* C'est la seule chose que la figure pretend demontrer. Si la somme de
     carres frolait l'axe, ou si la difference ne le coupait pas exactement en
     -3 et 3, le dessin contredirait sa propre legende. */
  const svg = ALG[0].svg;
  const OY = 210, SY = 7, OX = 170, SX = 26;
  const courbes = balises(svg, 'polyline').map((t) => {
    const pts = (t.match(/\bpoints="([^"]*)"/) || [])[1];
    return pts.trim().split(/\s+/).map((p) => p.split(',').map(Number));
  });

  /* x^2 + 9 : toutes ses ordonnees sont STRICTEMENT au-dessus de l'axe
     (donc d'ordonnee de viewBox strictement inferieure a 210). */
  for (const [, Y] of courbes[0]) {
    assert.ok(Y < OY, 'la somme de carres ne descend jamais jusqu a l axe');
  }
  /* Et son minimum vaut exactement 9, sur la graduation correspondante. */
  const minSomme = Math.max(...courbes[0].map((p) => p[1]));
  assert.strictEqual((OY - minSomme) / SY, 9, 'le minimum de x^2+9 vaut 9');

  /* x^2 - 9 : elle traverse, donc elle a des points de part et d'autre. */
  assert.ok(courbes[1].some((p) => p[1] < OY), 'la difference passe au-dessus de l axe');
  assert.ok(courbes[1].some((p) => p[1] > OY), 'et au-dessous');

  /* Les deux racines marquees tombent exactement sur -3 et 3, ET sur l'axe. */
  const racines = balises(svg, 'circle')
    .filter((t) => t.includes('plot-point-alt'))
    .map((t) => [attr(t, 'cx'), attr(t, 'cy')]);
  assert.strictEqual(racines.length, 2, 'deux racines marquees');
  const abscisses = racines.map((p) => (p[0] - OX) / SX).sort((a, b) => a - b);
  assert.deepStrictEqual(abscisses, [-3, 3], 'les racines valent -3 et 3');
  for (const [, cy] of racines) {
    assert.strictEqual(cy, OY, 'une racine est POSEE sur l axe, pas a cote');
  }
  /* Et ce sont bien des racines de x^2 - 9. */
  for (const a of abscisses) assert.strictEqual(a * a - 9, 0, 'racine verifiee par le calcul');
});

test('calcul algebrique, schema 2 : les deux chemins sont symetriques', () => {
  /* Patron « comparaison » : les deux colonnes doivent avoir la meme largeur
     de boites et les memes hauteurs, sans quoi le dessin suggererait qu'un
     chemin est plus long que l'autre AVANT qu'on les ait lus. */
  const svg = ALG[1].svg;
  const cadres = balises(svg, 'rect').filter((t) => t.includes('frame-line'));
  const depart = cadres.filter((t) => attr(t, 'y') === 20);
  assert.strictEqual(depart.length, 1, 'un seul point de depart, commun');

  const gauche = cadres.filter((t) => attr(t, 'x') === 30);
  const droite = cadres.filter((t) => attr(t, 'x') === 250);
  assert.strictEqual(gauche.length, 2, 'deux etapes a gauche');
  assert.strictEqual(droite.length, 2, 'deux etapes a droite');

  for (let i = 0; i < 2; i++) {
    assert.strictEqual(attr(gauche[i], 'width'), attr(droite[i], 'width'),
      'les boites de meme rang ont la meme largeur');
    assert.strictEqual(attr(gauche[i], 'y'), attr(droite[i], 'y'),
      'les boites de meme rang sont a la meme hauteur');
  }

  /* Les deux colonnes sont centrees symetriquement autour du depart. */
  const xDepart = attr(depart[0], 'x') + attr(depart[0], 'width') / 2;
  const cg = attr(gauche[0], 'x') + attr(gauche[0], 'width') / 2;
  const cd = attr(droite[0], 'x') + attr(droite[0], 'width') / 2;
  assert.strictEqual(xDepart - cg, cd - xDepart, 'les deux chemins sont symetriques');
});

test('calcul algebrique, schema 2 : les solutions annoncees sont VRAIES', () => {
  /* Une figure qui affiche une solution fausse est pire qu'une figure
     absente. On revient donc a l'equation. */
  const racines = [1.5, -5];
  for (const r of racines) {
    /* On teste la NULLITE, pas l'identite avec +0 : (2*(-5)-3)*(-5+5) vaut
       -0 en virgule flottante, et strictEqual(-0, 0) echoue. Le produit est
       pourtant bien nul, ce que === 0 constate correctement. */
    assert.ok((2 * r - 3) * (r + 5) === 0, r + ' annule bien le produit');
  }
  /* Et la forme developpee affichee doit etre la bonne : (2x-3)(x+5)
     developpe donne 2x^2 + 7x - 15. */
  for (const v of [-3, -1, 0, 2, 4.5]) {
    assert.strictEqual((2 * v - 3) * (v + 5), 2 * v * v + 7 * v - 15,
      'le developpement affiche est exact en x = ' + v);
  }
});

test('equations, schema 3 : les barres sont proportionnelles aux euros', () => {
  /* La figure compare deux depenses a un budget. Si les longueurs n'etaient
     pas exactement proportionnelles aux montants, le depassement dessine
     mentirait — et c'est precisement ce que la figure demande de lire. */
  const svg = INEQ[2].svg;
  const X0 = 60, S = 4;                 // 1 EUR = 4 unites, origine x = 60
  const euros = (x) => (x - X0) / S;

  const rect = balises(svg, 'rect').filter(t => t.includes('fill="color-mix'));
  assert.strictEqual(rect.length, 4, 'deux barres de deux portions');

  /* Barre du haut : inscription 22 EUR puis 9 seances a 7 EUR. */
  assert.strictEqual(attr(rect[0], 'width') / S, 22, 'inscription de 22 euros');
  assert.strictEqual(attr(rect[1], 'width') / S, 63, '9 seances a 7 euros');
  const finHaut = euros(attr(rect[1], 'x') + attr(rect[1], 'width'));
  assert.strictEqual(finHaut, 85, '9 seances coutent 85 euros');

  /* Barre du bas : meme inscription, dix seances. */
  assert.strictEqual(attr(rect[2], 'width') / S, 22, 'meme inscription en bas');
  assert.strictEqual(attr(rect[3], 'width') / S, 70, '10 seances a 7 euros');
  const finBas = euros(attr(rect[2], 'x') + attr(rect[2], 'width') + attr(rect[3], 'width'));
  assert.strictEqual(finBas, 92, '10 seances coutent 92 euros');

  /* Les deux barres partent de la MEME origine : sans cela, la comparaison
     des longueurs n'aurait aucun sens. */
  assert.strictEqual(attr(rect[0], 'x'), attr(rect[2], 'x'), 'meme ligne de depart');

  /* Le trait de budget tombe exactement sur 90 EUR, et il separe bien les
     deux barres : l'une en deca, l'autre au-dela. C'est la seule chose que
     la figure doit prouver. */
  const budget = balises(svg, 'line').find(t => t.includes('curve-main'));
  assert.strictEqual(euros(attr(budget, 'x1')), 90, 'le budget est trace a 90 euros');
  assert.ok(finHaut < 90, '9 seances tiennent dans le budget');
  assert.ok(finBas > 90, '10 seances le depassent');
  assert.strictEqual(finBas - 90, 2, 'le depassement dessine vaut exactement 2 euros');

  /* Coherence avec l enonce : 7s + 22 <= 90 donne s <= 68/7, soit 9 seances
     une fois ramene a un entier. Le dessin doit montrer ce 9-la. */
  assert.strictEqual(Math.floor((90 - 22) / 7), 9, 'la solution entiere vaut bien 9');
});
