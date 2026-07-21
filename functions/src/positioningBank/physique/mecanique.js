module.exports = {
  id: 'mecanique',
  label: 'Mécanique',
  levels: {
    1: [
      {
        id: 'physique-mecanique-1-a',
        question: 'Un voyageur est assis dans un train qui roule tout droit à vitesse constante.<br/><br/>Par rapport aux rails, le voyageur est-il en mouvement ou au repos ?',
        options: [
          'En mouvement, car sa position par rapport aux rails change au cours du temps.',
          'Au repos, car il ne bouge pas de son siège.',
          'Au repos, car le train roule à vitesse constante.',
          'On ne peut pas savoir sans connaître la vitesse du train.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-1-b',
        question: 'Un cycliste parcourt $30\\text{ km}$ en $2$ heures, à vitesse constante.<br/><br/>Quelle est sa vitesse ?',
        options: ['$15\\text{ km/h}$', '$60\\text{ km/h}$', '$28\\text{ km/h}$', '$32\\text{ km/h}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-1-c',
        question: 'Quel terme désigne la ligne suivie par un objet en mouvement ?',
        options: ['La trajectoire', 'La vitesse', "L'accélération", 'Le référentiel'],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'physique-mecanique-2-a',
        question: 'Un piéton marche à une vitesse constante de $5\\text{ km/h}$.<br/><br/>Quelle distance parcourt-il en $3$ heures ?',
        options: ['$15\\text{ km}$', '$1{,}7\\text{ km}$', '$8\\text{ km}$', '$18\\text{ km}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-2-b',
        question: 'Un train roule à $80\\text{ km/h}$.<br/><br/>Combien de temps met-il pour parcourir $200\\text{ km}$ ?',
        options: ['$2{,}5\\text{ h}$', '$0{,}4\\text{ h}$', '$4\\text{ h}$', '$25\\text{ h}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-2-c',
        question: 'Une fourmi se déplace à $2\\text{ cm/s}$.<br/><br/>Quelle distance parcourt-elle en $10$ secondes ?',
        options: ['$20\\text{ cm}$', '$0{,}2\\text{ cm}$', '$12\\text{ cm}$', '$5\\text{ cm}$'],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'physique-mecanique-3-a',
        question: "Un astronaute a une masse de $80\\text{ kg}$ sur Terre.<br/><br/>Sur la Lune, où la gravité est environ six fois plus faible, que devient sa masse ?",
        options: [
          "Elle reste égale à $80\\text{ kg}$, car la masse ne dépend pas du lieu.",
          'Elle diminue proportionnellement à la gravité.',
          "Elle devient nulle en l'absence d'atmosphère.",
          'Elle se transforme en poids.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-3-b',
        question: 'Quel est le poids d\'un objet de masse $10\\text{ kg}$ sur Terre ?<br/><br/>(on prendra $g = 9{,}8\\text{ N/kg}$)',
        options: ['$98\\text{ N}$', '$10\\text{ N}$', '$980\\text{ N}$', '$19{,}8\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-3-c',
        question: 'Le poids d\'un objet est une force.<br/><br/>Quelle est son unité dans le Système International ?',
        options: ['Le newton (N)', 'Le kilogramme (kg)', 'Le gramme (g)', 'Le newton-mètre (N·m)'],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'physique-mecanique-4-a',
        question: "Un objet est soumis à des forces qui se compensent exactement (leur somme est nulle).<br/><br/>D'après le principe d'inertie, que peut-on dire de son mouvement ?",
        options: [
          "S'il était immobile, il reste immobile ; s'il était en mouvement, il continue tout droit à vitesse constante.",
          'Il s\'arrête progressivement, quelle que soit sa vitesse initiale.',
          'Il accélère de manière uniforme.',
          'Il change nécessairement de trajectoire.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-4-b',
        question: "Un livre posé sur une table est immobile.<br/><br/>Quelles sont les deux forces qui s'exercent sur lui et qui se compensent ?",
        options: [
          'Son poids et la réaction du support (la table).',
          "Son poids et la force musculaire de la personne qui l'a posé.",
          "La réaction du support et le frottement de l'air.",
          'Son poids et son inertie.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-4-c',
        question: "Une voiture roule en ligne droite à vitesse constante sur une route horizontale.<br/><br/>Que peut-on dire des forces qui s'exercent sur elle ?",
        options: [
          'Elles se compensent : leur résultante est nulle.',
          'La force du moteur est forcément plus grande que les frottements.',
          "Aucune force ne s'exerce sur la voiture.",
          "Le poids de la voiture est nul tant qu'elle roule."
        ],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'physique-mecanique-5-a',
        question: "Un système est soumis à des forces dont la résultante n'est pas nulle.<br/><br/>Que peut-il se passer pour son mouvement ?",
        options: [
          'Sa vitesse peut changer en valeur, en direction, ou les deux.',
          'Sa vitesse reste obligatoirement constante en valeur, seule sa direction peut changer.',
          'Rien ne change : seule une force isolée peut modifier un mouvement.',
          "Le système s'arrête immédiatement."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-5-b',
        question: "On lâche une balle sans vitesse initiale depuis un immeuble.<br/><br/>En négligeant les frottements de l'air, quelle est la seule force qui s'exerce sur la balle pendant la chute ?",
        options: [
          'Son poids, dirigé vers le bas.',
          'Son poids, dirigé vers le haut.',
          "La réaction de l'air, dirigée vers le haut.",
          "Son inertie, qui s'oppose à la chute."
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-5-c',
        question: "Un skieur descend une pente en ligne droite ; sa vitesse augmente de plus en plus.<br/><br/>Dans quel sens est orientée la résultante des forces qui s'exercent sur lui ?",
        options: [
          'Dans le même sens que son mouvement, vers le bas de la pente.',
          'Dans le sens opposé à son mouvement.',
          'Perpendiculairement à son mouvement.',
          'La résultante des forces est nulle.'
        ],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'physique-mecanique-6-a',
        question: 'Une force constante $\\vec{F}$ déplace son point d\'application d\'un vecteur $\\vec{AB}$, $\\theta$ étant l\'angle entre $\\vec{F}$ et $\\vec{AB}$.<br/><br/>Quelle est l\'expression du travail de cette force ?',
        options: [
          '$W = F \\times AB \\times \\cos\\theta$',
          '$W = F \\times AB \\times \\sin\\theta$',
          '$W = F + AB$',
          '$W = \\dfrac{F}{AB}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-6-b',
        question: 'Une force constante de $20\\text{ N}$, colinéaire au déplacement et de même sens que celui-ci, déplace un objet de $5\\text{ m}$ en ligne droite.<br/><br/>Quel est le travail de cette force ?',
        options: ['$100\\text{ J}$', '$4\\text{ J}$', '$25\\text{ J}$', '$100\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-6-c',
        question: "Un objet glisse sur un plan horizontal et subit une force de frottement opposée à son déplacement.<br/><br/>Le travail de cette force de frottement est-il moteur ou résistant ?",
        options: [
          "Résistant (travail négatif), car la force s'oppose au déplacement.",
          'Moteur (travail positif), car elle agit bien sur l\'objet.',
          'Nul, car le déplacement est horizontal.',
          'Moteur, car le frottement freine efficacement l\'objet.'
        ],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'physique-mecanique-7-a',
        question: 'Un système de masse $m = 2\\text{ kg}$ est soumis à une résultante des forces de valeur $F = 10\\text{ N}$.<br/><br/>D\'après la deuxième loi de Newton, quelle est la valeur de son accélération ?',
        options: ['$5\\text{ m/s}^2$', '$20\\text{ m/s}^2$', '$0{,}2\\text{ m/s}^2$', '$12\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-7-b',
        question: 'Un objet de masse $m = 500\\text{ g}$ est en chute libre : seul son poids s\'exerce sur lui ($g = 9{,}8\\text{ m/s}^2$).<br/><br/>D\'après la deuxième loi de Newton, quelle est la valeur de son accélération ?',
        options: ['$9{,}8\\text{ m/s}^2$', '$4{,}9\\text{ m/s}^2$', '$19{,}6\\text{ m/s}^2$', '$4{,}9\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-7-c',
        question: 'Un solide de masse $m = 4\\text{ kg}$, initialement au repos, est soumis à une résultante des forces constante de $8\\text{ N}$.<br/><br/>En supposant le mouvement rectiligne, quelle est sa vitesse après $3\\text{ s}$ ?',
        options: ['$6\\text{ m/s}$', '$2\\text{ m/s}$', '$24\\text{ m/s}$', '$0{,}67\\text{ m/s}$'],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'physique-mecanique-8-a',
        question: "Un solide est en équilibre statique sous l'action de plusieurs forces.<br/><br/>D'après le principe fondamental de la statique, que doit-on vérifier ?",
        options: [
          'La somme vectorielle des forces est nulle, et la somme des moments par rapport à tout point est nulle.',
          'La somme des forces est nulle, sans aucune condition sur les moments.',
          'La résultante des forces est égale au poids du solide.',
          'Chaque force appliquée doit être nulle individuellement.'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-8-b',
        question: 'Une force de $50\\text{ N}$ est appliquée perpendiculairement à un levier, à une distance de $0{,}4\\text{ m}$ du pivot.<br/><br/>Quelle est la valeur du moment de cette force par rapport au pivot ?',
        options: ['$20\\text{ N·m}$', '$125\\text{ N·m}$', '$50{,}4\\text{ N·m}$', '$20\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-8-c',
        question: 'Une barre rigide en équilibre pivote autour d\'un point O. Une force $F_1 = 30\\text{ N}$ est appliquée à $0{,}6\\text{ m}$ de O d\'un côté.<br/><br/>Quelle doit être la valeur d\'une force $F_2$ appliquée de l\'autre côté, à $0{,}9\\text{ m}$ de O, pour que la barre reste en équilibre ?',
        options: ['$20\\text{ N}$', '$45\\text{ N}$', '$27\\text{ N}$', '$16{,}2\\text{ N}$'],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'physique-mecanique-9-a',
        question: 'Un véhicule de masse $m = 1200\\text{ kg}$ roule puis freine : la force de freinage résultante vaut $F = 4800\\text{ N}$ (force horizontale, opposée au mouvement).<br/><br/>Quelle est la valeur de la décélération du véhicule ?',
        options: ['$4\\text{ m/s}^2$', '$0{,}25\\text{ m/s}^2$', '$40\\text{ m/s}^2$', '$4800\\text{ N}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-9-b',
        question: 'Un chariot de masse $m = 50\\text{ kg}$ passe d\'une vitesse de $2\\text{ m/s}$ à $6\\text{ m/s}$ sous l\'action d\'une force motrice, sur une distance de $10\\text{ m}$.<br/><br/>D\'après le théorème de l\'énergie cinétique, quel est le travail de la résultante des forces appliquées au chariot ?',
        options: ['$800\\text{ J}$', '$1600\\text{ J}$', '$400\\text{ J}$', '$900\\text{ J}$'],
        correctIndex: 0
      },
      {
        id: 'physique-mecanique-9-c',
        question: 'Un moteur exerce une force motrice constante de $200\\text{ N}$ sur un système se déplaçant à une vitesse constante de $3\\text{ m/s}$.<br/><br/>Quelle est la puissance développée par cette force ?',
        options: ['$600\\text{ W}$', '$66{,}7\\text{ W}$', '$203\\text{ W}$', '$600\\text{ N}$'],
        correctIndex: 0
      }
    ]
  }
};
