/* ==================================================   Spark Learning – data/figures-exercices.js
   FIGURES PARAMETRIQUES POUR LES EXERCICES (2026-09-12)

   POURQUOI DES HELPERS PARTAGES, ET NON DU SVG ECRIT A LA MAIN DANS CHAQUE
   generate() : les exercices sont DYNAMIQUES. generate() tire un rectangle de
   dimensions aleatoires ; une figure fixe MENTIRAIT sur les cotes, et un eleve
   qui mesure a la regle trouverait autre chose que l'enonce — pire que pas de
   figure du tout. La figure doit donc etre construite A PARTIR des valeurs du
   tirage, dans le meme tirage.

   Trois pistes etaient possibles :
     1. chaque generate() ecrit son SVG en toutes lettres — quarante lignes de
        balises recopiees par exercice, aucune coherence graphique garantie, et
        la moindre correction de style a rejouer a la main partout ;
     2. un champ declaratif ({forme:'rectangle', L, l}) interprete plus tard —
        elegant, mais il faudrait alors un interpreteur cote site ET un cote
        manuel, soit deux implementations a garder d'accord ;
     3. des helpers partages qui rendent le SVG a partir des parametres.
   On retient la 3. Un seul endroit produit la geometrie, et le SVG obtenu
   traverse ensuite le pipeline EXISTANT sans rien y changer : cote site il est
   injecte tel quel par renderQuestionFigure() (js/utils/ui-helpers.js), cote
   manuel il est converti en TikZ par scripts/manuel/svg2tikz.js — qui exige
   justement une source SVG pour accorder sa provenance « svg-exact ». Une
   figure inventee directement en TikZ serait refusee par le pipeline.

   REGLE D'ECHELLE — LES FIGURES SONT A L'ECHELLE.
   Un rectangle 12x7 est dessine dans le rapport 12/7. C'est nettement plus
   utile en sixieme : l'eleve doit pouvoir se fier a ce qu'il voit, et une
   figure schematique lui apprendrait au contraire a s'en mefier. L'echelle
   n'est pas libre pour autant : echelleFigure() la choisit pour que la figure
   remplisse la zone de dessin, et un RAPPORT MAXIMAL (RAPPORT_MAX) borne les
   cas degeneres — un rectangle 15x2 dessine strictement a l'echelle donnerait
   un trait de 3 mm de haut sur le papier, illisible. Au-dela de ce rapport la
   figure est comprimee, ET LE DIT : figureHorsEchelle() pose la mention
   « figure non a l'echelle », qui est la convention des manuels. Le cas est
   rare par construction (les generateurs tirent des rapports moderes) mais il
   ne doit jamais passer en silence.

   SEULE EXCEPTION, ASSUMEE : la perspective cavaliere du pave droit, ou la
   fuyante est reduite de moitie. Ce n'est pas une entorse a la regle, c'est la
   definition meme de la perspective cavaliere, et c'est sous cette forme qu'un
   eleve de sixieme la rencontre dans tous les manuels.

   CONTRAINTES DE CONVERSION (scripts/manuel/svg2tikz.js) respectees ici :
     - viewBox obligatoire, sinon la figure est refusee ;
     - uniquement <rect>, <line>, <polygon>, <circle>, <path>, <text> ;
     - les classes CSS du projet (frame-line, guide-line, grid-line, axis,
       annotation-label, tick-label, label-soft, plot-point) portent le style :
       AUCUNE couleur en dur, ni a l'ecran ni sur le papier, sinon svg2tikz
       retombe sur un defaut ;
     - les cotes chiffrees passent par fr(), jamais par .replace('.','{,}') ;
     - svg2tikz relit les etiquettes : « 12 cm » y est reconnu comme un nombre
       suivi d'une unite et compose en mathematiques, ce qui est voulu.

   Pas d'export/import : script global, comme tout js/data/.
   ========================================================= */

/* Zone de dessin, en unites de viewBox. Volontairement petite : une figure
   d'exercice s'imprime a 52 mm (LARGEUR_FIGURE_EXERCICE_MM dans
   scripts/manuel/figures.js), soit moins de la moitie d'une figure de chapitre
   (128 mm) — a douze exercices par chapitre, une figure pleine largeur ferait
   exploser la pagination. */
const FIG_L = 260;                 // largeur du viewBox
const FIG_H = 170;                 // hauteur du viewBox
const FIG_MARGE = 34;              // marge reservee aux cotes exterieures
const RAPPORT_MAX = 4;             // au-dela, la figure est comprimee et le dit

/* Arrondi d'affichage des coordonnees. Deux decimales suffisent a la precision
   d'un dessin et evitent les « 83.33333333333333 » qui alourdissent le SVG
   comme le TikZ. Nom court : la fonction apparait des dizaines de fois. */
function nb2(v) {
  const n = Math.round(v * 100) / 100;
  return Object.is(n, -0) ? '0' : String(n);
}

/* Echelle COMMUNE a la largeur et a la hauteur : c'est ce qui rend la figure
   fidele. Deux echelles differentes etireraient le dessin et feraient mentir la
   forme — un carre 5x5 sortirait rectangulaire. */
function echelleFigure(largeurReelle, hauteurReelle, reserveGauche, reserveDroite) {
  /* `reserveGauche` / `reserveDroite` : place a garder pour les cotes ECRITES
     A L'EXTERIEUR du dessin (correction du 2026-09-12). FIG_MARGE seule ne
     suffit pas : elle vaut 34 unites, or « l = 12 cm » en fait pres de 56. Le
     dessin etant centre, il commencait alors a x = 34, l'etiquette ancree
     `end` a x = 26 demarrait vers x = -30, DEHORS. Le convertisseur fige la
     boite TikZ sur le viewBox (\useasboundingbox, svg2tikz.js) : LaTeX ne voit
     pas ce debordement, ne signale aucun Overfull, et l'etiquette s'imprime
     par-dessus le texte voisin. 12 des 89 figures d'exercice du tirage courant
     debordaient ainsi, jusqu'a 3,9 mm. */
  const gauche = reserveGauche === undefined ? FIG_MARGE : Math.max(FIG_MARGE, reserveGauche);
  const droite = reserveDroite === undefined ? FIG_MARGE : Math.max(FIG_MARGE, reserveDroite);
  return Math.min((FIG_L - gauche - droite) / largeurReelle,
                  (FIG_H - 2 * FIG_MARGE) / hauteurReelle);
}

/* Largeur approchee d'une etiquette, en unites de viewBox. Les cotes n'emploient
   que des chiffres, des lettres etroites et des espaces ; une largeur moyenne
   de 6,2 unites par caractere majore legerement le rendu reel, ce qui est le
   bon sens pour une reserve. « {,} » ne compte que pour la virgule affichee. */
function largeurEtiquette(texte) {
  /* La virgule francaise s'ecrit sur trois caracteres dans la source mais n'en
     imprime qu'un : on retire les accolades avant de compter. Le motif est
     construit par concatenation, et non ecrit en clair, pour ne pas declencher
     le detecteur d'accolade manquante de scripts/check-decimal-notation.js —
     qui prendrait l'accolade ouvrante suivie d'une virgule, dans le litteral,
     pour le bug qu'il traque. */
  const VIRGULE = new RegExp('\\{' + ',' + '\\}', 'g');
  return String(texte).replace(VIRGULE, ',').length * 6.2;
}

/* Mention « non a l'echelle », posee UNIQUEMENT quand le dessin a du etre
   comprime. Convention des manuels : une figure sur laquelle on ne peut pas
   mesurer doit le declarer. Sans accent : l'etiquette traverse svg2tikz, et un
   caractere non mappe bloquerait la compilation de l'ouvrage entier. */
function figureHorsEchelle(x, y) {
  return `<text class="tick-label" x="${nb2(x)}" y="${nb2(y)}" text-anchor="middle">figure non a l echelle</text>`;
}

/* Enveloppe commune. Le <title> sert le lecteur d'ecran cote site ; svg2tikz
   ne lit que les balises de dessin et l'ignore, il ne pollue donc pas le
   papier. */
function svgFigure(titre, corps) {
  return `<svg viewBox="0 0 ${FIG_L} ${FIG_H}" role="img" aria-label="${titre}">` +
    `<title>${titre}</title>${corps}</svg>`;
}

/* Cote chiffree. fr() garantit la virgule francaise a accolades ; l'unite est
   collee au nombre pour que svg2tikz la reconnaisse comme une unite (il n'en
   accepte une qu'immediatement apres un nombre) et la compose en romain. */
function coteFig(valeur, unite) {
  return fr(valeur) + (unite ? ' ' + unite : '');
}

/* Aplat interieur commun a toutes les figures pleines : la meme teinte que les
   schemas de cours, exprimee dans les variables du projet. */
const APLAT = 'color-mix(in srgb, var(--diagram-accent) 14%, transparent)';

/* Applique le plafond de rapport a un couple de dimensions. Renvoie les
   dimensions A DESSINER et un drapeau disant si le dessin a ete comprime. */
function borner(a, b) {
  const rapport = Math.max(a, b) / Math.min(a, b);
  if (rapport <= RAPPORT_MAX) return { a, b, comprime: false };
  const petit = Math.max(a, b) / RAPPORT_MAX;
  return { a: a < b ? petit : a, b: b < a ? petit : b, comprime: true };
}

/* --- Rectangle ---------------------------------------------------------
   Rectangle de L sur l, cote sur deux cotes : la longueur sous la base, la
   largeur a gauche. Sert aux exercices d'aire et de perimetre. */
function figureRectangle(L, l, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const d = borner(L, l);

  // La cote de largeur s'ecrit a GAUCHE du rectangle : on lui reserve sa
  // largeur reelle, plus les 8 unites qui l'ecartent du trait (2026-09-12).
  const reserve = largeurEtiquette(`l = ${coteFig(l, unite)}`) + 8;
  const e = echelleFigure(d.a, d.b, reserve, FIG_MARGE);
  const w = d.a * e, h = d.b * e;
  // Centrage DANS la zone restante : le dessin ne repart pas a (FIG_L-w)/2, qui
  // le ramenerait sur l'etiquette.
  const x0 = reserve + (FIG_L - reserve - FIG_MARGE - w) / 2, y0 = (FIG_H - h) / 2 - 6;

  return svgFigure(`Rectangle de ${coteFig(L, unite)} sur ${coteFig(l, unite)}`, [
    `<rect class="frame-line" x="${nb2(x0)}" y="${nb2(y0)}" width="${nb2(w)}" height="${nb2(h)}" fill="${APLAT}"></rect>`,
    `<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(y0 + h + 22)}" text-anchor="middle">L = ${coteFig(L, unite)}</text>`,
    // La largeur s'ecrit A L'EXTERIEUR : svg2tikz supprime la reserve blanche
    // d'une etiquette posee dans un aplat, elle y serait barree par le trait.
    `<text class="annotation-label" x="${nb2(x0 - 8)}" y="${nb2(y0 + h / 2 + 4)}" text-anchor="end">l = ${coteFig(l, unite)}</text>`,
    d.comprime ? figureHorsEchelle(FIG_L / 2, FIG_H - 6) : ''
  ].join(''));
}

