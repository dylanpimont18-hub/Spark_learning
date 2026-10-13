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
function figureSymetrie(valeurA, valeurAxe) {
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
  traits.push(`<text class="label-soft" x="${nb2(X(valeurAxe))}" y="${nb2(yAxe - 64)}" text-anchor="middle">axe en ${fr(valeurAxe)}</text>`);
  // Le point A, a sa vraie place.
  traits.push(`<circle class="plot-point" cx="${nb2(X(valeurA))}" cy="${nb2(yAxe)}" r="3"></circle>`);
  traits.push(`<text class="annotation-label" x="${nb2(X(valeurA))}" y="${nb2(yAxe - 14)}" text-anchor="middle">A</text>`);
  // L'emplacement cherche : cercle vide, jamais chiffre.
  traits.push(`<circle class="plot-point-alt" cx="${nb2(X(symetrique))}" cy="${nb2(yAxe)}" r="3"></circle>`);
  traits.push(`<text class="annotation-label" x="${nb2(X(symetrique))}" y="${nb2(yAxe - 14)}" text-anchor="middle">A' = ?</text>`);

  return svgFigure(`Point A et axe de symetrie place en ${valeurAxe}`, traits.join(''));
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

/* ==================================================/* =========================================================
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
  /* Cotes arrondies au CENTIEME, et non au dixieme (2026-09-13). Defaut vu
     seulement a l'epreuve, sur une page de banque de troisieme : l'enonce
     annoncait « la distance horizontale couverte est de 11,26 m » tandis que
     la figure, juste en dessous, cotait « 11,3 m ». Deux nombres differents
     pour une meme longueur sur une meme page, et l'eleve n'a aucun moyen de
     savoir lequel fait foi. Les enonces du niveau cotent au centieme : la
     figure s'aligne dessus. */
  const eV = inconnu === 'vertical' ? '?' : coteFig(Math.round(vert * 100) / 100, unite);
  const eH = inconnu === 'horizontal' ? '?' : coteFig(Math.round(horiz * 100) / 100, unite);
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

/* =========================================================
   HELPERS AJOUTES POUR LA SECONDE (2026-09-13)

   REGLE D'INSERTION, apprise d'un conflit reel : ce bloc est ajoute a la
   TOUTE FIN du fichier, jamais au milieu. Deux sessions de la vague 5e/4e
   avaient insere leurs helpers au meme endroit et produit un conflit au
   merge. Les vagues suivantes (1re, terminale) sont priees de faire de
   meme : un bloc nomme, en fin de fichier.

   POURQUOI UNE NOUVELLE SERIE : la seconde garde la geometrie du college
   (Thales, aires, triangles) mais y ajoute deux objets que le college n'a
   jamais eus, le VECTEUR et le REPERE. Les helpers existants savaient
   dessiner des figures a MESURER ; il manquait de quoi dessiner des figures
   a LIRE dans un repere.

   La bibliotheque de la 5e/4e est reutilisee telle quelle partout ou elle
   convient (figureTriangle, figureTriangleAngles, figureRectangle...) : on
   n'ajoute ici que ce qui manquait reellement.
   ========================================================= */

/* --- Configuration de Thales -------------------------------------------
   Triangle ABC coupe par une parallele (MN) a la base, avec M sur [AB] et
   N sur [AC]. Sert aux exercices ou l'on calcule MN a partir du rapport de
   reduction.

   FIDELITE : le rapport AM/AB du DESSIN est exactement celui de l'enonce.
   Le point M est place par interpolation lineaire entre A et B, et N par la
   MEME interpolation entre A et C — ce qui garantit PAR CONSTRUCTION que
   (MN) est parallele a (BC), sans dependre d'un trace a l'oeil. La longueur
   MN dessinee vaut donc k fois BC, comme le theoreme l'annonce.

   La figure NE DIVULGUE PAS la reponse : MN porte un point d'interrogation,
   jamais sa valeur. Elle donne AM, AB et BC, c'est-a-dire exactement les
   donnees de l'enonce. */
function figureThalesTriangle(am, ab, bc) {
  if (!(am > 0 && ab > am && bc > 0)) return '';
  const k = am / ab;

  /* Triangle de reference, en unites de figure. La base BC est horizontale
     et le sommet A est decale vers la droite : une figure symetrique
     laisserait croire que le resultat depend de cette symetrie. */
  const baseU = bc;
  const hauteurU = bc * 0.72;
  const decalU = bc * 0.22;

  const e = echelleFigure(baseU + decalU, hauteurU, FIG_MARGE + 18, FIG_MARGE + 18);
  const w = baseU * e, h = hauteurU * e, dx = decalU * e;
  const x0 = (FIG_L - w - dx) / 2;
  const yBas = (FIG_H + h) / 2 - 12;

  const B = [x0, yBas];
  const C = [x0 + w, yBas];
  const A = [x0 + dx + w * 0.5, yBas - h];

  /* M sur [AB] et N sur [AC], a la MEME fraction k depuis le sommet A.
     C'est cette egalite des deux fractions qui fait le parallelisme, et elle
     est ici exacte au flottant pres, jamais approchee. */
  const M = [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k];
  const N = [A[0] + (C[0] - A[0]) * k, A[1] + (C[1] - A[1]) * k];
  const P = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  return svgFigure('Triangle coupe par une parallele a la base', [
    '<polygon class="frame-line" points="' + P(A) + ' ' + P(B) + ' ' + P(C) + '" fill="' + APLAT + '"></polygon>',
    // Le petit triangle, teinte plus fort : c'est lui que l'exercice isole.
    '<polygon class="frame-line" points="' + P(A) + ' ' + P(M) + ' ' + P(N) +
      '" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></polygon>',
    '<line class="curve-main" x1="' + nb2(M[0]) + '" y1="' + nb2(M[1]) +
      '" x2="' + nb2(N[0]) + '" y2="' + nb2(N[1]) + '"></line>',
    // Sommets poses HORS du triangle, pour garder leur reserve blanche.
    '<text class="tick-label" x="' + nb2(A[0]) + '" y="' + nb2(A[1] - 8) + '" text-anchor="middle">A</text>',
    '<text class="tick-label" x="' + nb2(B[0] - 8) + '" y="' + nb2(B[1] + 16) + '" text-anchor="end">B</text>',
    '<text class="tick-label" x="' + nb2(C[0] + 8) + '" y="' + nb2(C[1] + 16) + '" text-anchor="start">C</text>',
    '<text class="tick-label" x="' + nb2(M[0] - 10) + '" y="' + nb2(M[1] + 4) + '" text-anchor="end">M</text>',
    '<text class="tick-label" x="' + nb2(N[0] + 10) + '" y="' + nb2(N[1] + 4) + '" text-anchor="start">N</text>',
    // Donnees de l'enonce, et SEULEMENT elles.
    '<text class="annotation-label" x="' + nb2((A[0] + M[0]) / 2 - 12) + '" y="' + nb2((A[1] + M[1]) / 2) + '" text-anchor="end">' + coteFig(am, '') + '</text>',
    '<text class="annotation-label" x="' + nb2((B[0] + C[0]) / 2) + '" y="' + nb2(yBas + 22) + '" text-anchor="middle">' + coteFig(bc, '') + '</text>',
    // L'inconnue porte un point d'interrogation, jamais sa valeur.
    '<text class="annotation-label" x="' + nb2((M[0] + N[0]) / 2) + '" y="' + nb2((M[1] + N[1]) / 2 - 8) + '" text-anchor="middle">?</text>'
  ].join(''));
}

/* --- Vecteur dans un repere gradue -------------------------------------
   Un repere portant un vecteur d'origine et d'extremite donnees en
   COORDONNEES DE REPERE. Sert aux exercices de lecture de composantes.

   POURQUOI CE HELPER : c'est l'objet que le college n'avait pas, et le
   malentendu fondateur de la seconde (un vecteur n'est ni un point ni un
   segment). Une figure qui le montre vaut un paragraphe.

   FIDELITE, exigence propre a ce niveau : les extremites tombent EXACTEMENT
   sur les graduations, jamais entre deux. Un vecteur dont la pointe flotte a
   cote d'un noeud du quadrillage rendrait la lecture des composantes
   impossible, ce qui est pourtant tout l'objet de l'exercice. */
function figureVecteurRepere(ox, oy, vx, vy, options) {
  const o = options || {};
  const nom = o.nom === undefined ? 'u' : o.nom;
  const ex = ox + vx, ey = oy + vy;

  // Fenetre du repere : elle englobe l'origine du vecteur, son extremite et
  // le point O du repere.
  const xMin = Math.min(0, ox, ex) - 1, xMax = Math.max(0, ox, ex) + 1;
  const yMin = Math.min(0, oy, ey) - 1, yMax = Math.max(0, oy, ey) + 1;
  const largeurU = xMax - xMin, hauteurU = yMax - yMin;
  const e = echelleFigure(largeurU, hauteurU, FIG_MARGE, FIG_MARGE);

  // Repere -> viewBox. L'axe des ordonnees est inverse, comme en SVG.
  const X = (x) => (FIG_L - largeurU * e) / 2 + (x - xMin) * e;
  const Y = (y) => (FIG_H + hauteurU * e) / 2 - (y - yMin) * e;

  const traits = [];
  /* Le marqueur de fleche est declare DANS la figure : chaque figure
     d'exercice est convertie isolement, il n'y a pas de defs partage. */
  traits.push('<defs><marker id="fl-vect-ex" viewBox="0 0 10 10" refX="8" refY="5" ' +
    'markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">' +
    '<path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path></marker></defs>');

  // Quadrillage aux graduations entieres : c'est lui qui rend les
  // composantes LISIBLES, donc l'exercice faisable.
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    traits.push('<line class="grid-line" x1="' + nb2(X(x)) + '" y1="' + nb2(Y(yMin)) +
      '" x2="' + nb2(X(x)) + '" y2="' + nb2(Y(yMax)) + '"></line>');
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    traits.push('<line class="grid-line" x1="' + nb2(X(xMin)) + '" y1="' + nb2(Y(y)) +
      '" x2="' + nb2(X(xMax)) + '" y2="' + nb2(Y(y)) + '"></line>');
  }
  // Les deux axes, plus appuyes que le quadrillage.
  traits.push('<line class="axis" x1="' + nb2(X(xMin)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(xMax)) + '" y2="' + nb2(Y(0)) + '"></line>');
  traits.push('<line class="axis" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(yMin)) +
    '" x2="' + nb2(X(0)) + '" y2="' + nb2(Y(yMax)) + '"></line>');

  // Le vecteur. Une SEULE pointe de fleche par trait, a l'extremite.
  traits.push('<line class="curve-main" x1="' + nb2(X(ox)) + '" y1="' + nb2(Y(oy)) +
    '" x2="' + nb2(X(ex)) + '" y2="' + nb2(Y(ey)) + '" marker-end="url(#fl-vect-ex)"></line>');
  traits.push('<circle class="plot-point-alt" cx="' + nb2(X(ox)) + '" cy="' + nb2(Y(oy)) + '" r="3"></circle>');
  /* Etiquette du vecteur : une minuscule, sans capitale ni article elide,
     pour ne pas declencher d'italique parasite a la conversion. */
  traits.push('<text class="annotation-label" x="' + nb2((X(ox) + X(ex)) / 2 + 8) +
    '" y="' + nb2((Y(oy) + Y(ey)) / 2 - 6) + '">' + nom + '</text>');

  return svgFigure('Vecteur trace dans un repere gradue', traits.join(''));
}

/* =========================================================
   HELPERS AJOUTES POUR LA PREMIERE (2026-09-14)

   REGLE DE NOMMAGE, apprise a nos depens sur la vague 3e/2nde : chaque helper
   porte LE NIVEAU EN PREFIXE. Deux sessions y avaient respecte la regle
   d'insertion en fin de fichier et produit malgre tout une collision, en
   ecrivant chacune une fonction `figureThales` de signature differente. Git
   n'a rien vu — les blocs etaient a des endroits distincts — et en JavaScript
   la derniere declaration gagne : quatre figures seraient sorties VIDES en
   production, sans la moindre erreur de compilation. Le prefixe `figure1re`
   rend la collision impossible entre niveaux.

   On n'ajoute ici que ce qui MANQUAIT reellement. Les chapitres de premiere
   traites dans cette vague reutilisent tels quels figureTrigo (triangle
   rectangle cote) et figureVecteurRepere partout ou ils conviennent ; seuls
   la projection orthogonale et le cercle dans un repere n'avaient aucun
   equivalent dans la bibliotheque.
   ========================================================= */

