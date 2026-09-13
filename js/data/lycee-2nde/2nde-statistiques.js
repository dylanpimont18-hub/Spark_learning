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
      intro: 'La moyenne est la mesure de tendance centrale la plus utilisée, mais elle est sensible aux valeurs extrêmes. La variance mesure la dispersion en moyennant les CARRÉS des écarts à la moyenne (pas les écarts simples, dont la somme est toujours nulle). L\'écart-type $\\sigma = \\sqrt{V}$ est exprimé dans les mêmes unités que les données — ce qui le rend plus interprétable que la variance. Un écart-type faible signifie des données regroupées autour de la moyenne ; élevé, des données très dispersées. La règle empirique des $68\\%$ dit qu\'environ les deux tiers des données se trouvent dans $[\\bar{x}-\\sigma ; \\bar{x}+\\sigma]$ pour une distribution en cloche.',
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
        const tache = pick(['ecart-type', 'moyenne', 'mediane', 'extreme', 'comparer']);

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
