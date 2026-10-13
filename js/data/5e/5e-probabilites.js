/* =========================================================
   Spark Learning – data/5e/5e-probabilites.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités (introduction)',
    subtitle: 'Expériences aléatoires, univers, probabilité',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Fréquence', 'Équiprobabilité'],
    physics: false,

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur la definition
         d'une probabilite. La question retenue est celle qui piege le plus
         surement : deux issues, donc « une chance sur deux » — un raisonnement
         que rien dans le cours anterieur ne permet de refuter.
         Valeur VERIFIEE : 1 secteur sur 8 donne 0,125 et non 0,5. */
      intro: 'À une fête foraine, une roue est partagée en huit secteurs identiques, dont un seul fait gagner. Tu joues une fois : ou tu gagnes, ou tu perds. Y a-t-il une chance sur deux ?<br/><br/>' +
        'Le raisonnement semble solide — deux issues, donc une chance sur deux — et il est pourtant faux. Il suffit de regarder la roue : le secteur gagnant occupe un huitième du tour, pas la moitié.<br/><br/>' +
        'Compter les issues ne suffit donc jamais. Encore faut-il savoir si elles ont la même chance de se produire, et c\'est là que tout se joue.<br/><br/>' +
        'La probabilité quantifie l\'incertitude d\'un événement sur une échelle de <strong>$0$ (impossible) à $1$ (certain)</strong>.<br/><br/>' +
        '<strong>Équiprobabilité :</strong> quand tous les résultats ont la même chance, $P(A) = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$. Attention au raisonnement intuitif : « il y a deux issues (gagner ou perdre), donc $P = \\dfrac{1}{2}$ » est faux si les issues ne sont pas équiprobables.<br/><br/>' +
        'Le <strong>sophisme du joueur</strong> : après 5 piles de suite à pile-ou-face, la probabilité d\'obtenir face reste $\\dfrac{1}{2}$ — la pièce n\'a pas de mémoire. Chaque lancer est indépendant.<br/><br/>' +
        'L\'<strong>événement contraire</strong> $\\bar{A}$ (« $A$ ne se réalise pas ») vérifie $P(\\bar{A}) = 1 - P(A)$ — souvent plus simple à calculer que $P(A)$ directement.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance (lancer de dé, tirage au sort, etc.).' },
        { term: 'Univers ($\\Omega$)', def: 'Ensemble de tous les résultats possibles d\'une expérience aléatoire. Ex : pour un dé, $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers. Ex : « obtenir un nombre pair » = $\\{2, 4, 6\\}$.' },
        { term: 'Événement contraire', def: 'Si $A$ est un événement, $\\bar{A}$ est l\'événement « $A$ ne se réalise pas ». $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      example: {
        statement: 'On tire une carte au hasard dans un jeu de $32$ cartes. Quelle est la probabilité d\'obtenir un cœur ?',
        steps: [
          'Univers : $32$ cartes (équiprobabilité).',
          'Cas favorables : $8$ cœurs (il y a $8$ cartes par couleur dans un jeu de $32$).',
          '$P(\\text{cœur}) = \\dfrac{8}{32} = \\dfrac{1}{4} = 0{,}25$.'
        ],
        answer: '$P = \\dfrac{1}{4} = 0{,}25$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Repère visuel',
        title: 'De l\'impossible au certain',
        description: 'La probabilité d\'un événement est toujours comprise entre $0$ et $1$. Cette règle graduée reprend les trois repères numériques du cours ($0$, $0{,}5$, $1$) et les complète avec le vocabulaire courant utilisé pour décrire une chance intermédiaire.',
        svg: `
          <svg viewBox="0 0 540 240" role="img" aria-labelledby="proba5e-title proba5e-desc">
            <title id="proba5e-title">Echelle des probabilites de 0 a 1</title>
            <desc id="proba5e-desc">Regle graduee horizontale de 0 (impossible) a 1 (certain), avec cinq reperes qualitatifs : impossible, peu probable, une chance sur deux, probable, certain, places respectivement a 0, 0,25, 0,5, 0,75 et 1.</desc>
            <line class="axis" x1="40" y1="150" x2="520" y2="150"></line>
            <line class="axis" x1="60" y1="150" x2="60" y2="158"></line>
            <line class="axis" x1="170" y1="150" x2="170" y2="158"></line>
            <line class="axis" x1="280" y1="150" x2="280" y2="158"></line>
            <line class="axis" x1="390" y1="150" x2="390" y2="158"></line>
            <line class="axis" x1="500" y1="150" x2="500" y2="158"></line>
            <text class="tick-label" x="60" y="174" text-anchor="middle">0</text>
            <text class="tick-label" x="170" y="174" text-anchor="middle">0,25</text>
            <text class="tick-label" x="280" y="174" text-anchor="middle">0,5</text>
            <text class="tick-label" x="390" y="174" text-anchor="middle">0,75</text>
            <text class="tick-label" x="500" y="174" text-anchor="middle">1</text>
            <line class="guide-line" x1="60" y1="72" x2="60" y2="144"></line>
            <line class="guide-line" x1="170" y1="72" x2="170" y2="144"></line>
            <line class="guide-line" x1="280" y1="72" x2="280" y2="144"></line>
            <line class="guide-line" x1="390" y1="72" x2="390" y2="144"></line>
            <line class="guide-line" x1="500" y1="72" x2="500" y2="144"></line>
            <text class="annotation-label" x="60" y="60" text-anchor="middle">impossible</text>
            <text class="annotation-label" x="170" y="60" text-anchor="middle">peu probable</text>
            <text class="annotation-label" x="280" y="60" text-anchor="middle">une chance sur deux</text>
            <text class="annotation-label" x="390" y="60" text-anchor="middle">probable</text>
            <text class="annotation-label" x="500" y="60" text-anchor="middle">certain</text>
            <circle class="plot-point" cx="60" cy="150" r="6"></circle>
            <circle class="plot-point-alt" cx="170" cy="150" r="6"></circle>
            <circle class="plot-point" cx="280" cy="150" r="6"></circle>
            <circle class="plot-point-alt" cx="390" cy="150" r="6"></circle>
            <circle class="plot-point" cx="500" cy="150" r="6"></circle>
            <rect x="40" y="192" width="130" height="16" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></rect>
            <rect x="170" y="192" width="110" height="16" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
            <rect x="280" y="192" width="110" height="16" fill="color-mix(in srgb, var(--diagram-accent) 38%, transparent)" stroke="none"></rect>
            <rect x="390" y="192" width="130" height="16" fill="color-mix(in srgb, var(--diagram-accent) 60%, transparent)" stroke="none"></rect>
            <rect class="frame-line" x="40" y="192" width="480" height="16" fill="none"></rect>
            <line class="grid-line" x1="170" y1="192" x2="170" y2="208"></line>
            <line class="grid-line" x1="280" y1="192" x2="280" y2="208"></line>
            <line class="grid-line" x1="390" y1="192" x2="390" y2="208"></line>
            <text class="label-soft" x="40" y="228" text-anchor="start">moins probable</text>
            <text class="label-soft" x="520" y="228" text-anchor="end">plus probable</text>
          </svg>
        `,
        notes: [
          '<strong>Impossible</strong> ($P=0$) : obtenir $7$ avec un dé à $6$ faces, comme dans le tableau du cours — cet événement ne se produit jamais.',
          '<strong>Peu probable</strong> : les cas favorables sont nettement minoritaires (ex. tirer une bille rouge dans un sac qui en compte $3$ sur $10$).',
          '<strong>Équiprobable</strong> ($P=0{,}5$) : pile ou face — les deux issues sont « aussi probables l\'une que l\'autre », comme l\'indique le tableau du cours.',
          '<strong>Probable</strong> : les cas favorables sont nettement majoritaires (ex. tirer une bille verte dans ce même sac, qui en compte $5$ sur $10$).',
          '<strong>Certain</strong> ($P=1$) : obtenir un nombre $\\leq 6$ avec un dé à $6$ faces, comme dans le tableau du cours — cet événement se produit à chaque lancer.'
        ],
        reading: 'Les repères « peu probable » et « probable » n\'ont pas de seuil chiffré officiel — ce sont des mots du langage courant. Un calcul de $P(A)$ doit toujours donner une fraction ou un nombre exact entre $0$ et $1$, jamais une simple impression.',
        caption: 'Échelle qualitative superposée aux trois repères numériques du cours : $0$ (impossible), $0{,}5$ (une chance sur deux), $1$ (certain).'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus :
           1. « deux issues, donc une chance sur deux » — l'erreur que l'intro
              du cours nomme explicitement et ne montre pas ;
           2. la probabilite comme une PART du tout, ce qui explique d'un coup
              pourquoi elle ne depasse jamais 1 et pourquoi la somme fait 1 ;
           3. le hasard n'a pas de memoire : une serie de tirages n'influe pas
              sur le suivant.

         Valeurs VERIFIEES : sur une roue de 8 secteurs egaux dont 1 gagnant,
         P = 1/8 = 0,125 et non 0,5 ; les 8 secteurs font exactement 45 degres
         chacun, coordonnees calculees par trigonometrie. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux issues ne font pas deux chances égales',
          title: 'Gagner ou perdre, mais pas une chance sur deux',
          description: 'À cette roue, il n\'y a que <strong>deux issues</strong> : gagner ou perdre. Beaucoup en concluent une chance sur deux. Il suffit de regarder la roue : le secteur gagnant occupe <strong>un huitième</strong> du tour, donc $P = 0{,}125$. Compter les issues ne suffit jamais.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="proba-equi-title proba-equi-desc">
              <title id="proba-equi-title">Une roue de huit secteurs egaux dont un seul est gagnant</title>
              <desc id="proba-equi-desc">Une roue est partagee en huit secteurs de 45 degres chacun, tous de meme taille. Un seul secteur est teinte : c'est le secteur gagnant. Les sept autres sont laisses clairs. Il n'y a donc que deux issues possibles, gagner ou perdre, mais elles ne sont pas equiprobables : la probabilite de gagner vaut un huitieme, soit 0 virgule 125, et celle de perdre sept huitiemes, soit 0 virgule 875. A droite de la roue, une barre partagee dans les memes proportions rappelle que les deux issues ne se partagent pas le tour a parts egales.</desc>

              <!-- Roue de rayon 72, centre (110,112). Huit secteurs de 45
                   degres : sommets CALCULES par trigonometrie, pas poses a
                   l'oeil. Le secteur gagnant va de -90 a -45 degres. -->
              <circle class="frame-line" cx="110" cy="112" r="72" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)"></circle>
              <path class="frame-line" fill="color-mix(in srgb, var(--diagram-accent) 40%, transparent)" d="M110 112 L110 40 A 72 72 0 0 1 160.91 61.09 Z"></path>
              <line class="grid-line" x1="110" y1="112" x2="110" y2="40"></line>
              <line class="grid-line" x1="110" y1="112" x2="160.91" y2="61.09"></line>
              <line class="grid-line" x1="110" y1="112" x2="182" y2="112"></line>
              <line class="grid-line" x1="110" y1="112" x2="160.91" y2="162.91"></line>
              <line class="grid-line" x1="110" y1="112" x2="110" y2="184"></line>
              <line class="grid-line" x1="110" y1="112" x2="59.09" y2="162.91"></line>
              <line class="grid-line" x1="110" y1="112" x2="38" y2="112"></line>
              <line class="grid-line" x1="110" y1="112" x2="59.09" y2="61.09"></line>
              <text class="annotation-label" x="140" y="62" text-anchor="start">gagné</text>
              <text class="tick-label" x="110" y="202" text-anchor="middle">8 secteurs égaux</text>

              <!-- La MEME proportion, redite en barre : c'est elle qui porte le
                   raisonnement, la roue seule pouvant se lire de travers. -->
              <rect class="frame-line" x="232" y="76" width="18" height="72" fill="color-mix(in srgb, var(--diagram-accent) 40%, transparent)"></rect>
              <rect class="guide-line" x="256" y="76" width="18" height="72" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></rect>
              <text class="tick-label" x="241" y="166" text-anchor="middle">1</text>
              <text class="tick-label" x="265" y="166" text-anchor="middle">7</text>
              <text class="tick-label" x="253" y="184" text-anchor="middle">secteurs</text>

              <text class="annotation-label" x="292" y="94" text-anchor="start">P(gagner) = 1/8 = 0,125</text>
              <text class="tick-label" x="292" y="116" text-anchor="start">P(perdre) = 7/8 = 0,875</text>
              <text class="label-soft" x="292" y="140" text-anchor="start">somme = 1</text>

              <text class="annotation-label" x="200" y="24" text-anchor="middle">deux issues, mais pas deux chances égales</text>
            </svg>
          `,
          notes: [
            'La roue compte $8$ secteurs <strong>de même taille</strong> : ce sont eux les issues équiprobables, pas « gagner » et « perdre ».',
            '$P(\\text{gagner}) = \\dfrac{1}{8} = 0{,}125$ et $P(\\text{perdre}) = \\dfrac{7}{8} = 0{,}875$.',
            'Leur somme vaut $1$, comme toujours : il se passe forcément quelque chose. Mais elles ne valent $0{,}5$ chacune que si les deux issues sont réellement <strong>également possibles</strong>.'
          ],
          reading: 'Avant de compter les issues, demande-toi si elles sont également possibles. Ici la question à se poser n\'est pas « combien de résultats ? » mais « combien de secteurs, et combien me font gagner ? ».',
          caption: 'Une roue de $8$ secteurs égaux dont un seul gagnant : deux issues possibles, mais $P(\\text{gagner}) = 0{,}125$ et non $0{,}5$.'
        },
        {
          theme: 'maths',
          kicker: 'Une probabilité est une part',
          title: 'Pourquoi une probabilité ne dépasse jamais $1$',
          description: 'Une probabilité n\'est pas un nombre abstrait : c\'est la <strong>part du tout</strong> qu\'occupent les cas favorables. Cette lecture explique d\'un coup deux règles que l\'on retient d\'ordinaire séparément : elle est toujours entre $0$ et $1$, et les probabilités de toutes les issues font <strong>exactement $1$</strong>.',
          svg: `
            <svg viewBox="0 0 400 194" role="img" aria-labelledby="proba-part-title proba-part-desc">
              <title id="proba-part-title">Une barre unite partagee entre trois issues</title>
              <desc id="proba-part-desc">Une barre horizontale represente la totalite des cas possibles, soit 10 boules dans un sac. Elle est partagee en trois portions : 5 dixiemes pour les boules rouges, 3 dixiemes pour les bleues et 2 dixiemes pour les vertes. Les trois portions sont teintees differemment et mises bout a bout sans trou ni chevauchement, si bien qu'elles remplissent exactement la barre. Sous la barre, une graduation de 0 a 1 permet de lire chaque probabilite. La somme des trois vaut 1, ce qui est signale, et aucune portion ne peut depasser la barre entiere.</desc>

              <!-- Barre unite : de x=40 a x=360, soit 320 unites pour la
                   probabilite 1. Les trois portions sont donc de 160, 96 et 64
                   unites : positions CALCULEES, somme exacte 320. -->
              <rect class="frame-line" x="40" y="56" width="160" height="44" fill="color-mix(in srgb, var(--diagram-accent) 40%, transparent)"></rect>
              <rect class="frame-line" x="200" y="56" width="96" height="44" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)"></rect>
              <rect class="frame-line" x="296" y="56" width="64" height="44" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></rect>

              <text class="tick-label" x="120" y="82" text-anchor="middle">rouge</text>
              <text class="tick-label" x="248" y="82" text-anchor="middle">bleue</text>
              <text class="tick-label" x="328" y="82" text-anchor="middle">verte</text>

              <text class="annotation-label" x="120" y="44" text-anchor="middle">0,5</text>
              <text class="annotation-label" x="248" y="44" text-anchor="middle">0,3</text>
              <text class="annotation-label" x="328" y="44" text-anchor="middle">0,2</text>

              <!-- Graduation de 0 a 1 sous la barre. -->
              <line class="axis" x1="40" y1="118" x2="360" y2="118"></line>
              <line class="frame-line" x1="40" y1="112" x2="40" y2="124"></line>
              <text class="tick-label" x="40" y="138" text-anchor="middle">0</text>
              <line class="frame-line" x1="200" y1="112" x2="200" y2="124"></line>
              <text class="tick-label" x="200" y="138" text-anchor="middle">0,5</text>
              <line class="frame-line" x1="360" y1="112" x2="360" y2="124"></line>
              <text class="tick-label" x="360" y="138" text-anchor="middle">1</text>

              <text class="annotation-label" x="200" y="24" text-anchor="middle">10 boules dans un sac : 5 rouges, 3 bleues, 2 vertes</text>
              <text class="tick-label" x="200" y="160" text-anchor="middle">0,5 + 0,3 + 0,2 = 1</text>
              <text class="label-soft" x="200" y="180" text-anchor="middle">les trois parts remplissent la barre, sans trou ni dépassement</text>
            </svg>
          `,
          notes: [
            '$P(\\text{rouge}) = \\dfrac{5}{10} = 0{,}5$, $P(\\text{bleue}) = \\dfrac{3}{10} = 0{,}3$, $P(\\text{verte}) = \\dfrac{2}{10} = 0{,}2$.',
            'Les trois parts mises bout à bout remplissent exactement la barre : $0{,}5 + 0{,}3 + 0{,}2 = 1$.',
            'Une probabilité supérieure à $1$ serait une part <strong>plus grande que le tout</strong> : c\'est impossible, et c\'est le premier contrôle à faire sur un résultat.'
          ],
          reading: 'Lis chaque portion sur la graduation du bas : tu obtiens directement sa probabilité. Si tes probabilités ne font pas $1$ en tout, c\'est qu\'il manque une issue ou qu\'une part a été comptée deux fois.',
          caption: 'La barre unité partagée entre trois issues ($0{,}5$, $0{,}3$ et $0{,}2$) : les probabilités remplissent exactement le tout.'
        },
        {
          theme: 'maths',
          kicker: 'Le hasard n\'a pas de mémoire',
          title: 'Cinq piles de suite ne changent rien au sixième lancer',
          description: 'Après cinq « pile » d\'affilée, beaucoup pensent que « face est dû ». La pièce, elle, ne se souvient de rien : au sixième lancer, la probabilité reste $0{,}5$, <strong>exactement comme au premier</strong>.',
          svg: `
            <svg viewBox="0 0 400 190" role="img" aria-labelledby="proba-memoire-title proba-memoire-desc">
              <title id="proba-memoire-title">Cinq lancers de piece deja tombes sur pile et le lancer suivant</title>
              <desc id="proba-memoire-desc">Cinq pieces alignees montrent toutes le resultat pile : ce sont les lancers deja effectues. Une sixieme piece, tracee en trait tirete et laissee vide, represente le lancer a venir. Sous elle, deux probabilites egales de 0 virgule 5 sont indiquees pour pile et pour face, ce qui montre que les cinq resultats precedents n'ont aucune influence sur le suivant. Une barre partagee en deux moities strictement egales illustre cette equiprobabilite.</desc>

              <text class="annotation-label" x="200" y="22" text-anchor="middle">cinq lancers déjà faits</text>

              <circle class="frame-line" cx="52" cy="62" r="18" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <text class="tick-label" x="52" y="66" text-anchor="middle">pile</text>
              <circle class="frame-line" cx="104" cy="62" r="18" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <text class="tick-label" x="104" y="66" text-anchor="middle">pile</text>
              <circle class="frame-line" cx="156" cy="62" r="18" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <text class="tick-label" x="156" y="66" text-anchor="middle">pile</text>
              <circle class="frame-line" cx="208" cy="62" r="18" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <text class="tick-label" x="208" y="66" text-anchor="middle">pile</text>
              <circle class="frame-line" cx="260" cy="62" r="18" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></circle>
              <text class="tick-label" x="260" y="66" text-anchor="middle">pile</text>

              <!-- Le lancer A VENIR : cercle VIDE et tirete. Une figure ne
                   divulgue jamais ce qu'elle demande de trouver. -->
              <circle class="guide-line" cx="330" cy="62" r="18" fill="none" stroke-dasharray="5 4"></circle>
              <text class="annotation-label" x="330" y="68" text-anchor="middle">?</text>
              <text class="tick-label" x="330" y="96" text-anchor="middle">le suivant</text>

              <!-- Deux moities STRICTEMENT egales : c'est tout le propos. -->
              <rect class="frame-line" x="120" y="118" width="80" height="30" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></rect>
              <rect class="frame-line" x="200" y="118" width="80" height="30" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></rect>
              <text class="tick-label" x="160" y="138" text-anchor="middle">pile 0,5</text>
              <text class="tick-label" x="240" y="138" text-anchor="middle">face 0,5</text>

              <text class="label-soft" x="200" y="172" text-anchor="middle">la pièce ne se souvient pas des lancers précédents</text>
            </svg>
          `,
          notes: [
            'Chaque lancer est <strong>indépendant</strong> des précédents : la pièce n\'a ni mémoire ni compteur.',
            'Au sixième lancer, $P(\\text{pile}) = P(\\text{face}) = 0{,}5$, comme au premier.',
            'Ce qui est rare, c\'est d\'obtenir cinq piles <strong>d\'affilée</strong> — et cette rareté-là se juge <strong>avant</strong> de lancer, pas une fois les cinq résultats connus.'
          ],
          reading: 'Regarde la sixième pièce : elle est identique à celles du départ, rien ne la distingue. Le « c\'est le tour de face » est une intuition très répandue, mais aucun mécanisme ne la soutient.',
          caption: 'Après cinq « pile », le lancer suivant reste équiprobable : $P(\\text{pile}) = P(\\text{face}) = 0{,}5$.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Décrire l\'univers $\\Omega$</strong> : ensemble de tous les résultats possibles.',
          '<strong>Identifier l\'événement $A$</strong> : sous-ensemble des résultats favorables.',
          '<strong>Équiprobabilité</strong> : $P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$.'
        ]
      },
      formulas: [
        '$0 \\leq P(A) \\leq 1$',
        '$P(\\Omega) = 1$ (événement certain)',
        '$P(\\emptyset) = 0$ (événement impossible)',
        '$P(\\bar{A}) = 1 - P(A)$ (événement contraire)',
        'Équiprobabilité : $P(A) = \\dfrac{|A|}{|\\Omega|}$'
      ],
      recap: [
        'Une probabilité est toujours entre $0$ (impossible) et $1$ (certain).',
        'Équiprobabilité : $P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$.',
        'Les lancers successifs sont indépendants (la pièce n\'a pas de mémoire).'
      ],
      piege: 'Piège : $P(A) = \\frac{1}{2}$ ne signifie pas qu\'un événement arrive forcément une fois sur deux dans un petit nombre d\'essais. La loi des grands nombres dit que la fréquence tend vers la probabilité quand le nombre d\'essais est grand.'
    },

    quiz: [
      {
        q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre pair ?',
        options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
        answer: 2,
        correction: 'Nombres pairs : $\\{2, 4, 6\\}$ → $3$ cas. Total : $6$. $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
      },
      {
        q: 'Un sac contient $3$ billes rouges, $2$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de ne PAS tirer une bille rouge ?',
        options: ['$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$'],
        answer: 1,
        correction: '$P(\\text{rouge}) = \\frac{3}{10}$. Donc $P(\\overline{\\text{rouge}}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.'
      },
      {
        q: 'On lance une pièce $5$ fois et on obtient pile à chaque fois. Quelle est la probabilité d\'obtenir pile au $6^e$ lancer ?',
        options: [
          'Moins de $\\frac{1}{2}$ : on est « dans la chance du pile », donc face est plus probable.',
          'Exactement $\\frac{1}{2}$ : chaque lancer est indépendant, la pièce n\'a pas de mémoire.',
          'Plus de $\\frac{1}{2}$ : on a eu beaucoup de pile, donc la chance en tire est plus grande.',
          '$\\frac{1}{64}$ : la probabilité d\'obtenir 6 piles de suite est $\\left(\\frac{1}{2}\\right)^6$.'
        ],
        answer: 1,
        correction: 'Chaque lancer est indépendant : les résultats précédents n\'influencent pas le suivant. La probabilité d\'obtenir pile reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le <em>sophisme du joueur</em>.'
      }
    ],

    /* ELARGISSEMENT ET CORRECTION DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce ecrivait « Un(e) roue de
       loterie », parenthese de complaisance qui s'IMPRIME telle quelle dans le
       livre. Chaque contexte porte desormais son article.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, un tirage
       equiprobable parmi des elements numerotes — 4 moules, aucune banque pour
       le professeur. L'evaluation teste pourtant l'urne a plusieurs couleurs
       (Q2, ou le total n'est PAS donne), l'evenement contraire (Q3) et
       l'evenement impossible (Q4) : trois questions sur cinq sans exercice
       d'entrainement, et une remediation sans renvoi possible.

       On ajoute ces trois taches, chacune adossee a une erreur frequente :
         - l'urne melangee, ou l'eleve doit CONSTRUIRE le total des cas ;
         - l'evenement contraire, ou il soustrait a 100 au lieu de 1 ;
         - l'evenement impossible ou certain, qui fixe les bornes 0 et 1. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['tirage', 'urne', 'contraire', 'borne']);

        if (tache === 'urne') {
          /* Le total n'est PAS donne : l'eleve doit l'additionner lui-meme.
             C'est la difficulte de la question 2 de l'evaluation, et aucun
             exercice ne la travaillait. Effectifs choisis pour que la
             probabilite tombe a deux decimales. */
          const couleurs = pick([
            { a: 'rouges', b: 'bleues', c: 'vertes' },
            { a: 'jaunes', b: 'noires', c: 'blanches' },
            { a: 'rouges', b: 'vertes', c: 'oranges' }
          ]);
          const n1 = rand(2, 8), n2 = rand(2, 8), n3 = rand(2, 8);
          const total = n1 + n2 + n3;
          const cible = pick([
            { nom: couleurs.a, eff: n1 },
            { nom: couleurs.b, eff: n2 },
            { nom: couleurs.c, eff: n3 }
          ]);
          const p = parseFloat((cible.eff / total).toFixed(2));
          return {
            statement: `🎱 Un sac contient $${n1}$ billes ${couleurs.a}, $${n2}$ ${couleurs.b} et $${n3}$ ${couleurs.c}. On en tire une au hasard.<br/>Quelle est la probabilité de tirer une bille ${cible.nom} ? Arrondis à $0{,}01$.`,
            answer: p,
            tolerance: 0.01,
            unit: '',
            hint: `Le nombre total de billes n'est pas donné : commence par l'additionner.<br/><br/>Puis compare l'effectif de la couleur cherchée à ce total.`,
            solution: [
              `Total des billes : $${n1} + ${n2} + ${n3} = ${total}$.`,
              `Billes ${cible.nom} : $${cible.eff}$.`,
              `$P = \\dfrac{${cible.eff}}{${total}} = ${fr(p)}$.`,
              `Contrôle : une probabilité est toujours comprise entre $0$ et $1$.`
            ]
          };
        }

        if (tache === 'contraire') {
          /* Evenement CONTRAIRE : l'eleve doit soustraire a 1, pas a 100.
             La probabilite de depart est un multiple de 0,05 pour que le
             complement tombe juste. */
          const jeu = pick(['un jeu de fléchettes', 'une tombola', 'un jeu vidéo', 'un concours de tir']);
          const p = rand(1, 19) * 5 / 100;           // de 0,05 a 0,95
          const q = parseFloat((1 - p).toFixed(2));
          return {
            statement: `🎯 À ${jeu}, la probabilité de gagner est $${fr(p)}$.<br/>Quelle est la probabilité de <strong>perdre</strong> ?`,
            answer: q,
            tolerance: 0.01,
            unit: '',
            hint: `Gagner ou perdre : l'un des deux arrive forcément.<br/><br/>Les deux probabilités réunies valent donc la <strong>certitude</strong>, c'est-à-dire $1$ — et non $100$.`,
            solution: [
              `L'événement contraire de « gagner » est « perdre ».`,
              `$P(\\text{perdre}) = 1 - ${fr(p)} = ${fr(q)}$.`,
              `Contrôle : $${fr(p)} + ${fr(q)} = 1$ ✓ — la somme d'un événement et de son contraire vaut toujours $1$.`
            ]
          };
        }

        if (tache === 'borne') {
          /* Evenement IMPOSSIBLE ou CERTAIN : la reponse est 0 ou 1, et c'est
             ce qui fixe les bornes de l'echelle des probabilites. Les deux cas
             se presentent, sans quoi l'eleve repondrait toujours pareil. */
          const faces = pick([6, 8, 10, 12]);
          const impossible = rand(0, 1) === 1;
          const valeur = impossible ? faces + rand(1, 4) : faces;
          return {
            statement: impossible
              ? `🎲 On lance un dé à $${faces}$ faces, numérotées de $1$ à $${faces}$.<br/>Quelle est la probabilité d'obtenir $${valeur}$ ?`
              : `🎲 On lance un dé à $${faces}$ faces, numérotées de $1$ à $${faces}$.<br/>Quelle est la probabilité d'obtenir un nombre inférieur ou égal à $${faces}$ ?`,
            answer: impossible ? 0 : 1,
            tolerance: 0,
            unit: '',
            hint: impossible
              ? `Le nombre $${valeur}$ figure-t-il sur ce dé ?<br/><br/>Un événement qui ne peut pas se produire a une probabilité de $0$.`
              : `Combien de faces vérifient cette condition ?<br/><br/>Un événement qui se produit à coup sûr a une probabilité de $1$.`,
            solution: impossible
              ? [
                  `Le dé ne porte que les numéros de $1$ à $${faces}$ : le nombre $${valeur}$ n'y figure pas.`,
                  `Aucun cas favorable, donc $P = \\dfrac{0}{${faces}} = 0$.`,
                  `C'est un événement <strong>impossible</strong> : sa probabilité est nulle.`
                ]
              : [
                  `Toutes les faces portent un numéro inférieur ou égal à $${faces}$.`,
                  `Les $${faces}$ cas sont favorables, donc $P = \\dfrac{${faces}}{${faces}} = 1$.`,
                  `C'est un événement <strong>certain</strong> : sa probabilité vaut $1$.`
                ]
          };
        }

        // Tache d'origine, avec l'accord corrige.
        const ctx = pick([
          { obj: 'une roue de loterie', emoji: '🎡' },
          { obj: 'une urne de boules numérotées', emoji: '🎱' },
          { obj: 'un jeu de cartes numérotées', emoji: '🃏' },
          { obj: 'un tirage au sort', emoji: '🎲' }
        ]);
        const total = pick([6, 8, 10, 12]);
        const fav = rand(1, total - 1);
        const p = parseFloat((fav / total).toFixed(2));
        return {
          statement: `${ctx.emoji} ${ctx.obj.charAt(0).toUpperCase() + ctx.obj.slice(1)} comporte $${total}$ éléments numérotés de $1$ à $${total}$, tous équiprobables. On gagne si le numéro tiré est $\\leq ${fav}$.<br/>Quelle est la probabilité de gagner ? Arrondis à $0{,}01$.`,
          answer: p,
          tolerance: 0.01,
          unit: '',
          hint: `Compte les numéros qui font gagner : ce sont ceux de $1$ à $${fav}$, donc $${fav}$ numéros.<br/><br/>$P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.`,
          solution: [
            `Cas favorables : les numéros de $1$ à $${fav}$, soit $${fav}$ cas.`,
            `Cas possibles : $${total}$.`,
            `$P = \\dfrac{${fav}}{${total}} = ${fr(p)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une classe de $30$ élèves tire au sort un délégué. Il y a $13$ filles et $17$ garçons.',
      tasks: [
        'Quelle est la probabilité que le délégué soit une fille ?',
        'Quelle est la probabilité que ce soit un garçon ?',
        'Vérifie que ces deux probabilités sont complémentaires.'
      ],
      solutions: [
        '$P(\\text{fille}) = \\dfrac{13}{30} \\approx 0{,}43$.',
        '$P(\\text{garçon}) = \\dfrac{17}{30} \\approx 0{,}57$.',
        '$\\dfrac{13}{30} + \\dfrac{17}{30} = \\dfrac{30}{30} = 1$ ✓.'
      ],
      finalAnswer: '$P(\\text{fille}) = \\frac{13}{30}$ et $P(\\text{garçon}) = \\frac{17}{30}$, somme $= 1$ ✓.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités (introduction)',
      duration: '20 min',
      questions: [
        {
          statement: 'On lance un dé à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.33,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Cas favorables : $\\{5, 6\\}$ → $2$ cas. Total : $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3} \\approx 0{,}33$.'
        },
        {
          statement: 'Un sac contient $4$ billes rouges, $3$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de tirer une bille bleue ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Total : $4 + 3 + 5 = 12$ billes. Cas favorables : $3$ bleues. $P = \\dfrac{3}{12} = \\dfrac{1}{4} = 0{,}25$.'
        },
        {
          statement: 'La probabilité de gagner à un jeu est $0{,}35$. Quelle est la probabilité de perdre ?',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\text{perdre}) = 1 - P(\\text{gagner}) = 1 - 0{,}35 = 0{,}65$.'
        },
        {
          statement: 'On lance un dé à $6$ faces. Quel événement est impossible ?',
          type: 'multiple-choice',
          options: [
            'Obtenir un nombre pair.',
            'Obtenir $7$.',
            'Obtenir un nombre inférieur à $6$.',
            'Obtenir $1$ deux lancers de suite.'
          ],
          answer: 1,
          points: 2,
          correction: 'Un dé standard a $6$ faces numérotées de $1$ à $6$. Obtenir $7$ est impossible : $P(7) = 0$.'
        },
        {
          statement: 'On lance une pièce $10$ fois et on obtient face $10$ fois. Quelle est la probabilité d\'obtenir face au $11^e$ lancer ?',
          type: 'multiple-choice',
          options: [
            'Presque $0$ car face est « épuisé ».',
            '$\\dfrac{1}{2}$ car chaque lancer est indépendant.',
            'Presque $1$ car la pièce semble favoriser face.',
            '$\\dfrac{1}{2^{11}}$ car il faut multiplier les probabilités.'
          ],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est indépendant des précédents. La pièce n\'a pas de mémoire. La probabilité reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le sophisme du joueur.'
        }
      ]
    }
  });