/* --- Projection orthogonale d'un vecteur sur un autre -------------------
   LE malentendu central du produit scalaire. L'eleve retient « on multiplie
   les coordonnees » sans jamais voir ce que le nombre obtenu mesure : la
   LONGUEUR DE L'OMBRE de u sur la direction de v, comptee positivement ou
   negativement selon le cote.

   FIDELITE, exigence propre a cette figure : le pied de la projection est
   calcule par la formule, jamais place a l'oeil, et le trait de projection
   tombe donc a angle droit sur la droite portee par v AU FLOTTANT PRES.
   C'est verifie par produit scalaire nul dans les tests — un angle droit
   dessine a 89 degres est rigoureusement invisible a la relecture.

   La figure NE DIVULGUE PAS le resultat : la longueur projetee porte un point
   d'interrogation des que l'exercice la demande (option `inconnu`). */
function figure1reProjection(ux, uy, vx, vy, options) {
  const o = options || {};
  const inconnu = o.inconnu === true;
  if (!(vx || vy)) return '';          // v nul : aucune direction sur quoi projeter

  const ps = ux * vx + uy * vy;
  const nv2 = vx * vx + vy * vy;
  const k = ps / nv2;
  const hx = k * vx, hy = k * vy;      // pied de la projection, sur la droite portee par v

  // Fenetre : elle englobe l'origine, les deux extremites et le pied.
  const xMin = Math.min(0, ux, vx, hx) - 0.8, xMax = Math.max(0, ux, vx, hx) + 0.8;
  const yMin = Math.min(0, uy, vy, hy) - 0.8, yMax = Math.max(0, uy, vy, hy) + 0.8;
  const largeurU = xMax - xMin, hauteurU = yMax - yMin;
  const e = echelleFigure(largeurU, hauteurU, FIG_MARGE + 12, FIG_MARGE + 12);

  const X = (x) => (FIG_L - largeurU * e) / 2 + (x - xMin) * e;
  const Y = (y) => (FIG_H + hauteurU * e) / 2 - (y - yMin) * e;

  const traits = [];
  traits.push('<defs><marker id="fl-proj-1re" viewBox="0 0 10 10" refX="8" refY="5" ' +
    'markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">' +
    '<path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path></marker></defs>');

  // Les deux axes, discrets : ils situent le repere sans concurrencer les
  // vecteurs, qui sont le sujet de la figure.
  traits.push('<line class="grid-line" x1="' + nb2(X(xMin)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(xMax)) + '" y2="' + nb2(Y(0)) + '"></line>');
  traits.push('<line class="grid-line" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(yMin)) +
    '" x2="' + nb2(X(0)) + '" y2="' + nb2(Y(yMax)) + '"></line>');

  /* La droite portee par v, prolongee au-dela de son extremite : c'est SUR
     ELLE que se lit la projection, et l'eleve doit voir qu'elle depasse le
     vecteur. Sans ce prolongement, un pied situe plus loin que la pointe de v
     passerait pour une faute de dessin. */
  const lv = Math.sqrt(nv2);
  const tMax = Math.max(1.25, k + 0.35);
  const tMin = Math.min(-0.25, k - 0.35);
  traits.push('<line class="guide-line" x1="' + nb2(X(tMin * vx)) + '" y1="' + nb2(Y(tMin * vy)) +
    '" x2="' + nb2(X(tMax * vx)) + '" y2="' + nb2(Y(tMax * vy)) + '"></line>');

  // Les deux vecteurs, une seule pointe de fleche chacun.
  traits.push('<line class="curve-main" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(vx)) + '" y2="' + nb2(Y(vy)) + '" marker-end="url(#fl-proj-1re)"></line>');
  traits.push('<line class="curve-main" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(ux)) + '" y2="' + nb2(Y(uy)) + '" marker-end="url(#fl-proj-1re)"></line>');

  // Le trait de projection, de la pointe de u jusqu'a son pied.
  traits.push('<line class="focus-line" x1="' + nb2(X(ux)) + '" y1="' + nb2(Y(uy)) +
    '" x2="' + nb2(X(hx)) + '" y2="' + nb2(Y(hy)) + '"></line>');

  /* Angle droit au pied, code par un CARRE et jamais par un arc (regle du
     cahier des charges). Les deux cotes du carre suivent la direction de v et
     la direction de la projection, orthogonales par construction : le carre
     est donc un vrai carre, pas un losange. */
  const dhx = ux - hx, dhy = uy - hy;
  const ld = Math.hypot(dhx, dhy);
  if (ld > 1e-9) {
    const c = 10;
    // Le carre se pose du cote de l'origine le long de v, et du cote de u
    // pour l'autre direction. En ecran, l'axe des ordonnees est inverse.
    const sens = k >= 0 ? -1 : 1;
    const avx = sens * (vx / lv) * c, avy = -sens * (vy / lv) * c;
    const aux = (dhx / ld) * c, auy = -(dhy / ld) * c;
    const Hx = X(hx), Hy = Y(hy);
    traits.push('<path class="grid-line" fill="none" d="M' + nb2(Hx + avx) + ' ' + nb2(Hy + avy) +
      ' L' + nb2(Hx + avx + aux) + ' ' + nb2(Hy + avy + auy) +
      ' L' + nb2(Hx + aux) + ' ' + nb2(Hy + auy) + '"></path>');
  }

  traits.push('<circle class="plot-point" cx="' + nb2(X(hx)) + '" cy="' + nb2(Y(hy)) + '" r="4"></circle>');

  /* Etiquettes : en minuscules, sans article elide ni lettre isolee, qui
     sortiraient en italique parasite a la conversion. Le pied est nomme
     « pied » plutot que par une lettre seule, pour la meme raison. */
  traits.push('<text class="annotation-label" x="' + nb2(X(ux) + 8) + '" y="' + nb2(Y(uy) - 6) + '">vecteur u</text>');
  traits.push('<text class="annotation-label" x="' + nb2(X(vx) + 8) + '" y="' + nb2(Y(vy) + 14) + '">vecteur v</text>');
  traits.push('<text class="tick-label" x="' + nb2(X(hx)) + '" y="' + nb2(Y(hy) + 20) + '" text-anchor="middle">pied</text>');

  /* La longueur projetee. Quand l'exercice la demande, elle porte un point
     d'interrogation : une figure ne divulgue jamais ce qu'elle fait chercher. */
  const OH = ps / lv;
  const etiq = inconnu ? '?' : coteFig(Math.round(OH * 100) / 100, '');
  traits.push('<text class="annotation-label" x="' + nb2((X(0) + X(hx)) / 2) +
    '" y="' + nb2((Y(0) + Y(hy)) / 2 - 10) + '" text-anchor="middle">' + etiq + '</text>');

  return svgFigure('Projection orthogonale d un vecteur sur un autre', traits.join(''));
}

/* --- Cercle dans un repere gradue --------------------------------------
   Sert aux exercices ou l'on teste si un point appartient au cercle de centre
   et de rayon donnes.

   POURQUOI CE HELPER : l'equation d'un cercle s'apprend comme une formule a
   retenir, alors qu'elle ne dit qu'une chose — la distance au centre vaut le
   rayon. Un dessin ou le point teste tombe visiblement sur le cercle, ou a
   cote, remet le sens devant la formule.

   FIDELITE : le rayon DESSINE vaut exactement le rayon annonce multiplie par
   l'echelle commune, et le point teste est place a ses coordonnees reelles.
   Un point annonce sur le cercle qui tomberait a cote serait une faute
   invisible a la relecture ; les tests verifient la distance au centieme. */
function figure1reCercleRepere(cx, cy, r, px, py, options) {
  const o = options || {};
  const inconnu = o.inconnu === true;
  if (!(r > 0)) return '';
  const avecPoint = Number.isFinite(px) && Number.isFinite(py);

  // La fenetre englobe TOUT le cercle, et le point teste s'il tombe dehors.
  const xMin = Math.min(cx - r, avecPoint ? px : cx - r) - 0.8;
  const xMax = Math.max(cx + r, avecPoint ? px : cx + r) + 0.8;
  const yMin = Math.min(cy - r, avecPoint ? py : cy - r) - 0.8;
  const yMax = Math.max(cy + r, avecPoint ? py : cy + r) + 0.8;
  const largeurU = xMax - xMin, hauteurU = yMax - yMin;
  const e = echelleFigure(largeurU, hauteurU, FIG_MARGE + 6, FIG_MARGE + 6);

  const X = (x) => (FIG_L - largeurU * e) / 2 + (x - xMin) * e;
  const Y = (y) => (FIG_H + hauteurU * e) / 2 - (y - yMin) * e;

  const traits = [];
  /* Quadrillage aux graduations entieres : c'est lui qui rend les coordonnees
     lisibles, donc l'exercice faisable sans regle. */
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    traits.push('<line class="grid-line" x1="' + nb2(X(x)) + '" y1="' + nb2(Y(yMin)) +
      '" x2="' + nb2(X(x)) + '" y2="' + nb2(Y(yMax)) + '"></line>');
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    traits.push('<line class="grid-line" x1="' + nb2(X(xMin)) + '" y1="' + nb2(Y(y)) +
      '" x2="' + nb2(X(xMax)) + '" y2="' + nb2(Y(y)) + '"></line>');
  }
  traits.push('<line class="axis" x1="' + nb2(X(xMin)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(xMax)) + '" y2="' + nb2(Y(0)) + '"></line>');
  traits.push('<line class="axis" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(yMin)) +
    '" x2="' + nb2(X(0)) + '" y2="' + nb2(Y(yMax)) + '"></line>');

  /* Le cercle. Le rayon a l'ecran vaut exactement le rayon reel fois
     l'echelle commune aux deux directions : c'est ce qui interdit au dessin
     de mentir sur la distance. */
  traits.push('<circle class="frame-line" cx="' + nb2(X(cx)) + '" cy="' + nb2(Y(cy)) +
    '" r="' + nb2(r * e) + '" fill="' + APLAT + '"></circle>');
  traits.push('<circle class="plot-point" cx="' + nb2(X(cx)) + '" cy="' + nb2(Y(cy)) + '" r="4"></circle>');
  traits.push('<text class="tick-label" x="' + nb2(X(cx)) + '" y="' + nb2(Y(cy) + 18) +
    '" text-anchor="middle">centre</text>');

  /* Le rayon, trace horizontalement depuis le centre : la cote se lit alors
     hors de la zone remplie, comme l'exige le cahier des charges. */
  traits.push('<line class="focus-line" x1="' + nb2(X(cx)) + '" y1="' + nb2(Y(cy)) +
    '" x2="' + nb2(X(cx + r)) + '" y2="' + nb2(Y(cy)) + '"></line>');
  traits.push('<text class="annotation-label" x="' + nb2((X(cx) + X(cx + r)) / 2) +
    '" y="' + nb2(Y(cy) - 8) + '" text-anchor="middle">' +
    (inconnu ? '?' : coteFig(r, '')) + '</text>');

  // Le point teste, en teinte distincte : l'exercice demande s'il est dessus.
  if (avecPoint) {
    traits.push('<circle class="plot-point-alt" cx="' + nb2(X(px)) + '" cy="' + nb2(Y(py)) + '" r="4"></circle>');
    traits.push('<text class="annotation-label" x="' + nb2(X(px) + 9) + '" y="' + nb2(Y(py) - 7) +
      '">point teste</text>');
  }

  return svgFigure('Cercle trace dans un repere gradue', traits.join(''));
}

/* =========================================================
   HELPERS AJOUTES POUR LA TERMINALE (2026-09-14)

   Ajoutes a la TOUTE FIN du fichier, jamais au milieu : c'est la regle
   d'insertion de la section 9 du cahier des charges, qui evite le conflit
   textuel entre deux sessions ecrivant en parallele.

   ELLE NE SUFFIT PAS, et la vague 3e/2nde l'a prouve a ses depens : les deux
   sessions l'avaient respectee et ont malgre tout produit une collision, en
   ecrivant chacune une fonction `figureThales` aux signatures incompatibles.
   Git n'a rien vu — les blocs etaient a des endroits distincts — et en
   JavaScript la derniere declaration gagne : les quatre figures de Thales de
   la troisieme seraient sorties VIDES en production, sans erreur de
   compilation.

   D'ou le prefixe de niveau sur CHAQUE helper ci-dessous (`figureTle...`), et
   la verification faite avant de commiter :
       grep -n "^function figureTlePaveRepere" js/data/figures-exercices.js
   Aucun des trois noms n'existait ailleurs dans le fichier. Exigence E13 du
   suivi de generalisation.

   POURQUOI SEULEMENT TROIS. La terminale est un niveau majoritairement
   ANALYTIQUE : limites, derivation, primitives, exponentielle, logarithme,
   suites et denombrement n'ont rien de geometrique a mesurer. Le cahier des
   charges est explicit : « un chapitre de calcul pur n'en a pas besoin :
   n'en mets pas pour faire du chiffre ». Les seuls chapitres qui gagnent une
   figure d'exercice sont donc les deux chapitres d'espace, plus l'aire sous
   la courbe du chapitre d'integration.

   LA PERSPECTIVE CAVALIERE, commune aux deux premiers helpers. Convention
   scolaire francaise : x vers la droite, z vers le haut, fuyante y a 45
   degres avec un coefficient de reduction 0,5. C'est une projection AFFINE,
   ce qui garantit PAR CONSTRUCTION que deux aretes paralleles dans l'espace
   se projettent sur deux vecteurs colineaires — la propriete sans laquelle
   une figure d'espace est inutilisable. Elle est verifiee numeriquement dans
   scripts/manuel/tests/figures-tle.test.js sur les neuf paires d'aretes
   paralleles du pave.
   ========================================================= */

/* Projection cavaliere partagee par les helpers d'espace. Renvoie la fonction
   qui envoie un point (x, y, z) de l'espace sur le plan de la feuille.
   Facteur commun : deux helpers qui reimplementeraient chacun leur projection
   finiraient par diverger, et la divergence serait invisible. */
function projetteTleCavaliere(ox, oz, u) {
  const COS45 = Math.SQRT1_2;                 // cos(45 deg) = sin(45 deg)
  const K = 0.5;                              // reduction sur la fuyante
  return function (x, y, z) {
    return [ox + x * u + y * K * u * COS45, oz - y * K * u * COS45 - z * u];
  };
}

/* --- Pave droit repere dans l'espace -----------------------------------
   Un pave de dimensions L x p x h, dessine en perspective cavaliere, avec ses
   huit sommets nommes et le repere d'origine A. Sert aux exercices ou l'on
   lit des coordonnees de sommets, ou l'on calcule une longueur d'arete, une
   diagonale, ou un produit scalaire sur des aretes.

   FIDELITE, exigence propre a ce niveau : les trois dimensions sont a la
   MEME echelle, et les aretes paralleles dans l'espace le restent apres
   projection. Une figure ou les fuyantes ne seraient pas paralleles entre
   elles ferait mentir toute lecture de coordonnees, et rien dans le pipeline
   ne s'en apercevrait.

   La figure NE DIVULGUE PAS ce qu'elle demande de trouver : elle porte les
   trois dimensions donnees par l'enonce, et rien d'autre. */
function figureTlePaveRepere(L, p, h, options) {
  const o = options || {};
  if (!(L > 0 && p > 0 && h > 0)) return '';

  /* Encombrement projete, pour choisir l'echelle. La fuyante ajoute
     p*K*cos45 en largeur et autant en hauteur. */
  const K = 0.5, C = Math.SQRT1_2;
  const largeurU = L + p * K * C;
  const hauteurU = h + p * K * C;

  const e = echelleFigure(largeurU, hauteurU, FIG_MARGE + 12, FIG_MARGE + 12);
  const ox = (FIG_L - largeurU * e) / 2;
  const oz = (FIG_H + hauteurU * e) / 2 - 10;
  const P = projetteTleCavaliere(ox, oz, e);

  // Les huit sommets, dans la numerotation scolaire habituelle.
  const A = P(0, 0, 0), B = P(L, 0, 0), C2 = P(L, p, 0), D = P(0, p, 0);
  const E = P(0, 0, h), F = P(L, 0, h), G = P(L, p, h), H = P(0, p, h);
  const pt = (q) => nb2(q[0]) + ',' + nb2(q[1]);
  const seg = (cl, a, b) => '<line class="' + cl + '" x1="' + nb2(a[0]) + '" y1="' + nb2(a[1]) +
    '" x2="' + nb2(b[0]) + '" y2="' + nb2(b[1]) + '"></line>';
  const nom = (q, t, dx, dy, ancre) => '<text class="tick-label" x="' + nb2(q[0] + dx) +
    '" y="' + nb2(q[1] + dy) + '" text-anchor="' + ancre + '">' + t + '</text>';

  const traits = [];

  // Face avant, en aplat discret : c'est le decor.
  traits.push('<polygon class="frame-line" points="' + pt(A) + ' ' + pt(B) + ' ' +
    pt(F) + ' ' + pt(E) + '" fill="' + APLAT + '"></polygon>');

  /* Aretes CACHEES en pointilles : les trois qui partent de D, sommet
     arriere-gauche-bas. Convention du dessin technique, et seul moyen de lire
     la profondeur sans ambiguite. */
  traits.push(seg('guide-line', D, A));
  traits.push(seg('guide-line', D, C2));
  traits.push(seg('guide-line', D, H));

  // Aretes visibles.
  traits.push(seg('frame-line', A, B), seg('frame-line', B, C2));
  traits.push(seg('frame-line', E, F), seg('frame-line', F, G), seg('frame-line', G, H));
  traits.push(seg('frame-line', H, E));
  traits.push(seg('frame-line', A, E), seg('frame-line', B, F), seg('frame-line', C2, G));

  /* Sommets nommes, poses HORS du solide pour garder leur reserve blanche.
     Minuscules interdites ici : ce sont des points, et la convention
     mathematique impose la capitale — mais une capitale ISOLEE ne se fracture
     pas, seul un MOT entier en capitales pose probleme au convertisseur. */
  traits.push(nom(A, 'A', -7, 12, 'end'), nom(B, 'B', 7, 12, 'start'));
  traits.push(nom(C2, 'C', 8, 8, 'start'), nom(D, 'D', -8, 8, 'end'));
  traits.push(nom(E, 'E', -7, -4, 'end'), nom(F, 'F', 7, -4, 'start'));
  traits.push(nom(G, 'G', 8, -4, 'start'), nom(H, 'H', -8, -4, 'end'));

  /* Les trois dimensions DONNEES par l'enonce, posees hors des zones
     remplies. Aucune diagonale ni aucune longueur cherchee n'est ecrite : la
     figure pose la question, elle ne la resout pas. */
  if (o.cotes !== false) {
    traits.push('<text class="annotation-label" x="' + nb2((A[0] + B[0]) / 2) +
      '" y="' + nb2(A[1] + 24) + '" text-anchor="middle">' + coteFig(L, o.unite || '') + '</text>');
    traits.push('<text class="annotation-label" x="' + nb2(B[0] + 10) +
      '" y="' + nb2((B[1] + F[1]) / 2) + '" text-anchor="start">' + coteFig(h, o.unite || '') + '</text>');
    traits.push('<text class="annotation-label" x="' + nb2((B[0] + C2[0]) / 2 + 6) +
      '" y="' + nb2((B[1] + C2[1]) / 2 + 14) + '" text-anchor="start">' + coteFig(p, o.unite || '') + '</text>');
  }

  return svgFigure('Pave droit en perspective cavaliere', traits.join(''));
}

/* --- Distance d'un point a un plan -------------------------------------
   Un plan horizontal en perspective cavaliere, un point M au-dessus, et le
   segment perpendiculaire qui descend jusqu'a son projete orthogonal H.
   L'angle droit en H est code par un CARRE, jamais par un arc.

   Sert aux exercices ou l'on demande la distance d'un point a un plan, ou
   les coordonnees du projete orthogonal.

   LA FIGURE NE DIVULGUE PAS LA REPONSE : la longueur MH porte un point
   d'interrogation, jamais sa valeur. Elle situe le point au-dessus du plan et
   montre ce qu'il faut mesurer, rien de plus. */
function figureTleDistancePlan(xM, yM, zM, options) {
  const o = options || {};
  if (!(zM > 0)) return '';

  const K = 0.5, C = Math.SQRT1_2;
  // Etendue du plan dessine : il doit englober largement le projete H.
  const etX = Math.max(Math.abs(xM) * 2, 3.6);
  const etY = Math.max(Math.abs(yM) * 2, 2.8);
  const largeurU = etX + etY * K * C;
  const hauteurU = zM + etY * K * C + 0.6;

  const e = echelleFigure(largeurU, hauteurU, FIG_MARGE + 10, FIG_MARGE + 10);
  const ox = (FIG_L - largeurU * e) / 2;
  const oz = (FIG_H + hauteurU * e) / 2 - 8;
  const P = projetteTleCavaliere(ox, oz, e);

  const c0 = P(0, 0, 0), c1 = P(etX, 0, 0), c2 = P(etX, etY, 0), c3 = P(0, etY, 0);
  const H = P(xM, yM, 0), M = P(xM, yM, zM);
  const pt = (q) => nb2(q[0]) + ',' + nb2(q[1]);

  const traits = [];
  // Le plan, en aplat discret : c'est le decor.
  traits.push('<polygon class="frame-line" points="' + pt(c0) + ' ' + pt(c1) + ' ' +
    pt(c2) + ' ' + pt(c3) + '" fill="' + APLAT + '"></polygon>');

  /* Le segment [MH], seul objet en teinte forte. Il est VERTICAL sur le
     dessin parce que la cote est le seul axe non fuyant : c'est ce qui rend
     l'angle droit lisible. */
  traits.push('<line class="curve-main" x1="' + nb2(M[0]) + '" y1="' + nb2(M[1]) +
    '" x2="' + nb2(H[0]) + '" y2="' + nb2(H[1]) + '"></line>');
  traits.push('<circle class="plot-point" cx="' + nb2(M[0]) + '" cy="' + nb2(M[1]) + '" r="4"></circle>');
  traits.push('<circle class="plot-point-alt" cx="' + nb2(H[0]) + '" cy="' + nb2(H[1]) + '" r="3"></circle>');

  /* Carre codant l'angle droit en H. Il est trace dans le plan vertical qui
     contient [MH] et la direction des x, donc ses deux cotes suivent
     exactement les deux directions concernees. */
  const t = Math.min(0.34, etX / 8);
  const q1 = P(xM + t, yM, 0), q2 = P(xM + t, yM, t), q3 = P(xM, yM, t);
  traits.push('<polyline class="frame-line" points="' + pt(q1) + ' ' + pt(q2) + ' ' +
    pt(q3) + '" fill="none"></polyline>');

  traits.push('<text class="tick-label" x="' + nb2(M[0] - 8) + '" y="' + nb2(M[1] - 4) +
    '" text-anchor="end">M</text>');
  traits.push('<text class="tick-label" x="' + nb2(H[0] - 8) + '" y="' + nb2(H[1] + 14) +
    '" text-anchor="end">H</text>');
  // L'inconnue porte un point d'interrogation, jamais sa valeur.
  traits.push('<text class="annotation-label" x="' + nb2((M[0] + H[0]) / 2 + 9) +
    '" y="' + nb2((M[1] + H[1]) / 2) + '" text-anchor="start">?</text>');
  traits.push('<text class="label-soft" x="' + nb2(c0[0] + 12) + '" y="' + nb2(c0[1] + 15) +
    '" text-anchor="start">' + (o.nomPlan || 'le plan') + '</text>');

  return svgFigure('Distance d un point a un plan', traits.join(''));
}

/* --- Aire sous une courbe ----------------------------------------------
   Une parabole y = a x^2 + b sur [0 ; borne], avec l'aire sous la courbe
   hachuree. Sert aux exercices ou l'integrale est demandee comme une AIRE, et
   non comme un calcul de primitive deguise.

   FIDELITE : la courbe est echantillonnee en cinquante points a partir de la
   fonction elle-meme, jamais approchee par un arc de cercle ou une courbe de
   Bezier posee a l'oeil. L'aire hachuree est donc exactement la region dont
   l'enonce demande la mesure, ce que verifie par integration numerique
   scripts/manuel/tests/figures-tle.test.js.

   LA FIGURE NE DIVULGUE PAS LA REPONSE : la zone hachuree porte un point
   d'interrogation, jamais la valeur de l'integrale. */
function figureTleAireSousCourbe(a, b, borne, options) {
  const o = options || {};
  if (!(a > 0 && borne > 0)) return '';
  const f = (x) => a * x * x + b;
  const yMax = f(borne) * 1.12;
  if (!(yMax > 0)) return '';

  /* DEUX ECHELLES INDEPENDANTES, contrairement aux figures de geometrie de ce
     fichier qui en partagent une seule.

     Corrige le 2026-09-14, apres controle visuel du PDF. La version
     precedente appelait echelleFigure(borne, yMax, ...), qui impose la MEME
     echelle aux deux axes pour ne pas deformer une figure geometrique. Ici
     c'est un GRAPHE, pas une figure : l'abscisse porte des x de 2 a 5 et
     l'ordonnee des valeurs de f allant jusqu'a 30. L'echelle commune etait
     donc dictee par l'ordonnee, et la courbe sortait large de 15 a 23 unites
     de viewBox sur 260 disponibles — un trait vertical dans lequel
     l'etiquette « aire ? » etait illisible. Le defaut ne se voyait sur aucun
     test : toutes les proprietes mathematiques etaient exactes, seule la
     LISIBILITE etait en cause, et c'est l'epreuve imprimee qui l'a montre.

     Un graphe n'a pas a etre isometrique : deformer l'echelle des ordonnees
     ne fait mentir aucune longueur, puisque aucune longueur n'est a mesurer
     sur ce dessin. La seule chose qui doit rester vraie est l'AIRE annoncee,
     et le test la mesure en revenant aux deux echelles. */
  const largeurUtile = FIG_L - 2 * (FIG_MARGE + 16);
  const hauteurUtile = FIG_H - 2 * FIG_MARGE;
  const eX = largeurUtile / borne;
  const eY = hauteurUtile / yMax;
  const ox = (FIG_L - borne * eX) / 2;
  const oz = (FIG_H + yMax * eY) / 2 - 12;
  const X = (x) => ox + x * eX;
  const Y = (y) => oz - y * eY;

  // Echantillonnage de la courbe : cinquante points, calcules par f.
  const pts = [];
  for (let i = 0; i <= 50; i++) {
    const x = borne * i / 50;
    pts.push(nb2(X(x)) + ',' + nb2(Y(f(x))));
  }

  const traits = [];
  // L'aplat hachure, ferme par les deux bords verticaux et l'axe.
  traits.push('<polygon points="' + nb2(X(0)) + ',' + nb2(Y(0)) + ' ' + pts.join(' ') +
    ' ' + nb2(X(borne)) + ',' + nb2(Y(0)) + '" fill="' + APLAT + '" stroke="none"></polygon>');

  // Axes.
  traits.push('<line class="axis" x1="' + nb2(X(0) - 12) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(borne) + 14) + '" y2="' + nb2(Y(0)) + '"></line>');
  traits.push('<line class="axis" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(0) + 10) +
    '" x2="' + nb2(X(0)) + '" y2="' + nb2(Y(yMax)) + '"></line>');

  // Bornes verticales, en trait fin : ce sont elles qui delimitent l'aire.
  traits.push('<line class="guide-line" x1="' + nb2(X(borne)) + '" y1="' + nb2(Y(0)) +
    '" x2="' + nb2(X(borne)) + '" y2="' + nb2(Y(f(borne))) + '"></line>');

  traits.push('<polyline class="curve-main" points="' + pts.join(' ') + '" fill="none"></polyline>');

  traits.push('<text class="tick-label" x="' + nb2(X(0)) + '" y="' + nb2(Y(0) + 18) +
    '" text-anchor="middle">0</text>');
  traits.push('<text class="tick-label" x="' + nb2(X(borne)) + '" y="' + nb2(Y(0) + 18) +
    '" text-anchor="middle">' + coteFig(borne, '') + '</text>');
  // L'inconnue porte un point d'interrogation, jamais sa valeur.
  traits.push('<text class="annotation-label" x="' + nb2(X(borne * 0.52)) +
    '" y="' + nb2(Y(f(borne) * 0.3)) + '" text-anchor="middle">aire ?</text>');

  return svgFigure('Aire sous une courbe entre deux bornes', traits.join(''));
}

/* =========================================================
   FIGURES DE PHYSIQUE-CHIMIE (COLLEGE) — 2026-09-16

   POURQUOI CE LOT. Les douze chapitres de physique de quatrieme et de
   troisieme n'avaient qu'UNE figure chacun (le schema du cours), et AUCUNE
   sur les exercices — la ou les chapitres de geometrie de maths en portent
   de sept a treize, parce que leurs generateurs appellent les helpers
   ci-dessus. Mesure du 2026-09-16 : 1 figure par chapitre de physique contre
   7 en moyenne en sixieme. Or un eleve de quatrieme a qui on decrit « deux
   lampes en derivation » EN TEXTE doit d'abord se representer le circuit
   avant de pouvoir appliquer une loi : la figure n'illustre pas l'enonce,
   elle en est la moitie. C'est encore plus vrai en optique et en mecanique,
   ou l'objet de l'exercice est une configuration geometrique.

   MEMES CONTRAINTES que les figures de maths ci-dessus, sans exception :
   viewBox obligatoire, seules les balises lues par svg2tikz.js (<rect>,
   <line>, <polygon>, <polyline>, <circle>, <ellipse>, <path>, <text>),
   aucune couleur en dur, les classes du projet portent le style, les valeurs
   chiffrees passent par fr() via coteFig().

   CE QUI CHANGE PAR RAPPORT AUX FIGURES DE MATHS, ET QUI EST ASSUME : un
   schema de circuit n'est PAS A L'ECHELLE, et n'a pas a l'etre. Un resistor
   de 470 ohms n'est pas 47 fois plus long qu'un resistor de 10 ohms ; la
   longueur d'un fil ne represente rien. La regle d'echelle des figures de
   maths (un rectangle 12x7 dessine dans le rapport 12/7) ne s'applique donc
   pas ici, et la mention « figure non a l echelle » n'est PAS posee : elle
   servirait a prevenir qu'on ne peut pas mesurer, alors que personne ne
   mesure un schema normalise. Les figures qui portent une VRAIE grandeur
   geometrique — le rayon lumineux et ses angles, le vecteur force et sa
   longueur, la caracteristique U=f(I) — sont elles a l'echelle, comme en
   maths.

   SYMBOLES. Normalises CEI, dans le trace le plus sobre qui reste lisible a
   52 mm de large (LARGEUR_FIGURE_EXERCICE_MM) : le generateur est un cercle
   barre, le resistor un rectangle vide, la lampe un cercle croise. Les
   symboles sont dessines a taille FIXE en unites de viewBox — les agrandir
   avec le circuit les rendrait difformes.

   ETIQUETTES. Elles traversent svg2tikz, qui TRADUIT les accents et les
   symboles usuels : « serie » s'ecrit donc « serie » avec son accent, et
   l'ohm s'ecrit avec son symbole. Verifie par conversion reelle le
   2026-09-16, pas suppose — un premier jet avait ecrit « ohms » en toutes
   lettres et supprime tous les accents par exces de prudence.
   Les indices s'ecrivent « U_1 » : le convertisseur les compose en
   $U_{1}$. Les aria-label des <svg>, eux, restent sans accent — ils ne
   traversent pas le convertisseur mais servent le lecteur d'ecran.
   ========================================================= */

/* Demi-dimension des symboles, en unites de viewBox. Valeur choisie pour
   qu'une lampe reste lisible a l'impression : 11 unites sur un viewBox de 260
   rendu sur 52 mm donnent ~2,2 mm de rayon. */
const SYM = 11;

/* --- Symboles normalises ------------------------------------------------
   Chacun rend les traits d'UN dipole centre en (cx, cy). Les bornes du
   symbole sont a +/- SYM du centre sur l'axe du fil : c'est a l'appelant de
   tirer le fil jusqu'a elles. */

/* Generateur : cercle barre d'un trait perpendiculaire au fil. */
function symGenerateur(cx, cy) {
  return '<circle class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(SYM) + '" fill="none"></circle>' +
    '<line class="frame-line" x1="' + nb2(cx) + '" y1="' + nb2(cy - SYM) + '" x2="' + nb2(cx) + '" y2="' + nb2(cy + SYM) + '"></line>';
}

/* Lampe : cercle croise, symbole CEI de la lampe de signalisation — celui des
   manuels de college. */
function symLampe(cx, cy) {
  const d = SYM * 0.707;
  return '<circle class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(SYM) + '" fill="none"></circle>' +
    '<line class="frame-line" x1="' + nb2(cx - d) + '" y1="' + nb2(cy - d) + '" x2="' + nb2(cx + d) + '" y2="' + nb2(cy + d) + '"></line>' +
    '<line class="frame-line" x1="' + nb2(cx - d) + '" y1="' + nb2(cy + d) + '" x2="' + nb2(cx + d) + '" y2="' + nb2(cy - d) + '"></line>';
}

/* Resistor : rectangle vide, cote long parallele au fil. */
function symResistor(cx, cy, vertical) {
  const L = SYM, e = SYM * 0.62;
  const w = vertical ? e : L, h = vertical ? L : e;
  return '<rect class="frame-line" x="' + nb2(cx - w) + '" y="' + nb2(cy - h) + '" ' +
    'width="' + nb2(2 * w) + '" height="' + nb2(2 * h) + '" fill="none"></rect>';
}

/* Appareil de mesure : cercle portant sa lettre (A pour amperemetre, V pour
   voltmetre). */
function symMesure(cx, cy, lettre) {
  return '<circle class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(SYM) + '" fill="none"></circle>' +
    '<text class="annotation-label" x="' + nb2(cx) + '" y="' + nb2(cy + 4.5) + '" text-anchor="middle">' + lettre + '</text>';
}

/* Fleche de sens du courant, posee SUR un fil horizontal. `marker-end` est lu
   par svg2tikz et rendu par une pointe TikZ : c'est le seul moyen d'obtenir
   une fleche qui traverse le pipeline. La valeur de l'attribut n'est jamais
   dereferencee (le convertisseur ne relit pas les <defs>), elle sert
   uniquement de drapeau. */
function flecheCourant(x, y, longueur) {
  const l = longueur === undefined ? 18 : longueur;
  return '<line class="axis" x1="' + nb2(x - l / 2) + '" y1="' + nb2(y) + '" ' +
    'x2="' + nb2(x + l / 2) + '" y2="' + nb2(y) + '" marker-end="url(#f)"></line>';
}

/* Etiquette d'une grandeur : sa valeur, ou un point d'interrogation quand
   c'est l'inconnue. La figure ne donne JAMAIS la reponse — meme convention
   que figureTriangleRectangle en maths, ou le cote cherche porte « ? ». */
function cotePhys(nom, valeur, unite) {
  return nom + ' = ' + (valeur === null ? '?' : coteFig(valeur, unite));
}

/* --- Circuit serie ------------------------------------------------------
   Generateur et deux dipoles sur une seule boucle rectangulaire. Sert aux
   exercices d'additivite des tensions (4e, lois des circuits) et a tout
   exercice ou l'eleve doit d'abord RECONNAITRE la structure. */
function figureCircuitSerie(options) {
  const o = options || {};
  const dipole = o.dipole === 'resistor' ? symResistor : symLampe;

  /* Boucle rectangulaire : generateur sur la branche verticale de gauche,
     les deux dipoles en haut. C'est la disposition des manuels de college,
     et elle laisse le fil du bas libre pour la fleche du courant. */
  const xg = 46, xd = 228, yh = 52, yb = 126;
  const x1 = xg + (xd - xg) * 0.38, x2 = xg + (xd - xg) * 0.76;
  const yGen = (yh + yb) / 2;

  const t = [];
  // Fils : la boucle, coupee a l'emplacement de chaque symbole.
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yh) + '" x2="' + nb2(x1 - SYM) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(x1 + SYM) + '" y1="' + nb2(yh) + '" x2="' + nb2(x2 - SYM) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(x2 + SYM) + '" y1="' + nb2(yh) + '" x2="' + nb2(xd) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd) + '" y1="' + nb2(yh) + '" x2="' + nb2(xd) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd) + '" y1="' + nb2(yb) + '" x2="' + nb2(xg) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yb) + '" x2="' + nb2(xg) + '" y2="' + nb2(yGen + SYM) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yGen - SYM) + '" x2="' + nb2(xg) + '" y2="' + nb2(yh) + '"></line>');

  t.push(symGenerateur(xg, yGen));
  t.push(dipole(x1, yh));
  t.push(dipole(x2, yh));

  if (o.U !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(xg - SYM - 6) + '" y="' + nb2(yGen + 4) + '" text-anchor="end">' + cotePhys('U', o.U, 'V') + '</text>');
  }
  if (o.U1 !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(x1) + '" y="' + nb2(yh - SYM - 9) + '" text-anchor="middle">' + cotePhys('U_1', o.U1, 'V') + '</text>');
  }
  if (o.U2 !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(x2) + '" y="' + nb2(yh - SYM - 9) + '" text-anchor="middle">' + cotePhys('U_2', o.U2, 'V') + '</text>');
  }
  /* Le courant sur le fil du bas. En serie il est UNIQUE, et c'est
     precisement ce que l'eleve doit pouvoir lire sur la figure : la mention
     est donc portee par la figure, pas laissee a l'enonce. */
  t.push(flecheCourant((xg + xd) / 2, yb));
  t.push('<text class="tick-label" x="' + nb2((xg + xd) / 2) + '" y="' + nb2(yb + 19) + '" text-anchor="middle">I : le même partout</text>');
  t.push('<text class="label-soft" x="' + nb2(FIG_L / 2) + '" y="' + nb2(FIG_H - 6) + '" text-anchor="middle">montage en série</text>');

  return svgFigure('Circuit serie : un generateur et deux dipoles sur une seule boucle', t.join(''));
}

