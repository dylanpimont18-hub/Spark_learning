/* =========================================================
   Spark Learning – data/3e/3e-volumes.js
   Module : Volumes : sphère et solides composés (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-volumes',
    level: 1, subject: 'maths',
    icon: '🌐',
    title: 'Volumes : sphère et solides composés',
    subtitle: 'Formule de la sphère, assemblages',
    keywords: ['Sphère', 'Boule', 'Volume', 'Solides composés', 'Rayon'],
    physics: 'Calcul du volume d\'un réservoir sphérique, d\'une planète, d\'une bulle de gaz',
    cours: {
      intro: 'La <strong>sphère</strong> est la surface des points à distance $r$ d\'un centre ; la <strong>boule</strong> est le volume plein qu\'elle délimite. La formule $V = \\dfrac{4}{3}\\pi r^3$ porte le <strong>cube du rayon</strong> : doubler le rayon multiplie le volume par $8$, pas par $2$ !<br/><br/>' +
        'Cette sensibilité au rayon explique pourquoi les cellules biologiques ne dépassent pas une certaine taille : leur surface (en $r^2$) ne peut plus suffire aux échanges si le volume (en $r^3$) croît trop vite.<br/><br/>' +
        'Pour les <strong>solides composés</strong> : décomposer en formes simples (boule, cylindre, cône, pyramide), calculer chaque volume, puis <strong>additionner</strong> — ou <strong>soustraire</strong> si un solide est creusé dans un autre.',
      definitions: [
        { term: 'Sphère', def: 'La <strong>surface</strong> formée par tous les points situés à la même distance $r$ d\'un point central. La sphère est « creuse » : elle n\'inclut que la surface.' },
        { term: 'Boule', def: 'Le <strong>volume</strong> délimité par une sphère : la boule contient tous les points à distance $\\leq r$ du centre. C\'est la sphère « pleine ».' },
        { term: 'Rayon', def: 'La distance $r$ du centre à n\'importe quel point de la sphère. <strong>Attention</strong> : si l\'énoncé donne le diamètre $d$, il faut calculer $r = \\dfrac{d}{2}$ avant d\'appliquer les formules.' },
        { term: 'Solide composé', def: 'Solide formé par <strong>assemblage de solides simples</strong> (cylindre + cône, boule creusée, etc.). Son volume se calcule par addition ou soustraction des volumes des parties.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> les composantes du solide (boule, cône, cylindre, pyramide…).<br/><em>Exemple :</em> une figurine = cylindre + demi-sphère.',
          '<strong>Étape 2 : Calculer</strong> le volume de chaque partie avec la formule adaptée.<br/><em>Exemple :</em> $V_{\\text{boule}} = \\dfrac{4}{3}\\pi r^3$, $V_{\\text{cylindre}} = \\pi r^2 h$.',
          '<strong>Étape 3 : Combiner</strong> — additionner les volumes si juxtaposés, <strong>soustraire</strong> si un solide est creusé dans un autre.'
        ]
      },
      example: {
        statement: 'Calculer le volume d\'une boule de rayon $r = 6$ cm. On prendra $\\pi \\approx 3{,}14$.',
        steps: [
          '<strong>Formule</strong> : $V = \\dfrac{4}{3}\\pi r^3$.',
          '<strong>Calcul de $r^3$</strong> : $6^3 = 216$. Puis $V = \\dfrac{4}{3} \\times 3{,}14 \\times 216 = \\dfrac{4 \\times 3{,}14 \\times 216}{3}$.',
          '<strong>Résultat</strong> : $V = \\dfrac{2\\,713{,}44}{3} \\approx 904{,}32$ cm³.'
        ],
        answer: '$V \\approx 904{,}32$ cm³.'
      },
      formulas: [
        'Boule : $V = \\dfrac{4}{3}\\pi r^3$',
        'Surface d\'une sphère : $S = 4\\pi r^2$',
        'Hémisphère : $V = \\dfrac{2}{3}\\pi r^3$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Puissance du rayon',
        title: 'Comparer deux sphères : quand le rayon double, le volume est multiplié par 8',
        description: 'Le rayon passe de $r$ à $2r$ : chaque longueur double, mais le volume dépend du <strong>cube</strong> du rayon, donc $V\' = 2^3 \\times V = 8V$.',
        svg: `
          <svg viewBox="0 0 380 290" role="img" aria-labelledby="volumes-graph-title volumes-graph-desc">
            <title id="volumes-graph-title">Deux spheres de rayons r et 2r</title>
            <desc id="volumes-graph-desc">Le schema montre deux spheres, l'une de rayon r = 3 cm et l'autre de rayon double 2r = 6 cm, avec leurs volumes V = 113,04 cm3 et V' = 904,32 cm3, dans un rapport de 8.</desc>
            <rect x="20" y="8" width="340" height="30" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="28">Rayon × 2 → Volume × 2³ = 8</text>
            <circle cx="110" cy="200" r="36" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></circle>
            <circle class="frame-line" cx="110" cy="200" r="36" fill="none"></circle>
            <circle cx="270" cy="160" r="72" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)" stroke="none"></circle>
            <circle class="curve-main" cx="270" cy="160" r="72" fill="none"></circle>
            <line class="guide-line" x1="110" y1="200" x2="146" y2="200"></line>
            <line class="guide-line" x1="270" y1="160" x2="342" y2="160"></line>
            <circle class="plot-point-alt" cx="110" cy="200" r="4"></circle>
            <circle class="plot-point-alt" cx="270" cy="160" r="4"></circle>
            <circle class="plot-point" cx="146" cy="200" r="4"></circle>
            <circle class="plot-point" cx="342" cy="160" r="4"></circle>
            <text class="annotation-label" x="118" y="190">r = 3 cm</text>
            <text class="annotation-label" x="278" y="148">2r = 6 cm</text>
            <text class="label-soft" x="110" y="150" text-anchor="middle">Sphere 1</text>
            <text class="label-soft" x="270" y="74" text-anchor="middle">Sphere 2</text>
            <text class="annotation-label" x="110" y="254" text-anchor="middle">V = 113,04 cm3</text>
            <text class="annotation-label" x="270" y="254" text-anchor="middle">V' = 904,32 cm3</text>
          </svg>
        `,
        notes: [
          'Ici $r = 3$ cm et $2r = 6$ cm : ce sont les mêmes valeurs que dans l\'exemple du cours, pour vérifier la cohérence des deux calculs.',
          '$V = \\dfrac{4}{3}\\pi r^3 \\approx 113{,}04$ cm³ pour la petite sphère, avec $\\pi \\approx 3{,}14$.',
          '$V\' = \\dfrac{4}{3}\\pi (2r)^3 = 2^3 \\times \\dfrac{4}{3}\\pi r^3 = 8V \\approx 904{,}32$ cm³ : on vérifie $904{,}32 \\div 113{,}04 = 8$.'
        ],
        reading: 'Ne confonds pas facteur de longueur et facteur de volume : le rayon double (facteur $2$) mais le volume est multiplié par $2^3 = 8$, pas par $2$.',
        caption: 'Deux sphères de rayons $r = 3$ cm et $2r = 6$ cm : leurs volumes sont dans un rapport de $8 = 2^3$.'
      },
      recap: [
        'La formule de la boule est $V = \\dfrac{4}{3}\\pi r^3$ — le volume dépend du <strong>cube</strong> du rayon.',
        'Doubler le rayon multiplie le volume par $2^3 = 8$ — pas par $2$ ! C\'est la principale source d\'erreur.',
        'Toujours vérifier si l\'énoncé donne le <strong>rayon</strong> ou le <strong>diamètre</strong> ($r = d/2$).',
        'Pour un solide composé : <strong>décomposer</strong> en formes simples, calculer chaque volume, puis additionner (ou soustraire).'
      ],
      piege: 'Piège : $V = \\frac{4}{3}\\pi r^3$ — c\'est le RAYON au cube, pas le diamètre ! Si on donne le diamètre $d$, ne pas oublier $r = d/2$ avant de calculer $r^3$.'
    },
    quiz: [
      {
        q: 'On double le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
        options: ['$2$', '$4$', '$8$', '$6$'],
        answer: 2,
        correction: '$V = \\frac{4}{3}\\pi r^3$. Avec $2r$ : $V\' = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\times 8r^3 = 8V$. Le volume est multiplié par $8 = 2^3$. L\'erreur courante est de répondre $\\times 2$ (confusion avec les longueurs) ou $\\times 4$ (confusion avec les aires).'
      },
      {
        q: 'Une boule de diamètre $6$ cm a un volume de :',
        options: ['$904{,}32$ cm³', '$113{,}04$ cm³', '$56{,}52$ cm³', '$452{,}16$ cm³'],
        answer: 1,
        correction: 'Rayon $r = 3$ cm. $V = \\frac{4}{3} \\times 3{,}14 \\times 27 = 113{,}04$ cm³.'
      },
      {
        q: 'Une figurine est formée d\'un cylindre surmonté d\'une demi-sphère de même rayon $r = 2$ cm. Le cylindre a une hauteur de $5$ cm. Quel est le volume total (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$79{,}55$ cm³', '$62{,}8$ cm³', '$96{,}97$ cm³', '$45{,}73$ cm³'],
        answer: 0,
        correction: 'Cylindre : $3{,}14 \\times 4 \\times 5 = 62{,}8$ cm³. Demi-sphère : $\\frac{2}{3} \\times 3{,}14 \\times 8 = 16{,}75$ cm³. Total : $\\approx 79{,}55$ cm³.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne le rayon, applique
         $\frac{4}{3}\pi r^3$ » — habillé de six contextes tirés par pick().
         Mesure à 60 tirages : 6 moules d'énoncé, mais **1 seule tâche
         distincte**.

         Le manque le plus net : le chapitre s'appelle « sphère ET SOLIDES
         COMPOSÉS », et aucun solide composé n'était jamais tiré. La moitié du
         titre n'était pas entraînée. Le DIAMÈTRE non plus n'apparaissait
         jamais, alors que diviser par deux avant de cuber est l'erreur que tous
         les énoncés de brevet tendent.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'boule'     : la tâche d'origine, conservée ;
           - 'diametre'  : le rayon n'est pas donné, il faut le déduire —
                           l'élève cube le diamètre et se trompe d'un facteur 8 ;
           - 'compose'   : cylindre surmonté d'une demi-sphère, c'est-à-dire la
                           moitié du titre du chapitre, jamais entraînée ;
           - 'demi'      : une demi-boule seule, où l'oubli du facteur 2 est
                           immédiat ;
           - 'rayonInverse' : remonter du volume au rayon, par une racine
                           cubique — le chemin retour, jamais posé ;
           - 'facteur'   : doubler le rayon multiplie le volume par 8, la
                           propriété que le cours annonce et que rien ne
                           faisait manipuler ;
           - 'creux'     : une coquille entre deux rayons, où il faut
                           SOUSTRAIRE deux volumes.

         Aucune figure : la bibliothèque n'a pas de helper de solide de
         révolution, et un dessin de boule n'apprend rien de plus que le mot
         « boule ». Plutôt aucune figure qu'une figure décorative (section 9). */
      generate() {
        const tache = pick(['boule', 'diametre', 'compose', 'demi',
                            'rayonInverse', 'facteur', 'creux']);
        const PI = 3.14;

        if (tache === 'boule') {
          const r = rand(2, 8);
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>ballon de basket</strong>', q: 'le volume d\'air qu\'il contient' },
            { o: 'Une <strong>boule de pétanque</strong> en acier', q: 'son volume de métal' },
            { o: 'Une <strong>boule de bowling</strong>', q: 'son volume' },
            { o: 'Une <strong>perle</strong> destinée à un collier', q: 'son volume de matière' }
          ]);
          return {
            statement: `${ctx.o} a un rayon de $${r}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `La formule de la boule est $V = \\dfrac{4}{3}\\pi r^3$.<br/><br/>Commence par cuber le rayon : $${r}^3 = ${r * r * r}$.`,
            solution: [
              `$V = \\dfrac{4}{3}\\pi r^3$ avec $r = ${r}$ cm.`,
              `$r^3 = ${r}^3 = ${r * r * r}$, donc $V = \\dfrac{4 \\times 3{,}14 \\times ${r * r * r}}{3}$.`,
              `$V \\approx ${fr(v)}$ cm³.`
            ]
          };
        }

        if (tache === 'diametre') {
          /* LE DIAMÈTRE, jamais tiré par l'ancienne banque. L'élève qui cube le
             diamètre au lieu du rayon se trompe d'un facteur 8 : la solution le
             nomme explicitement, parce que c'est le piège que tendent tous les
             énoncés de brevet. */
          const r = rand(2, 7), d = 2 * r;
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Une <strong>balle de tennis</strong>', q: 'son volume' },
            { o: 'Un <strong>ballon de handball</strong>', q: 'le volume d\'air qu\'il contient' },
            { o: 'Une <strong>bille</strong> de verre', q: 'son volume de verre' }
          ]);
          return {
            statement: `${ctx.o} a un <strong>diamètre</strong> de $${d}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `Attention : la formule $V = \\dfrac{4}{3}\\pi r^3$ utilise le <strong>rayon</strong>, et l'énoncé donne le diamètre.<br/><br/>Commence donc par calculer $r = ${d} \\div 2$.`,
            solution: [
              `L'énoncé donne le <strong>diamètre</strong>, mais la formule demande le <strong>rayon</strong> : $r = \\dfrac{${d}}{2} = ${r}$ cm.`,
              `$V = \\dfrac{4 \\times 3{,}14 \\times ${r}^3}{3} = \\dfrac{4 \\times 3{,}14 \\times ${r * r * r}}{3} \\approx ${fr(v)}$ cm³.`,
              `<strong>Le piège à éviter</strong> : cuber le diamètre au lieu du rayon multiplie le résultat par $2^3 = 8$. Un volume huit fois trop grand vient presque toujours de là.`
            ]
          };
        }

        if (tache === 'compose') {
          /* LE SOLIDE COMPOSÉ, c'est-à-dire la moitié du titre du chapitre, que
             l'ancienne banque n'abordait jamais. */
          const r = rand(2, 6), h = rand(6, 14);
          const vCyl = PI * r * r * h;
          const vDemi = 2 / 3 * PI * r * r * r;
          const v = parseFloat((vCyl + vDemi).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>silo à grain</strong>', d: 'un cylindre surmonté d\'une demi-sphère de même rayon' },
            { o: 'Un <strong>réservoir</strong>', d: 'un cylindre fermé en haut par une demi-sphère de même rayon' },
            { o: 'Une <strong>niche de jardin</strong>', d: 'un cylindre coiffé d\'une demi-sphère de même rayon' }
          ]);
          return {
            statement: `${ctx.o} a la forme d'${ctx.d}.<br/><br/>Le rayon vaut $${r}$ cm et la hauteur de la partie cylindrique $${h}$ cm.<br/><br/>Calcule le <strong>volume total</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1.5, unit: 'cm³',
            hint: `Un solide composé se calcule <strong>morceau par morceau</strong>, puis on additionne.<br/><br/>Cylindre : $\\pi r^2 h$. Demi-boule : la moitié de $\\dfrac{4}{3}\\pi r^3$, soit $\\dfrac{2}{3}\\pi r^3$.`,
            solution: [
              `On découpe le solide en deux morceaux dont on connaît chacun la formule, puis on additionne.`,
              `Cylindre : $V_1 = \\pi r^2 h = 3{,}14 \\times ${r * r} \\times ${h} \\approx ${fr(parseFloat(vCyl.toFixed(1)))}$ cm³.`,
              `Demi-boule : $V_2 = \\dfrac{2}{3}\\pi r^3 = \\dfrac{2 \\times 3{,}14 \\times ${r * r * r}}{3} \\approx ${fr(parseFloat(vDemi.toFixed(1)))}$ cm³.<br/><br/>Total : $V = ${fr(parseFloat(vCyl.toFixed(1)))} + ${fr(parseFloat(vDemi.toFixed(1)))} \\approx ${fr(v)}$ cm³.`
            ]
          };
        }

        if (tache === 'demi') {
          const r = rand(3, 9);
          const v = parseFloat((2 / 3 * PI * r * r * r).toFixed(1));
          const ctx = pick([
            { o: 'Un <strong>bol</strong> hémisphérique', q: 'le volume de soupe qu\'il peut contenir' },
            { o: 'Une <strong>coupole</strong> hémisphérique', q: 'le volume d\'air qu\'elle abrite' },
            { o: 'Un <strong>dôme</strong> de présentation hémisphérique', q: 'son volume intérieur' }
          ]);
          return {
            statement: `${ctx.o} a un rayon intérieur de $${r}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
            answer: v, tolerance: 1, unit: 'cm³',
            hint: `Une demi-boule, c'est la moitié d'une boule : calcule $\\dfrac{4}{3}\\pi r^3$, puis divise par $2$.<br/><br/>Cela revient à $\\dfrac{2}{3}\\pi r^3$.`,
            solution: [
              `Une demi-boule vaut la moitié de la boule de même rayon.`,
              `$V = \\dfrac{1}{2} \\times \\dfrac{4}{3}\\pi r^3 = \\dfrac{2}{3}\\pi r^3 = \\dfrac{2 \\times 3{,}14 \\times ${r * r * r}}{3}$.`,
              `$V \\approx ${fr(v)}$ cm³.<br/><br/>Contrôle : ce résultat doit être exactement la moitié du volume de la boule entière de rayon $${r}$ cm.`
            ]
          };
        }

        if (tache === 'rayonInverse') {
          /* LE CHEMIN RETOUR : du volume au rayon, par une racine cubique. On
             tire un rayon entier pour que la réponse reste ronde. */
          const r = rand(2, 6);
          const v = parseFloat((4 / 3 * PI * r * r * r).toFixed(1));
          return {
            statement: `Une boule a un volume de $${fr(v)}$ cm³.<br/><br/>Quel est son <strong>rayon</strong>, en centimètres ? (On prendra $\\pi \\approx 3{,}14$, et le rayon est un nombre entier.)`,
            answer: r, tolerance: 0.15, unit: 'cm',
            hint: `Pars de $V = \\dfrac{4}{3}\\pi r^3$ et isole $r^3$ : $r^3 = \\dfrac{3V}{4\\pi}$.<br/><br/>Il te restera à trouver le nombre dont le cube vaut ce résultat.`,
            solution: [
              `On remonte la formule : de $V = \\dfrac{4}{3}\\pi r^3$ on tire $r^3 = \\dfrac{3V}{4\\pi}$.`,
              `$r^3 = \\dfrac{3 \\times ${fr(v)}}{4 \\times 3{,}14} \\approx ${r * r * r}$.`,
              `Il reste à trouver le nombre dont le cube vaut $${r * r * r}$ : c'est $${r}$, car $${r} \\times ${r} \\times ${r} = ${r * r * r}$.<br/><br/>Le rayon vaut donc $${r}$ cm.`
            ]
          };
        }

        if (tache === 'facteur') {
          /* LA PROPRIÉTÉ QUE LE COURS ANNONCE et que rien ne faisait manipuler :
             le volume varie comme le CUBE du rayon. */
          const f = pick([2, 3, 4]);
          return {
            statement: `Le cours affirme qu'un volume dépend du <strong>cube</strong> du rayon.<br/><br/>` +
              `On multiplie le rayon d'une boule par $${f}$, sans rien changer d'autre.<br/><br/>` +
              `Par quel <strong>facteur</strong> son volume est-il multiplié ?`,
            answer: f * f * f, tolerance: 0.01, unit: '',
            hint: `Dans $V = \\dfrac{4}{3}\\pi r^3$, le rayon est élevé au <strong>cube</strong>.<br/><br/>Si $r$ devient $${f}r$, alors $r^3$ devient $(${f}r)^3 = ${f}^3 \\times r^3$.`,
            solution: [
              `Le rayon intervient à la puissance $3$ : c'est donc $${f}^3$, et non $${f}$, qui multiplie le volume.`,
              `$(${f}r)^3 = ${f}^3 \\times r^3 = ${f * f * f} \\, r^3$`,
              `Le volume est multiplié par $${f * f * f}$.<br/><br/>C'est pour cela qu'une petite variation de rayon change énormément un volume : doubler le rayon d'un ballon le rend huit fois plus volumineux, pas deux.`
            ]
          };
        }

        /* tache === 'creux' : une coquille entre deux rayons. Il faut
           SOUSTRAIRE deux volumes, et l'élève soustrait souvent les rayons
           avant de cuber — ce que la solution prend à revers. */
        const rInt = rand(2, 5), ep = pick([1, 2]);
        const rExt = rInt + ep;
        const vExt = 4 / 3 * PI * rExt * rExt * rExt;
        const vInt = 4 / 3 * PI * rInt * rInt * rInt;
        const v = parseFloat((vExt - vInt).toFixed(1));
        const ctx = pick([
          { o: 'Une <strong>balle creuse</strong> en plastique', q: 'le volume de plastique utilisé' },
          { o: 'Une <strong>coque</strong> sphérique en métal', q: 'le volume de métal utilisé' },
          { o: 'Un <strong>ballon</strong> à paroi épaisse', q: 'le volume de matière de la paroi' }
        ]);
        return {
          statement: `${ctx.o} a un rayon extérieur de $${rExt}$ cm et un rayon intérieur de $${rInt}$ cm.<br/><br/>Calcule <strong>${ctx.q}</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
          answer: v, tolerance: 1.5, unit: 'cm³',
          hint: `La matière occupe l'espace entre les deux sphères : calcule le volume de la grande boule, puis <strong>retire</strong> celui de la petite.<br/><br/>Attention : il faut cuber chaque rayon séparément, jamais soustraire les rayons d'abord.`,
          solution: [
            `La matière est ce qui reste quand on retire la boule intérieure de la boule extérieure : on calcule chaque volume, puis on soustrait.`,
            `Grande boule : $\\dfrac{4 \\times 3{,}14 \\times ${rExt * rExt * rExt}}{3} \\approx ${fr(parseFloat(vExt.toFixed(1)))}$ cm³. Petite boule : $\\dfrac{4 \\times 3{,}14 \\times ${rInt * rInt * rInt}}{3} \\approx ${fr(parseFloat(vInt.toFixed(1)))}$ cm³.`,
            `$V \\approx ${fr(parseFloat(vExt.toFixed(1)))} - ${fr(parseFloat(vInt.toFixed(1)))} = ${fr(v)}$ cm³.<br/><br/><strong>Le piège à éviter</strong> : soustraire les rayons puis cuber donnerait $(${rExt} - ${rInt})^3 = ${ep * ep * ep}$, un résultat sans aucun rapport. Chaque rayon se cube séparément.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une bougie est fabriquée en forme de cylindre surmonté d\'un cône. Le cylindre a rayon $2$ cm et hauteur $8$ cm. Le cône a même rayon et hauteur $3$ cm.',
      tasks: [
        'Calculer le volume du cylindre.',
        'Calculer le volume du cône.',
        'Calculer le volume total de la bougie.'
      ],
      solutions: [
        '$V_{\\text{cyl}} = 3{,}14 \\times 4 \\times 8 = 100{,}48$ cm³.',
        '$V_{\\text{cône}} = \\frac{1}{3} \\times 3{,}14 \\times 4 \\times 3 = 12{,}56$ cm³.',
        '$V_{\\text{total}} = 100{,}48 + 12{,}56 = 113{,}04$ cm³.'
      ],
      finalAnswer: 'La bougie a un volume de $113{,}04$ cm³.'
    },

    evaluation: {
      title: 'Évaluation — Volumes : sphère et solides composés',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le volume d\'une boule de rayon $5$ cm. On prendra $\\pi \\approx 3{,}14$. Arrondir au centième.',
          type: 'numeric',
          answer: 523.33,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{4}{3} \\times 3{,}14 \\times 5^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 125 = \\dfrac{1\\,570}{3} \\approx 523{,}33$ cm³.'
        },
        {
          statement: 'Une balle de tennis a un diamètre de $6{,}8$ cm. Quel est son volume ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 164.6,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: 'Rayon $r = \\dfrac{6{,}8}{2} = 3{,}4$ cm. $V = \\dfrac{4}{3} \\times 3{,}14 \\times 3{,}4^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 39{,}304 \\approx 164{,}6$ cm³. Attention à bien prendre le rayon et non le diamètre.'
        },
        {
          statement: 'On triple le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
          type: 'multiple-choice',
          options: ['$3$', '$9$', '$27$', '$6$'],
          answer: 2,
          points: 2,
          correction: '$V = \\dfrac{4}{3}\\pi r^3$. Avec $3r$ : $V\' = \\dfrac{4}{3}\\pi (3r)^3 = \\dfrac{4}{3}\\pi \\times 27r^3 = 27V$. Le volume est multiplié par $3^3 = 27$.'
        },
        {
          statement: 'Un solide est composé d\'un cylindre de rayon $3$ cm et de hauteur $10$ cm surmonté d\'une demi-sphère de même rayon. Quel est le volume total ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 339.1,
          tolerance: 2,
          unit: 'cm³',
          points: 2,
          correction: 'Cylindre : $V_c = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³. Demi-sphère : $V_s = \\dfrac{2}{3} \\times 3{,}14 \\times 27 = 56{,}52$ cm³. Total : $282{,}6 + 56{,}52 = 339{,}12 \\approx 339{,}1$ cm³.'
        },
        {
          statement: 'Un récipient sphérique de diamètre $20$ cm est rempli d\'eau à moitié. Quel volume d\'eau contient-il ? ($\\pi \\approx 3{,}14$)',
          type: 'multiple-choice',
          options: ['$4\\,186{,}67$ cm³', '$2\\,093{,}33$ cm³', '$1\\,046{,}67$ cm³', '$523{,}33$ cm³'],
          answer: 1,
          points: 2,
          correction: 'Rayon $r = 10$ cm. Volume total : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 = \\dfrac{4}{3} \\times 3\\,140 \\approx 4\\,186{,}67$ cm³. Moitié : $\\dfrac{4\\,186{,}67}{2} \\approx 2\\,093{,}33$ cm³.'
        }
      ]
    }
  }
);