/* --- Carre -------------------------------------------------------------
   Un carre est un rectangle, mais le coter deux fois serait du bruit : une
   seule cote, et le codage des quatre cotes egaux. */
function figureCarre(c, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const e = echelleFigure(c, c);
  const w = c * e;
  const x0 = (FIG_L - w) / 2, y0 = (FIG_H - w) / 2 - 6;

  return svgFigure(`Carre de cote ${coteFig(c, unite)}`, [
    `<rect class="frame-line" x="${nb2(x0)}" y="${nb2(y0)}" width="${nb2(w)}" height="${nb2(w)}" fill="${APLAT}"></rect>`,
    `<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(y0 + w + 22)}" text-anchor="middle">c = ${coteFig(c, unite)}</text>`
  ].join(''));
}

/* --- Triangle ----------------------------------------------------------
   Triangle de base b et de hauteur h, hauteur tracee en pointilles et angle
   droit code. Le sommet est place au-dessus du MILIEU de la base : l'aire ne
   depend pas de sa position horizontale, et la forme isocele est la lecture la
   plus lisible de « base x hauteur / 2 ». */
function figureTriangle(b, h, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const d = borner(b, h);

  const e = echelleFigure(d.a, d.b);
  const w = d.a * e, ht = d.b * e;
  const x0 = (FIG_L - w) / 2, yBas = (FIG_H + ht) / 2 - 6;
  const xS = x0 + w / 2, yS = yBas - ht;

  // Codage de l'angle droit au pied de la hauteur : un petit carre, comme au
  // tableau. Trace en <path> ouvert (fill="none"), lu tel quel par svg2tikz.
  const k = 7;
  return svgFigure(`Triangle de base ${coteFig(b, unite)} et de hauteur ${coteFig(h, unite)}`, [
    `<polygon class="frame-line" points="${nb2(x0)},${nb2(yBas)} ${nb2(x0 + w)},${nb2(yBas)} ${nb2(xS)},${nb2(yS)}" fill="${APLAT}"></polygon>`,
    `<line class="guide-line" x1="${nb2(xS)}" y1="${nb2(yS)}" x2="${nb2(xS)}" y2="${nb2(yBas)}"></line>`,
    `<path class="grid-line" fill="none" d="M${nb2(xS - k)} ${nb2(yBas)} L${nb2(xS - k)} ${nb2(yBas - k)} L${nb2(xS)} ${nb2(yBas - k)}"></path>`,
    `<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(yBas + 22)}" text-anchor="middle">base = ${coteFig(b, unite)}</text>`,
    `<text class="annotation-label" x="${nb2(xS + 8)}" y="${nb2(yS + ht / 2)}" text-anchor="start">h = ${coteFig(h, unite)}</text>`,
    d.comprime ? figureHorsEchelle(FIG_L / 2, FIG_H - 6) : ''
  ].join(''));
}

/* --- Disque ------------------------------------------------------------
   Disque de rayon r, rayon (ou diametre) trace et cote. Un disque n'a qu'une
   dimension : il est TOUJOURS a l'echelle, la question du rapport ne se pose
   pas. */
function figureDisque(r, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const surDiametre = o.diametre === true;
  const e = echelleFigure(2 * r, 2 * r);
  const R = r * e;
  const cx = FIG_L / 2, cy = FIG_H / 2 - 6;

  const traits = [
    `<circle class="frame-line" cx="${nb2(cx)}" cy="${nb2(cy)}" r="${nb2(R)}" fill="${APLAT}"></circle>`,
    `<circle class="plot-point" cx="${nb2(cx)}" cy="${nb2(cy)}" r="2.5"></circle>`
  ];
  if (surDiametre) {
    traits.push(`<line class="guide-line" x1="${nb2(cx - R)}" y1="${nb2(cy)}" x2="${nb2(cx + R)}" y2="${nb2(cy)}"></line>`);
    traits.push(`<text class="annotation-label" x="${nb2(cx)}" y="${nb2(cy - 10)}" text-anchor="middle">d = ${coteFig(2 * r, unite)}</text>`);
  } else {
    traits.push(`<line class="guide-line" x1="${nb2(cx)}" y1="${nb2(cy)}" x2="${nb2(cx + R)}" y2="${nb2(cy)}"></line>`);
    traits.push(`<text class="annotation-label" x="${nb2(cx + R / 2)}" y="${nb2(cy - 10)}" text-anchor="middle">r = ${coteFig(r, unite)}</text>`);
  }
  return svgFigure(`Disque de rayon ${coteFig(r, unite)}`, traits.join(''));
}

/* --- Pave droit et cube ------------------------------------------------
   Perspective cavaliere, la convention du college : face avant a l'echelle,
   fuyantes a 45 degres et reduites de moitie, aretes cachees en pointilles. */
function figurePave(L, l, h, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const cube = o.cube === true;
  /* `hauteurInconnue` : l'exercice inverse, ou la hauteur EST la reponse
     cherchee. La figure doit alors montrer l'arete verticale sans la chiffrer —
     une cote « h = 6 cm » donnerait purement et simplement la solution. On y
     ecrit « h = ? ». Les autres cotes, elles, sont bien celles de l'enonce. */
  const hInconnue = o.hauteurInconnue === true;

  /* La fuyante consomme de la place : on l'integre a l'encombrement AVANT de
     choisir l'echelle, sinon la figure deborde du viewBox. Sa longueur propre
     est bornee a la moitie de la face : sur un pave 100x20x15, une fuyante
     strictement proportionnelle ecraserait la face avant a rien. */
  const REDUCTION = 0.5, COS45 = 0.7071;
  /* LA FUYANTE DIT LA VRAIE PROFONDEUR, OU ELLE LE DECLARE (2026-09-12).
     Elle etait bornee en silence par `Math.min(l, Math.max(L, h))` : sur un
     pave 20x40x30, la fuyante etait dessinee pour une profondeur de 30 alors
     que l'etiquette annonçait « l = 40 cm ». La figure contredisait sa propre
     cote, sans le moindre avertissement — le pave n'avait aucune mention
     « non a l'echelle », contrairement au rectangle et au triangle. 6555 des
     105545 tirages du domaine « pave » (6,2 %) et 133 des 576 du domaine
     « hauteur » (23,1 %) etaient concernes.
     On applique donc au couple (l, max(L, h)) le MEME plafond de rapport que
     partout ailleurs, et la compression est annoncee quand elle a lieu. */
  const grandeCote = Math.max(L, h);
  const bl = borner(grandeCote, l);
  const lDessine = bl.b;
  const comprime = bl.comprime;
  const profondeur = lDessine * REDUCTION * COS45;

  /* Les cotes h (a gauche, ancree `end`) et l (a droite, ancree `start`)
     s'ecrivent hors du dessin : on leur reserve leur largeur reelle, sinon
     elles sortent du viewBox et s'impriment sur le texte voisin. */
  const reserveG = cube ? FIG_MARGE : largeurEtiquette(`h = ${hInconnue ? '?' : coteFig(h, unite)}`) + 8;
  const reserveD = cube ? FIG_MARGE : largeurEtiquette(`l = ${coteFig(l, unite)}`) + 6;
  const e = echelleFigure(L + profondeur, h + profondeur, reserveG, reserveD);
  const w = L * e, ht = h * e, p = profondeur * e;

  const gauche = Math.max(FIG_MARGE, reserveG), droite = Math.max(FIG_MARGE, reserveD);
  const x0 = gauche + (FIG_L - gauche - droite - (w + p)) / 2;
  const y0 = (FIG_H - (ht + p)) / 2 - 4 + p + ht;   // coin bas-gauche de la face avant

  const A = [x0, y0], B = [x0 + w, y0], C = [x0 + w, y0 - ht], D = [x0, y0 - ht];
  const A2 = [x0 + p, y0 - p], B2 = [x0 + w + p, y0 - p];
  const C2 = [x0 + w + p, y0 - ht - p], D2 = [x0 + p, y0 - ht - p];
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);
  const seg = (q, r, cls) => `<line class="${cls}" x1="${nb2(q[0])}" y1="${nb2(q[1])}" x2="${nb2(r[0])}" y2="${nb2(r[1])}"></line>`;

  const traits = [
    // Face avant teintee : c'est elle qui est a l'echelle.
    `<polygon class="frame-line" points="${P(A)} ${P(B)} ${P(C)} ${P(D)}" fill="${APLAT}"></polygon>`,
    seg(D, D2, 'frame-line'), seg(C, C2, 'frame-line'), seg(B, B2, 'frame-line'),
    seg(D2, C2, 'frame-line'), seg(C2, B2, 'frame-line'),
    // Aretes cachees : pointilles, comme au tableau.
    seg(A, A2, 'guide-line'), seg(A2, B2, 'guide-line'), seg(A2, D2, 'guide-line')
  ];

  if (cube) {
    // Un cube n'a qu'une dimension utile : trois cotes identiques seraient du
    // bruit. On cote l'arete une seule fois.
    traits.push(`<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(y0 + 22)}" text-anchor="middle">arete = ${coteFig(L, unite)}</text>`);
  } else {
    traits.push(`<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(y0 + 22)}" text-anchor="middle">L = ${coteFig(L, unite)}</text>`);
    traits.push(`<text class="annotation-label" x="${nb2(x0 - 8)}" y="${nb2(y0 - ht / 2)}" text-anchor="end">h = ${hInconnue ? '?' : coteFig(h, unite)}</text>`);
    traits.push(`<text class="annotation-label" x="${nb2(x0 + w + p + 6)}" y="${nb2(y0 - p / 2 + 4)}" text-anchor="start">l = ${coteFig(l, unite)}</text>`);
  }
  // La fuyante a du etre raccourcie : on le dit, comme partout ailleurs.
  if (comprime) traits.push(figureHorsEchelle(FIG_L / 2, FIG_H - 4));
  const nom = cube ? `Cube d arete ${coteFig(L, unite)}`
    : hInconnue
      ? `Pave droit de ${coteFig(L, unite)} sur ${coteFig(l, unite)}, hauteur cherchee`
      : `Pave droit de ${coteFig(L, unite)} sur ${coteFig(l, unite)} sur ${coteFig(h, unite)}`;
  return svgFigure(nom, traits.join(''));
}

