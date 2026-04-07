/* =========================================================
   Spark Learning – data/lycee-1re/1re-suites.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-suites',
    level: 2, subject: 'maths',
    icon: '🔄',
    title: 'Suites numériques',
    subtitle: 'Suites arithmétiques et géométriques',
    keywords: ['Suite arithmétique', 'Suite géométrique', 'Raison', 'Terme général', 'Somme'],
    physics: 'Décroissance radioactive (suite géométrique), intérêts composés, signal numérique',

    cours: {
      intro: 'Une <strong>suite numérique</strong> est une liste ordonnée de nombres où chaque terme se construit à partir du précédent.<br/><br/>Quand on ajoute toujours la même quantité $r$, c\'est une <strong>suite arithmétique</strong> (comme une horloge qui avance d\'une seconde à chaque tick). Quand on multiplie toujours par le même facteur $q$, c\'est une <strong>suite géométrique</strong> (comme la décroissance radioactive : chaque demi-vie divise la quantité par 2).<br/><br/>La distinction clé : arithmétique = variation absolue constante ; géométrique = taux de variation constant.<br/><br/>Attention au comptage des termes : $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes — pas $n$.<br/><br/>Une suite géométrique de raison $q = 1/2$ ne s\'annule jamais mais tend vers $0$ : même après 50 demi-vies, il reste un atome en théorie.',
      definitions: [
        { term: 'Suite arithmétique', def: 'Une suite $(u_n)$ est <strong>arithmétique</strong> de raison $r$ si $u_{n+1} = u_n + r$ pour tout $n$. La différence entre deux termes consécutifs est <strong>constante</strong>.' },
        { term: 'Suite géométrique', def: 'Une suite $(u_n)$ est <strong>géométrique</strong> de raison $q$ si $u_{n+1} = u_n \\times q$ pour tout $n$ (avec $u_0 \\neq 0$). Le quotient entre deux termes consécutifs est <strong>constant</strong>.' },
        { term: 'Raison', def: 'La <strong>raison</strong> est le nombre qui caractérise la régularité : $r = u_{n+1} - u_n$ (arithmétique) ou $q = u_{n+1}/u_n$ (géométrique).' },
        { term: 'Terme général', def: 'Le <strong>terme général</strong> donne $u_n$ directement en fonction de $n$ : $u_n = u_0 + nr$ (arithmétique) ou $u_n = u_0 \\times q^n$ (géométrique).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Suite arithmétique (raison $r$) : $u_n = u_0 + n \\times r$. Terme suivant = terme précédent $+ r$ (variation constante).',
          'Suite géométrique (raison $q$) : $u_n = u_0 \\times q^n$. Terme suivant = terme précédent $\\times q$ (taux de variation constant).',
          'Identifier le type : si $u_{n+1} - u_n$ est constant → arithmétique. Si $u_{n+1}/u_n$ est constant → géométrique.'
        ]
      },
      example: {
        statement: 'Un capital de $1\\,000$ € est placé à un taux annuel de $3\\%$ à intérêts composés. Exprimer le capital $C_n$ après $n$ années et calculer $C_5$.',
        steps: [
          'Chaque année, le capital est multiplié par $1{,}03$ : c\'est une suite géométrique de raison $q = 1{,}03$ et de premier terme $C_0 = 1\\,000$.',
          'Terme général : $C_n = C_0 \\times q^n = 1\\,000 \\times 1{,}03^n$.',
          '$C_5 = 1\\,000 \\times 1{,}03^5 = 1\\,000 \\times 1{,}15927\\ldots \\approx 1\\,159{,}27$ €.'
        ],
        answer: 'Après $5$ ans, le capital vaut environ $1\\,159{,}27$ €. La suite $(C_n)$ est géométrique de raison $1{,}03$.'
      },
      formulas: [
        '$u_n^{\\text{arith}} = u_0 + n \\cdot r$',
        '$u_n^{\\text{géom}} = u_0 \\times q^n$',
        '$S_n^{\\text{arith}} = \\dfrac{(u_0 + u_n)(n+1)}{2}$',
        '$S_n^{\\text{géom}} = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$ (si $q \\neq 1$)'
      ],
      recap: [
        'Arithmétique : on <strong>ajoute</strong> toujours la même quantité $r$. Formule : $u_n = u_0 + nr$.',
        'Géométrique : on <strong>multiplie</strong> toujours par le même facteur $q$. Formule : $u_n = u_0 \\times q^n$.',
        'De $u_0$ à $u_n$, il y a $n+1$ termes (piège classique : ne pas confondre rang et nombre de termes).',
        'Les sommes utilisent des formules spécifiques : ne jamais additionner terme par terme si $n$ est grand !'
      ],
      piege: 'Confondre le <strong>rang</strong> et le <strong>nombre de termes</strong> est l\'erreur la plus fréquente. $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes (pas $n$).<br/><br/>Pour la demi-vie : après $k$ demi-vies, il reste $N_0 \\times (1/2)^k$ — c\'est un exposant $k$, pas $k-1$ !'
    },

    quiz: [
      {
        q: 'Une suite a pour premiers termes $1, 3, 9, 27, 81$. Un élève dit : "c\'est une suite arithmétique de raison $2$" (car $3 - 1 = 2$). Quelle est son erreur ?',
        options: [
          'C\'est une suite géométrique de raison $3$ (car $3/1 = 9/3 = 27/9 = 3$), pas arithmétique',
          'L\'élève a raison, c\'est bien arithmétique mais la raison est $3$, pas $2$',
          'Ce n\'est ni arithmétique ni géométrique car les différences ne sont pas constantes et les quotients non plus',
          'La raison $2$ est correcte : on prend la différence entre le 1er et le 2e terme'
        ],
        answer: 0,
        correction: 'Dans une suite arithmétique, la différence entre deux termes consécutifs est constante. Ici $3-1=2$, $9-3=6$, $27-9=18$ : les différences ne sont <strong>pas</strong> constantes.<br/><br/>En revanche, les quotients $3/1=3$, $9/3=3$, $27/9=3$ sont constants : c\'est une <strong>suite géométrique</strong> de raison $q=3$.'
      },
      {
        q: 'Un noyau radioactif a une demi-vie de $8$ jours. Il en reste $100$ g initialement. Combien en reste-t-il après $24$ jours ?',
        options: ['$50$ g', '$25$ g', '$12{,}5$ g', '$6{,}25$ g'],
        answer: 2,
        correction: 'On commence par déterminer le nombre de demi-vies écoulées : $24$ jours $= 3 \\times 8$ jours $= 3$ demi-vies.<br/><br/>On applique la formule : $N = 100 \\times \\left(\\dfrac{1}{2}\\right)^3 = 100 \\times \\dfrac{1}{8} = 12{,}5$ g.'
      },
      {
        q: 'Une suite géométrique a $u_0 = 2$ et $q = 3$. Quel est le terme $u_3$ ?',
        options: ['$18$', '$54$', '$27$', '$6$'],
        answer: 1,
        correction: 'On utilise la formule du terme général : $u_n = u_0 \\times q^n$.<br/><br/>Donc $u_3 = u_0 \\times q^3 = 2 \\times 3^3 = 2 \\times 27 = 54$.'
      },
      {
        q: 'La somme $u_0 + u_1 + \\cdots + u_5$ d\'une suite arithmétique avec $u_0 = 2$ et $r = 3$ vaut :',
        options: ['$57$', '$17$', '$87$', '$42$'],
        answer: 0,
        correction: 'On calcule d\'abord le dernier terme : $u_5 = 2 + 5 \\times 3 = 17$.<br/><br/>De $u_0$ à $u_5$, il y a $6$ termes (attention, pas $5$).<br/><br/>On applique la formule de somme : $S = \\dfrac{(u_0 + u_5) \\times 6}{2} = \\dfrac{(2 + 17) \\times 6}{2} = \\dfrac{114}{2} = 57$.'
      },
      {
        q: 'Une suite vérifie $u_0 = 5$ et $u_n = 5 + 2n$. Sa nature est :',
        options: ['Géométrique de raison $2$', 'Arithmétique de raison $2$', 'Ni arithmétique ni géométrique', 'Arithmétique de raison $5$'],
        answer: 1,
        correction: 'On calcule la différence entre deux termes consécutifs : $u_{n+1} - u_n = (5 + 2(n+1)) - (5 + 2n) = 2$.<br/><br/>La différence est constante et vaut $2$ : c\'est bien une <strong>suite arithmétique</strong> de raison $r = 2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick(['arith', 'geom']);
        if (type === 'arith') {
          const u0 = rand(2, 10);
          const r = rand(2, 8);
          const n = rand(5, 15);
          const ctx = pick([
            { intro: 'Un randonneur part à une altitude de', unit: 'm', mot: 'Il monte de', motFin: 'mètres à chaque étape' },
            { intro: 'Un salarié débute avec un salaire de', unit: '€', mot: 'Il reçoit une augmentation fixe de', motFin: '€ par an' },
            { intro: 'Une citerne contient initialement', unit: 'L', mot: 'On y ajoute', motFin: 'litres chaque jour' }
          ]);
          const un = u0 + n * r;
          const somme = (u0 + un) * (n + 1) / 2;
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot} $${r}$ ${ctx.motFin}.<br/><br/>1) Exprimer $u_n$ en fonction de $n$.<br/>2) Calculer $u_{${n}}$.<br/>3) Calculer la somme $S = u_0 + u_1 + \\cdots + u_{${n}}$.<br/><br/>Donner la valeur de $S$.`,
            answer: somme,
            tolerance: 0.01,
            unit: '',
            hint: `C'est une suite arithmétique : $u_n = ${u0} + ${r}n$. Pour la somme, utilise $S = \\dfrac{(u_0 + u_n)(n+1)}{2}$.`,
            solution: [
              `Suite arithmétique : $u_n = ${u0} + ${r}n$.`,
              `$u_{${n}} = ${u0} + ${r} \\times ${n} = ${un}$.`,
              `$S = \\dfrac{(${u0} + ${un}) \\times ${n+1}}{2} = \\dfrac{${u0+un} \\times ${n+1}}{2} = ${somme}$.`
            ]
          };
        } else {
          const u0 = rand(1, 5);
          const q = pick([2, 3]);
          const n = rand(3, 6);
          const ctx = pick([
            { intro: 'Une colonie de bactéries compte initialement', unit: 'individus', mot: `La population est multipliée par $${q}$ à chaque heure` },
            { intro: 'Un message viral est partagé par', unit: 'personnes au départ', mot: `Chaque personne le partage avec $${q}$ nouvelles personnes à chaque étape` },
            { intro: 'Un investissement initial de', unit: '€ est placé avec un facteur multiplicateur de', mot: `Le capital est multiplié par $${q}$ chaque année` }
          ]);
          const un = u0 * Math.pow(q, n);
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot}.<br/><br/>1) Identifier la nature de la suite et sa raison.<br/>2) Calculer $u_{${n}}$.<br/><br/>Donner la valeur de $u_{${n}}$.`,
            answer: un,
            tolerance: 0.01,
            unit: '',
            hint: `Suite géométrique de raison $q = ${q}$ : $u_n = ${u0} \\times ${q}^n$.`,
            solution: [
              `Suite géométrique de raison $q = ${q}$ et $u_0 = ${u0}$.`,
              `$u_{${n}} = ${u0} \\times ${q}^{${n}} = ${u0} \\times ${Math.pow(q, n)} = ${un}$.`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le carbone 14 ($^{14}\\text{C}$) utilisé en datation archéologique a une demi-vie $t_{1/2} = 5730$ ans. Un échantillon de bois ancien contient $37{,}5\\%$ de la quantité de $^{14}\\text{C}$ d\'un échantillon vivant actuel.',
      schema: null,
      tasks: [
        'Exprimer $N(k) = N_0 \\times \\left(\\dfrac{1}{2}\\right)^k$ où $k$ est le nombre de demi-vies écoulées.',
        'Résoudre $0{,}375 = \\left(\\dfrac{1}{2}\\right)^k$ pour trouver $k$ (décomposer $0{,}375$ en puissance de $\\dfrac{1}{2}$).',
        'En déduire l\'âge de l\'échantillon en années.'
      ],
      solutions: [
        '$N(k) = N_0 \\times (1/2)^k$, donc $N/N_0 = (1/2)^k = 0{,}375$.',
        '$0{,}375 = 3/8 = (1/2)^? $. On vérifie : $(1/2)^1 = 0{,}5$, $(1/2)^2 = 0{,}25$. Ni l\'un ni l\'autre. Mais $3/8 = 3 \\times (1/2)^3$... En fait $(1/2)^k = 3/8$ donne $k = \\log_2(8/3) \\approx 1{,}415$. Plus simplement : $(1/2)^k = 0{,}375$ → $k \\ln(0{,}5) = \\ln(0{,}375)$ → $k = \\ln(0{,}375)/\\ln(0{,}5) \\approx 1{,}415$.',
        'Âge $= k \\times t_{1/2} = 1{,}415 \\times 5730 \\approx 8108$ ans.'
      ],
      finalAnswer: 'L\'échantillon a environ $8100$ ans.'
    },

    evaluation: {
      title: 'Évaluation — Suites numériques',
      duration: '35 min',
      questions: [
        {
          statement: 'Une suite arithmétique a pour premier terme $u_0 = 3$ et pour raison $r = 5$. Calculer $u_{20}$.',
          type: 'numeric',
          answer: 103,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du terme général : $u_n = u_0 + n \\times r$.<br/><br/>Donc $u_{20} = 3 + 20 \\times 5 = 3 + 100 = 103$.'
        },
        {
          statement: 'On considère la suite $(v_n)$ définie par $v_0 = 2$ et $v_{n+1} = 3 v_n$. Quelle est la nature de cette suite ?',
          type: 'multiple-choice',
          options: ['Arithmétique de raison $3$', 'Géométrique de raison $3$', 'Géométrique de raison $2$', 'Ni arithmétique, ni géométrique'],
          answer: 1,
          points: 1,
          correction: 'La relation $v_{n+1} = 3 v_n$ signifie que chaque terme est obtenu en <strong>multipliant</strong> le précédent par $3$.<br/><br/>C\'est donc une suite géométrique de raison $q = 3$. Le quotient de deux termes consécutifs est bien constant.'
        },
        {
          statement: 'Calculer la somme $S = u_0 + u_1 + \\cdots + u_{10}$ pour la suite arithmétique $u_n = 2 + 4n$.',
          type: 'numeric',
          answer: 242,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'On identifie les bornes : $u_0 = 2$ et $u_{10} = 2 + 4 \\times 10 = 42$.<br/><br/>De $u_0$ à $u_{10}$, il y a $11$ termes. On applique la formule : $S = \\dfrac{(u_0 + u_{10}) \\times 11}{2} = \\dfrac{(2 + 42) \\times 11}{2} = \\dfrac{44 \\times 11}{2} = 242$.'
        },
        {
          statement: 'Un capital de $1000$ € est placé à un taux annuel de $5\\%$ à intérêts composés. Au bout de $n$ années, le capital est $C_n = 1000 \\times 1{,}05^n$. Calculer $C_3$ (arrondi au centime).',
          type: 'numeric',
          answer: 1157.63,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'On applique la formule du terme général de la suite géométrique : $C_3 = 1000 \\times (1{,}05)^3$.<br/><br/>$C_3 = 1000 \\times 1{,}157625 = 1157{,}63$ € (arrondi au centime).'
        },
        {
          statement: 'La somme des $6$ premiers termes ($v_0$ à $v_5$) d\'une suite géométrique de premier terme $v_0 = 1$ et de raison $q = 2$ vaut :',
          type: 'multiple-choice',
          options: ['$32$', '$63$', '$64$', '$31$'],
          answer: 1,
          points: 2,
          correction: 'On utilise la formule de somme géométrique avec $v_0 = 1$, $q = 2$ et $6$ termes ($v_0$ à $v_5$).<br/><br/>$S = v_0 \\times \\dfrac{1 - q^{6}}{1 - q} = 1 \\times \\dfrac{1 - 64}{1 - 2} = \\dfrac{-63}{-1} = 63$.'
        }
      ]
    }
  });