/* --- Circuit en derivation ----------------------------------------------
   Generateur et deux branches paralleles entre deux noeuds. Les noeuds sont
   MARQUES d'un point : c'est le detail qui distingue visuellement les deux
   structures, et la definition du chapitre s'appuie dessus (« un point ou se
   rejoignent au moins trois fils »). */
function figureCircuitDerivation(options) {
  const o = options || {};
  const dipole = o.dipole === 'resistor' ? symResistor : symLampe;

  /* BUDGET VERTICAL, du haut vers le bas (viewBox de 170) :
       14   l'etiquette I_1, au-dessus de la branche haute
       46   la branche haute
       ...  le corps du circuit
      124   la branche basse
      140   l'etiquette I_2, sous la branche basse
      164   le titre, en pied
     Les deux etiquettes de branche sont ainsi TOUJOURS du bon cote de leur
     branche, et aucune ne peut atteindre le titre. */
  const xg = 42, xA = 112, xB = 226, yh = 46, yb = 124;
  const yGen = (yh + yb) / 2;
  const xd = (xA + xB) / 2;               // centre des deux dipoles

  const t = [];
  // Du generateur vers les deux noeuds : les deux fils horizontaux, puis le
  // montant gauche coupe par le seul symbole du generateur.
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yh) + '" x2="' + nb2(xA) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yb) + '" x2="' + nb2(xA) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yh) + '" x2="' + nb2(xg) + '" y2="' + nb2(yGen - SYM) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yGen + SYM) + '" x2="' + nb2(xg) + '" y2="' + nb2(yb) + '"></line>');
  // Les deux branches, chacune coupee par son dipole.
  t.push('<line class="frame-line" x1="' + nb2(xA) + '" y1="' + nb2(yh) + '" x2="' + nb2(xd - SYM) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd + SYM) + '" y1="' + nb2(yh) + '" x2="' + nb2(xB) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xA) + '" y1="' + nb2(yb) + '" x2="' + nb2(xd - SYM) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd + SYM) + '" y1="' + nb2(yb) + '" x2="' + nb2(xB) + '" y2="' + nb2(yb) + '"></line>');
  // Les montants qui referment les branches sur les noeuds.
  t.push('<line class="frame-line" x1="' + nb2(xA) + '" y1="' + nb2(yh) + '" x2="' + nb2(xA) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xB) + '" y1="' + nb2(yh) + '" x2="' + nb2(xB) + '" y2="' + nb2(yb) + '"></line>');

  t.push(symGenerateur(xg, yGen));
  t.push(dipole(xd, yh));
  t.push(dipole(xd, yb));

  // Les quatre noeuds, en pastille. `plot-point` est la classe des points
  // remarquables du projet, deja rendue en pastille pleine par svg2tikz.
  t.push('<circle class="plot-point" cx="' + nb2(xA) + '" cy="' + nb2(yh) + '" r="3"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(xA) + '" cy="' + nb2(yb) + '" r="3"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(xB) + '" cy="' + nb2(yh) + '" r="3"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(xB) + '" cy="' + nb2(yb) + '" r="3"></circle>');

  if (o.U !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(xg - SYM - 6) + '" y="' + nb2(yGen + 4) + '" text-anchor="end">' + cotePhys('U', o.U, 'V') + '</text>');
  }
  /* Le courant total, sur le troncon AVANT le premier noeud : c'est la que
     « total » a un sens, et c'est ce troncon que la fleche parcourt.
     L'etiquette est posee entre le generateur et le noeud, au milieu de la
     hauteur, ou aucun fil ne passe. */
  if (o.I !== undefined) {
    t.push(flecheCourant((xg + xA) / 2, yb));
    t.push('<text class="annotation-label" x="' + nb2((xg + xA) / 2) + '" y="' + nb2(yb + 16) + '" text-anchor="middle">' + cotePhys('I', o.I, 'A') + '</text>');
  }
  if (o.I1 !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(xd) + '" y="' + nb2(yh - SYM - 8) + '" text-anchor="middle">' + cotePhys('I_1', o.I1, 'A') + '</text>');
  }
  if (o.I2 !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(xd) + '" y="' + nb2(yb + SYM + 15) + '" text-anchor="middle">' + cotePhys('I_2', o.I2, 'A') + '</text>');
  }
  t.push('<text class="label-soft" x="' + nb2(FIG_L / 2) + '" y="' + nb2(FIG_H - 2) + '" text-anchor="middle">montage en dérivation</text>');

  return svgFigure('Circuit en derivation : deux branches entre les memes noeuds', t.join(''));
}