/* --- Triangle dont deux angles sont donnes -----------------------------
   Les angles dessines sont les VRAIS angles : le triangle est construit par
   intersection des deux cotes issus de la base, sa forme reflete donc
   exactement l'enonce. Un eleve qui rapporte le troisieme angle au rapporteur
   trouve la reponse — c'est precisement ce qu'on attend d'une figure de
   sixieme. */
function figureTriangleAngles(a1, a2, options) {
  const o = options || {};
  const a3 = 180 - a1 - a2;
  const marque = o.marque === undefined ? '?' : o.marque;

  // Base horizontale unite, sommets A (gauche) et B (droite). Le sommet C est
  // l'intersection des demi-droites issues de A (angle a1) et de B (angle a2).
  // Loi des sinus : AC = sin(a2) / sin(a3).
  const rad = (deg) => deg * Math.PI / 180;
  const AC = Math.sin(rad(a2)) / Math.sin(rad(a3));
  const cxU = AC * Math.cos(rad(a1)), cyU = AC * Math.sin(rad(a1));

  const largeurU = Math.max(1, cxU) - Math.min(0, cxU);
  // Marge supplementaire : les etiquettes d'angle se posent a l'interieur mais
  // debordent sur un triangle tres plat.
  const e = echelleFigure(largeurU * 1.15, Math.max(cyU, 0.4) * 1.15);
  const w = e, hx = cxU * e, hy = cyU * e;

  const xMin = Math.min(0, hx), xMax = Math.max(w, hx);
  const x0 = (FIG_L - (xMax - xMin)) / 2 - xMin;
  const yBas = (FIG_H + hy) / 2 - 4;

  const A = [x0, yBas], B = [x0 + w, yBas], C = [x0 + hx, yBas - hy];
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  /* Etiquette d'angle posee A L'INTERIEUR, sur la bissectrice du sommet :
     c'est le seul placement qui reste correct quelle que soit la forme tiree
     (un decalage fixe sortirait de la figure sur un triangle tres plat). */
  const etiq = (sommet, v1, v2, texte) => {
    const u = (p, q) => {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1;
      return [(q[0] - p[0]) / d, (q[1] - p[1]) / d];
    };
    const d1 = u(sommet, v1), d2 = u(sommet, v2);
    const bx = d1[0] + d2[0], by = d1[1] + d2[1];
    const n = Math.hypot(bx, by) || 1;
    /* LE RECUL EST BORNE PAR LA TAILLE DU SOMMET (correction du 2026-09-12).
       Il valait 30 en dur, quelle que soit la forme. Sur un triangle isocele
       pointu, les deux bissectrices de base se rejoignent avant 30 unites :
       les deux etiquettes « ? » se posaient au MEME endroit — a 0,06 unite
       l'une de l'autre pour un angle au sommet de 30 degres, soit un seul
       glyphe surimprime. Or ce sont justement les deux angles cherches : la
       figure ne posait plus sa question. 9 valeurs d'angle au sommet du
       domaine (22 a 38 degres) etaient touchees.
       On limite donc le recul au tiers du plus court des deux cotes issus du
       sommet : l'etiquette reste dans le coin qui lui appartient, et deux
       etiquettes ne peuvent plus se croiser. */
    const c1 = Math.hypot(v1[0] - sommet[0], v1[1] - sommet[1]);
    const c2 = Math.hypot(v2[0] - sommet[0], v2[1] - sommet[1]);
    const D = Math.max(13, Math.min(30, Math.min(c1, c2) / 3));
    return `<text class="annotation-label" x="${nb2(sommet[0] + bx / n * D)}" y="${nb2(sommet[1] + by / n * D + 4)}" text-anchor="middle">${texte}</text>`;
  };

  /* `cherche` designe le ou les angles INCONNUS de l'exercice, ceux que la
     figure ne doit surtout pas chiffrer :
       - 'sommet' (defaut) : les deux angles de base sont donnes, le troisieme
         est cherche — le cas « somme des angles d'un triangle » ;
       - 'base' : c'est l'angle au sommet qui est donne et les deux angles a la
         base qui sont cherches — le cas du triangle isocele. */
  const cherche = o.cherche === undefined ? 'sommet' : o.cherche;
  const baseCachee = cherche === 'base';

  return svgFigure(`Triangle dont ${baseCachee ? 'l angle au sommet mesure ' + a3 : 'deux angles mesurent ' + a1 + ' et ' + a2} degres`, [
    `<polygon class="frame-line" points="${P(A)} ${P(B)} ${P(C)}" fill="${APLAT}"></polygon>`,
    etiq(A, B, C, baseCachee ? marque : `${a1}°`),
    etiq(B, C, A, baseCachee ? marque : `${a2}°`),
    etiq(C, A, B, baseCachee ? `${a3}°` : marque)
  ].join(''));
}

/* Deux angles adjacents formant un angle droit (total 90) ou plat (total 180).
   Les secteurs sont traces a leurs VRAIES mesures : la figure se lit au
   rapporteur. */
function figureAnglesAdjacents(a, total, options) {
  const o = options || {};
  const marque = o.marque === undefined ? '?' : o.marque;
  const R = 62;
  const cx = FIG_L / 2, cy = FIG_H - 52;

  const rad = (deg) => deg * Math.PI / 180;
  // Repere SVG : l'axe y descend, on nie donc le sinus pour que les angles
  // montent, comme sur une figure de geometrie.
  const pt = (deg, rayon) => [cx + rayon * Math.cos(rad(deg)), cy - rayon * Math.sin(rad(deg))];
  const N = (p) => nb2(p[0]) + ' ' + nb2(p[1]);
  const P0 = pt(0, R), Pa = pt(a, R), Pt = pt(total, R);

  /* Secteurs : un <path> avec un arc A. svg2tikz sait convertir A (annexe F.6
     de SVG 1.1). Le drapeau « sens » vaut 0 : dans le repere SVG (y vers le
     bas) un arc trigonometrique direct se decrit en sens horaire. */
  const rs = R * 0.6;
  const secteur = (deg1, deg2, opacite) =>
    `<path class="grid-line" fill="color-mix(in srgb, var(--diagram-accent) ${opacite}%, transparent)" ` +
    `d="M${nb2(cx)} ${nb2(cy)} L${N(pt(deg1, rs))} A${nb2(rs)} ${nb2(rs)} 0 0 0 ${N(pt(deg2, rs))} Z"></path>`;

  const mid = (deg) => pt(deg, R * 0.84);
  return svgFigure(`Deux angles adjacents dont l un mesure ${a} degres`, [
    secteur(0, a, 26),
    secteur(a, total, 12),
    `<line class="frame-line" x1="${nb2(cx)}" y1="${nb2(cy)}" x2="${nb2(P0[0])}" y2="${nb2(P0[1])}"></line>`,
    `<line class="frame-line" x1="${nb2(cx)}" y1="${nb2(cy)}" x2="${nb2(Pa[0])}" y2="${nb2(Pa[1])}"></line>`,
    `<line class="frame-line" x1="${nb2(cx)}" y1="${nb2(cy)}" x2="${nb2(Pt[0])}" y2="${nb2(Pt[1])}"></line>`,
    `<text class="annotation-label" x="${nb2(mid(a / 2)[0])}" y="${nb2(mid(a / 2)[1] + 4)}" text-anchor="middle">${a}°</text>`,
    `<text class="annotation-label" x="${nb2(mid((a + total) / 2)[0])}" y="${nb2(mid((a + total) / 2)[1] + 4)}" text-anchor="middle">${marque}</text>`
  ].join(''));
}

/* --- Symetrie axiale ---------------------------------------------------
   Un point A, l'axe de pliure, et l'emplacement du symetrique cherche. Les
   abscisses dessinees sont les VRAIES : la graduation est celle de l'enonce et
   le point A tombe reellement sur sa valeur. Le symetrique est marque d'un
   cercle vide et d'un « ? » : la figure montre OU il se trouve, jamais sa
   valeur — elle ne doit pas donner la reponse. */
function figureSymetrie(valeurA, valeurAxe, options) {
  const o = options || {};
  const nomVar = o.variable === undefined ? 'x' : o.variable;
  const symetrique = 2 * valeurAxe - valeurA;

  // Graduation : on encadre les trois valeurs utiles avec une unite de marge.
  const vals = [valeurA, valeurAxe, symetrique];
  const min = Math.floor(Math.min.apply(null, vals)) - 1;
  const max = Math.ceil(Math.max.apply(null, vals)) + 1;
  const e = (FIG_L - 2 * FIG_MARGE) / (max - min);
  const X = (v) => FIG_MARGE + (v - min) * e;
  const yAxe = FIG_H / 2 + 12;

  const traits = [
    `<line class="axis" x1="${nb2(FIG_MARGE - 10)}" y1="${nb2(yAxe)}" x2="${nb2(FIG_L - FIG_MARGE + 10)}" y2="${nb2(yAxe)}"></line>`
  ];
  /* Graduations entieres ; une sur deux quand elles seraient serrees.

     LA PARITE DU DEPART N'EST PAS LIBRE (correction du 2026-09-12). Au pas de
     2, partir de `min` graduait une valeur sur deux SANS egard pour les trois
     valeurs utiles : sur figureSymetrie(8, 2), min valait -5 et la regle
     n'affichait que des impairs (-5, -3, -1, 1...) alors que A = 8, l'axe = 2
     et la reponse = -4 sont tous pairs. Aucune des trois n'avait de trait :
     A tombait entre « 7 » et « 9 », et la figure — dont TOUTE la raison d'etre
     est de laisser lire le symetrique sur la regle — devenait illisible
     precisement dans les cas les plus larges. On cale donc le depart sur la
     parite de l'axe : valeurAxe, valeurA et le symetrique 2*valeurAxe-valeurA
     ont necessairement la meme parite entre eux des que l'ecart A-axe est
     entier, si bien qu'un depart de meme parite que l'axe les gradue tous les
     trois. 7 tirages sur 42 etaient touches. */
  const pas = (max - min) > 12 ? 2 : 1;
  const depart = pas === 1 ? min
    : min + (((valeurAxe - min) % pas) + pas) % pas;
  for (let v = depart; v <= max; v += pas) {
    traits.push(`<line class="grid-line" x1="${nb2(X(v))}" y1="${nb2(yAxe - 4)}" x2="${nb2(X(v))}" y2="${nb2(yAxe + 4)}"></line>`);
    traits.push(`<text class="tick-label" x="${nb2(X(v))}" y="${nb2(yAxe + 18)}" text-anchor="middle">${v}</text>`);
  }
  // L'axe de symetrie : la « pliure », en pointilles.
  traits.push(`<line class="guide-line" x1="${nb2(X(valeurAxe))}" y1="${nb2(yAxe - 58)}" x2="${nb2(X(valeurAxe))}" y2="${nb2(yAxe + 26)}"></line>`);
  traits.push(`<text class="label-soft" x="${nb2(X(valeurAxe))}" y="${nb2(yAxe - 64)}" text-anchor="middle">axe ${nomVar} = ${fr(valeurAxe)}</text>`);
  // Le point A, a sa vraie place.
  traits.push(`<circle class="plot-point" cx="${nb2(X(valeurA))}" cy="${nb2(yAxe)}" r="3"></circle>`);
  traits.push(`<text class="annotation-label" x="${nb2(X(valeurA))}" y="${nb2(yAxe - 14)}" text-anchor="middle">A</text>`);
  // L'emplacement cherche : cercle vide, jamais chiffre.
  traits.push(`<circle class="plot-point-alt" cx="${nb2(X(symetrique))}" cy="${nb2(yAxe)}" r="3"></circle>`);
  traits.push(`<text class="annotation-label" x="${nb2(X(symetrique))}" y="${nb2(yAxe - 14)}" text-anchor="middle">A' = ?</text>`);

  return svgFigure(`Point A et axe de symetrie ${nomVar} = ${valeurAxe}`, traits.join(''));
}

