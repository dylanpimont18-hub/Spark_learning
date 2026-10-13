/* =========================================================
   Spark Learning – data/lycee-2nde/fonctions-affines.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'fonctions-affines',
    level: 2, subject: 'maths',
    icon: '📈',
    title: 'Fonctions Affines et Linéaires',
    subtitle: 'Droite y = ax + b, pente, modélisation',
    keywords: ['Droite', 'Pente', 'Coefficient directeur', 'Modélisation'],
    physics: 'Loi de Beer-Lambert, gaz parfaits, étalonnage',

    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Une fonction affine f(x) = ax + b
         est représentée par une droite » : une définition, donc l'entrée que
         le cahier des charges proscrit.

         PROBLÈME PROPRE À CE CHAPITRE : la fonction affine est connue depuis
         la troisième, donc presque toute situation concrète se traite SANS
         la notion — ce qui ferait échouer le test d'ouverture. On n'ouvre
         donc pas sur « à quoi ça sert » mais sur une COMPARAISON que l'élève
         ne sait pas trancher : deux tarifs dont aucun n'est meilleur que
         l'autre dans l'absolu. La question « lequel choisir ? » n'a pas de
         réponse tant qu'on n'a pas compris que c'est la PENTE qui décide au
         loin et l'ORDONNÉE À L'ORIGINE près de zéro.

         C'est aussi le glissement de regard que la seconde exige : on cesse
         de tracer des droites pour comparer des fonctions. */
      intro: 'Deux salles d\'escalade dans ta ville. La première demande $9$ € par séance, sans rien d\'autre. La seconde fait payer $60$ € d\'adhésion à l\'année, puis $3$ € seulement par séance.<br/><br/>' +
        'Laquelle choisir ?<br/><br/>' +
        'La question n\'a pas de réponse tant qu\'on ne sait pas combien de fois tu comptes y aller. Pour <strong>trois</strong> séances, la première revient à $27$ € et la seconde à $69$ € : la première gagne largement. Pour <strong>trente</strong> séances, la première demande $270$ € et la seconde $150$ € : le classement s\'est inversé.<br/><br/>' +
        'Il existe donc un nombre de séances où les deux se valent exactement, et c\'est lui qui décide. Le trouver de tête est pénible ; le trouver une fois pour toutes, en écrivant chaque tarif comme une <strong>fonction affine</strong> $f(x) = ax + b$, prend deux lignes.<br/><br/>' +
        'Dans cette écriture, chacun des deux nombres a un rôle que tu peux lire directement. Le coefficient $a$, la <strong>pente</strong>, dit de combien la dépense monte à chaque séance supplémentaire : c\'est lui qui l\'emporte quand $x$ devient grand. Le nombre $b$, l\'<strong>ordonnée à l\'origine</strong>, dit ce que tu paies avant même la première séance : c\'est lui qui pèse au début.<br/><br/>' +
        'Tu connais déjà ces droites depuis la troisième. Ce que la seconde ajoute, c\'est qu\'on cesse de les tracer pour les <strong>comparer</strong> : savoir laquelle finira par passer devant l\'autre, et à partir de quand.',
      definitions: [
        { term: 'Fonction affine', def: 'Fonction de la forme $f(x) = ax + b$ dont la représentation graphique est une droite.' },
        { term: 'Coefficient directeur', def: 'Le nombre $a$ dans $y = ax + b$. Il mesure la variation de $y$ quand $x$ augmente de $1$ : $a = \\dfrac{\\Delta y}{\\Delta x}$.' },
        { term: 'Ordonnée à l\'origine', def: 'Le nombre $b$ dans $y = ax + b$. C\'est la valeur de $y$ quand $x = 0$, soit le point $(0 ; b)$ sur l\'axe des ordonnées.' },
        { term: 'Fonction linéaire', def: 'Cas particulier $f(x) = ax$ ($b = 0$). La droite passe par l\'origine : il y a proportionnalité entre $x$ et $y$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la forme : $y = ax + b$ (affine) ou $y = ax$ (linéaire, passe par l\'origine). La pente $a$ est le "coefficient directeur". <strong>Exemple :</strong> $y = 3x - 2$ est affine ($a = 3$, $b = -2$) ; $y = 5x$ est linéaire ($a = 5$, $b = 0$).',
          'Calculer la pente à partir de deux points $(x_1, y_1)$ et $(x_2, y_2)$ : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$. <strong>Exemple :</strong> $A(1 ; 4)$ et $B(3 ; 10)$ → $a = \\dfrac{10 - 4}{3 - 1} = \\dfrac{6}{2} = 3$.',
          'Déterminer $b$ (ordonnée à l\'origine) : $b = y_1 - a \\cdot x_1$. En physique, $b$ représente souvent une valeur initiale ou un biais de mesure. <strong>Exemple :</strong> Avec $a = 3$ et le point $(1 ; 4)$ : $b = 4 - 3 \\times 1 = 1$. Donc $y = 3x + 1$.'
        ]
      },
      example: {
        statement: 'Lors d\'un étalonnage en spectrophotométrie, on mesure $A = 0{,}25$ pour $c = 1{,}0 \\times 10^{-3}$ mol/L et $A = 0{,}75$ pour $c = 3{,}0 \\times 10^{-3}$ mol/L ($l = 1$ cm). Déterminer la relation $A = f(c)$.',
        steps: [
          'La loi de Beer-Lambert est linéaire ($A = \\varepsilon l c$, passe par l\'origine), donc $b = 0$.',
          'Calculer la pente : $\\varepsilon l = \\dfrac{A_2 - A_1}{c_2 - c_1} = \\dfrac{0{,}75 - 0{,}25}{3{,}0 \\times 10^{-3} - 1{,}0 \\times 10^{-3}} = \\dfrac{0{,}50}{2{,}0 \\times 10^{-3}} = 250$ L·mol⁻¹·cm⁻¹.',
          'Vérification : $A = 250 \\times 1{,}0 \\times 10^{-3} = 0{,}25$ ✓'
        ],
        answer: '$A = 250 \\cdot c$ avec $\\varepsilon l = 250$ L·mol⁻¹·cm⁻¹.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Pente et ordonnée à l\'origine',
        title: 'Tracer la droite $y = 3x + 1$ à partir de deux points',
        description: 'Reconstruction de l\'exemple du cours : $A(1 ; 4)$ et $B(3 ; 10)$ donnent le coefficient directeur $a = 3$, puis $b = 1$.',
        svg: `
          <svg viewBox="0 0 360 260" role="img" aria-labelledby="affine-diagram-title affine-diagram-desc">
            <title id="affine-diagram-title">Droite y = 3x + 1</title>
            <desc id="affine-diagram-desc">Repere avec la droite y = 3x + 1, passant par les points A(1;4) et B(3;10), le triangle de pente delta x = 2, delta y = 6, et le point (0;1) marquant l'ordonnee a l'origine.</desc>

            <line class="grid-line" x1="10" y1="220" x2="10" y2="60"></line>
            <line class="grid-line" x1="60" y1="220" x2="60" y2="60"></line>
            <line class="grid-line" x1="110" y1="220" x2="110" y2="60"></line>
            <line class="grid-line" x1="160" y1="220" x2="160" y2="60"></line>
            <line class="grid-line" x1="210" y1="220" x2="210" y2="60"></line>
            <line class="grid-line" x1="260" y1="220" x2="260" y2="60"></line>
            <line class="grid-line" x1="10" y1="220" x2="260" y2="220"></line>
            <line class="grid-line" x1="10" y1="188" x2="260" y2="188"></line>
            <line class="grid-line" x1="10" y1="156" x2="260" y2="156"></line>
            <line class="grid-line" x1="10" y1="124" x2="260" y2="124"></line>
            <line class="grid-line" x1="10" y1="92" x2="260" y2="92"></line>
            <line class="grid-line" x1="10" y1="60" x2="260" y2="60"></line>

            <line class="axis" x1="10" y1="220" x2="290" y2="220"></line>
            <line class="axis" x1="60" y1="236" x2="60" y2="20"></line>
            <text class="axis-label" x="294" y="224">x</text>
            <text class="axis-label" x="66" y="16">y</text>

            <text class="tick-label" x="10" y="234" text-anchor="middle">-1</text>
            <text class="tick-label" x="60" y="234" text-anchor="middle">0</text>
            <text class="tick-label" x="110" y="234" text-anchor="middle">1</text>
            <text class="tick-label" x="160" y="234" text-anchor="middle">2</text>
            <text class="tick-label" x="210" y="234" text-anchor="middle">3</text>
            <text class="tick-label" x="260" y="234" text-anchor="middle">4</text>

            <text class="tick-label" x="48" y="224" text-anchor="end">0</text>
            <text class="tick-label" x="48" y="192" text-anchor="end">2</text>
            <text class="tick-label" x="48" y="160" text-anchor="end">4</text>
            <text class="tick-label" x="48" y="128" text-anchor="end">6</text>
            <text class="tick-label" x="48" y="96" text-anchor="end">8</text>
            <text class="tick-label" x="48" y="64" text-anchor="end">10</text>

            <line class="guide-line" x1="110" y1="156" x2="210" y2="156"></line>
            <line class="guide-line" x1="210" y1="156" x2="210" y2="60"></line>
            <text class="annotation-label" x="160" y="172" text-anchor="middle">Δx = 2</text>
            <text class="annotation-label" x="216" y="112">Δy = 6</text>

            <line class="curve-main" x1="35" y1="228" x2="240" y2="31"></line>
            <text class="annotation-label" x="150" y="82">y = 3x + 1</text>

            <circle class="plot-point" cx="60" cy="204" r="4"></circle>
            <text class="annotation-label" x="66" y="200">(0 ; 1)</text>
            <circle class="plot-point" cx="110" cy="156" r="4"></circle>
            <text class="annotation-label" x="70" y="146">A(1 ; 4)</text>
            <circle class="plot-point" cx="210" cy="60" r="4"></circle>
            <text class="annotation-label" x="214" y="50">B(3 ; 10)</text>
          </svg>
        `,
        notes: [
          'Le point $(0 ; 1)$ marque l\'ordonnée à l\'origine $b = 1$ : c\'est là que la droite coupe l\'axe des $y$.',
          'Le triangle de pente relie $A(1 ; 4)$ à $B(3 ; 10)$ : $\\Delta x = 2$ et $\\Delta y = 6$, donc $a = \\Delta y / \\Delta x = 3$.',
          'Plus $a$ est grand, plus la droite est pentue : ici $a = 3$ signifie que $y$ augmente de $3$ à chaque fois que $x$ augmente de $1$.'
        ],
        reading: 'Repère la pente en comptant le déplacement horizontal ($\\Delta x$) puis vertical ($\\Delta y$) entre deux points de la droite ; leur rapport donne $a$.',
        caption: 'Droite $y = 3x + 1$, reconstruite à partir des points $A(1 ; 4)$ et $B(3 ; 10)$ de l\'exemple du cours.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Une figure par MALENTENDU (cahier des charges, section 9). Les trois
         retenus sont ceux que la fiche professeur de ce chapitre décrit :
           1. ne pas savoir ce que règle $a$ et ce que règle $b$ — on les
              sépare en faisant varier l'un pendant que l'autre est figé ;
           2. inverser numérateur et dénominateur de la pente — on pose le
              triangle avec ses deux cotes nommées, et on lit le sens ;
           3. croire que toute fonction affine est linéaire — on montre le
              test du doublement, qui réussit pour l'une et échoue pour
              l'autre.

         Toutes les droites sont tracées entre deux points CALCULÉS à partir
         de leur équation, et relues par
         scripts/manuel/tests/diagrams-2nde.test.js : les pentes en pixels y
         sont recalculées et comparées à la pente annoncée. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux réglages indépendants',
          title: 'Ce que règle a, ce que règle b',
          description: 'Les deux vignettes sont à la <strong>même échelle</strong> et couvrent le <strong>même intervalle</strong> : la seule différence visible est donc celle que la figure veut montrer.<br/><br/>À gauche, la pente $a$ est figée et seule $b$ change : les trois droites restent <strong>parallèles</strong>, elles ne font que glisser vers le haut ou vers le bas.<br/><br/>À droite, $b$ est figé et seule $a$ change : les trois droites <strong>pivotent</strong> autour du même point $(0\\,;\\,1)$.',
          svg: `
            <svg viewBox="0 0 340 200" role="img" aria-labelledby="fa2-roles-title fa2-roles-desc">
              <title id="fa2-roles-title">Le role separe de la pente et de l ordonnee a l origine</title>
              <desc id="fa2-roles-desc">Deux reperes de meme taille et de meme echelle sont places cote a cote. Dans celui de gauche, trois droites de meme inclinaison sont dessinees a des hauteurs differentes : elles sont paralleles entre elles et coupent l'axe vertical en trois endroits distincts. Dans celui de droite, trois droites d'inclinaisons differentes passent toutes par un meme point de l'axe vertical : elles pivotent autour de ce point.</desc>

              <!-- Echelle IDENTIQUE dans les deux vignettes : 20 unites de
                   viewBox par unite d'abscisse, 16 par unite d'ordonnee.
                   Origines (78 ; 104) a gauche et (250 ; 104) a droite. Les
                   six droites sont tracees sur le MEME intervalle, de x = -2
                   a x = 2, pour qu'aucune difference de longueur ne se lise
                   comme faisant partie de la demonstration (patron
                   « comparaison » du cahier des charges). -->

              <!-- ===== Vignette de gauche : a fige, b varie ===== -->
              <text class="annotation-label" x="78" y="18" text-anchor="middle">même pente a</text>
              <line class="grid-line" x1="38" y1="30" x2="38" y2="178"></line>
              <line class="grid-line" x1="118" y1="30" x2="118" y2="178"></line>
              <line class="grid-line" x1="34" y1="40" x2="122" y2="40"></line>
              <line class="grid-line" x1="34" y1="168" x2="122" y2="168"></line>
              <line class="axis" x1="30" y1="104" x2="126" y2="104"></line>
              <line class="axis" x1="78" y1="182" x2="78" y2="28"></line>

              <!-- y = x + 2, y = x, y = x - 2 : pentes en pixels toutes
                   egales a -0,8 (soit +1 en coordonnees de repere). -->
              <line class="curve-main" x1="38" y1="104" x2="118" y2="40"></line>
              <line class="curve-main" x1="38" y1="136" x2="118" y2="72"></line>
              <line class="curve-main" x1="38" y1="168" x2="118" y2="104"></line>

              <circle class="plot-point" cx="78" cy="72" r="3"></circle>
              <circle class="plot-point" cx="78" cy="104" r="3"></circle>
              <circle class="plot-point" cx="78" cy="136" r="3"></circle>
              <text class="tick-label" x="72" y="68" text-anchor="end">b = 2</text>
              <text class="tick-label" x="72" y="100" text-anchor="end">b = 0</text>
              <text class="tick-label" x="72" y="132" text-anchor="end">b = -2</text>
              <text class="label-soft" x="78" y="194" text-anchor="middle">b déplace la droite</text>

              <!-- ===== Vignette de droite : b fige, a varie ===== -->
              <text class="annotation-label" x="250" y="18" text-anchor="middle">même ordonnée b</text>
              <line class="grid-line" x1="210" y1="30" x2="210" y2="178"></line>
              <line class="grid-line" x1="290" y1="30" x2="290" y2="178"></line>
              <line class="grid-line" x1="206" y1="40" x2="294" y2="40"></line>
              <line class="grid-line" x1="206" y1="168" x2="294" y2="168"></line>
              <line class="axis" x1="202" y1="104" x2="298" y2="104"></line>
              <line class="axis" x1="250" y1="182" x2="250" y2="28"></line>

              <!-- y = 2x + 1, y = 0,5x + 1, y = -x + 1 : pentes en pixels
                   -1,6 ; -0,4 ; +0,8. Les trois passent par (250 ; 88). -->
              <line class="curve-main" x1="210" y1="152" x2="290" y2="24"></line>
              <line class="curve-main" x1="210" y1="104" x2="290" y2="72"></line>
              <line class="curve-main" x1="210" y1="56" x2="290" y2="120"></line>

              <circle class="plot-point" cx="250" cy="88" r="4"></circle>
              <text class="tick-label" x="244" y="98" text-anchor="end">b = 1</text>
              <text class="label-soft" x="250" y="194" text-anchor="middle">a incline la droite</text>
            </svg>
          `,
          notes: [
            'À gauche, les trois droites ont la même pente $a = 1$ : elles sont parallèles, et $b$ ne fait que choisir <strong>à quelle hauteur</strong> la droite coupe l\'axe des ordonnées.',
            'À droite, les trois droites ont la même ordonnée à l\'origine $b = 1$ : elles passent toutes par le même point, et $a$ choisit seulement <strong>l\'inclinaison</strong>.',
            'Autrement dit : $b$ te dit d\'où tu pars, $a$ te dit dans quelle direction tu avances. Les deux réglages ne se marchent jamais dessus.'
          ],
          reading: 'Repère le point marqué sur chaque vignette. À gauche, il y en a trois, à des hauteurs différentes, sur des droites qui ne se croisent jamais. À droite, il n\'y en a qu\'un, et les trois droites y passent toutes. Quand tu hésites sur ce que change un coefficient, refais mentalement cette double expérience.',
          caption: 'Deux vignettes à la même échelle : à gauche $a$ est figé et $b$ varie, à droite $b$ est figé et $a$ varie.'
        },
        {
          theme: 'maths',
          kicker: 'Le sens de la fraction',
          title: 'Le triangle de pente, dans le bon ordre',
          description: 'La pente se calcule avec $a = \\dfrac{\\Delta y}{\\Delta x}$, et l\'erreur la plus fréquente consiste à écrire la fraction à l\'envers.<br/><br/>Le triangle ci-dessous te donne le moyen de ne plus te tromper : la <strong>montée</strong> se lit verticalement, le <strong>déplacement</strong> se lit horizontalement, et la pente répond à la question « de combien je monte quand j\'avance de $1$ ». La montée est donc en haut de la fraction.',
          svg: `
            <svg viewBox="0 0 320 300" role="img" aria-labelledby="fa2-pente-title fa2-pente-desc">
              <title id="fa2-pente-title">Le triangle de pente et le sens de la fraction</title>
              <desc id="fa2-pente-desc">Une droite montante est tracee dans un repere. Deux de ses points sont marques : le premier a pour coordonnees un et un, le second trois et cinq. Un triangle rectangle relie ces deux points : son cote horizontal mesure deux unites vers la droite, son cote vertical mesure quatre unites vers le haut. Les deux cotes portent leur mesure, posee a l'exterieur du triangle. La pente vaut donc quatre divise par deux, c'est a dire deux.</desc>

              <!-- Echelle : 50 unites par unite d'abscisse, 26 par unite
                   d'ordonnee. Origine (70 ; 200). Le repere n'est pas
                   orthonorme, et la figure ne le pretend pas : on n'y lit
                   aucune longueur, seulement deux comptages de graduations.
                   A(1 ; 1) tombe en (120 ; 174) et B(3 ; 5) en (220 ; 70),
                   tous deux sur des intersections de graduations. -->
              <line class="grid-line" x1="20" y1="30" x2="20" y2="284"></line>
              <line class="grid-line" x1="120" y1="30" x2="120" y2="284"></line>
              <line class="grid-line" x1="170" y1="30" x2="170" y2="284"></line>
              <line class="grid-line" x1="220" y1="30" x2="220" y2="284"></line>
              <line class="grid-line" x1="270" y1="30" x2="270" y2="284"></line>
              <line class="grid-line" x1="16" y1="278" x2="286" y2="278"></line>
              <line class="grid-line" x1="16" y1="226" x2="286" y2="226"></line>
              <line class="grid-line" x1="16" y1="174" x2="286" y2="174"></line>
              <line class="grid-line" x1="16" y1="122" x2="286" y2="122"></line>
              <line class="grid-line" x1="16" y1="70" x2="286" y2="70"></line>

              <line class="axis" x1="16" y1="200" x2="292" y2="200"></line>
              <line class="axis" x1="70" y1="288" x2="70" y2="28"></line>
              <text class="axis-label" x="296" y="204">x</text>
              <text class="axis-label" x="75" y="26">y</text>

              <text class="tick-label" x="62" y="212" text-anchor="end">0</text>
              <text class="tick-label" x="120" y="212" text-anchor="middle">1</text>
              <text class="tick-label" x="220" y="212" text-anchor="middle">3</text>
              <text class="tick-label" x="64" y="178" text-anchor="end">1</text>
              <text class="tick-label" x="64" y="74" text-anchor="end">5</text>

              <!-- Droite y = 2x - 1, tracee entre deux points calcules :
                   x = -1 donne y = -3 (soit 20 ; 278) et x = 4 donne y = 7
                   (soit 270 ; 18). Pente en pixels : -260 / 250 = -1,04,
                   ce qui vaut bien +2 en coordonnees de repere. -->
              <line class="curve-main" x1="20" y1="278" x2="270" y2="18"></line>

              <!-- Les deux cotes du triangle. Le cote horizontal est pose SUR
                   la graduation y = 1, le cote vertical sur la graduation
                   x = 3 : le triangle s'appuie donc sur le quadrillage, et
                   l'eleve peut recompter lui-meme. -->
              <line class="guide-line" x1="120" y1="174" x2="220" y2="174"></line>
              <line class="guide-line" x1="220" y1="174" x2="220" y2="70"></line>

              <circle class="plot-point" cx="120" cy="174" r="4"></circle>
              <circle class="plot-point" cx="220" cy="70" r="4"></circle>
              <text class="tick-label" x="112" y="168" text-anchor="end">A(1 ; 1)</text>
              <text class="tick-label" x="228" y="64" text-anchor="start">B(3 ; 5)</text>

              <!-- Les cotes sont posees HORS du triangle : la mesure
                   horizontale sous son cote, la mesure verticale a droite du
                   sien. Jamais sur un trait. -->
              <text class="annotation-label" x="170" y="192" text-anchor="middle">on avance de 2</text>
              <text class="annotation-label" x="230" y="122" text-anchor="start">on monte de 4</text>

              <text class="label-soft" x="160" y="262" text-anchor="middle">pente = ce qu'on monte divisé par ce qu'on avance</text>
              <text class="label-soft" x="160" y="280" text-anchor="middle">soit 4 divisé par 2, donc 2</text>
            </svg>
          `,
          notes: [
            'Le côté horizontal vaut $\\Delta x = 3 - 1 = 2$ et le côté vertical $\\Delta y = 5 - 1 = 4$.',
            'La pente vaut donc $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{4}{2} = 2$ : quand tu avances de $1$, tu montes de $2$.',
            'Le contrôle qui te sauve : si tu avais écrit $\\dfrac{2}{4} = 0{,}5$, la droite serait presque plate. Or elle est visiblement raide. Un coup d\'œil suffit à écarter la fraction inversée.'
          ],
          reading: 'Relis la définition en français avant de poser la moindre fraction : « de combien je monte quand j\'avance de $1$ ». La montée est ce qu\'on cherche, elle passe donc au numérateur ; le déplacement est ce par quoi on divise, il passe au dénominateur. Cette phrase te suffit, tu n\'as pas à retenir la formule.',
          caption: 'Triangle de pente sur $y = 2x - 1$ entre $A(1\\,;\\,1)$ et $B(3\\,;\\,5)$ : $\\Delta x = 2$, $\\Delta y = 4$, donc $a = 2$.'
        },
        {
          theme: 'maths',
          kicker: 'Affine ou linéaire ?',
          title: 'Le test du doublement, réussi puis raté',
          description: 'Une fonction linéaire vérifie une propriété très pratique : si tu doubles $x$, tu doubles $f(x)$. Beaucoup d\'élèves l\'appliquent à <strong>toutes</strong> les fonctions affines, et se trompent.<br/><br/>Les deux droites ci-dessous ont la <strong>même pente</strong> $2$. Seule celle qui passe par l\'origine réussit le test.',
          svg: `
            <svg viewBox="0 0 320 240" role="img" aria-labelledby="fa2-lineaire-title fa2-lineaire-desc">
              <title id="fa2-lineaire-title">Une fonction lineaire et une fonction affine de meme pente</title>
              <desc id="fa2-lineaire-desc">Deux droites de meme inclinaison sont tracees dans un repere. La premiere part de l'origine du repere : quand on passe de l'abscisse un a l'abscisse deux, son ordonnee passe de deux a quatre, elle double. La seconde coupe l'axe vertical a l'ordonnee trois : quand on passe de l'abscisse un a l'abscisse deux, son ordonnee passe de cinq a sept, elle ne double pas.</desc>

              <!-- Echelle : 56 unites par unite d'abscisse, 16 par unite
                   d'ordonnee. Origine (56 ; 210). Les deux droites sont
                   tracees sur le MEME intervalle, de x = 0 a x = 4, et ont la
                   MEME pente en pixels : -128 / 224 = -0,571..., soit +2 en
                   coordonnees de repere. -->
              <line class="grid-line" x1="112" y1="24" x2="112" y2="222"></line>
              <line class="grid-line" x1="168" y1="24" x2="168" y2="222"></line>
              <line class="grid-line" x1="224" y1="24" x2="224" y2="222"></line>
              <line class="grid-line" x1="280" y1="24" x2="280" y2="222"></line>
              <line class="grid-line" x1="48" y1="178" x2="296" y2="178"></line>
              <line class="grid-line" x1="48" y1="146" x2="296" y2="146"></line>
              <line class="grid-line" x1="48" y1="114" x2="296" y2="114"></line>
              <line class="grid-line" x1="48" y1="82" x2="296" y2="82"></line>
              <line class="grid-line" x1="48" y1="50" x2="296" y2="50"></line>

              <line class="axis" x1="48" y1="210" x2="302" y2="210"></line>
              <line class="axis" x1="56" y1="222" x2="56" y2="22"></line>
              <text class="axis-label" x="306" y="214">x</text>
              <text class="axis-label" x="61" y="20">y</text>

              <text class="tick-label" x="48" y="222" text-anchor="end">0</text>
              <text class="tick-label" x="112" y="222" text-anchor="middle">1</text>
              <text class="tick-label" x="168" y="222" text-anchor="middle">2</text>
              <text class="tick-label" x="48" y="182" text-anchor="end">2</text>
              <text class="tick-label" x="48" y="150" text-anchor="end">4</text>
              <text class="tick-label" x="48" y="134" text-anchor="end">5</text>
              <text class="tick-label" x="48" y="102" text-anchor="end">7</text>

              <!-- La lineaire y = 2x, de (0 ; 0) a (4 ; 8). Trait plein et
                   teinte d'accent : c'est le cas qui reussit, il se lit en
                   premier (patron « piege »). -->
              <line class="curve-main" x1="56" y1="210" x2="280" y2="82"></line>
              <!-- L'affine y = 2x + 3, de (0 ; 3) a (4 ; 11). Teinte faible :
                   c'est le cas ou le raisonnement echoue. -->
              <line class="guide-line" x1="56" y1="162" x2="280" y2="34"></line>

              <circle class="plot-point" cx="112" cy="178" r="4"></circle>
              <circle class="plot-point" cx="168" cy="146" r="4"></circle>
              <circle class="plot-point-alt" cx="112" cy="130" r="4"></circle>
              <circle class="plot-point-alt" cx="168" cy="98" r="4"></circle>

              <text class="tick-label" x="104" y="192" text-anchor="end">2</text>
              <text class="tick-label" x="176" y="158" text-anchor="start">4 : doublé</text>
              <text class="tick-label" x="104" y="126" text-anchor="end">5</text>
              <text class="tick-label" x="176" y="94" text-anchor="start">7 : pas doublé</text>

              <text class="annotation-label" x="288" y="78" text-anchor="end">y = 2x</text>
              <text class="label-soft" x="288" y="30" text-anchor="end">y = 2x + 3</text>
            </svg>
          `,
          notes: [
            'Pour $f(x) = 2x$ : $f(1) = 2$ et $f(2) = 4$. On double $x$, on double bien $f(x)$. La fonction est <strong>linéaire</strong>.',
            'Pour $g(x) = 2x + 3$ : $g(1) = 5$ et $g(2) = 7$. On double $x$, et pourtant $7$ n\'est pas le double de $5$. La fonction est affine mais <strong>pas linéaire</strong>.',
            'Le coupable est le $+3$ : il ne double pas quand $x$ double, il reste $3$. Seule une droite passant par l\'origine échappe à ce décalage.'
          ],
          reading: 'Regarde où chaque droite coupe l\'axe vertical. Celle qui le coupe en $0$ réussit le test ; celle qui le coupe ailleurs le rate. Tu tiens là un contrôle immédiat : <strong>linéaire</strong> veut dire $b = 0$, donc passage par l\'origine, et rien d\'autre.',
          caption: 'Deux droites de pente $2$ : $y = 2x$ est linéaire et réussit le test du doublement, $y = 2x + 3$ est affine et le rate.'
        }
      ],
      formulas: [
        '$y = ax + b$ (fonction affine)',
        '$a = \\dfrac{y_2 - y_1}{x_2 - x_1}$ (pente)',
        '$b = y - ax$ (ordonnée à l\'origine)',
        'Beer-Lambert : $A = \\varepsilon \\cdot l \\cdot c$ (droite passant par l\'origine)'
      ],
      recap: [
        'Une fonction affine $y = ax + b$ est représentée par une droite ; $a$ est la pente, $b$ l\'ordonnée à l\'origine.',
        'Si $b = 0$, la droite passe par l\'origine (proportionnalité directe / fonction linéaire).',
        'Deux points suffisent pour déterminer l\'équation d\'une droite : calculer $a$, puis $b$.',
        'En sciences, la pente a des unités physiques ($\\Delta y / \\Delta x$) qu\'il faut toujours interpréter.'
      ],
      piege: 'Ne pas confondre pente et valeur ! Sur un graphe A = f(c) (Beer-Lambert), la pente est $\\varepsilon l$ (coefficient d\'extinction × trajet optique). La concentration inconnue se lit en faisant $c = A / (\\varepsilon l)$, pas en lisant directement la pente.'
    },

    quiz: [
      {
        q: 'Un élève dit : « dans $y = -3x + 2$, la pente est $2$ car c\'est le terme qui varie avec $x$ ». Quelle est son erreur ?',
        options: [
          'La pente est le coefficient de $x$, ici $-3$. Le terme $2$ est l\'ordonnée à l\'origine (valeur quand $x = 0$)',
          'L\'élève a raison, la pente est $2$',
          'La pente est $-3/2$',
          'Il n\'y a pas de pente définie pour une fonction affine'
        ],
        answer: 0,
        correction: 'Dans $y = ax + b$, $a$ est toujours la pente (coefficient devant $x$). Ici $a = -3$ (pente négative → droite décroissante) et $b = 2$ (ordonnée à l\'origine, constante). Quand $x$ varie de $1$, $y$ varie de $-3$ — pas de $2$.'
      },
      {
        q: 'La droite passe par $(0 ; 4)$ et a une pente de $-2$. Son équation est :',
        options: ['$y = -2x$', '$y = 4x - 2$', '$y = -2x + 4$', '$y = 2x + 4$'],
        answer: 2,
        correction: 'La droite passe par $(0 ; 4)$ donc $b = 4$. La pente est $a = -2$. L\'équation est $y = -2x + 4$.'
      },
      {
        q: 'La loi de Beer-Lambert donne $A = 0{,}8$ pour $c = 4 \\times 10^{-3}$ mol/L et $l = 1$ cm. Quelle est la valeur de $\\varepsilon$ ?',
        options: [
          '$\\varepsilon = 200$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 3200$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 0{,}2$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 800$ L·mol⁻¹·cm⁻¹'
        ],
        answer: 0,
        correction: '$A = \\varepsilon l c \\Rightarrow \\varepsilon = \\frac{A}{lc} = \\frac{0{,}8}{1 \\times 4 \\times 10^{-3}} = \\frac{0{,}8}{0{,}004} = 200$ L·mol⁻¹·cm⁻¹.'
      },
      {
        q: 'La température d\'un four suit la loi $T(t) = 15t + 20$ ($T$ en °C, $t$ en min). Un élève dit « après $10$ min, la température a augmenté de $20$°C ». A-t-il raison ?',
        options: [
          'Non : en $10$ min, $T$ augmente de $15 \\times 10 = 150$°C. Le $20$ est la température initiale, pas la hausse',
          'Oui : $T(10) = 20$ car $b = 20$',
          'Non : l\'augmentation est de $15$°C seulement',
          'Oui : la pente est $20$'
        ],
        answer: 0,
        correction: 'La pente est $a = 15$ : la température augmente de $15$°C par minute. En $10$ min, l\'augmentation est $15 \\times 10 = 150$°C. Le terme $b = 20$ est la température initiale ($t = 0$), pas une variation. Attention à ne pas confondre pente et ordonnée à l\'origine !'
      },
      {
        q: 'Deux droites ont pour équations $y = 2x + 3$ et $y = -0{,}5x + 3$. Elles passent par le même point. Lequel ?',
        options: [
          '$(0 ; 3)$ — même ordonnée à l\'origine',
          '$(3 ; 0)$ — même abscisse à l\'origine',
          '$(1 ; 5)$',
          'Elles ne se croisent pas car $b_1 = b_2$'
        ],
        answer: 0,
        correction: 'Les deux droites ont la même ordonnée à l\'origine $b = 3$, donc elles passent toutes les deux par $(0 ; 3)$. Des pentes différentes ($2 \\neq -0{,}5$) garantissent qu\'elles ne sont pas parallèles et se croisent bien en ce point. Attention : même $b$ ne veut pas dire parallèles !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        /* DEUX DÉFAUTS CORRIGÉS le 2026-09-13, révélés en relisant un tirage
           réel de la banque (le défaut existait, il était invisible) :

           1. « Le prix d'un trajet en taxi est modélisé par. On mesure... » —
              cette amorce appelait un complément qui ne venait jamais, la
              phrase se refermant sur un point. Même faute pour « varie selon ».
              Les quatre amorces sont désormais des phrases complètes.

           2. Un coefficient directeur négatif faisait descendre la grandeur
              sous zéro : la banque imprimait un trajet en taxi à $-2$ € et un
              réservoir contenant $1$ L après en avoir contenu $9$. Les
              contextes qui ne peuvent PAS décroître (un prix au kilomètre, un
              réservoir qui se remplit) reçoivent maintenant une pente
              positive ; seuls la température et l'altitude, qui peuvent
              réellement baisser, acceptent une pente négative. Et dans tous
              les cas on vérifie que les deux valeurs mesurées restent
              positives. */
        const contexts = [
          { intro: 'Un réservoir se remplit d\'eau', xUnit: 'min', yUnit: 'L', xName: 't', yName: 'V', peutBaisser: false },
          { intro: 'La température d\'un liquide évolue au cours du temps', xUnit: 'min', yUnit: '°C', xName: 't', yName: 'T', peutBaisser: true },
          { intro: 'Le prix d\'un trajet en taxi dépend de la distance parcourue', xUnit: 'km', yUnit: '€', xName: 'd', yName: 'C', peutBaisser: false },
          { intro: 'L\'altitude d\'un randonneur varie au fil de sa marche', xUnit: 'km', yUnit: 'm', xName: 'x', yName: 'h', peutBaisser: true }
        ];
        /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

           MESURE DE DÉPART, la plus mauvaise de tout l'ouvrage : UNE SEULE
           tâche distincte. Les quatre habillages (réservoir, température,
           taxi, randonneur) faisaient croire à de la variété, mais la
           question posée était toujours la même — « deux points, trouve b ».
           Un élève qui faisait douze exercices de ce chapitre faisait douze
           fois le même.

           TROISIÈME DÉFAUT corrigé ce jour, sur le même tirage réel : le
           corrigé écrivait $\dfrac{6 - (10)}{3 - 1}$, avec une parenthèse
           autour d'un nombre POSITIF, et produisait « $- -$ » quand la valeur
           était négative. On passe par une fonction d'écriture signée, comme
           dans 2nde-equations-inequations.js.

           On passe à SEPT tâches. Les six nouvelles couvrent ce que le
           chapitre exige réellement : lire une pente, décider d'un sens de
           variation, tester une appartenance, distinguer linéaire et affine,
           résoudre f(x) = k, et comparer deux tarifs. */

        /* Écriture d'un nombre à placer après un signe d'opération.

           `signe(0)` renvoie la chaîne VIDE : sans cela l'énoncé imprimait
           « $f(x) = -4x + 0$ », défaut trouvé le 2026-09-13 en relisant le
           tirage réel et non le code. Les appelants doivent donc tolérer un
           terme constant absent, ce qui est le cas partout ici. */
        const par = (n) => (n < 0 ? '(' + n + ')' : String(n));
        /* Le signe est precede de son propre espace, et rien n'est emis pour
           zero : les appelants ecrivent donc `${a}x${signe(b)}` SANS espace
           avant, sinon un terme nul laisse « $-4x $ » avec une espace
           parasite avant le dollar fermant. */
        const signe = (n) => (n === 0 ? '' : (n < 0 ? ' - ' + Math.abs(n) : ' + ' + n));

        const tache = pick(['ordonneeOrigine', 'pente', 'image', 'antecedent',
                            'appartenance', 'sensVariation', 'comparaison']);

        /* 1. Tâche historique : deux mesures, retrouver l'ordonnée à
              l'origine. Conservée telle quelle, corrections de signe mises
              à part — elle reste la tâche de fond du chapitre. */
        if (tache === 'ordonneeOrigine') {
          const ctx = pick(contexts);
          const a = ctx.peutBaisser ? pick([2, 3, 4, 5, -2, -3]) : pick([2, 3, 4, 5]);
          const x1 = rand(1, 4);
          const x2 = x1 + rand(2, 5);
          /* L'ordonnée à l'origine est choisie APRÈS la pente, assez grande
             pour que les deux mesures restent positives même quand la
             grandeur décroît. */
          const b = a < 0 ? Math.abs(a) * x2 + rand(2, 14) : rand(5, 20);
          const y1 = a * x1 + b;
          const y2 = a * x2 + b;
          return {
            statement: `${ctx.intro}. On mesure $${ctx.yName}(${x1}) = ${y1}$ ${ctx.yUnit} et $${ctx.yName}(${x2}) = ${y2}$ ${ctx.yUnit}.<br/><br/><strong>1.</strong> Déterminer le coefficient directeur $a$.<br/><strong>2.</strong> En déduire l'ordonnée à l'origine $b$ et écrire l'équation $${ctx.yName} = a \\cdot ${ctx.xName} + b$.<br/><br/>Donne la valeur de $b$ (ordonnée à l'origine).`,
            answer: b,
            tolerance: 0,
            unit: ctx.yUnit,
            hint: `Calcule d'abord la pente : $a = \\dfrac{${y2} - ${par(y1)}}{${x2} - ${x1}} = \\dfrac{${y2 - y1}}{${x2 - x1}}$. Puis utilise $b = ${ctx.yName} - a \\cdot ${ctx.xName}$ avec l'un des deux points.`,
            solution: [
              `Ordonnée à l'origine à partir de deux mesures : $a = \\dfrac{${y2} - ${par(y1)}}{${x2} - ${x1}} = \\dfrac{${y2 - y1}}{${x2 - x1}} = ${a}$ ${ctx.yUnit}/${ctx.xUnit}`,
              `$b = ${ctx.yName}_1 - a \\cdot ${ctx.xName}_1 = ${y1} - ${par(a)} \\times ${x1} = ${b}$ ${ctx.yUnit}`,
              `Équation : $${ctx.yName} = ${a}${ctx.xName}${signe(b)}$`
            ]
          };
        }

        /* 2. Pente entre deux points d'un repère, sans habillage : c'est la
              lecture algébrique pure, et elle manquait. */
        if (tache === 'pente') {
          const x1 = rand(-5, 3);
          const x2 = x1 + rand(2, 6);
          const a = pick([-4, -3, -2, -1, 1, 2, 3, 4]);
          const b = rand(-6, 8);
          const y1 = a * x1 + b, y2 = a * x2 + b;
          return {
            statement: `Une droite passe par les points $A(${x1}\\,;\\,${y1})$ et $B(${x2}\\,;\\,${y2})$.<br/><br/>Calcule son <strong>coefficient directeur</strong> $a$.`,
            answer: a,
            tolerance: 0,
            unit: '',
            hint: `$a = \\dfrac{y_B - y_A}{x_B - x_A}$. Attention aux soustractions de nombres négatifs : écris les parenthèses.`,
            solution: [
              `Coefficient directeur entre deux points : $a = \\dfrac{y_B - y_A}{x_B - x_A}$`,
              `$a = \\dfrac{${y2} - ${par(y1)}}{${x2} - ${par(x1)}} = \\dfrac{${y2 - y1}}{${x2 - x1}} = ${a}$`,
              `La droite ${a > 0 ? 'monte' : 'descend'} : quand $x$ augmente de $1$, $y$ ${a > 0 ? 'augmente' : 'diminue'} de $${Math.abs(a)}$.`
            ]
          };
        }

        /* 3. Image : calculer f(x) pour un x donné. Tâche élémentaire, mais
              absente — or c'est elle qui sert partout ailleurs. */
        if (tache === 'image') {
          const a = pick([-5, -4, -3, -2, 2, 3, 4, 5]);
          const b = rand(-9, 12);
          const x = rand(-6, 7);
          return {
            statement: `Soit la fonction affine $f(x) = ${a}x${signe(b)}$.<br/><br/>Calcule $f(${x})$.`,
            answer: a * x + b,
            tolerance: 0,
            unit: '',
            hint: `Remplace $x$ par $${par(x)}$ dans l'expression, en gardant les parenthèses si le nombre est négatif.`,
            solution: [
              `Image par une fonction affine : $f(${x}) = ${a} \\times ${par(x)}${signe(b)}$`,
              `$f(${x}) = ${a * x}${signe(b)} = ${a * x + b}$`
            ]
          };
        }

        /* 4. Antécédent : résoudre f(x) = k. C'est la tâche réciproque de la
              précédente, et elle est au programme explicitement. */
        if (tache === 'antecedent') {
          const a = pick([-4, -3, -2, 2, 3, 4, 5]);
          const b = rand(-10, 12);
          const x = rand(-6, 7);
          const k = a * x + b;
          return {
            statement: `Soit la fonction affine $f(x) = ${a}x${signe(b)}$.<br/><br/>Détermine l'<strong>antécédent</strong> de $${k}$ par $f$, c'est-à-dire résous $f(x) = ${k}$.`,
            answer: x,
            tolerance: 0,
            unit: '',
            hint: `Écris l'équation $${a}x${signe(b)} = ${k}$, puis isole $x$ comme pour toute équation du premier degré.`,
            solution: [
              `Antécédent : je résous $${a}x${signe(b)} = ${k}$`,
              `${b < 0 ? 'J\'ajoute $' + Math.abs(b) + '$' : 'Je retire $' + b + '$'} aux deux membres : $${a}x = ${k - b}$`,
              `Je divise par $${a}$ : $x = ${x}$`,
              `Vérification : $f(${x}) = ${a} \\times ${par(x)}${signe(b)} = ${k}$ ✓`
            ]
          };
        }

        /* 5. Appartenance d'un point à une droite. Tâche de décision : la
              réponse est oui ou non, donc l'élève ne peut pas s'en tirer par
              un calcul automatique. */
        if (tache === 'appartenance') {
          const a = pick([-3, -2, 2, 3, 4]);
          const b = rand(-8, 10);
          const x = rand(-5, 6);
          const vrai = a * x + b;
          const appartient = pick([true, false]);
          const y = appartient ? vrai : vrai + pick([-3, -2, -1, 1, 2, 3]);
          return {
            statement: `On considère la droite d'équation $y = ${a}x${signe(b)}$ et le point $P(${x}\\,;\\,${y})$.<br/><br/>Le point $P$ appartient-il à cette droite ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: appartient ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Calcule l'ordonnée que la droite donne pour $x = ${par(x)}$, puis compare-la à $${y}$. Un point est sur la droite si et seulement si ses deux coordonnées vérifient l'équation.`,
            solution: [
              `Appartenance d'un point à une droite : je calcule l'ordonnée pour $x = ${par(x)}$`,
              `$${a} \\times ${par(x)}${signe(b)} = ${vrai}$`,
              appartient
                ? `On trouve $${vrai}$, qui est bien l'ordonnée de $P$ : le point <strong>appartient</strong> à la droite.`
                : `On trouve $${vrai}$, alors que l'ordonnée de $P$ vaut $${y}$ : le point <strong>n'appartient pas</strong> à la droite.`
            ]
          };
        }

        /* 6. Sens de variation à partir du signe de la pente, sans aucun
              calcul numérique. Tâche de raisonnement pur. */
        if (tache === 'sensVariation') {
          const fonctions = [
            { expr: '5x - 3', a: 5 }, { expr: '-2x + 7', a: -2 },
            { expr: '-x + 4', a: -1 }, { expr: '3x', a: 3 },
            { expr: '-4x - 1', a: -4 }, { expr: '0{,}5x + 2', a: 0.5 },
            { expr: '9 - 2x', a: -2 }, { expr: '6 + 3x', a: 3 }
          ];
          const f = pick(fonctions);
          const croissante = f.a > 0;
          return {
            statement: `Soit la fonction affine $f(x) = ${f.expr}$.<br/><br/>Sans faire aucun calcul de valeurs, dis si $f$ est <strong>croissante</strong> ou <strong>décroissante</strong> sur $\\mathbb{R}$.<br/><br/>Réponds par $1$ pour croissante, $0$ pour décroissante.`,
            answer: croissante ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Le sens de variation d'une fonction affine ne dépend que du <strong>signe du coefficient directeur</strong>. Repère-le, en faisant attention si l'expression est écrite dans l'autre ordre.`,
            solution: [
              `Sens de variation d'une fonction affine : seul le signe de $a$ compte`,
              `Ici $a = ${fr(f.a)}$, qui est ${croissante ? 'positif' : 'négatif'}.`,
              `La fonction est donc <strong>${croissante ? 'croissante' : 'décroissante'}</strong> sur $\\mathbb{R}$ : quand $x$ augmente, $f(x)$ ${croissante ? 'augmente' : 'diminue'}.`
            ]
          };
        }

        /* 7. Comparaison de deux tarifs affines : la tâche qui MODÉLISE, et
              qui donne au chapitre son utilité hors des mathématiques. */
        const offres = [
          { nom: 'un cinéma', u: 'places', o1: 'le tarif plein', o2: 'la carte d\'abonnement' },
          { nom: 'un service de streaming', u: 'films', o1: 'la location à l\'unité', o2: 'l\'abonnement mensuel' },
          { nom: 'un club de escalade', u: 'séances', o1: 'le ticket à l\'entrée', o2: 'la formule annuelle' }
        ];
        const o = pick(offres);
        const p1 = rand(5, 14);
        const p2 = rand(1, p1 - 2);
        const fixe = (p1 - p2) * rand(3, 11);
        const seuil = fixe / (p1 - p2);
        return {
          statement: `Pour $x$ ${o.u}, ${o.nom} propose deux formules :<br/><br/>avec ${o.o1}, on paie $f(x) = ${p1}x$ € ;<br/>avec ${o.o2}, on paie $g(x) = ${p2}x + ${fixe}$ €.<br/><br/><strong>1.</strong> Ces deux fonctions sont-elles affines ? linéaires ?<br/><strong>2.</strong> Détermine le nombre de ${o.u} pour lequel les deux formules coûtent exactement le même prix.<br/><br/>Donne ce nombre de ${o.u}.`,
          answer: seuil,
          tolerance: 0,
          unit: o.u,
          hint: `Les deux formules coûtent pareil quand $f(x) = g(x)$. Écris cette équation, puis résous-la.`,
          solution: [
            `Comparaison de deux fonctions affines : je résous $f(x) = g(x)$`,
            `$${p1}x = ${p2}x + ${fixe}$, donc $${p1 - p2}x = ${fixe}$ et $x = ${seuil}$ ${o.u}.`,
            `$f$ est <strong>linéaire</strong> (de la forme $ax$, sa droite passe par l'origine) ; $g$ est <strong>affine sans être linéaire</strong>, car son ordonnée à l'origine vaut $${fixe}$ et non $0$.`,
            `Au-delà de $${seuil}$ ${o.u}, ${o.o2} devient plus avantageuse.`
          ]
        };
      }
    },

    probleme: {
      context: 'En spectrophotométrie, la loi de Beer-Lambert relie l\'absorbance $A$ (sans unité) à la concentration $c$ (mol/L) d\'un soluté : $A = \\varepsilon \\cdot l \\cdot c$, où $l = 1$ cm est le trajet optique et $\\varepsilon$ est le coefficient d\'extinction molaire. On mesure les points d\'étalonnage suivants : $c = 0$ mol/L → $A = 0$ ; $c = 1{,}0 \\times 10^{-3}$ mol/L → $A = 0{,}25$ ; $c = 2{,}0 \\times 10^{-3}$ mol/L → $A = 0{,}50$ ; $c = 4{,}0 \\times 10^{-3}$ mol/L → $A = 1{,}00$.',
      schema: 'Graphe : axe x = concentration (0 à 4×10⁻³ mol/L), axe y = absorbance A (0 à 1,0). Les 4 points sont alignés sur une droite passant par l\'origine.',
      tasks: [
        'Tracer la droite d\'étalonnage et vérifier qu\'elle passe par l\'origine (linéarité).',
        'Calculer le coefficient directeur $\\varepsilon l$ de la droite à partir des données.',
        'Une solution inconnue donne $A = 0{,}75$. Déterminer sa concentration $c_{inconnue}$.'
      ],
      solutions: [
        'Les 4 points sont alignés et la droite passe par l\'origine ($A = 0$ quand $c = 0$) : la loi de Beer-Lambert est bien vérifiée.',
        'Pente $= \\varepsilon l = \\frac{A}{c} = \\frac{1{,}00}{4{,}0 \\times 10^{-3}} = 250$ L·mol⁻¹·cm⁻¹.',
        '$c = \\frac{A}{\\varepsilon l} = \\frac{0{,}75}{250} = 3{,}0 \\times 10^{-3}$ mol/L.'
      ],
      finalAnswer: '$c_{inconnue} = 3{,}0 \\times 10^{-3}$ mol/L'
    },

    evaluation: {
      title: 'Évaluation — Fonctions Affines et Linéaires',
      duration: '30 min',
      questions: [
        {
          statement: 'Une droite passe par les points $A(2 ; 5)$ et $B(6 ; 13)$. Calculer son coefficient directeur $a$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2$.'
        },
        {
          statement: 'Soit la droite $y = 3x - 7$. Calculer l\'ordonnée à l\'origine $b$.',
          type: 'numeric',
          answer: -7,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: 'Dans $y = ax + b$, l\'ordonnée à l\'origine est $b = -7$. C\'est la valeur de $y$ quand $x = 0$ : $y = 3 \\times 0 - 7 = -7$.'
        },
        {
          statement: 'La droite $d$ passe par $A(1 ; 4)$ avec une pente $a = -2$. Calculer $f(5)$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On détermine $b$ : $b = y_A - a \\cdot x_A = 4 - (-2) \\times 1 = 6$. Donc $f(x) = -2x + 6$. Ainsi $f(5) = -2 \\times 5 + 6 = -10 + 6 = -4$.'
        },
        {
          statement: 'Parmi ces fonctions, laquelle est linéaire (proportionnalité directe) ?',
          type: 'multiple-choice',
          options: ['$f(x) = 3x + 1$', '$g(x) = 5x$', '$h(x) = x^2$', '$k(x) = 2x - 2$'],
          answer: 1,
          points: 2,
          correction: 'Une fonction linéaire est de la forme $f(x) = ax$ (pas de terme constant $b$, et la courbe passe par l\'origine). Seule $g(x) = 5x$ vérifie cette condition. Les autres ont soit un terme constant ($f$, $k$), soit ne sont pas du premier degré ($h$).'
        },
        {
          statement: 'En spectrophotométrie, $A = \\varepsilon l c$. Si $\\varepsilon = 300$ L·mol⁻¹·cm⁻¹, $l = 1$ cm et $A = 1{,}5$, quelle est la concentration $c$ (en $10^{-3}$ mol/L) ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '× 10⁻³ mol/L',
          points: 3,
          correction: '$c = \\dfrac{A}{\\varepsilon l} = \\dfrac{1{,}5}{300 \\times 1} = 0{,}005$ mol/L $= 5 \\times 10^{-3}$ mol/L.'
        }
      ]
    }
  });
