/* =========================================================
   Spark Learning – data/lycee-1re/1re-information-chiffree.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-information-chiffree',
    level: 2, subject: 'maths',
    icon: '💹',
    title: 'Information chiffrée',
    subtitle: 'Pourcentages, évolutions, indices',
    keywords: ['Pourcentage', 'Évolution', 'Taux', 'Indice', 'Coefficient multiplicateur'],
    physics: false,
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version donnait le
         coefficient multiplicateur, sa formule, puis l'erreur à éviter : elle
         fournissait la réponse avant d'avoir posé la question.

         La question retenue est une situation où l'intuition donne une réponse
         FAUSSE, et non approximative — on ne peut donc pas y répondre sans la
         notion. Elle a par ailleurs l'avantage d'être vérifiable de tête par
         l'élève lui-même, ce qui est rare et ce qui rend le résultat
         incontestable. */
      intro: 'Un magasin affiche une promotion de $30\\%$, puis, deux semaines plus tard, une seconde promotion de $20\\%$ sur les prix déjà réduits.<br/><br/><strong>La réduction totale est-elle de $50\\%$ ?</strong><br/><br/>Vérifie-le sur un prix rond. Un article à $100$ € passe d\'abord à $70$ €. La seconde promotion retire $20\\%$ de $70$ €, c\'est-à-dire $14$ €, et non $20$ € : le prix final est $56$ €.<br/><br/>La réduction totale est donc de $44\\%$, et pas de $50\\%$.<br/><br/>Ce n\'est pas une subtilité : le second pourcentage ne porte pas sur la même somme que le premier. Un pourcentage n\'est jamais un nombre tout seul, c\'est toujours un pourcentage <strong>de quelque chose</strong>, et cette base change à chaque étape.<br/><br/>Tout ce chapitre sert à ne plus se faire piéger. L\'outil s\'appelle le <strong>coefficient multiplicateur</strong> : au lieu de manipuler des taux qui ne s\'additionnent pas, on manipule des nombres qui, eux, se multiplient sans jamais mentir.',
      definitions: [
        { term: 'Taux d\'évolution', def: 'Le <strong>taux d\'évolution</strong> entre une valeur initiale $V_i$ et une valeur finale $V_f$ est $t = \\dfrac{V_f - V_i}{V_i}$. Il s\'exprime en décimal ou en pourcentage.' },
        { term: 'Coefficient multiplicateur', def: 'Le <strong>coefficient multiplicateur</strong> (CM) est $1 + t$ (avec $t$ en décimal). On a $V_f = V_i \\times CM$. Hausse de $20\\%$ : $CM = 1{,}2$ ; baisse de $15\\%$ : $CM = 0{,}85$.' },
        { term: 'Évolutions successives', def: 'Pour des évolutions successives, on <strong>multiplie</strong> les CM : $CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\cdots$ Attention : on n\'additionne <strong>jamais</strong> les taux !' },
        { term: 'Taux réciproque', def: 'Le <strong>taux réciproque</strong> est celui qui ramène au prix initial : $CM_{\\text{réciproque}} = \\dfrac{1}{CM}$. Après $+25\\%$ ($CM = 1{,}25$), il faut une baisse de $1 - 1/1{,}25 = 20\\%$.' }
      ],
      method: {
        title: 'Calculer un taux d\'évolution',
        steps: [
          '<strong>Taux d\'évolution</strong> : $t = \\dfrac{V_{final} - V_{initial}}{V_{initial}}$.',
          '<strong>Coefficient multiplicateur</strong> : $CM = 1 + t$ (si $t$ en décimal).',
          '<strong>Évolutions successives</strong> : multiplier les CM ($CM_{total} = CM_1 \\times CM_2$).',
          '<strong>Taux réciproque</strong> : $t_{reciproque} = \\dfrac{1}{CM}-1$.'
        ]
      },
      example: {
        statement: 'Un abonnement coûte $50$ € en 2023. Il augmente de $8\\%$ en 2024, puis de $5\\%$ en 2025. Calculer le prix en 2025 et le taux d\'évolution global entre 2023 et 2025.',
        steps: [
          'Prix en 2024 : on multiplie par le <strong>coefficient multiplicateur</strong> associé à la hausse de $8\\%$, soit $CM_1 = 1 + \\dfrac{8}{100} = 1{,}08$.<br/><br/>$P_{2024} = 50 \\times 1{,}08 = 54$ €.',
          'Prix en 2025 : on applique le second coefficient, associé à la hausse de $5\\%$, soit $CM_2 = 1{,}05$.<br/><br/>$P_{2025} = 54 \\times 1{,}05 = 56{,}7$ €.',
          'Coefficient multiplicateur global : pour des <strong>évolutions successives</strong>, on multiplie les CM (on n\'additionne jamais les taux).<br/><br/>$CM_{global} = CM_1 \\times CM_2 = 1{,}08 \\times 1{,}05 = 1{,}134$.',
          'Taux d\'évolution global : $t_{global} = CM_{global} - 1 = 1{,}134 - 1 = 0{,}134$, soit $+13{,}4\\%$.<br/><br/>Vérification directe : $50 \\times 1{,}134 = 56{,}7$ € ✓.'
        ],
        answer: 'Le prix en 2025 est $56{,}7$ €, ce qui correspond à une hausse globale de $+13{,}4\\%$ entre 2023 et 2025 — et non $8\\% + 5\\% = 13\\%$, qui serait l\'erreur classique de l\'addition des taux.'
      },
      formulas: [
        '$t = \\dfrac{V_f - V_i}{V_i}$',
        '$CM = 1 + t$',
        '$CM_{total} = CM_1 \\times CM_2 \\times \\cdots$',
        'Taux réciproque : $CM_{reciproque} = \\dfrac{1}{CM}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Évolutions successives',
        title: 'Frise multiplicative — les coefficients se composent par multiplication',
        description: 'Sur l\'exemple du cours : un abonnement de $50$ € en 2023 augmente de $8\\%$ en 2024 puis de $5\\%$ en 2025. Chaque flèche multiplie par un coefficient multiplicateur ; le lien direct entre $V_i$ et $V_f$ est le produit des deux coefficients, jamais leur somme.',
        svg: `
          <svg viewBox="0 0 640 300" role="img" aria-labelledby="info-chiffree-title info-chiffree-desc">
            <title id="info-chiffree-title">Frise des evolutions successives du prix de l'abonnement</title>
            <desc id="info-chiffree-desc">Frise horizontale en trois etapes. Valeur initiale Vi egale 50 euros en 2023. Apres multiplication par le coefficient multiplicateur 1,08, correspondant a une hausse de 8 pourcent, valeur intermediaire Vinterm egale 54 euros en 2024. Apres multiplication par le coefficient multiplicateur 1,05, correspondant a une hausse de 5 pourcent, valeur finale Vf egale 56,7 euros en 2025. Un arc en pointilles en dessous relie directement Vi a Vf et indique le coefficient multiplicateur global, produit des deux coefficients successifs, egal a 1,134, soit une hausse globale de 13,4 pourcent.</desc>

            <defs>
              <marker id="arrow-info-chiffree" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
              <marker id="arrow-info-chiffree-soft" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--text-muted)"></path>
              </marker>
            </defs>

            <!-- etape Vi : 2023 -->
            <circle class="plot-point" cx="90" cy="90" r="7"></circle>
            <text class="annotation-label" x="90" y="50" text-anchor="middle">Vi = 50 €</text>
            <text class="label-soft" x="90" y="115" text-anchor="middle">2023</text>

            <!-- fleche 1 : hausse de 8% -->
            <line class="curve-main" x1="100" y1="90" x2="330" y2="90" marker-end="url(#arrow-info-chiffree)"></line>
            <text class="annotation-label" x="215" y="75" text-anchor="middle">CM1 = 1,08 (+8 %)</text>

            <!-- etape Vinterm : 2024 -->
            <circle class="plot-point" cx="340" cy="90" r="7"></circle>
            <text class="annotation-label" x="340" y="50" text-anchor="middle">Vinterm = 54 €</text>
            <text class="label-soft" x="340" y="115" text-anchor="middle">2024</text>

            <!-- fleche 2 : hausse de 5% -->
            <line class="curve-main" x1="350" y1="90" x2="580" y2="90" marker-end="url(#arrow-info-chiffree)"></line>
            <text class="annotation-label" x="465" y="75" text-anchor="middle">CM2 = 1,05 (+5 %)</text>

            <!-- etape Vf : 2025 -->
            <circle class="plot-point" cx="590" cy="90" r="7"></circle>
            <text class="annotation-label" x="590" y="50" text-anchor="middle">Vf = 56,7 €</text>
            <text class="label-soft" x="590" y="115" text-anchor="middle">2025</text>

            <!-- arc global Vi -> Vf -->
            <path class="guide-line" d="M90,100 C90,235 590,235 590,100" fill="none" marker-end="url(#arrow-info-chiffree-soft)"></path>
            <text class="label-soft" x="340" y="260" text-anchor="middle">CM global = 1,08 × 1,05 = 1,134 → +13,4 %</text>
          </svg>
        `,
        notes: [
          '$V_i = 50$ € (2023) $\\times\\, CM_1 = 1{,}08 \\Rightarrow V_{interm} = 54$ € (2024).',
          '$V_{interm} = 54$ € $\\times\\, CM_2 = 1{,}05 \\Rightarrow V_f = 56{,}7$ € (2025).',
          'Coefficient global : $CM_{global} = CM_1 \\times CM_2 = 1{,}08 \\times 1{,}05 = 1{,}134$, soit $+13{,}4\\%$ — et non $8\\% + 5\\% = 13\\%$.'
        ],
        reading: 'Suis la frise de gauche à droite : chaque flèche pleine multiplie par le coefficient indiqué. L\'arc en pointillés en dessous rappelle que le lien direct entre $V_i$ et $V_f$ est le produit $CM_1 \\times CM_2$, jamais la somme des taux.',
        caption: 'Frise de l\'exemple du cours : abonnement à $50$ € (2023) $\\to$ $54$ € (2024, $+8\\%$) $\\to$ $56{,}7$ € (2025, $+5\\%$). Coefficient global $CM_{global} = 1{,}134$, soit $+13{,}4\\%$.'
      },
      recap: [
        'Le <strong>coefficient multiplicateur</strong> se calcule toujours par $CM = 1 + t$, avec $t$ en décimal (positif pour une hausse, négatif pour une baisse).',
        'Pour des <strong>évolutions successives</strong>, on <strong>multiplie</strong> les coefficients multiplicateurs : $CM_{global} = CM_1 \\times CM_2 \\times \\cdots$ — on n\'additionne jamais les taux entre eux.',
        'Pour retrouver une valeur initiale, on <strong>divise</strong> par le CM (et non on soustrait le pourcentage du prix final, dont la base de référence n\'est plus la même).',
        'Le <strong>taux réciproque</strong>, qui compense exactement une évolution, se calcule avec $CM_{réciproque} = \\dfrac{1}{CM}$ : il n\'est jamais égal à l\'opposé du taux initial.'
      ],
      piege: 'Une hausse de $20\\%$ puis une baisse de $20\\%$ ne revient <strong>pas</strong> au point de départ !<br/><br/>En effet : $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de $4\\%$. Les taux ne s\'additionnent pas, les CM se multiplient.'
    },
    quiz: [
      { q: 'Un article vaut $120$ € après une hausse de $25\\%$. Un élève calcule le prix initial ainsi : $120 - 25\\% \\times 120 = 120 - 30 = 90$ €. Quelle est son erreur ?', options: ['Il a soustrait $25\\%$ du prix FINAL ; il faut diviser par le CM : $V_i = 120 \\div 1{,}25 = 96$ €', 'L\'élève a raison, le prix initial est bien $90$ €', 'Il fallait utiliser le taux réciproque : $120 \\times 0{,}75 = 90$ €', '$25\\%$ de $120 = 30$ donc $120 - 30 = 90$ est correct'], answer: 0, correction: 'Pour retrouver le prix initial APRÈS une hausse de $25\\%$, il faut diviser par le CM $= 1{,}25$ : $V_i = 120 / 1{,}25 = 96$ €. L\'erreur de l\'élève : il applique $25\\%$ au prix FINAL ($120$ €) alors que la hausse de $25\\%$ avait été calculée sur le prix INITIAL. Vérification : $96 \\times 1{,}25 = 120$ ✓ — et non $90 \\times 1{,}25 = 112{,}5 \\neq 120$.' },
      { q: 'Un article coûte $80$ € après une baisse de $20\\%$. Son prix initial était :', options: ['$64$ €', '$96$ €', '$100$ €', '$104$ €'], answer: 2, correction: '$80 = V_i \\times 0{,}8 \\Rightarrow V_i = 80/0{,}8 = 100$ €.' },
      { q: 'Hausse de $10\\%$ puis baisse de $10\\%$ : taux global ?', options: ['$0\\%$', '$-1\\%$', '$+1\\%$', '$-0{,}1\\%$'], answer: 1, correction: '$CM=1{,}1\\times0{,}9=0{,}99$ : baisse de $1\\%$.' },
      { q: 'Un prix augmente de $25\\%$. Quel taux réciproque (baisse) permet de revenir exactement au prix initial ?', options: ['Une baisse de $25\\%$ (le même taux)', 'Une baisse de $20\\%$', 'Une baisse de $30\\%$', 'Une baisse de $16\\%$'], answer: 1, correction: 'Le taux réciproque se calcule avec $CM_{réciproque} = \\dfrac{1}{CM}$, où $CM = 1{,}25$.<br/><br/>$\\dfrac{1}{1{,}25} = 0{,}8$, ce qui correspond à une <strong>baisse de $20\\%$</strong> — et non $25\\%$, qui est l\'erreur classique consistant à croire que le taux inverse est le même taux avec un signe opposé.<br/><br/>Vérification : $100 \\times 1{,}25 \\times 0{,}8 = 100$ €, on revient bien au prix initial.' },
      { q: 'Un salaire subit trois évolutions successives : $+3\\%$, puis $-2\\%$, puis $+4\\%$. Quel est le coefficient multiplicateur global (arrondi au millième) ?', options: ['$1{,}010$', '$1{,}050$', '$1{,}090$', '$1{,}004$'], answer: 1, correction: 'On <strong>multiplie</strong> les trois coefficients multiplicateurs successifs, on n\'additionne jamais les taux entre eux : $CM_1 = 1{,}03$ (hausse de $3\\%$), $CM_2 = 0{,}98$ (baisse de $2\\%$), $CM_3 = 1{,}04$ (hausse de $4\\%$).<br/><br/>$CM_{global} = 1{,}03 \\times 0{,}98 \\times 1{,}04 = 1{,}049776 \\approx 1{,}050$.<br/><br/>Ici le résultat est proche de $3\\% - 2\\% + 4\\% = 5\\%$, mais c\'est une coïncidence liée aux petits taux : la méthode par multiplication des CM reste la seule exacte, quels que soient les taux.' }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-14. Mesure d'avant : 24 tirages pour UNE
         SEULE tâche réelle — appliquer une hausse — habillée de HUIT décors.
         C'est le cas le plus net du niveau : le décor fabriquait huit moules
         distincts là où l'élève rencontrait un unique exercice, répété.

         Sept tâches distinctes désormais, et ce ne sont pas des variantes de
         la première : chacune correspond à une erreur que la fiche professeur
         diagnostique.
           t1 appliquer une évolution (la tâche d'origine, conservée) ;
           t2 retrouver la valeur INITIALE, qui demande de diviser et non de
              soustraire — l'erreur la plus coûteuse du chapitre ;
           t3 calculer un taux d'évolution à partir de deux valeurs ;
           t4 composer deux évolutions successives, où les taux ne s'ajoutent
              pas ;
           t5 trouver le taux réciproque, celui qui annule une évolution ;
           t6 lire un indice base 100 ;
           t7 taux moyen d'évolution sur plusieurs années, par racine n-ième. */
      generate() {
        const tache = pick(['appliquer', 'initiale', 'taux', 'successives', 'reciproque', 'indice', 'moyen']);

        /* Chaque décor porte maintenant QUATRE champs, et non deux. Les tâches
           qui n'annoncent pas de valeur chiffrée ont besoin d'une formulation
           distincte : « Une ville compte une certaine somme » n'a aucun sens,
           et une réécriture automatique de l'article (« un action boursière »)
           cassait l'accord. Les deux défauts ont été trouvés en mesurant le
           tirage réel, pas à la relecture. */
        const DECORS = pick([
          { intro: 'Un produit coûte', unit: '€', sujet: 'Son prix', quoi: 'Le prix d\'un produit', court: 'ce prix', echelle: 1 },
          { intro: 'Un salarié touche un salaire mensuel de', unit: '€', sujet: 'Son salaire', quoi: 'Le salaire mensuel d\'un employé', court: 'ce salaire', echelle: 1 },
          /* `echelle` : multiplicateur appliqué aux valeurs chiffrées. Sans lui,
             une même plage de tirage produisait « une ville compte 228
             habitants » à côté de « un produit coûte 228 € » — le second est
             plausible, le premier non. */
          { intro: 'Une ville compte', unit: 'habitants', sujet: 'Sa population', quoi: 'La population d\'une ville', court: 'cette population', echelle: 100 },
          { intro: 'Une action boursière cote', unit: '€', sujet: 'Son cours', quoi: 'Le cours d\'une action boursière', court: 'ce cours', echelle: 1 },
          { intro: 'Un foyer consomme', unit: 'kWh par mois', sujet: 'Sa consommation d\'énergie', quoi: 'La consommation d\'énergie d\'un foyer', court: 'cette consommation', echelle: 1 },
          { intro: 'Un appartement se loue', unit: '€ par mois', sujet: 'Son loyer', quoi: 'Le loyer d\'un appartement', court: 'ce loyer', echelle: 1 },
          { intro: 'Une entreprise réalise un chiffre d\'affaires de', unit: 'milliers d\'euros', sujet: 'Son chiffre d\'affaires', quoi: 'Le chiffre d\'affaires d\'une entreprise', court: 'ce chiffre d\'affaires', echelle: 1 }
        ]);

        if (tache === 'appliquer') {
          const ctx = DECORS;
          const vi = rand(50, 200) * 2 * ctx.echelle, tp = rand(5, 30);
          const cm = 1 + tp / 100;
          const vf = Math.round(vi * cm * 100) / 100;
          return {
            statement: `${ctx.intro} $${vi}$ ${ctx.unit}. ${ctx.sujet} augmente de $${tp}\\%$.<br/><br/>Quelle est la nouvelle valeur ?`,
            answer: vf, tolerance: 0.01, unit: ctx.unit,
            hint: `Une hausse de $${tp}\\%$ se traduit par le coefficient multiplicateur $CM = 1 + \\dfrac{${tp}}{100} = ${fr(cm, 2)}$.`,
            solution: [
              `Une hausse de $${tp}\\%$ correspond au coefficient multiplicateur $CM = 1 + \\dfrac{${tp}}{100} = ${fr(cm, 2)}$.`,
              `La nouvelle valeur vaut donc $${vi} \\times ${fr(cm, 2)} = ${fr(vf, 2)}$ ${ctx.unit}.`
            ]
          };
        }

        if (tache === 'initiale') {
          /* L'erreur la plus coûteuse du chapitre : on divise par le CM, on ne
             soustrait pas le pourcentage de la valeur finale. Les nombres sont
             choisis pour que la valeur initiale tombe juste. */
          const tp = pick([10, 20, 25, 50]);
          const cm = 1 + tp / 100;
          const ctx = DECORS;
          const vi = rand(20, 120) * 4 * ctx.echelle;
          const vf = Math.round(vi * cm * 100) / 100;
          return {
            statement: `${ctx.quoi} vaut $${fr(vf, 2)}$ ${ctx.unit} après une hausse de $${tp}\\%$.<br/><br/>Quelle était sa valeur <strong>avant</strong> cette hausse ?`,
            answer: vi, tolerance: 0.05, unit: ctx.unit,
            hint: `Attention : retirer $${tp}\\%$ de la valeur finale ne redonne pas la valeur initiale, car le pourcentage ne porte pas sur la même base. Il faut faire l'opération inverse de la multiplication.`,
            solution: [
              `La hausse s'est traduite par une multiplication par $${fr(cm, 2)}$ : pour revenir en arrière, on <strong>divise</strong> par ce même coefficient.`,
              `La valeur initiale vaut donc $\\dfrac{${fr(vf, 2)}}{${fr(cm, 2)}} = ${fr(vi, 2)}$ ${ctx.unit}.`,
              `Vérification du piège : retirer $${tp}\\%$ de $${fr(vf, 2)}$ donnerait $${fr(Math.round(vf * (1 - tp / 100) * 100) / 100, 2)}$ ${ctx.unit}, ce qui est faux. Le pourcentage de départ portait sur la valeur initiale, pas sur la finale.`
            ]
          };
        }

        if (tache === 'taux') {
          const ctx = DECORS;
          const vi = rand(20, 100) * 5 * ctx.echelle;
          const tp = pick([-25, -20, -10, 8, 12, 15, 24, 40]);
          const vf = Math.round(vi * (1 + tp / 100) * 100) / 100;
          return {
            statement: `${ctx.intro} $${vi}$ ${ctx.unit} au mois de janvier, puis $${fr(vf, 2)}$ ${ctx.unit} au mois de juin.<br/><br/>Calculer le taux d'évolution entre ces deux dates, en pourcentage.<br/><br/>Donner le résultat en pourcentage (un nombre négatif s'il s'agit d'une baisse).`,
            answer: tp, tolerance: 0.1, unit: '%',
            hint: `Le taux d'évolution se calcule par $\\dfrac{V_f - V_i}{V_i} \\times 100$. Le dénominateur est toujours la valeur de DÉPART.`,
            solution: [
              `Le taux d'évolution se calcule par la formule $t = \\dfrac{V_f - V_i}{V_i} \\times 100$, dont le dénominateur est toujours la valeur de départ.`,
              `On remplace : $t = \\dfrac{${fr(vf, 2)} - ${vi}}{${vi}} \\times 100 = \\dfrac{${fr(Math.round((vf - vi) * 100) / 100, 2)}}{${vi}} \\times 100$.`,
              `On obtient $t = ${fr(tp)}\\%$, ce qui correspond à ${tp < 0 ? 'une <strong>baisse</strong>' : 'une <strong>hausse</strong>'}.`
            ]
          };
        }

        if (tache === 'successives') {
          /* Le cœur du chapitre : les taux ne s'additionnent PAS. On choisit
             des taux dont la somme serait visiblement fausse. */
          const t1 = pick([10, 20, 25, 30]);
          const t2 = pick([-20, -10, 10, 20]);
          const cmGlobal = (1 + t1 / 100) * (1 + t2 / 100);
          const tGlobal = Math.round((cmGlobal - 1) * 10000) / 100;
          const ctx = DECORS;
          return {
            statement: `${ctx.quoi} ${t1 > 0 ? 'augmente' : 'baisse'} d'abord de $${Math.abs(t1)}\\%$, puis ${t2 > 0 ? 'augmente' : 'baisse'} de $${Math.abs(t2)}\\%$.<br/><br/>Calculer le taux d'évolution <strong>global</strong> sur les deux périodes, en pourcentage.<br/><br/>Arrondir à $0{,}01$.`,
            answer: tGlobal, tolerance: 0.02, unit: '%',
            hint: `Les taux ne s'additionnent pas : ce sont les coefficients multiplicateurs qui se multiplient. Calcule d'abord les deux coefficients, puis leur produit.`,
            solution: [
              `Les taux d'évolution ne s'additionnent jamais : ce sont les coefficients multiplicateurs qui se multiplient, parce que la seconde évolution porte sur une base déjà modifiée.`,
              `Les deux coefficients valent $${fr(1 + t1 / 100, 2)}$ et $${fr(1 + t2 / 100, 2)}$, et leur produit donne le coefficient global $${fr(Math.round(cmGlobal * 10000) / 10000, 4)}$.`,
              `Le taux global vaut donc $(${fr(Math.round(cmGlobal * 10000) / 10000, 4)} - 1) \\times 100 = ${fr(tGlobal, 2)}\\%$, et non $${fr(t1 + t2)}\\%$ comme le donnerait une addition.`
            ]
          };
        }

        if (tache === 'reciproque') {
          const t1 = pick([10, 20, 25, 50, 60]);
          const cm = 1 + t1 / 100;
          const tRec = Math.round((1 / cm - 1) * 10000) / 100;
          const ctx = DECORS;
          return {
            statement: `${ctx.quoi} augmente de $${t1}\\%$.<br/><br/>De quel pourcentage faut-il ensuite faire <strong>baisser</strong> ${ctx.court} pour revenir exactement à la valeur de départ ?<br/><br/>Donner le taux en pourcentage, sous forme négative, arrondi à $0{,}01$.`,
            answer: tRec, tolerance: 0.02, unit: '%',
            hint: `Il faut trouver le coefficient qui, multiplié par $${fr(cm, 2)}$, redonne $1$. Ce n'est pas $1 - \\dfrac{${t1}}{100}$.`,
            solution: [
              `Revenir à la valeur de départ signifie que le produit des deux coefficients vaut $1$ : le second coefficient est donc l'inverse du premier.`,
              `Il vaut $\\dfrac{1}{${fr(cm, 2)}} = ${fr(Math.round(10000 / cm) / 10000, 4)}$, ce qui correspond à un taux de $${fr(tRec, 2)}\\%$.`,
              `Une baisse de $${t1}\\%$ ne conviendrait pas : elle donnerait un coefficient global de $${fr(Math.round(cm * (1 - t1 / 100) * 10000) / 10000, 4)}$, différent de $1$. Une hausse et une baisse de même taux ne se compensent jamais.`
            ]
          };
        }

        if (tache === 'indice') {
          const tp = pick([-15, -8, 6, 12, 18, 24]);
          const indice = Math.round((100 + tp) * 10) / 10;
          const vi = rand(30, 90) * 10;
          const vf = Math.round(vi * indice) / 100;
          return {
            statement: `En prenant l'année $2020$ comme référence, on lui attribue l'indice $100$. En $2024$, l'indice de la même grandeur vaut $${fr(indice, 1)}$.<br/><br/>La grandeur valait $${vi}$ unités en $2020$. Quelle est sa valeur en $2024$ ?<br/><br/>Arrondir à $0{,}01$.`,
            answer: vf, tolerance: 0.05, unit: '',
            hint: `Un indice de $${fr(indice, 1)}$ signifie que la grandeur vaut $${fr(indice, 1)}$ quand elle valait $100$ : le coefficient multiplicateur est donc $\\dfrac{${fr(indice, 1)}}{100}$.`,
            solution: [
              `Un indice base $100$ est un coefficient multiplicateur déguisé : passer de l'indice $100$ à l'indice $${fr(indice, 1)}$ revient à multiplier par $\\dfrac{${fr(indice, 1)}}{100} = ${fr(Math.round(indice) / 100, 2)}$.`,
              `La valeur en $2024$ vaut donc $${vi} \\times ${fr(Math.round(indice) / 100, 2)} = ${fr(vf, 2)}$ unités.`,
              `L'indice dit aussi directement le taux d'évolution : $${fr(indice, 1)} - 100 = ${fr(tp)}$, soit ${tp < 0 ? 'une baisse' : 'une hausse'} de $${fr(Math.abs(tp))}\\%$ sur la période.`
            ]
          };
        }

        // tache === 'moyen' : taux moyen d'évolution, par racine n-ième.
        const annees = pick([2, 3, 4]);
        const tGlob = pick([21, 33, 44, 61, 69]);
        const cmGlob = 1 + tGlob / 100;
        const tMoy = Math.round((Math.pow(cmGlob, 1 / annees) - 1) * 10000) / 100;
        return {
          statement: `Sur une période de $${annees}$ ans, une grandeur a augmenté de $${tGlob}\\%$ au total.<br/><br/>Calculer le taux d'évolution <strong>moyen annuel</strong>, c'est-à-dire le taux qui, appliqué $${annees}$ fois de suite, donnerait la même évolution globale.<br/><br/>Donner le taux en pourcentage, arrondi à $0{,}01$.`,
          answer: tMoy, tolerance: 0.03, unit: '%',
          hint: `Le taux moyen n'est pas $\\dfrac{${tGlob}}{${annees}}$ : ce serait vrai si les évolutions s'additionnaient. Cherche le coefficient $c$ tel que $c^{${annees}} = ${fr(cmGlob, 2)}$.`,
          solution: [
            `Le taux moyen annuel est celui dont le coefficient, appliqué $${annees}$ fois, redonne le coefficient global : on cherche $c$ tel que $c^{${annees}} = ${fr(cmGlob, 2)}$.`,
            `On obtient $c = ${fr(cmGlob, 2)}^{1/${annees}} \\approx ${fr(Math.round(Math.pow(cmGlob, 1 / annees) * 10000) / 10000, 4)}$, soit un taux moyen de $${fr(tMoy, 2)}\\%$ par an.`,
            `Diviser le taux global par $${annees}$ donnerait $${fr(Math.round(tGlob / annees * 100) / 100, 2)}\\%$, ce qui est <strong>trop élevé</strong> : appliqué $${annees}$ fois, ce taux dépasserait l'évolution réellement observée.`
          ]
        };
      }
    },
    probleme: {
      context: 'Le chiffre d\'affaires d\'une entreprise était de $500\\,000$ € en 2020. Il a augmenté de $8\\%$ en 2021, puis baissé de $5\\%$ en 2022.',
      tasks: [
        'Calculer le chiffre d\'affaires en 2021 et en 2022.',
        'Calculer le coefficient multiplicateur global sur les deux années.',
        'Calculer le taux d\'évolution global entre 2020 et 2022.'
      ],
      solutions: [
        '$CA_{2021}=500000\\times1{,}08=540000$ € ; $CA_{2022}=540000\\times0{,}95=513000$ €.',
        '$CM=1{,}08\\times0{,}95=1{,}026$.',
        '$t=(1{,}026-1)\\times100=+2{,}6\\%$.'
      ],
      finalAnswer: '$CA_{2022}=513\\,000$ €. Évolution globale : $+2{,}6\\%$ sur deux ans.'
    },

    evaluation: {
      title: 'Évaluation — Information chiffrée',
      duration: '30 min',
      questions: [
        {
          /* QUESTION 1 RÉÉCRITE le 2026-09-14, pour deux raisons.

             Sur le fond : elle demandait d'appliquer une hausse, avec une
             correction d'une seule ligne sans aucune explication. C'est le
             geste le plus élémentaire du chapitre, déjà travaillé douze fois
             dans la banque, et il ouvrait le devoir sans rien apprendre.

             Sur l'équilibre : mesuré sur les cinquante questions du niveau,
             « calculer » dépassait le plafond de 35 % du cahier des charges,
             tandis que « chercher » restait sous 5 %. La nouvelle question ne
             donne aucune méthode : l'élève doit décider lui-même par où
             entrer, et l'ordre des deux opérations est précisément ce qui est
             en jeu. L'étiquette suit l'énoncé. */
          statement: 'Un magasin annonce « $-20\\%$ sur tout le rayon », et un bon de réduction supplémentaire de $10\\%$ est valable en caisse.<br/><br/>Un client se demande s\'il a intérêt à ce que la caissière applique d\'abord la remise du rayon, ou d\'abord le bon.<br/><br/>Quel est le prix final d\'un article à $50$ € ?',
          type: 'numeric',
          answer: 36,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'La question sous-entend que l\'ordre pourrait changer le résultat : c\'est justement ce qu\'il faut éprouver.<br/><br/>Dans un sens : $50 \\times 0{,}8 = 40$ € puis $40 \\times 0{,}9 = 36$ €.<br/><br/>Dans l\'autre : $50 \\times 0{,}9 = 45$ € puis $45 \\times 0{,}8 = 36$ €.<br/><br/>Les deux chemins donnent $36$ €, et ce n\'est pas un hasard : le prix final vaut $50 \\times 0{,}8 \\times 0{,}9$, et la multiplication ne dépend pas de l\'ordre de ses facteurs. <strong>L\'ordre des remises n\'a donc aucune importance</strong>, ce qui est un argument utile à connaître en caisse.<br/><br/>Remarque : la remise totale est de $28\\%$ et non de $30\\%$, puisque $0{,}8 \\times 0{,}9 = 0{,}72$.'
        },
        {
          statement: 'Un produit coûte $180$ € après une baisse de $10\\%$. Quel était son prix initial ?',
          type: 'numeric',
          answer: 200,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$180 = V_i \\times 0{,}9$, donc $V_i = \\dfrac{180}{0{,}9} = 200$ €.'
        },
        {
          statement: 'Un prix augmente de $20\\%$ puis diminue de $15\\%$. Le coefficient multiplicateur global est :',
          type: 'numeric',
          answer: 1.02,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$CM = 1{,}20 \\times 0{,}85 = 1{,}02$. Cela correspond à une hausse globale de $2\\%$.'
        },
        {
          statement: 'Le loyer d\'un appartement passe de $800$ € à $856$ €. Quel est le taux d\'évolution ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$t = \\dfrac{856 - 800}{800} = \\dfrac{56}{800} = 0{,}07 = 7\\%$.'
        },
        /* QUESTION 5 RÉÉCRITE le 2026-09-14. Elle demandait le taux global de
           deux hausses de 10 %, c'est-à-dire le MÊME geste que la question 3,
           qui portait déjà sur la composition de deux évolutions : deux
           questions du devoir évaluaient la même chose, et les cinq relevaient
           toutes de « calculer ».

           La nouvelle question demande d'expliquer un raisonnement faux à
           quelqu'un d'autre, ce que le devoir ne demandait nulle part : elle
           porte donc « communiquer », une des deux compétences les plus rares
           du niveau. Elle reste corrigeable objectivement, l'explication
           attendue étant l'une des quatre propositions. */
        {
          statement: 'Un commerçant augmente ses prix de $20\\%$ en janvier, puis les baisse de $20\\%$ en février. Il affirme à ses clients : « les prix sont revenus exactement à leur niveau de départ ».<br/><br/>Que lui répondrais-tu ?',
          type: 'multiple-choice',
          options: [
            'Il se trompe : les prix ont en réalité baissé de $4\\%$, car la baisse s\'applique à un prix déjà augmenté, donc plus élevé',
            'Il a raison : une hausse et une baisse de même taux se compensent toujours',
            'Il se trompe : les prix ont en réalité augmenté de $4\\%$, car la hausse vient en premier',
            'On ne peut pas répondre sans connaître le prix de départ'
          ],
          answer: 0,
          points: 2,
          correction: 'Le raisonnement du commerçant est celui de l\'addition des taux : $+20\\%$ puis $-20\\%$ feraient $0$. Mais les taux ne s\'additionnent pas, parce que les deux pourcentages ne portent pas sur la même somme.<br/><br/>Le calcul exact passe par les coefficients : $1{,}2 \\times 0{,}8 = 0{,}96$, soit une <strong>baisse</strong> de $4\\%$.<br/><br/>On peut le vérifier de tête sur $100$ € : le prix monte à $120$ €, puis la baisse de $20\\%$ retire $24$ € — et non $20$ € — pour aboutir à $96$ €.<br/><br/>La réponse ne dépend pas du prix de départ : le coefficient global vaut $0{,}96$ quel que soit ce prix, et c\'est justement ce qui fait la force du coefficient multiplicateur.'
        }
      ]
    }
  });
