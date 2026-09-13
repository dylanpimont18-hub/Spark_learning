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
