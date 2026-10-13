/* =========================================================
   Spark Learning – data/lycee-tle/tle-orthogonalite-espace.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-orthogonalite-espace',
    level: 2, subject: 'maths',
    icon: '⊥',
    title: 'Orthogonalité dans l\'espace',
    subtitle: 'Perpendiculaire, distance, produit scalaire 3D',
    keywords: ['Orthogonalité', 'Produit scalaire', 'Distance', 'Perpendiculaire', 'Projection'],
    physics: 'Calcul de distances en mécanique du solide, positionnement GPS, forces perpendiculaires en architecture',
    cours: {
      intro: 'Un drone doit garder une distance de sécurité constante par rapport à la façade d\'un immeuble, modélisée par un plan : comment calculer précisément l\'écart entre sa position (un point) et cette façade (un plan) ? C\'est un problème de distance point-plan, qui se résout grâce à l\'<strong>orthogonalité</strong>.<br/><br/>L\'<strong>orthogonalité</strong> en 3D se teste toujours par le produit scalaire : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>La <strong>distance du point</strong> $M(x_0;y_0;z_0)$ <strong>au plan</strong> d\'équation $ax+by+cz+d=0$ se calcule par $d = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.<br/><br/>Le numérateur est en <strong>valeur absolue</strong> car une distance est toujours positive.<br/><br/>Si $M$ est du « mauvais côté » du plan, le calcul brut $ax_0+by_0+cz_0+d$ est négatif : son signe dit de quel côté se trouve $M$, mais la distance, elle, reste positive.<br/><br/>Intuition : la formule projette le vecteur $\\overrightarrow{HM}$ (où $H$ est le pied de la perpendiculaire) sur le vecteur normal unitaire.',
      definitions: [
        { term: 'Orthogonalité de vecteurs', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. En 3D : $x_u x_v + y_u y_v + z_u z_v = 0$.' },
        { term: 'Projeté orthogonal', def: 'Le projeté orthogonal $H$ de $M$ sur un plan $\\mathcal{P}$ est le point de $\\mathcal{P}$ le plus proche de $M$. Le vecteur $\\overrightarrow{HM}$ est colinéaire au <strong>vecteur normal</strong> du plan.' },
        { term: 'Distance point-plan', def: '$d(M;\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$ pour le plan $ax+by+cz+d=0$ et le point $M(x_0;y_0;z_0)$. Toujours <strong>positive</strong> grâce à la valeur absolue.' },
        { term: 'Plans perpendiculaires', def: 'Deux plans sont <strong>perpendiculaires</strong> si et seulement si leurs vecteurs normaux sont orthogonaux : $\\vec{n_1} \\cdot \\vec{n_2} = 0$.' }
      ],
      method: {
        title: 'Calculer la distance d\'un point à un plan',
        steps: [
          '<strong>Lire les coefficients</strong> : dans l\'équation $ax+by+cz+d=0$ du plan, les nombres $a$, $b$, $c$ sont les coordonnées du vecteur normal $\\vec{n}$, et $d$ est le terme constant, avec son signe.',
          '<strong>Calculer le numérateur</strong> : remplacer $x$, $y$, $z$ par les coordonnées de $M(x_0;y_0;z_0)$, puis prendre la <strong>valeur absolue</strong> du résultat : $|ax_0+by_0+cz_0+d|$.',
          '<strong>Calculer le dénominateur</strong> : la norme du vecteur normal, $\\sqrt{a^2+b^2+c^2}$ — la somme des <strong>carrés</strong>, puis la racine.',
          '<strong>Conclure</strong> : $d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$, puis arrondir si l\'énoncé le demande.'
        ]
      },
      example: {
        statement: 'Calculer la distance du point $A(3;1;-2)$ au plan $\\mathcal{P}$ d\'équation $x - 2y + 2z + 1 = 0$.',
        steps: [
          'On identifie les coefficients du plan : $a=1$, $b=-2$, $c=2$, $d=1$.',
          'On applique la formule : $d = \\dfrac{|1 \\times 3 + (-2) \\times 1 + 2 \\times (-2) + 1|}{\\sqrt{1^2+(-2)^2+2^2}}$.',
          'Numérateur : $|3 - 2 - 4 + 1| = |-2| = 2$.',
          'Dénominateur : $\\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.',
          '$d(A;\\mathcal{P}) = \\dfrac{2}{3} \\approx 0{,}67$.'
        ],
        answer: 'La distance de $A$ au plan $\\mathcal{P}$ est $\\dfrac{2}{3}$ unité de longueur.'
      },
      formulas: [
        '$d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$',
        'Plans $\\perp$ : $\\vec{n_1}\\cdot\\vec{n_2}=0$',
        'Droite $\\perp$ plan : $\\vec{u}=k\\vec{n}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Distance point-plan',
        title: 'Perpendiculaire abaissée de A sur le plan P',
        description: 'Reprise exacte de l\'exemple du cours : le plan $\\mathcal{P}$ d\'équation $x-2y+2z+1=0$, le point $A(3;1;-2)$ situé hors du plan, et le pied $H$ de la perpendiculaire abaissée de $A$ sur $\\mathcal{P}$.',
        svg: `
          <svg viewBox="0 0 640 320" role="img" aria-labelledby="ortho-diagram-title ortho-diagram-desc">
            <title id="ortho-diagram-title">Perpendiculaire abaissee de A sur le plan P</title>
            <desc id="ortho-diagram-desc">Un plan P represente en perspective par un parallelogramme, d'equation x moins 2y plus 2z plus 1 egale 0. Le point A(3;1;-2) est place au-dessus du plan, hors de celui-ci. Un segment en pointilles relie A au point H, pied de la perpendiculaire dans le plan, avec un petit carre indiquant l'angle droit en H entre le segment AH et le plan. La longueur AH vaut deux tiers, soit environ 0,67.</desc>

            <!-- plan P, vu en perspective -->
            <polygon points="70,230 430,230 500,130 140,130" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" class="frame-line"></polygon>
            <!-- texture de surface du plan -->
            <line class="grid-line" x1="105" y1="180" x2="465" y2="180"></line>
            <line class="grid-line" x1="250" y1="230" x2="320" y2="130"></line>

            <!-- perpendiculaire [AH], en pointilles -->
            <line class="focus-line" x1="340" y1="60" x2="300" y2="190"></line>

            <!-- marque d'angle droit en H -->
            <polygon points="300,190 310,190 312.9,180.4 302.9,180.4" class="frame-line" fill="none"></polygon>

            <!-- points -->
            <circle class="plot-point" cx="340" cy="60" r="5"></circle>
            <circle class="plot-point-alt" cx="300" cy="190" r="5"></circle>

            <!-- libelles -->
            <text class="annotation-label" x="320" y="112" text-anchor="middle">Plan P : x - 2y + 2z + 1 = 0</text>
            <text class="annotation-label" x="355" y="50" text-anchor="start">A(3 ; 1 ; -2)</text>
            <text class="annotation-label" x="315" y="205" text-anchor="start">H</text>
            <text class="label-soft" x="315" y="219" text-anchor="start">H ≈ (3,22 ; 0,56 ; -1,56)</text>
            <text class="annotation-label" x="345" y="118" text-anchor="start">AH = 2/3 ≈ 0,67</text>
            <text class="label-soft" x="270" y="140" text-anchor="end">vecteur normal n(1;-2;2)</text>
          </svg>
        `,
        notes: [
          'Le plan $\\mathcal{P}$ a pour vecteur normal $\\vec{n}(1;-2;2)$, lu directement sur les coefficients de l\'équation $x-2y+2z+1=0$.',
          'Le point $H$, pied de la perpendiculaire, vérifie $\\overrightarrow{HA} = -\\dfrac{2}{9}\\,\\vec{n}$ : il est bien colinéaire au vecteur normal, ce qui confirme que $(AH)$ est perpendiculaire au plan $\\mathcal{P}$.',
          'Calcul : $H\\left(\\dfrac{29}{9};\\dfrac{5}{9};-\\dfrac{14}{9}\\right) \\approx (3{,}22\\,;\\,0{,}56\\,;\\,-1{,}56)$, obtenu en résolvant $A + t\\,\\vec{n} \\in \\mathcal{P}$ (on trouve $t = \\dfrac{2}{9}$).',
          'La longueur $AH = \\dfrac{2}{3} \\approx 0{,}67$ correspond exactement à la distance $d(A;\\mathcal{P})$ calculée dans l\'exemple du cours.'
        ],
        reading: 'Le petit carré tracé au point $H$ signale l\'angle droit entre le segment $[AH]$ et le plan $\\mathcal{P}$ : c\'est la définition même de la perpendiculaire abaissée d\'un point sur un plan.',
        caption: 'Perpendiculaire $[AH]$ abaissée du point $A(3;1;-2)$ sur le plan $\\mathcal{P} : x-2y+2z+1=0$ — reprise exacte de l\'exemple du cours, avec vérification $\\overrightarrow{HA} = -\\frac{2}{9}\\vec{n}$ et $AH = \\frac{2}{3} \\approx 0{,}67$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Même projection que le chapitre de géométrie dans l'espace, et pour
         la même raison : perspective cavalière de convention scolaire, $x$
         vers la droite, $z$ vers le haut, fuyante $y$ à $45°$ réduite de
         moitié. C'est une projection AFFINE, donc les arêtes parallèles le
         restent après projection — vérifié numériquement dans le test du
         niveau, parce qu'une coordonnée tapée à la main suffirait à casser la
         propriété sans que rien ne le signale.

         Les trois malentendus retenus :
           1. « la » distance d'un point à un plan est celle du pied de la
              perpendiculaire, et c'est la PLUS COURTE — l'élève croit souvent
              qu'on peut mesurer n'importe où ;
           2. un produit scalaire nul est un angle droit, y compris entre deux
              vecteurs qui ne se touchent pas sur le dessin ;
           3. deux plans sont perpendiculaires quand leurs NORMALES le sont,
              ce qui est contre-intuitif : on regarde deux directions qui ne
              sont dans aucun des deux plans.

         Les valeurs numériques sont calculées, et les propriétés vérifiées :
         $\vec{MH} \cdot \vec{HQ} = 0$ exactement, $MH^2 + HQ^2 = MQ^2$ au
         flottant près, et $\vec{n_1} \cdot \vec{n_2} = 0$. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi ce chemin-là',
          title: 'La distance se mesure une seule fois',
          description: 'Entre un point et un plan, on peut tracer une infinité de segments. Un seul mérite le nom de <strong>distance</strong> : celui qui arrive perpendiculairement au plan. Tous les autres sont plus longs, et la figure le montre sans qu\'aucun calcul soit nécessaire.',
          svg: `
            <svg viewBox="0 0 333 193" role="img" aria-labelledby="tle-dist-title tle-dist-desc">
              <title id="tle-dist-title">Distance d un point a un plan, comparee a un autre chemin</title>
              <desc id="tle-dist-desc">Un plan est represente par un parallelogramme en perspective cavaliere. Un point M est place au-dessus. Deux segments partent de M vers le plan : le premier tombe perpendiculairement au plan en un point H, le second rejoint un autre point Q du plan en biais. Un petit carre en H code l'angle droit. Le segment vertical mesure deux virgule deux unites, le segment oblique environ deux virgule quatre-vingt-sept : le chemin perpendiculaire est bien le plus court des deux.</desc>

              <!-- Le plan, parallelogramme en perspective cavaliere. Teinte
                   DISCRETE : c'est le decor, pas l'objet a isoler. -->
              <polygon class="frame-line" points="34,158.8 240.8,158.8 298.4,101.2 91.6,101.2" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>

              <!-- Le chemin OBLIQUE, en teinte faible et en tirets : c'est
                   l'option qu'on ecarte. Patron « piege » : le bon chemin en
                   teinte d'accent, le mauvais dessous en trait tirete. -->
              <line class="guide-line" x1="158.8" y1="34" x2="215.2" y2="144.8"></line>
              <circle class="plot-point-alt" cx="215.2" cy="144.8" r="4"></circle>

              <!-- Le chemin PERPENDICULAIRE, seul objet en teinte forte. -->
              <line class="curve-main" x1="158.8" y1="34" x2="158.8" y2="130.8"></line>
              <circle class="plot-point" cx="158.8" cy="34" r="5"></circle>
              <circle class="plot-point" cx="158.8" cy="130.8" r="4"></circle>

              <!-- Carre codant l'angle droit en H. Un angle droit se code par
                   un CARRE, jamais par un arc. -->
              <polyline class="frame-line" points="169.2,133.4 169.2,118.4 158.8,115.8" fill="none"></polyline>

              <text class="tick-label" x="151" y="30" text-anchor="end">M</text>
              <text class="tick-label" x="151" y="140" text-anchor="end">H</text>
              <text class="tick-label" x="223" y="152" text-anchor="start">Q</text>
              <text class="annotation-label" x="150" y="86" text-anchor="end">2,2</text>
              <text class="label-soft" x="204" y="92" text-anchor="start">2,87</text>
              <text class="label-soft" x="70" y="176" text-anchor="start">le plan</text>
            </svg>
          `,
          notes: [
            'Le segment $[MH]$ arrive <strong>perpendiculairement</strong> au plan : le point $H$ est le projeté orthogonal de $M$, et $MH = 2{,}2$.',
            'Le segment $[MQ]$ rejoint un autre point du plan, en biais : il mesure environ $2{,}87$, donc il est plus long.',
            'Ce n\'est pas un hasard, c\'est Pythagore. Le triangle $MHQ$ est rectangle en $H$, donc $MQ^2 = MH^2 + HQ^2$. Comme $HQ^2$ ne peut pas être négatif, $MQ$ est toujours au moins égal à $MH$ — quel que soit le point $Q$ choisi dans le plan.'
          ],
          reading: 'Déplace mentalement le point $Q$ n\'importe où dans le plan : le segment $[MQ]$ s\'allonge dès que tu t\'éloignes de $H$, et il ne peut jamais devenir plus court.<br/><br/>C\'est pourquoi la formule $d = \\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ donne <strong>un</strong> nombre et non un intervalle.<br/><br/>Il n\'y a qu\'un seul chemin le plus court, et c\'est celui qui suit la <strong>normale</strong>.',
          caption: 'Distance du point $M$ au plan : $MH = 2{,}2$ le long de la perpendiculaire, contre $MQ \\approx 2{,}87$ en biais.'
        },
        {
          theme: 'maths',
          kicker: 'Le contre-intuitif du chapitre',
          title: 'Deux plans perpendiculaires par leurs normales',
          description: 'Pour savoir si deux plans sont perpendiculaires, on ne regarde ni l\'un ni l\'autre : on regarde leurs deux vecteurs <strong>normaux</strong>, c\'est-à-dire deux directions qui ne sont dans aucun des deux plans. S\'ils sont orthogonaux, les plans le sont.',
          svg: `
            <svg viewBox="0 0 292 168" role="img" aria-labelledby="tle-plans-title tle-plans-desc">
              <title id="tle-plans-title">Deux plans perpendiculaires et leurs vecteurs normaux</title>
              <desc id="tle-plans-desc">Deux parallelogrammes representent deux plans qui se coupent le long d'une droite commune. Le premier est horizontal, le second vertical. D'un point de leur droite d'intersection partent deux fleches : l'une monte verticalement, c'est le vecteur normal du plan horizontal ; l'autre part en biais vers l'arriere, c'est le vecteur normal du plan vertical. Un petit carre entre les deux fleches code l'angle droit. Le produit scalaire de ces deux vecteurs normaux vaut zero.</desc>

              <defs>
                <marker id="fl-tle-plans" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Plan horizontal, puis plan vertical. Les deux partagent
                   l'arete qui va de (32,136) a (192,136) : c'est leur droite
                   d'intersection, et elle est tracee une seule fois. -->
              <polygon class="frame-line" points="32,136 192,136 234.4,93.6 74.4,93.6" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <polygon class="frame-line" points="32,136 192,136 192,32 32,32" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></polygon>

              <!-- Les deux normales, issues du meme point de la droite
                   d'intersection. Seules elles portent la teinte d'accent. -->
              <line class="curve-main" x1="112" y1="136" x2="112" y2="76" marker-end="url(#fl-tle-plans)"></line>
              <line class="curve-main" x1="112" y1="136" x2="133.2" y2="114.8" marker-end="url(#fl-tle-plans)"></line>
              <circle class="plot-point" cx="112" cy="136" r="4"></circle>

              <!-- Carre codant l'angle droit entre les deux normales. -->
              <polyline class="frame-line" points="112,120 117.7,114.3 117.7,130.3" fill="none"></polyline>

              <!-- ETIQUETTES REPOSITIONNEES ET RENOMMEES le 2026-09-14, apres
                   controle visuel du PDF. Deux defauts, invisibles aux tests
                   parce qu'ils ne portent sur aucune propriete mathematique :

                   1. « normale du plan haut » chevauchait « plan bas » et
                      traversait l'arete du parallelogramme. Les deux
                      etiquettes sont desormais ecartees, et celle de la
                      fuyante passe au-dessus de sa fleche plutot qu'a cote ;

                   2. les noms etaient TROMPEURS : la fleche verticale est la
                      normale du plan HORIZONTAL, pas du « plan bas ». Un
                      eleve qui suit la fleche du doigt lisait exactement le
                      contraire de ce que la figure demontre. Les etiquettes
                      nomment maintenant l'orientation du plan concerne, ce
                      qui leve toute ambiguite. -->
              <text class="annotation-label" x="112" y="64" text-anchor="middle">normale du plan horizontal</text>
              <text class="annotation-label" x="152" y="108" text-anchor="start">normale du plan vertical</text>
              <text class="label-soft" x="226" y="152" text-anchor="middle">plan horizontal</text>
              <text class="label-soft" x="66" y="46" text-anchor="middle">plan vertical</text>
            </svg>
          `,
          notes: [
            'Le plan horizontal a pour vecteur normal $\\vec{n_1}\\,(0\\,;\\,0\\,;\\,1)$ : il pointe droit vers le haut, donc hors de ce plan.',
            'Le plan vertical a pour vecteur normal $\\vec{n_2}\\,(0\\,;\\,1\\,;\\,0)$ : il pointe vers l\'arrière, donc hors de ce plan-là.',
            'Leur produit scalaire vaut $0 \\times 0 + 0 \\times 1 + 1 \\times 0 = 0$ : les deux normales sont orthogonales, <strong>donc les deux plans sont perpendiculaires</strong>.'
          ],
          reading: 'Le renversement est déroutant la première fois : on juge deux plans en regardant deux flèches qui n\'appartiennent ni à l\'un ni à l\'autre.<br/><br/>Mais c\'est aussi ce qui rend le critère utilisable — une équation de plan te donne directement sa <strong>normale</strong>, sans aucun travail.<br/><br/>Lis $2x - y + 2z - 3 = 0$ : tu as déjà $\\vec{n}\\,(2\\,;\\,-1\\,;\\,2)$, et il ne te reste qu\'un produit scalaire à poser.',
          caption: 'Deux plans perpendiculaires et leurs normales $\\vec{n_1}\\,(0\\,;\\,0\\,;\\,1)$ et $\\vec{n_2}\\,(0\\,;\\,1\\,;\\,0)$, de produit scalaire nul.'
        }
      ],

      recap: [
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. En 3D, on calcule la somme des produits coordonnée par coordonnée.',
        'La <strong>distance point-plan</strong> utilise la formule $d = |ax_0+by_0+cz_0+d| / \\sqrt{a^2+b^2+c^2}$. Ne jamais oublier la valeur absolue au numérateur.',
        'Deux plans sont <strong>perpendiculaires</strong> si $\\vec{n_1} \\cdot \\vec{n_2} = 0$. Deux plans sont parallèles si $\\vec{n_1}$ et $\\vec{n_2}$ sont colinéaires.',
        'Le <strong>projeté orthogonal</strong> $H$ de $M$ sur $\\mathcal{P}$ est le point de $\\mathcal{P}$ tel que $\\overrightarrow{HM}$ est colinéaire à $\\vec{n}$. La distance $MH$ est minimale parmi tous les points du plan.'
      ],
      piege: 'Deux critères se ressemblent et s\'échangent sans cesse.<br/><br/>Deux <strong>vecteurs</strong> sont orthogonaux quand leur produit scalaire est <strong>nul</strong>. Mais une <strong>droite</strong> est perpendiculaire à un plan quand son vecteur directeur est <strong>colinéaire</strong> au vecteur normal — pas orthogonal !<br/><br/>Et dans la formule de distance, deux oublis classiques : la <strong>valeur absolue</strong> au numérateur (une distance est toujours positive) et la <strong>racine</strong> au dénominateur ($\\sqrt{a^2+b^2+c^2}$, jamais $a+b+c$).'
    },
    quiz: [
      { q: 'Pour calculer la distance de $A(1;2;-1)$ au plan $x+y+z-6=0$, un élève obtient $\\dfrac{1+2-1-6}{\\sqrt{3}}=\\dfrac{-4}{\\sqrt{3}}$. Quelle est son erreur ?', options: ['La distance est toujours positive : il faut la valeur absolue. $d=\\dfrac{|-4|}{\\sqrt{3}}=\\dfrac{4}{\\sqrt{3}}\\approx2{,}31$', 'L\'élève a raison : une distance négative indique que $A$ est de l\'autre côté du plan', 'Le dénominateur devrait être $\\sqrt{1^2+1^2+1^2}=3$, pas $\\sqrt{3}$', 'Le numérateur devrait être $1+2+(-1)-6=-4$ donc $d=-4$'], answer: 0, correction: 'Une distance est toujours une longueur, donc toujours POSITIVE. La formule est $d=|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$. Ici $|1+2-1-6|=|-4|=4$ et $\\sqrt{1+1+1}=\\sqrt{3}$, donc $d=4/\\sqrt{3}\\approx2{,}31$. Le signe négatif du numérateur ($-4$) indique seulement que $A$ est du côté "négatif" du plan — pas que la distance est négative.' },
      { q: 'La distance du point $O(0;0;0)$ au plan $x+y+z-3=0$ est :', options: ['$3$', '$\\sqrt{3}$', '$1$', '$3\\sqrt{3}$'], answer: 1, correction: '$d=\\frac{|0+0+0-3|}{\\sqrt{1+1+1}}=\\frac{3}{\\sqrt{3}}=\\sqrt{3}$.' },
      { q: 'Une droite de vecteur directeur $\\vec{u}(1;2;3)$ est-elle perpendiculaire au plan de normale $\\vec{n}(2;4;6)$ ?', options: ['Non, car $\\vec{u}\\cdot\\vec{n}=2+8+18=28\\neq0$', 'Oui, car $\\vec{u}$ et $\\vec{n}$ sont colinéaires', 'Non, car les coordonnées de $\\vec{u}$ et de $\\vec{n}$ ne sont pas égales', 'On ne peut pas conclure sans l\'équation du plan'], answer: 1, correction: '$\\vec{n}=2\\vec{u}$ : colinéaires, donc la droite est perpendiculaire au plan.<br/><br/>Une droite est perpendiculaire à un plan si et seulement si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan. Ici le rapport est $k=2$ pour les trois coordonnées.<br/><br/>Calculer $\\vec{u}\\cdot\\vec{n}=28$ et conclure « non », c\'est appliquer le critère « produit scalaire nul », qui sert à l\'orthogonalité de deux <strong>vecteurs</strong>. Pour une droite et un plan, $\\vec{u}\\cdot\\vec{n}=0$ signifierait au contraire que la droite est <strong>parallèle</strong> au plan.' },
      { q: 'Le projeté orthogonal $H$ de $M(0;0;3)$ sur le plan $z = 0$ est :', options: ['$H(0;0;0)$', '$H(0;0;3)$', '$H(3;0;0)$', '$H(0;3;0)$'], answer: 0, correction: 'Le plan $z=0$ est le plan $xOy$. Le projeté orthogonal consiste à "descendre" perpendiculairement sur le plan : on garde les coordonnées $x$ et $y$ et on met $z=0$.<br/><br/>Donc $H(0;0;0)$. La distance $MH = |3-0| = 3$.' },
      { q: 'Les plans $\\mathcal{P}_1 : x + y + z = 1$ et $\\mathcal{P}_2 : x - y = 0$ sont-ils perpendiculaires ?', options: ['Non, car $\\vec{n_1} \\cdot \\vec{n_2} = 2$', 'Oui, car les plans ne sont pas parallèles', 'Oui, car $\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 0$', 'Non, car $\\vec{n_1} \\cdot \\vec{n_2} = -1$'], answer: 2, correction: '$\\vec{n_1}(1;1;1)$ et $\\vec{n_2}(1;-1;0)$.<br/><br/>$\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 1 - 1 + 0 = 0$.<br/><br/>Les vecteurs normaux sont orthogonaux, donc les deux plans sont bien <strong>perpendiculaires</strong>.' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : une seule tâche distincte (la distance d'un point à un plan),
       habillée de six décors par pick(). Mesuré sur 400 tirages : 48 moules
       d'énoncé pour 8 « tâches » apparentes, mais toutes la même question
       sous des nombres différents.

       APRÈS : six tâches, qui couvrent le chapitre — distance point-plan,
       test d'orthogonalité de deux vecteurs, droite perpendiculaire à un
       plan, perpendicularité de deux plans, norme d'un vecteur normal, et
       coordonnées du projeté orthogonal sur un plan de base.

       Notation décimale : par fr(), jamais par un .replace() écrit à la main.
       Le générateur d'origine en contenait un (`distAnswer.toFixed(2).replace(...)`),
       corrigé ce jour — c'est le bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['distance', 'orthogonaux', 'perpendiculaire',
                            'deuxPlans', 'normeNormale', 'projete']);
        // Coefficient d'une équation de plan : « x » et non « 1x ».
        const co = (k) => (k === 1 ? '' : String(k));

        /* TÂCHE 1 — distance d'un point à un plan. La tâche historique,
           conservée : c'est la formule centrale du chapitre. */
        if (tache === 'distance') {
          const ctx = pick([
            { quoi: 'Un drone de surveillance', ou: 'le toit du hangar' },
            { quoi: 'Un avion en descente', ou: 'le plan de la piste' },
            { quoi: 'L\'outil d\'un robot de soudure', ou: 'la plaque à souder' },
            { quoi: 'Un capteur de maquette numérique', ou: 'le mur' }
          ]);
          const a = rand(1, 3), b = rand(1, 3), c = rand(1, 3), d = rand(-5, -1);
          const x0 = rand(-3, 3), y0 = rand(-3, 3), z0 = rand(-3, 3);
          const num = Math.abs(a * x0 + b * y0 + c * z0 + d);
          const s = a * a + b * b + c * c;
          const res = parseFloat((num / Math.sqrt(s)).toFixed(2));
          return {
            // 2026-09-14 : « $...z -4 = 0$ » laissait une espace parasite avant
            // le signe, et « est modélisé » ne s'accordait pas avec les décors
            // féminins. On compose le terme constant et on neutralise l'accord.
            statement: `${ctx.quoi} se trouve au point $M(${x0};${y0};${z0})$, et l'on modélise ${ctx.ou} par le plan $\\mathcal{P}$ d'équation $${co(a)}x + ${co(b)}y + ${co(c)}z - ${Math.abs(d)} = 0$.<br/><br/>Calculer la distance de $M$ au plan $\\mathcal{P}$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: 'unités',
            hint: `$d = \\dfrac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$. Le numérateur est en valeur absolue : une distance ne peut pas être négative, même si le point est du « mauvais » côté du plan.`,
            solution: [
              `Numérateur : $|${a} \\times (${x0}) + ${b} \\times (${y0}) + ${c} \\times (${z0}) ${d}| = ${num}$`,
              `Dénominateur : $\\sqrt{${a}^2 + ${b}^2 + ${c}^2} = \\sqrt{${s}}$`,
              `$d = \\dfrac{${num}}{\\sqrt{${s}}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 2 — tester l'orthogonalité de deux vecteurs. La réponse est
           binaire (1 ou 0), ce qui oblige à CONCLURE et pas seulement à
           calculer : c'est la différence avec un produit scalaire ordinaire. */
        if (tache === 'orthogonaux') {
          const ctx = pick([
            { quoi: 'deux tirants d\'une charpente' },
            { quoi: 'deux axes d\'un bras robotisé' },
            { quoi: 'deux câbles tendus' }
          ]);
          const orth = pick([true, false]);
          let a, b;
          if (orth) {
            /* Construction garantissant un produit scalaire EXACTEMENT nul :
               $\vec{u}(p\,;\,q\,;\,0)$ et $\vec{v}(qr\,;\,-pr\,;\,w)$. Le
               troisieme produit est nul parce que la cote de u l'est, et les
               deux premiers s'annulent entre eux : $pqr - qpr = 0$. */
            const p = rand(1, 4), q = rand(1, 4), r = rand(1, 3);
            a = [p, q, 0];
            b = [q * r, -p * r, rand(1, 4)];
          } else {
            a = [rand(1, 4), rand(1, 4), rand(1, 4)];
            b = [rand(1, 4), rand(1, 4), rand(1, 4)];   // produit strictement positif
          }
          const ps = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
          const res = ps === 0 ? 1 : 0;
          return {
            statement: `On se demande si ${ctx.quoi}, dirigés par $\\vec{u}(${a[0]};${a[1]};${a[2]})$ et $\\vec{v}(${b[0]};${b[1]};${b[2]})$, sont perpendiculaires.<br/><br/>Répondre par $1$ s'ils sont orthogonaux, par $0$ sinon.`,
            answer: res, tolerance: 0, unit: '',
            hint: `Deux vecteurs sont orthogonaux exactement quand leur produit scalaire est NUL. Calcule $x_u x_v + y_u y_v + z_u z_v$, puis regarde si tu obtiens $0$ — la valeur elle-même n'a pas d'importance, seul compte le fait qu'elle s'annule ou non.`,
            solution: [
              `$\\vec{u} \\cdot \\vec{v} = ${a[0]} \\times ${b[0]} + ${a[1]} \\times (${b[1]}) + ${a[2]} \\times ${b[2]}$`,
              `$= ${a[0] * b[0]} ${a[1] * b[1] >= 0 ? '+ ' + a[1] * b[1] : '- ' + Math.abs(a[1] * b[1])} + ${a[2] * b[2]} = ${ps}$`,
              ps === 0
                ? `Le produit scalaire est nul : les deux vecteurs sont bien orthogonaux, donc la réponse est $1$.`
                : `Le produit scalaire vaut $${ps}$, qui n'est pas nul : les deux vecteurs ne sont pas orthogonaux, donc la réponse est $0$.`
            ]
          };
        }

        /* TÂCHE 3 — droite perpendiculaire à un plan. Le critère change : ce
           n'est plus un produit scalaire NUL, c'est une COLINÉARITÉ. L'élève
           confond systématiquement les deux, et cette tâche les oppose. */
        if (tache === 'perpendiculaire') {
          const ctx = pick([
            // 2026-09-14 : « On veut que un mat... soit perpendiculaire a le
            // plancher » sortait de la concatenation. Les decors portent
            // desormais l'article correct, et la phrase ne le rajoute plus.
            // Phase 4 : la préposition passe dans le décor (« au plancher »).
            { quoi: 'le mât d\'une antenne', ou: 'à la dalle' },
            { quoi: 'le forage', ou: 'à la couche géologique' },   // « que un forage » évité
            { quoi: 'le pilier d\'un pont', ou: 'au plancher' }
          ]);
          const n = [rand(1, 4), rand(1, 4), rand(1, 4)];
          const k = rand(2, 4);
          return {
            statement: `On veut que ${ctx.quoi}, de vecteur directeur $\\vec{u}(${k * n[0]};${k * n[1]};${k * n[2]})$, soit perpendiculaire ${ctx.ou}, plan de vecteur normal $\\vec{n}(${n[0]};${n[1]};${n[2]})$.<br/><br/>C'est le cas lorsque $\\vec{u}$ et $\\vec{n}$ sont colinéaires. Déterminer le réel $k$ tel que $\\vec{u} = k\\,\\vec{n}$.`,
            answer: k, tolerance: 0, unit: '',
            hint: `Attention au piège : une droite perpendiculaire à un plan a son vecteur directeur COLINÉAIRE à la normale, et non orthogonal à elle. Le critère du produit scalaire nul sert pour deux vecteurs, pas ici.`,
            solution: [
              `Une droite est perpendiculaire à un plan quand son vecteur directeur est colinéaire au vecteur normal du plan`,
              `Première coordonnée : $k = \\dfrac{${k * n[0]}}{${n[0]}} = ${k}$`,
              `Vérification : $${k} \\times ${n[1]} = ${k * n[1]}$ et $${k} \\times ${n[2]} = ${k * n[2]}$ — le même $k$ convient, donc $k = ${k}$`
            ]
          };
        }

        /* TÂCHE 4 — perpendicularité de DEUX PLANS. On revient au produit
           scalaire nul, mais entre les deux NORMALES. Placée juste après la
           tâche 3, elle force à distinguer les deux critères. */
        if (tache === 'deuxPlans') {
          const ctx = pick([
            { quoi: 'deux pans de toiture' },
            { quoi: 'un mur et un plafond' },
            { quoi: 'deux faces d\'une pièce usinée' }
          ]);
          const p = rand(1, 4), q = rand(1, 4), r = rand(1, 3);
          // n1(p ; q ; 0) et n2(q*r ; -p*r ; s) : produit scalaire nul.
          const s = rand(1, 4);
          const n1 = [p, q, 0], n2 = [q * r, -p * r, s];
          const ps = n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2];
          return {
            // 2026-09-14 : « $1x -3 y$ » s'imprimait avec une espace parasite
            // avant le y et un coefficient 1 explicite. On compose le terme.
            statement: `On se demande si ${ctx.quoi} sont perpendiculaires. Leurs plans ont pour équations $${co(n1[0])}x + ${co(n1[1])}y = 0$ et $${co(n2[0])}x ${n2[1] >= 0 ? '+ ' + co(n2[1]) : '- ' + co(Math.abs(n2[1]))}y + ${co(n2[2])}z = 0$.<br/><br/>Calculer le produit scalaire des deux vecteurs normaux. (S'il est nul, les plans sont perpendiculaires.)`,
            answer: ps, tolerance: 0, unit: '',
            hint: `Les coefficients de $x$, $y$ et $z$ dans l'équation d'un plan SONT les coordonnées de son vecteur normal : ici $\\vec{n_1}(${n1[0]};${n1[1]};0)$ et $\\vec{n_2}(${n2[0]};${n2[1]};${n2[2]})$. Il n'y a rien d'autre à chercher.`,
            solution: [
              `Normales lues directement dans les équations : $\\vec{n_1}(${n1[0]};${n1[1]};0)$ et $\\vec{n_2}(${n2[0]};${n2[1]};${n2[2]})$`,
              `$\\vec{n_1} \\cdot \\vec{n_2} = ${n1[0]} \\times ${n2[0]} + ${n1[1]} \\times (${n2[1]}) + 0 \\times ${n2[2]} = ${n1[0] * n2[0]} ${n1[1] * n2[1] >= 0 ? '+ ' + n1[1] * n2[1] : n1[1] * n2[1]}$`,
              `$= ${ps}$, donc les deux plans sont bien perpendiculaires.`
            ]
          };
        }

        /* TÂCHE 5 — norme du vecteur normal, c'est-à-dire le DÉNOMINATEUR de
           la formule de distance, isolé. L'élève qui se trompe sur la
           distance se trompe presque toujours ici : il oublie la racine, ou
           il met la somme des coefficients au lieu de la somme des carrés. */
        if (tache === 'normeNormale') {
          const ctx = pick([
            { quoi: 'une façade vitrée' },
            { quoi: 'un plan de coupe' },
            { quoi: 'le plan d\'une rampe' }
          ]);
          const a = rand(1, 5), b = rand(1, 5), c = rand(1, 5);
          const s = a * a + b * b + c * c;
          const res = parseFloat(Math.sqrt(s).toFixed(2));
          return {
            // 2026-09-14 : le decor ouvrait la phrase en minuscule (« un plan
            // de coupe a pour equation »). On le place apres un sujet fixe.
            statement: `Dans une maquette, ${ctx.quoi} a pour équation $${co(a)}x + ${co(b)}y + ${co(c)}z - 7 = 0$.<br/><br/>Calculer la norme $\\|\\vec{n}\\|$ de son vecteur normal — c'est le dénominateur de la formule de distance. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `Le vecteur normal se lit dans l'équation : $\\vec{n}(${a};${b};${c})$. Sa norme est $\\sqrt{a^2 + b^2 + c^2}$ — la somme des CARRÉS, puis la racine. Ce n'est pas $a + b + c$.`,
            solution: [
              `Vecteur normal lu dans l'équation : $\\vec{n}(${a};${b};${c})$`,
              `$\\|\\vec{n}\\| = \\sqrt{${a}^2 + ${b}^2 + ${c}^2} = \\sqrt{${a * a} + ${b * b} + ${c * c}} = \\sqrt{${s}}$`,
              `$\\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 6 — projeté orthogonal sur un plan de base. Sur le plan
           d'équation $z = 0$, projeter revient à annuler la cote : c'est la
           situation où le projeté devient VISIBLE, et où l'élève comprend ce
           que « pied de la perpendiculaire » veut dire. */
        const ctx = pick([
          { quoi: 'un drone', ou: 'le sol' },
          { quoi: 'un oiseau', ou: 'la surface du lac' },
          { quoi: 'un point d\'une charpente', ou: 'la dalle' }
        ]);
        /* Coordonnees POSITIVES ici, contrairement aux autres taches : la
           figure place le point au-dessus d'un plan dessine, et un point
           derriere l'origine sortirait du quadrilatere represente. Le sens
           mathematique est identique, et la lisibilite y gagne. */
        const x0 = rand(1, 4), y0 = rand(1, 3), z0 = rand(1, 6);
        return {
          statement: `${ctx.quoi.charAt(0).toUpperCase() + ctx.quoi.slice(1)} se trouve au point $M(${x0};${y0};${z0})$, et ${ctx.ou} est le plan d'équation $z = 0$.<br/><br/>Le projeté orthogonal $H$ de $M$ sur ce plan a pour coordonnées $(${x0};${y0};0)$. Quelle est la distance $MH$ ?`,
          answer: z0, tolerance: 0, unit: '',
          /* Figure d'exercice : le seul endroit du chapitre ou le projete
             orthogonal devient VISIBLE. Elle ne divulgue pas la reponse — la
             longueur cherchee porte un point d'interrogation — et code
             l'angle droit en H par un carre, verifie par
             scripts/manuel/tests/figures-tle.test.js. */
          figure: figureTleDistancePlan(x0, y0, z0, { nomPlan: ctx.ou }),
          hint: `Projeter sur le plan $z = 0$, c'est descendre à la verticale : seule la cote change, l'abscisse et l'ordonnée sont conservées. La distance parcourue est donc exactement la cote de départ.`,
          solution: [
            `Le projeté orthogonal sur le plan $z = 0$ garde l'abscisse et l'ordonnée, et annule la cote : $H(${x0};${y0};0)$`,
            `$\\vec{MH}(0\\,;\\,0\\,;\\,${-z0})$, donc $MH = \\sqrt{0 + 0 + ${z0 * z0}} = ${z0}$`,
            `La distance vaut $${z0}$ : sur un plan de base, elle se lit directement sur la cote.`
          ]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé, on considère le plan $\\mathcal{P}$ d\'équation $2x+y-2z+3=0$ et le point $A(1;1;1)$.',
      tasks: [
        'Donner le vecteur normal à $\\mathcal{P}$.',
        'Calculer la distance de $A$ à $\\mathcal{P}$.',
        'Écrire une représentation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.<br/><br/>(Rappel du chapitre précédent : la droite passant par $A(x_A;y_A;z_A)$, de vecteur directeur $\\vec{u}(a;b;c)$, a pour représentation paramétrique $x = x_A + at$, $y = y_A + bt$, $z = z_A + ct$, avec $t \\in \\mathbb{R}$.)'
      ],
      solutions: [
        '$\\vec{n}(2;1;-2)$.',
        '$d=\\frac{|2\\times1+1\\times1-2\\times1+3|}{\\sqrt{4+1+4}}=\\frac{|4|}{3}=\\frac{4}{3}$.',
        'Vecteur directeur : $\\vec{n}(2;1;-2)$ (une droite perpendiculaire au plan est dirigée par sa normale).<br/><br/>Représentation paramétrique : $x=1+2t$, $y=1+t$, $z=1-2t$, $t \\in \\mathbb{R}$.'
      ],
      finalAnswer: '$d(A;\\mathcal{P})=\\frac{4}{3}$. Droite perpendiculaire : $(1+2t;1+t;1-2t)$.'
    },

    evaluation: {
      title: 'Évaluation — Orthogonalité dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u}(2;-3;1) \\cdot \\vec{v}(4;2;-5)$.',
          type: 'numeric',
          answer: -3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 2 \\times 4 + (-3) \\times 2 + 1 \\times (-5) = 8 - 6 - 5 = -3$.'
        },
        {
          statement: 'Les vecteurs $\\vec{u}(1;-2;3)$ et $\\vec{v}(6;0;-2)$ sont-ils orthogonaux ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u}\\cdot\\vec{v}=0$', 'Non, car $\\vec{u}\\cdot\\vec{v}=12$', 'Non, car $\\vec{u}\\cdot\\vec{v}=-12$', 'Oui, car leurs coordonnées ne sont pas proportionnelles'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 6 + (-2) \\times 0 + 3 \\times (-2) = 6 + 0 - 6 = 0$. Donc $\\vec{u} \\perp \\vec{v}$.'
        },
        {
          statement: 'Calculer la distance du point $M(1;-1;2)$ au plan $2x - y + 2z - 1 = 0$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$d = \\dfrac{|2 \\times 1 + (-1)\\times(-1) + 2 \\times 2 - 1|}{\\sqrt{4+1+4}} = \\dfrac{|2+1+4-1|}{\\sqrt{9}} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Une droite de vecteur directeur $\\vec{u}(3;-6;9)$ est-elle perpendiculaire au plan de vecteur normal $\\vec{n}(1;-2;3)$ ?',
          type: 'multiple-choice',
          options: ['Non, car $\\vec{u} \\cdot \\vec{n} = 3+12+27 = 42 \\neq 0$', 'Non, car les coordonnées de $\\vec{u}$ et de $\\vec{n}$ sont différentes', 'Oui, car $\\vec{u} = 3\\vec{n}$ : les deux vecteurs sont colinéaires', 'On ne peut pas conclure sans connaître l\'équation du plan'],
          answer: 2,
          points: 2,
          correction: '$\\vec{u} = (3;-6;9) = 3 \\times (1;-2;3) = 3\\vec{n}$. Les vecteurs sont colinéaires, donc la droite est perpendiculaire au plan.<br/><br/>Le produit scalaire $\\vec{u}\\cdot\\vec{n} = 42$ ne sert à rien ici : un produit scalaire <strong>nul</strong> entre $\\vec{u}$ et $\\vec{n}$ dirait que la droite est <strong>parallèle</strong> au plan, pas perpendiculaire.'
        },
        {
          statement: 'Les plans $\\mathcal{P}_1 : x + 2y - z + 1 = 0$ et $\\mathcal{P}_2 : 2x - y + 2z - 3 = 0$ sont-ils perpendiculaires ?',
          type: 'multiple-choice',
          options: ['Non, car $\\vec{n_1}\\cdot\\vec{n_2} = 2 \\neq 0$', 'Non, car $\\vec{n_1}\\cdot\\vec{n_2} = -2 \\neq 0$', 'Oui, car $\\vec{n_1}\\cdot\\vec{n_2} = 0$', 'Oui, car les plans ne sont pas parallèles'],
          answer: 1,
          points: 2,
          correction: '$\\vec{n_1}(1;2;-1)$, $\\vec{n_2}(2;-1;2)$. $\\vec{n_1}\\cdot\\vec{n_2} = 1 \\times 2 + 2 \\times (-1) + (-1) \\times 2 = 2 - 2 - 2 = -2 \\neq 0$. Les plans ne sont PAS perpendiculaires.'
        }
      ]
    }
  });
