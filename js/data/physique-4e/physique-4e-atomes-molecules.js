/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-atomes-molecules.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-atomes-molecules',
    level: 1, subject: 'physique',
    icon: '⚛️',
    title: 'Les atomes et les molécules',
    subtitle: 'Atomes, symboles chimiques, molécules, formules chimiques, corps purs et mélanges',
    keywords: ['Atome', 'Molécule', 'Symbole chimique', 'Formule chimique', 'Corps pur', 'Mélange'],
    physics: 'L\'écriture des formules chimiques permet de lire l\'étiquette d\'un produit ménager, de comprendre la composition de l\'air que l\'on respire, ou d\'interpréter les informations sur une bouteille d\'eau minérale (minéraux dissous, gaz carbonique $\\text{CO}_2$ dans une eau gazeuse).',

    cours: {
      intro: 'Toute la matière qui nous entoure — l\'eau que tu bois, l\'air que tu respires, les objets qui t\'entourent — est constituée de particules extrêmement petites : les <strong>atomes</strong>. Un atome est si petit qu\'il est totalement invisible, même au meilleur microscope optique : il faudrait aligner environ un million d\'atomes pour atteindre l\'épaisseur d\'un cheveu.<br/><br/>Les atomes se lient entre eux pour former des <strong>molécules</strong> : un assemblage précis d\'un nombre bien défini d\'atomes. Chaque type d\'atome (appelé <strong>élément chimique</strong>) possède un <strong>symbole chimique</strong> universel, comme $\\text{H}$ pour l\'hydrogène, $\\text{O}$ pour l\'oxygène ou $\\text{C}$ pour le carbone — ce symbole est le même partout dans le monde, quelle que soit la langue parlée.<br/><br/>La <strong>formule chimique</strong> d\'une molécule, comme $\\text{H}_2\\text{O}$ pour l\'eau, indique à la fois quels atomes la composent et en quelle quantité : l\'<strong>indice</strong> placé en bas à droite d\'un symbole précise le nombre d\'atomes de cet élément dans la molécule (l\'absence d\'indice signifie qu\'il y en a exactement un).',
      definitions: [
        { term: 'Atome', def: 'Plus petite particule de matière que l\'on considère indivisible lors d\'une transformation chimique. Représenté par un <strong>symbole chimique</strong> universel : une majuscule, parfois suivie d\'une minuscule ($\\text{H}$, $\\text{O}$, $\\text{C}$, $\\text{N}$, $\\text{Fe}$…).' },
        { term: 'Molécule', def: 'Assemblage de plusieurs atomes liés entre eux dans des proportions précises et toujours identiques. Représentée par une <strong>formule chimique</strong>, comme $\\text{CO}_2$ ou $\\text{CH}_4$.' },
        { term: 'Corps pur simple', def: 'Substance constituée d\'un seul type de molécules, elles-mêmes formées d\'un seul type d\'atome (ex. $\\text{O}_2$, $\\text{N}_2$, le fer $\\text{Fe}$).' },
        { term: 'Corps pur composé', def: 'Substance constituée d\'un seul type de molécules, formées d\'au moins deux types d\'atomes différents (ex. $\\text{H}_2\\text{O}$, $\\text{CO}_2$).' },
        { term: 'Mélange', def: 'Association de plusieurs corps purs différents, dans des proportions qui peuvent varier (ex. l\'air, l\'eau salée, le lait).' }
      ],
      method: {
        title: 'Interpréter une formule chimique en 3 étapes',
        steps: [
          '<strong>Repérer chaque symbole chimique</strong> présent dans la formule : une lettre majuscule seule, ou suivie d\'une minuscule, identifie un élément (ex. dans $\\text{CH}_4$, on repère $\\text{C}$ et $\\text{H}$).<br/>Attention à ne pas couper un symbole à deux lettres : $\\text{Fe}$ (fer) est un seul symbole, pas « F » suivi de « e ».',
          '<strong>Lire l\'indice</strong> placé en bas à droite de chaque symbole : il indique le nombre d\'atomes de cet élément dans <strong>une seule molécule</strong>. L\'absence d\'indice signifie qu\'il y en a un seul.<br/>Exemple : dans $\\text{CH}_4$, l\'indice $4$ sur $\\text{H}$ signifie $4$ atomes d\'hydrogène ; l\'absence d\'indice sur $\\text{C}$ signifie $1$ atome de carbone.',
          '<strong>Distinguer</strong> un éventuel <strong>coefficient</strong> placé devant la formule (nombre de molécules, ex. $3\\,\\text{CO}_2$ = trois molécules) de l\'<strong>indice</strong> (nombre d\'atomes dans une molécule), puis conclure si la substance est un corps pur simple (un seul élément) ou composé (plusieurs éléments).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèles moléculaires',
        title: 'Quatre molécules courantes : compter les atomes à partir de la formule',
        description: 'Chaque sphère représente un atome, chaque trait une liaison. Le nombre de sphères de chaque élément correspond exactement à l\'indice de la formule chimique.',
        svg: `
          <svg viewBox="0 0 600 280" role="img" aria-labelledby="atomes-mol-title atomes-mol-desc">
            <title id="atomes-mol-title">Modeles eclates de quatre molecules courantes</title>
            <desc id="atomes-mol-desc">Quatre molecules sont representees par des spheres reliees par des traits : le dioxygene avec deux atomes d'oxygene identiques, l'eau avec un atome d'oxygene central et deux atomes d'hydrogene formant une forme coudee, le dioxyde de carbone avec un atome de carbone central aligne entre deux atomes d'oxygene formant une forme lineaire, et le methane avec un atome de carbone central entoure de quatre atomes d'hydrogene disposes en diagonale. Une ligne pointillee verticale separe le dioxygene, seul corps pur simple, des trois autres molecules qui sont des corps purs composes.</desc>

            <!-- separation corps simple / corps composes -->
            <line class="guide-line" x1="160" y1="90" x2="160" y2="205"></line>

            <!-- O2 : corps pur simple -->
            <line class="frame-line" x1="55" y1="140" x2="105" y2="140"></line>
            <circle class="plot-point-alt" cx="55" cy="140" r="15"></circle>
            <circle class="plot-point-alt" cx="105" cy="140" r="15"></circle>
            <text class="label" x="55" y="145" text-anchor="middle">O</text>
            <text class="label" x="105" y="145" text-anchor="middle">O</text>
            <text class="annotation-label" x="80" y="230" text-anchor="middle">O<tspan baseline-shift="sub" font-size="9px">2</tspan></text>
            <text class="label-soft" x="80" y="253" text-anchor="middle">Corps pur simple</text>

            <!-- H2O : coudee -->
            <line class="frame-line" x1="230" y1="120" x2="205" y2="160"></line>
            <line class="frame-line" x1="230" y1="120" x2="255" y2="160"></line>
            <circle class="plot-point" cx="230" cy="120" r="14"></circle>
            <circle class="plot-point-alt" cx="205" cy="160" r="9"></circle>
            <circle class="plot-point-alt" cx="255" cy="160" r="9"></circle>
            <text class="label" x="230" y="125" text-anchor="middle">O</text>
            <text class="label" x="205" y="164" text-anchor="middle">H</text>
            <text class="label" x="255" y="164" text-anchor="middle">H</text>
            <text class="annotation-label" x="230" y="230" text-anchor="middle">H<tspan baseline-shift="sub" font-size="9px">2</tspan>O</text>
            <text class="label-soft" x="230" y="253" text-anchor="middle">Corps pur composé</text>

            <!-- CO2 : lineaire -->
            <line class="frame-line" x1="335" y1="140" x2="370" y2="140"></line>
            <line class="frame-line" x1="370" y1="140" x2="405" y2="140"></line>
            <circle class="plot-point-alt" cx="335" cy="140" r="14"></circle>
            <circle class="plot-point" cx="370" cy="140" r="13"></circle>
            <circle class="plot-point-alt" cx="405" cy="140" r="14"></circle>
            <text class="label" x="335" y="145" text-anchor="middle">O</text>
            <text class="label" x="370" y="145" text-anchor="middle">C</text>
            <text class="label" x="405" y="145" text-anchor="middle">O</text>
            <text class="annotation-label" x="370" y="230" text-anchor="middle">CO<tspan baseline-shift="sub" font-size="9px">2</tspan></text>
            <text class="label-soft" x="370" y="253" text-anchor="middle">Corps pur composé</text>

            <!-- CH4 : central + 4 diagonales -->
            <line class="frame-line" x1="510" y1="140" x2="482" y2="112"></line>
            <line class="frame-line" x1="510" y1="140" x2="538" y2="112"></line>
            <line class="frame-line" x1="510" y1="140" x2="482" y2="168"></line>
            <line class="frame-line" x1="510" y1="140" x2="538" y2="168"></line>
            <circle class="plot-point" cx="510" cy="140" r="13"></circle>
            <circle class="plot-point-alt" cx="482" cy="112" r="9"></circle>
            <circle class="plot-point-alt" cx="538" cy="112" r="9"></circle>
            <circle class="plot-point-alt" cx="482" cy="168" r="9"></circle>
            <circle class="plot-point-alt" cx="538" cy="168" r="9"></circle>
            <text class="label" x="510" y="145" text-anchor="middle">C</text>
            <text class="label" x="482" y="116" text-anchor="middle">H</text>
            <text class="label" x="538" y="116" text-anchor="middle">H</text>
            <text class="label" x="482" y="172" text-anchor="middle">H</text>
            <text class="label" x="538" y="172" text-anchor="middle">H</text>
            <text class="annotation-label" x="510" y="230" text-anchor="middle">CH<tspan baseline-shift="sub" font-size="9px">4</tspan></text>
            <text class="label-soft" x="510" y="253" text-anchor="middle">Corps pur composé</text>
          </svg>
        `,
        notes: [
          'Chaque molécule est représentée par des atomes (sphères) reliés par des liaisons (traits) : le nombre de sphères de chaque type correspond exactement à l\'indice de la formule chimique.',
          'Le <strong>dioxygène</strong> $\\text{O}_2$ est un <strong>corps pur simple</strong> : ses molécules ne contiennent qu\'un seul type d\'atome. Les trois autres molécules sont des <strong>corps purs composés</strong> : elles contiennent au moins deux types d\'atomes différents.',
          'La forme représentée n\'est pas arbitraire : la molécule d\'eau est <strong>coudée</strong> (les trois atomes ne sont pas alignés), alors que la molécule de dioxyde de carbone est <strong>linéaire</strong> (les trois atomes sont alignés).'
        ],
        reading: 'Compte d\'abord le nombre de sphères pour chaque symbole présent, puis compare ce nombre à l\'indice écrit dans la formule chimique correspondante.',
        caption: 'Quatre molécules courantes représentées en modèle éclaté (atomes reliés par des liaisons) : $\\text{O}_2$, $\\text{H}_2\\text{O}$, $\\text{CO}_2$ et $\\text{CH}_4$, avec leur formule chimique et leur catégorie (corps pur simple ou composé).'
      },
      example: {
        statement: 'La molécule d\'ammoniac a pour formule chimique $\\text{NH}_3$.<br/><br/>Identifie les éléments chimiques présents, indique le nombre d\'atomes de chacun, puis précise si l\'ammoniac est un corps pur simple ou un corps pur composé.',
        steps: [
          'On repère les symboles présents dans la formule : $\\text{N}$ (azote) et $\\text{H}$ (hydrogène).',
          'On lit les indices : aucun indice écrit sur $\\text{N}$ → $1$ atome d\'azote ; indice $3$ sur $\\text{H}$ → $3$ atomes d\'hydrogène.',
          'Le nombre total d\'atomes dans une molécule d\'ammoniac est donc $1 + 3 = 4$ atomes.',
          'Comme la molécule contient <strong>deux éléments différents</strong> (azote et hydrogène), l\'ammoniac est un <strong>corps pur composé</strong>.'
        ],
        answer: '$1$ atome d\'azote et $3$ atomes d\'hydrogène, soit $4$ atomes au total : l\'ammoniac ($\\text{NH}_3$) est un corps pur composé.'
      },
      formulas: [
        'Indice (après un symbole) = nombre d\'atomes de cet élément dans une molécule',
        'Coefficient (devant la formule) = nombre de molécules, ex. $2\\,\\text{H}_2\\text{O}$',
        'Symbole chimique : toujours une majuscule initiale (ex. $\\text{C}$, $\\text{Fe}$, $\\text{Na}$)',
        'Corps pur simple : un seul élément chimique (ex. $\\text{O}_2$, $\\text{Fe}$)',
        'Corps pur composé : au moins deux éléments liés (ex. $\\text{H}_2\\text{O}$, $\\text{CO}_2$)'
      ],
      recap: [
        'Un <strong>atome</strong> est représenté par un symbole chimique universel ; une <strong>molécule</strong> est un assemblage précis de plusieurs atomes, représenté par une formule chimique.',
        'Dans une formule comme $\\text{CH}_4$, l\'<strong>indice</strong> donne le nombre d\'atomes de l\'élément qui le précède ; l\'absence d\'indice signifie <strong>un seul</strong> atome.',
        'Un <strong>coefficient</strong> placé devant la formule (ex. $3\\,\\text{CO}_2$) multiplie le nombre de <strong>molécules</strong>, jamais le nombre d\'atomes à l\'intérieur de chacune.',
        'On distingue un corps pur <strong>simple</strong> (un seul élément, ex. $\\text{O}_2$) d\'un corps pur <strong>composé</strong> (plusieurs éléments liés, ex. $\\text{H}_2\\text{O}$) et d\'un <strong>mélange</strong> (plusieurs corps purs associés en proportions variables).'
      ],
      piege: 'Une erreur fréquente est de confondre le <strong>nombre de molécules</strong> et le <strong>nombre d\'atomes</strong> : l\'écriture « $2\\,\\text{H}_2\\text{O}$ » désigne deux molécules d\'eau distinctes (soit $4$ atomes d\'hydrogène et $2$ atomes d\'oxygène au total), ce qui n\'a rien à voir avec une formule comme $\\text{H}_4\\text{O}_2$. Attention à toujours repérer où se trouve chaque nombre : un <strong>coefficient</strong> devant la formule multiplie le nombre de molécules, un <strong>indice</strong> collé à un symbole ne concerne que cet atome-là.'
    },

    quiz: [
      {
        q: 'Combien d\'atomes contient une molécule de méthane $\\text{CH}_4$ au total ?',
        options: [
          '4 atomes (seulement les atomes d\'hydrogène)',
          '5 atomes (1 atome de carbone + 4 atomes d\'hydrogène)',
          '1 atome (seul le carbone compte)',
          '8 atomes (4 + 4)'
        ],
        answer: 1,
        correction: 'L\'indice $4$ sur $\\text{H}$ donne $4$ atomes d\'hydrogène ; l\'absence d\'indice sur $\\text{C}$ donne $1$ atome de carbone. Au total : $1 + 4 = 5$ atomes.'
      },
      {
        q: 'Que représente l\'écriture $3\\,\\text{O}_2$ ?',
        options: [
          'Une seule molécule contenant 6 atomes d\'oxygène',
          'Trois atomes d\'oxygène isolés',
          'Trois molécules de dioxygène, soit 6 atomes d\'oxygène au total',
          'Un corps pur composé'
        ],
        answer: 2,
        correction: 'Le nombre $3$ placé <strong>devant</strong> la formule est un coefficient : il indique $3$ molécules de $\\text{O}_2$. Chaque molécule contenant $2$ atomes d\'oxygène (indice $2$), cela fait $3 \\times 2 = 6$ atomes d\'oxygène au total. Et comme $\\text{O}_2$ ne contient qu\'un seul élément, c\'est un corps pur simple, pas composé.'
      },
      {
        q: 'Laquelle de ces substances est un corps pur composé ?',
        options: [
          '$\\text{N}_2$ (diazote)',
          '$\\text{Fe}$ (fer)',
          '$\\text{CO}_2$ (dioxyde de carbone)',
          '$\\text{O}_2$ (dioxygène)'
        ],
        answer: 2,
        correction: '$\\text{CO}_2$ contient deux éléments différents (carbone et oxygène) liés dans une même molécule : c\'est un corps pur composé. $\\text{N}_2$, $\\text{Fe}$ et $\\text{O}_2$ ne contiennent chacun qu\'un seul élément chimique : ce sont des corps purs simples.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var molecules = [
          { katex: '\\text{H}_2\\text{O}', nom: 'l\'eau', atomes: [{ sym: 'H', nom: 'hydrogène', prep: 'd\'', n: 2 }, { sym: 'O', nom: 'oxygène', prep: 'd\'', n: 1 }] },
          { katex: '\\text{CO}_2', nom: 'le dioxyde de carbone', atomes: [{ sym: 'C', nom: 'carbone', prep: 'de ', n: 1 }, { sym: 'O', nom: 'oxygène', prep: 'd\'', n: 2 }] },
          { katex: '\\text{CH}_4', nom: 'le méthane', atomes: [{ sym: 'C', nom: 'carbone', prep: 'de ', n: 1 }, { sym: 'H', nom: 'hydrogène', prep: 'd\'', n: 4 }] },
          { katex: '\\text{NH}_3', nom: 'l\'ammoniac', atomes: [{ sym: 'N', nom: 'azote', prep: 'd\'', n: 1 }, { sym: 'H', nom: 'hydrogène', prep: 'd\'', n: 3 }] },
          { katex: '\\text{C}_2\\text{H}_6', nom: 'l\'éthane', atomes: [{ sym: 'C', nom: 'carbone', prep: 'de ', n: 2 }, { sym: 'H', nom: 'hydrogène', prep: 'd\'', n: 6 }] }
        ];
        var mol = pick(molecules);
        var n = rand(2, 9);
        var mode = pick(['element', 'total']);

        if (mode === 'element') {
          var atome = pick(mol.atomes);
          var total = n * atome.n;
          return {
            statement: 'On dispose de $' + n + '\\,' + mol.katex + '$ (soit ' + n + ' molécules de ' + mol.nom + ').<br/><br/>Combien d\'atomes ' + atome.prep + atome.nom + ' (' + atome.sym + ') ces molécules contiennent-elles au total ?',
            answer: total,
            tolerance: 0,
            unit: '',
            hint: 'Chaque molécule de ' + mol.nom + ' contient ' + atome.n + ' atome' + (atome.n > 1 ? 's' : '') + ' ' + atome.prep + atome.nom + '. Multiplie ce nombre par le nombre de molécules.',
            solution: [
              'Une seule molécule de ' + mol.nom + ' ($' + mol.katex + '$) contient ' + atome.n + ' atome' + (atome.n > 1 ? 's' : '') + ' ' + atome.prep + atome.nom + '.',
              'On multiplie par le nombre de molécules : $' + n + ' \\times ' + atome.n + '$.',
              'Résultat : ' + total + ' atomes ' + atome.prep + atome.nom + ' au total.'
            ]
          };
        } else {
          var sommePerMolecule = mol.atomes.reduce(function (s, a) { return s + a.n; }, 0);
          var grandTotal = n * sommePerMolecule;
          return {
            statement: 'On dispose de $' + n + '\\,' + mol.katex + '$ (soit ' + n + ' molécules de ' + mol.nom + ').<br/><br/>Combien d\'atomes contiennent-elles au total, tous éléments confondus ?',
            answer: grandTotal,
            tolerance: 0,
            unit: '',
            hint: 'Compte d\'abord le nombre total d\'atomes dans UNE SEULE molécule de ' + mol.nom + ' (additionne tous les indices), puis multiplie par le nombre de molécules.',
            solution: [
              'Dans une molécule de ' + mol.nom + ' ($' + mol.katex + '$), le nombre total d\'atomes est ' + mol.atomes.map(function (a) { return a.n + ' (' + a.sym + ')'; }).join(' + ') + ' $= ' + sommePerMolecule + '$ atomes.',
              'On multiplie par le nombre de molécules : $' + n + ' \\times ' + sommePerMolecule + '$.',
              'Résultat : ' + grandTotal + ' atomes au total.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un professeur présente trois flacons à ses élèves. Le premier contient du diazote pur $\\text{N}_2$, le deuxième de l\'eau pure $\\text{H}_2\\text{O}$, et le troisième de l\'air (mélange composé principalement de $\\text{N}_2$ et de $\\text{O}_2$, avec un peu de $\\text{CO}_2$ et d\'autres gaz).',
      tasks: [
        'Pour chacun des trois flacons, préciser s\'il s\'agit d\'un corps pur simple, d\'un corps pur composé, ou d\'un mélange.',
        'Dans une molécule d\'eau $\\text{H}_2\\text{O}$, combien d\'atomes d\'hydrogène et combien d\'atomes d\'oxygène compte-t-on ? Combien d\'atomes cela fait-il en tout ?',
        'On considère $5$ molécules de diazote, notées $5\\,\\text{N}_2$. Combien d\'atomes d\'azote cela représente-t-il au total ?'
      ],
      solutions: [
        'Le diazote $\\text{N}_2$ ne contient qu\'un seul élément chimique (l\'azote) : c\'est un <strong>corps pur simple</strong>. L\'eau $\\text{H}_2\\text{O}$ contient deux éléments chimiques différents (hydrogène et oxygène) liés dans une seule sorte de molécule : c\'est un <strong>corps pur composé</strong>. L\'air contient plusieurs substances différentes ($\\text{N}_2$, $\\text{O}_2$, $\\text{CO}_2$…) mélangées en proportions variables : c\'est un <strong>mélange</strong>.',
        'La formule $\\text{H}_2\\text{O}$ indique $2$ atomes d\'hydrogène (indice $2$ sur $\\text{H}$) et $1$ atome d\'oxygène (pas d\'indice écrit sur $\\text{O}$, donc $1$). Cela fait $2 + 1 = 3$ atomes au total dans une molécule d\'eau.',
        'Chaque molécule de diazote $\\text{N}_2$ contient $2$ atomes d\'azote. Avec $5$ molécules, cela représente $5 \\times 2 = 10$ atomes d\'azote au total.'
      ],
      finalAnswer: 'Le diazote est un corps pur simple, l\'eau un corps pur composé, l\'air un mélange. Une molécule d\'eau compte $3$ atomes ($2$ d\'hydrogène et $1$ d\'oxygène), et $5$ molécules de diazote représentent $10$ atomes d\'azote. Bien distinguer l\'<strong>indice</strong> (dans une molécule) du <strong>coefficient</strong> (nombre de molécules) permet de répondre à ce type de question sans erreur.'
    },

    evaluation: {
      title: 'Évaluation — Les atomes et les molécules',
      duration: '20 min',
      questions: [
        {
          statement: 'Combien d\'atomes d\'oxygène contient une seule molécule de dioxyde de carbone $\\text{CO}_2$ ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'indice $2$ après $\\text{O}$ indique $2$ atomes d\'oxygène dans chaque molécule de $\\text{CO}_2$.'
        },
        {
          statement: 'Le symbole chimique du fer est :',
          type: 'multiple-choice',
          options: ['F', 'Fe', 'FE', 'fer'],
          answer: 1,
          points: 1,
          correction: 'Le symbole du fer est $\\text{Fe}$ : une majuscule suivie d\'une minuscule. « F » seul est le symbole d\'un élément différent, le fluor.'
        },
        {
          statement: 'On considère $4$ molécules de méthane, notées $4\\,\\text{CH}_4$. Combien d\'atomes d\'hydrogène cela représente-t-il au total ?',
          type: 'numeric',
          answer: 16,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Chaque molécule de $\\text{CH}_4$ contient $4$ atomes d\'hydrogène. Avec $4$ molécules : $4 \\times 4 = 16$ atomes d\'hydrogène.'
        },
        {
          statement: 'Laquelle de ces substances est un mélange (et non un corps pur) ?',
          type: 'multiple-choice',
          options: [
            'Le dioxygène $\\text{O}_2$ pur',
            'L\'eau distillée $\\text{H}_2\\text{O}$ pure',
            'L\'eau salée (eau + sel dissous)',
            'Le diazote $\\text{N}_2$ pur'
          ],
          answer: 2,
          points: 2,
          correction: 'L\'eau salée contient deux substances différentes (l\'eau et le sel) en proportions qui peuvent varier : c\'est un mélange. Les trois autres propositions ne contiennent qu\'une seule substance chacune : ce sont des corps purs.'
        },
        {
          statement: 'Une molécule de propane a pour formule $\\text{C}_3\\text{H}_8$. Combien d\'atomes contient-elle au total, tous éléments confondus ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$3$ atomes de carbone (indice $3$) et $8$ atomes d\'hydrogène (indice $8$) : au total $3 + 8 = 11$ atomes.'
        }
      ]
    }
  });