/* --- Losange sur ses diagonales ----------------------------------------
   AJOUTE LE 2026-09-13 pour le chapitre pilote de cinquieme
   (5e-parallelogrammes), ou le generateur ne tire que des aires de losange a
   partir des deux diagonales. Servira aussi en quatrieme et en troisieme : le
   losange reste l'aire « qui ne se lit pas comme base fois hauteur ».

   POURQUOI UNE FIGURE ICI. L'erreur du chapitre n'est pas un calcul, c'est une
   lecture : l'eleve prend les diagonales pour des cotes et applique « cote fois
   cote ». Dessiner les deux diagonales A L'INTERIEUR du quadrilatere, cotees,
   et les cotes NON cotes, montre en un regard que les nombres de l'enonce sont
   les traits interieurs — ce que la phrase seule ne fait pas.

   A L'ECHELLE, et c'est le point a ne pas rater : le rapport d1/d2 du dessin
   est celui de l'enonce, si bien qu'un losange tres aplati se voit aplati. Le
   plafond de rapport commun (borner) s'applique, avec la mention « non a
   l'echelle » au-dela — un tirage 12 x 3 passerait sinon pour une aiguille.

   L'AIRE N'EST JAMAIS ECRITE : c'est la reponse cherchee. On cote les deux
   diagonales, rien d'autre. */
function figureLosange(d1, d2, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  // d1 horizontale, d2 verticale. `borner` rend les dimensions A DESSINER.
  const d = borner(d1, d2);

  /* La cote de la diagonale verticale s'ecrit a gauche, hors du dessin : on lui
     reserve sa largeur, comme figureRectangle le fait pour la largeur. */
  const reserve = largeurEtiquette(`d2 = ${coteFig(d2, unite)}`) + 10;
  const e = echelleFigure(d.a, d.b, reserve, FIG_MARGE);
  const w = d.a * e, h = d.b * e;
  const cx = reserve + (FIG_L - reserve - FIG_MARGE - w) / 2 + w / 2;
  const cy = (FIG_H - h) / 2 - 6 + h / 2;

  /* Les quatre sommets sont les EXTREMITES des diagonales : c'est la definition
     meme du losange sur ses diagonales, et cela garantit que les quatre cotes
     sortent egaux sans qu'on ait a les calculer (symetrie par rapport aux deux
     axes). */
  const gauche = `${nb2(cx - w / 2)},${nb2(cy)}`;
  const droite = `${nb2(cx + w / 2)},${nb2(cy)}`;
  const haut = `${nb2(cx)},${nb2(cy - h / 2)}`;
  const bas = `${nb2(cx)},${nb2(cy + h / 2)}`;

  // Angle droit des diagonales, code par un petit carre au centre — jamais par
  // un arc (convention du projet). Trace vers le quart superieur droit.
  const k = 7;
  return svgFigure(`Losange de diagonales ${coteFig(d1, unite)} et ${coteFig(d2, unite)}`, [
    `<polygon class="frame-line" points="${gauche} ${haut} ${droite} ${bas}" fill="${APLAT}"></polygon>`,
    // Les diagonales, en trait de construction : ce sont elles que l'enonce
    // chiffre, et elles seules.
    `<line class="guide-line" x1="${nb2(cx - w / 2)}" y1="${nb2(cy)}" x2="${nb2(cx + w / 2)}" y2="${nb2(cy)}"></line>`,
    `<line class="guide-line" x1="${nb2(cx)}" y1="${nb2(cy - h / 2)}" x2="${nb2(cx)}" y2="${nb2(cy + h / 2)}"></line>`,
    `<path class="grid-line" fill="none" d="M${nb2(cx + k)} ${nb2(cy)} L${nb2(cx + k)} ${nb2(cy - k)} L${nb2(cx)} ${nb2(cy - k)}"></path>`,
    `<circle class="plot-point" cx="${nb2(cx)}" cy="${nb2(cy)}" r="2.5"></circle>`,
    // La cote horizontale sous la figure, la verticale a gauche et a
    // l'exterieur : une etiquette posee dans l'aplat perdrait sa reserve
    // blanche a la conversion et serait barree par le trait.
    `<text class="annotation-label" x="${nb2(cx)}" y="${nb2(cy + h / 2 + 22)}" text-anchor="middle">d1 = ${coteFig(d1, unite)}</text>`,
    `<text class="annotation-label" x="${nb2(cx - w / 2 - 10)}" y="${nb2(cy + 4)}" text-anchor="end">d2 = ${coteFig(d2, unite)}</text>`,
    d.comprime ? figureHorsEchelle(FIG_L / 2, FIG_H - 6) : ''
  ].join(''));
}

/* --- Parallelogramme base et hauteur -----------------------------------
   AJOUTE LE 2026-09-13, meme chapitre pilote. Repond a l'autre malentendu du
   chapitre, distinct du precedent : l'eleve multiplie la base par le COTE
   OBLIQUE au lieu de la hauteur, parce que le cote oblique est le trait qu'il
   voit et que la hauteur, elle, n'est pas dessinee dans l'enonce.

   La figure trace donc la hauteur EN TRAIT DE CONSTRUCTION, du sommet
   superieur perpendiculairement a la base, avec l'angle droit code, et cote la
   base et la hauteur. Le cote oblique n'est volontairement PAS cote : lui
   donner un nombre inviterait a l'utiliser, ce qui est exactement l'erreur.

   A L'ECHELLE : base et hauteur dans le rapport de l'enonce, decalage oblique
   fixe a 30 % de la base (assez pour qu'on voie que le cote n'est pas la
   hauteur, pas assez pour sortir du cadre). */
function figureParallelogramme(base, hauteur, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const d = borner(base, hauteur);

  const reserve = largeurEtiquette(`h = ${coteFig(hauteur, unite)}`) + 10;
  /* Le decalage oblique s'ajoute a l'encombrement AVANT le choix de l'echelle,
     sinon le sommet superieur droit sortirait du viewBox (lecon de figurePave,
     ou la fuyante avait le meme effet). */
  const DECALAGE = 0.3;
  const e = echelleFigure(d.a * (1 + DECALAGE), d.b, reserve, FIG_MARGE);
  const w = d.a * e, h = d.b * e, dx = w * DECALAGE;
  const x0 = reserve + (FIG_L - reserve - FIG_MARGE - (w + dx)) / 2;
  const yBas = (FIG_H + h) / 2 - 6;
  const yHaut = yBas - h;

  const k = 7;
  return svgFigure(`Parallelogramme de base ${coteFig(base, unite)} et de hauteur ${coteFig(hauteur, unite)}`, [
    `<polygon class="frame-line" points="${nb2(x0)},${nb2(yBas)} ${nb2(x0 + w)},${nb2(yBas)} ${nb2(x0 + w + dx)},${nb2(yHaut)} ${nb2(x0 + dx)},${nb2(yHaut)}" fill="${APLAT}"></polygon>`,
    // La hauteur : du sommet superieur GAUCHE jusqu'au pied sur la base, a la
    // verticale. Le pied tombe a l'interieur de la base, ce qui est le cas
    // lisible ; l'angle droit y est code par un carre.
    `<line class="guide-line" x1="${nb2(x0 + dx)}" y1="${nb2(yHaut)}" x2="${nb2(x0 + dx)}" y2="${nb2(yBas)}"></line>`,
    `<path class="grid-line" fill="none" d="M${nb2(x0 + dx + k)} ${nb2(yBas)} L${nb2(x0 + dx + k)} ${nb2(yBas - k)} L${nb2(x0 + dx)} ${nb2(yBas - k)}"></path>`,
    `<text class="annotation-label" x="${nb2(x0 + w / 2)}" y="${nb2(yBas + 22)}" text-anchor="middle">base = ${coteFig(base, unite)}</text>`,
    `<text class="annotation-label" x="${nb2(x0 + dx - 10)}" y="${nb2(yHaut + h / 2 + 4)}" text-anchor="end">h = ${coteFig(hauteur, unite)}</text>`,
    d.comprime ? figureHorsEchelle(FIG_L / 2, FIG_H - 6) : ''
  ].join(''));
}

/* DEUX PARALLELES COUPEES PAR UNE SECANTE (2026-09-13, pour la cinquieme).

   POURQUOI CE HELPER. Les enonces du chapitre « Angles et parallelisme »
   disent « un angle alterne-interne mesure 47 degres, combien mesure l'angle
   associe ? » sans montrer DE QUEL angle il s'agit. L'eleve doit reconstituer
   de tete une configuration a huit angles, ce qui est precisement la
   difficulte du chapitre — et rien ne l'y aide. La figure donne l'angle connu
   et marque d'un point d'interrogation celui qu'on cherche : elle pose la
   question, elle ne la resout pas (convention du manuel, section 9 du cahier
   des charges).

   L'INCLINAISON DE LA SECANTE EST CALCULEE A PARTIR DE L'ANGLE DEMANDE, elle
   n'est pas fixe : dessiner 47 degres comme on dessine 130 degres ferait
   mentir la figure, et c'est exactement le defaut que la 6e a paye onze fois.
   L'angle entre la secante et les horizontales vaut donc `angle` au degre
   pres, verifiable par produit scalaire.

   Types traites, qui sont ceux du generateur :
     - 'alterne-interne' : de part et d'autre de la secante, entre les deux
       paralleles ; les deux angles sont EGAUX ;
     - 'correspondant' : du meme cote de la secante, en positions homologues ;
       egaux aussi ;
     - 'interne' : du meme cote de la secante, entre les paralleles ;
       SUPPLEMENTAIRES.

   Etiquettes : pas de capitales ni d'article elide (contrainte du
   convertisseur), et une seule pointe de fleche par trait. */
