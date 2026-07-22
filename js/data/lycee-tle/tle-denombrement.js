/* =========================================================
   Spark Learning – data/lycee-tle/tle-denombrement.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-denombrement',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Dénombrement et combinatoire',
    subtitle: 'Arrangements, permutations, combinaisons',
    keywords: ['Combinatoire', 'Arrangements', 'Permutations', 'Combinaisons', 'Coefficient binomial'],
    physics: false,
    cours: {
      intro: 'Le dénombrement répond à <strong>"combien de façons ?"</strong><br/><br/>La clé est de savoir si <strong>l\'ordre compte</strong>. Quand l\'ordre compte (podium, code PIN) → <strong>arrangements</strong>. Quand l\'ordre ne compte pas (comité, main de cartes) → <strong>combinaisons</strong>.<br/><br/>La formule $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ donne le nombre de façons de choisir $k$ éléments parmi $n$ sans ordre. <strong>Erreur classique</strong> : diviser ou non par $k!$ selon le contexte. $\\binom{10}{3} = 120$ (combinaison), tandis que $A_{10}^3 = 720$ (arrangement).<br/><br/><strong>Propriété clé</strong> : $\\binom{n}{k} = \\binom{n}{n-k}$ (choisir $k$ éléments revient à en exclure $n-k$).',
      definitions: [
        { term: 'Factorielle $n!$', def: '$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$. Convention : $0! = 1$. Interprétation : $n!$ est le nombre de façons d\'ordonner $n$ objets distincts (permutations).' },
        { term: 'Arrangement $A_n^k$', def: 'Nombre de façons de choisir et <strong>ordonner</strong> $k$ éléments parmi $n$ : $A_n^k = \\dfrac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$. L\'ordre compte.' },
        { term: 'Combinaison $\\binom{n}{k}$', def: 'Nombre de façons de choisir $k$ éléments parmi $n$ <strong>sans tenir compte de l\'ordre</strong> : $\\binom{n}{k} = \\dfrac{A_n^k}{k!} = \\dfrac{n!}{k!(n-k)!}$.' },
        { term: 'Formule du binôme de Newton', def: '$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$. Les coefficients $\\binom{n}{k}$ apparaissent dans le triangle de Pascal.' }
      ],
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          '<strong>Arrangements</strong> de $k$ éléments parmi $n$ (ordre compte) : $A_n^k = \\frac{n!}{(n-k)!}$.',
          '<strong>Permutations</strong> de $n$ éléments : $n!$.',
          '<strong>Combinaisons</strong> de $k$ éléments parmi $n$ (ordre ne compte pas) : $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$.',
          '<strong>Multiplication des choix</strong> : si un choix comporte $p$ façons puis $q$ façons, le total est $p\\times q$.'
        ]
      },
      example: {
        statement: 'Au loto, on tire $5$ numéros parmi $49$ (l\'ordre ne compte pas). Combien de combinaisons possibles ?',
        steps: [
          'L\'ordre ne compte pas : c\'est une combinaison, pas un arrangement.',
          '$\\binom{49}{5} = \\dfrac{49!}{5! \\times 44!} = \\dfrac{49 \\times 48 \\times 47 \\times 46 \\times 45}{5!}$.',
          'Numérateur : $49 \\times 48 \\times 47 \\times 46 \\times 45 = 228\\,673\\,200$.',
          'Dénominateur : $5! = 120$.',
          '$\\binom{49}{5} = \\dfrac{228\\,673\\,200}{120} = 1\\,906\\,884$.'
        ],
        answer: '$\\binom{49}{5} = 1\\,906\\,884$ combinaisons possibles. La probabilité de gagner est d\'environ $1$ chance sur $1{,}9$ million.'
      },
      formulas: [
        '$n! = n\\times(n-1)\\times\\cdots\\times1$',
        '$A_n^k = \\dfrac{n!}{(n-k)!}$',
        '$\\dbinom{n}{k}=\\dfrac{n!}{k!(n-k)!}$',
        '$\\dbinom{n}{k}=\\dbinom{n}{n-k}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Ordre compte vs ordre ne compte pas',
        title: 'Du groupe de 4 aux rôles chef/secrétaire : arrangement contre combinaison',
        description: 'Reprise de l\'exemple du cours (le groupe de 4 élèves du problème) : en haut, on désigne un chef puis un secrétaire — l\'ordre compte, $A_4^2=12$. En bas, les mêmes 4 élèves forment simplement un duo sans rôle — l\'ordre ne compte pas, $\\binom{4}{2}=6$.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="denombrement-arbre-title denombrement-arbre-desc">
            <title id="denombrement-arbre-title">Arbre comparant arrangement et combinaison sur un groupe de 4 élèves</title>
            <desc id="denombrement-arbre-desc">En haut, un arbre a deux niveaux part d'un groupe de 4 eleves A, B, C, D. Le premier niveau choisit le chef parmi les 4, soit 4 branches. Le second niveau choisit le secretaire parmi les 3 eleves restants, soit 3 branches par chef, pour un total de 12 feuilles ordonnees comme A vers B ou B vers A. En bas, les memes 4 eleves sont regroupes en 6 duos non ordonnes AB, AC, AD, BC, BD, CD. Deux lignes en pointilles relient les feuilles A vers B et B vers A du haut vers le meme duo AB en bas, montrant que chaque duo non ordonne regroupe deux issues ordonnees.</desc>

            <!-- panneau 1 : arrangement (ordre compte) -->
            <text class="annotation-label" x="240" y="14" text-anchor="middle">Ordre compte : arrangement A(4,2) — chef puis secrétaire</text>

            <rect class="frame-line" x="160" y="20" width="160" height="28" rx="6" fill="none"></rect>
            <text class="tick-label" x="240" y="38" text-anchor="middle">Groupe : A, B, C, D</text>

            <line class="curve-main" x1="240" y1="48" x2="80" y2="86"></line>
            <line class="curve-main" x1="240" y1="48" x2="192" y2="86"></line>
            <line class="curve-main" x1="240" y1="48" x2="304" y2="86"></line>
            <line class="curve-main" x1="240" y1="48" x2="416" y2="86"></line>

            <rect class="frame-line" x="40" y="86" width="80" height="26" rx="5" fill="none"></rect>
            <text class="annotation-label" x="80" y="103" text-anchor="middle">Chef = A</text>
            <rect class="frame-line" x="152" y="86" width="80" height="26" rx="5" fill="none"></rect>
            <text class="annotation-label" x="192" y="103" text-anchor="middle">Chef = B</text>
            <rect class="frame-line" x="264" y="86" width="80" height="26" rx="5" fill="none"></rect>
            <text class="annotation-label" x="304" y="103" text-anchor="middle">Chef = C</text>
            <rect class="frame-line" x="376" y="86" width="80" height="26" rx="5" fill="none"></rect>
            <text class="annotation-label" x="416" y="103" text-anchor="middle">Chef = D</text>

            <line class="guide-line" x1="80" y1="112" x2="44" y2="148"></line>
            <line class="guide-line" x1="80" y1="112" x2="80" y2="148"></line>
            <line class="guide-line" x1="80" y1="112" x2="116" y2="148"></line>
            <line class="guide-line" x1="192" y1="112" x2="156" y2="148"></line>
            <line class="guide-line" x1="192" y1="112" x2="192" y2="148"></line>
            <line class="guide-line" x1="192" y1="112" x2="228" y2="148"></line>
            <line class="guide-line" x1="304" y1="112" x2="268" y2="148"></line>
            <line class="guide-line" x1="304" y1="112" x2="304" y2="148"></line>
            <line class="guide-line" x1="304" y1="112" x2="340" y2="148"></line>
            <line class="guide-line" x1="416" y1="112" x2="380" y2="148"></line>
            <line class="guide-line" x1="416" y1="112" x2="416" y2="148"></line>
            <line class="guide-line" x1="416" y1="112" x2="452" y2="148"></line>

            <rect class="frame-line" x="27" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="44" y="163" text-anchor="middle">A→B</text>
            <rect class="frame-line" x="63" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="80" y="163" text-anchor="middle">A→C</text>
            <rect class="frame-line" x="99" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="116" y="163" text-anchor="middle">A→D</text>

            <rect class="frame-line" x="139" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="156" y="163" text-anchor="middle">B→A</text>
            <rect class="frame-line" x="175" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="192" y="163" text-anchor="middle">B→C</text>
            <rect class="frame-line" x="211" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="228" y="163" text-anchor="middle">B→D</text>

            <rect class="frame-line" x="251" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="268" y="163" text-anchor="middle">C→A</text>
            <rect class="frame-line" x="287" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="304" y="163" text-anchor="middle">C→B</text>
            <rect class="frame-line" x="323" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="340" y="163" text-anchor="middle">C→D</text>

            <rect class="frame-line" x="363" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="380" y="163" text-anchor="middle">D→A</text>
            <rect class="frame-line" x="399" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="416" y="163" text-anchor="middle">D→B</text>
            <rect class="frame-line" x="435" y="148" width="34" height="22" rx="4" fill="none"></rect>
            <text class="tick-label" x="452" y="163" text-anchor="middle">D→C</text>

            <text class="label-soft" x="240" y="182" text-anchor="middle">12 issues ordonnées (4 × 3)</text>

            <!-- panneau 2 : combinaison (ordre ne compte pas) -->
            <text class="annotation-label" x="240" y="204" text-anchor="middle">Ordre ne compte pas : combinaison C(4,2) — un duo, sans rôle</text>

            <rect class="frame-line" x="8" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="40" y="243" text-anchor="middle">{A,B}</text>
            <rect class="frame-line" x="88" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="120" y="243" text-anchor="middle">{A,C}</text>
            <rect class="frame-line" x="168" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="200" y="243" text-anchor="middle">{A,D}</text>
            <rect class="frame-line" x="248" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="280" y="243" text-anchor="middle">{B,C}</text>
            <rect class="frame-line" x="328" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="360" y="243" text-anchor="middle">{B,D}</text>
            <rect class="frame-line" x="408" y="224" width="64" height="30" rx="6" fill="none"></rect>
            <text class="tick-label" x="440" y="243" text-anchor="middle">{C,D}</text>

            <line class="focus-line" x1="44" y1="170" x2="40" y2="224"></line>
            <line class="focus-line" x1="156" y1="170" x2="40" y2="224"></line>
            <circle class="plot-point-alt" cx="44" cy="170" r="4"></circle>
            <circle class="plot-point-alt" cx="156" cy="170" r="4"></circle>
            <circle class="plot-point" cx="40" cy="224" r="4"></circle>

            <text class="label-soft" x="240" y="278" text-anchor="middle">6 duos non ordonnés = 12 ÷ 2!</text>
            <text class="label-soft" x="240" y="292" text-anchor="middle">(A→B et B→A se regroupent en {A,B})</text>
          </svg>
        `,
        notes: [
          'Arrangement $A_4^2$ : $4$ choix de chef puis $3$ choix de secrétaire parmi les élèves restants, soit $4\\times3=12$ issues où l\'ordre (qui est chef, qui est secrétaire) compte.',
          'Combinaison $\\binom{4}{2}$ : en oubliant les rôles, $(A,B)$ et $(B,A)$ désignent le même duo $\\{A,B\\}$ — chaque paire non ordonnée regroupe $2!=2$ issues ordonnées de l\'arbre du haut.',
          'Vérification : $\\binom{4}{2}=\\dfrac{A_4^2}{2!}=\\dfrac{12}{2}=6$, ce qui correspond bien aux $6$ duos $\\{A,B\\},\\{A,C\\},\\{A,D\\},\\{B,C\\},\\{B,D\\},\\{C,D\\}$ affichés en bas.'
        ],
        reading: 'En haut, l\'arbre des $12$ façons ordonnées de désigner un chef puis un secrétaire parmi les $4$ élèves du problème du cours. En bas, les mêmes $4$ élèves regroupés en $6$ duos non ordonnés : chaque duo apparaît deux fois dans l\'arbre du haut (une fois par ordre des rôles), d\'où la division par $2!$.',
        caption: 'Exemple du cours (problème : groupe de 4 élèves, tâche « chef et secrétaire ») : $A_4^2=4\\times3=12$ façons ordonnées, regroupées en $\\binom{4}{2}=\\frac{12}{2!}=6$ duos non ordonnés.'
      },
      recap: [
        'Question clé : <strong>l\'ordre compte-t-il ?</strong> Oui → arrangement ($A_n^k$). Non → combinaison ($\\binom{n}{k}$).',
        '$\\binom{n}{k} = \\binom{n}{n-k}$ : choisir $k$ éléments revient à exclure $n-k$ éléments.',
        'Règle du produit (principe multiplicatif) : si une opération comporte $p$ étapes avec $n_1, n_2, \\ldots, n_p$ choix, le total est $n_1 \\times n_2 \\times \\cdots \\times n_p$.',
        'Triangle de Pascal : $\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}$. Chaque coefficient est la somme des deux au-dessus.'
      ],
      piege: 'Ne pas confondre arrangements et combinaisons. Former un comité (ordre non important) → combinaisons. Classer des coureurs (ordre important) → arrangements.'
    },
    quiz: [
      { q: '$\\binom{5}{2}=$ ?', options: ['$20$', '$10$', '$5$', '$2$'], answer: 1, correction: '$\\binom{5}{2}=\\frac{5!}{2!3!}=\\frac{5\\times4}{2}=10$.' },
      { q: 'Combien de mots de 3 lettres (distinctes) peut-on former avec les 26 lettres de l\'alphabet ?', options: ['$17576$', '$15600$', '$78$', '$1716$'], answer: 1, correction: '$A_{26}^3=26\\times25\\times24=15600$.' },
      { q: 'Pour choisir $3$ personnes parmi $10$ pour un comité (sans rôle attribué), un élève calcule $10\\times9\\times8=720$. Quelle est son erreur ?', options: ['Il a compté les ARRANGEMENTS ($A_{10}^3=720$) ; pour un comité (ordre non important), il faut diviser par $3!=6$ : $\\binom{10}{3}=120$', 'L\'élève a raison : $10\\times9\\times8=720$', 'Il aurait dû calculer $10\\times9\\times8\\times7$ (4 étapes pour 3 personnes)', 'La bonne formule est $3!=6$'], answer: 0, correction: '$10\\times9\\times8 = A_{10}^3 = 720$ compte les arrangements ordonnés : le groupe $\\{Alice, Bob, Claire\\}$ est compté $3!=6$ fois. Comme dans un comité l\'ordre ne compte pas, on divise par $6$ : $\\binom{10}{3}=720/6=120$. Règle clé : ordre important → arrangement ; ordre non important → combinaison ($\\div k!$).' },
      { q: '$\\binom{100}{98}$ vaut :', options: ['$\\dfrac{100!}{98!}$', '$4950$', '$100 \\times 99 = 9900$', '$\\dfrac{100!}{98! \\times 2!} = 4950$'], answer: 3, correction: 'Par symétrie : $\\binom{100}{98} = \\binom{100}{2} = \\dfrac{100 \\times 99}{2} = 4950$. Choisir $98$ éléments parmi $100$, c\'est exclure $2$ éléments parmi $100$.' },
      { q: 'Combien de mots de passe de $4$ chiffres (avec répétition possible) peut-on former ?', options: ['$5040$', '$10\\,000$', '$10^{10}$', '$\\binom{10}{4} = 210$'], answer: 1, correction: 'Avec répétition : chaque position a $10$ choix (de $0$ à $9$). Par le principe multiplicatif : $10^4 = 10\\,000$. La combinaison $\\binom{10}{4}$ ne s\'applique pas car la répétition est autorisée et l\'ordre compte.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Une classe de', elem: 'élèves', action: 'former une équipe de', unite: 'élèves pour un projet scientifique' },
          { intro: 'Un panier contient', elem: 'fruits différents', action: 'choisir', unite: 'fruits pour une salade' },
          { intro: 'Un club sportif compte', elem: 'joueurs', action: 'sélectionner', unite: 'titulaires pour un match' },
          { intro: 'Un jury doit être composé de', elem: 'candidats potentiels', action: 'retenir', unite: 'membres' }
        ]);
        const n = rand(8, 15), k = rand(3, 5);
        let num = 1, denom = 1;
        for (let i = 0; i < k; i++) { num *= (n - i); denom *= (i + 1); }
        const result = num / denom;
        return {
          statement: `${ctx.intro} $${n}$ ${ctx.elem}. On souhaite ${ctx.action} $${k}$ ${ctx.unite} (l'ordre ne compte pas). Combien de choix possibles ?`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `L'ordre ne compte pas → combinaison. $\\binom{${n}}{${k}} = \\dfrac{${Array.from({length:k},(_,i)=>n-i).join(' \\times ')}}{${k}!}$.`,
          solution: [
            `L'ordre ne compte pas : c'est une combinaison.`,
            `$\\binom{${n}}{${k}} = \\dfrac{${Array.from({length:k},(_,i)=>n-i).join(' \\times ')}}{${k}!} = \\dfrac{${num}}{${denom}}$`,
            `$\\binom{${n}}{${k}} = ${result}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une classe de $20$ élèves doit former un groupe de $4$ élèves pour un projet, puis désigner parmi eux un chef de projet et un secrétaire.',
      tasks: [
        'Combien de groupes de $4$ élèves peut-on former ?',
        'Pour un groupe donné, combien de façons de désigner chef et secrétaire ?',
        'Combien de façons au total (groupe + rôles) ?'
      ],
      solutions: [
        '$\\binom{20}{4}=\\frac{20\\times19\\times18\\times17}{4!}=\\frac{116280}{24}=4845$.',
        '$A_4^2=4\\times3=12$ façons.',
        '$4845\\times12=58140$ façons.'
      ],
      finalAnswer: '$4845$ groupes ; $12$ attributions de rôles ; $58140$ façons au total.'
    },

    evaluation: {
      title: 'Évaluation — Dénombrement et combinatoire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\binom{8}{3}$.',
          type: 'numeric',
          answer: 56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\binom{8}{3} = \\dfrac{8!}{3! \\times 5!} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\dfrac{336}{6} = 56$.'
        },
        {
          statement: 'Un code est formé de $4$ chiffres distincts parmi $\\{0;1;2;\\ldots;9\\}$. Combien de codes peut-on former ?',
          type: 'numeric',
          answer: 5040,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'ordre compte (code) et les chiffres sont distincts : c\'est un arrangement. $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$.'
        },
        {
          statement: 'Quelle est la valeur de $\\binom{n}{0}$ pour tout entier $n \\geq 0$ ?',
          type: 'multiple-choice',
          options: ['$0$', '$1$', '$n$', '$n!$'],
          answer: 1,
          points: 2,
          correction: '$\\binom{n}{0} = \\dfrac{n!}{0! \\times n!} = \\dfrac{1}{1} = 1$. Il n\'y a qu\'une seule façon de choisir $0$ élément : ne rien prendre.'
        },
        {
          statement: 'Combien de façons y a-t-il de répartir $12$ élèves en un groupe de $5$ et un groupe de $7$ ?',
          type: 'numeric',
          answer: 792,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Choisir le groupe de $5$ détermine automatiquement le groupe de $7$. Donc $\\binom{12}{5} = \\dfrac{12!}{5! \\times 7!} = \\dfrac{12 \\times 11 \\times 10 \\times 9 \\times 8}{120} = \\dfrac{95040}{120} = 792$.'
        },
        {
          statement: 'Lequel est un arrangement et non une combinaison ?',
          type: 'multiple-choice',
          options: ['Choisir $3$ fruits dans un panier de $10$', 'Constituer un podium (1er, 2e, 3e) parmi $8$ coureurs', 'Former un comité de $4$ membres parmi $15$', 'Tirer $5$ boules dans une urne'],
          answer: 1,
          points: 2,
          correction: 'Le podium attribue des rangs (1er, 2e, 3e) : l\'ordre compte, c\'est un arrangement. Les autres choix (fruits, comité, boules) ne tiennent pas compte de l\'ordre : ce sont des combinaisons.'
        }
      ]
    }
  });
