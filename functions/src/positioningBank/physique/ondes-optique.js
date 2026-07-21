module.exports = {
  id: 'ondes-optique',
  label: 'Ondes - Optique',
  levels: {
    1: [
      {
        id: 'physique-ondes-optique-1-a',
        question: "Le Soleil est visible car il émet lui-même de la lumière.<br/><br/>Comment appelle-t-on ce type de source de lumière ?",
        options: [
          'Une source primaire',
          'Une source secondaire',
          'Un objet opaque',
          'Un objet transparent'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-1-b',
        question: "Un objet opaque est éclairé par une lampe. Une zone sombre apparaît derrière l'objet, sur un écran placé plus loin.<br/><br/>Comment appelle-t-on cette zone sombre projetée sur l'écran ?",
        options: [
          "L'ombre portée",
          "L'ombre propre",
          'La pénombre',
          'Le halo'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-1-c',
        question: "Pourquoi ne peut-on voir aucun objet dans une pièce totalement obscure, sans aucune source de lumière ?",
        options: [
          "Parce qu'aucune lumière ne peut se réfléchir sur l'objet jusqu'à l'œil",
          "Parce que l'objet cesse d'exister sans lumière",
          "Parce que l'œil produit sa propre lumière, insuffisante dans le noir",
          "Parce que l'air absorbe toute la lumière ambiante"
        ],
        correctIndex: 0
      }
    ],
    2: [
      {
        id: 'physique-ondes-optique-2-a',
        question: "Quel est l'ordre de grandeur de la vitesse de la lumière dans le vide ?",
        options: [
          '$300\\,000\\text{ km/s}$',
          '$300\\text{ km/s}$',
          '$3\\,000\\text{ km/s}$',
          '$300\\,000\\text{ km/h}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-2-b',
        question: "Dans un milieu transparent et homogène, comment se propage la lumière ?",
        options: [
          'En ligne droite',
          'En suivant une courbe régulière',
          'En zigzag',
          'Uniquement à la verticale'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-2-c',
        question: "La distance moyenne entre la Terre et la Lune est d'environ $384\\,000\\text{ km}$. La vitesse de la lumière dans le vide est d'environ $300\\,000\\text{ km/s}$.<br/><br/>Combien de temps met la lumière pour parcourir cette distance, environ ?",
        options: [
          '$1{,}3\\text{ s}$',
          '$0{,}8\\text{ s}$',
          '$13\\text{ s}$',
          '$128\\text{ s}$'
        ],
        correctIndex: 0
      }
    ],
    3: [
      {
        id: 'physique-ondes-optique-3-a',
        question: "Un rayon lumineux arrive sur un miroir plan avec un angle d'incidence de $40°$, mesuré par rapport à la normale.<br/><br/>Quelle est la valeur de l'angle de réflexion ?",
        options: [
          '$40°$',
          '$50°$',
          '$80°$',
          '$20°$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-3-b',
        question: "Un rayon lumineux passe de l'air vers l'eau, un milieu optiquement plus dense.<br/><br/>Que se passe-t-il pour ce rayon au niveau de la surface de séparation ?",
        options: [
          'Il change de direction en se rapprochant de la normale (réfraction)',
          "Il change de direction en s'éloignant de la normale",
          'Il continue tout droit sans dévier',
          "Il est totalement réfléchi et ne pénètre pas dans l'eau"
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-3-c',
        question: "Sur un schéma d'optique, on trace la 'normale' à une surface au point d'incidence.<br/><br/>Comment cette droite est-elle définie ?",
        options: [
          'Elle est perpendiculaire à la surface en ce point',
          'Elle est parallèle à la surface en ce point',
          'Elle correspond au rayon incident lui-même',
          'Elle correspond au rayon réfléchi lui-même'
        ],
        correctIndex: 0
      }
    ],
    4: [
      {
        id: 'physique-ondes-optique-4-a',
        question: "Une lentille convergente reçoit des rayons lumineux parallèles à son axe optique.<br/><br/>Que deviennent ces rayons après avoir traversé la lentille ?",
        options: [
          'Ils convergent tous vers un même point, le foyer image',
          'Ils divergent tous à partir d\'un même point',
          'Ils restent parallèles entre eux',
          'Ils sont totalement réfléchis par la lentille'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-4-b',
        question: "Comment reconnaît-on une lentille divergente à sa forme ?",
        options: [
          'Elle est plus fine au centre que sur les bords',
          'Elle est plus épaisse au centre que sur les bords',
          'Elle a la même épaisseur partout',
          'Elle a toujours la forme d\'un prisme triangulaire'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-4-c',
        question: "Un œil myope voit flou les objets éloignés, car l'image se forme en avant de la rétine.<br/><br/>Quel type de lentille permet de corriger ce défaut ?",
        options: [
          'Une lentille divergente',
          'Une lentille convergente',
          'Un miroir plan',
          'Une lentille cylindrique uniquement'
        ],
        correctIndex: 0
      }
    ],
    5: [
      {
        id: 'physique-ondes-optique-5-a',
        question: "Une onde mécanique périodique a une période $T = 0{,}5\\text{ s}$ et se propage à une célérité $v = 4\\text{ m/s}$.<br/><br/>Quelle est sa longueur d'onde $\\lambda$ (avec $\\lambda = v \\times T$) ?",
        options: [
          '$2\\text{ m}$',
          '$0{,}125\\text{ m}$',
          '$8\\text{ m}$',
          '$4{,}5\\text{ m}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-5-b',
        question: "Une onde périodique a une période $T = 0{,}02\\text{ s}$.<br/><br/>Quelle est sa fréquence $f$ (avec $f = \\dfrac{1}{T}$) ?",
        options: [
          '$50\\text{ Hz}$',
          '$0{,}02\\text{ Hz}$',
          '$5\\text{ Hz}$',
          '$500\\text{ Hz}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-5-c',
        question: "Dans une onde transversale, comme celle qui se propage le long d'une corde tendue que l'on secoue verticalement, comment se déplacent les points de la corde par rapport à la direction de propagation de l'onde ?",
        options: [
          'Perpendiculairement à la direction de propagation',
          'Parallèlement à la direction de propagation',
          'En cercle autour de la direction de propagation',
          'Ils ne se déplacent pas'
        ],
        correctIndex: 0
      }
    ],
    6: [
      {
        id: 'physique-ondes-optique-6-a',
        question: "Un son se propage dans l'air à une célérité $v = 340\\text{ m/s}$, avec une fréquence $f = 170\\text{ Hz}$.<br/><br/>Quelle est sa longueur d'onde $\\lambda$ (avec $\\lambda = \\dfrac{v}{f}$) ?",
        options: [
          '$2\\text{ m}$',
          '$0{,}5\\text{ m}$',
          '$57\\,800\\text{ m}$',
          '$510\\text{ m}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-6-b',
        question: "Une radiation lumineuse visible a, dans le vide, une longueur d'onde $\\lambda = 500\\text{ nm}$. La célérité de la lumière dans le vide est $c = 3\\times10^{8}\\text{ m/s}$.<br/><br/>Quelle est la fréquence de cette radiation (avec $f = \\dfrac{c}{\\lambda}$) ?",
        options: [
          '$6\\times10^{14}\\text{ Hz}$',
          '$1{,}67\\times10^{-15}\\text{ Hz}$',
          '$6\\times10^{8}\\text{ Hz}$',
          '$1{,}5\\times10^{11}\\text{ Hz}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-6-c',
        question: "Lors d'un orage, on voit l'éclair avant d'entendre le tonnerre, alors que les deux phénomènes sont produits quasi simultanément à la source.<br/><br/>Comment expliquer ce décalage ?",
        options: [
          'La lumière se propage beaucoup plus vite que le son',
          'Le son se propage plus vite que la lumière, mais démarre plus tard',
          "L'éclair est en réalité produit avant le tonnerre",
          "L'œil réagit plus vite que l'oreille, indépendamment de la vitesse des ondes"
        ],
        correctIndex: 0
      }
    ],
    7: [
      {
        id: 'physique-ondes-optique-7-a',
        question: "En un point $M$, deux ondes lumineuses cohérentes de même longueur d'onde $\\lambda$ arrivent avec une différence de marche $\\delta = 3\\lambda$.<br/><br/>Quel type d'interférence observe-t-on en ce point ?",
        options: [
          'Une interférence constructive (les ondes sont en phase)',
          'Une interférence destructive (les ondes sont en opposition de phase)',
          "Aucune interférence n'est possible en ce point",
          'Une diffraction, et non une interférence'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-7-b',
        question: "Toujours avec deux ondes cohérentes de longueur d'onde $\\lambda$, quelle condition sur la différence de marche $\\delta$ correspond à une interférence destructive ?",
        options: [
          '$\\delta = \\left(k + \\dfrac{1}{2}\\right)\\lambda$, avec $k$ entier',
          '$\\delta = k\\lambda$, avec $k$ entier',
          '$\\delta = 0$',
          '$\\delta = \\lambda^{2}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-7-c',
        question: "Une fente de largeur $a$ diffracte une lumière de longueur d'onde $\\lambda$.<br/><br/>Pour un petit angle, quelle est l'expression du demi-écart angulaire $\\theta$ (en radians) de la tache centrale de diffraction ?",
        options: [
          '$\\theta = \\dfrac{\\lambda}{a}$',
          '$\\theta = \\dfrac{a}{\\lambda}$',
          '$\\theta = \\lambda \\times a$',
          '$\\theta = \\lambda + a$'
        ],
        correctIndex: 0
      }
    ],
    8: [
      {
        id: 'physique-ondes-optique-8-a',
        question: "Un rayon lumineux passe de l'air ($n_1 = 1$) vers un verre d'indice $n_2 = 1{,}5$, avec un angle d'incidence $i_1 = 30°$.<br/><br/>D'après la loi de Snell-Descartes ($n_1 \\sin i_1 = n_2 \\sin i_2$), quelle est la valeur de l'angle de réfraction $i_2$, arrondie à l'unité ?",
        options: [
          '$19°$',
          '$45°$',
          '$30°$',
          '$60°$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-8-b',
        question: "Dans un milieu transparent, la lumière se propage à une vitesse $v = 2\\times10^{8}\\text{ m/s}$. La célérité de la lumière dans le vide est $c = 3\\times10^{8}\\text{ m/s}$.<br/><br/>Quel est l'indice de réfraction $n$ de ce milieu (avec $n = \\dfrac{c}{v}$) ?",
        options: [
          '$1{,}5$',
          '$0{,}67$',
          '$6\\times10^{16}$',
          '$1{,}0$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-8-c',
        question: "Un rayon lumineux se propage dans un milieu d'indice $n_1 = 1{,}5$ et arrive à l'interface avec un milieu d'indice $n_2 = 1$ (l'air).<br/><br/>Au-delà d'un certain angle d'incidence, appelé angle limite, quel phénomène se produit ?",
        options: [
          'Une réflexion totale : toute la lumière est réfléchie, aucune ne traverse',
          'Une réfraction totale : toute la lumière traverse sans déviation',
          'Une absorption totale du rayon incident',
          'Une dispersion en un spectre de couleurs'
        ],
        correctIndex: 0
      }
    ],
    9: [
      {
        id: 'physique-ondes-optique-9-a',
        question: "Un capteur à ultrasons émet une salve qui se réfléchit sur un obstacle puis revient au capteur après une durée $\\Delta t = 20\\text{ ms}$. La célérité du son dans l'air est $v = 340\\text{ m/s}$.<br/><br/>Sachant que l'onde effectue un aller-retour entre le capteur et l'obstacle, quelle est la distance $d$ qui les sépare (avec $d = \\dfrac{v \\times \\Delta t}{2}$) ?",
        options: [
          '$3{,}4\\text{ m}$',
          '$6{,}8\\text{ m}$',
          '$0{,}059\\text{ m}$',
          '$17\\text{ m}$'
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-9-b',
        question: "Une fibre optique guide la lumière sur de longues distances grâce à des réflexions successives à l'interface entre le cœur et la gaine.<br/><br/>Quel phénomène physique permet ce guidage, dès lors que l'angle d'incidence dépasse l'angle limite ?",
        options: [
          'La réflexion totale interne',
          'La diffraction',
          'L\'interférence constructive',
          "L'effet photoélectrique"
        ],
        correctIndex: 0
      },
      {
        id: 'physique-ondes-optique-9-c',
        question: "Un capteur photoélectrique (barrière optique émetteur-récepteur) détecte le passage d'un objet devant lui.<br/><br/>Sur quel principe repose cette détection ?",
        options: [
          'L\'objet interrompt (ou modifie) le faisceau lumineux reçu par le récepteur',
          "L'objet émet lui-même un signal électrique détecté par le capteur",
          "L'objet modifie la fréquence du secteur électrique",
          "L'objet chauffe le capteur, qui détecte la variation de température"
        ],
        correctIndex: 0
      }
    ]
  }
};