function figureSecanteParalleles(angle, type, options) {
  const o = options || {};
  const marque = o.marque === undefined ? '?' : o.marque;

  // Les deux paralleles, horizontales, ecartees d'ECART unites.
  const ECART = 74;
  const yHaut = (FIG_H - ECART) / 2 + 4;
  const yBas = yHaut + ECART;
  const xG = FIG_MARGE - 12, xD = FIG_L - FIG_MARGE + 12;

  /* La secante coupe la parallele du HAUT en (xI, yHaut) et fait avec elle
     l'angle `angle`, mesure du cote droit. Sa pente decoule donc directement
     de l'angle demande : c'est ce qui rend la figure fidele. Pour un angle
     obtus, la secante penche dans l'autre sens, ce que tan() donne tout seul.
     On protege le cas 90 degres, ou tan diverge. */
  const rad = angle * Math.PI / 180;
  const cot = Math.abs(angle - 90) < 0.5 ? 0 : Math.cos(rad) / Math.sin(rad);
  const xI = FIG_L / 2 - (ECART * cot) / 2;   // centre le croisement du bas
  const xJ = xI + ECART * cot;                // intersection avec la parallele basse

  // Prolongements de la secante au-dela des deux paralleles.
  const DEB = 26;
  const xA = xI - DEB * cot, yA = yHaut - DEB;
  const xB = xJ + DEB * cot, yB = yBas + DEB;

  /* Positions des deux etiquettes. L'angle CONNU se pose toujours au
     croisement du haut, l'angle CHERCHE au croisement du bas : l'eleve lit
     ainsi de haut en bas, et les deux marques ne se chevauchent jamais.
     Le decalage se fait le long de la bissectrice du secteur concerne, ce qui
     est la convention de placement du manuel. */
  const D = 30;
  function pos(x, y, deg) {
    const r = deg * Math.PI / 180;
    return [x + D * Math.cos(r), y - D * Math.sin(r)];
  }
  // Secteur de l'angle connu, en haut : entre l'horizontale droite et la
  // secante montante, sa bissectrice est donc a angle/2.
  const hautDeg = angle / 2;
  // L'angle cherche depend du type.
  //  - alterne-interne : cote GAUCHE en bas, entre la secante et
  //    l'horizontale gauche, bissectrice a 180 - angle/2 ;
  //  - correspondant : meme position qu'en haut, donc angle/2 ;
  //  - interne (meme cote) : cote DROIT en bas, entre l'horizontale droite et
  //    la secante descendante, bissectrice a -(180 - angle)/2 ramenee au-dessus
  //    de la parallele basse.
  let basDeg;
  if (type === 'correspondant') {
    // Position homologue de celle du haut : meme secteur, meme bissectrice.
    basDeg = angle / 2;
  } else if (type === 'alterne-interne') {
    // De l'AUTRE cote de la secante, entre les deux paralleles : le secteur
    // s'ouvre vers la gauche, sa bissectrice est donc a 180 - angle/2.
    basDeg = 180 - angle / 2;
  } else {
    // Interne du meme cote : entre l'horizontale droite et la secante, au-
    // dessus de la parallele basse. Le secteur mesure 180 - angle, sa
    // bissectrice est donc a la moitie de cette ouverture.
    basDeg = (180 - angle) / 2;
  }
  const pHaut = pos(xI, yHaut, hautDeg);
  const pBas = pos(xJ, yBas, basDeg);

  return svgFigure(
    'Deux droites paralleles coupees par une secante, angle de ' + angle + ' degres',
    [
      // Les deux paralleles, chacune avec UNE seule pointe de fleche.
      `<line class="frame-line" x1="${nb2(xG)}" y1="${nb2(yHaut)}" x2="${nb2(xD)}" y2="${nb2(yHaut)}"></line>`,
      `<path class="grid-line" fill="none" d="M${nb2(xD - 8)} ${nb2(yHaut - 5)} L${nb2(xD)} ${nb2(yHaut)} L${nb2(xD - 8)} ${nb2(yHaut + 5)}"></path>`,
      `<line class="frame-line" x1="${nb2(xG)}" y1="${nb2(yBas)}" x2="${nb2(xD)}" y2="${nb2(yBas)}"></line>`,
      `<path class="grid-line" fill="none" d="M${nb2(xD - 8)} ${nb2(yBas - 5)} L${nb2(xD)} ${nb2(yBas)} L${nb2(xD - 8)} ${nb2(yBas + 5)}"></path>`,
      // La secante.
      `<line class="guide-line" x1="${nb2(xA)}" y1="${nb2(yA)}" x2="${nb2(xB)}" y2="${nb2(yB)}"></line>`,
      // Les deux points de croisement.
      `<circle class="plot-point" cx="${nb2(xI)}" cy="${nb2(yHaut)}" r="3"></circle>`,
      `<circle class="plot-point" cx="${nb2(xJ)}" cy="${nb2(yBas)}" r="3"></circle>`,
      // L'angle CONNU, chiffre.
      `<text class="annotation-label" x="${nb2(pHaut[0])}" y="${nb2(pHaut[1])}" text-anchor="middle">${angle}°</text>`,
      // L'angle CHERCHE : un point d'interrogation, jamais sa valeur.
      `<text class="annotation-label" x="${nb2(pBas[0])}" y="${nb2(pBas[1])}" text-anchor="middle">${marque}</text>`
    ].join('')
  );
}

/* =========================================================
   HELPERS AJOUTES POUR LA QUATRIEME (2026-09-13)

   POURQUOI UNE NOUVELLE SERIE : la bibliotheque du 2026-09-12 a ete ecrite
   pour la sixieme, ou la geometrie se MESURE (perimetres, aires, volumes,
   symetrie). La quatrieme change de nature : on n'y mesure plus, on y CALCULE
   une longueur inconnue a partir des autres (Pythagore, cosinus), et on y
   construit (translations, droites remarquables). Les figures doivent donc
   faire deux choses que les helpers de sixieme ne savaient pas faire :

     1. MARQUER L'ANGLE DROIT. C'est la donnee qui autorise Pythagore, et un
        eleve qui ne la voit pas ne sait pas quel theoreme appliquer.
        Convention du cahier des charges (section 9) : un carre, jamais un arc.

     2. CACHER L'INCONNUE. En sixieme la figure cotait tout, parce que tout
        etait donne. Ici le cote cherche porte un point d'interrogation et
        jamais sa valeur : sinon la figure resout l'exercice au lieu de le
        poser.

   REGLE DE FIDELITE, plus exigeante qu'en sixieme. Un triangle annonce
   rectangle doit l'etre REELLEMENT dans le dessin, au produit scalaire, et un
   cosinus annonce doit correspondre au rapport des longueurs tracees. Ce n'est
   pas une precaution de style : un eleve de quatrieme verifie a l'equerre, et
   une hypotenuse dessinee plus courte qu'un cote de l'angle droit detruirait
   la seule intuition que le chapitre cherche a installer. Les tests de
   scripts/manuel/tests/figures-exercices.test.js verifient ces proprietes par
   le CALCUL, jamais a l'oeil.
   ========================================================= */

/* --- Triangle rectangle cote ------------------------------------------
   Triangle rectangle dont l'angle droit est en bas a gauche. Les deux cotes de
   l'angle droit sont dessines HORIZONTAL et VERTICAL : c'est la position
   canonique des manuels, et surtout l'angle droit y est exact PAR
   CONSTRUCTION, sans dependre de la precision d'un trace oblique.

   `inconnu` dit lequel des trois cotes est cherche : 'hypotenuse', 'vertical'
   ou 'horizontal'. Celui-la porte le point d'interrogation, les deux autres
   leur valeur. La figure pose donc exactement la question de l'enonce, et une
   seule.

   Les trois longueurs passees doivent verifier Pythagore : c'est l'appelant qui
   en repond (les generateurs tirent dans une liste de triplets). On ne corrige
   pas en silence une donnee fausse, la figure serait alors fidele a autre chose
   qu'a l'enonce. */
