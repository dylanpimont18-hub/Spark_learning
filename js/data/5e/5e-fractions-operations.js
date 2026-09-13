/* =========================================================
   Spark Learning – data/5e/5e-fractions-operations.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-fractions-operations',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Opérations sur les fractions',
    subtitle: 'Addition, soustraction, comparaison',
    keywords: ['Fraction', 'Dénominateur commun', 'Multiple commun', 'Comparer', 'Réduire'],
    physics: false,

    cours: {
      intro: 'Additionner des fractions nécessite un <strong>dénominateur commun</strong> pour la même raison qu\'on ne peut pas additionner des pommes et des oranges directement : $\\dfrac{1}{3} + \\dfrac{1}{4}$ ne vaut pas $\\dfrac{2}{7}$ !<br/><br/>' +
        'On cherche un <strong>multiple commun</strong> aux deux dénominateurs, puis on amplifie chaque fraction pour l’amener à ce dénominateur. Multiplier les deux dénominateurs entre eux marche toujours ; en listant leurs multiples on trouve souvent plus petit, ce qui évite d’avoir à simplifier à la fin.<br/><br/>' +
        'Pour la <strong>multiplication</strong>, c\'est plus simple : on multiplie directement numérateurs entre eux et dénominateurs entre eux, sans chercher de dénominateur commun. Pour la <strong>division</strong>, on multiplie par l\'inverse du diviseur.<br/><br/>' +
        'Partager une recette, cumuler des durées, additionner des parts de budget : dès qu’on réunit deux grandeurs découpées différemment, il faut savoir les ramener au même dénominateur.',
      definitions: [
        { term: 'Fraction', def: 'Nombre de la forme $\\dfrac{a}{b}$ avec $b \\neq 0$. $a$ est le numérateur, $b$ le dénominateur.' },
        { term: 'Multiple commun', def: 'Nombre qui figure dans les tables des deux dénominateurs. Multiples de $3$ : $3, 6, 9, 12\\ldots$ ; multiples de $4$ : $4, 8, 12\\ldots$ — $12$ est leur plus petit multiple commun, donc le plus petit dénominateur commun.' },
        { term: 'Fractions équivalentes', def: 'Fractions représentant le même nombre : $\\dfrac{2}{3} = \\dfrac{4}{6} = \\dfrac{6}{9}$. On multiplie numérateur et dénominateur par le même facteur.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun (sauf 1). Ex : $\\dfrac{7}{12}$.' }
      ],
      example: {
        statement: 'Calculer $\\dfrac{2}{3} + \\dfrac{3}{4}$.',
        steps: [
          'Multiples de $3$ : $3$, $6$, $9$, <strong>$12$</strong>. Multiples de $4$ : $4$, $8$, <strong>$12$</strong>. Le plus petit multiple commun est $12$.',
          'Conversion : $\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$.',
          'Addition des numérateurs : $\\dfrac{8 + 9}{12} = \\dfrac{17}{12}$.'
        ],
        answer: '$\\dfrac{17}{12}$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Addition de fractions',
        title: 'De 2/3 + 3/4 aux douzièmes : visualiser 17/12',
        description: 'L\'exemple du cours : $\\dfrac{2}{3} + \\dfrac{3}{4}$. Ramenées au dénominateur commun $12$ (plus petit multiple commun de $3$ et $4$), les deux fractions deviennent $\\dfrac{8}{12}$ et $\\dfrac{9}{12}$, dont la somme $\\dfrac{17}{12}$ dépasse un entier.',
        svg: `
          <!-- viewBox resserree de 460 a 330 unites : a largeur de page
               constante (120 mm), chaque unite vaut 0,36 mm au lieu de 0,26,
               et les etiquettes passent de 5,2 pt a 8,3 pt. La figure etait
               juste mais illisible a la taille du livre. -->
          <svg viewBox="0 0 330 300" role="img" aria-labelledby="frac-op-title frac-op-desc">
            <title id="frac-op-title">Addition de fractions par bandes</title>
            <desc id="frac-op-desc">Cinq bandes de meme largeur : deux tiers, trois quarts, leur conversion en douziemes huit sur douze et neuf sur douze, puis la somme dix-sept douziemes montree comme une bande pleine plus cinq douziemes d'une seconde bande.</desc>
            <text class="annotation-label" x="50" y="18">2/3 (en tiers)</text>
            <rect class="frame-line" x="50" y="24" width="180" height="24" fill="none"></rect>
            <rect x="50" y="24" width="120" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="110" y1="24" x2="110" y2="48"></line>
            <line class="grid-line" x1="170" y1="24" x2="170" y2="48"></line>
            <text class="tick-label" x="44" y="58">0</text>
            <text class="tick-label" x="234" y="58">1</text>
            <text class="annotation-label" x="50" y="64">3/4 (en quarts)</text>
            <rect class="frame-line" x="50" y="70" width="180" height="24" fill="none"></rect>
            <rect x="50" y="70" width="135" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="95" y1="70" x2="95" y2="94"></line>
            <line class="grid-line" x1="140" y1="70" x2="140" y2="94"></line>
            <line class="grid-line" x1="185" y1="70" x2="185" y2="94"></line>
            <text class="tick-label" x="44" y="104">0</text>
            <text class="tick-label" x="234" y="104">1</text>
            <text class="label-soft" x="50" y="118">Dénominateur commun : les douzièmes (3 × 4 = 12)</text>
            <text class="annotation-label" x="50" y="132">8/12 (= 2/3 converti)</text>
            <rect class="frame-line" x="50" y="138" width="180" height="24" fill="none"></rect>
            <rect x="50" y="138" width="120" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="65" y1="138" x2="65" y2="162"></line>
            <line class="grid-line" x1="80" y1="138" x2="80" y2="162"></line>
            <line class="grid-line" x1="95" y1="138" x2="95" y2="162"></line>
            <line class="grid-line" x1="110" y1="138" x2="110" y2="162"></line>
            <line class="grid-line" x1="125" y1="138" x2="125" y2="162"></line>
            <line class="grid-line" x1="140" y1="138" x2="140" y2="162"></line>
            <line class="grid-line" x1="155" y1="138" x2="155" y2="162"></line>
            <line class="grid-line" x1="170" y1="138" x2="170" y2="162"></line>
            <line class="grid-line" x1="185" y1="138" x2="185" y2="162"></line>
            <line class="grid-line" x1="200" y1="138" x2="200" y2="162"></line>
            <line class="grid-line" x1="215" y1="138" x2="215" y2="162"></line>
            <text class="tick-label" x="44" y="172">0</text>
            <text class="tick-label" x="234" y="172">1</text>
            <text class="annotation-label" x="50" y="178">9/12 (= 3/4 converti)</text>
            <rect class="frame-line" x="50" y="184" width="180" height="24" fill="none"></rect>
            <rect x="50" y="184" width="135" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="65" y1="184" x2="65" y2="208"></line>
            <line class="grid-line" x1="80" y1="184" x2="80" y2="208"></line>
            <line class="grid-line" x1="95" y1="184" x2="95" y2="208"></line>
            <line class="grid-line" x1="110" y1="184" x2="110" y2="208"></line>
            <line class="grid-line" x1="125" y1="184" x2="125" y2="208"></line>
            <line class="grid-line" x1="140" y1="184" x2="140" y2="208"></line>
            <line class="grid-line" x1="155" y1="184" x2="155" y2="208"></line>
            <line class="grid-line" x1="170" y1="184" x2="170" y2="208"></line>
            <line class="grid-line" x1="185" y1="184" x2="185" y2="208"></line>
            <line class="grid-line" x1="200" y1="184" x2="200" y2="208"></line>
            <line class="grid-line" x1="215" y1="184" x2="215" y2="208"></line>
            <text class="tick-label" x="44" y="218">0</text>
            <text class="tick-label" x="234" y="218">1</text>
            <text class="label-soft" x="50" y="232">Somme : 8/12 + 9/12 = 17/12</text>
            <text class="annotation-label" x="50" y="246">17/12 = 1 + 5/12</text>
            <line class="guide-line" x1="230" y1="20" x2="230" y2="280"></line>
            <rect class="frame-line" x="50" y="252" width="180" height="24" fill="none"></rect>
            <rect x="50" y="252" width="180" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="65" y1="252" x2="65" y2="276"></line>
            <line class="grid-line" x1="80" y1="252" x2="80" y2="276"></line>
            <line class="grid-line" x1="95" y1="252" x2="95" y2="276"></line>
            <line class="grid-line" x1="110" y1="252" x2="110" y2="276"></line>
            <line class="grid-line" x1="125" y1="252" x2="125" y2="276"></line>
            <line class="grid-line" x1="140" y1="252" x2="140" y2="276"></line>
            <line class="grid-line" x1="155" y1="252" x2="155" y2="276"></line>
            <line class="grid-line" x1="170" y1="252" x2="170" y2="276"></line>
            <line class="grid-line" x1="185" y1="252" x2="185" y2="276"></line>
            <line class="grid-line" x1="200" y1="252" x2="200" y2="276"></line>
            <line class="grid-line" x1="215" y1="252" x2="215" y2="276"></line>
            <text class="annotation-label" x="234" y="270">+</text>
            <rect class="frame-line" x="246" y="252" width="75" height="24" fill="none"></rect>
            <rect x="246" y="252" width="75" height="24" fill="color-mix(in srgb, var(--diagram-accent) 55%, white)"></rect>
            <line class="grid-line" x1="261" y1="252" x2="261" y2="276"></line>
            <line class="grid-line" x1="276" y1="252" x2="276" y2="276"></line>
            <line class="grid-line" x1="291" y1="252" x2="291" y2="276"></line>
            <line class="grid-line" x1="306" y1="252" x2="306" y2="276"></line>
            <text class="tick-label" x="86" y="292">1 entier (12/12)</text>
            <text class="tick-label" x="268" y="292">5/12</text>
          </svg>
        `,
        notes: [
          'Les deux premières bandes montrent $\\dfrac{2}{3}$ et $\\dfrac{3}{4}$ avec leur découpage naturel (en tiers, puis en quarts).',
          'En redécoupant les deux bandes en douzièmes, on voit que $\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$ : même longueur, juste plus de parts.',
          'La ligne verticale pointillée marque la valeur $1$ (un entier) : la bande finale $\\dfrac{17}{12}$ la dépasse, ce qui correspond à $1$ entier plus $\\dfrac{5}{12}$.'
        ],
        reading: 'Une fois les bandes redécoupées au même dénominateur, on additionne simplement les parts coloriées : $8 + 9 = 17$ douzièmes.',
        caption: 'Bandes fractionnaires pour $\\dfrac{2}{3} + \\dfrac{3}{4} = \\dfrac{8}{12} + \\dfrac{9}{12} = \\dfrac{17}{12} = 1\\dfrac{5}{12}$.'
      },
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Trouver un multiple commun</strong> aux deux dénominateurs, le plus petit possible.',
          '<strong>Convertir</strong> chaque fraction au dénominateur commun en multipliant numérateur et dénominateur par le même facteur.',
          '<strong>Additionner/Soustraire</strong> les numérateurs ; conserver le dénominateur commun.',
          '<strong>Simplifier</strong> la fraction obtenue si possible : diviser numérateur et dénominateur par un même diviseur commun, autant de fois que possible.'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a + c}{b}$ (même dénominateur)',
        '$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a \\times d + c \\times b}{b \\times d}$ (dénominateurs différents)',
        'Comparer : $\\dfrac{a}{b}$ et $\\dfrac{c}{d}$ → réduire au même dénominateur puis comparer les numérateurs'
      ],
      recap: [
        'Pour additionner des fractions, il faut ABSOLUMENT un dénominateur commun.',
        'On ne peut JAMAIS additionner les dénominateurs : $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$.',
        'Pour multiplier : numérateurs entre eux, dénominateurs entre eux.',
        'Diviser par une fraction = multiplier par son inverse.'
      ],
      piege: 'Piège fréquent : additionner les dénominateurs ! $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$. Il faut réduire au dénominateur commun $12$ : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
    },

    quiz: [
      {
        q: 'Combien vaut $\\dfrac{1}{3} + \\dfrac{1}{4}$ ?',
        options: ['$\\dfrac{2}{7}$', '$\\dfrac{7}{12}$', '$\\dfrac{5}{12}$', '$\\dfrac{1}{12}$'],
        answer: 1,
        correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Donc $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Combien vaut $\\dfrac{3}{4} - \\dfrac{1}{6}$ ?',
        options: ['$\\dfrac{2}{2}$', '$\\dfrac{7}{12}$', '$\\dfrac{1}{3}$', '$\\dfrac{8}{24}$'],
        answer: 1,
        correction: 'Dénominateur commun : $12$. $\\dfrac{3}{4} = \\dfrac{9}{12}$ et $\\dfrac{1}{6} = \\dfrac{2}{12}$. Donc $\\dfrac{9}{12} - \\dfrac{2}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Un élève calcule $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{7}$. Quelle règle a-t-il violée ?',
        options: [
          'Il a bien calculé : $1+1=2$ et $3+4=7$.',
          'On ne peut pas additionner les numérateurs ET les dénominateurs séparément. Il faut un dénominateur commun : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.',
          'Il aurait dû multiplier : $\\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12}$.',
          'La bonne réponse est $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{12} = \\dfrac{1}{6}$.'
        ],
        answer: 1,
        correction: 'L\'erreur classique ! On ne peut pas additionner numérateurs et dénominateurs séparément — les dénominateurs représentent des unités différentes (tiers ≠ quarts). Le bon calcul : $12$ est multiple de $3$ et de $4$, donc $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$, et la somme est $\\dfrac{7}{12}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE LE 2026-09-13.

         Cinq contextes, une seule tache : additionner deux fractions apres
         reduction au meme denominateur. La banque n'imprimait que 15 enonces,
         et tous posaient la meme question — c'est le chapitre le plus pauvre de
         l'ouvrage apres le reperage.

         Trois taches ajoutees, prises dans le titre meme du chapitre
         (« Operations sur les fractions »), dont deux operations que le cours
         traite et que la banque ignorait completement :
           - la SOUSTRACTION, ou l'ordre compte et ou l'eleve doit garder le
             signe du plus grand ;
           - la MULTIPLICATION, dont le piege est justement qu'elle ne demande
             AUCUN denominateur commun, contrairement a l'addition ;
           - la comparaison de deux fractions, qui est l'usage le plus frequent
             du denominateur commun hors calcul.
         Mesure avant/apres : 1 tache pour 15 enonces -> 4 taches. */
      generate() {
        const tache = pick(['somme', 'somme', 'difference', 'produit', 'comparer']);
        function pgcd(x, y) { return y === 0 ? x : pgcd(y, x % y); }

        /* TACHE 2 — soustraction. On impose la premiere fraction PLUS GRANDE
           pour rester dans les positifs : le chapitre porte sur les fractions,
           pas sur les relatifs. */
        if (tache === 'difference') {
          const [b, d] = pick([[2, 3], [3, 4], [4, 5], [2, 5], [3, 5], [5, 6], [4, 6], [3, 8]]);
          const ppcm = (b * d) / pgcd(b, d);
          const a = rand(1, b - 1), c = rand(1, d - 1);
          const na = a * (ppcm / b), nc = c * (ppcm / d);
          /* Resultat strictement positif exige : le chapitre porte sur les
             fractions, les relatifs sont vus au chapitre 2. Plutot que
             d'echanger les deux fractions — ce qui rendrait l'enonce incoherent
             avec son contexte (on ne verse pas plus que le bidon ne contient) —
             on retire simplement ce tirage et on en fait un autre. */
          if (na <= nc) { return this.generate(); }
          const num = na - nc;
          const g = pgcd(num, ppcm);
          const val = num / ppcm;
          const ctx = pick([
            { intro: `Un bidon contenait $\\dfrac{${a}}{${b}}$ de litre de sirop. On en verse $\\dfrac{${c}}{${d}}$ de litre dans une carafe.`, quoi: 'la quantité restante, en litres' },
            { intro: `Une réserve d'eau est remplie aux $\\dfrac{${a}}{${b}}$. L'arrosage du potager en consomme $\\dfrac{${c}}{${d}}$.`, quoi: 'la fraction restante de la réserve' },
            { intro: `Un rouleau de tissu mesure $\\dfrac{${a}}{${b}}$ de mètre. On en coupe $\\dfrac{${c}}{${d}}$ de mètre.`, quoi: 'la longueur restante, en mètres' }
          ]);
          return {
            statement: `${ctx.intro}<br/><br/>Calcule $\\dfrac{${a}}{${b}} - \\dfrac{${c}}{${d}}$ pour obtenir ${ctx.quoi}. Donne le résultat sous forme décimale arrondie à $0{,}01$.`,
            answer: parseFloat(val.toFixed(2)),
            tolerance: 0.01,
            unit: '',
            hint: `Comme pour l'addition, une soustraction de fractions exige d'abord le <strong>même dénominateur</strong>.<br/><br/>Le plus petit multiple commun à $${b}$ et $${d}$ est $${ppcm}$. Attention à respecter l'ordre : on retire la seconde à la première.`,
            solution: [
              `Une soustraction de fractions demande le même dénominateur, exactement comme une addition.`,
              `Dénominateur commun : $${ppcm}$, donc $\\dfrac{${a}}{${b}} = \\dfrac{${na}}{${ppcm}}$ et $\\dfrac{${c}}{${d}} = \\dfrac{${nc}}{${ppcm}}$.`,
              `Différence : $\\dfrac{${na}}{${ppcm}} - \\dfrac{${nc}}{${ppcm}} = \\dfrac{${num}}{${ppcm}}${g > 1 ? ` = \\dfrac{${num / g}}{${ppcm / g}}` : ''} \\approx ${fr(val, 2)}$.`,
              `Seuls les numérateurs se soustraient : le dénominateur commun, lui, ne bouge pas.`
            ]
          };
        }

        /* TACHE 3 — multiplication. Son interet pedagogique est precisement
           qu'elle ne demande PAS de denominateur commun : l'eleve qui applique
           la procedure de l'addition par reflexe se trompe. */
        if (tache === 'produit') {
          const b = rand(2, 6), d = rand(2, 6);
          const a = rand(1, b - 1), c = rand(1, d - 1);
          const num = a * c, den = b * d;
          const g = pgcd(num, den);
          const val = num / den;
          const ctx = pick([
            { intro: `Les $\\dfrac{${a}}{${b}}$ d'un jardin sont cultivés, et $\\dfrac{${c}}{${d}}$ de cette partie cultivée sont plantés de fraises.`, quoi: 'la fraction du jardin entier plantée de fraises' },
            { intro: `Les $\\dfrac{${a}}{${b}}$ d'une plaquette de chocolat sont posés sur la table. Tu en manges $\\dfrac{${c}}{${d}}$.`, quoi: 'la fraction de la plaquette entière que tu as mangée' },
            { intro: `Un bidon est rempli aux $\\dfrac{${a}}{${b}}$. On transvase $\\dfrac{${c}}{${d}}$ de son contenu.`, quoi: 'la fraction du bidon transvasée' }
          ]);
          return {
            statement: `${ctx.intro}<br/><br/>Calcule $\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${d}}$ pour obtenir ${ctx.quoi}. Donne le résultat sous forme décimale arrondie à $0{,}01$.`,
            answer: parseFloat(val.toFixed(2)),
            tolerance: 0.01,
            unit: '',
            hint: `Piège classique : la multiplication ne demande <strong>aucun</strong> dénominateur commun.<br/><br/>On multiplie les numérateurs entre eux, et les dénominateurs entre eux. C'est tout.`,
            solution: [
              `Une multiplication de fractions ne demande aucun dénominateur commun, contrairement à une addition.`,
              `Numérateurs : $${a} \\times ${c} = ${num}$. Dénominateurs : $${b} \\times ${d} = ${den}$.`,
              `Produit : $\\dfrac{${num}}{${den}}${g > 1 ? ` = \\dfrac{${num / g}}{${den / g}}` : ''} \\approx ${fr(val, 2)}$.`,
              `Le résultat est plus petit que chacune des deux fractions : prendre une part d'une part donne toujours moins que la part de départ.`
            ]
          };
        }

        /* TACHE 4 — comparer. Le denominateur commun sert ici a DECIDER, pas a
           calculer : c'est son usage le plus courant, et il n'etait exerce
           nulle part. Reponse 1 ou 0, format du projet pour une question a
           trancher. */
        if (tache === 'comparer') {
          const [b, d] = pick([[3, 4], [4, 5], [5, 6], [3, 5], [2, 7], [5, 8], [3, 8], [4, 7]]);
          const a = rand(1, b - 1), c = rand(1, d - 1);
          if (a / b === c / d) { return this.generate(); }
          const ppcm = (b * d) / pgcd(b, d);
          const na = a * (ppcm / b), nc = c * (ppcm / d);
          const ctx = pick([
            { qui: 'deux coureuses', un: 'Alix', deux: 'Bina', quoi: 'du parcours' },
            { qui: 'deux peintres', un: 'Chloé', deux: 'Diego', quoi: 'du mur' },
            { qui: 'deux lecteurs', un: 'Elias', deux: 'Fatou', quoi: 'du livre' }
          ]);
          return {
            statement: `On compare l'avancement de ${ctx.qui} : ${ctx.un} a fait $\\dfrac{${a}}{${b}}$ ${ctx.quoi} et ${ctx.deux} en a fait $\\dfrac{${c}}{${d}}$.<br/><br/>Est-ce que $\\dfrac{${a}}{${b}}$ est plus grande que $\\dfrac{${c}}{${d}}$ ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: a / b > c / d ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Comparer les numérateurs seuls ne veut rien dire : des parts en $${b}$ et des parts en $${d}$ n'ont pas la même taille.<br/><br/>Mets les deux fractions au dénominateur commun $${ppcm}$, puis compare les numérateurs.`,
            solution: [
              `Deux fractions ne se comparent qu'une fois ramenées au même dénominateur.`,
              `Dénominateur commun $${ppcm}$ : $\\dfrac{${a}}{${b}} = \\dfrac{${na}}{${ppcm}}$ et $\\dfrac{${c}}{${d}} = \\dfrac{${nc}}{${ppcm}}$.`,
              `Les parts ont maintenant la même taille, on compare donc les numérateurs : $${na}$ et $${nc}$.`,
              na > nc
                ? `$${na} > ${nc}$, donc $\\dfrac{${a}}{${b}}$ est bien la plus grande.`
                : `$${na} < ${nc}$, donc $\\dfrac{${a}}{${b}}$ n'est pas la plus grande — c'est $\\dfrac{${c}}{${d}}$ qui l'emporte.`
            ]
          };
        }

        const denomPairs = [[2,3],[3,4],[4,5],[2,5],[3,5],[4,3],[2,7],[3,7],[5,6]];
        const [b, d] = pick(denomPairs);
        const a = rand(1, b - 1);
        const c = rand(1, d - 1);
        function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
        const lcm = (b * d) / gcd(b, d);
        const num = a * (lcm / b) + c * (lcm / d);
        const g = gcd(num, lcm);
        const answerNum = num / g;
        const answerDen = lcm / g;
        const answer = answerNum / answerDen;

        const ctx = pick([
          {
            intro: `Pour une recette de crêpes, il faut $\\dfrac{${a}}{${b}}$ de litre de lait et $\\dfrac{${c}}{${d}}$ de litre de crème.<br/>Quelle <strong>quantité totale</strong> de liquide faut-il ?`,
            hint: `Trouve le dénominateur commun de $${b}$ et $${d}$ pour additionner ces fractions de litre.`
          },
          {
            intro: `Un terrain est partagé : $\\dfrac{${a}}{${b}}$ est un jardin et $\\dfrac{${c}}{${d}}$ est une terrasse.<br/>Quelle <strong>fraction totale</strong> du terrain ces deux espaces occupent-ils ?`,
            hint: `Pour additionner les fractions, il faut le même dénominateur. Le plus petit multiple commun à $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Noa a couru pendant $\\dfrac{${a}}{${b}}$ d'heure le matin et $\\dfrac{${c}}{${d}}$ d'heure l'après-midi.<br/>Pendant combien de temps a-t-il couru <strong>au total</strong> ?`,
            hint: `Convertis les deux fractions d'heure au même dénominateur ($${lcm}$) pour les additionner.`
          },
          {
            intro: `Sur un trajet, Léa a parcouru $\\dfrac{${a}}{${b}}$ du chemin à pied et $\\dfrac{${c}}{${d}}$ du chemin à vélo.<br/>Quelle <strong>fraction du trajet</strong> a-t-elle déjà parcourue ?`,
            hint: `Même dénominateur nécessaire ! Le plus petit multiple commun à $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Pour un projet d'arts plastiques, Emma utilise $\\dfrac{${a}}{${b}}$ d'un tube de peinture bleue et $\\dfrac{${c}}{${d}}$ d'un tube de peinture jaune.<br/>Quelle <strong>quantité totale</strong> de peinture a-t-elle utilisée (en tubes) ?`,
            hint: `Additionne les deux fractions : trouve le dénominateur commun $${lcm}$.`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>Calcule $\\dfrac{${a}}{${b}} + \\dfrac{${c}}{${d}}$ et donne le résultat sous forme décimale arrondie à $0{,}01$.`,
          answer: parseFloat(answer.toFixed(2)),
          tolerance: 0.01,
          unit: '',
          hint: ctx.hint,
          solution: [
            // Premiere ligne = intertitre de la banque professeur (nombres et
            // formules retires) : elle doit nommer la METHODE, jamais porter
            // une valeur. Voir le commit 6e94e89.
            `Une addition de fractions demande d'abord un dénominateur commun.`,
            `Dénominateur commun : $${lcm}$.`,
            `$\\dfrac{${a}}{${b}} = \\dfrac{${a * (lcm / b)}}{${lcm}}$ et $\\dfrac{${c}}{${d}} = \\dfrac{${c * (lcm / d)}}{${lcm}}$.`,
            `Somme : $\\dfrac{${num}}{${lcm}}${g > 1 ? ` = \\dfrac{${answerNum}}{${answerDen}}` : ''} \\approx ${fr(answer, 2)}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une recette de gâteau demande $\\dfrac{3}{4}$ de tasse de farine complète et $\\dfrac{2}{3}$ de tasse de farine blanche.',
      tasks: [
        'Quelle est la quantité totale de farine utilisée (en tasses) ?',
        'Si on double la recette, quelle quantité de farine faut-il au total ?',
        'La boîte de farine contient $5$ tasses. Combien de recettes peut-on faire avec cette boîte ?'
      ],
      solutions: [
        '$\\dfrac{3}{4} + \\dfrac{2}{3} = \\dfrac{9}{12} + \\dfrac{8}{12} = \\dfrac{17}{12}$ tasses $\\approx 1{,}42$ tasses.',
        'Double : $2 \\times \\dfrac{17}{12} = \\dfrac{17}{6} \\approx 2{,}83$ tasses.',
        '$5 \\div \\dfrac{17}{12} = 5 \\times \\dfrac{12}{17} = \\dfrac{60}{17} \\approx 3{,}5$. On peut faire $3$ recettes complètes.'
      ],
      finalAnswer: 'Chaque recette utilise $\\dfrac{17}{12}$ tasses de farine ; on peut faire $3$ recettes complètes avec $5$ tasses.'
    },

    evaluation: {
      title: 'Évaluation — Opérations sur les fractions',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $\\dfrac{2}{5} + \\dfrac{1}{3}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.73,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $15$. $\\dfrac{2}{5} = \\dfrac{6}{15}$ et $\\dfrac{1}{3} = \\dfrac{5}{15}$. Somme : $\\dfrac{6+5}{15} = \\dfrac{11}{15} \\approx 0{,}73$.'
        },
        {
          statement: 'Calculer $\\dfrac{5}{6} - \\dfrac{1}{4}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.58,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $12$. $\\dfrac{5}{6} = \\dfrac{10}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Différence : $\\dfrac{10-3}{12} = \\dfrac{7}{12} \\approx 0{,}58$.'
        },
        {
          statement: 'Laquelle de ces égalités est correcte ?',
          type: 'multiple-choice',
          options: [
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{2}{7}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{7}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{3}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{4}{12}$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{4} = \\dfrac{3}{12}$ et $\\dfrac{1}{3} = \\dfrac{4}{12}$. Somme : $\\dfrac{3+4}{12} = \\dfrac{7}{12}$.'
        },
        {
          statement: 'Quelle fraction est la plus grande : $\\dfrac{3}{5}$ ou $\\dfrac{5}{8}$ ? Donner la valeur décimale de la plus grande, arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.63,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun $40$ : $\\dfrac{3}{5} = \\dfrac{24}{40}$ et $\\dfrac{5}{8} = \\dfrac{25}{40}$. Comme $25 > 24$, $\\dfrac{5}{8} > \\dfrac{3}{5}$. Valeur décimale : $\\dfrac{5}{8} = 0{,}625 \\approx 0{,}63$.'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait « Calculer $\dfrac{3}{4} + \dfrac{1}{4} - \dfrac{1}{2}$ »,
           soit un TROISIEME calcul de fractions sur cinq questions. Sur
           l'ouvrage entier, « calculer » pesait 45,7 % des soixante-dix
           questions, bien au-dela du plafond de 35 %.

           La nouvelle question demande d'ENCADRER une somme sans la calculer
           exactement, par estimation de chaque terme. C'est « raisonner » : la
           reponse s'obtient par comparaison a des reperes ($\dfrac{1}{2}$, $1$)
           et non par une suite d'operations. Cette competence d'estimation est
           explicitement au programme du cycle 4, et c'est elle qui permet a un
           eleve de detecter seul un resultat absurde. */
        {
          statement: 'Sans faire le calcul exact, entre quels nombres entiers se trouve $\\dfrac{7}{8} + \\dfrac{9}{10}$ ?',
          type: 'multiple-choice',
          options: [
            'Entre $0$ et $1$',
            'Entre $1$ et $2$',
            'Entre $2$ et $3$',
            'Entre $16$ et $18$'
          ],
          answer: 1,
          points: 2,
          correction: 'Chacune des deux fractions est <strong>un peu plus petite que $1$</strong> : ' +
            '$\\dfrac{7}{8}$ car $7 < 8$, et $\\dfrac{9}{10}$ car $9 < 10$. ' +
            'Leur somme est donc un peu plus petite que $2$, et clairement plus grande que $1$ : elle est entre $1$ et $2$. ' +
            '(Le calcul exact donnerait $\\dfrac{35}{40} + \\dfrac{36}{40} = \\dfrac{71}{40} \\approx 1{,}78$, ' +
            'ce qui confirme l\'encadrement.) ' +
            'La réponse 4 est celle de l\'élève qui additionne les numérateurs et les dénominateurs séparément : ' +
            'cette estimation rapide permet justement de repérer une telle erreur sans refaire le calcul.'
        }
      ]
    }
  });