/* --- Circuit de mesure d'un resistor ------------------------------------
   Un resistor, l'amperemetre EN SERIE dans la boucle et le voltmetre EN
   DERIVATION a ses bornes. C'est la figure du chapitre 3e loi d'Ohm, et elle
   porte a elle seule l'erreur la plus couteuse du chapitre (intervertir les
   deux branchements) : l'eleve VOIT ou chaque appareil se place. */
function figureCircuitMesure(options) {
  const o = options || {};

  /* BUDGET VERTICAL : le fil du haut porte la boucle principale, le voltmetre
     est dans une derivation posee JUSTE SOUS le resistor, et le fil de retour
     passe tout en bas — de sorte qu'aucun fil n'en croise un autre. C'est
     cette absence de croisement qui rend le schema lisible a 52 mm, et c'est
     pour cela que le voltmetre n'est pas pose au milieu du circuit. */
  const yh = 40;                       // boucle principale
  const yV = 92;                       // le voltmetre, en derivation
  const yb = 148;                      // fil de retour
  const xg = 38, xd = 232;
  const xA = 84;                       // l'amperemetre, en serie
  const xR = 168;                      // le resistor
  const yGen = (yh + yb) / 2;

  const t = [];
  // Boucle principale : generateur -> amperemetre -> resistor -> retour.
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yh) + '" x2="' + nb2(xA - SYM) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xA + SYM) + '" y1="' + nb2(yh) + '" x2="' + nb2(xR - SYM) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xR + SYM) + '" y1="' + nb2(yh) + '" x2="' + nb2(xd) + '" y2="' + nb2(yh) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd) + '" y1="' + nb2(yh) + '" x2="' + nb2(xd) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xd) + '" y1="' + nb2(yb) + '" x2="' + nb2(xg) + '" y2="' + nb2(yb) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yb) + '" x2="' + nb2(xg) + '" y2="' + nb2(yGen + SYM) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xg) + '" y1="' + nb2(yGen - SYM) + '" x2="' + nb2(xg) + '" y2="' + nb2(yh) + '"></line>');

  /* La derivation du voltmetre : deux montants COURTS descendant des bornes du
     resistor vers le voltmetre. Ils s'arretent a yV, bien au-dessus du fil de
     retour (yb) : rien ne se croise. */
  const xgV = xR - SYM - 14, xdV = xR + SYM + 14;
  t.push('<line class="frame-line" x1="' + nb2(xgV) + '" y1="' + nb2(yh) + '" x2="' + nb2(xgV) + '" y2="' + nb2(yV) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xdV) + '" y1="' + nb2(yh) + '" x2="' + nb2(xdV) + '" y2="' + nb2(yV) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xgV) + '" y1="' + nb2(yV) + '" x2="' + nb2(xR - SYM) + '" y2="' + nb2(yV) + '"></line>');
  t.push('<line class="frame-line" x1="' + nb2(xR + SYM) + '" y1="' + nb2(yV) + '" x2="' + nb2(xdV) + '" y2="' + nb2(yV) + '"></line>');
  // Les deux points de piquage, sur le fil du haut : ce sont des noeuds.
  t.push('<circle class="plot-point" cx="' + nb2(xgV) + '" cy="' + nb2(yh) + '" r="3"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(xdV) + '" cy="' + nb2(yh) + '" r="3"></circle>');

  t.push(symGenerateur(xg, yGen));
  t.push(symResistor(xR, yh));
  t.push(symMesure(xA, yh, 'A'));
  t.push(symMesure(xR, yV, 'V'));

  // La valeur du resistor, au-dessus de son symbole.
  t.push('<text class="annotation-label" x="' + nb2(xR) + '" y="' + nb2(yh - SYM - 9) + '" text-anchor="middle">' +
    cotePhys('R', o.R === undefined ? null : o.R, (o.R === null || o.R === undefined) ? '' : 'Ω') + '</text>');
  // Les deux mentions de branchement : ce sont elles que porte la figure.
  t.push('<text class="tick-label" x="' + nb2(xA) + '" y="' + nb2(yh - SYM - 9) + '" text-anchor="middle">en série</text>');
  t.push('<text class="tick-label" x="' + nb2(xR) + '" y="' + nb2(yV + SYM + 14) + '" text-anchor="middle">en dérivation</text>');
  // L'intensite, sur le fil de retour, sous le generateur.
  if (o.I !== undefined) {
    t.push('<text class="annotation-label" x="' + nb2(xg + 26) + '" y="' + nb2(yb - 11) + '" text-anchor="start">' + cotePhys('I', o.I, 'A') + '</text>');
  }

  return svgFigure('Montage de mesure : amperemetre en serie, voltmetre en derivation aux bornes du resistor', t.join(''));
}

