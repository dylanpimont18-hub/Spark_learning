/* =========================================================
   Spark Learning – data/5e/5e-proportionnalite.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-proportionnalite',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Proportionnalité appliquée',
    subtitle: 'Pourcentages, échelles, vitesse moyenne',
    keywords: ['Proportionnalité', 'Pourcentage', 'Échelle', 'Vitesse', 'Distance', 'Durée'],
    physics: 'Calcul de la vitesse moyenne d\'un mobile, lecture d\'échelles sur une carte ou un plan d\'architecte',

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur la definition de
         la proportionnalite. La question retenue oppose deux situations qui se
         RESSEMBLENT — deux grandeurs qui augmentent ensemble — et dont une
         seule est proportionnelle : c'est la reconnaissance, et non le calcul,
         qui est la difficulte du chapitre. Valeur VERIFIEE : 3,60 / 3 x 7 =
         8,40 EUR. */
      intro: 'Trois croissants coûtent $3{,}60$ €. Combien coûtent sept croissants ? Un enfant de $2$ ans mesure $86$ cm. Combien mesure-t-il à $8$ ans ?<br/><br/>' +
        'La première question a une réponse, $8{,}40$ €. La seconde n\'en a pas. Pourtant les deux se ressemblent : dans les deux cas, une grandeur augmente quand l\'autre augmente. Ce qui les sépare n\'est donc pas le calcul, c\'est de savoir quand tu as le <strong>droit</strong> de le faire.<br/><br/>' +
        'La proportionnalité est l\'outil mathématique de la <strong>mise à l\'échelle</strong> : quand on double une grandeur, l\'autre double aussi. Les pourcentages sont un cas particulier où le coefficient est exprimé sur 100.<br/><br/>' +
        '<strong>Piège courant avec les pourcentages :</strong> une baisse de $20\\%$ puis une hausse de $20\\%$ ne revient PAS au prix initial ! Exemple : $100 \\to 80 \\to 96$ (pas $100$). En effet $0{,}8 \\times 1{,}2 = 0{,}96$.<br/><br/>' +
        'Les <strong>échelles cartographiques</strong> sont des rapports : $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte = $25\\,000$ cm = $250$ m en réalité.<br/><br/>' +
        'La <strong>vitesse</strong> $v = \\dfrac{d}{t}$ est le coefficient de proportionnalité entre distance et temps quand la vitesse est constante.<br/><br/>' +
        'Toujours vérifier que la distance et la durée sont dans les unités de la vitesse : des kilomètres et des heures pour des km/h.',
      definitions: [
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100. $p\\%$ de $T = \\dfrac{p}{100} \\times T$.' },
        { term: 'Échelle', def: 'Rapport entre une distance sur un plan et la distance réelle correspondante. Échelle $\\dfrac{1}{25\\,000}$ → 1 cm = 250 m.' },
        { term: 'Vitesse moyenne', def: 'Quotient de la distance totale par le temps total : $v = \\dfrac{d}{t}$. S\'exprime en km/h ou m/s.' },
        { term: 'Coefficient multiplicateur', def: 'Facteur par lequel on multiplie pour appliquer une variation. $+20\\% \\to \\times 1{,}20$ ; $-15\\% \\to \\times 0{,}85$.' }
      ],
      example: {
        statement: 'Un jean coûte $60$ €. Il est soldé à $-30\\%$. Quel est le nouveau prix ?',
        steps: [
          'Réduction : $30\\%$ de $60 = \\dfrac{30}{100} \\times 60 = 18$ €.',
          'Nouveau prix : $60 - 18 = 42$ €.',
          'Ou directement : $60 \\times 0{,}70 = 42$ €.'
        ],
        answer: '$42$ €'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Échelle et proportionnalité',
        title: 'Une carte à l\'échelle 1/25 000 : du papier au terrain',
        description: 'D\'après le cours, l\'échelle $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte représente $250$ m dans la réalité. En appliquant le même coefficient, $6$ cm représentent $6 \\times 250 = 1\\,500$ m, comme dans l\'évaluation du module.',
        svg: `
          <svg viewBox="0 0 400 230" role="img" aria-labelledby="echelle-title echelle-desc">
            <title id="echelle-title">Double regle carte et distance reelle a l'echelle 1 sur 25000</title>
            <desc id="echelle-desc">Deux regles horizontales alignees : distance sur la carte en centimetres en haut, distance reelle en metres en bas. Un centimetre correspond a deux cent cinquante metres, six centimetres correspondent a mille cinq cents metres.</desc>
            <text class="axis-label" x="50" y="30">Distance sur la carte (cm)</text>
            <line class="grid-line" x1="50" y1="60" x2="50" y2="170"></line>
            <line class="grid-line" x1="134" y1="60" x2="134" y2="170"></line>
            <line class="grid-line" x1="176" y1="60" x2="176" y2="170"></line>
            <line class="grid-line" x1="218" y1="60" x2="218" y2="170"></line>
            <line class="grid-line" x1="260" y1="60" x2="260" y2="170"></line>
            <line class="grid-line" x1="344" y1="60" x2="344" y2="170"></line>
            <line class="guide-line" x1="92" y1="60" x2="92" y2="170"></line>
            <line class="guide-line" x1="302" y1="60" x2="302" y2="170"></line>
            <line class="axis" x1="50" y1="60" x2="352" y2="60"></line>
            <line class="axis" x1="50" y1="170" x2="352" y2="170"></line>
            <text class="tick-label" x="47" y="48">0</text>
            <text class="tick-label" x="89" y="48">1</text>
            <text class="tick-label" x="131" y="48">2</text>
            <text class="tick-label" x="173" y="48">3</text>
            <text class="tick-label" x="215" y="48">4</text>
            <text class="tick-label" x="257" y="48">5</text>
            <text class="tick-label" x="299" y="48">6</text>
            <text class="tick-label" x="341" y="48">7</text>
            <circle class="plot-point-alt" cx="92" cy="60" r="6"></circle>
            <circle class="plot-point-alt" cx="302" cy="60" r="6"></circle>
            <text class="tick-label" x="38" y="186">0</text>
            <text class="tick-label" x="70" y="186">250</text>
            <text class="tick-label" x="112" y="186">500</text>
            <text class="tick-label" x="154" y="186">750</text>
            <text class="tick-label" x="198" y="186">1000</text>
            <text class="tick-label" x="240" y="186">1250</text>
            <text class="tick-label" x="282" y="186">1500</text>
            <text class="tick-label" x="324" y="186">1750</text>
            <circle class="plot-point" cx="92" cy="170" r="6"></circle>
            <circle class="plot-point" cx="302" cy="170" r="6"></circle>
            <text class="axis-label" x="50" y="210">Distance réelle (m)</text>
            <text class="annotation-label" x="92" y="118" text-anchor="middle">1 cm ↔ 250 m</text>
            <text class="annotation-label" x="302" y="118" text-anchor="middle">6 cm ↔ 1500 m</text>
          </svg>
        `,
        notes: [
          'Les deux règles sont alignées verticalement : une même colonne représente une même distance, lue en centimètres en haut et en mètres en réalité en bas.',
          'Le trait en pointillé sur $1$ cm rejoint $250$ m : c\'est la définition même de l\'échelle $\\dfrac{1}{25\\,000}$.',
          'Le second trait en pointillé sur $6$ cm rejoint $1\\,500$ m, en appliquant exactement le même coefficient — c\'est la valeur utilisée dans l\'évaluation du cours.'
        ],
        reading: 'Sur une carte, chaque centimètre correspond toujours au même nombre de mètres réels : c\'est une situation de proportionnalité directe.',
        caption: 'Correspondance à l\'échelle $\\dfrac{1}{25\\,000}$ entre distance sur la carte (cm) et distance réelle (m).'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus sont les trois pieges que l'intro nomme :
           1. une baisse puis une hausse du meme taux ne se compensent pas ;
           2. la proportionnalite se RECONNAIT, elle ne se suppose pas ;
           3. le pourcentage se rapporte toujours a un tout, qu'il faut nommer.

         Valeurs VERIFIEES PAR LE CALCUL : 100 x 0,8 x 1,2 = 96 exactement,
         soit une perte de 4 % qui ne depend pas du prix de depart (0,8 x 1,2 =
         0,96 quel que soit le prix) — c'est ce que la note explique. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège des pourcentages',
          title: 'Baisser de $20\\%$ puis augmenter de $20\\%$ ne ramène pas au départ',
          description: 'On part de $100$ €, on retire $20\\%$, puis on rajoute $20\\%$ : on ne retombe pas sur $100$ €, mais sur <strong>$96$ €</strong>. La raison tient en une phrase : les deux pourcentages ne se calculent pas sur la <strong>même base</strong>.',
          svg: `
            <svg viewBox="0 0 400 216" role="img" aria-labelledby="prop-piege-title prop-piege-desc">
              <title id="prop-piege-title">Un prix baisse de 20 pour cent puis augmente de 20 pour cent</title>
              <desc id="prop-piege-desc">Trois barres verticales de meme largeur sont posees sur la meme ligne de base et dessinees a la meme echelle. La premiere represente le prix de depart de 100 euros. La deuxieme, apres une baisse de 20 pour cent, represente 80 euros : la baisse retiree vaut 20 euros et se calcule sur 100. La troisieme, apres une hausse de 20 pour cent appliquee a 80 euros, represente 96 euros : la hausse ajoutee ne vaut que 16 euros, car elle se calcule sur 80 et non sur 100. Le prix final est donc inferieur de 4 euros au prix de depart, ce que montre un trait de repere horizontal trace au niveau des 100 euros initiaux.</desc>

              <!-- Echelle : 1,3 unite d'ecran par euro, base commune y = 178.
                   100 EUR -> 130 unites de haut ; 80 -> 104 ; 96 -> 124,8. -->
              <line class="grid-line" x1="30" y1="48" x2="380" y2="48" stroke-dasharray="4 4"></line>
              <text class="tick-label" x="384" y="52" text-anchor="end">100 €</text>

              <rect class="frame-line" x="52" y="48" width="58" height="130" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)"></rect>
              <text class="annotation-label" x="81" y="196" text-anchor="middle">100 €</text>
              <text class="tick-label" x="81" y="212" text-anchor="middle">au départ</text>

              <rect class="frame-line" x="171" y="74" width="58" height="104" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <text class="annotation-label" x="200" y="196" text-anchor="middle">80 €</text>
              <text class="tick-label" x="200" y="212" text-anchor="middle">après − 20 %</text>
              <text class="label-soft" x="200" y="64" text-anchor="middle">on retire 20</text>

              <rect class="frame-line" x="290" y="53.2" width="58" height="124.8" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <text class="annotation-label" x="319" y="196" text-anchor="middle">96 €</text>
              <text class="tick-label" x="319" y="212" text-anchor="middle">après + 20 %</text>
              <text class="label-soft" x="319" y="42" text-anchor="middle">on rajoute 16</text>

              <text class="annotation-label" x="200" y="24" text-anchor="middle">il manque 4 € à la fin</text>
            </svg>
          `,
          notes: [
            'La baisse se calcule sur $100$ € : elle vaut $20$ €, et le prix tombe à $80$ €.',
            'La hausse se calcule sur $80$ €, pas sur $100$ : elle ne vaut donc que $0{,}20 \\times 80 = 16$ €, et le prix remonte à $96$ €.',
            'Le calcul direct le confirme : $100 \\times 0{,}8 \\times 1{,}2 = 96$. Le résultat est une perte de $4\\%$ <strong>quel que soit le prix de départ</strong>, puisque $0{,}8 \\times 1{,}2 = 0{,}96$.'
          ],
          reading: 'Compare la hauteur retirée puis la hauteur rajoutée : la seconde est visiblement plus courte. Un pourcentage n\'est jamais une quantité en soi, c\'est toujours une part <strong>de quelque chose</strong> — et ce quelque chose a changé entre les deux étapes.',
          caption: 'Un prix de $100$ € baissé de $20\\%$ puis augmenté de $20\\%$ : il finit à $96$ €, car la hausse porte sur $80$ € et non sur $100$ €.'
        },
        {
          theme: 'maths',
          kicker: 'Reconnaître, pas supposer',
          title: 'Deux tableaux, un seul est proportionnel',
          description: 'La proportionnalité ne se devine pas au fait que « ça augmente ». Elle se <strong>vérifie</strong> : le rapport entre les deux lignes doit être <strong>le même partout</strong>. À gauche il l\'est, à droite il ne l\'est pas — et pourtant les deux séries montent régulièrement.',
          svg: `
            <svg viewBox="0 0 400 218" role="img" aria-labelledby="prop-recon-title prop-recon-desc">
              <title id="prop-recon-title">Un tableau proportionnel et un tableau qui ne l'est pas</title>
              <desc id="prop-recon-desc">Deux tableaux de deux lignes sont presentes cote a cote. Celui de gauche donne un nombre de kilos et un prix : 2 kilos pour 6 euros, 5 kilos pour 15 euros, 8 kilos pour 24 euros. Le quotient du prix par la masse vaut 3 dans les trois cas, le tableau est donc proportionnel. Celui de droite donne un age et une taille : 2 ans pour 86 centimetres, 5 ans pour 110 centimetres, 8 ans pour 128 centimetres. Les quotients valent 43, 22 et 16, ils sont tous differents, donc le tableau n'est pas proportionnel bien que la taille augmente regulierement avec l'age. Sous chaque tableau, les quotients calcules sont indiques.</desc>

              <!-- Tableau PROPORTIONNEL, a gauche. -->
              <text class="annotation-label" x="98" y="24" text-anchor="middle">proportionnel</text>
              <line class="frame-line" x1="20" y1="40" x2="176" y2="40"></line>
              <line class="frame-line" x1="20" y1="70" x2="176" y2="70"></line>
              <line class="frame-line" x1="20" y1="100" x2="176" y2="100"></line>
              <line class="frame-line" x1="20" y1="40" x2="20" y2="100"></line>
              <line class="frame-line" x1="72" y1="40" x2="72" y2="100"></line>
              <line class="frame-line" x1="106" y1="40" x2="106" y2="100"></line>
              <line class="frame-line" x1="141" y1="40" x2="141" y2="100"></line>
              <line class="frame-line" x1="176" y1="40" x2="176" y2="100"></line>
              <text class="tick-label" x="26" y="60" text-anchor="start">kilos</text>
              <text class="tick-label" x="26" y="90" text-anchor="start">prix</text>
              <text class="tick-label" x="89" y="60" text-anchor="middle">2</text>
              <text class="tick-label" x="123" y="60" text-anchor="middle">5</text>
              <text class="tick-label" x="158" y="60" text-anchor="middle">8</text>
              <text class="tick-label" x="89" y="90" text-anchor="middle">6</text>
              <text class="tick-label" x="123" y="90" text-anchor="middle">15</text>
              <text class="tick-label" x="158" y="90" text-anchor="middle">24</text>
              <text class="tick-label" x="98" y="124" text-anchor="middle">6÷2 = 3   15÷5 = 3   24÷8 = 3</text>
              <text class="annotation-label" x="98" y="146" text-anchor="middle">toujours 3</text>
              <text class="label-soft" x="98" y="166" text-anchor="middle">le coefficient existe</text>

              <!-- Tableau NON proportionnel, a droite. Meme forme, meme taille,
                   memes abscisses : seule la seconde ligne change, ce qui est la
                   convention du patron « comparaison ». -->
              <text class="label-soft" x="302" y="24" text-anchor="middle">non proportionnel</text>
              <line class="guide-line" x1="224" y1="40" x2="380" y2="40"></line>
              <line class="guide-line" x1="224" y1="70" x2="380" y2="70"></line>
              <line class="guide-line" x1="224" y1="100" x2="380" y2="100"></line>
              <line class="guide-line" x1="224" y1="40" x2="224" y2="100"></line>
              <line class="guide-line" x1="276" y1="40" x2="276" y2="100"></line>
              <line class="guide-line" x1="310" y1="40" x2="310" y2="100"></line>
              <line class="guide-line" x1="345" y1="40" x2="345" y2="100"></line>
              <line class="guide-line" x1="380" y1="40" x2="380" y2="100"></line>
              <text class="tick-label" x="230" y="60" text-anchor="start">âge</text>
              <text class="tick-label" x="230" y="90" text-anchor="start">taille</text>
              <text class="tick-label" x="293" y="60" text-anchor="middle">2</text>
              <text class="tick-label" x="327" y="60" text-anchor="middle">5</text>
              <text class="tick-label" x="362" y="60" text-anchor="middle">8</text>
              <text class="tick-label" x="293" y="90" text-anchor="middle">86</text>
              <text class="tick-label" x="327" y="90" text-anchor="middle">110</text>
              <text class="tick-label" x="362" y="90" text-anchor="middle">128</text>
              <text class="tick-label" x="302" y="124" text-anchor="middle">86÷2 = 43   110÷5 = 22   128÷8 = 16</text>
              <text class="label-soft" x="302" y="146" text-anchor="middle">43, puis 22, puis 16</text>
              <text class="label-soft" x="302" y="166" text-anchor="middle">aucun coefficient</text>

              <text class="tick-label" x="200" y="200" text-anchor="middle">les deux séries montent, une seule est proportionnelle</text>
            </svg>
          `,
          notes: [
            'À gauche, le prix divisé par la masse donne $3$ à chaque colonne : c\'est le <strong>coefficient de proportionnalité</strong>, en euros par kilo.',
            'À droite, la taille divisée par l\'âge donne $43$, puis $22$, puis $16$ : aucun coefficient commun, donc <strong>aucune</strong> proportionnalité.',
            'Une grandeur qui augmente régulièrement n\'est pas pour autant proportionnelle. Un enfant de $8$ ans ne mesure pas quatre fois la taille d\'un enfant de $2$ ans.'
          ],
          reading: 'Pour trancher, divise chaque valeur du bas par celle du haut, colonne par colonne. Si tu retrouves toujours le même nombre, c\'est proportionnel ; s\'il change, ce ne l\'est pas — et une seule colonne qui diffère suffit à conclure.',
          caption: 'Un tableau proportionnel (coefficient $3$ partout) et un tableau qui ne l\'est pas (quotients $43$, $22$, $16$), bien que les deux séries croissent.'
        },
        {
          theme: 'maths',
          kicker: 'Pourcentage de quoi',
          title: 'Le même pourcentage sur deux touts différents',
          description: 'Un pourcentage ne dit rien tant qu\'on ne sait pas <strong>de quoi</strong> il est la part. $30\\%$ des élèves d\'une classe de $30$ et $30\\%$ des élèves d\'une classe de $10$, c\'est la même fraction mais pas le même nombre d\'élèves : $9$ d\'un côté, $3$ de l\'autre.',
          svg: `
            <svg viewBox="0 0 400 206" role="img" aria-labelledby="prop-tout-title prop-tout-desc">
              <title id="prop-tout-title">Trente pour cent de deux groupes de tailles differentes</title>
              <desc id="prop-tout-desc">A gauche, une classe de 30 eleves est representee par 30 pastilles disposees en trois rangees de dix ; 9 d'entre elles sont teintees, ce qui represente 30 pour cent de la classe. A droite, un groupe de 10 eleves est represente par 10 pastilles disposees sur une rangee ; 3 d'entre elles sont teintees, ce qui represente aussi 30 pour cent. La proportion est donc la meme dans les deux cas, mais le nombre d'eleves concernes est trois fois plus grand a gauche qu'a droite. Les pastilles ont exactement la meme taille des deux cotes, si bien que la comparaison des effectifs se fait a vue.</desc>

              <text class="annotation-label" x="200" y="22" text-anchor="middle">30 % dans les deux cas</text>

              <!-- Classe de 30 : trois rangees de dix pastilles de meme taille
                   que celles de droite, sinon la comparaison mentirait. -->
              <text class="tick-label" x="98" y="46" text-anchor="middle">classe de 30 élèves</text>
              <circle class="plot-point" cx="26" cy="66" r="6"></circle>
              <circle class="plot-point" cx="42" cy="66" r="6"></circle>
              <circle class="plot-point" cx="58" cy="66" r="6"></circle>
              <circle class="plot-point" cx="74" cy="66" r="6"></circle>
              <circle class="plot-point" cx="90" cy="66" r="6"></circle>
              <circle class="plot-point" cx="106" cy="66" r="6"></circle>
              <circle class="plot-point" cx="122" cy="66" r="6"></circle>
              <circle class="plot-point" cx="138" cy="66" r="6"></circle>
              <circle class="plot-point" cx="154" cy="66" r="6"></circle>
              <circle class="plot-point" cx="170" cy="66" r="6"></circle>
              <circle class="plot-point-alt" cx="26" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="42" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="58" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="74" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="90" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="106" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="122" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="138" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="154" cy="88" r="6"></circle>
              <circle class="plot-point" cx="170" cy="88" r="6"></circle>
              <circle class="plot-point" cx="26" cy="110" r="6"></circle>
              <circle class="plot-point" cx="42" cy="110" r="6"></circle>
              <circle class="plot-point" cx="58" cy="110" r="6"></circle>
              <circle class="plot-point" cx="74" cy="110" r="6"></circle>
              <circle class="plot-point" cx="90" cy="110" r="6"></circle>
              <circle class="plot-point" cx="106" cy="110" r="6"></circle>
              <circle class="plot-point" cx="122" cy="110" r="6"></circle>
              <circle class="plot-point" cx="138" cy="110" r="6"></circle>
              <circle class="plot-point" cx="154" cy="110" r="6"></circle>
              <circle class="plot-point" cx="170" cy="110" r="6"></circle>
              <text class="annotation-label" x="98" y="140" text-anchor="middle">9 élèves</text>

              <!-- Groupe de 10 : MEME rayon de pastille, meme espacement. -->
              <text class="tick-label" x="302" y="46" text-anchor="middle">groupe de 10 élèves</text>
              <circle class="plot-point-alt" cx="230" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="246" cy="88" r="6"></circle>
              <circle class="plot-point-alt" cx="262" cy="88" r="6"></circle>
              <circle class="plot-point" cx="278" cy="88" r="6"></circle>
              <circle class="plot-point" cx="294" cy="88" r="6"></circle>
              <circle class="plot-point" cx="310" cy="88" r="6"></circle>
              <circle class="plot-point" cx="326" cy="88" r="6"></circle>
              <circle class="plot-point" cx="342" cy="88" r="6"></circle>
              <circle class="plot-point" cx="358" cy="88" r="6"></circle>
              <circle class="plot-point" cx="374" cy="88" r="6"></circle>
              <text class="annotation-label" x="302" y="140" text-anchor="middle">3 élèves</text>

              <text class="tick-label" x="200" y="176" text-anchor="middle">même part, trois fois moins d élèves</text>
              <text class="label-soft" x="200" y="194" text-anchor="middle">un pourcentage se rapporte toujours à un tout, qu il faut nommer</text>
            </svg>
          `,
          notes: [
            'Classe de $30$ : $\\dfrac{30}{100} \\times 30 = 9$ élèves.',
            'Groupe de $10$ : $\\dfrac{30}{100} \\times 10 = 3$ élèves.',
            'Le pourcentage est identique, l\'effectif ne l\'est pas. C\'est aussi pourquoi on ne peut jamais <strong>additionner</strong> deux pourcentages portant sur des touts différents.'
          ],
          reading: 'Compte les pastilles teintées de chaque côté : $9$ à gauche, $3$ à droite. Les pastilles ont pourtant la même taille et la part est la même. Avant d\'interpréter un pourcentage, demande-toi toujours : pourcentage de quoi ?',
          caption: '$30\\%$ d\'une classe de $30$ élèves ($9$ élèves) et $30\\%$ d\'un groupe de $10$ élèves ($3$ élèves) : même part, effectifs différents.'
        }
      ],
      method: {
        title: 'Méthode en 3 cas',
        steps: [
          '<strong>Pourcentage</strong> : $p\\%$ de $T = \\dfrac{p}{100} \\times T$.<br/><br/>Pour retrouver un taux, on rapporte la variation au total de <strong>départ</strong> : de $120$ € à $90$ €, la baisse vaut $30$ € et $\\dfrac{30}{120} \\times 100 = 25\\%$.',
          '<strong>Échelle</strong> : $\\dfrac{1}{25\\,000}$ signifie que la réalité est $25\\,000$ fois plus grande que la carte.<br/><br/>Distance réelle $=$ distance sur la carte $\\times 25\\,000$, en centimètres, puis on convertit : $3$ cm $\\to 75\\,000$ cm $= 750$ m.',
          '<strong>Vitesse</strong> : $v = \\dfrac{d}{t}$, donc $d = v \\times t$ et $t = \\dfrac{d}{v}$.<br/><br/>À $20$ km/h pendant $1{,}5$ h : $d = 20 \\times 1{,}5 = 30$ km.'
        ]
      },
      formulas: [
        '$p\\% \\text{ de } T = \\dfrac{p}{100} \\times T$',
        'Échelle $\\dfrac{1}{n}$ : $d_{\\text{réelle}} = d_{\\text{carte}} \\times n$ (même unité des deux côtés, puis convertir)',
        '$v = \\dfrac{d}{t}$ ; $d = v \\times t$ ; $t = \\dfrac{d}{v}$'
      ],
      recap: [
        '$p\\%$ de $T$ = $\\dfrac{p}{100} \\times T$. Ne jamais oublier de diviser par 100.',
        'Les hausses et baisses de pourcentage ne s\'annulent pas : $+20\\%$ puis $-20\\%$ donne $-4\\%$.',
        'Vitesse = distance ÷ temps. Vérifier que les unités sont cohérentes.',
        'Échelle : multiplier la distance sur la carte par le dénominateur de l\'échelle.'
      ],
      piege: 'Piège : « $-20\\%$ puis $+20\\%$ » ne ramène pas au prix de départ, parce que les deux pourcentages ne portent pas sur le <strong>même</strong> prix : $100 \\to 80 \\to 96$.<br/><br/>De même, pour retrouver un taux de réduction, on divise toujours par le prix de <strong>départ</strong> : de $250$ € à $200$ €, la baisse de $50$ € vaut $\\dfrac{50}{250} = 20\\%$, et non $\\dfrac{50}{200} = 25\\%$.'
    },

    quiz: [
      {
        q: 'Un article coûte $80$ €. Il est soldé à $-25\\%$. Quel est son nouveau prix ?',
        options: ['$55$ €', '$20$ €', '$60$ €', '$65$ €'],
        answer: 2,
        correction: 'Réduction : $25\\%$ de $80 = \\dfrac{25}{100} \\times 80 = 20$ €. Nouveau prix : $80 - 20 = 60$ €.<br/><br/>$55$ € : les $25$ ont été retirés comme des euros, pas comme un pourcentage. $20$ € : c\'est la réduction, pas le prix après réduction.'
      },
      {
        q: 'Sur une carte à l\'échelle $1/50\\,000$, deux villes sont distantes de $4$ cm. Quelle est la distance réelle ?',
        options: ['$200$ m', '$2$ km', '$20$ km', '$200$ km'],
        answer: 1,
        correction: '$d_{\\text{réelle}} = 4 \\times 50\\,000 = 200\\,000$ cm $= 2000$ m $= 2$ km.'
      },
      {
        q: 'Un article est d\'abord augmenté de $20\\%$, puis réduit de $20\\%$. Quel est le prix final par rapport au prix initial ?',
        options: [
          'Le même prix qu\'au départ : $+20\\%$ puis $-20\\%$ s\'annulent.',
          'Un prix supérieur de $4\\%$ au départ.',
          'Impossible à savoir sans connaître le prix initial.',
          'Un prix inférieur de $4\\%$ au départ : $100 \\to 120 \\to 96$.'
        ],
        answer: 3,
        correction: 'Les pourcentages ne s\'annulent pas ! Partir de $100$ € : $+20\\%$ → $120$ €, puis $-20\\%$ de $120$ → $120 \\times 0{,}8 = 96$ €.<br/><br/>Le résultat est $96$ €, soit $4\\%$ de moins que le départ.<br/><br/>Et ce $-4\\%$ ne dépend pas du prix choisi, puisque $1{,}2 \\times 0{,}8 = 0{,}96$ quel que soit le prix : « impossible à savoir » n\'est donc pas juste.'
      },
      {
        q: 'Dans quel tableau le prix est-il proportionnel à la masse ?',
        options: [
          'Tableau 1 : $3$ kg → $12$ €, $5$ kg → $20$ €, $7$ kg → $28$ €.',
          'Tableau 2 : $3$ kg → $12$ €, $5$ kg → $18$ €, $7$ kg → $24$ €.',
          'Les deux : dans chacun, le prix augmente avec la masse.',
          'Aucun : il manque la ligne « $1$ kg → ? € ».'
        ],
        answer: 0,
        correction: 'On divise le prix par la masse, colonne par colonne.<br/><br/>Tableau 1 : $12 \\div 3 = 4$, $20 \\div 5 = 4$, $28 \\div 7 = 4$. Toujours le même coefficient : c\'est <strong>proportionnel</strong>.<br/><br/>Tableau 2 : $12 \\div 3 = 4$ mais $18 \\div 5 = 3{,}6$. Le coefficient change, ce n\'est pas proportionnel — même si le prix augmente avec la masse.<br/><br/>Une seule colonne qui diffère suffit à conclure, et la ligne « $1$ kg » n\'est pas nécessaire.'
      }
    ],

    /* ELARGISSEMENT ET CORRECTION DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce etait fige au feminin
       (« Une {item} ... Elle est soldee ») alors que la liste des contextes
       contient « velo », masculin. Un tirage sur cinq imprimait donc
       « Une velo coute 120 €. Elle est soldee... ». Chaque contexte porte
       desormais son genre, et l'article comme le pronom en decoulent.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, le prix solde,
       soit 5 moules et 3 enonces de banque. L'evaluation teste pourtant quatre
       choses distinctes — prix solde, echelle cartographique, vitesse moyenne
       et taux de reduction a retrouver — dont trois sans aucun exercice
       d'entrainement. On ajoute donc ces trois taches, chacune adossee a une
       erreur frequente de la fiche professeur :
         - l'echelle, ou l'eleve oublie la conversion des centimetres en metres ;
         - la vitesse, ou il multiplie au lieu de diviser (ou l'inverse) ;
         - le taux a retrouver, le probleme INVERSE, que rien ne travaillait. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['solde', 'echelle', 'vitesse', 'tauxInverse']);

        /* Separateur de milliers a la francaise (espace fine insecable), que
           fr() ne pose pas : fr(25000) rend « 25000 » alors que le cours du
           chapitre ecrit « 25\,000 ». On garde donc la convention du livre. */
        const milliers = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');

        if (tache === 'echelle') {
          /* Echelles usuelles des cartes, et distances choisies pour que le
             resultat tombe juste en metres : l'objet du chapitre est la
             proportionnalite, pas l'arrondi. */
          const echelle = pick([10000, 25000, 50000]);
          const cm = rand(2, 9);
          // distance reelle en cm, puis en metres
          const metres = cm * echelle / 100;
          return {
            statement: `🗺️ Sur une carte à l'échelle $\\dfrac{1}{${milliers(echelle)}}$, deux villages sont distants de $${cm}$ cm.<br/>Quelle est la distance réelle, en mètres ?`,
            answer: metres,
            tolerance: 0,
            unit: 'm',
            hint: `$1$ cm sur la carte représente $${milliers(echelle)}$ cm en réalité.<br/><br/>Calcule d'abord la distance réelle en centimètres, puis convertis en mètres ($1$ m $= 100$ cm).`,
            solution: [
              `Une échelle compare deux longueurs de même unité.`,
              `Distance réelle en centimètres : $${cm} \\times ${milliers(echelle)} = ${milliers(cm * echelle)}$ cm.`,
              `Conversion en mètres : $${milliers(cm * echelle)} \\div 100 = ${milliers(metres)}$ m.`,
              `L'échelle $\\dfrac{1}{${milliers(echelle)}}$ signifie que la réalité est $${milliers(echelle)}$ fois plus grande que la carte.`
            ]
          };
        }

        if (tache === 'vitesse') {
          /* Vitesse et duree choisies pour que la distance reste entiere ou a
             une decimale : l'eleve doit reconnaitre qu'il faut MULTIPLIER,
             ce qui est le point de l'exercice. */
          const v = pick([12, 15, 18, 20, 24, 30]);
          const t = pick([2, 3, 0.5, 1.5, 2.5]);
          const d = v * t;
          return {
            statement: `🚴 Un cycliste roule à la vitesse constante de $${v}$ km/h pendant $${fr(t)}$ heure(s).<br/>Quelle distance parcourt-il, en kilomètres ?`,
            answer: d,
            tolerance: 0,
            unit: 'km',
            hint: `La vitesse est une distance PAR heure.<br/><br/>En $${fr(t)}$ heure(s), on parcourt donc $${fr(t)}$ fois cette distance.`,
            solution: [
              `La distance se calcule en multipliant la vitesse par la durée.`,
              `$d = v \\times t = ${v} \\times ${fr(t)} = ${fr(d)}$ km.`,
              `Contrôle de vraisemblance : en $1$ heure on ferait $${v}$ km, donc en $${fr(t)}$ heure(s) le résultat doit être ${t < 1 ? 'plus petit' : 'plus grand'}.`
            ]
          };
        }

        if (tache === 'tauxInverse') {
          /* PROBLEME INVERSE : on donne les deux prix et on cherche le TAUX.
             Aucun exercice ne le travaillait, alors que la question 4 de
             l'evaluation le demande. Les valeurs sont choisies pour que le taux
             soit entier. */
          const taux = pick([10, 15, 20, 25, 30, 40]);
          const prix = pick([80, 120, 160, 200, 240, 400]);
          const nouveau = prix * (100 - taux) / 100;
          return {
            statement: `🏷️ Le prix d'un article passe de $${prix}$ € à $${fr(nouveau)}$ €.<br/>Quel est le pourcentage de réduction ?`,
            answer: taux,
            tolerance: 0,
            unit: '%',
            hint: `Calcule d'abord la baisse en euros.<br/><br/>Puis compare-la au prix de DÉPART, jamais au prix d'arrivée.`,
            solution: [
              `On rapporte la baisse au prix de départ.`,
              `Baisse : $${prix} - ${fr(nouveau)} = ${fr(prix - nouveau)}$ €.`,
              `Pourcentage : $\\dfrac{${fr(prix - nouveau)}}{${prix}} \\times 100 = ${fr(taux)}\\%$.`,
              `Le dénominateur est le prix de DÉPART : une baisse se rapporte toujours à ce qu'on avait avant.`
            ]
          };
        }

        // Tache d'origine, avec l'accord de genre corrige.
        const ctx = pick([
          { item: 'veste', emoji: '🧥', genre: 'f' },
          { item: 'paire de baskets', emoji: '👟', genre: 'f' },
          { item: 'console de jeux', emoji: '🎮', genre: 'f' },
          { item: 'vélo', emoji: '🚲', genre: 'm' },
          { item: 'montre', emoji: '⌚', genre: 'f' }
        ]);
        const article = ctx.genre === 'f' ? 'Une' : 'Un';
        const pronom = ctx.genre === 'f' ? 'Elle est soldée' : 'Il est soldé';
        const prix = pick([50, 80, 120, 200, 250]);
        const taux = pick([10, 20, 25, 30, 40]);
        const reduction = prix * taux / 100;
        const newPrix = prix - reduction;
        return {
          statement: `${ctx.emoji} ${article} ${ctx.item} coûte $${prix}$ €. ${pronom} à $-${taux}\\%$.<br/>Quel est son nouveau prix en euros ?`,
          answer: newPrix,
          tolerance: 0,
          unit: '€',
          hint: `Calcule d'abord la réduction : $${taux}\\%$ de $${prix}$, puis soustrais-la du prix initial.`,
          solution: [
            `On calcule d'abord la réduction en euros, puis on la retire.`,
            `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${fr(reduction)}$ €.`,
            `Nouveau prix : $${prix} - ${fr(reduction)} = ${fr(newPrix)}$ €.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un cycliste effectue un trajet de $60$ km. Il roule d\'abord $1{,}5$ h à $30$ km/h, puis s\'arrête $15$ min, puis continue à $20$ km/h.',
      tasks: [
        'Quelle distance parcourt-il lors de la première partie du trajet ?',
        'Quelle distance lui reste-t-il après la pause ?',
        'Combien de temps lui faut-il pour finir (en heures) ?'
      ],
      solutions: [
        '$d_1 = 30 \\times 1{,}5 = 45$ km.',
        'Distance restante : $60 - 45 = 15$ km.',
        '$t = \\dfrac{15}{20} = 0{,}75$ h $= 45$ min.'
      ],
      finalAnswer: 'Il lui faut encore $45$ minutes pour terminer les $15$ km restants.'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité appliquée',
      duration: '25 min',
      questions: [
        {
          statement: 'Un article coûte $150$ €. Il est soldé à $-30\\%$. Quel est son nouveau prix ?',
          type: 'numeric',
          answer: 105,
          tolerance: 0,
          unit: '€',
          points: 2,
          correction: 'Réduction : $30\\%$ de $150 = \\dfrac{30}{100} \\times 150 = 45$ €. Nouveau prix : $150 - 45 = 105$ €.'
        },
        {
          statement: 'Sur une carte à l\'échelle $\\dfrac{1}{25\\,000}$, deux villages sont distants de $6$ cm. Quelle est la distance réelle en mètres ?',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: '$d_{\\text{réelle}} = 6 \\times 25\\,000 = 150\\,000$ cm $= 1\\,500$ m.'
        },
        {
          statement: 'Un cycliste roule à $18$ km/h pendant $2{,}5$ heures. Quelle distance parcourt-il ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 18 \\times 2{,}5 = 45$ km.'
        },
        {
          statement: 'Un prix passe de $200$ € à $170$ €. Quel est le pourcentage de réduction ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Réduction absolue : $200 - 170 = 30$ €. Pourcentage : $\\dfrac{30}{200} \\times 100 = 15\\%$.'
        },
        {
          statement: 'Un article subit une hausse de $10\\%$ puis une baisse de $10\\%$. Le prix final est :',
          type: 'multiple-choice',
          options: [
            'Égal au prix initial.',
            'Inférieur de $1\\%$ au prix initial.',
            'Supérieur de $1\\%$ au prix initial.',
            'Impossible à déterminer sans connaître le prix initial.'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec un prix initial de $100$ € : $+10\\% \\to 110$ €, puis $-10\\%$ de $110 \\to 110 \\times 0{,}9 = 99$ €. Le prix final est $99$ €, soit $1\\%$ de moins.'
        }
      ]
    }
  });
