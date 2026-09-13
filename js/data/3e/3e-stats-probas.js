/* =========================================================
   Spark Learning – data/3e/3e-stats-probas.js
   Module : Statistiques et probabilités (approfondissement) (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-stats-probas',
    level: 1, subject: 'maths',
    icon: '📋',
    title: 'Statistiques et probabilités (approfondissement)',
    subtitle: 'Fréquences, tableaux croisés, probabilités conditionnelles intro',
    keywords: ['Tableau croisé', 'Fréquence conditionnelle', 'Probabilité', 'Effectif', 'Proportion'],
    physics: false,
    cours: {
      /* LE SIGNE POURCENT EST ECHAPPE EN `\\%` (2026-09-13). Hors des
         delimiteurs mathematiques, un % brut ouvre un COMMENTAIRE LaTeX : il
         avale la fin de la ligne, et c'est precisement ce qui a casse la
         compilation d'un ouvrage entier ce meme jour. Cette intro en compte
         cinq, tous echappes. En chaine JS il faut ecrire `\\%` pour produire
         le `\%` que LaTeX attend — un simple `\%` serait avale par JS. */
      intro: 'Un test de dépistage est annoncé comme « fiable à $99$ \\% ». Tu le passes, il ressort positif.<br/><br/>' +
        '<strong>Quelle est la probabilité que tu sois réellement malade ?</strong><br/><br/>' +
        'La réponse qui vient spontanément est $99$ \\%. Elle est fausse, et de très loin. Prends $10\\,000$ personnes, dans une population où la maladie touche une personne sur mille.<br/><br/>' +
        'Il y a donc $10$ malades, dont le test en détecte $10$. Et il y a $9\\,990$ personnes saines, dont le test se trompe sur $1$ \\% : cela fait environ $100$ personnes saines déclarées positives.<br/><br/>' +
        'Au total, $110$ personnes reçoivent un résultat positif, et seulement $10$ d\'entre elles sont malades. Ta probabilité d\'être malade est donc d\'environ $\\dfrac{10}{110}$, soit <strong>moins de $10$ \\%</strong>.<br/><br/>' +
        'Où était le piège ? Dans le mot « parmi ». Le $99$ \\% annoncé se lit <strong>parmi les malades</strong> : presque tous sont détectés. Ce que tu veux savoir, c\'est une proportion <strong>parmi les testés positifs</strong> — une autre sous-population, et donc un autre nombre. Intervertis ces deux lectures, et un médecin se trompe de diagnostic, un jury condamne un innocent.<br/><br/>' +
        'Un <strong>tableau croisé</strong> (ou de contingence) sert exactement à démêler cela : il analyse deux caractères d\'une même population en même temps et révèle leurs dépendances. La clé est de distinguer deux types de fréquences.<br/><br/>' +
        'La <strong>fréquence globale</strong> : effectif de la case / total général — répond à « quelle proportion dans toute la population ? ».<br/>' +
        'La <strong>fréquence conditionnelle</strong> : effectif / total de la sous-population — répond à « parmi les personnes de type $B$, quelle proportion est de type $A$ ? ».<br/><br/>' +
        'Deux caractères sont <strong>indépendants</strong> si la fréquence conditionnelle est égale à la fréquence globale : connaître l\'un ne donne aucune information sur l\'autre.<br/><br/>' +
        'Cette notion est fondamentale en <strong>statistique et médecine</strong> (tests cliniques, études épidémiologiques).',
      definitions: [
        { term: 'Tableau croisé', def: 'Tableau à double entrée qui croise <strong>deux caractères</strong> d\'une population. Les lignes représentent un caractère, les colonnes un autre, et chaque case contient un effectif.' },
        { term: 'Fréquence globale', def: 'Proportion d\'une case par rapport au <strong>total général</strong> : $f = \\dfrac{n_{ij}}{N}$. Elle répond à « quelle part de la population totale ? ».' },
        { term: 'Fréquence conditionnelle', def: 'Proportion d\'une case par rapport au <strong>total d\'une sous-population</strong> : $f_{A|B} = \\dfrac{n(A \\cap B)}{n(B)}$. Elle répond à « parmi les $B$, quelle part est $A$ ? ».' },
        { term: 'Indépendance', def: 'Deux caractères sont <strong>indépendants</strong> si connaître l\'un ne change pas la probabilité de l\'autre : $P(A|B) = P(A)$, soit $P(A \\cap B) = P(A) \\times P(B)$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Lire le tableau</strong> — les lignes représentent un caractère, les colonnes un autre. Les <strong>marges</strong> donnent les totaux (lignes et colonnes).',
          '<strong>Étape 2 : Fréquence globale</strong> : $f = \\dfrac{\\text{effectif de la case}}{\\text{effectif total}}$.<br/><em>Question :</em> « Quelle proportion dans TOUTE la population ? »',
          '<strong>Étape 3 : Fréquence conditionnelle</strong> : $f_{A|B} = \\dfrac{\\text{effectif}(A \\cap B)}{\\text{effectif de }B}$.<br/><em>Question :</em> « Parmi les $B$, quelle proportion est aussi $A$ ? »'
        ]
      },
      example: {
        statement: 'Dans un collège de $200$ élèves, on recense $80$ sportifs et $60$ musiciens, dont $25$ qui pratiquent les deux. Calculer les fréquences globale et conditionnelle de la musique parmi les sportifs.',
        steps: [
          '<strong>Fréquence globale</strong> des musiciens-sportifs : $f = \\dfrac{25}{200} = 0{,}125 = 12{,}5\\%$ de la population totale.',
          '<strong>Fréquence conditionnelle</strong> de la musique parmi les sportifs : $f_{M|S} = \\dfrac{25}{80} = 0{,}3125 = 31{,}25\\%$.',
          '<strong>Interprétation</strong> : dans la population globale, $12{,}5\\%$ font sport ET musique. Mais parmi les sportifs seuls, $31{,}25\\%$ font aussi de la musique — la sous-population de référence change tout.'
        ],
        answer: 'Fréquence globale $= 0{,}125$ ; fréquence conditionnelle $f_{M|S} = 0{,}3125$.'
      },
      formulas: [
        'Fréquence globale : $f = \\dfrac{n_{ij}}{N}$',
        'Fréquence en ligne : $f_{i|j} = \\dfrac{n_{ij}}{n_{j}}$',
        'Probabilité : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ (introduction)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Diagramme de Venn',
        title: 'Sportifs et musiciens parmi 200 élèves',
        description: 'Représentation du tableau croisé de l\'exemple : $80$ sportifs, $60$ musiciens, dont $25$ pratiquent les deux activités, sur un total de $200$ élèves du collège.',
        svg: `
          <svg viewBox="0 0 480 350" role="img" aria-labelledby="venn3e-title venn3e-desc">
            <title id="venn3e-title">Diagramme de Venn des sportifs et des musiciens</title>
            <desc id="venn3e-desc">Deux cercles qui se chevauchent representant les sportifs et les musiciens parmi 200 eleves, avec 55 eleves uniquement sportifs, 35 uniquement musiciens, 25 dans les deux a la fois, et 85 en dehors des deux groupes.</desc>
            <rect class="frame-line" x="40" y="40" width="400" height="270" rx="12" fill="none"></rect>
            <circle class="axis" cx="195" cy="175" r="85" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></circle>
            <circle class="axis" cx="295" cy="175" r="85" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></circle>
            <text class="label" x="195" y="65" text-anchor="middle">Sportifs</text>
            <text class="label" x="295" y="65" text-anchor="middle">Musiciens</text>
            <text class="tick-label" x="60" y="60" text-anchor="start">N = 200 élèves</text>
            <text class="annotation-label" x="150" y="180" text-anchor="middle">55</text>
            <text class="annotation-label" x="245" y="180" text-anchor="middle">25</text>
            <text class="annotation-label" x="340" y="180" text-anchor="middle">35</text>
            <text class="annotation-label" x="240" y="285" text-anchor="middle">85</text>
            <text class="tick-label" x="240" y="302" text-anchor="middle">aucun des deux</text>
          </svg>
        `,
        notes: [
          'Zone commune aux deux cercles : $25$ élèves pratiquent à la fois un sport et un instrument — comptés une seule fois même s\'ils appartiennent aux deux groupes.',
          'Zone « Sportifs » seule : $80 - 25 = 55$ élèves. Zone « Musiciens » seule : $60 - 25 = 35$ élèves — chaque effectif de départ moins l\'intersection commune.',
          'En dehors des deux cercles : $200 - (55 + 35 + 25) = 85$ élèves ne pratiquent ni sport ni musique — c\'est la case « Non sportif / Non musicien » du tableau croisé.'
        ],
        reading: 'Chaque nombre correspond à une case du tableau croisé de l\'exemple : les deux cercles se chevauchent pour représenter les $25$ élèves comptés dans les deux catégories à la fois. En additionnant les quatre zones ($55 + 35 + 25 + 85$), on retrouve bien le total de $200$ élèves.',
        caption: 'Diagramme de Venn équivalent au tableau croisé « Sportifs / Musiciens » (200 élèves, dont 25 dans les deux catégories).'
      },
      recap: [
        'La <strong>fréquence globale</strong> divise par le total général $N$ ; la <strong>fréquence conditionnelle</strong> divise par le total de la sous-population.',
        'Pour l\'union : $|A \\cup B| = |A| + |B| - |A \\cap B|$ — ne pas oublier de <strong>soustraire l\'intersection</strong>.',
        '$P(A \\cap B) = P(A|B) \\times P(B)$ — la formule de la probabilité de l\'intersection.',
        'Deux caractères sont <strong>indépendants</strong> si $P(A|B) = P(A)$ : savoir que quelqu\'un est $B$ ne change pas la probabilité d\'être $A$.'
      ],
      piege: 'Piège : la fréquence conditionnelle dépend de la population de référence (ligne ou colonne). $\\frac{n_{ij}}{N}$ et $\\frac{n_{ij}}{n_j}$ ne donnent pas le même résultat. Toujours préciser « parmi les… ».'
    },
    quiz: [
      {
        q: 'Dans un tableau : $120$ élèves total. $72$ font du sport, dont $40$ filles. Si on tire une élève au hasard parmi les $50$ filles totales, quelle est la probabilité qu\'elle fasse du sport ?',
        options: ['$\\frac{40}{120}$', '$\\frac{40}{72}$', '$\\frac{40}{50}$', '$\\frac{50}{120}$'],
        answer: 2,
        correction: 'On cherche la probabilité conditionnelle « faire du sport PARMI les filles ». Référence : $50$ filles. $P(\\text{sport}|\\text{fille}) = \\frac{40}{50} = 0{,}8$.'
      },
      {
        q: 'Sur $200$ personnes : $80$ aiment le café, $60$ aiment le thé, $20$ aiment les deux. Combien n\'aiment ni l\'un ni l\'autre ?',
        options: ['$40$', '$60$', '$80$', '$100$'],
        answer: 2,
        correction: '$|C \\cup T| = 80 + 60 - 20 = 120$. Ni l\'un ni l\'autre : $200 - 120 = 80$.'
      },
      {
        q: 'Sur $100$ élèves, $60$ ont un animal de compagnie $(A)$ et $40$ pratiquent un sport $(S)$. Parmi ceux qui ont un animal, $30$ pratiquent aussi le sport. Quelle est $P(A \\cap S)$ ?',
        options: ['$\\dfrac{30}{100}$', '$\\dfrac{30}{60}$', '$\\dfrac{30}{40}$', '$\\dfrac{60+40}{100}$'],
        answer: 0,
        correction: '$P(A \\cap S) = \\dfrac{30}{100} = 0{,}3$ : c\'est la fréquence globale des élèves ayant un animal ET pratiquant un sport (référence : les $100$ élèves). $\\dfrac{30}{60}$ serait $P(S|A)$ (sport parmi les propriétaires), et $\\dfrac{30}{40}$ serait $P(A|S)$ (animal parmi les sportifs). Bien distinguer l\'intersection de la probabilité conditionnelle.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne $n(A)$ et $n(A \cap B)$,
         calcule $n(A \cap B) / n(A)$ » — habillé de six décors tirés par pick()
         (entreprise, hôpital, festival, élevage, lycée, bibliothèque). Mesure à
         60 tirages : 6 moules d'énoncé, mais **1 seule tâche distincte**. Le
         professeur qui imprimait la banque obtenait dix-sept fois la même
         division sous six habillages.

         Le défaut était d'autant plus gênant ici que l'introduction du chapitre
         est tout entière bâtie sur la CONFUSION entre deux fréquences — « parmi
         les malades » contre « parmi les testés positifs » — et que l'effectif
         total, donné dans chaque énoncé, ne servait JAMAIS : la banque
         entraînait donc à ignorer précisément la donnée dont l'erreur du
         chapitre dépend. L'évaluation, elle, exige la fréquence globale, la
         probabilité d'une réunion et le décompte d'un tableau croisé — trois
         tâches que la banque ne préparait pas.

         APRÈS : sept familles de tâches, dont deux volontairement posées sur la
         MÊME situation chiffrée pour rendre le contraste visible.
           - 'conditionnelle' : la tâche d'origine, conservée ;
           - 'globale'        : la même situation, mais rapportée au total. Les
                                deux énoncés sont presque identiques, seul le
                                mot « parmi » change — c'est le cœur du
                                chapitre ;
           - 'manquante'      : compléter un tableau croisé par les marges, ce
                                que l'évaluation demande et que rien ne
                                travaillait ;
           - 'proba'          : probabilité simple d'un tirage équiprobable ;
           - 'reunion'        : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, la
                                formule dont l'oubli du terme d'intersection est
                                l'erreur la plus fréquente ;
           - 'contraire'      : $P(\bar{A}) = 1 - P(A)$, le raccourci qui évite
                                un long décompte ;
           - 'dependance'     : comparer deux fréquences conditionnelles pour
                                décider s'il y a lien, réponse codée 1/0. C'est
                                la seule tâche qui demande de CONCLURE et non de
                                calculer.

         LES EFFECTIFS SONT CONSTRUITS À PARTIR DE LA RÉPONSE : on tire d'abord
         la fréquence voulue sous forme de fraction simple, puis on en déduit
         les effectifs entiers. L'ancienne version faisait l'inverse
         (`Math.round(nA * pAB)`), si bien que la fréquence annoncée n'était pas
         tout à fait le quotient affiché — un écart caché par la tolérance, mais
         qui rendait le corrigé faux au centième près. */
      generate() {
        const tache = pick(['conditionnelle', 'globale', 'manquante', 'proba',
                            'reunion', 'contraire', 'dependance']);

        /* Situations partagées par 'conditionnelle' et 'globale'. Chaque
           contexte porte son nom de population ET ses formes fléchies :
           `groupeA` avec l'article défini (« les télétravailleurs ») pour la
           question, `desA` avec l'article contracté (« des télétravailleurs »)
           pour la tournure « $50\%$ des … ». Une première version ne stockait
           que la forme en « les » et écrivait « $50\%$ de les membres du club
           théâtre » : l'élision ne se devine pas depuis le mot, elle se
           transporte avec lui. */
        const SITUATIONS = [
          { lieu: 'Dans une <strong>entreprise</strong>', pop: 'employés', a: 'pratiquent le <strong>télétravail</strong>', groupeA: 'les télétravailleurs', desA: 'des télétravailleurs', b: 'viennent aussi au bureau à <strong>vélo</strong>' },
          { lieu: 'Dans un <strong>lycée</strong>', pop: 'élèves', a: 'sont inscrits au <strong>club théâtre</strong>', groupeA: 'les membres du club théâtre', desA: 'des membres du club théâtre', b: 'pratiquent aussi la <strong>danse</strong>' },
          { lieu: 'Dans une <strong>bibliothèque</strong>', pop: 'adhérents', a: 'empruntent des <strong>bandes dessinées</strong>', groupeA: 'les emprunteurs de bandes dessinées', desA: 'des emprunteurs de bandes dessinées', b: 'empruntent aussi des <strong>romans</strong>' },
          { lieu: 'Lors d\'un <strong>festival</strong>', pop: 'spectateurs', a: 'ont un <strong>pass VIP</strong>', groupeA: 'les détenteurs du pass VIP', desA: 'des détenteurs du pass VIP', b: 'assistent aussi aux <strong>ateliers</strong>' }
        ];

        /* Fractions qui tombent juste au centième, écrites sous forme réduite :
           la réponse est donc décidée AVANT les effectifs. */
        const FRACTIONS = [
          { num: 1, den: 4, val: 0.25 }, { num: 1, den: 2, val: 0.5 },
          { num: 3, den: 4, val: 0.75 }, { num: 2, den: 5, val: 0.4 },
          { num: 3, den: 5, val: 0.6 },  { num: 1, den: 5, val: 0.2 }
        ];

        if (tache === 'conditionnelle') {
          const s = pick(SITUATIONS), f = pick(FRACTIONS);
          const k = rand(8, 20);
          const nA = f.den * k, nAB = f.num * k;
          const total = nA + rand(4, 12) * 10;          // total > nA, sans lien avec f
          return {
            statement: `${s.lieu} de $${total}$ ${s.pop}, $${nA}$ ${s.a} $(A)$, dont $${nAB}$ ${s.b} $(B)$.<br/><br/>` +
              `Quelle est la <strong>fréquence conditionnelle</strong> de $B$ <strong>parmi</strong> ${s.groupeA} ?<br/><br/>` +
              `Donne le résultat sous forme décimale.`,
            answer: f.val, tolerance: 0.01, unit: '',
            hint: `Le mot <strong>parmi</strong> fixe la référence : ici on ne compare pas au total, mais au seul groupe $A$.<br/><br/>$f_{B|A} = \\dfrac{n(A \\cap B)}{n(A)}$.`,
            solution: [
              `Le mot « <strong>parmi</strong> » désigne la population de référence. Ici c'est le groupe $A$, et non l'ensemble des $${total}$ ${s.pop} : le total ne sert donc pas dans ce calcul.`,
              `$f_{B|A} = \\dfrac{n(A \\cap B)}{n(A)} = \\dfrac{${nAB}}{${nA}} = ${fr(f.val)}$.`,
              `Autrement dit, $${Math.round(f.val * 100)}\\%$ ${s.desA} sont aussi dans $B$.<br/><br/>Contrôle : une fréquence conditionnelle est toujours comprise entre $0$ et $1$, puisque $n(A \\cap B)$ ne peut pas dépasser $n(A)$.`
            ]
          };
        }

        if (tache === 'globale') {
          /* LA MÊME SITUATION que 'conditionnelle', volontairement : seul le
             mot « parmi » disparaît de la question, et la référence bascule du
             groupe au total. C'est exactement l'inversion que l'introduction du
             chapitre met en scène avec le test de dépistage. */
          /* nA doit tenir STRICTEMENT entre nAB et total : un groupe $A$ plus
             nombreux que la population entière rendrait l'énoncé absurde. On
             prend donc la marge disponible et on en tire une fraction, au lieu
             d'ajouter un incrément arbitraire qui pouvait la dépasser. */
          const s = pick(SITUATIONS), f = pick(FRACTIONS);
          const k = rand(5, 15);
          const total = f.den * k * 2;                  // total multiple de den
          const nAB = f.num * k * 2;
          const marge = total - nAB;
          const nA = nAB + rand(Math.max(1, Math.floor(marge * 0.2)), Math.max(2, Math.floor(marge * 0.7)));
          return {
            statement: `${s.lieu} de $${total}$ ${s.pop}, $${nA}$ ${s.a} $(A)$, dont $${nAB}$ ${s.b} $(B)$.<br/><br/>` +
              `Quelle est la <strong>fréquence globale</strong> des ${s.pop} qui sont <strong>à la fois</strong> dans $A$ et dans $B$ ?<br/><br/>` +
              `Donne le résultat sous forme décimale.`,
            answer: f.val, tolerance: 0.01, unit: '',
            hint: `Cette fois, aucune sous-population n'est désignée : la question porte sur <strong>l'ensemble</strong> des ${s.pop}.<br/><br/>$f = \\dfrac{n(A \\cap B)}{N}$, où $N$ est l'effectif total.`,
            solution: [
              `Aucun « parmi » dans la question : la référence est l'effectif <strong>total</strong>, $${total}$ ${s.pop}. C'est ce qui distingue une fréquence globale d'une fréquence conditionnelle, dont la référence serait $${nA}$.`,
              `$f = \\dfrac{n(A \\cap B)}{N} = \\dfrac{${nAB}}{${total}} = ${fr(f.val)}$.`,
              `Donc $${Math.round(f.val * 100)}\\%$ de l'ensemble des ${s.pop} sont dans les deux groupes.<br/><br/>Contrôle : la fréquence globale est toujours <strong>plus petite</strong> que la fréquence conditionnelle correspondante, car son dénominateur est plus grand. Ici $\\dfrac{${nAB}}{${total}}$ contre $\\dfrac{${nAB}}{${nA}}$.`
            ]
          };
        }

        if (tache === 'manquante') {
          /* COMPLÉTER UN TABLEAU CROISÉ par les marges. L'évaluation ouvre
             là-dessus et rien ne l'entraînait. Les quatre cases sont tirées en
             premier, les marges en découlent : aucune incohérence possible. */
          const aa = rand(12, 40), ab = rand(10, 35);
          const ba = rand(8, 30), bb = rand(14, 45);
          const totalLigne1 = aa + ab, totalLigne2 = ba + bb;
          const totalCol1 = aa + ba, total = totalLigne1 + totalLigne2;
          /* `l2Combien` porte la forme élidée de la seconde ligne (« d'externes »
             et non « de externes ») : l'élision appartient au mot, elle n'est
             pas déductible de sa première lettre par une règle qu'on écrirait
             ici. */
          const ctx = pick([
            { pop: 'élèves', l1: 'demi-pensionnaires', l2: 'externes', l2Combien: 'd\'externes' , c1: 'pratiquent un sport en club' },
            { pop: 'salariés', l1: 'salariés à temps plein', l2: 'salariés à temps partiel', l2Combien: 'de salariés à temps partiel', c1: 'utilisent les transports en commun' },
            { pop: 'visiteurs', l1: 'visiteurs venus seuls', l2: 'visiteurs venus en groupe', l2Combien: 'de visiteurs venus en groupe', c1: 'ont acheté le catalogue' }
          ]);
          return {
            statement: `Une enquête porte sur $${total}$ ${ctx.pop}. Un tableau croisé en résume les résultats, mais une case a été effacée.<br/><br/>` +
              `Les ${ctx.l1} sont au nombre de $${totalLigne1}$, dont $${aa}$ ${ctx.c1}.<br/><br/>` +
              `Au total, $${totalCol1}$ ${ctx.pop} ${ctx.c1}.<br/><br/>` +
              `Combien ${ctx.l2Combien} ${ctx.c1} ?`,
            answer: ba, tolerance: 0, unit: '',
            hint: `Dans un tableau croisé, chaque <strong>marge</strong> est la somme de sa ligne ou de sa colonne.<br/><br/>La colonne « ${ctx.c1} » se partage entre les ${ctx.l1} et les ${ctx.l2} : sa marge vaut $${totalCol1}$, et tu en connais déjà une part.`,
            solution: [
              `Une case manquante d'un tableau croisé se retrouve toujours par une <strong>marge</strong> : la somme d'une colonne ou d'une ligne est connue, il suffit de soustraire ce qu'on a déjà.`,
              `La colonne « ${ctx.c1} » totalise $${totalCol1}$ ${ctx.pop}, dont $${aa}$ sont ${ctx.l1}. Les ${ctx.l2} concernés sont donc $${totalCol1} - ${aa} = ${ba}$.`,
              `La case cherchée vaut <strong>$${ba}$</strong>.<br/><br/>Contrôle : la donnée « $${totalLigne1}$ ${ctx.l1} » n'a pas servi ici — elle est fournie pour reconstituer le tableau entier, pas pour cette case. Repérer les données inutiles fait partie du travail.`
            ]
          };
        }

        if (tache === 'proba') {
          /* PROBABILITÉ SIMPLE d'un tirage équiprobable. La banque n'en
             proposait aucune, alors que le mot « probabilité » est dans le
             titre du chapitre. La réponse est une fraction exacte. */
          /* `indiscernables` porte son accord (« toutes » pour les boules,
             « tous » pour les jetons et les stylos) et `autres` nomme ce qui
             distingue les catégories (couleur, forme). Une première version
             écrivait « toutes indiscernables » pour des jetons et parlait des
             « autres couleurs » pour des formes : l'accord et le mot juste se
             transportent avec le contexte, ils ne se déduisent pas. */
          const cas = pick([
            { d: 'Une urne contient', objets: [{ n: rand(3, 8), nom: 'boules rouges' }, { n: rand(4, 9), nom: 'boules vertes' }, { n: rand(2, 6), nom: 'boules bleues' }], indiscernables: 'toutes indiscernables au toucher', tire: 'On tire une boule au hasard.', cible: 0, q: 'boule rouge', autres: 'les boules des autres couleurs' },
            { d: 'Un sac contient', objets: [{ n: rand(5, 12), nom: 'jetons carrés' }, { n: rand(3, 8), nom: 'jetons ronds' }, { n: rand(2, 7), nom: 'jetons triangulaires' }], indiscernables: 'tous indiscernables au toucher', tire: 'On tire un jeton au hasard.', cible: 1, q: 'jeton rond', autres: 'les jetons des autres formes' },
            { d: 'Une boîte contient', objets: [{ n: rand(4, 10), nom: 'stylos bleus' }, { n: rand(3, 9), nom: 'stylos noirs' }, { n: rand(2, 6), nom: 'stylos verts' }], indiscernables: 'tous identiques au toucher', tire: 'On tire un stylo au hasard.', cible: 2, q: 'stylo vert', autres: 'les stylos des autres couleurs' }
          ]);
          const totalP = cas.objets.reduce((s, o) => s + o.n, 0);
          const fav = cas.objets[cas.cible].n;
          const p = parseFloat((fav / totalP).toFixed(3));
          return {
            statement: `${cas.d} ${cas.objets.map(o => `$${o.n}$ ${o.nom}`).join(', ')}, ${cas.indiscernables}.<br/><br/>` +
              `${cas.tire}<br/><br/>` +
              `Quelle est la <strong>probabilité</strong> d'obtenir un ${cas.q} ? Donne le résultat arrondi au millième.`,
            answer: p, tolerance: 0.002, unit: '',
            hint: `Dans une situation d'<strong>équiprobabilité</strong>, chaque objet a la même chance d'être tiré.<br/><br/>$P = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$ : commence par compter le total.`,
            solution: [
              `Tous les objets étant indiscernables, chacun a la même chance d'être tiré : on est en situation d'<strong>équiprobabilité</strong>, et la probabilité se lit comme un simple quotient d'effectifs.`,
              `Cas possibles : $${cas.objets.map(o => o.n).join(' + ')} = ${totalP}$. Cas favorables : $${fav}$.`,
              `$P = \\dfrac{${fav}}{${totalP}} \\approx ${fr(p, 3)}$.<br/><br/>Contrôle : une probabilité tient toujours entre $0$ et $1$, et celle-ci est d'autant plus petite que ${cas.autres} sont nombreux.`
            ]
          };
        }

        if (tache === 'reunion') {
          /* LA RÉUNION. L'erreur classique — additionner sans retrancher
             l'intersection — est ici rendue visible : la solution donne le
             résultat faux à côté du bon, et dit pourquoi il est faux. */
          const total = pick([100, 200, 50]);
          const nInter = rand(5, 15);
          const nA = nInter + rand(10, 25);
          const nB = nInter + rand(8, 20);
          const nUnion = nA + nB - nInter;
          const p = parseFloat((nUnion / total).toFixed(3));
          /* `q` porte le VERBE complet de la question, pas seulement son
             complément : « ait acheté un livre », « fasse de l'allemand ». Une
             première version collait un « qu'il ait » unique devant des
             compléments hétérogènes et produisait « qu'il ait de l'allemand ».
             Le verbe appartient au contexte. */
          const ctx = pick([
            { pop: 'clients', a: 'ont acheté un <strong>livre</strong>', b: 'ont acheté un <strong>disque</strong>', deux: 'ont acheté les deux', q: 'ait acheté un livre <strong>ou</strong> un disque' },
            { pop: 'élèves', a: 'font de l\'<strong>allemand</strong>', b: 'font de l\'<strong>espagnol</strong>', deux: 'font les deux langues', q: 'fasse de l\'allemand <strong>ou</strong> de l\'espagnol' },
            { pop: 'spectateurs', a: 'ont vu le <strong>premier film</strong>', b: 'ont vu le <strong>second film</strong>', deux: 'ont vu les deux', q: 'ait vu au moins un des deux films' }
          ]);
          return {
            statement: `Sur $${total}$ ${ctx.pop} interrogés, $${nA}$ ${ctx.a} $(A)$ et $${nB}$ ${ctx.b} $(B)$. Parmi eux, $${nInter}$ ${ctx.deux}.<br/><br/>` +
              `On en choisit un au hasard. Quelle est la <strong>probabilité</strong> qu'il ${ctx.q} ?<br/><br/>` +
              `Donne le résultat arrondi au millième.`,
            answer: p, tolerance: 0.002, unit: '',
            hint: `Additionner $${nA}$ et $${nB}$ compte <strong>deux fois</strong> ceux qui sont dans les deux groupes.<br/><br/>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ : le dernier terme corrige ce double comptage.`,
            solution: [
              `Compter $${nA} + ${nB}$ reviendrait à compter <strong>deux fois</strong> les $${nInter}$ ${ctx.pop} présents dans les deux groupes : une fois dans $A$, une fois dans $B$. Il faut donc les retrancher une fois.`,
              `$n(A \\cup B) = ${nA} + ${nB} - ${nInter} = ${nUnion}$, puis $P(A \\cup B) = \\dfrac{${nUnion}}{${total}} \\approx ${fr(p, 3)}$.`,
              `Contrôle : sans la soustraction on aurait trouvé $${nA + nB}$, soit plus que la réalité. Le nombre cherché doit rester inférieur au total de $${total}$ ${ctx.pop}, et il doit dépasser le plus grand des deux groupes, $${Math.max(nA, nB)}$.`
            ]
          };
        }

        if (tache === 'contraire') {
          /* L'ÉVÉNEMENT CONTRAIRE. C'est le raccourci qui évite un long
             décompte : on tire ici des situations où compter directement les
             cas favorables serait fastidieux. */
          const cas = pick([
            { d: 'On lance un <strong>dé équilibré</strong> à $6$ faces.', ev: 'obtenir un $6$', contraire: 'ne pas obtenir de $6$', fav: 1, tot: 6 },
            { d: 'On tire une carte au hasard dans un jeu de $32$ cartes.', ev: 'obtenir un <strong>as</strong>', contraire: 'ne pas obtenir d\'as', fav: 4, tot: 32 },
            { d: 'On tire une boule dans une urne contenant $20$ boules numérotées de $1$ à $20$.', ev: 'obtenir un multiple de $5$', contraire: 'ne pas obtenir de multiple de $5$', fav: 4, tot: 20 },
            { d: 'On lance deux fois une <strong>pièce équilibrée</strong>.', ev: 'obtenir deux fois pile', contraire: 'ne pas obtenir deux fois pile', fav: 1, tot: 4 }
          ]);
          const p = parseFloat(((cas.tot - cas.fav) / cas.tot).toFixed(3));
          return {
            statement: `${cas.d}<br/><br/>` +
              `On note $E$ l'événement « ${cas.ev} ».<br/><br/>` +
              `Quelle est la <strong>probabilité de l'événement contraire</strong> $\\bar{E}$, c'est-à-dire « ${cas.contraire} » ? Donne le résultat arrondi au millième.`,
            answer: p, tolerance: 0.002, unit: '',
            hint: `Inutile de dénombrer tous les cas où l'événement ne se produit pas.<br/><br/>Un événement et son contraire couvrent <strong>toutes</strong> les possibilités, sans recouvrement : $P(E) + P(\\bar{E}) = 1$.`,
            solution: [
              `Plutôt que de dénombrer les cas défavorables un par un, on part de ce qui est certain : l'événement $E$ et son contraire $\\bar{E}$ couvrent à eux deux <strong>toutes</strong> les issues, et ne se chevauchent jamais. Leurs probabilités s'ajoutent donc à $1$.`,
              `$P(E) = \\dfrac{${cas.fav}}{${cas.tot}}$, donc $P(\\bar{E}) = 1 - \\dfrac{${cas.fav}}{${cas.tot}} = \\dfrac{${cas.tot - cas.fav}}{${cas.tot}} \\approx ${fr(p, 3)}$.`,
              `Contrôle : l'événement contraire est ici bien plus probable que $E$, ce qui est cohérent puisqu'il regroupe $${cas.tot - cas.fav}$ issues sur $${cas.tot}$.`
            ]
          };
        }

        /* tache === 'dependance' : comparer deux fréquences conditionnelles
           pour décider s'il y a lien. C'est la seule tâche du chapitre qui
           demande de CONCLURE et non de calculer, et c'est exactement ce que le
           « problème » du chapitre fait déjà. On construit les deux fréquences
           d'abord, à partir de fractions exactes, puis les effectifs : sans
           quoi l'égalité « fréquences identiques » ne tomberait jamais juste. */
        const kA = rand(4, 12), kB = rand(4, 12);
        const fA = pick(FRACTIONS);
        const identiques = pick([true, false]);
        const fB = identiques ? fA : pick(FRACTIONS.filter(f => f.val !== fA.val));
        const nG1 = fA.den * kA, nG1S = fA.num * kA;
        const nG2 = fB.den * kB, nG2S = fB.num * kB;
        /* `deLien` porte l'article contracté du facteur étudié : « du sexe »,
           « du statut », « de l'abonnement ». Une première version concaténait
           « dépend de » avec un nom déjà articulé et produisait « dépend de le
           sexe ». La contraction se transporte avec le nom. */
        const ctxD = pick([
          { g1: 'les filles', g2: 'les garçons', crit: 'choisissent l\'option théâtre', sujet: 'le choix de l\'option théâtre', deLien: 'du sexe' },
          { g1: 'les internes', g2: 'les externes', crit: 'déjeunent au self', sujet: 'le fait de déjeuner au self', deLien: 'du statut d\'hébergement' },
          { g1: 'les abonnés', g2: 'les non-abonnés', crit: 'ont assisté au concert', sujet: 'la venue au concert', deLien: 'de l\'abonnement' }
        ]);
        return {
          statement: `Une enquête compare deux groupes.<br/><br/>` +
            `Sur $${nG1}$ personnes parmi ${ctxD.g1}, $${nG1S}$ ${ctxD.crit}.<br/><br/>` +
            `Sur $${nG2}$ personnes parmi ${ctxD.g2}, $${nG2S}$ ${ctxD.crit}.<br/><br/>` +
            `Peut-on dire que ${ctxD.sujet} <strong>dépend</strong> ${ctxD.deLien} ?<br/><br/>` +
            `Réponds par $1$ si <strong>oui</strong>, par $0$ si <strong>non</strong>.`,
          answer: identiques ? 0 : 1, tolerance: 0, unit: '',
          hint: `Comparer les <strong>effectifs</strong> bruts ne dit rien, car les deux groupes n'ont pas la même taille.<br/><br/>Calcule la fréquence conditionnelle dans chaque groupe, puis compare ces deux fréquences.`,
          solution: [
            `Comparer $${nG1S}$ à $${nG2S}$ ne mène à rien : les deux groupes ne comptent pas le même nombre de personnes. Il faut ramener chaque groupe à une <strong>proportion</strong>, c'est-à-dire calculer une fréquence conditionnelle dans chacun.`,
            `Parmi ${ctxD.g1} : $\\dfrac{${nG1S}}{${nG1}} = ${fr(fA.val)}$, soit $${Math.round(fA.val * 100)}\\%$. Parmi ${ctxD.g2} : $\\dfrac{${nG2S}}{${nG2}} = ${fr(fB.val)}$, soit $${Math.round(fB.val * 100)}\\%$.`,
            identiques
              ? `Les deux proportions sont <strong>égales</strong> : connaître le groupe ne change rien à la proportion. Il n'y a donc pas de dépendance. Réponse : $0$.<br/><br/>Remarque : les effectifs, eux, sont différents — c'est bien la proportion qui tranche, pas le décompte.`
              : `Les deux proportions <strong>diffèrent</strong> ($${Math.round(fA.val * 100)}\\%$ contre $${Math.round(fB.val * 100)}\\%$) : savoir à quel groupe appartient une personne change la proportion attendue. Il y a donc dépendance. Réponse : $1$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un lycée sonde $300$ élèves sur leurs habitudes de transport. Résultats : $120$ viennent en vélo, $150$ en bus, $30$ à pied. Parmi les cyclistes, $72$ sont des filles ; parmi les usagers du bus, $90$ sont des filles.',
      tasks: [
        'Calculer la fréquence des cyclistes dans la population totale.',
        'Calculer la fréquence conditionnelle d\'être une fille parmi les cyclistes.',
        'Peut-on dire que les filles préfèrent le vélo au bus ? (Comparer les fréquences conditionnelles.)'
      ],
      solutions: [
        '$f_{\\text{vélo}} = \\dfrac{120}{300} = 0{,}4 = 40\\%$.',
        '$f_{\\text{fille}|\\text{vélo}} = \\dfrac{72}{120} = 0{,}6 = 60\\%$.',
        '$f_{\\text{fille}|\\text{bus}} = \\dfrac{90}{150} = 0{,}6 = 60\\%$. À égalité : les filles ont la même proportion dans les deux modes de transport.'
      ],
      finalAnswer: 'Les filles représentent $60\\%$ des cyclistes et $60\\%$ des usagers du bus : pas de préférence significative.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques et probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une classe de $40$ élèves, $24$ pratiquent un sport et $10$ jouent d\'un instrument. Parmi les sportifs, $6$ jouent aussi d\'un instrument. Combien d\'élèves ne pratiquent ni sport ni instrument ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$|S \\cup I| = 24 + 10 - 6 = 28$. Ni l\'un ni l\'autre : $40 - 28 = 12$ élèves.'
        },
        {
          statement: 'Dans un sondage portant sur $200$ personnes, $80$ boivent du café $(C)$ et $50$ boivent du thé $(T)$. Parmi les buveurs de café, $20$ boivent aussi du thé. Quelle est la fréquence conditionnelle de boire du thé parmi les buveurs de café ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$f_{T|C} = \\dfrac{n(C \\cap T)}{n(C)} = \\dfrac{20}{80} = 0{,}25$. Donc $25\\%$ des buveurs de café boivent aussi du thé.'
        },
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre premier ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
          answer: 1,
          points: 2,
          correction: 'Les nombres premiers parmi $\\{1, 2, 3, 4, 5, 6\\}$ sont $2, 3, 5$ (trois résultats favorables). $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
        },
        {
          statement: 'Un tableau croisé indique que sur $150$ élèves, $60$ sont en $3^e$ et parmi ceux-ci, $45$ ont choisi l\'option sciences. La fréquence globale des élèves de $3^e$ ayant choisi sciences est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{45}{60} = 0{,}75$', '$\\dfrac{45}{150} = 0{,}30$', '$\\dfrac{60}{150} = 0{,}40$', '$\\dfrac{45}{90} = 0{,}50$'],
          answer: 1,
          points: 2,
          correction: 'La fréquence globale prend pour référence l\'effectif total : $f = \\dfrac{45}{150} = 0{,}30$. La valeur $\\dfrac{45}{60} = 0{,}75$ est la fréquence conditionnelle (proportion de sciences parmi les $3^e$).'
        },
        {
          statement: 'On tire une carte au hasard dans un jeu de $52$ cartes. Quelle est la probabilité d\'obtenir un as ou un cœur ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{17}{52}$', '$\\dfrac{16}{52}$', '$\\dfrac{4}{52}$', '$\\dfrac{13}{52}$'],
          answer: 1,
          points: 2,
          correction: 'Il y a $4$ as et $13$ cœurs, mais l\'as de cœur est compté dans les deux. $P(\\text{as} \\cup \\text{cœur}) = \\dfrac{4 + 13 - 1}{52} = \\dfrac{16}{52} = \\dfrac{4}{13}$.'
        }
      ]
    }
  }
);