/* --- Caracteristique tension-courant U = f(I) ---------------------------
   La droite passant par l'origine d'un resistor, et le triangle qui donne son
   coefficient directeur. A L'ECHELLE, celle-la : c'est un graphique, on y
   lit des valeurs, et le triangle DeltaU / DeltaI n'a de sens que si les
   proportions sont justes.

   Sert au chapitre 3e loi d'Ohm, ou la moitie des enonces tires demande
   justement de lire R comme un coefficient directeur. */
function figureCaracteristique(I1, U1, I2, U2, options) {
  const o = options || {};
  const X0 = 46, Y0 = 138;                      // origine du repere
  const LX = 176, LY = 104;                     // longueurs des axes

  const iMax = Math.max(I1, I2) * 1.25;
  const uMax = Math.max(U1, U2) * 1.25;
  const X = i => X0 + (i / iMax) * LX;
  const Y = u => Y0 - (u / uMax) * LY;

  const t = [];
  // Axes, depassant legerement l'origine pour porter leurs fleches.
  t.push('<line class="axis" x1="' + nb2(X0) + '" y1="' + nb2(Y0) + '" x2="' + nb2(X0 + LX + 14) + '" y2="' + nb2(Y0) + '" marker-end="url(#f)"></line>');
  t.push('<line class="axis" x1="' + nb2(X0) + '" y1="' + nb2(Y0) + '" x2="' + nb2(X0) + '" y2="' + nb2(Y0 - LY - 14) + '" marker-end="url(#f)"></line>');

  // La droite, tracee de l'origine jusqu'au-dela du second point : c'est la
  // proportionnalite qui est le fait du chapitre.
  const pente = U2 / I2;
  const iFin = iMax * 0.96;
  t.push('<line class="curve-main" x1="' + nb2(X(0)) + '" y1="' + nb2(Y(0)) + '" x2="' + nb2(X(iFin)) + '" y2="' + nb2(Y(pente * iFin)) + '"></line>');

  // Le triangle DeltaU / DeltaI entre les deux points mesures.
  t.push('<line class="guide-line" x1="' + nb2(X(I1)) + '" y1="' + nb2(Y(U1)) + '" x2="' + nb2(X(I2)) + '" y2="' + nb2(Y(U1)) + '"></line>');
  t.push('<line class="guide-line" x1="' + nb2(X(I2)) + '" y1="' + nb2(Y(U1)) + '" x2="' + nb2(X(I2)) + '" y2="' + nb2(Y(U2)) + '"></line>');

  // Les deux points de mesure, et leurs pointilles vers les axes.
  [[I1, U1], [I2, U2]].forEach(function (p) {
    t.push('<line class="grid-line" x1="' + nb2(X0) + '" y1="' + nb2(Y(p[1])) + '" x2="' + nb2(X(p[0])) + '" y2="' + nb2(Y(p[1])) + '"></line>');
    t.push('<line class="grid-line" x1="' + nb2(X(p[0])) + '" y1="' + nb2(Y0) + '" x2="' + nb2(X(p[0])) + '" y2="' + nb2(Y(p[1])) + '"></line>');
    t.push('<circle class="plot-point" cx="' + nb2(X(p[0])) + '" cy="' + nb2(Y(p[1])) + '" r="3"></circle>');
  });

  // Graduations chiffrees : seules les deux mesures, pas une grille complete.
  // Une figure d'exercice a 52 mm ne supporte pas dix etiquettes.
  t.push('<text class="tick-label" x="' + nb2(X(I1)) + '" y="' + nb2(Y0 + 15) + '" text-anchor="middle">' + coteFig(I1, '') + '</text>');
  t.push('<text class="tick-label" x="' + nb2(X(I2)) + '" y="' + nb2(Y0 + 15) + '" text-anchor="middle">' + coteFig(I2, '') + '</text>');
  t.push('<text class="tick-label" x="' + nb2(X0 - 6) + '" y="' + nb2(Y(U1) + 4) + '" text-anchor="end">' + coteFig(U1, '') + '</text>');
  t.push('<text class="tick-label" x="' + nb2(X0 - 6) + '" y="' + nb2(Y(U2) + 4) + '" text-anchor="end">' + coteFig(U2, '') + '</text>');

  // Noms des axes, avec leur unite : c'est la lecture des unites qui manque le
  // plus souvent a l'eleve quand il calcule une pente.
  t.push('<text class="axis-label" x="' + nb2(X0 + LX + 14) + '" y="' + nb2(Y0 - 8) + '" text-anchor="end">I (A)</text>');
  t.push('<text class="axis-label" x="' + nb2(X0 - 4) + '" y="' + nb2(Y0 - LY - 16) + '" text-anchor="start">U (V)</text>');
  if (o.pente !== false) {
    t.push('<text class="label-soft" x="' + nb2(X(I2) + 8) + '" y="' + nb2((Y(U1) + Y(U2)) / 2) + '" text-anchor="start">R = ?</text>');
  }

  return svgFigure('Caracteristique tension-courant d un resistor : droite passant par l origine et triangle du coefficient directeur', t.join(''));
}

