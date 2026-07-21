module.exports = {
  id: 'matiere-chimie',
  label: 'Matière - Chimie',
  levels: {
    1: [
      {
        id: 'physique-matiere-chimie-1-a',
        question: "En chimie, on note souvent l'état solide par (s), l'état liquide par (l) et l'état gazeux par (g).<br/><br/>Quels sont les trois états physiques principaux de la matière ?",
        options: [
          'Solide, liquide et gazeux',
          'Solide, liquide et plasma',
          'Atomique, moléculaire et ionique',
          'Naturel, artificiel et synthétique'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-1-b',
        question: "On observe un glaçon qui fond dans un verre.<br/><br/>Comment appelle-t-on le passage de l'état solide à l'état liquide ?",
        options: ['La fusion', 'La solidification', 'La vaporisation', 'La sublimation'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-1-c',
        question: 'Parmi les propriétés suivantes, laquelle caractérise un gaz enfermé dans un récipient ?',
        options: [
          'Il occupe tout le volume disponible et est compressible.',
          'Il a une forme propre et un volume propre, comme un solide.',
          'Il est incompressible, comme un liquide.',
          'Son volume ne dépend jamais du récipient qui le contient.'
        ],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'physique-matiere-chimie-2-a',
        question: "Qu'appelle-t-on un « corps pur » en chimie ?",
        options: [
          "Une substance constituée d'une seule espèce chimique.",
          "Une substance constituée de plusieurs espèces chimiques mélangées.",
          "Un mélange homogène de plusieurs liquides.",
          "N'importe quel liquide transparent."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-2-b',
        question: "On verse un peu d'huile dans de l'eau, sans agiter.<br/><br/>Après un instant, on distingue clairement deux couches superposées.<br/><br/>Quel type de mélange obtient-on ?",
        options: ['Un mélange hétérogène', 'Un mélange homogène', 'Un corps pur', 'Une solution saturée'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-2-c',
        question: "On souhaite séparer du sable (insoluble) mélangé à de l'eau, à l'aide d'un papier filtre.<br/><br/>Quelle technique de séparation utilise-t-on ?",
        options: ['La filtration', 'La distillation', 'La décantation seule', 'La centrifugation'],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'physique-matiere-chimie-3-a',
        question: 'Parmi les transformations suivantes, laquelle est une transformation chimique, c\'est-à-dire fait apparaître de nouvelles substances ?',
        options: [
          'La combustion du bois, qui forme des cendres et des gaz.',
          'La fusion de la glace en eau liquide.',
          'La dissolution du sucre dans de l\'eau.',
          "L'évaporation de l'eau d'une flaque."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-3-b',
        question: "Un gaz incolore trouble l'eau de chaux dans laquelle on le fait barboter.<br/><br/>Quel est ce gaz ?",
        options: ['Le dioxyde de carbone ($CO_2$)', 'Le dioxygène ($O_2$)', 'Le dihydrogène ($H_2$)', "Le diazote ($N_2$)"],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-3-c',
        question: "On approche une bûchette de bois incandescente (qui ne brûle plus mais rougeoie) de l'ouverture d'un tube contenant un gaz. La bûchette se rallume immédiatement.<br/><br/>Quel est ce gaz ?",
        options: ['Le dioxygène ($O_2$)', 'Le dioxyde de carbone ($CO_2$)', 'Le dihydrogène ($H_2$)', "Le diazote ($N_2$)"],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'physique-matiere-chimie-4-a',
        question: "La combustion complète du méthane dans le dioxygène produit du dioxyde de carbone et de l'eau (sous forme de vapeur).<br/><br/>Quelle équation bilan est correctement équilibrée ?",
        options: [
          '$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$',
          '$CH_4(g) + O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$',
          '$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + H_2O(g)$',
          '$CH_4(g) + 2O_2(g) \\rightarrow 2CO_2(g) + 2H_2O(g)$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-4-b',
        question: 'La synthèse de l\'eau à partir de dihydrogène et de dioxygène est une réaction chimique classique.<br/><br/>Quelle équation bilan est correctement équilibrée ?',
        options: [
          '$2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$',
          '$H_2(g) + O_2(g) \\rightarrow H_2O(l)$',
          '$2H_2(g) + O_2(g) \\rightarrow 2H_2O_2(l)$',
          '$H_2(g) + 2O_2(g) \\rightarrow 2H_2O(l)$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-4-c',
        question: "Lors d'une réaction chimique se déroulant dans un système fermé, que dit la loi de conservation de la masse (loi de Lavoisier) à propos de la masse totale des réactifs et des produits ?",
        options: [
          'Elle reste égale : « rien ne se perd, rien ne se crée, tout se transforme ».',
          'La masse totale augmente toujours au cours de la réaction.',
          'La masse totale diminue toujours au cours de la réaction.',
          "Elle ne peut être comparée qu'en connaissant la température de la réaction."
        ],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'physique-matiere-chimie-5-a',
        question: "Le noyau d'un atome de carbone 12 se note ${}^{12}_{6}\\text{C}$.<br/><br/>Combien de protons ce noyau contient-il ?",
        options: ['6 protons', '12 protons', '18 protons', '0 proton'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-5-b',
        question: "La masse molaire de l'eau est $M(H_2O) = 18\\text{ g/mol}$.<br/><br/>Quelle quantité de matière (en mol) correspond à une masse $m = 36\\text{ g}$ d'eau, sachant que $n = \\dfrac{m}{M}$ ?",
        options: ['$2\\text{ mol}$', '$0{,}5\\text{ mol}$', '$648\\text{ mol}$', '$18\\text{ mol}$'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-5-c',
        question: 'La constante d\'Avogadro vaut $N_A \\approx 6{,}02\\times10^{23}\\text{ mol}^{-1}$.<br/><br/>Que représente concrètement cette constante ?',
        options: [
          "Le nombre d'entités (atomes, molécules, ions...) contenues dans une mole de matière.",
          "La masse, en grammes, d'une mole de n'importe quelle substance.",
          "Le volume occupé par une mole de gaz dans les conditions normales.",
          "Le nombre de moles contenues dans un gramme de matière."
        ],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'physique-matiere-chimie-6-a',
        question: "On dissout une quantité de matière $n = 0{,}4\\text{ mol}$ de soluté dans une solution de volume $V = 200\\text{ mL}$.<br/><br/>Quelle est la concentration molaire $c = \\dfrac{n}{V}$ de cette solution, exprimée en mol/L ?",
        options: ['$2\\text{ mol/L}$', '$0{,}002\\text{ mol/L}$', '$0{,}08\\text{ mol/L}$', '$0{,}5\\text{ mol/L}$'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-6-b',
        question: "On dilue $V_1 = 20\\text{ mL}$ d'une solution mère de concentration $C_1 = 0{,}5\\text{ mol/L}$ jusqu'à obtenir une solution fille de volume $V_2 = 100\\text{ mL}$.<br/><br/>Quelle est la concentration $C_2$ de la solution fille, sachant que $C_1 \\times V_1 = C_2 \\times V_2$ ?",
        options: ['$0{,}1\\text{ mol/L}$', '$2{,}5\\text{ mol/L}$', '$0{,}5\\text{ mol/L}$', '$5\\text{ mol/L}$'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-6-c',
        question: "Lors d'un dosage (titrage) par ajout progressif d'un réactif titrant, le point d'équivalence est atteint.<br/><br/>Que signifie ce point d'équivalence ?",
        options: [
          "Les réactifs ont été mélangés exactement dans les proportions stœchiométriques de l'équation de la réaction support du dosage.",
          "Le pH de la solution vaut exactement 7.",
          "La solution devient totalement incolore.",
          "La totalité du volume de la burette a été versée."
        ],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'physique-matiere-chimie-7-a',
        question: 'Une solution aqueuse a un pH égal à $3$.<br/><br/>De quel type de solution s\'agit-il ?',
        options: [
          'Une solution acide (pH < 7).',
          'Une solution basique (pH > 7).',
          'Une solution neutre (pH = 7).',
          'On ne peut pas savoir sans connaître le volume de la solution.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-7-b',
        question: 'Une solution possède une concentration en ions oxonium $[H_3O^+] = 1\\times10^{-5}\\text{ mol/L}$.<br/><br/>Quel est le pH de cette solution, sachant que $pH = -\\log[H_3O^+]$ ?',
        options: ['$pH = 5$', '$pH = -5$', '$pH = 1\\times10^{-5}$', '$pH = 9$'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-7-c',
        question: "On dilue progressivement une solution acide de pH = 3 en ajoutant de l'eau distillée.<br/><br/>Que devient son pH au fur et à mesure de la dilution ?",
        options: [
          'Il augmente, en se rapprochant de 7.',
          'Il diminue, en s\'éloignant de 7.',
          'Il reste rigoureusement constant.',
          'Il devient négatif.'
        ],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'physique-matiere-chimie-8-a',
        question: "Une eau dite « dure » contient une forte concentration d'ions calcium $Ca^{2+}(aq)$ et magnésium $Mg^{2+}(aq)$. Ces ions peuvent réagir avec des ions carbonate selon $Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(s)$, formant un dépôt solide dans les canalisations et les chaudières.<br/><br/>Comment appelle-t-on ce phénomène ?",
        options: ["L'entartrage (formation de tartre)", 'La corrosion', 'La carbonatation du béton', "L'électrolyse"],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-8-b',
        question: "Lors de la combustion incomplète d'un combustible fossile (manque de dioxygène), un gaz toxique, incolore et inodore peut se former, particulièrement dangereux dans une installation de chauffage mal ventilée.<br/><br/>Quel est ce gaz ?",
        options: [
          'Le monoxyde de carbone ($CO$)',
          'Le dioxyde de carbone ($CO_2$)',
          'Le dioxyde de soufre ($SO_2$)',
          'Le méthane ($CH_4$)'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-8-c',
        question: "Pour protéger une canalisation métallique contre la corrosion, on installe parfois une « anode sacrificielle », en un métal plus facilement oxydable que celui à protéger (par exemple le zinc).<br/><br/>Quel est le principe de cette protection ?",
        options: [
          "Le métal de l'anode s'oxyde préférentiellement (« se sacrifie »), ce qui évite l'oxydation du métal à protéger.",
          "L'anode neutralise chimiquement le pH de l'eau autour de la canalisation.",
          "L'anode forme un revêtement isolant qui empêche tout contact entre l'eau et le métal.",
          "L'anode abaisse la température de l'eau pour ralentir toute réaction chimique."
        ],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'physique-matiere-chimie-9-a',
        question: "Pour la combustion complète d'une mole de méthane, selon $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$, il faut $2\\text{ mol}$ de dioxygène.<br/><br/>En assimilant l'air à un mélange contenant environ $20\\%$ de dioxygène en volume, quelle quantité de matière d'air (en mol) est théoriquement nécessaire pour brûler complètement $1\\text{ mol}$ de méthane ?",
        options: ['$10\\text{ mol}$', '$2\\text{ mol}$', '$0{,}4\\text{ mol}$', '$40\\text{ mol}$'],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-9-b',
        question: "La corrosion du fer en milieu aqueux aéré et neutre combine deux demi-équations électroniques : l'oxydation du fer, $Fe(s) \\rightarrow Fe^{2+}(aq) + 2e^-$, et la réduction du dioxygène dissous, qui produit des ions hydroxyde.<br/><br/>Laquelle des demi-équations suivantes correspond à cette réduction du dioxygène, correctement équilibrée (matière et charge) ?",
        options: [
          '$O_2(g) + 2H_2O(l) + 4e^- \\rightarrow 4OH^-(aq)$',
          '$O_2(g) + 4e^- \\rightarrow 2O^{2-}(aq)$',
          '$O_2(g) + 2H_2O(l) + 2e^- \\rightarrow 4OH^-(aq)$',
          '$O_2(g) + 4H^+(aq) + 4e^- \\rightarrow 2H_2O(l)$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-matiere-chimie-9-c',
        question: "La dureté totale (TH) d'une eau est dosée par complexométrie à l'EDTA. On prélève un volume $V = 100\\text{ mL}$ d'eau à analyser, et l'équivalence est atteinte pour un volume $V_{EDTA} = 8\\text{ mL}$ d'une solution d'EDTA de concentration $C = 0{,}01\\text{ mol/L}$.<br/><br/>Sachant qu'à l'équivalence $n(Ca^{2+} + Mg^{2+}) = n(EDTA) = C \\times V_{EDTA}$, quelle est la concentration en ions $(Ca^{2+} + Mg^{2+})$ de l'eau analysée ?",
        options: [
          '$8\\times10^{-4}\\text{ mol/L}$',
          '$8\\times10^{-5}\\text{ mol/L}$',
          '$0{,}125\\text{ mol/L}$',
          '$0{,}01\\text{ mol/L}$'
        ],
        correctIndex: 0
      }
    ]
  }
};
