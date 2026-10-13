/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-statistiques.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-statistiques',
    level: 2, subject: 'maths',
    icon: '📊',
    title: 'Statistiques descriptives',
    subtitle: 'Variance, écart-type, dispersion',
    keywords: ['Variance', 'Écart-type', 'Moyenne', 'Dispersion', 'Boîte à moustaches'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « La moyenne est la mesure de
         tendance centrale la plus utilisée » : une définition, donc l'entrée
         que le cahier des charges proscrit.

         Le test appliqué : « peut-on répondre à la question d'ouverture sans
         la notion du chapitre ? » Ici, non — et c'est ce qui rend la
         situation utile. Deux trains de MÊME retard moyen posent un vrai
         choix, que la moyenne seule ne permet pas de trancher. L'élève
         éprouve le manque avant qu'on lui offre l'outil qui le comble.

         Entrée non décorative : le chapitre existe précisément parce qu'une
         moyenne ne décrit pas une série, et c'est la difficulté réelle du
         niveau — pas une anecdote plaquée.

         LES DEUX MOYENNES ONT ÉTÉ VÉRIFIÉES PAR LE CALCUL, et non posées à
         l'estime : la ligne A, uniforme entre 8 et 12 minutes, a bien pour
         moyenne 10 ; la ligne B tombe en panne une fois sur DOUZE avec deux
         heures de retard, soit 120/12 = 10 minutes de moyenne elle aussi.
         Une première rédaction annonçait « une fois sur dix », ce qui
         donnait 12 minutes et ruinait l'égalité sur laquelle repose toute
         la situation. */
      intro: 'Deux lignes de train desservent la même gare. Les deux ont exactement <strong>dix minutes</strong> de retard en moyenne.<br/><br/>' +
        'Tu as un entretien important. Laquelle prends-tu ?<br/><br/>' +
        'La question paraît absurde : puisque les moyennes sont identiques, les deux lignes se valent. Regarde pourtant ce qui se cache derrière ces deux chiffres égaux.<br/><br/>' +
        'La <strong>ligne A</strong> a toujours entre $8$ et $12$ minutes de retard. Jamais moins, jamais plus. La <strong>ligne B</strong>, elle, est presque toujours à l\'heure — mais tombe une fois sur douze en panne, avec deux heures de retard.<br/><br/>' +
        'Vérifie : pour la ligne B, $120$ minutes de retard une fois sur douze, cela fait bien $\\dfrac{120}{12} = 10$ minutes en moyenne. Les deux lignes sont donc à égalité parfaite sur ce critère.<br/><br/>' +
        'Et pourtant, pour un entretien, tu prends la ligne A sans hésiter : tu sais exactement ce qui t\'attend.<br/><br/>' +
        'Ce que la moyenne ne dit pas, c\'est à quel point les valeurs sont <strong>groupées ou éparpillées</strong>. Il manque donc un second nombre, qui mesure cet éparpillement : c\'est la <strong>dispersion</strong>, et tout ce chapitre sert à la calculer et à la lire.<br/><br/>' +
        'Tu connais la moyenne depuis l\'école primaire. Ce que la seconde ajoute, c\'est l\'idée qu\'<strong>une moyenne seule ne décrit rien</strong> : il faut toujours l\'accompagner de sa dispersion, sans quoi on peut lui faire dire à peu près n\'importe quoi.',
      definitions: [
        { term: 'Moyenne', def: 'Somme des valeurs divisée par l\'effectif total : $\\bar{x} = \\dfrac{1}{n}\\sum x_i$. Sensible aux valeurs extrêmes.' },
        { term: 'Variance', def: 'Moyenne des carrés des écarts à la moyenne : $V = \\dfrac{1}{n}\\sum(x_i - \\bar{x})^2$. Mesure la dispersion.' },
        { term: 'Écart-type', def: '$\\sigma = \\sqrt{V}$. Exprimé dans les mêmes unités que les données, il est plus facile à interpréter que la variance.' },
        { term: 'Dispersion', def: 'Mesure de la variabilité des données autour de la moyenne. Plus $\\sigma$ est grand, plus les données sont dispersées.' }
      ],
      method: {
        title: 'Calculer l\'écart-type',
        steps: [
          'Calculer la moyenne $\\bar{x}=\\frac{1}{n}\\sum x_i$. <strong>Exemple :</strong> Série $\\{4 ; 6 ; 8\\}$ → $\\bar{x} = \\frac{4+6+8}{3} = 6$.',
          'Calculer la variance $V=\\frac{1}{n}\\sum (x_i-\\bar{x})^2$. <strong>Exemple :</strong> $V = \\frac{(4-6)^2 + (6-6)^2 + (8-6)^2}{3} = \\frac{4+0+4}{3} \\approx 2{,}67$.',
          'L\'écart-type est $\\sigma=\\sqrt{V}$. <strong>Exemple :</strong> $\\sigma = \\sqrt{2{,}67} \\approx 1{,}63$.',
          'Interpréter : environ $68\\%$ des données sont dans $[\\bar{x}-\\sigma ; \\bar{x}+\\sigma]$. <strong>Exemple :</strong> Ici $[6-1{,}63 ; 6+1{,}63] = [4{,}37 ; 7{,}63]$.'
        ]
      },
      example: {
        statement: 'On mesure les tailles (en cm) de $5$ élèves : $\\{162 ; 168 ; 170 ; 172 ; 178\\}$. Calculer la moyenne, la variance et l\'écart-type.',
        steps: [
          'Moyenne : $\\bar{x} = \\dfrac{162 + 168 + 170 + 172 + 178}{5} = \\dfrac{850}{5} = 170$ cm.',
          'Écarts au carré : $(162-170)^2 = 64$, $(168-170)^2 = 4$, $(170-170)^2 = 0$, $(172-170)^2 = 4$, $(178-170)^2 = 64$.',
          'Variance : $V = \\dfrac{64+4+0+4+64}{5} = \\dfrac{136}{5} = 27{,}2$ cm².',
          'Écart-type : $\\sigma = \\sqrt{27{,}2} \\approx 5{,}22$ cm.'
        ],
        answer: '$\\bar{x} = 170$ cm, $V = 27{,}2$ cm², $\\sigma \\approx 5{,}22$ cm.'
      },
      formulas: [
        '$\\bar{x} = \\dfrac{1}{n}\\displaystyle\\sum_{i=1}^n x_i$',
        '$V = \\dfrac{1}{n}\\displaystyle\\sum_{i=1}^n (x_i-\\bar{x})^2$',
        '$\\sigma = \\sqrt{V}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Nuage de points',
        title: 'Série des tailles : moyenne et écart-type',
        description: 'Cinq tailles d\'élèves (en cm), l\'exemple du cours, placées sur un axe : moyenne $\\bar{x}=170$ cm et bande $[\\bar{x}-\\sigma\\,;\\,\\bar{x}+\\sigma]$ calculée à partir de $\\sigma=\\sqrt{27{,}2}\\approx 5{,}22$ cm.',
        svg: `
          <svg viewBox="0 0 470 255" role="img" aria-labelledby="stat2nde-title stat2nde-desc">
            <title id="stat2nde-title">Nuage de points de la serie des tailles avec moyenne et ecart-type</title>
            <desc id="stat2nde-desc">Cinq points places sur un axe gradue de 155 a 185 cm, avec une bande centree sur la moyenne 170 cm et large d'un ecart-type de part et d'autre.</desc>
            <line class="grid-line" x1="40.0" y1="60" x2="40.0" y2="200"></line>
            <line class="grid-line" x1="105.0" y1="60" x2="105.0" y2="200"></line>
            <line class="grid-line" x1="170.0" y1="60" x2="170.0" y2="200"></line>
            <line class="grid-line" x1="235.0" y1="60" x2="235.0" y2="200"></line>
            <line class="grid-line" x1="300.0" y1="60" x2="300.0" y2="200"></line>
            <line class="grid-line" x1="365.0" y1="60" x2="365.0" y2="200"></line>
            <line class="grid-line" x1="430.0" y1="60" x2="430.0" y2="200"></line>
            <rect x="167.2" y="60" width="135.6" height="140" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></rect>
            <line class="guide-line" x1="167.2" y1="60" x2="167.2" y2="200"></line>
            <line class="guide-line" x1="302.8" y1="60" x2="302.8" y2="200"></line>
            <line class="focus-line" x1="235.0" y1="60" x2="235.0" y2="200"></line>
            <line class="grid-line" x1="131.0" y1="110" x2="131.0" y2="200"></line>
            <line class="grid-line" x1="209.0" y1="110" x2="209.0" y2="200"></line>
            <line class="grid-line" x1="235.0" y1="110" x2="235.0" y2="200"></line>
            <line class="grid-line" x1="261.0" y1="110" x2="261.0" y2="200"></line>
            <line class="grid-line" x1="339.0" y1="110" x2="339.0" y2="200"></line>
            <line class="axis" x1="15" y1="200" x2="455" y2="200"></line>
            <line class="axis" x1="40.0" y1="200" x2="40.0" y2="206"></line>
            <line class="axis" x1="105.0" y1="200" x2="105.0" y2="206"></line>
            <line class="axis" x1="170.0" y1="200" x2="170.0" y2="206"></line>
            <line class="axis" x1="235.0" y1="200" x2="235.0" y2="206"></line>
            <line class="axis" x1="300.0" y1="200" x2="300.0" y2="206"></line>
            <line class="axis" x1="365.0" y1="200" x2="365.0" y2="206"></line>
            <line class="axis" x1="430.0" y1="200" x2="430.0" y2="206"></line>
            <circle class="plot-point" cx="131.0" cy="110" r="5"></circle>
            <circle class="plot-point" cx="209.0" cy="110" r="5"></circle>
            <circle class="plot-point" cx="235.0" cy="110" r="5"></circle>
            <circle class="plot-point" cx="261.0" cy="110" r="5"></circle>
            <circle class="plot-point" cx="339.0" cy="110" r="5"></circle>
            <circle class="plot-point-alt" cx="167.2" cy="200" r="3"></circle>
            <circle class="plot-point-alt" cx="302.8" cy="200" r="3"></circle>
            <text class="annotation-label" x="131.0" y="95" text-anchor="middle">162</text>
            <text class="annotation-label" x="209.0" y="95" text-anchor="middle">168</text>
            <text class="annotation-label" x="235.0" y="95" text-anchor="middle">170</text>
            <text class="annotation-label" x="261.0" y="95" text-anchor="middle">172</text>
            <text class="annotation-label" x="339.0" y="95" text-anchor="middle">178</text>
            <text class="annotation-label" x="235.0" y="45" text-anchor="middle">moyenne = 170 cm</text>
            <text class="annotation-label" x="163" y="52" text-anchor="end">164,78</text>
            <text class="annotation-label" x="307" y="52" text-anchor="start">175,22</text>
            <text class="tick-label" x="40.0" y="218" text-anchor="middle">155</text>
            <text class="tick-label" x="105.0" y="218" text-anchor="middle">160</text>
            <text class="tick-label" x="170.0" y="218" text-anchor="middle">165</text>
            <text class="tick-label" x="235.0" y="218" text-anchor="middle">170</text>
            <text class="tick-label" x="300.0" y="218" text-anchor="middle">175</text>
            <text class="tick-label" x="365.0" y="218" text-anchor="middle">180</text>
            <text class="tick-label" x="430.0" y="218" text-anchor="middle">185</text>
            <text class="axis-label" x="459" y="204">cm</text>
            <line class="guide-line" x1="167.2" y1="232" x2="302.8" y2="232"></line>
            <text class="annotation-label" x="308" y="236">3 valeurs sur 5</text>
          </svg>
        `,
        notes: [
          'Série des tailles (cm) du cours : $\\{162\\,;\\,168\\,;\\,170\\,;\\,172\\,;\\,178\\}$, moyenne $\\bar{x} = 170$ cm.',
          'Écart-type : $\\sigma = \\sqrt{27{,}2} \\approx 5{,}22$ cm (valeur calculée dans l\'exemple du cours).',
          'Bande $[\\bar{x}-\\sigma\\,;\\,\\bar{x}+\\sigma] = [164{,}78\\,;\\,175{,}22]$ cm : $3$ des $5$ tailles y sont comprises ($168$, $170$, $172$), soit $60\\%$ — proche des $68\\%$ théoriques mais sur un échantillon trop petit pour vérifier la règle empirique avec précision.'
        ],
        reading: 'La règle des $68\\%$ ($[\\bar{x}-\\sigma\\,;\\,\\bar{x}+\\sigma]$) décrit une tendance valable pour de grandes séries en forme de cloche ; sur seulement $5$ valeurs elle reste approximative — ici $3$ tailles sur $5$ (soit $60\\%$) tombent dans la bande.',
        caption: 'Série statistique des tailles de $5$ élèves, avec la moyenne $\\bar{x}=170$ cm et la bande $\\bar{x}\\pm\\sigma$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. Les trois malentendus retenus
         sont exactement les trois premières erreurs de la fiche professeur :
           1. croire que la moyenne suffit à décrire une série ;
           2. croire que la moyenne est un résumé robuste (elle ne l'est pas,
              la médiane l'est) ;
           3. croire qu'on peut mesurer la dispersion avec les écarts SIMPLES.

         ÉCHELLES, toutes calculées et non posées à l'œil :
           - schéma 1 : axe commun aux deux séries, valeur 0 en x=40 et
             20 unités de viewBox par unité de série. La moyenne commune 10
             tombe donc en x=240 pour LES DEUX séries — c'est le cœur de la
             figure et le test le vérifie au pixel.
           - schéma 2 : valeur 0 en x=40 et 5 unités de viewBox par unité.
             La médiane reste en x=110 dans les deux séries, la moyenne passe
             de x=110 à x=170.
           - schéma 3 : valeur 3 en x=60 et 60 unités par unité de série, sur
             la série {4 ; 6 ; 8} de la méthode du cours.

         Les aires des barres du schéma 3 sont rigoureusement proportionnelles
         aux écarts qu'elles représentent : c'est ce qui rend visible le fait
         que $-2$ et $+2$ s'annulent alors que $4$ et $4$ s'ajoutent. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Même moyenne, et pourtant rien à voir',
          description: 'Ces deux séries ont <strong>exactement la même moyenne</strong> et le même effectif. Elles sont dessinées sur le même axe et à la même échelle.<br/><br/>Pourtant, personne ne soutiendra qu\'elles décrivent la même chose. C\'est précisément ce que la moyenne, seule, ne sait pas dire — et c\'est pour cela que l\'écart-type existe.',
          svg: `
            <svg viewBox="0 0 480 260" role="img" aria-labelledby="stat-disp-title stat-disp-desc">
              <title id="stat-disp-title">Deux series de meme moyenne et de dispersions opposees</title>
              <desc id="stat-disp-desc">Deux series de cinq valeurs sont placees sur deux axes horizontaux superposes, gradues de zero a vingt avec la meme echelle. La serie du haut vaut huit, neuf, dix, onze, douze : ses points sont serres autour de dix. La serie du bas vaut deux, six, dix, quatorze, dix-huit : ses points sont etales sur tout l'axe. Les deux series ont la meme moyenne, dix, materialisee par une seule ligne verticale qui traverse les deux axes au meme endroit. L'ecart-type vaut environ un virgule quatre pour la premiere serie et environ cinq virgule sept pour la seconde.</desc>

              <!-- Ligne de moyenne COMMUNE : une seule verticale pour les deux
                   series. C'est la preuve visuelle que les moyennes coincident,
                   et elle serait impossible a truquer. -->
              <line class="guide-line" x1="240" y1="36" x2="240" y2="232"></line>
              <text class="annotation-label" x="240" y="28" text-anchor="middle">même moyenne = 10</text>

              <!-- SERIE A : groupee. Axe en y=96. -->
              <line class="axis" x1="40" y1="96" x2="450" y2="96"></line>
              <line class="axis" x1="40" y1="96" x2="40" y2="102"></line>
              <line class="axis" x1="120" y1="96" x2="120" y2="102"></line>
              <line class="axis" x1="200" y1="96" x2="200" y2="102"></line>
              <line class="axis" x1="280" y1="96" x2="280" y2="102"></line>
              <line class="axis" x1="360" y1="96" x2="360" y2="102"></line>
              <line class="axis" x1="440" y1="96" x2="440" y2="102"></line>
              <text class="tick-label" x="40" y="114" text-anchor="middle">0</text>
              <text class="tick-label" x="120" y="114" text-anchor="middle">4</text>
              <text class="tick-label" x="200" y="114" text-anchor="middle">8</text>
              <text class="tick-label" x="280" y="114" text-anchor="middle">12</text>
              <text class="tick-label" x="360" y="114" text-anchor="middle">16</text>
              <text class="tick-label" x="440" y="114" text-anchor="middle">20</text>
              <circle class="plot-point" cx="200" cy="96" r="5"></circle>
              <circle class="plot-point" cx="220" cy="96" r="5"></circle>
              <circle class="plot-point" cx="240" cy="96" r="5"></circle>
              <circle class="plot-point" cx="260" cy="96" r="5"></circle>
              <circle class="plot-point" cx="280" cy="96" r="5"></circle>
              <text class="label-soft" x="40" y="66" text-anchor="start">série groupée</text>
              <text class="annotation-label" x="450" y="66" text-anchor="end">écart-type ≈ 1,4</text>

              <!-- SERIE B : dispersee. Axe en y=196, MEME echelle, MEME origine. -->
              <line class="axis" x1="40" y1="196" x2="450" y2="196"></line>
              <line class="axis" x1="40" y1="196" x2="40" y2="202"></line>
              <line class="axis" x1="120" y1="196" x2="120" y2="202"></line>
              <line class="axis" x1="200" y1="196" x2="200" y2="202"></line>
              <line class="axis" x1="280" y1="196" x2="280" y2="202"></line>
              <line class="axis" x1="360" y1="196" x2="360" y2="202"></line>
              <line class="axis" x1="440" y1="196" x2="440" y2="202"></line>
              <text class="tick-label" x="40" y="214" text-anchor="middle">0</text>
              <text class="tick-label" x="120" y="214" text-anchor="middle">4</text>
              <text class="tick-label" x="200" y="214" text-anchor="middle">8</text>
              <text class="tick-label" x="280" y="214" text-anchor="middle">12</text>
              <text class="tick-label" x="360" y="214" text-anchor="middle">16</text>
              <text class="tick-label" x="440" y="214" text-anchor="middle">20</text>
              <circle class="plot-point-alt" cx="80" cy="196" r="5"></circle>
              <circle class="plot-point-alt" cx="160" cy="196" r="5"></circle>
              <circle class="plot-point-alt" cx="240" cy="196" r="5"></circle>
              <circle class="plot-point-alt" cx="320" cy="196" r="5"></circle>
              <circle class="plot-point-alt" cx="400" cy="196" r="5"></circle>
              <text class="label-soft" x="40" y="166" text-anchor="start">série étalée</text>
              <text class="annotation-label" x="450" y="166" text-anchor="end">écart-type ≈ 5,7</text>
            </svg>
          `,
          notes: [
            'Série du haut : $\\{8\\,;\\,9\\,;\\,10\\,;\\,11\\,;\\,12\\}$, de moyenne $\\bar{x} = 10$ et d\'écart-type $\\sigma = \\sqrt{2} \\approx 1{,}4$.',
            'Série du bas : $\\{2\\,;\\,6\\,;\\,10\\,;\\,14\\,;\\,18\\}$, de moyenne $\\bar{x} = 10$ elle aussi, mais d\'écart-type $\\sigma = \\sqrt{32} \\approx 5{,}7$ — soit quatre fois plus.',
            'La ligne verticale est <strong>unique</strong> : elle traverse les deux axes au même endroit, parce que les deux moyennes sont réellement égales. Tout le reste diffère.'
          ],
          reading: 'Couvre un instant les points avec ta main et ne regarde que la ligne de moyenne : les deux séries deviennent indiscernables. C\'est exactement l\'information dont tu disposes quand on ne te donne que la moyenne.<br/><br/>Découvre maintenant les points : tu vois immédiatement que l\'une est resserrée et l\'autre étalée. L\'écart-type est le nombre qui te rend cette information quand tu n\'as pas le dessin sous les yeux.',
          caption: 'Deux séries de moyenne $10$, d\'écarts-types $\\sqrt{2}$ et $\\sqrt{32}$, sur un axe commun.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Une seule valeur extrême déplace la moyenne, pas la médiane',
          description: 'Les deux séries ne diffèrent que par <strong>une seule valeur</strong> : le $18$ du haut est devenu $78$ en bas. Tout le reste est identique, et les deux axes ont la même échelle.<br/><br/>Observe ce que devient chacun des deux indicateurs.',
          svg: `
            <svg viewBox="0 0 480 250" role="img" aria-labelledby="stat-med-title stat-med-desc">
              <title id="stat-med-title">La mediane resiste a une valeur extreme</title>
              <desc id="stat-med-desc">Deux series de cinq valeurs sont placees sur deux axes horizontaux de meme echelle, gradues de zero a quatre-vingts. La serie du haut vaut dix, douze, quatorze, seize, dix-huit : sa moyenne et sa mediane valent toutes deux quatorze et se superposent. Dans la serie du bas, la derniere valeur est passee de dix-huit a soixante-dix-huit ; sa mediane vaut toujours quatorze, au meme endroit qu'en haut, mais sa moyenne a ete tiree jusqu'a vingt-six, nettement a droite.</desc>

              <!-- SERIE 1 : axe en y=86. Echelle : valeur 0 en x=40, 5 unites
                   de viewBox par unite de serie. -->
              <line class="axis" x1="40" y1="86" x2="450" y2="86"></line>
              <line class="axis" x1="40" y1="86" x2="40" y2="92"></line>
              <line class="axis" x1="140" y1="86" x2="140" y2="92"></line>
              <line class="axis" x1="240" y1="86" x2="240" y2="92"></line>
              <line class="axis" x1="340" y1="86" x2="340" y2="92"></line>
              <line class="axis" x1="440" y1="86" x2="440" y2="92"></line>
              <text class="tick-label" x="40" y="104" text-anchor="middle">0</text>
              <text class="tick-label" x="140" y="104" text-anchor="middle">20</text>
              <text class="tick-label" x="240" y="104" text-anchor="middle">40</text>
              <text class="tick-label" x="340" y="104" text-anchor="middle">60</text>
              <text class="tick-label" x="440" y="104" text-anchor="middle">80</text>
              <circle class="plot-point" cx="90" cy="86" r="5"></circle>
              <circle class="plot-point" cx="100" cy="86" r="5"></circle>
              <circle class="plot-point" cx="110" cy="86" r="5"></circle>
              <circle class="plot-point" cx="120" cy="86" r="5"></circle>
              <circle class="plot-point" cx="130" cy="86" r="5"></circle>
              <line class="guide-line" x1="110" y1="46" x2="110" y2="86"></line>
              <text class="annotation-label" x="110" y="40" text-anchor="middle">moyenne = médiane = 14</text>
              <text class="label-soft" x="450" y="80" text-anchor="end">série de départ</text>

              <!-- SERIE 2 : axe en y=196, MEME echelle. Seule la derniere
                   valeur change : 18 devient 78, soit x de 130 a 430. -->
              <line class="axis" x1="40" y1="196" x2="450" y2="196"></line>
              <line class="axis" x1="40" y1="196" x2="40" y2="202"></line>
              <line class="axis" x1="140" y1="196" x2="140" y2="202"></line>
              <line class="axis" x1="240" y1="196" x2="240" y2="202"></line>
              <line class="axis" x1="340" y1="196" x2="340" y2="202"></line>
              <line class="axis" x1="440" y1="196" x2="440" y2="202"></line>
              <text class="tick-label" x="40" y="214" text-anchor="middle">0</text>
              <text class="tick-label" x="140" y="214" text-anchor="middle">20</text>
              <text class="tick-label" x="240" y="214" text-anchor="middle">40</text>
              <text class="tick-label" x="340" y="214" text-anchor="middle">60</text>
              <text class="tick-label" x="440" y="214" text-anchor="middle">80</text>
              <circle class="plot-point" cx="90" cy="196" r="5"></circle>
              <circle class="plot-point" cx="100" cy="196" r="5"></circle>
              <circle class="plot-point" cx="110" cy="196" r="5"></circle>
              <circle class="plot-point" cx="120" cy="196" r="5"></circle>
              <circle class="plot-point-alt" cx="430" cy="196" r="6"></circle>
              <text class="tick-label" x="430" y="216" text-anchor="middle">78</text>

              <!-- La mediane reste EXACTEMENT a la meme abscisse qu'en haut :
                   x=110 dans les deux series. La moyenne, elle, glisse a 170. -->
              <line class="guide-line" x1="110" y1="156" x2="110" y2="196"></line>
              <text class="annotation-label" x="110" y="150" text-anchor="middle">médiane = 14</text>
              <line class="curve-main" x1="170" y1="166" x2="170" y2="196"></line>
              <text class="annotation-label" x="188" y="160" text-anchor="start">moyenne = 26</text>
              <text class="label-soft" x="450" y="242" text-anchor="end">une seule valeur a changé</text>
            </svg>
          `,
          notes: [
            'Série du haut : $\\{10\\,;\\,12\\,;\\,14\\,;\\,16\\,;\\,18\\}$. Sa moyenne et sa médiane valent toutes deux $14$, et se superposent donc sur le dessin.',
            'Série du bas : $\\{10\\,;\\,12\\,;\\,14\\,;\\,16\\,;\\,78\\}$. La médiane vaut encore $14$, car c\'est toujours la troisième valeur de la liste triée.',
            'La moyenne, elle, est passée à $\\dfrac{10+12+14+16+78}{5} = \\dfrac{130}{5} = 26$ : une seule donnée l\'a déplacée de $12$ unités.'
          ],
          reading: 'La médiane ne compte que des <strong>rangs</strong> : peu importe que la dernière valeur soit $18$ ou $78$, elle reste la dernière, et la valeur du milieu ne bouge pas.<br/><br/>La moyenne, elle, additionne les <strong>valeurs</strong> : une donnée très grande pèse très lourd dans la somme. Retiens-en un réflexe utile pour la vie courante : quand on te parle d\'un salaire « moyen », demande-toi toujours ce que dirait la médiane.',
          caption: 'Effet d\'une valeur extrême : la médiane reste à $14$, la moyenne passe de $14$ à $26$.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi élever au carré',
          title: 'Les écarts simples s\'annulent, les écarts au carré non',
          description: 'Ton idée de regarder les écarts à la moyenne est <strong>exactement la bonne</strong> : c\'est celle que les mathématiciens ont suivie. Elle se heurte pourtant à un obstacle qu\'il faut voir une fois pour le retenir.<br/><br/>À gauche, les écarts tels quels. À droite, les mêmes écarts élevés au carré.',
          svg: `
            <svg viewBox="0 0 480 300" role="img" aria-labelledby="stat-ecarts-title stat-ecarts-desc">
              <title id="stat-ecarts-title">Ecarts simples contre ecarts au carre</title>
              <desc id="stat-ecarts-desc">Sur la serie quatre, six, huit de moyenne six, deux dessins sont compares. A gauche, les ecarts a la moyenne sont representes par deux barres opposees : une barre de moins deux vers la gauche et une barre de plus deux vers la droite, de meme longueur. Leur somme est nulle. A droite, les memes ecarts eleves au carre donnent deux barres de quatre, toutes deux du meme cote, dont la somme vaut huit. La variance vaut huit divise par trois, soit environ deux virgule six sept.</desc>

              <!-- VIGNETTE GAUCHE : les ecarts SIGNES. Echelle : 1 unite
                   d'ecart = 24 px de hauteur, ligne zero en y=150. Les deux
                   barres ont donc EXACTEMENT la meme longueur, 48 px, mais de
                   part et d'autre : c'est la raison de l'annulation. -->
              <text class="annotation-label" x="120" y="34" text-anchor="middle">écarts simples</text>
              <line class="axis" x1="30" y1="150" x2="210" y2="150"></line>
              <text class="tick-label" x="24" y="154" text-anchor="end">0</text>

              <rect x="50" y="150" width="40" height="48" fill="color-mix(in srgb, var(--secondary) 24%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="50" y="150" width="40" height="48" fill="none"></rect>
              <text class="tick-label" x="70" y="214" text-anchor="middle">-2</text>

              <rect x="110" y="150" width="40" height="0" fill="color-mix(in srgb, var(--secondary) 24%, transparent)" stroke="none"></rect>
              <text class="tick-label" x="130" y="168" text-anchor="middle">0</text>

              <rect x="170" y="102" width="40" height="48" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="170" y="102" width="40" height="48" fill="none"></rect>
              <text class="tick-label" x="190" y="96" text-anchor="middle">+2</text>

              <text class="label-soft" x="120" y="252" text-anchor="middle">somme = 0</text>
              <text class="label-soft" x="120" y="274" text-anchor="middle">on ne mesure rien</text>

              <!-- VIGNETTE DROITE : les ecarts au CARRE. Meme largeur de barre,
                   echelle verticale 12 px par unite d'aire : un ecart de 4
                   donne 48 px, donc les deux barres restent comparables a
                   l'oeil avec celles de gauche. Elles sont desormais du MEME
                   cote, et c'est tout le propos. -->
              <text class="annotation-label" x="360" y="34" text-anchor="middle">écarts au carré</text>
              <line class="axis" x1="270" y1="150" x2="450" y2="150"></line>
              <text class="tick-label" x="264" y="154" text-anchor="end">0</text>

              <rect x="290" y="102" width="40" height="48" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="290" y="102" width="40" height="48" fill="none"></rect>
              <text class="tick-label" x="310" y="96" text-anchor="middle">4</text>

              <rect x="350" y="150" width="40" height="0" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></rect>
              <text class="tick-label" x="370" y="168" text-anchor="middle">0</text>

              <rect x="410" y="102" width="40" height="48" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="410" y="102" width="40" height="48" fill="none"></rect>
              <text class="tick-label" x="430" y="96" text-anchor="middle">4</text>

              <text class="label-soft" x="360" y="252" text-anchor="middle">somme = 8</text>
              <text class="label-soft" x="360" y="274" text-anchor="middle">la dispersion se mesure</text>
            </svg>
          `,
          notes: [
            'Série $\\{4\\,;\\,6\\,;\\,8\\}$ de la méthode du cours, de moyenne $\\bar{x} = 6$. Les écarts valent $-2$, $0$ et $+2$.',
            'Leur somme vaut $-2 + 0 + 2 = 0$, et ce n\'est pas un hasard : la somme des écarts à la moyenne est <strong>toujours</strong> nulle, quelle que soit la série. Un indicateur qui vaut $0$ pour tout le monde ne distingue personne.',
            'Élevés au carré, les écarts deviennent $4$, $0$ et $4$ : plus aucun signe négatif, donc plus d\'annulation possible. Leur moyenne est la variance, $V = \\dfrac{8}{3} \\approx 2{,}67$, et sa racine est l\'écart-type, $\\sigma \\approx 1{,}63$.'
          ],
          reading: 'Regarde à gauche les deux barres de même longueur, l\'une vers le bas et l\'autre vers le haut : elles se détruisent mutuellement.<br/><br/>À droite, le carré a fait basculer la barre du bas vers le haut. Les deux contributions s\'ajoutent au lieu de se compenser, et le total devient une véritable mesure de l\'étalement.<br/><br/>C\'est aussi pourquoi il faut ensuite reprendre la racine carrée : la variance est exprimée en unités au carré, l\'écart-type revient dans l\'unité des données.',
          caption: 'Sur $\\{4\\,;\\,6\\,;\\,8\\}$ : somme des écarts simples $= 0$, somme des écarts au carré $= 8$.'
        }
      ],
      recap: [
        'La moyenne mesure la tendance centrale ; la variance et l\'écart-type mesurent la dispersion.',
        'On utilise les écarts au carré (pas les écarts simples, dont la somme est toujours nulle).',
        '$\\sigma$ a les mêmes unités que les données ; la variance est en unités² — c\'est pourquoi on préfère $\\sigma$.',
        'Un $\\sigma$ faible = données groupées autour de la moyenne ; un $\\sigma$ élevé = données dispersées.'
      ],
      piege: 'La variance se calcule avec les écarts à la moyenne au carré, pas en valeur absolue. Ne pas confondre $V$ et $\\sigma$.'
    },
    quiz: [
      { q: 'Pourquoi calcule-t-on la variance avec les écarts au CARRÉ $(x_i-\\bar{x})^2$ plutôt qu\'en valeur absolue ?', options: ['La somme des écarts simples $\\sum(x_i-\\bar{x})$ est toujours nulle ; le carré évite cette annulation et pénalise davantage les grandes déviations', 'Parce que les valeurs absolues ne s\'additionnent pas', 'Pour que les résultats soient toujours entiers', 'Par convention seulement — les deux formules donnent le même résultat'], answer: 0, correction: 'La somme $\\sum(x_i-\\bar{x}) = 0$ toujours (définition de la moyenne). En prenant les carrés, on évite cette annulation. De plus, le carré pénalise davantage les grandes déviations que les petites — ce qui est souvent souhaitable.' },
      { q: 'Deux séries ont la même moyenne. L\'écart-type de A est $0{,}5$, celui de B est $3$. Quelle série est plus homogène ?', options: ['B', 'A', 'Elles sont identiques', 'Impossible à dire'], answer: 1, correction: 'A est plus homogène : écart-type plus faible = données plus regroupées autour de la moyenne.' },
      { q: 'Pour la série $\\{2;4;4;6\\}$, la moyenne est $4$. La variance est :', options: ['$2$', '$4$', '$2{,}5$', '$1$'], answer: 0, correction: '$V=\\frac{(2-4)^2+(4-4)^2+(4-4)^2+(6-4)^2}{4}=\\frac{4+0+0+4}{4}=2$.' },
      { q: 'On ajoute $5$ à chaque valeur d\'une série. Que deviennent la moyenne et l\'écart-type ?', options: ['La moyenne augmente de $5$, l\'écart-type ne change pas', 'La moyenne et l\'écart-type augmentent de $5$', 'La moyenne ne change pas, l\'écart-type augmente de $5$', 'Aucun des deux ne change'], answer: 0, correction: 'Ajouter une constante $c$ à toutes les valeurs translate la série : $\\bar{x}\' = \\bar{x} + c$ (la moyenne augmente de $c$). Mais les écarts à la moyenne ne changent pas ($x_i + c - (\\bar{x} + c) = x_i - \\bar{x}$), donc $\\sigma$ reste identique. La dispersion n\'est pas affectée par une translation.' },
      { q: 'La variance d\'une série est $V = 9$. Si on multiplie toutes les valeurs par $2$, la nouvelle variance est :', options: ['$18$', '$36$', '$9$', '$81$'], answer: 1, correction: 'Multiplier toutes les valeurs par $k$ multiplie la moyenne par $k$ et les écarts par $k$, donc la variance par $k^2$. Ici $V\' = 2^2 \\times 9 = 36$. L\'écart-type, lui, est multiplié par $|k|$ : $\\sigma\' = 2 \\times 3 = 6$.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 12 énoncés tirés, 4 moules, **1 seule tâche distincte** —
       un calcul d'écart-type, habillé quatre fois (des notes, des trajets, des
       températures, des prix). La moyenne seule, la médiane, l'effet d'une
       valeur extrême et la comparaison de deux séries n'étaient travaillés par
       aucun exercice, alors que ce sont les attendus du chapitre.

       Cinq tâches maintenant. */
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE une seconde fois le 2026-09-13 : la mesure en
           TÂCHES DISTINCTES donnait 5, sous la cible de 6 à 7.

           Les trois tâches ajoutées visent des gestes que la banque ne
           demandait jamais et que l'évaluation suppose pourtant : lire une
           unité sur un indicateur, remonter d'une moyenne aux données, et
           choisir entre moyenne et médiane selon la série. */
        const tache = pick(['ecart-type', 'moyenne', 'mediane', 'extreme', 'comparer',
                            'uniteIndicateur', 'valeurManquante', 'choisirIndicateur']);

        /* Tâche AJOUTÉE — l'unité de la variance et celle de l'écart-type.
           C'est le point que la fiche professeur signale comme rarement
           traité, et c'est lui qui explique POURQUOI on prend la racine. */
        if (tache === 'uniteIndicateur') {
          const grandeurs = [
            { nom: 'tailles d\'élèves', u: 'cm' },
            { nom: 'masses de colis', u: 'kg' },
            { nom: 'durées de trajet', u: 'min' },
            { nom: 'températures relevées', u: '°C' }
          ];
          const g = pick(grandeurs);
          const sigma = pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
          const v = sigma * sigma;
          return {
            statement: `Une série de ${g.nom}, mesurées en ${g.u}, a pour variance $V = ${v}$.<br/><br/><strong>1.</strong> Calcule l'écart-type $\\sigma$.<br/><strong>2.</strong> Dans quelle unité s'exprime-t-il ?<br/><br/>Donne la valeur de $\\sigma$.`,
            answer: sigma,
            tolerance: 0.01,
            unit: g.u,
            hint: `L'écart-type est la <strong>racine carrée</strong> de la variance. C'est précisément ce passage par la racine qui ramène l'indicateur dans l'unité des données.`,
            solution: [
              `Unité des indicateurs de dispersion : $\\sigma = \\sqrt{V} = \\sqrt{${v}} = ${sigma}$`,
              `La variance $V = ${v}$ s'exprime en ${g.u}<sup>2</sup>, ce qui ne se lit pas sur les données : personne ne sait ce que représentent des ${g.u} au carré ici.`,
              `L'écart-type, lui, vaut $${sigma}$ ${g.u} — la <strong>même unité</strong> que les données. C'est pour cela qu'on prend la racine, et c'est lui qu'on interprète.`
            ]
          };
        }

        /* Tâche AJOUTÉE — remonter de la moyenne aux données. L'évaluation
           pose cette question (Q1, réécrite ce jour) et aucun exercice ne
           l'entraînait. */
        if (tache === 'valeurManquante') {
          const contextes = [
            { quoi: 'notes', u: 'points' },
            { quoi: 'durées', u: 'min' },
            { quoi: 'masses', u: 'kg' }
          ];
          const c = pick(contextes);
          const k = pick([4, 5, 6]);
          const moy = rand(6, 15);
          const somme = k * moy;
          /* Les k-1 valeurs connues sont tirées puis la manquante est
             DÉDUITE, ce qui garantit que la moyenne annoncée est exacte. */
          const connues = [];
          let reste = somme;
          for (let i = 0; i < k - 1; i++) {
            const max = Math.min(moy + 5, reste - (k - 1 - i));
            const min = Math.max(1, moy - 5);
            const v = rand(min, Math.max(min, max));
            connues.push(v);
            reste -= v;
          }
          if (reste < 1 || reste > 25) return {
            statement: `Une série de $${k}$ ${c.quoi} a pour moyenne $${moy}$.<br/><br/>Quelle est la <strong>somme</strong> de toutes les valeurs de la série ?`,
            answer: somme, tolerance: 0, unit: c.u,
            hint: `La moyenne est la somme divisée par l'effectif. Retourne la relation : la somme vaut la moyenne multipliée par l'effectif.`,
            solution: [
              `Somme à partir de la moyenne : $\\bar{x} = \\dfrac{\\text{somme}}{${k}}$`,
              `Donc somme $= ${k} \\times ${moy} = ${somme}$ ${c.u}.`
            ]
          };
          return {
            statement: `Une série de $${k}$ ${c.quoi} est $\\{${connues.join(' ; ')} ; x\\}$, où la dernière valeur a été effacée.<br/><br/>On sait que la moyenne de la série vaut $${moy}$.<br/><br/>Retrouve la valeur effacée $x$.`,
            answer: reste,
            tolerance: 0,
            unit: c.u,
            hint: `Si la moyenne vaut $${moy}$ pour $${k}$ valeurs, leur somme vaut $${k} \\times ${moy}$. Compare avec la somme des valeurs connues.`,
            solution: [
              `Valeur manquante : la somme des $${k}$ valeurs vaut $${k} \\times ${moy} = ${somme}$`,
              `Les valeurs connues totalisent $${connues.join(' + ')} = ${somme - reste}$.`,
              `Donc $x = ${somme} - ${somme - reste} = ${reste}$ ${c.u}.`,
              `Vérification : la moyenne de la série complète vaut bien $\\dfrac{${somme}}{${k}} = ${moy}$ ✓`
            ]
          };
        }

        /* Tâche AJOUTÉE — choisir l'indicateur adapté. C'est un attendu
           explicite du programme, et la banque ne le travaillait pas. */
        if (tache === 'choisirIndicateur') {
          const cas = pick([
            { serie: [18, 19, 20, 21, 22], quoi: 'les âges des élèves d\'une classe', extreme: false },
            { serie: [1100, 1200, 1250, 1300, 9000], quoi: 'les salaires mensuels d\'une petite entreprise', extreme: true },
            { serie: [12, 13, 13, 14, 15], quoi: 'les notes d\'un élève régulier', extreme: false },
            { serie: [2, 3, 3, 4, 40], quoi: 'les temps de connexion en minutes', extreme: true }
          ]);
          const tri = cas.serie.slice().sort((a, b) => a - b);
          const med = tri[(tri.length - 1) / 2];
          const moy = tri.reduce((s, v) => s + v, 0) / tri.length;
          return {
            statement: `On relève ${cas.quoi} : $\\{${cas.serie.join(' ; ')}\\}$.<br/><br/>Pour résumer cette série par un seul nombre, vaut-il mieux utiliser la <strong>médiane</strong> plutôt que la moyenne ?<br/><br/>Réponds par $1$ pour oui (la médiane est préférable), $0$ pour non (la moyenne convient).`,
            answer: cas.extreme ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Calcule les deux indicateurs et compare-les. S'ils sont très différents, demande-toi lequel des deux est tiré par une valeur isolée.`,
            solution: [
              `Choix de l'indicateur : je calcule les deux`,
              `Moyenne : $\\bar{x} = ${fr(moy, 1)}$ ; médiane : $${med}$.`,
              cas.extreme
                ? `Les deux diffèrent nettement : la série contient une valeur <strong>extrême</strong> qui tire la moyenne vers le haut, alors que la médiane n'en est pas affectée. Ici la <strong>médiane</strong> résume mieux la série.`
                : `Les deux sont proches : la série ne contient aucune valeur extrême, et la <strong>moyenne</strong> convient parfaitement. Elle a l'avantage d'utiliser toutes les valeurs.`
            ]
          };
        }

        /* Tâche 2 — la moyenne seule, sans dispersion. C'est la base, et
           aucun exercice ne la travaillait isolément. */
        if (tache === 'moyenne') {
          const ctx = pick([
            { intro: 'Les notes d\'un élève sur $6$ contrôles sont', unit: 'points' },
            { intro: 'Les durées (en min) de $6$ trajets sont', unit: 'min' },
            { intro: 'Les masses (en kg) de $6$ colis sont', unit: 'kg' }
          ]);
          const n = 6;
          const moy = rand(6, 15);
          const ecarts = [-3, -1, 0, 1, 2, 1];
          const vals = ecarts.map(e => moy + e);
          const somme = vals.reduce((s, v) => s + v, 0);
          const moyenne = parseFloat((somme / n).toFixed(2));
          return {
            statement: `${ctx.intro} : $\\{${vals.join(' ; ')}\\}$.<br/><br/>Calcule la moyenne de cette série (arrondie au centième).`,
            answer: moyenne, tolerance: 0.01, unit: ctx.unit,
            hint: `La moyenne est la somme de toutes les valeurs, divisée par leur nombre. Ici il y a $${n}$ valeurs.`,
            solution: [
              `On additionne les $${n}$ valeurs : $${vals.join(' + ')} = ${somme}$.`,
              `On divise par l'effectif : $\\bar{x} = \\dfrac{${somme}}{${n}} = ${fr(moyenne)}$ ${ctx.unit}.`,
              `Contrôle : la moyenne doit toujours tomber entre la plus petite valeur ($${Math.min(...vals)}$) et la plus grande ($${Math.max(...vals)}$).`
            ]
          };
        }

        /* Tâche 3 — la médiane, et le fait qu'elle diffère de la moyenne. */
        if (tache === 'mediane') {
          const base = rand(5, 12);
          const vals = [base, base + 1, base + 2, base + 4, base + 25].slice();
          const tri = vals.slice().sort((a, b) => a - b);
          const mediane = tri[2];
          const moyenne = parseFloat((vals.reduce((s, v) => s + v, 0) / 5).toFixed(2));
          return {
            statement: `On relève les salaires mensuels (en centaines d'euros) de $5$ personnes : $\\{${vals.join(' ; ')}\\}$.<br/><br/>Calcule la <strong>médiane</strong> de cette série.`,
            answer: mediane, tolerance: 0, unit: '',
            hint: `La médiane partage la série ordonnée en deux moitiés de même effectif. Range d'abord les valeurs dans l'ordre croissant, puis prends celle du milieu.`,
            solution: [
              `On range les valeurs dans l'ordre croissant : $${tri.join(' ; ')}$.`,
              `Il y a $5$ valeurs, donc la médiane est la $3^e$ : $${mediane}$.`,
              `Remarque : la moyenne de cette série vaut $${fr(moyenne)}$, nettement PLUS que la médiane. C'est la valeur extrême $${Math.max(...vals)}$ qui tire la moyenne vers le haut, alors que la médiane, elle, n'en est pas affectée.`
            ]
          };
        }

        /* Tâche 4 — l'effet d'une valeur extrême, mesuré. C'est le point que
           l'évaluation interroge et qu'aucun exercice ne préparait. */
        if (tache === 'extreme') {
          const vals = [10, 12, 11, 13, 14];
          const extreme = rand(60, 90);
          const avant = vals.reduce((s, v) => s + v, 0) / vals.length;
          const apres = (vals.reduce((s, v) => s + v, 0) + extreme) / (vals.length + 1);
          const ecart = parseFloat((apres - avant).toFixed(2));
          return {
            statement: `Une série de $5$ valeurs est $\\{${vals.join(' ; ')}\\}$, de moyenne $${fr(avant)}$.<br/><br/>On ajoute une sixième valeur, très éloignée des autres : $${extreme}$.<br/><br/>De combien la moyenne augmente-t-elle ? (Arrondis au centième.)`,
            answer: ecart, tolerance: 0.02, unit: '',
            hint: `Calcule la nouvelle moyenne sur les $6$ valeurs, puis compare-la à l'ancienne. Attention : l'effectif change aussi, il passe de $5$ à $6$.`,
            solution: [
              `Somme initiale : $${vals.reduce((s, v) => s + v, 0)}$, pour $5$ valeurs, soit une moyenne de $${fr(avant)}$.`,
              `Nouvelle somme : $${vals.reduce((s, v) => s + v, 0)} + ${extreme} = ${vals.reduce((s, v) => s + v, 0) + extreme}$, pour $6$ valeurs, soit $\\bar{x} = ${fr(parseFloat(apres.toFixed(2)))}$.`,
              `La moyenne augmente donc de $${fr(ecart)}$. Une seule valeur a suffi : c'est la fragilité de la moyenne face aux valeurs extrêmes, et la raison pour laquelle on lui adjoint souvent la médiane.`
            ]
          };
        }

        /* Tâche 5 — comparer la dispersion de deux séries de même moyenne.
           Réponse codée : 1 la série A est plus homogène, 2 la série B. */
        if (tache === 'comparer') {
          const moy = rand(8, 14);
          const serreA = pick([true, false]);
          const ecA = serreA ? [-1, 0, 1, 0] : [-5, -2, 3, 4];
          const ecB = serreA ? [-6, -1, 2, 5] : [-1, 1, -1, 1];
          const A = ecA.map(e => moy + e), B = ecB.map(e => moy + e);
          const sigma = (t) => {
            const m = t.reduce((s, v) => s + v, 0) / t.length;
            return Math.sqrt(t.reduce((s, v) => s + (v - m) ** 2, 0) / t.length);
          };
          const sA = parseFloat(sigma(A).toFixed(2)), sB = parseFloat(sigma(B).toFixed(2));
          return {
            statement: `Deux séries ont la <strong>même moyenne</strong> :<br/><br/>série A : $\\{${A.join(' ; ')}\\}$<br/>série B : $\\{${B.join(' ; ')}\\}$<br/><br/>Laquelle est la plus <strong>homogène</strong> (valeurs les plus regroupées) ?<br/><br/>Réponds par $1$ pour A, $2$ pour B.`,
            answer: sA < sB ? 1 : 2, tolerance: 0, unit: '',
            hint: `La moyenne ne dit rien de la dispersion : deux séries de même moyenne peuvent être très différentes. C'est l'écart-type qui tranche — plus il est petit, plus les valeurs sont regroupées.`,
            solution: [
              `Les deux séries ont bien la même moyenne, $${moy}$ : la moyenne ne permet donc pas de les distinguer.`,
              `Écart-type de A : $\\sigma_A \\approx ${fr(sA)}$. Écart-type de B : $\\sigma_B \\approx ${fr(sB)}$.`,
              `C'est la série ${sA < sB ? 'A' : 'B'} qui a le plus petit écart-type : ses valeurs sont les plus regroupées autour de la moyenne. Réponse : $${sA < sB ? 1 : 2}$.`
            ]
          };
        }

        /* Tâche 1 — l'écart-type complet (la tâche historique). */
        const contexts = [
          { intro: 'Les notes d\'un élève sur $5$ contrôles de maths sont', unit: 'points' },
          { intro: 'Les durées (en min) de $5$ trajets quotidiens sont', unit: 'min' },
          { intro: 'Les températures (en °C) relevées sur $5$ jours sont', unit: '°C' },
          { intro: 'Les prix (en €) de $5$ articles similaires sont', unit: '€' }
        ];
        const ctx = pick(contexts);
        const mean = rand(8, 16);
        const d1 = rand(1, 4);
        const d2 = rand(1, 3);
        const d3 = rand(0, 2);
        const vals = [mean - d1, mean - d2, mean + d3, mean + d2, mean + d1 - d3];
        const actualMean = vals.reduce((s, v) => s + v, 0) / 5;
        const roundedMean = parseFloat(actualMean.toFixed(1));
        const variance = vals.reduce((s, v) => s + (v - actualMean) ** 2, 0) / 5;
        const sigma = parseFloat(Math.sqrt(variance).toFixed(2));
        return {
          statement: `${ctx.intro} : $\\{${vals.join(' ; ')}\\}$.<br/><br/><strong>1.</strong> Calculer la moyenne $\\bar{x}$.<br/><strong>2.</strong> Calculer la variance $V$.<br/><strong>3.</strong> En déduire l'écart-type $\\sigma = \\sqrt{V}$.<br/><br/>Donne l'<strong>écart-type</strong> $\\sigma$ (arrondi au centième).`,
          answer: sigma,
          tolerance: 0.05,
          unit: ctx.unit,
          hint: `Commence par la moyenne : $\\bar{x} = \\frac{${vals.join('+')}}{5}$. Puis calcule chaque écart au carré $(x_i - \\bar{x})^2$.`,
          solution: [
            `$\\bar{x} = \\frac{${vals.join('+')}}{5} = \\frac{${vals.reduce((s,v)=>s+v,0)}}{5} = ${roundedMean}$`,
            `Écarts au carré : ${vals.map(v => `(${v}-${roundedMean})^2 = ${fr((v-actualMean)**2, 2)}`).join(', ')}`,
            `$V = \\frac{${vals.map(v => fr((v-actualMean)**2, 2)).join('+')}}{5} = ${fr(variance, 2)}$`,
            `$\\sigma = \\sqrt{${fr(variance, 2)}} \\approx ${fr(sigma)}$ ${ctx.unit}`
          ]
        };
      }
    },
    probleme: {
      context: 'Deux classes de Seconde passent le même devoir de maths :<br/><br/>- <strong>Classe A</strong> ($5$ élèves, notes simplifiées) : $\\{12 ; 14 ; 13 ; 15 ; 11\\}$<br/>- <strong>Classe B</strong> ($5$ élèves) : $\\{8 ; 18 ; 10 ; 20 ; 9\\}$<br/><br/>Le professeur veut comparer la régularité des deux classes.',
      tasks: [
        'Calculer la moyenne de chaque classe. Que remarque-t-on ?',
        'Calculer la variance puis l\'écart-type de chaque série.',
        'Le professeur envisage d\'ajouter $2$ points à toutes les notes de la classe B. Quels sont les effets sur la moyenne et l\'écart-type de B ?'
      ],
      solutions: [
        '$\\bar{A}=\\frac{12+14+13+15+11}{5}=\\frac{65}{5}=13$ ; $\\bar{B}=\\frac{8+18+10+20+9}{5}=\\frac{65}{5}=13$. Les moyennes sont identiques !',
        '$V_A=\\frac{(12-13)^2+(14-13)^2+(13-13)^2+(15-13)^2+(11-13)^2}{5}=\\frac{1+1+0+4+4}{5}=2$, $\\sigma_A=\\sqrt{2}\\approx 1{,}41$.<br/>$V_B=\\frac{25+25+9+49+16}{5}=24{,}8$, $\\sigma_B=\\sqrt{24{,}8}\\approx 4{,}98$.',
        'Ajouter $2$ points à toutes les notes augmente la moyenne de $2$ ($\\bar{B}\' = 15$) mais ne change pas l\'écart-type ($\\sigma_B\' = \\sigma_B \\approx 4{,}98$). La dispersion ne dépend pas d\'une translation.'
      ],
      finalAnswer: 'Mêmes moyennes ($13$), mais A est bien plus régulière ($\\sigma_A \\approx 1{,}41$ vs $\\sigma_B \\approx 4{,}98$). Ajouter $2$ pts ne change pas la dispersion.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques descriptives',
      duration: '30 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-13. L'ancienne demandait la moyenne
             de cinq nombres : l'application la plus directe du devoir, et la
             Q2 mobilisait déjà la même série. La nouvelle donne la moyenne
             VISÉE et cache une valeur, ce qui oblige à remonter de la
             moyenne aux données au lieu de descendre. « chercher ». La
             réponse est $12$, et la moyenne de la série complète reste $8$. */
          statement: 'Une série de cinq notes est $\\{3 ; 7 ; 8 ; 10 ; x\\}$, où la dernière note a été effacée.<br/><br/>On sait que la moyenne de la série vaut $8$.<br/><br/>Retrouve la note effacée $x$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si la moyenne des cinq notes vaut $8$, c\'est que leur <strong>somme</strong> vaut $5 \\times 8 = 40$.<br/><br/>Or les quatre notes connues totalisent $3 + 7 + 8 + 10 = 28$.<br/><br/>La note effacée vaut donc $x = 40 - 28 = 12$.<br/><br/><strong>Vérification :</strong> $\\dfrac{3+7+8+10+12}{5} = \\dfrac{40}{5} = 8$ ✓'
        },
        {
          statement: 'La série $\\{4 ; 6 ; 6 ; 8\\}$ a pour moyenne $6$. Calculer sa variance.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$V = \\dfrac{(4-6)^2 + (6-6)^2 + (6-6)^2 + (8-6)^2}{4} = \\dfrac{4 + 0 + 0 + 4}{4} = 2$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-13. L'ancienne, « si $V = 16$, que vaut
             $\sigma$ ? », était une racine carrée à extraire : « calculer »,
             déjà porté par Q1 et Q2 du même devoir. La nouvelle porte sur ce
             que l'écart-type REPRÉSENTE — son unité, donc son interprétation
             sur les données elles-mêmes — sans changer les nombres ni la
             réponse ($4$). C'est « représenter ». */
          statement: 'Une série de <strong>tailles d\'élèves</strong>, mesurées en centimètres, a pour variance $V = 16$.<br/><br/>Son écart-type $\\sigma$ s\'exprime, lui, directement en centimètres : c\'est ce qui le rend lisible sur les données.<br/><br/>Combien vaut $\\sigma$ ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$\\sigma = \\sqrt{V} = \\sqrt{16} = 4$ cm.<br/><br/>La variance, elle, valait $16$ <strong>cm²</strong> : en élevant les écarts au carré, on a aussi élevé l\'unité au carré, et des « centimètres carrés » ne veulent rien dire pour une taille.<br/><br/>C\'est précisément pour cela qu\'on prend la racine : $\\sigma$ retrouve l\'unité des données et se lit directement sur la série. Ici, les tailles s\'écartent en moyenne d\'environ $4$ cm de la taille moyenne.'
        },
        {
          statement: 'Deux séries ont la même moyenne. La série A a un écart-type de $2$ et la série B un écart-type de $8$. Quelle affirmation est correcte ?',
          type: 'multiple-choice',
          options: ['B est plus homogène que A', 'A est plus homogène que B', 'Les deux séries sont également dispersées', 'On ne peut pas comparer sans connaître les effectifs'],
          answer: 1,
          points: 1,
          correction: 'Un écart-type plus faible signifie des données plus regroupées autour de la moyenne. $\\sigma_A = 2 < \\sigma_B = 8$, donc A est plus homogène.'
        },
        {
          statement: 'Pourquoi utilise-t-on les carrés des écarts plutôt que les écarts simples pour calculer la variance ?',
          type: 'multiple-choice',
          options: ['Car la somme des écarts simples $\\sum(x_i - \\bar{x})$ est toujours nulle', 'Car les carrés sont plus faciles à calculer', 'Car la variance doit toujours être un entier', 'Par convention uniquement'],
          answer: 0,
          points: 2,
          correction: 'La somme des écarts à la moyenne $\\sum(x_i - \\bar{x})$ est toujours nulle par définition de la moyenne. Élever au carré évite cette annulation et pénalise davantage les grandes déviations.'
        }
      ]
    }
  });