/* --- Frise du mouvement (vitesse) --------------------------------------
   Un trajet d'un point A a un point B, avec sa distance et sa duree. A
   L'ECHELLE sur la distance : la fleche est proportionnelle au trajet, ce qui
   rend comparables deux figures d'un meme chapitre.

   Sert au chapitre 4e vitesse. Ce que la figure apporte a l'eleve : la vitesse
   n'est pas un nombre qui tombe d'une formule, c'est un rapport entre une
   LONGUEUR et une DUREE, et les deux sont sur le dessin. L'inconnue porte
   « ? », jamais sa valeur. */
function figureTrajet(distance, duree, options) {
  const o = options || {};
  const uD = o.uniteDistance === undefined ? 'km' : o.uniteDistance;
  const uT = o.uniteDuree === undefined ? 'h' : o.uniteDuree;
  const depart = o.depart === undefined ? 'A' : o.depart;
  const arrivee = o.arrivee === undefined ? 'B' : o.arrivee;

  const y = 78;
  const x0 = 42, x1 = 226;

  const t = [];
  // La route : un trait epais, flechee dans le sens du parcours.
  t.push('<line class="frame-line" x1="' + nb2(x0) + '" y1="' + nb2(y) + '" x2="' + nb2(x1) + '" y2="' + nb2(y) + '" marker-end="url(#f)"></line>');
  // Les deux bornes, marquees et nommees.
  t.push('<line class="axis" x1="' + nb2(x0) + '" y1="' + nb2(y - 12) + '" x2="' + nb2(x0) + '" y2="' + nb2(y + 12) + '"></line>');
  t.push('<line class="axis" x1="' + nb2(x1) + '" y1="' + nb2(y - 12) + '" x2="' + nb2(x1) + '" y2="' + nb2(y + 12) + '"></line>');
  t.push('<circle class="plot-point" cx="' + nb2(x0) + '" cy="' + nb2(y) + '" r="3.5"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(x1) + '" cy="' + nb2(y) + '" r="3.5"></circle>');
  t.push('<text class="annotation-label" x="' + nb2(x0) + '" y="' + nb2(y - 20) + '" text-anchor="middle">' + depart + '</text>');
  t.push('<text class="annotation-label" x="' + nb2(x1) + '" y="' + nb2(y - 20) + '" text-anchor="middle">' + arrivee + '</text>');

  // La distance SOUS la route, la duree encore dessous : les deux grandeurs
  // du rapport, l'une au-dessus de l'autre, dans l'ordre de la fraction.
  t.push('<text class="annotation-label" x="' + nb2((x0 + x1) / 2) + '" y="' + nb2(y + 30) + '" text-anchor="middle">' + cotePhys('d', distance === undefined ? null : distance, uD) + '</text>');
  t.push('<text class="tick-label" x="' + nb2((x0 + x1) / 2) + '" y="' + nb2(y + 48) + '" text-anchor="middle">' + cotePhys('t', duree === undefined ? null : duree, uT) + '</text>');
  if (o.v !== undefined) {
    t.push('<text class="label-soft" x="' + nb2((x0 + x1) / 2) + '" y="' + nb2(y - 38) + '" text-anchor="middle">' + cotePhys('v', o.v, uD + '/' + uT) + '</text>');
  }

  return svgFigure('Trajet de ' + depart + ' a ' + arrivee + ', avec sa distance et sa duree', t.join(''));
}

/* --- Rayon lumineux et ombre (optique) ---------------------------------
   Une source ponctuelle, un objet opaque et l'ombre portee sur un ecran. A
   L'ECHELLE : c'est une figure de geometrie, et le theoreme de Thales y est
   lisible — la taille de l'ombre se deduit des distances, et l'eleve doit
   pouvoir le voir avant de le calculer.

   Sert au chapitre 4e lumiere (propagation rectiligne). */
function figureOmbre(hauteurObjet, distSourceObjet, distSourceEcran, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'cm' : o.unite;

  // Echelle commune aux deux directions, comme en maths : une ombre deux fois
  // plus grande que l'objet doit se voir deux fois plus grande.
  const hOmbre = hauteurObjet * distSourceEcran / distSourceObjet;
  /* La hauteur disponible exclut les DEUX lignes de cote du bas (2 x 20
     unites) et la bande de titre : sans cette reserve, la cote de distance
     remontait dans le dessin (releve sur planche le 2026-09-16). */
  const e = Math.min((FIG_L - 90) / distSourceEcran, (FIG_H - 104) / hOmbre);

  const xS = 40;                                  // la source
  const yAxe = 84;                                // l'axe optique
  const xO = xS + distSourceObjet * e;            // l'objet
  const xE = xS + distSourceEcran * e;            // l'ecran
  const hO = hauteurObjet * e, hE = hOmbre * e;

  const t = [];
  // Les deux rayons extremes, de la source aux bords de l'ombre : ce sont eux
  // qui portent la propagation rectiligne.
  t.push('<line class="curve-main" x1="' + nb2(xS) + '" y1="' + nb2(yAxe) + '" x2="' + nb2(xE) + '" y2="' + nb2(yAxe - hE) + '" marker-end="url(#f)"></line>');
  t.push('<line class="curve-main" x1="' + nb2(xS) + '" y1="' + nb2(yAxe) + '" x2="' + nb2(xE) + '" y2="' + nb2(yAxe) + '"></line>');

  // L'objet opaque : un segment plein, pose sur l'axe.
  t.push('<line class="frame-line" x1="' + nb2(xO) + '" y1="' + nb2(yAxe) + '" x2="' + nb2(xO) + '" y2="' + nb2(yAxe - hO) + '"></line>');
  // L'ecran : un trait vertical plein, debordant l'ombre des deux cotes.
  t.push('<line class="frame-line" x1="' + nb2(xE) + '" y1="' + nb2(yAxe + 12) + '" x2="' + nb2(xE) + '" y2="' + nb2(yAxe - hE - 14) + '"></line>');
  // L'ombre portee, en aplat : la grandeur cherchee, mise en evidence.
  t.push('<rect x="' + nb2(xE) + '" y="' + nb2(yAxe - hE) + '" width="6" height="' + nb2(hE) + '" fill="' + APLAT + '" stroke="none"></rect>');

  t.push('<circle class="plot-point" cx="' + nb2(xS) + '" cy="' + nb2(yAxe) + '" r="3.5"></circle>');
  t.push('<text class="tick-label" x="' + nb2(xS) + '" y="' + nb2(yAxe + 16) + '" text-anchor="middle">source</text>');
  /* La hauteur de l'objet, cotee A GAUCHE de son segment : posee au-dessus,
     elle tombait sur le rayon superieur. */
  t.push('<text class="annotation-label" x="' + nb2(xO - 7) + '" y="' + nb2(yAxe - hO - 7) + '" text-anchor="end">' + coteFig(hauteurObjet, unite) + '</text>');
  t.push('<text class="tick-label" x="' + nb2(xE + 4) + '" y="' + nb2(yAxe + 16) + '" text-anchor="middle">écran</text>');
  t.push('<text class="annotation-label" x="' + nb2(xE + 11) + '" y="' + nb2(yAxe - hE / 2 + 4) + '" text-anchor="start">ombre = ?</text>');

  /* Les deux distances, cotees SOUS le dessin sur deux niveaux, chacune avec
     ses traits de rappel : sans eux, deux nombres flottants sous un dessin ne
     disent pas ce qu'ils mesurent. */
  const y1 = yAxe + 40, y2 = yAxe + 62;
  t.push('<line class="grid-line" x1="' + nb2(xS) + '" y1="' + nb2(yAxe) + '" x2="' + nb2(xS) + '" y2="' + nb2(y2) + '"></line>');
  t.push('<line class="grid-line" x1="' + nb2(xO) + '" y1="' + nb2(yAxe) + '" x2="' + nb2(xO) + '" y2="' + nb2(y1) + '"></line>');
  t.push('<line class="grid-line" x1="' + nb2(xE) + '" y1="' + nb2(yAxe + 12) + '" x2="' + nb2(xE) + '" y2="' + nb2(y2) + '"></line>');
  t.push('<line class="axis" x1="' + nb2(xS) + '" y1="' + nb2(y1) + '" x2="' + nb2(xO) + '" y2="' + nb2(y1) + '"></line>');
  t.push('<text class="tick-label" x="' + nb2((xS + xO) / 2) + '" y="' + nb2(y1 - 5) + '" text-anchor="middle">' + coteFig(distSourceObjet, unite) + '</text>');
  t.push('<line class="axis" x1="' + nb2(xS) + '" y1="' + nb2(y2) + '" x2="' + nb2(xE) + '" y2="' + nb2(y2) + '"></line>');
  t.push('<text class="tick-label" x="' + nb2((xS + xE) / 2) + '" y="' + nb2(y2 - 5) + '" text-anchor="middle">' + coteFig(distSourceEcran, unite) + '</text>');

  return svgFigure('Source ponctuelle, objet opaque et ombre portee sur un ecran', t.join(''));
}

/* --- Vecteur force / poids (mecanique) ---------------------------------
   Un objet et la ou les forces qui s'exercent sur lui, en fleches. A
   L'ECHELLE sur la norme : deux forces de 300 N et 150 N sont dessinees dans
   le rapport 2. C'est ce qui distingue un schema de forces utile d'une
   decoration.

   Sert au chapitre 3e gravitation (poids, P = m g). */
function figureForces(forces, options) {
  const o = options || {};
  const nomObjet = o.objet === undefined ? '' : o.objet;

  const cx = FIG_L / 2, cy = FIG_H / 2 - 4;
  const r = 15;
  // L'echelle : la plus grande force occupe la place disponible.
  const normeMax = Math.max.apply(null, forces.map(function (f) { return Math.abs(f.valeur === null ? 1 : f.valeur); }));
  const lMax = 50;

  const t = [];
  // L'objet : un disque, point d'application commun des forces.
  t.push('<circle class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(r) + '" fill="' + APLAT + '"></circle>');
  t.push('<circle class="plot-point" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="2.5"></circle>');
  /* Le nom de l'objet A GAUCHE, et non dessous : la verticale porte les
     fleches et leurs etiquettes, l'horizontale est libre. Pose dessous, il
     percutait l'etiquette du poids (releve sur planche le 2026-09-16). */
  if (nomObjet) {
    t.push('<text class="tick-label" x="' + nb2(cx - r - 8) + '" y="' + nb2(cy + 4) + '" text-anchor="end">' + nomObjet + '</text>');
  }

  forces.forEach(function (f) {
    // `sens` : 'bas' pour le poids, 'haut' pour une reaction ou une poussee.
    const vers = f.sens === 'haut' ? -1 : 1;
    const l = (Math.abs(f.valeur === null ? normeMax : f.valeur) / normeMax) * lMax;
    const yDep = cy + vers * r;
    const yFin = cy + vers * (r + l);
    t.push('<line class="curve-main" x1="' + nb2(cx) + '" y1="' + nb2(yDep) + '" x2="' + nb2(cx) + '" y2="' + nb2(yFin) + '" marker-end="url(#f)"></line>');
    const etiq = cotePhys(f.nom, f.valeur, f.unite === undefined ? 'N' : f.unite);
    t.push('<text class="annotation-label" x="' + nb2(cx + 10) + '" y="' + nb2((yDep + yFin) / 2 + 4) + '" text-anchor="start">' + etiq + '</text>');
  });

  return svgFigure('Objet et forces qui s y exercent, representees par des fleches', t.join(''));
}

/* --- Diagramme d'energie (barres) --------------------------------------
   Deux ou trois formes d'energie en barres comparables. A L'ECHELLE sur la
   hauteur : c'est tout l'interet d'un diagramme d'energie, voir qu'une
   conversion conserve le total.

   Sert au chapitre 3e energie (cinetique / potentielle) et a
   3e puissance-electrique. */
function figureBarresEnergie(barres, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'J' : o.unite;

  const y0 = 134;                                  // la ligne de base
  const hMax = 92;
  const valeurMax = Math.max.apply(null, barres.map(function (b) { return Math.abs(b.valeur === null ? 0 : b.valeur); })) || 1;
  const n = barres.length;
  const largeur = Math.min(42, (FIG_L - 70) / n - 14);
  const pas = (FIG_L - 56) / n;
  const x0 = 34;

  const t = [];
  // L'axe des ordonnees et la ligne de base.
  t.push('<line class="axis" x1="' + nb2(x0 - 10) + '" y1="' + nb2(y0) + '" x2="' + nb2(FIG_L - 16) + '" y2="' + nb2(y0) + '"></line>');
  t.push('<line class="axis" x1="' + nb2(x0 - 10) + '" y1="' + nb2(y0) + '" x2="' + nb2(x0 - 10) + '" y2="' + nb2(y0 - hMax - 14) + '" marker-end="url(#f)"></line>');
  t.push('<text class="axis-label" x="' + nb2(x0 - 14) + '" y="' + nb2(y0 - hMax - 18) + '" text-anchor="start">E (' + unite + ')</text>');

  barres.forEach(function (b, i) {
    const xc = x0 + pas * (i + 0.5);
    const inconnue = b.valeur === null;
    const h = inconnue ? hMax * 0.18 : (Math.abs(b.valeur) / valeurMax) * hMax;
    // Une barre inconnue est dessinee en pointilles et basse : elle ne doit
    // pas suggerer une valeur. Le « ? » porte l'information.
    t.push('<rect class="' + (inconnue ? 'guide-line' : 'frame-line') + '" x="' + nb2(xc - largeur / 2) + '" y="' + nb2(y0 - h) +
      '" width="' + nb2(largeur) + '" height="' + nb2(h) + '" fill="' + (inconnue ? 'none' : APLAT) + '"></rect>');
    t.push('<text class="annotation-label" x="' + nb2(xc) + '" y="' + nb2(y0 - h - 8) + '" text-anchor="middle">' +
      (inconnue ? '?' : coteFig(b.valeur, '')) + '</text>');
    t.push('<text class="tick-label" x="' + nb2(xc) + '" y="' + nb2(y0 + 16) + '" text-anchor="middle">' + b.nom + '</text>');
  });

  return svgFigure('Diagramme en barres comparant des energies', t.join(''));
}

/* --- Bilan de masse d'une transformation chimique ----------------------
   Les reactifs a gauche, les produits a droite, une fleche de transformation
   au milieu, et les masses de part et d'autre. A L'ECHELLE sur la masse
   totale : les deux plateaux ont la meme hauteur quand la masse se conserve,
   ce qui est EXACTEMENT le fait du chapitre.

   Sert aux chapitres 4e transformations-chimiques et 3e reactions-chimiques. */
function figureBilanMasse(reactifs, produits, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'g' : o.unite;

  const somme = function (l) {
    return l.reduce(function (s, x) { return s + (x.masse === null ? 0 : x.masse); }, 0);
  };
  const total = Math.max(somme(reactifs), somme(produits)) || 1;

  const y0 = 128;
  const hMax = 74;
  const xG = 62, xD = 198;
  const largeur = 46;

  const t = [];
  // Les deux piles, empilees par constituant : une transformation qui conserve
  // la masse donne deux piles de meme hauteur, et c'est visible d'un coup.
  [[xG, reactifs], [xD, produits]].forEach(function (cote) {
    const x = cote[0], liste = cote[1];
    let cumul = 0;
    liste.forEach(function (c) {
      const inconnue = c.masse === null;
      const h = inconnue ? 16 : (c.masse / total) * hMax;
      const yb = y0 - cumul;
      t.push('<rect class="' + (inconnue ? 'guide-line' : 'frame-line') + '" x="' + nb2(x - largeur / 2) + '" y="' + nb2(yb - h) +
        '" width="' + nb2(largeur) + '" height="' + nb2(h) + '" fill="' + (inconnue ? 'none' : APLAT) + '"></rect>');
      t.push('<text class="tick-label" x="' + nb2(x) + '" y="' + nb2(yb - h / 2 + 4) + '" text-anchor="middle">' +
        (inconnue ? '?' : coteFig(c.masse, unite)) + '</text>');
      cumul += h;
    });
    /* Le TOTAL de la pile : c'est lui que le chapitre compare d'un cote a
       l'autre (« la masse totale se conserve »). Muet des qu'une masse est
       inconnue — l'annoncer supposerait la reponse.

       Les NOMS des especes ne sont PAS imprimes sous les piles (corrige le
       2026-09-16 apres controle sur figures tirees du livre) : les noms reels
       du corpus sont des expressions entieres — « un ruban de magnesium »,
       « le dioxygene de l'air » — qui, concatenees par « + » sous une pile de
       46 unites, debordaient sur la figure voisine. Les deux libelles
       « reactifs » et « produits » suffisent : le detail des especes est dans
       l'enonce, trois centimetres plus haut, et l'y repeter en corps 5 ne
       servait personne. */
    const inconnue = liste.some(function (c) { return c.masse === null; });
    if (!inconnue) {
      t.push('<text class="tick-label" x="' + nb2(x) + '" y="' + nb2(y0 - cumul - 9) + '" text-anchor="middle">total ' + coteFig(somme(liste), unite) + '</text>');
    }
  });

  // La ligne de base commune, qui rend les deux piles comparables.
  t.push('<line class="axis" x1="' + nb2(xG - largeur / 2 - 12) + '" y1="' + nb2(y0) + '" x2="' + nb2(xD + largeur / 2 + 12) + '" y2="' + nb2(y0) + '"></line>');
  // La fleche de transformation, entre les deux piles.
  const xm = (xG + xD) / 2;
  t.push('<line class="curve-main" x1="' + nb2(xm - 19) + '" y1="' + nb2(y0 - hMax / 2) + '" x2="' + nb2(xm + 19) + '" y2="' + nb2(y0 - hMax / 2) + '" marker-end="url(#f)"></line>');
  t.push('<text class="tick-label" x="' + nb2(xm) + '" y="' + nb2(y0 - hMax / 2 + 15) + '" text-anchor="middle">transformation</text>');
  t.push('<text class="annotation-label" x="' + nb2(xG) + '" y="' + nb2(y0 + 18) + '" text-anchor="middle">réactifs</text>');
  t.push('<text class="annotation-label" x="' + nb2(xD) + '" y="' + nb2(y0 + 18) + '" text-anchor="middle">produits</text>');

  return svgFigure('Bilan de masse d une transformation chimique : reactifs et produits', t.join(''));
}

/* --- Modele de l'atome / de l'ion --------------------------------------
   Noyau central portant sa charge, et les electrons en couronne. PAS a
   l'echelle, et pour une raison physique : le noyau est 100 000 fois plus
   petit que l'atome, un dessin a l'echelle serait une page blanche avec un
   point. C'est la convention de tous les manuels, et le cours le dit.

   Sert aux chapitres 4e atomes-molecules et 3e structure-atome. */
function figureAtome(nbProtons, nbElectrons, options) {
  const o = options || {};
  const nom = o.nom === undefined ? '' : o.nom;

  /* BUDGET VERTICAL : le nom de l'element en tete (y=16), la couronne au
     centre, le compte d'electrons sous la couronne, la mention d'echelle en
     pied (y=166). Trois bandes qui ne se rencontrent jamais — le premier jet
     posait le nom et la mention tous deux en haut, et ils se superposaient. */
  const cx = FIG_L / 2, cy = FIG_H / 2 + 2;
  const rNoyau = 18, rCouronne = 50;

  const t = [];
  // La couronne : le trait en pointilles porte l'idee d'un nuage, pas d'une
  // orbite solide.
  t.push('<circle class="guide-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(rCouronne) + '" fill="none"></circle>');
  t.push('<circle class="frame-line" cx="' + nb2(cx) + '" cy="' + nb2(cy) + '" r="' + nb2(rNoyau) + '" fill="' + APLAT + '"></circle>');

  // Le noyau porte sa charge, qui est la donnee du chapitre.
  t.push('<text class="annotation-label" x="' + nb2(cx) + '" y="' + nb2(cy + 4.5) + '" text-anchor="middle">' +
    (nbProtons === null ? '?' : '+' + nbProtons) + '</text>');

  /* Les electrons, repartis regulierement sur la couronne. Au-dela de dix on
     ne les dessine plus un par un : on porte leur nombre — dix-huit pastilles
     a 52 mm de large sont illisibles et ne s'y comptent pas. */
  const n = nbElectrons === null ? 0 : nbElectrons;
  if (n > 0 && n <= 10) {
    for (let i = 0; i < n; i++) {
      const a = (2 * Math.PI * i) / n - Math.PI / 2;
      t.push('<circle class="plot-point" cx="' + nb2(cx + rCouronne * Math.cos(a)) + '" cy="' + nb2(cy + rCouronne * Math.sin(a)) + '" r="3.4"></circle>');
    }
  }
  t.push('<text class="tick-label" x="' + nb2(cx) + '" y="' + nb2(cy + rCouronne + 19) + '" text-anchor="middle">' +
    (nbElectrons === null ? 'électrons : ?' : n + ' électron' + (n > 1 ? 's' : '')) + '</text>');
  if (nom) {
    t.push('<text class="annotation-label" x="' + nb2(cx) + '" y="' + nb2(16) + '" text-anchor="middle">' + nom + '</text>');
  }
  t.push('<text class="label-soft" x="' + nb2(FIG_L / 2) + '" y="' + nb2(FIG_H - 4) + '" text-anchor="middle">figure non à l\'échelle</text>');

  return svgFigure('Modele de l atome : noyau charge et electrons en couronne', t.join(''));
}

/* --- Gravitation : deux corps et leur attraction -----------------------
   Deux astres, la distance qui les separe et les deux forces d'attraction,
   egales et opposees. PAS a l'echelle sur les rayons (la Terre et la Lune
   dans un carre de 52 mm), mais les DEUX FLECHES sont de meme longueur,
   parce que les deux forces ont la meme valeur — c'est le point du chapitre,
   et le dessin ne doit pas le contredire.

   Sert au chapitre 3e gravitation. */
function figureGravitation(options) {
  const o = options || {};
  const nomA = o.nomA === undefined ? 'A' : o.nomA;
  const nomB = o.nomB === undefined ? 'B' : o.nomB;

  const y = FIG_H / 2 - 4;
  const xA = 54, xB = 208;
  const rA = 20, rB = 13;

  const t = [];
  t.push('<circle class="frame-line" cx="' + nb2(xA) + '" cy="' + nb2(y) + '" r="' + nb2(rA) + '" fill="' + APLAT + '"></circle>');
  t.push('<circle class="frame-line" cx="' + nb2(xB) + '" cy="' + nb2(y) + '" r="' + nb2(rB) + '" fill="' + APLAT + '"></circle>');
  t.push('<text class="annotation-label" x="' + nb2(xA) + '" y="' + nb2(y - rA - 12) + '" text-anchor="middle">' + nomA + '</text>');
  t.push('<text class="annotation-label" x="' + nb2(xB) + '" y="' + nb2(y - rB - 12) + '" text-anchor="middle">' + nomB + '</text>');

  // Les deux forces, de MEME longueur et opposees : l'attraction est
  // reciproque, et c'est l'erreur la plus courante du chapitre de croire que
  // le gros astre « tire plus fort ».
  const l = 34;
  t.push('<line class="curve-main" x1="' + nb2(xA + rA + 4) + '" y1="' + nb2(y) + '" x2="' + nb2(xA + rA + 4 + l) + '" y2="' + nb2(y) + '" marker-end="url(#f)"></line>');
  t.push('<line class="curve-main" x1="' + nb2(xB - rB - 4) + '" y1="' + nb2(y) + '" x2="' + nb2(xB - rB - 4 - l) + '" y2="' + nb2(y) + '" marker-end="url(#f)"></line>');

  // La distance entre les CENTRES : c'est celle de la formule, et la
  // confondre avec la distance entre les surfaces est une erreur classique.
  const yd = y + 44;
  t.push('<line class="guide-line" x1="' + nb2(xA) + '" y1="' + nb2(y) + '" x2="' + nb2(xA) + '" y2="' + nb2(yd + 8) + '"></line>');
  t.push('<line class="guide-line" x1="' + nb2(xB) + '" y1="' + nb2(y) + '" x2="' + nb2(xB) + '" y2="' + nb2(yd + 8) + '"></line>');
  t.push('<line class="axis" x1="' + nb2(xA) + '" y1="' + nb2(yd) + '" x2="' + nb2(xB) + '" y2="' + nb2(yd) + '"></line>');
  t.push('<text class="annotation-label" x="' + nb2((xA + xB) / 2) + '" y="' + nb2(yd + 17) + '" text-anchor="middle">' +
    cotePhys('d', o.d === undefined ? null : o.d, o.unite === undefined ? 'm' : o.unite) + '</text>');
  t.push('<text class="tick-label" x="' + nb2((xA + xB) / 2) + '" y="' + nb2(yd + 33) + '" text-anchor="middle">forces égales et opposées</text>');
  t.push('<text class="label-soft" x="' + nb2(8) + '" y="' + nb2(14) + '" text-anchor="start">figure non à l\'échelle</text>');

  return svgFigure('Deux corps en attraction gravitationnelle, distance entre leurs centres', t.join(''));
}

/* --- Ombre portee au sol (lampadaire et poteau) ------------------------
   Une source en hauteur (lampadaire, projecteur) eclaire un poteau vertical
   pose au sol ; le rayon qui rase le sommet du poteau touche le sol au bout
   de l'ombre. A L'ECHELLE : la figure est la CONFIGURATION du probleme, et
   c'est sur elle que se lisent les deux triangles semblables dont l'enonce
   demande la proportionnalite.

   Cette figure est distincte de figureOmbre() (objet entre une source et un
   ecran vertical) : la geometrie n'est pas la meme, et reutiliser l'une pour
   l'autre ferait mentir le dessin. Sert au chapitre 4e lumiere. */
function figureOmbreSol(H, h, d, options) {
  const o = options || {};
  const unite = o.unite === undefined ? 'm' : o.unite;

  // Longueur de l'ombre, par les triangles semblables : H/(d+x) = h/x.
  const xOmbre = h * d / (H - h);
  /* PLAFONNEMENT DE LA LARGEUR (corrige le 2026-09-16 apres controle sur
     figures tirees du livre). x = h*d/(H-h) explose quand la hauteur du
     poteau approche celle du lampadaire : un poteau de 5,5 m sous un
     lampadaire de 8 m donne une ombre de 13,2 m pour d = 6 m, et le dessin
     sortait du viewBox par la droite. On borne donc la largeur representee,
     comme le font les figures de maths (voir borner()), et la figure DECLARE
     qu'elle n'est plus a l'echelle — ce que la convention des manuels exige
     de tout dessin sur lequel on ne peut pas mesurer. */
  const largeurVraie = d + xOmbre;
  const comprime = largeurVraie / H > 5;
  const largeurReelle = comprime ? H * 5 : largeurVraie;

  /* Echelle commune aux deux directions, comme toute figure a l'echelle. La
     largeur reservee garde 42 unites a droite pour l'etiquette « x = ? », et
     la hauteur exclut les bandes de cotes du haut et du bas. */
  const e = Math.min((FIG_L - 96) / largeurReelle, (FIG_H - 56) / H);

  const xS = 40;                          // le pied du lampadaire
  const ySol = FIG_H - 34;                // le sol
  const xP = xS + d * e;                  // le poteau
  const xF = xS + largeurReelle * e;      // le bout de l'ombre (borne)
  const ySom = ySol - H * e;              // le sommet du lampadaire
  const yPot = ySol - h * e;              // le sommet du poteau

  const t = [];
  // Le sol.
  t.push('<line class="axis" x1="' + nb2(xS - 14) + '" y1="' + nb2(ySol) + '" x2="' + nb2(FIG_L - 10) + '" y2="' + nb2(ySol) + '"></line>');
  // Le lampadaire : son mat et sa lampe.
  t.push('<line class="frame-line" x1="' + nb2(xS) + '" y1="' + nb2(ySol) + '" x2="' + nb2(xS) + '" y2="' + nb2(ySom) + '"></line>');
  t.push('<circle class="plot-point" cx="' + nb2(xS) + '" cy="' + nb2(ySom) + '" r="3.5"></circle>');
  // Le poteau.
  t.push('<line class="frame-line" x1="' + nb2(xP) + '" y1="' + nb2(ySol) + '" x2="' + nb2(xP) + '" y2="' + nb2(yPot) + '"></line>');
  /* Le rayon qui rase le sommet du poteau et touche le sol : c'est LE trait
     qui porte le raisonnement, d'ou la classe d'accent. */
  t.push('<line class="curve-main" x1="' + nb2(xS) + '" y1="' + nb2(ySom) + '" x2="' + nb2(xF) + '" y2="' + nb2(ySol) + '" marker-end="url(#f)"></line>');
  // L'ombre au sol, en aplat : la grandeur cherchee.
  t.push('<rect x="' + nb2(xP) + '" y="' + nb2(ySol) + '" width="' + nb2(xF - xP) + '" height="6" fill="' + APLAT + '" stroke="none"></rect>');

  // Les trois hauteurs et longueurs, cotees sans se croiser.
  t.push('<text class="annotation-label" x="' + nb2(xS - 6) + '" y="' + nb2((ySol + ySom) / 2) + '" text-anchor="end">' + cotePhys('H', H, unite) + '</text>');
  /* La cote du poteau A DROITE de son mat, et non a gauche (corrige le
     2026-09-16 sur figures tirees du livre) : posee a gauche, elle percutait
     la cote du lampadaire des que le poteau etait haut et proche — un poteau
     de 5,5 m a 6 m d'un lampadaire de 8 m les superposait. A droite, elle est
     dans le triangle d'ombre, ou rien d'autre n'est ecrit. */
  t.push('<text class="annotation-label" x="' + nb2(xP + 6) + '" y="' + nb2((ySol + yPot) / 2 + 4) + '" text-anchor="start">' + cotePhys('h', h, unite) + '</text>');
  // d : du pied du lampadaire au pied du poteau, cote sous le sol.
  const yc = ySol + 16;
  t.push('<line class="axis" x1="' + nb2(xS) + '" y1="' + nb2(yc) + '" x2="' + nb2(xP) + '" y2="' + nb2(yc) + '"></line>');
  t.push('<text class="tick-label" x="' + nb2((xS + xP) / 2) + '" y="' + nb2(yc + 13) + '" text-anchor="middle">' + cotePhys('d', d, unite) + '</text>');
  // x : l'ombre, du pied du poteau au bout de l'ombre.
  t.push('<line class="axis" x1="' + nb2(xP) + '" y1="' + nb2(yc) + '" x2="' + nb2(xF) + '" y2="' + nb2(yc) + '"></line>');
  t.push('<text class="annotation-label" x="' + nb2((xP + xF) / 2) + '" y="' + nb2(yc + 13) + '" text-anchor="middle">x = ?</text>');
  if (comprime) t.push(figureHorsEchelle(FIG_L / 2, 12));

  return svgFigure('Lampadaire eclairant un poteau : ombre portee au sol', t.join(''));
}
