module.exports = {
  id: 'electricite',
  label: 'Électricité',
  levels: {
    1: [
      {
        id: 'physique-electricite-1-a',
        question: 'Dans un circuit électrique en série, une pile alimente deux lampes identiques L1 et L2.<br/><br/>On dévisse (retire) la lampe L1. Que devient la lampe L2 ?',
        options: [
          "Elle s'éteint aussi, car le circuit est interrompu.",
          'Elle continue de briller normalement.',
          'Elle brille plus fort.',
          'Rien ne change dans le circuit.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-1-b',
        question: 'Dans un circuit électrique en dérivation, une pile alimente deux lampes identiques L1 et L2, chacune sur sa propre branche.<br/><br/>On dévisse (retire) la lampe L1. Que devient la lampe L2 ?',
        options: [
          'Elle continue de briller normalement.',
          "Elle s'éteint aussi.",
          'Elle clignote.',
          'La pile cesse de fonctionner.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-1-c',
        question: "Pour qu'une lampe branchée à une pile puisse s'allumer, le circuit électrique doit être :",
        options: [
          'fermé, sans aucune coupure.',
          'ouvert.',
          'en court-circuit.',
          'branché sans générateur.'
        ],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'physique-electricite-2-a',
        question: "On souhaite mesurer l'intensité du courant électrique qui traverse un dipôle.<br/><br/>Comment doit-on brancher l'ampèremètre ?",
        options: [
          'En série dans le circuit, dans la branche du dipôle.',
          'En dérivation aux bornes du dipôle.',
          'À la place du générateur.',
          'En dérivation aux bornes du générateur uniquement.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-2-b',
        question: "Dans un circuit en série comportant deux lampes identiques L1 et L2, l'ampèremètre indique une intensité de $0{,}3\\text{ A}$ à travers L1.<br/><br/>Quelle est l'intensité du courant qui traverse L2 ?",
        options: ['$0{,}3\\text{ A}$', '$0{,}6\\text{ A}$', '$0{,}15\\text{ A}$', '$0\\text{ A}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-2-c',
        question: "Dans un circuit en dérivation, deux lampes identiques sont branchées chacune directement aux bornes d'une pile de $4{,}5\\text{ V}$.<br/><br/>Quelle est la tension aux bornes de chaque lampe ?",
        options: ['$4{,}5\\text{ V}$', '$9\\text{ V}$', '$2{,}25\\text{ V}$', '$0\\text{ V}$'],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'physique-electricite-3-a',
        question: "Un conducteur ohmique de résistance $R = 100\\ \\Omega$ est traversé par un courant d'intensité $I = 0{,}2\\text{ A}$.<br/><br/>D'après la loi d'Ohm $U = R \\times I$, quelle est la tension à ses bornes ?",
        options: ['$20\\text{ V}$', '$500\\text{ V}$', '$0{,}002\\text{ V}$', '$100{,}2\\text{ V}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-3-b',
        question: "Aux bornes d'un conducteur ohmique, on mesure une tension $U = 12\\text{ V}$ pour une intensité $I = 0{,}5\\text{ A}$.<br/><br/>D'après la loi d'Ohm, quelle est la valeur de sa résistance $R$ ?",
        options: ['$24\\ \\Omega$', '$6\\ \\Omega$', '$12{,}5\\ \\Omega$', '$0{,}04\\ \\Omega$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-3-c',
        question: "Quelle est l'unité de la résistance électrique dans le Système International ?",
        options: ["L'ohm ($\\Omega$)", 'Le volt (V)', "L'ampère (A)", 'Le watt (W)'],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'physique-electricite-4-a',
        question: 'Deux résistances $R_1 = 20\\ \\Omega$ et $R_2 = 30\\ \\Omega$ sont associées en série.<br/><br/>Quelle est la résistance équivalente $R_{eq}$ de cette association ?',
        options: ['$50\\ \\Omega$', '$12\\ \\Omega$', '$10\\ \\Omega$', '$600\\ \\Omega$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-4-b',
        question: 'Les deux mêmes résistances $R_1 = 20\\ \\Omega$ et $R_2 = 30\\ \\Omega$ sont désormais associées en parallèle (en dérivation).<br/><br/>Quelle est la résistance équivalente $R_{eq}$ de cette association ?',
        options: ['$12\\ \\Omega$', '$50\\ \\Omega$', '$25\\ \\Omega$', '$10\\ \\Omega$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-4-c',
        question: "Un circuit en série comprend un générateur de $9\\text{ V}$ et deux résistances $R_1 = 100\\ \\Omega$ et $R_2 = 200\\ \\Omega$.<br/><br/>Quelle est l'intensité du courant dans ce circuit ?",
        options: ['$0{,}03\\text{ A}$', '$0{,}3\\text{ A}$', '$3\\text{ A}$', '$0{,}009\\text{ A}$'],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'physique-electricite-5-a',
        question: "Un appareil électrique fonctionne sous une tension $U = 230\\text{ V}$ et est traversé par un courant d'intensité $I = 2\\text{ A}$.<br/><br/>Quelle est sa puissance électrique, donnée par $P = U \\times I$ ?",
        options: ['$460\\text{ W}$', '$115\\text{ W}$', '$232\\text{ W}$', '$4{,}6\\text{ W}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-5-b',
        question: "Une lampe de puissance $P = 60\\text{ W}$ fonctionne pendant $2$ heures.<br/><br/>Quelle est l'énergie électrique consommée, donnée par $E = P \\times t$, exprimée en Wh ?",
        options: ['$120\\text{ Wh}$', '$30\\text{ Wh}$', '$62\\text{ Wh}$', '$7200\\text{ Wh}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-5-c',
        question: "Une résistance $R = 50\\ \\Omega$ est parcourue par un courant d'intensité $I = 2\\text{ A}$.<br/><br/>Quelle est la puissance dissipée par effet Joule, donnée par $P = R \\times I^2$ ?",
        options: ['$200\\text{ W}$', '$100\\text{ W}$', '$5000\\text{ W}$', '$0{,}04\\text{ W}$'],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'physique-electricite-6-a',
        question: 'Dans un circuit RC série, on définit la constante de temps $\\tau = R \\times C$.<br/><br/>Pour $R = 1\\text{ k}\\Omega$ et $C = 2\\ \\mu\\text{F}$, quelle est la valeur de $\\tau$ ?',
        options: ['$2\\text{ ms}$', '$2\\ \\mu\\text{s}$', '$2\\text{ s}$', '$0{,}5\\text{ ms}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-6-b',
        question: "Lors de la charge d'un condensateur à travers une résistance, on laisse le circuit évoluer pendant une durée $t = 5\\tau$.<br/><br/>Que peut-on dire de l'état du condensateur à cet instant ?",
        options: [
          'Il est quasiment complètement chargé (à plus de $99\\%$).',
          'Il est chargé à environ $50\\%$.',
          'Il est totalement déchargé.',
          'Il se comporte comme un court-circuit permanent.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-6-c',
        question: 'Un condensateur de capacité $C = 100\\ \\mu\\text{F}$ est chargé sous une tension $U = 5\\text{ V}$.<br/><br/>Quelle est la charge $Q = C \\times U$ stockée par ce condensateur ?',
        options: ['$5\\times10^{-4}\\text{ C}$', '$5\\times10^{-6}\\text{ C}$', '$5\\times10^{-2}\\text{ C}$', '$500\\text{ C}$'],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'physique-electricite-7-a',
        question: "Une tension alternative sinusoïdale a pour expression $u(t) = 325\\cos(\\omega t)$, en volts.<br/><br/>Quelle est sa valeur efficace $U_{eff} = \\dfrac{U_{max}}{\\sqrt{2}}$, arrondie à l'unité ?",
        options: ['$230\\text{ V}$', '$325\\text{ V}$', '$460\\text{ V}$', '$162{,}5\\text{ V}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-7-b',
        question: 'Le secteur domestique français délivre une tension alternative sinusoïdale.<br/><br/>Quelle est sa fréquence ?',
        options: ['$50\\text{ Hz}$', '$60\\text{ Hz}$', '$230\\text{ Hz}$', '$100\\text{ Hz}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-7-c',
        question: "On met sous tension un circuit RL série (résistance et bobine). Un régime transitoire précède l'établissement du régime permanent.<br/><br/>Que représente la constante de temps $\\tau = \\dfrac{L}{R}$ de ce circuit ?",
        options: [
          "La durée caractéristique d'établissement du courant dans la bobine.",
          'La valeur maximale du courant en régime permanent.',
          'La fréquence propre du circuit.',
          'La résistance équivalente du circuit.'
        ],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'physique-electricite-8-a',
        question: 'Un récepteur alimenté en régime alternatif sous une tension efficace $U = 230\\text{ V}$ est traversé par un courant efficace $I = 5\\text{ A}$, avec un facteur de puissance $\\cos\\varphi = 0{,}8$.<br/><br/>Quelle est la puissance active, donnée par $P = U \\times I \\times \\cos\\varphi$ ?',
        options: ['$920\\text{ W}$', '$1150\\text{ W}$', '$690\\text{ W}$', '$184\\text{ W}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-8-b',
        question: "Pour ce même récepteur ($U = 230\\text{ V}$, $I = 5\\text{ A}$, $\\cos\\varphi = 0{,}8$), on s'intéresse à la puissance apparente, donnée par $S = U \\times I$.<br/><br/>Quelle est la valeur de $S$ ?",
        options: ['$1150\\text{ VA}$', '$920\\text{ VA}$', '$690\\text{ VA}$', '$1150\\text{ W}$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-8-c',
        question: "Le facteur de puissance d'une installation électrique en régime alternatif est défini comme un rapport entre deux puissances.<br/><br/>Quel est ce rapport ?",
        options: [
          '$\\dfrac{P}{S}$ (puissance active sur puissance apparente)',
          '$\\dfrac{S}{P}$ (puissance apparente sur puissance active)',
          '$\\dfrac{Q}{S}$ (puissance réactive sur puissance apparente)',
          '$\\dfrac{P}{Q}$ (puissance active sur puissance réactive)'
        ],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'physique-electricite-9-a',
        question: "Un dipôle RL série comporte une résistance $R = 30\\ \\Omega$ et une réactance inductive $X_L = 40\\ \\Omega$, telles que $\\underline{Z} = R + jX_L$.<br/><br/>Quel est le module de l'impédance $|\\underline{Z}|$ de ce dipôle ?",
        options: ['$50\\ \\Omega$', '$70\\ \\Omega$', '$10\\ \\Omega$', '$2500\\ \\Omega$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-9-b',
        question: "Pour ce même dipôle RL ($R = 30\\ \\Omega$, $X_L = 40\\ \\Omega$), l'argument de l'impédance est donné par $\\varphi = \\arctan\\left(\\dfrac{X_L}{R}\\right)$.<br/><br/>Quelle est la valeur de $\\varphi$, arrondie à l'unité ?",
        options: ['$53°$', '$37°$', '$90°$', '$0°$'],
        correctIndex: 0
      },
      {
        id: 'physique-electricite-9-c',
        question: "Un circuit RLC série est alimenté à une pulsation $\\omega$ telle que la réactance inductive $X_L = L\\omega$ soit égale à la réactance capacitive $X_C = \\dfrac{1}{C\\omega}$ (résonance).<br/><br/>Dans cette situation, que vaut l'impédance complexe $\\underline{Z} = R + j(X_L - X_C)$ du circuit ?",
        options: [
          '$\\underline{Z} = R$ (impédance minimale, purement résistive)',
          '$\\underline{Z} = 0$',
          '$\\underline{Z} = 2R$',
          '$\\underline{Z} = R + j2X_L$'
        ],
        correctIndex: 0
      }
    ]
  }
};