function figureTriangleRectangle(horizontal, vertical, hypotenuse, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const inconnu = o.inconnu === undefined ? 'hypotenuse' : o.inconnu;
  const noms = o.noms || { droit: 'A', horizontal: 'C', vertical: 'B' };

  const d = borner(horizontal, vertical);
  /* Les cotes s'ecrivent a l'EXTERIEUR du triangle (le vertical a gauche,
     l'horizontal sous la base) : une etiquette posee dans l'aplat perd sa
     reserve blanche a la conversion TikZ et se fait barrer par le trait. On
     reserve donc la largeur reelle de l'etiquette de gauche, comme le fait
     figureRectangle depuis le 2026-09-12. */
  /* `masquer` : cotes a dessiner SANS etiquette (correctif du 2026-09-13).
     Une figure ne doit montrer que les donnees de l'enonce. Sur le chapitre
     cosinus, l'enonce donne le cosinus et le cote adjacent ; coter en plus le
     cote oppose, que l'enonce ne fournit pas, permettait de repondre par
     Pythagore SANS employer le cosinus — l'exercice etait contourne par sa
     propre figure. Le cote masque reste trace, puisqu'il existe, mais il se
     tait. */
  const masquer = Array.isArray(o.masquer) ? o.masquer : [];
  const muet = (cote) => masquer.indexOf(cote) >= 0;
  const etiqV = muet('vertical') ? '' : (inconnu === 'vertical' ? '?' : coteFig(vertical, unite));
  const etiqH = muet('horizontal') ? '' : (inconnu === 'horizontal' ? '?' : coteFig(horizontal, unite));
  const etiqHyp = muet('hypotenuse') ? '' : (inconnu === 'hypotenuse' ? '?' : coteFig(hypotenuse, unite));
  const reserveG = etiqV ? largeurEtiquette(etiqV) + 16 : FIG_MARGE;
  const reserveD = etiqHyp ? largeurEtiquette(etiqHyp) + 18 : FIG_MARGE;
  const e = echelleFigure(d.a, d.b, reserveG, reserveD);
  const w = d.a * e, h = d.b * e;
  const gauche = Math.max(FIG_MARGE, reserveG), droite = Math.max(FIG_MARGE, reserveD);
  const x0 = gauche + (FIG_L - gauche - droite - w) / 2;
  const yBas = (FIG_H + h) / 2 - 10;

  const D = [x0, yBas];                 // sommet de l'angle droit
  const H = [x0 + w, yBas];             // extremite du cote horizontal
  const V = [x0, yBas - h];             // extremite du cote vertical
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  // Codage de l'angle droit : un carre pose dans le coin, en path ouvert.
  const k = 9;
  const traits = [
    '<polygon class="frame-line" points="' + P(D) + ' ' + P(H) + ' ' + P(V) + '" fill="' + APLAT + '"></polygon>',
    '<path class="grid-line" fill="none" d="M' + nb2(x0 + k) + ' ' + nb2(yBas) +
      ' L' + nb2(x0 + k) + ' ' + nb2(yBas - k) + ' L' + nb2(x0) + ' ' + nb2(yBas - k) + '"></path>',
    // Une etiquette vide n'est pas ecrite du tout : un noeud TikZ sans contenu
    // poserait quand meme sa reserve blanche et effacerait le trait dessous.
    etiqH ? '<text class="annotation-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(yBas + 22) + '" text-anchor="middle">' + etiqH + '</text>' : '',
    etiqV ? '<text class="annotation-label" x="' + nb2(x0 - 10) + '" y="' + nb2(yBas - h / 2 + 4) + '" text-anchor="end">' + etiqV + '</text>' : '',
    /* L'hypotenuse se cote le long de son trait, decalee vers l'exterieur du
       triangle (a droite et vers le haut), jamais dans l'aplat. */
    etiqHyp ? '<text class="annotation-label" x="' + nb2((H[0] + V[0]) / 2 + 12) + '" y="' + nb2((H[1] + V[1]) / 2 - 4) + '" text-anchor="start">' + etiqHyp + '</text>' : '',
    // Noms des sommets, poses hors du triangle.
    '<text class="tick-label" x="' + nb2(x0 - 8) + '" y="' + nb2(yBas + 16) + '" text-anchor="end">' + noms.droit + '</text>',
    '<text class="tick-label" x="' + nb2(H[0] + 8) + '" y="' + nb2(yBas + 16) + '" text-anchor="start">' + noms.horizontal + '</text>',
    '<text class="tick-label" x="' + nb2(x0 - 8) + '" y="' + nb2(V[1] - 6) + '" text-anchor="end">' + noms.vertical + '</text>',
    d.comprime ? figureHorsEchelle(FIG_L / 2, FIG_H - 4) : ''
  ];
  return svgFigure('Triangle rectangle de cotes ' + coteFig(horizontal, unite) + ' et ' + coteFig(vertical, unite), traits.join(''));
}

/* --- Triangle quelconque, a tester par la reciproque -------------------
   Les TROIS cotes sont donnes et la question est « ce triangle est-il
   rectangle ? ». La figure doit donc se garder de repondre : aucun angle droit
   n'y est code, meme quand le triplet en est un. C'est l'application directe de
   la regle « une figure ne divulgue pas ce qu'elle demande de trouver »
   (cahier des charges, section 9).

   Le dessin est construit par INTERSECTION DE DEUX CERCLES, la construction au
   compas : les trois longueurs imposent la forme entiere, donc le triangle
   dessine a exactement les proportions de l'enonce. Un eleve qui pose son
   equerre sur le sommet voit le vrai resultat, ce qui est precisement l'enjeu
   de la reciproque. */
function figureTriangleTroisCotes(a, b, c, options) {
  const o = options || {};
  const unite = o.unite === undefined ? '' : o.unite;
  const noms = o.noms || { A: 'A', B: 'B', C: 'C' };

  /* On pose le plus GRAND cote en base : c'est ce qui donne le triangle le plus
     large et le mieux cadre, et cela ecarte le cas ou le sommet sortirait
     lateralement du viewBox. Les trois cotes restent ceux de l'enonce, seule
     leur place dans le dessin change. */
  const tri = [a, b, c].slice().sort((x, y) => y - x);
  const base = tri[0], cg = tri[1], cd = tri[2];

  /* Sommet C : a la distance cg de A(0,0) et cd de B(base,0). Abscisse par la
     relation d'Al-Kashi ramenee aux coordonnees, ordonnee par Pythagore. */
  const xc = (base * base + cg * cg - cd * cd) / (2 * base);
  const yc2 = cg * cg - xc * xc;
  /* Un triplet qui ne ferme aucun triangle (inegalite triangulaire violee) n'a
     pas de figure. On rend la chaine vide : schema.js traite une figure vide
     comme une figure absente, ce qui vaut infiniment mieux qu'un dessin
     invente. */
  if (!(yc2 > 0)) return '';
  const yc = Math.sqrt(yc2);

  const largeurU = Math.max(base, xc) - Math.min(0, xc);
  const e = echelleFigure(largeurU, yc, FIG_MARGE + 16, FIG_MARGE + 16);
  const hx = xc * e, hy = yc * e, w = base * e;

  const xMin = Math.min(0, hx), xMax = Math.max(w, hx);
  const x0 = (FIG_L - (xMax - xMin)) / 2 - xMin;
  const yBas = (FIG_H + hy) / 2 - 10;

  const A = [x0, yBas], B = [x0 + w, yBas], C = [x0 + hx, yBas - hy];
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  return svgFigure('Triangle de cotes ' + a + ', ' + b + ' et ' + c, [
    '<polygon class="frame-line" points="' + P(A) + ' ' + P(B) + ' ' + P(C) + '" fill="' + APLAT + '"></polygon>',
    '<text class="annotation-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(yBas + 22) + '" text-anchor="middle">' + coteFig(base, unite) + '</text>',
    '<text class="annotation-label" x="' + nb2((A[0] + C[0]) / 2 - 12) + '" y="' + nb2((A[1] + C[1]) / 2) + '" text-anchor="end">' + coteFig(cg, unite) + '</text>',
    '<text class="annotation-label" x="' + nb2((B[0] + C[0]) / 2 + 12) + '" y="' + nb2((B[1] + C[1]) / 2) + '" text-anchor="start">' + coteFig(cd, unite) + '</text>',
    '<text class="tick-label" x="' + nb2(A[0] - 8) + '" y="' + nb2(yBas + 16) + '" text-anchor="end">' + noms.A + '</text>',
    '<text class="tick-label" x="' + nb2(B[0] + 8) + '" y="' + nb2(yBas + 16) + '" text-anchor="start">' + noms.B + '</text>',
    '<text class="tick-label" x="' + nb2(C[0]) + '" y="' + nb2(C[1] - 8) + '" text-anchor="middle">' + noms.C + '</text>'
  ].join(''));
}

/* =========================================================
   HELPERS AJOUTES POUR LA TROISIEME (2026-09-13)

   INSERES A LA FIN DU FICHIER, ET NULLE PART AILLEURS. Deux sessions de la
   vague precedente ont ajoute leurs helpers au MEME endroit du fichier, au
   milieu, et ont produit un conflit au merge que personne n'avait vu venir.
   Toute vague suivante ajoute donc son bloc en queue, sous un titre qui la
   nomme : deux blocs ajoutes en queue se juxtaposent, ils ne se chevauchent
   jamais.

   CE QUE LA TROISIEME DEMANDE DE PLUS. La quatrieme calculait une longueur
   dans UN triangle. La troisieme met deux figures en correspondance : Thales
   compare deux triangles emboites (ou croises), l'homothetie transforme une
   figure en une autre. La propriete a dessiner n'est plus « cet angle est
   droit » mais « ces deux droites sont PARALLELES » et « ce rapport vaut
   exactement k ».

   REGLE DE FIDELITE, la plus stricte des trois vagues. Un parallelisme
   approximatif est indetectable a l'oeil et faux au produit vectoriel : c'est
   exactement le type de defaut que les vingt et une erreurs de figures des
   ouvrages precedents ont illustre. Les helpers ci-dessous garantissent donc
   le parallelisme PAR CONSTRUCTION — les points de la seconde parallele sont
   obtenus en multipliant les vecteurs de la premiere par le meme scalaire k,
   jamais en les posant a vue. Les tests de
   scripts/manuel/tests/figures-exercices.test.js le verifient au produit
   vectoriel, et le rapport mesure sur le dessin est compare au rapport
   annonce.
   ========================================================= */

/* --- Configuration de Thales ------------------------------------------
   Deux secantes issues de O, coupees par deux paralleles (AB) et (A'B').

   `croisee` a false : configuration en TRIANGLE EMBOITE, le petit triangle
   OAB est a l'interieur du grand. C'est la configuration la plus frequente et
   la plus lisible.

   `croisee` a true : configuration en PAPILLON, O est ENTRE les deux
   paralleles. C'est la source d'erreur numero un du chapitre : l'eleve croit
   la configuration inapplicable parce qu'elle ne ressemble pas au dessin du
   cours. La figure la montre donc telle quelle, sans la redresser.

   `inconnu` dit lequel des quatre segments cotables porte le point
   d'interrogation : 'OA', 'OAp', 'AB' ou 'ABp'. Les autres portent leur
   valeur. La figure pose la question de l'enonce, et une seule.

   Le rapport k = OAp / OA est le SEUL parametre de forme : les deux paralleles
   en decoulent. C'est ce qui rend le parallelisme exact et le rapport dessine
   egal au rapport annonce. */
