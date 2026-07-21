module.exports = {
  id: 'energie-thermique',
  label: 'Énergie - Thermique',
  levels: {
    1: [
      {
        id: 'physique-energie-thermique-1-a',
        question: "Parmi les sources d'énergie suivantes, laquelle est considérée comme renouvelable ?",
        options: ['Le rayonnement solaire', 'Le pétrole', 'Le charbon', 'Le gaz naturel'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-1-b',
        question: 'Le pétrole, le charbon et le gaz naturel sont regroupés sous le nom d\'« énergies fossiles ».<br/><br/>Pourquoi ces sources d\'énergie ne sont-elles pas renouvelables ?',
        options: [
          "Elles se sont formées en plusieurs millions d'années et sont consommées bien plus vite qu'elles ne se reconstituent.",
          'Elles se reconstituent intégralement chaque année.',
          'Elles ne peuvent pas être brûlées pour produire de l\'énergie.',
          "Elles proviennent uniquement de roches minérales, sans lien avec des êtres vivants anciens."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-1-c',
        question: "Quelle installation permet de produire de l'électricité grâce à l'énergie du vent ?",
        options: ['Une éolienne', 'Un panneau solaire', 'Un barrage hydraulique', 'Une centrale à charbon'],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'physique-energie-thermique-2-a',
        question: "Un objet en mouvement possède une forme d'énergie liée à sa vitesse.<br/><br/>Comment appelle-t-on cette forme d'énergie ?",
        options: ["L'énergie cinétique", "L'énergie potentielle", "L'énergie chimique", "L'énergie thermique"],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-2-b',
        question: 'Une pile électrique alimente une lampe de poche.<br/><br/>Quelle transformation d\'énergie a lieu dans la pile ?',
        options: [
          "De l'énergie chimique vers de l'énergie électrique",
          "De l'énergie électrique vers de l'énergie chimique",
          "De l'énergie thermique vers de l'énergie chimique",
          "De l'énergie cinétique vers de l'énergie électrique"
        ],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-2-c',
        question: "Un livre posé en hauteur sur une étagère possède une forme d'énergie liée à sa position dans le champ de pesanteur.<br/><br/>Comment appelle-t-on cette forme d'énergie ?",
        options: ["L'énergie potentielle de pesanteur", "L'énergie cinétique", "L'énergie électrique", "L'énergie thermique"],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'physique-energie-thermique-3-a',
        question: 'Un appareil électrique de puissance $2000\\text{ W}$ fonctionne pendant $3$ heures.<br/><br/>Quelle énergie a-t-il consommée, exprimée en kWh ?',
        options: ['$6\\text{ kWh}$', '$666\\text{ kWh}$', '$0{,}17\\text{ kWh}$', '$2000\\text{ kWh}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-3-b',
        question: 'Un radiateur consomme une énergie de $4\\text{ kWh}$ en $2$ heures de fonctionnement.<br/><br/>Quelle est sa puissance ?',
        options: ['$2\\text{ kW}$', '$8\\text{ kW}$', '$0{,}5\\text{ kW}$', '$6\\text{ kW}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-3-c',
        question: "Quelle relation relie l'énergie $E$ consommée par un appareil, sa puissance $P$ et sa durée $t$ de fonctionnement ?",
        options: ['$E = P \\times t$', '$E = \\dfrac{P}{t}$', '$P = E \\times t$', '$E = P + t$'],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'physique-energie-thermique-4-a',
        question: "Une ampoule à incandescence transforme l'énergie électrique reçue en lumière, mais aussi en une autre forme d'énergie non désirée, dissipée dans l'environnement.<br/><br/>Quelle est cette forme d'énergie « perdue » ?",
        options: ['De l\'énergie thermique (chaleur)', "De l'énergie chimique", "De l'énergie cinétique", "De l'énergie potentielle"],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-4-b',
        question: "Lors de toute transformation d'énergie dans un système isolé, que dit le principe de conservation de l'énergie ?",
        options: [
          "L'énergie totale se conserve : elle change de forme ou est transférée, sans jamais être créée ni détruite.",
          "L'énergie totale diminue toujours car une partie disparaît définitivement.",
          "L'énergie totale augmente à chaque transformation.",
          "Seule l'énergie cinétique se conserve, les autres formes disparaissent."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-4-c',
        question: "Un moteur électrique transforme de l'énergie électrique en énergie mécanique, mais une partie de l'énergie reçue est dissipée sous forme de chaleur à cause des frottements et de l'effet Joule.<br/><br/>Que peut-on dire de l'énergie mécanique utile fournie par ce moteur, par rapport à l'énergie électrique reçue ?",
        options: [
          "Elle est toujours inférieure à l'énergie électrique reçue.",
          "Elle est toujours égale à l'énergie électrique reçue.",
          "Elle est toujours supérieure à l'énergie électrique reçue.",
          "Elle ne dépend pas de l'énergie électrique reçue."
        ],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'physique-energie-thermique-5-a',
        question: 'Un objet de masse $m = 2\\text{ kg}$ se déplace à une vitesse $v = 3\\text{ m/s}$.<br/><br/>Quelle est son énergie cinétique ? (on rappelle $E_c = \\dfrac{1}{2}mv^2$)',
        options: ['$9\\text{ J}$', '$18\\text{ J}$', '$6\\text{ J}$', '$3\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-5-b',
        question: 'Un objet de masse $m = 5\\text{ kg}$ est situé à une hauteur $h = 4\\text{ m}$ par rapport au sol, pris comme référence.<br/><br/>Quelle est son énergie potentielle de pesanteur ? (on prendra $g = 9{,}8\\text{ N/kg}$, avec $E_{pp} = mgh$)',
        options: ['$196\\text{ J}$', '$20\\text{ J}$', '$39{,}2\\text{ J}$', '$12{,}25\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-5-c',
        question: "Un objet glisse sans frottement le long d'une piste. Son énergie mécanique vaut $500\\text{ J}$ tout au long du mouvement.<br/><br/>Que peut-on en conclure ?",
        options: [
          "En l'absence de frottements, l'énergie mécanique se conserve : la somme de l'énergie cinétique et de l'énergie potentielle reste constante.",
          "L'énergie cinétique de l'objet est nécessairement constante.",
          "L'énergie potentielle de l'objet est nécessairement nulle.",
          "L'objet n'échange aucune énergie avec l'extérieur, même s'il y a des frottements."
        ],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'physique-energie-thermique-6-a',
        question: 'Quels sont les trois modes de transfert thermique ?',
        options: [
          'La conduction, la convection et le rayonnement',
          "La conduction, l'évaporation et la fusion",
          'La convection, la dilatation et la condensation',
          'Le rayonnement, la vaporisation et la sublimation'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-6-b',
        question: "On chauffe une masse $m = 2\\text{ kg}$ d'eau, de capacité thermique massique $c = 4180\\text{ J/(kg·K)}$, dont la température passe de $20\\text{ °C}$ à $60\\text{ °C}$.<br/><br/>Quelle est l'énergie thermique $Q$ reçue par l'eau ? (on utilisera $Q = mc\\Delta T$)",
        options: ['$334\\,400\\text{ J}$', '$167\\,200\\text{ J}$', '$501\\,600\\text{ J}$', '$8\\,360\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-6-c',
        question: "Un objet chaud est mis en contact avec un objet froid. On note $Q$ l'énergie thermique échangée par l'objet chaud.<br/><br/>Quel est le signe de $Q$ pour l'objet chaud, selon la convention usuelle (reçu positif, cédé négatif) ?",
        options: [
          "Négatif, car l'objet chaud cède de l'énergie thermique.",
          "Positif, car l'objet chaud reçoit de l'énergie thermique.",
          'Nul, car aucun transfert ne peut avoir lieu entre deux objets de températures différentes.',
          'Le signe ne peut pas être déterminé sans connaître les masses des deux objets.'
        ],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'physique-energie-thermique-7-a',
        question: "Quelle est l'expression du premier principe de la thermodynamique pour un système fermé, où $\\Delta U$ est la variation d'énergie interne, $W$ le travail reçu et $Q$ le transfert thermique reçu ?",
        options: ['$\\Delta U = W + Q$', '$\\Delta U = W - Q$', '$\\Delta U = W \\times Q$', '$\\Delta U = \\dfrac{W}{Q}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-7-b',
        question: "Un système reçoit un travail $W = 150\\text{ J}$ et cède un transfert thermique de $40\\text{ J}$ vers l'extérieur.<br/><br/>Quelle est la variation de l'énergie interne du système ?",
        options: ['$110\\text{ J}$', '$190\\text{ J}$', '$-110\\text{ J}$', '$6\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-7-c',
        question: "Un système subit une transformation au cours de laquelle son énergie interne ne varie pas ($\\Delta U = 0$), alors qu'il reçoit un transfert thermique $Q = 300\\text{ J}$.<br/><br/>D'après le premier principe, quel est le travail $W$ reçu par le système ?",
        options: ['$-300\\text{ J}$', '$300\\text{ J}$', '$0\\text{ J}$', '$600\\text{ J}$'],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'physique-energie-thermique-8-a',
        question: "Une chaudière consomme une énergie de combustible de $12\\text{ kWh}$ et restitue une énergie thermique utile de $10\\text{ kWh}$ au circuit de chauffage, le reste étant perdu par les fumées et les parois.<br/><br/>Quel est le rendement de cette chaudière, défini par $\\eta = \\dfrac{E_{utile}}{E_{abs}}$ ?",
        options: ['$83\\%$', '$120\\%$', '$0{,}83$', '$2\\text{ kWh}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-8-b',
        question: "Dans un bilan énergétique appliqué à une installation, l'énergie qui n'est pas restituée sous forme utile est qualifiée de :",
        options: [
          'Énergie dissipée (ou perdue), par exemple sous forme de chaleur non exploitée.',
          'Énergie potentielle stockée pour un usage ultérieur.',
          "Énergie renouvelable produite par l'installation.",
          'Énergie utile supplémentaire.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-8-c',
        question: "Un moteur électrique reçoit une puissance électrique de $3\\text{ kW}$ et fournit une puissance mécanique utile de $2{,}4\\text{ kW}$, le reste étant dissipé par effet Joule et par frottements.<br/><br/>Quel est le rendement de ce moteur ?",
        options: ['$80\\%$', '$125\\%$', '$0{,}6\\text{ kW}$', '$20\\%$'],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'physique-energie-thermique-9-a',
        question: "Une pompe à chaleur, utilisée pour le chauffage, reçoit un travail électrique $W = 1{,}5\\text{ kWh}$ et restitue une énergie thermique utile $Q_{chaud} = 6\\text{ kWh}$ au local à chauffer.<br/><br/>Quel est le coefficient de performance (COP) de cette pompe à chaleur, défini par $COP = \\dfrac{Q_{chaud}}{W}$ ?",
        options: ['$4$', '$0{,}25$', '$7{,}5$', '$4{,}5$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-9-b',
        question: "Un moteur thermique reçoit $Q_{chaud} = 500\\text{ J}$ de la source chaude et cède $Q_{froid} = 350\\text{ J}$ à la source froide au cours d'un cycle.<br/><br/>Le rendement thermodynamique $\\eta$ étant défini comme le rapport du travail utile fourni sur l'énergie thermique reçue de la source chaude, quel est le rendement de ce moteur ?",
        options: ['$30\\%$', '$70\\%$', '$143\\%$', '$150\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-energie-thermique-9-c',
        question: "Un réfrigérateur (cycle frigorifique) prélève une énergie thermique $Q_{froid} = 300\\text{ J}$ à la source froide grâce à un travail électrique $W = 100\\text{ J}$ fourni par le compresseur.<br/><br/>Quel est le coefficient de performance de ce réfrigérateur, défini par $COP = \\dfrac{Q_{froid}}{W}$ ?",
        options: ['$3$', '$0{,}33$', '$4$', '$400\\text{ J}$'],
        correctIndex: 0
      }
    ]
  }
};