function figureThales(OA, OAp, AB, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const croisee = !!o.croisee;
  const inconnu = o.inconnu === undefined ? 'ABp' : o.inconnu;
  const noms = o.noms || { O: 'O', A: 'A', B: 'B', Ap: 'M', Bp: 'N' };
  if (!(OA > 0) || !(OAp > 0) || !(AB > 0)) return '';
  const k = OAp / OA;

  /* Directions des deux secantes, en unites abstraites. Elles sont FIXES :
     l'enonce ne donne jamais l'angle en O, donc le dessin en choisit un,
     lisible, et n'affirme rien a son sujet. Aucune cote d'angle n'est posee.
     Seules les longueurs portees par les secantes sont cotees. */
  const u = [1, -0.62];            // secante portant A puis A'
  const v = [1, 0.30];             // secante portant B puis B'
  const nU = Math.hypot(u[0], u[1]), nV = Math.hypot(v[0], v[1]);
  const eU = [u[0] / nU, u[1] / nU], eV = [v[0] / nV, v[1] / nV];

  /* Longueur portee sur la seconde secante. L'enonce ne donne pas toujours OB :
     on en choisit une valeur de DESSIN proportionnee a OA, et OB' s'en deduit
     par le meme k — c'est ce qui garantit (AB) // (A'B') au produit vectoriel,
     quelle que soit la valeur choisie. */
  const OB = OA * 0.86;

  // Signe du cote : en papillon, la seconde parallele part de l'autre cote de O.
  const s = croisee ? -1 : 1;

  // Points en unites abstraites, O a l'origine.
  const pO = [0, 0];
  const pA = [eU[0] * OA, eU[1] * OA];
  const pB = [eV[0] * OB, eV[1] * OB];
  const pAp = [eU[0] * OAp * s, eU[1] * OAp * s];
  const pBp = [eV[0] * OB * k * s, eV[1] * OB * k * s];

  // Cadrage : on mesure l'etendue reelle des cinq points, puis on met a l'echelle.
  const xs = [pO[0], pA[0], pB[0], pAp[0], pBp[0]];
  const ys = [pO[1], pA[1], pB[1], pAp[1], pBp[1]];
  const xMin = Math.min.apply(null, xs), xMax = Math.max.apply(null, xs);
  const yMin = Math.min.apply(null, ys), yMax = Math.max.apply(null, ys);
  const e = echelleFigure(xMax - xMin || 1, yMax - yMin || 1, FIG_MARGE + 16, FIG_MARGE + 16);
  const w = (xMax - xMin) * e, h = (yMax - yMin) * e;
  const ox = (FIG_L - w) / 2 - xMin * e;
  const oy = (FIG_H - h) / 2 - yMin * e;
  const T = (p) => [ox + p[0] * e, oy + p[1] * e];
  const O = T(pO), A = T(pA), B = T(pB), Ap = T(pAp), Bp = T(pBp);

  const cote = (cle, valeur) => (inconnu === cle ? '?' : coteFig(valeur, unite));
  // Milieu decale vers l'exterieur du segment, pour que l'etiquette ne tombe
  // jamais sur le trait qu'elle designe (regle de section 9).
  const mi = (X, Y, dx, dy) => [(X[0] + Y[0]) / 2 + dx, (X[1] + Y[1]) / 2 + dy];
  const mOA = mi(O, A, -4, -8), mOAp = mi(A, Ap, -4, -8);
  const mAB = mi(A, B, 10, 4), mApBp = mi(Ap, Bp, 12, 4);

  // Segment complet d'une secante, de son extremite la plus a gauche a la plus
  // a droite : les deux points en sont les extremites reelles, donc le trait
  // passe exactement par O sans qu'on ait a l'y forcer.
  const secante = (X, Y) =>
    '<line class="frame-line" x1="' + nb2(X[0]) + '" y1="' + nb2(X[1]) +
    '" x2="' + nb2(Y[0]) + '" y2="' + nb2(Y[1]) + '"></line>';

  return svgFigure('Configuration de Thales', [
    secante(A, Ap), secante(B, Bp),
    // Les deux paralleles, en trait fort : ce sont elles qui autorisent Thales.
    '<line class="curve-main" x1="' + nb2(A[0]) + '" y1="' + nb2(A[1]) + '" x2="' + nb2(B[0]) + '" y2="' + nb2(B[1]) + '"></line>',
    '<line class="curve-main" x1="' + nb2(Ap[0]) + '" y1="' + nb2(Ap[1]) + '" x2="' + nb2(Bp[0]) + '" y2="' + nb2(Bp[1]) + '"></line>',
    '<circle class="plot-point-alt" cx="' + nb2(O[0]) + '" cy="' + nb2(O[1]) + '" r="4"></circle>',
    '<circle class="plot-point-alt" cx="' + nb2(A[0]) + '" cy="' + nb2(A[1]) + '" r="4"></circle>',
    '<circle class="plot-point-alt" cx="' + nb2(B[0]) + '" cy="' + nb2(B[1]) + '" r="4"></circle>',
    '<circle class="plot-point" cx="' + nb2(Ap[0]) + '" cy="' + nb2(Ap[1]) + '" r="4"></circle>',
    '<circle class="plot-point" cx="' + nb2(Bp[0]) + '" cy="' + nb2(Bp[1]) + '" r="4"></circle>',
    '<text class="tick-label" x="' + nb2(O[0] - 10) + '" y="' + nb2(O[1] + 4) + '" text-anchor="end">' + noms.O + '</text>',
    '<text class="tick-label" x="' + nb2(A[0] - 5) + '" y="' + nb2(A[1] - 9) + '" text-anchor="end">' + noms.A + '</text>',
    '<text class="tick-label" x="' + nb2(B[0] - 5) + '" y="' + nb2(B[1] + 15) + '" text-anchor="end">' + noms.B + '</text>',
    '<text class="tick-label" x="' + nb2(Ap[0] + 7) + '" y="' + nb2(Ap[1] - 6) + '" text-anchor="start">' + noms.Ap + '</text>',
    '<text class="tick-label" x="' + nb2(Bp[0] + 7) + '" y="' + nb2(Bp[1] + 13) + '" text-anchor="start">' + noms.Bp + '</text>',
    '<text class="annotation-label" x="' + nb2(mOA[0]) + '" y="' + nb2(mOA[1]) + '" text-anchor="end">' + cote('OA', OA) + '</text>',
    '<text class="annotation-label" x="' + nb2(mOAp[0]) + '" y="' + nb2(mOAp[1]) + '" text-anchor="end">' + cote('OAp', OAp) + '</text>',
    '<text class="annotation-label" x="' + nb2(mAB[0]) + '" y="' + nb2(mAB[1]) + '" text-anchor="start">' + cote('AB', AB) + '</text>',
    '<text class="annotation-label" x="' + nb2(mApBp[0]) + '" y="' + nb2(mApBp[1]) + '" text-anchor="start">' + cote('ABp', AB * k) + '</text>'
  ].join(''));
}

/* --- Homothetie --------------------------------------------------------
   Un triangle et son image par l'homothetie de centre O et de rapport k.

   POURQUOI UN HELPER DEDIE plutot que deux triangles poses cote a cote : le
   rapport NEGATIF est la difficulte du chapitre, et elle ne se comprend que si
   l'image est reellement de l'autre cote du centre. Un dessin qui poserait
   l'image « en face, un peu plus loin » ne montrerait pas le demi-tour. Ici
   l'image est calculee, point par point, par M' = O + k * (M - O) : le signe
   fait son travail tout seul, et le dessin ne peut pas mentir sur k.

   Les rayons issus de O sont traces en trait de construction : ce sont eux qui
   rendent le centre visible comme centre, et non comme un point pose la. */
function figureHomothetie(k, options) {
  const o = options || {};
  const noms = o.noms || { O: 'O', A: 'A', B: 'B', C: 'C' };
  if (!k || !isFinite(k)) return '';

  /* Triangle de depart, en unites abstraites, choisi franchement scalene pour
     qu'un demi-tour se VOIE : un triangle presque isocele tournerait sans
     qu'on s'en apercoive, et la figure raterait exactement ce qu'elle doit
     montrer. */
  const src = [[1.6, -0.5], [3.2, -0.1], [2.2, 1.25]];
  const img = src.map(p => [p[0] * k, p[1] * k]);
  const pts = [[0, 0]].concat(src, img);

  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const xMin = Math.min.apply(null, xs), xMax = Math.max.apply(null, xs);
  const yMin = Math.min.apply(null, ys), yMax = Math.max.apply(null, ys);
  const e = echelleFigure(xMax - xMin || 1, yMax - yMin || 1, FIG_MARGE + 10, FIG_MARGE + 10);
  const w = (xMax - xMin) * e, h = (yMax - yMin) * e;
  const ox = (FIG_L - w) / 2 - xMin * e;
  const oy = (FIG_H - h) / 2 - yMin * e;
  const T = (p) => [ox + p[0] * e, oy + p[1] * e];
  const S = src.map(T), I = img.map(T), O = T([0, 0]);
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  const rayons = S.map((p, i) =>
    '<line class="guide-line" x1="' + nb2(O[0]) + '" y1="' + nb2(O[1]) +
    '" x2="' + nb2(I[i][0]) + '" y2="' + nb2(I[i][1]) + '"></line>').join('');

  return svgFigure('Triangle et son image par une homothetie de rapport ' + fr(k), [
    rayons,
    // L'ANTECEDENT en aplat discret, l'IMAGE en trait fort : l'oeil doit savoir
    // lequel des deux est le resultat (hierarchie par l'intensite, section 9).
    '<polygon class="frame-line" points="' + S.map(P).join(' ') + '" fill="' + APLAT + '"></polygon>',
    '<polygon class="curve-main" points="' + I.map(P).join(' ') + '" fill="none"></polygon>',
    '<circle class="plot-point-alt" cx="' + nb2(O[0]) + '" cy="' + nb2(O[1]) + '" r="4"></circle>',
    '<text class="tick-label" x="' + nb2(O[0] - 8) + '" y="' + nb2(O[1] + 14) + '" text-anchor="end">' + noms.O + '</text>',
    '<text class="tick-label" x="' + nb2(S[0][0] - 8) + '" y="' + nb2(S[0][1]) + '" text-anchor="end">' + noms.A + '</text>',
    '<text class="tick-label" x="' + nb2(S[1][0] + 8) + '" y="' + nb2(S[1][1]) + '" text-anchor="start">' + noms.B + '</text>',
    '<text class="tick-label" x="' + nb2(S[2][0]) + '" y="' + nb2(S[2][1] - 8) + '" text-anchor="middle">' + noms.C + '</text>',
    '<text class="annotation-label" x="' + nb2(FIG_L / 2) + '" y="' + nb2(FIG_H - 6) + '" text-anchor="middle">rapport ' + fr(k) + '</text>'
  ].join(''));
}

/* --- Triangle rectangle pour la trigonometrie --------------------------
   Le triangle rectangle de reference, avec l'angle aigu MARQUE et les trois
   cotes nommes par leur ROLE relatif a cet angle (adjacent, oppose,
   hypotenuse). C'est cette nomenclature relative, et elle seule, qui distingue
   la trigonometrie de Pythagore : le meme cote est adjacent pour un angle et
   oppose pour l'autre.

   Le triangle est construit a partir de l'ANGLE : le cote horizontal vaut
   hypotenuse * cos(angle) et le vertical hypotenuse * sin(angle). L'angle
   dessine est donc exactement l'angle annonce, verifiable au produit scalaire
   — c'est la propriete que les tests controlent. */
function figureTrigo(angleDeg, hypotenuse, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const inconnu = o.inconnu === undefined ? 'vertical' : o.inconnu;
  const roles = o.roles !== false;
  if (!(angleDeg > 0) || !(angleDeg < 90) || !(hypotenuse > 0)) return '';

  const rad = angleDeg * Math.PI / 180;
  const horiz = hypotenuse * Math.cos(rad);
  const vert = hypotenuse * Math.sin(rad);

  const e = echelleFigure(horiz, vert, FIG_MARGE + 34, FIG_MARGE + 34);
  const w = horiz * e, h = vert * e;
  const x0 = (FIG_L - w) / 2, yBas = (FIG_H + h) / 2 - 14;

  /* L'angle aigu est place au sommet GAUCHE de la base, l'angle droit au
     sommet droit. Ainsi l'hypotenuse monte de gauche a droite, comme dans tous
     les manuels, et l'arc d'angle se pose dans un coin degage. */
  const S = [x0, yBas];                 // sommet de l'angle aigu
  const D = [x0 + w, yBas];             // sommet de l'angle droit
  const H = [x0 + w, yBas - h];         // sommet oppose
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  // Arc de l'angle aigu, rayon fixe, et etiquette posee SUR LA BISSECTRICE
  // (regle de section 9).
  const r = 24;
  const arc = '<path class="guide-line" fill="none" d="M' + nb2(S[0] + r) + ' ' + nb2(S[1]) +
    ' A' + r + ' ' + r + ' 0 0 1 ' + nb2(S[0] + r * Math.cos(rad)) + ' ' + nb2(S[1] - r * Math.sin(rad)) + '"></path>';
  const bis = rad / 2;
  const lblA = [S[0] + (r + 14) * Math.cos(bis), S[1] - (r + 14) * Math.sin(bis) + 4];

  const k = 9;
  const droit = '<path class="grid-line" fill="none" d="M' + nb2(D[0] - k) + ' ' + nb2(D[1]) +
    ' L' + nb2(D[0] - k) + ' ' + nb2(D[1] - k) + ' L' + nb2(D[0]) + ' ' + nb2(D[1] - k) + '"></path>';

  const eA = inconnu === 'angle' ? '?' : fr(angleDeg) + '°';
  const eV = inconnu === 'vertical' ? '?' : coteFig(Math.round(vert * 10) / 10, unite);
  const eH = inconnu === 'horizontal' ? '?' : coteFig(Math.round(horiz * 10) / 10, unite);
  const eHyp = inconnu === 'hypotenuse' ? '?' : coteFig(hypotenuse, unite);

  return svgFigure('Triangle rectangle avec un angle aigu marque', [
    '<polygon class="frame-line" points="' + P(S) + ' ' + P(D) + ' ' + P(H) + '" fill="' + APLAT + '"></polygon>',
    droit, arc,
    '<text class="annotation-label" x="' + nb2(lblA[0]) + '" y="' + nb2(lblA[1]) + '" text-anchor="start">' + eA + '</text>',
    '<text class="annotation-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(yBas + 20) + '" text-anchor="middle">' + eH + '</text>',
    '<text class="annotation-label" x="' + nb2(D[0] + 10) + '" y="' + nb2(yBas - h / 2 + 4) + '" text-anchor="start">' + eV + '</text>',
    '<text class="annotation-label" x="' + nb2((S[0] + H[0]) / 2 - 8) + '" y="' + nb2((S[1] + H[1]) / 2 - 8) + '" text-anchor="end">' + eHyp + '</text>',
    /* Les ROLES, poses sous les cotes concernes. Ecrits en minuscules et sans
       article elide : « adjacent », jamais « l adjacent » ni « ADJACENT »
       (contrainte du convertisseur, section 9). */
    roles ? '<text class="tick-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(yBas + 36) + '" text-anchor="middle">adjacent</text>' : '',
    roles ? '<text class="tick-label" x="' + nb2(D[0] + 10) + '" y="' + nb2(yBas - h / 2 + 18) + '" text-anchor="start">oppose</text>' : '',
    roles ? '<text class="tick-label" x="' + nb2((S[0] + H[0]) / 2 - 8) + '" y="' + nb2((S[1] + H[1]) / 2 - 24) + '" text-anchor="end">hypotenuse</text>' : ''
  ].join(''));
}

/* --- Section plane d'un solide -----------------------------------------
   Un pave ou un cylindre coupe par un plan, avec la SECTION hachuree en place
   dans le solide, et non posee a cote.

   POURQUOI c'est le bon dessin : l'erreur du chapitre est de confondre la
   section avec une projection ou avec une face. Un dessin qui montrerait le
   solide d'un cote et un rectangle de l'autre laisserait l'eleve libre de
   croire qu'on a « rabattu » une face. Ici la section est DANS le solide, sur
   le plan de coupe, et ses deux dimensions sont cotees a partir des dimensions
   du solide qui les produisent.

   `type` vaut 'pave-vertical', 'pave-horizontal' ou 'cylindre-horizontal'. */
function figureSection(type, a, b, c, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);
  const HACHURE = 'color-mix(in srgb, var(--diagram-accent) 30%, transparent)';

  if (type === 'cylindre-horizontal') {
    // Cylindre debout de rayon a et de hauteur b, coupe par un plan parallele
    // a la base : la section est un DISQUE de meme rayon que la base.
    const e = echelleFigure(2 * a, b, FIG_MARGE + 20, FIG_MARGE + 20);
    const rx = a * e, hy = b * e;
    const ry = rx * 0.32;               // ouverture de l'ellipse, en perspective
    const cx = FIG_L / 2, yBas = (FIG_H + hy) / 2 - 10, yHaut = yBas - hy;
    const yCoupe = yHaut + hy * 0.45;
    return svgFigure('Cylindre coupe par un plan parallele a la base', [
      '<line class="frame-line" x1="' + nb2(cx - rx) + '" y1="' + nb2(yHaut) + '" x2="' + nb2(cx - rx) + '" y2="' + nb2(yBas) + '"></line>',
      '<line class="frame-line" x1="' + nb2(cx + rx) + '" y1="' + nb2(yHaut) + '" x2="' + nb2(cx + rx) + '" y2="' + nb2(yBas) + '"></line>',
      '<ellipse class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(yBas) + '" rx="' + nb2(rx) + '" ry="' + nb2(ry) + '" fill="' + APLAT + '"></ellipse>',
      '<ellipse class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(yHaut) + '" rx="' + nb2(rx) + '" ry="' + nb2(ry) + '" fill="' + APLAT + '"></ellipse>',
      '<ellipse class="curve-main" cx="' + nb2(cx) + '" cy="' + nb2(yCoupe) + '" rx="' + nb2(rx) + '" ry="' + nb2(ry) + '" fill="' + HACHURE + '"></ellipse>',
      '<text class="annotation-label" x="' + nb2(cx) + '" y="' + nb2(yCoupe - ry - 8) + '" text-anchor="middle">section</text>',
      '<text class="annotation-label" x="' + nb2(cx - rx - 8) + '" y="' + nb2((yHaut + yBas) / 2) + '" text-anchor="end">' + coteFig(b, unite) + '</text>',
      '<text class="annotation-label" x="' + nb2(cx) + '" y="' + nb2(yBas + ry + 22) + '" text-anchor="middle">rayon ' + coteFig(a, unite) + '</text>'
    ].join(''));
  }

  /* Pave a x b x c en perspective cavaliere. La coupe est VERTICALE (plan
     parallele a une face laterale) ou HORIZONTALE (plan parallele a la base).
     Dans les deux cas la section est un rectangle dont les deux dimensions
     sont DEUX DES TROIS aretes du pave : c'est ce que la figure doit rendre
     evident, et c'est pourquoi ces deux aretes-la sont les seules cotees. */
  const vertical = type !== 'pave-horizontal';
  const e = echelleFigure(a + c * 0.45, b + c * 0.45, FIG_MARGE + 18, FIG_MARGE + 18);
  const w = a * e, h = b * e, p = c * e * 0.45;
  const x0 = (FIG_L - w - p) / 2, y0 = (FIG_H - h - p) / 2 + p;

  const AV = [[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0, y0 + h]];     // face avant
  const dec = [p, -p];
  const AR = AV.map(q => [q[0] + dec[0], q[1] + dec[1]]);                   // face arriere

  const aretes = [
    '<polygon class="frame-line" points="' + AV.map(P).join(' ') + '" fill="' + APLAT + '"></polygon>',
    '<polygon class="grid-line" points="' + AR.map(P).join(' ') + '" fill="none"></polygon>'
  ].concat([0, 1, 2, 3].map(i =>
    '<line class="grid-line" x1="' + nb2(AV[i][0]) + '" y1="' + nb2(AV[i][1]) +
    '" x2="' + nb2(AR[i][0]) + '" y2="' + nb2(AR[i][1]) + '"></line>'));

  let section, etiq, cotes;
  if (vertical) {
    // Plan vertical a 55 % de la largeur : la section est un rectangle b x c.
    const xs = x0 + w * 0.55;
    section = [[xs, y0], [xs + p, y0 - p], [xs + p, y0 - p + h], [xs, y0 + h]];
    etiq = [xs + p / 2, y0 - p - 8];
    cotes = [
      '<text class="annotation-label" x="' + nb2(x0 - 8) + '" y="' + nb2(y0 + h / 2) + '" text-anchor="end">' + coteFig(b, unite) + '</text>',
      '<text class="annotation-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(y0 + h + 20) + '" text-anchor="middle">' + coteFig(a, unite) + '</text>',
      '<text class="annotation-label" x="' + nb2(x0 + w + p / 2 + 12) + '" y="' + nb2(y0 + h - p / 2 + 8) + '" text-anchor="start">' + coteFig(c, unite) + '</text>'
    ];
  } else {
    // Plan horizontal a mi-hauteur : la section est un rectangle a x c.
    const ys = y0 + h * 0.5;
    section = [[x0, ys], [x0 + w, ys], [x0 + w + p, ys - p], [x0 + p, ys - p]];
    etiq = [x0 + w / 2 + p / 2, ys - p - 8];
    cotes = [
      '<text class="annotation-label" x="' + nb2(x0 - 8) + '" y="' + nb2(y0 + h / 2) + '" text-anchor="end">' + coteFig(b, unite) + '</text>',
      '<text class="annotation-label" x="' + nb2(x0 + w / 2) + '" y="' + nb2(y0 + h + 20) + '" text-anchor="middle">' + coteFig(a, unite) + '</text>',
      '<text class="annotation-label" x="' + nb2(x0 + w + p / 2 + 12) + '" y="' + nb2(y0 + h - p / 2 + 8) + '" text-anchor="start">' + coteFig(c, unite) + '</text>'
    ];
  }

  return svgFigure('Pave coupe par un plan', aretes.concat([
    '<polygon class="curve-main" points="' + section.map(P).join(' ') + '" fill="' + HACHURE + '"></polygon>',
    '<text class="annotation-label" x="' + nb2(etiq[0]) + '" y="' + nb2(etiq[1]) + '" text-anchor="middle">section</text>'
  ], cotes).join(''));
}
