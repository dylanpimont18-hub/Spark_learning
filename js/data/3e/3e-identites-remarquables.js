/* =========================================================
   Spark Learning – data/3e/3e-identites-remarquables.js
   Module : Identités remarquables (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-identites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔣',
    title: 'Identités remarquables',
    subtitle: '$(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$',
    keywords: ['Identités remarquables', 'Développer', 'Factoriser', 'Carré', 'Différence'],
    physics: false,
    cours: {
      intro: 'Calculer $99 \\times 101$ de tête, en moins de deux secondes, sans poser l\'opération ? C\'est possible : $99 \\times 101 = (100-1)(100+1) = 10\\,000 - 1 = 9\\,999$. Ce raccourci n\'est pas un hasard — il repose sur les <strong>identités remarquables</strong>.<br/><br/>' +
        'Les trois <strong>identités remarquables</strong> sont des égalités algébriques vraies pour toutes valeurs de $a$ et $b$. Elles permettent deux opérations inverses : <strong>développer</strong> (produit → somme) et <strong>factoriser</strong> (somme → produit).<br/><br/>' +
        '<strong>Erreur classique à éviter</strong> : $(a+b)^2 \\neq a^2 + b^2$. Le terme croisé $2ab$ est souvent oublié : $(3+4)^2 = 49 \\neq 9 + 16 = 25$.<br/><br/>' +
        'Pour <strong>factoriser</strong> $x^2 - k$ : si $k$ est un carré parfait, appliquer la 3e identité ; sinon, écrire $x^2 - k = (x - \\sqrt{k})(x + \\sqrt{k})$.',
      definitions: [
        { term: 'Développer', def: 'Transformer un <strong>produit</strong> en <strong>somme</strong>.<br/><br/>Exemple : $(a+b)^2$ devient $a^2 + 2ab + b^2$. On « ouvre » les parenthèses.' },
        { term: 'Factoriser', def: 'Transformer une <strong>somme</strong> en <strong>produit</strong> — l\'opération inverse du développement.<br/><br/>Exemple : $a^2 - b^2$ devient $(a+b)(a-b)$.' },
        { term: 'Identité remarquable', def: 'Égalité algébrique <strong>toujours vraie</strong>, quelles que soient les valeurs de $a$ et $b$. Il y en a trois à connaître par cœur en 3e.' },
        { term: 'Double produit', def: 'Le terme $2ab$ qui apparaît dans $(a+b)^2 = a^2 + \\boldsymbol{2ab} + b^2$. C\'est le terme le plus souvent <strong>oublié</strong> — source de l\'erreur classique $(a+b)^2 = a^2 + b^2$.' }
      ],
      method: {
        title: 'Les trois identités à retenir',
        steps: [
          '<strong>Identité 1 — Carré d\'une somme</strong> : $(a + b)^2 = a^2 + 2ab + b^2$.<br/><em>Exemple :</em> $(3+2)^2 = 9 + 12 + 4 = 25$ ✓',
          '<strong>Identité 2 — Carré d\'une différence</strong> : $(a - b)^2 = a^2 - 2ab + b^2$.<br/><em>Exemple :</em> $(7-3)^2 = 49 - 42 + 9 = 16$ ✓',
          '<strong>Identité 3 — Produit somme × différence</strong> : $(a + b)(a - b) = a^2 - b^2$.<br/><em>Exemple :</em> $101 \\times 99 = (100+1)(100-1) = 10\\,000 - 1 = 9\\,999$ ✓'
        ]
      },
      example: {
        statement: 'Développer $(3x + 2)^2$.',
        steps: [
          '<strong>Identifier $a$ et $b$</strong> : ici $a = 3x$ et $b = 2$. On applique la 1re identité : $(a+b)^2 = a^2 + 2ab + b^2$.',
          '<strong>Calculer chaque terme</strong> : $a^2 = (3x)^2 = 9x^2$, $2ab = 2 \\times 3x \\times 2 = 12x$, $b^2 = 2^2 = 4$.',
          '<strong>Assembler</strong> : $(3x+2)^2 = 9x^2 + 12x + 4$. On vérifie : pour $x = 1$, $(3+2)^2 = 25$ et $9 + 12 + 4 = 25$ ✓'
        ],
        answer: '$(3x+2)^2 = 9x^2 + 12x + 4$.'
      },
      formulas: [
        '$(a+b)^2 = a^2 + 2ab + b^2$',
        '$(a-b)^2 = a^2 - 2ab + b^2$',
        '$(a+b)(a-b) = a^2 - b^2$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Preuve géométrique',
        title: 'Le carré $(a+b)^2$ découpé en quatre aires',
        description: 'Chaque partie du carré correspond à un terme de l\'identité remarquable : deux carrés et deux rectangles identiques, illustrés ici avec $a = 3$ et $b = 2$ (le même exemple que dans la méthode ci-dessus).',
        svg: `
          <svg viewBox="0 0 380 320" role="img" aria-labelledby="identites-graph-title identites-graph-desc">
            <title id="identites-graph-title">Decoupage du carre (a+b) au carre en quatre aires</title>
            <desc id="identites-graph-desc">Le schema montre un carre de cote a+b decoupe en un carre a au carre, deux rectangles ab, et un carre b au carre, avec a = 3 et b = 2.</desc>
            <rect x="60" y="40" width="144" height="144" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></rect>
            <rect x="204" y="40" width="96" height="144" fill="color-mix(in srgb, var(--accent) 16%, transparent)" stroke="none"></rect>
            <rect x="60" y="184" width="144" height="96" fill="color-mix(in srgb, var(--accent) 16%, transparent)" stroke="none"></rect>
            <rect x="204" y="184" width="96" height="96" fill="color-mix(in srgb, var(--secondary) 18%, transparent)" stroke="none"></rect>
            <rect x="60" y="40" width="240" height="240" fill="none" class="frame-line"></rect>
            <line class="frame-line" x1="204" y1="40" x2="204" y2="280"></line>
            <line class="frame-line" x1="60" y1="184" x2="300" y2="184"></line>
            <line class="guide-line" x1="60" y1="26" x2="204" y2="26"></line>
            <line class="guide-line" x1="60" y1="22" x2="60" y2="30"></line>
            <line class="guide-line" x1="204" y1="22" x2="204" y2="30"></line>
            <text class="annotation-label" text-anchor="middle" x="132" y="18">a</text>
            <line class="guide-line" x1="204" y1="26" x2="300" y2="26"></line>
            <line class="guide-line" x1="300" y1="22" x2="300" y2="30"></line>
            <text class="annotation-label" text-anchor="middle" x="252" y="18">b</text>
            <line class="guide-line" x1="46" y1="40" x2="46" y2="184"></line>
            <line class="guide-line" x1="42" y1="40" x2="50" y2="40"></line>
            <line class="guide-line" x1="42" y1="184" x2="50" y2="184"></line>
            <text class="annotation-label" text-anchor="middle" x="30" y="116">a</text>
            <line class="guide-line" x1="46" y1="184" x2="46" y2="280"></line>
            <line class="guide-line" x1="42" y1="280" x2="50" y2="280"></line>
            <text class="annotation-label" text-anchor="middle" x="30" y="236">b</text>
            <text class="annotation-label" text-anchor="middle" x="132" y="104">a²</text>
            <text class="tick-label" text-anchor="middle" x="132" y="122">3 × 3 = 9</text>
            <text class="annotation-label" text-anchor="middle" x="252" y="104">ab</text>
            <text class="tick-label" text-anchor="middle" x="252" y="122">3 × 2 = 6</text>
            <text class="annotation-label" text-anchor="middle" x="132" y="224">ab</text>
            <text class="tick-label" text-anchor="middle" x="132" y="242">2 × 3 = 6</text>
            <text class="annotation-label" text-anchor="middle" x="252" y="224">b²</text>
            <text class="tick-label" text-anchor="middle" x="252" y="242">2 × 2 = 4</text>
            <text class="annotation-label" text-anchor="middle" x="190" y="304">(3 + 2)² = 9 + 6 + 6 + 4 = 25</text>
          </svg>
        `,
        notes: [
          'Le carré de côté $(a+b)$ se découpe en 4 rectangles : un carré $a^2$, un carré $b^2$, et deux rectangles identiques d\'aire $ab$.',
          'Les deux rectangles $ab$ ont la même aire : c\'est exactement le terme $2ab$ souvent oublié dans $(a+b)^2 = a^2 + 2ab + b^2$.',
          'Avec $a = 3$ et $b = 2$ : $9 + 6 + 6 + 4 = 25$, ce qui correspond bien à $(3+2)^2 = 5^2 = 25$.'
        ],
        reading: 'L\'aire totale du grand carré, $(a+b)^2$, est la somme des 4 aires internes : c\'est une preuve visuelle de l\'identité remarquable.',
        caption: 'Découpage géométrique de $(a+b)^2 = a^2 + 2ab + b^2$, illustré avec $a = 3$ et $b = 2$ (exemple repris de la méthode).'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. Le chapitre porte trois identités, et il
         aurait été facile d'en faire trois figures — une par formule. Ce n'est
         pas ce qui est fait ici : la première identité a déjà SA figure (le
         découpage du carré, ci-dessus), et redessiner les deux autres de la
         même façon n'apprendrait rien à personne. Les trois malentendus retenus
         sont ceux qui font perdre des points au brevet :

           1. « $(a+b)^2 = a^2 + b^2$ » — l'erreur la plus fréquente de toute
              l'algèbre du collège. La figure du cours la prévient en montrant
              les quatre morceaux ; celle-ci montre ce qu'on PERD à l'oublier,
              et la mesure est spectaculaire : 48 % du carré.
           2. « $a^2 - b^2$, on ne peut rien en faire » — l'élève sait
              développer $(a+b)(a-b)$ mais ne lit pas l'identité à l'envers.
              La figure découpe l'équerre et la recolle en rectangle.
           3. « toute somme de deux carrés se factorise aussi » — le symétrique
              faux de l'identité 3, que rien dans le cours ne contredit
              explicitement.

         TOUTES LES PROPORTIONS SONT CALCULÉES (traces dans les commentaires de
         chaque figure). Aucune couleur en dur : uniquement les variables du
         projet. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Ce que coûte le double produit oublié',
          description: 'Écrire $(a+b)^2 = a^2 + b^2$ ne revient pas à se tromper d\'un peu : avec $a = 6$ et $b = 4$, cette écriture <strong>oublie près de la moitié du carré</strong>. Les deux rectangles manquants sont visibles à l\'œil nu.',
          svg: `
            <svg viewBox="0 0 400 230" role="img" aria-labelledby="ident-double-title ident-double-desc">
              <title id="ident-double-title">Le carre complet et le carre ampute du double produit</title>
              <desc id="ident-double-desc">A gauche, le carre de cote a plus b, avec a valant 6 et b valant 4, est decoupe en quatre morceaux : le carre a au carre en bas a gauche, le carre b au carre en haut a droite, et les deux rectangles a fois b qui les relient ; son aire totale vaut cent. A droite, la meme figure ou seuls les deux carres sont conserves, les deux rectangles etant laisses vides et bordes de tirets ; l'aire conservee ne vaut plus que cinquante-deux, soit un peu plus de la moitie. La partie oubliee, quarante-huit unites, est exactement le double produit deux a b.</desc>

              <!-- GAUCHE : le carre complet. Cote total 170 unites SVG pour
                   a+b = 10, soit 17 unites par unite de longueur. a fait donc
                   102 et b fait 68. Le calcul JUSTE est a gauche et en teinte
                   d'accent : l'oeil le lit d'abord (patron « piege »). -->
              <text class="annotation-label" x="101" y="18" text-anchor="middle">le carré entier</text>
              <rect x="16" y="96" width="102" height="102" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect x="118" y="28" width="68" height="68" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect x="118" y="96" width="68" height="102" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" stroke="none"></rect>
              <rect x="16" y="28" width="102" height="68" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="16" y="28" width="170" height="170" fill="none"></rect>
              <line class="frame-line" x1="118" y1="28" x2="118" y2="198"></line>
              <line class="frame-line" x1="16" y1="96" x2="186" y2="96"></line>
              <text class="annotation-label" x="67" y="152" text-anchor="middle">36</text>
              <text class="annotation-label" x="152" y="66" text-anchor="middle">16</text>
              <text class="tick-label" x="152" y="152" text-anchor="middle">24</text>
              <text class="tick-label" x="67" y="66" text-anchor="middle">24</text>
              <text class="annotation-label" x="101" y="218" text-anchor="middle">total 100</text>

              <!-- DROITE : la meme figure amputee. Les deux rectangles sont
                   VIDES et bordes de tirets, en teinte faible : c'est l'erreur,
                   et elle est en dessous du juste dans l'ordre de lecture de
                   gauche a droite. Meme echelle et meme ligne de base que la
                   figure de gauche (patron « comparaison ») : la seule
                   difference visible est le remplissage. -->
              <text class="label-soft" x="299" y="18" text-anchor="middle">ce que garde a² + b²</text>
              <rect x="214" y="96" width="102" height="102" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect x="316" y="28" width="68" height="68" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect x="316" y="96" width="68" height="102" fill="none" stroke="color-mix(in srgb, var(--text-muted) 40%, transparent)" stroke-dasharray="5 4"></rect>
              <rect x="214" y="28" width="102" height="68" fill="none" stroke="color-mix(in srgb, var(--text-muted) 40%, transparent)" stroke-dasharray="5 4"></rect>
              <rect class="frame-line" x="214" y="28" width="170" height="170" fill="none"></rect>
              <text class="annotation-label" x="265" y="152" text-anchor="middle">36</text>
              <text class="annotation-label" x="350" y="66" text-anchor="middle">16</text>
              <text class="label-soft" x="350" y="152" text-anchor="middle">oublié</text>
              <text class="label-soft" x="265" y="66" text-anchor="middle">oublié</text>
              <text class="label-soft" x="299" y="218" text-anchor="middle">total 52</text>
            </svg>
          `,
          notes: [
            'Avec $a = 6$ et $b = 4$ : le carré entier vaut $(6+4)^2 = 100$, alors que $a^2 + b^2 = 36 + 16 = 52$.',
            'Ce qui manque est exactement le <strong>double produit</strong> : $2ab = 2 \\times 6 \\times 4 = 48$, soit les deux rectangles laissés vides.',
            '$48$ sur $100$, c\'est <strong>$48\\%$ du carré</strong>. L\'écriture $(a+b)^2 = a^2 + b^2$ n\'est pas une petite imprécision, elle perd presque la moitié de la surface.',
            '<strong>Le contrôle qui sauve</strong> : quand tu connais la valeur des lettres, calcule la parenthèse d\'abord. Ici $6 + 4 = 10$, donc $10^2 = 100$. Un écart avec ton développement signale l\'oubli immédiatement.'
          ],
          reading: 'Compare les deux figures : elles ont le même cadre et la même échelle, et la seule différence est ce qui est rempli. Les deux zones en tirets sont ce que le double produit apporte.',
          caption: 'Le carré $(a+b)^2$ complet à gauche, amputé de son double produit à droite, avec $a = 6$ et $b = 4$.'
        },
        {
          theme: 'maths',
          kicker: 'Pas à pas',
          title: 'Pourquoi $a^2 - b^2$ devient un rectangle',
          description: 'Retirer un petit carré à un grand laisse une <strong>équerre</strong>. Cette équerre se découpe en deux morceaux qui se recollent exactement en un rectangle de côtés $(a+b)$ et $(a-b)$ : c\'est la troisième identité, vue de ses propres yeux. Illustré avec $a = 5$ et $b = 2$.',
          svg: `
            <svg viewBox="0 0 446 190" role="img" aria-labelledby="ident-decoupe-title ident-decoupe-desc">
              <title id="ident-decoupe-title">De l equerre au rectangle</title>
              <desc id="ident-decoupe-desc">Trois vignettes de gauche a droite. Premiere vignette : un carre de cote cinq dont on a retire un petit carre de cote deux dans le coin en haut a droite ; il reste une equerre d aire vingt et un. Deuxieme vignette : la meme equerre, coupee en deux par un trait horizontal, ce qui donne une bande basse de cinq sur trois et une bande haute de trois sur deux. Troisieme vignette : les deux bandes remises bout a bout forment un rectangle de sept sur trois, d aire vingt et un elle aussi. Sept vaut cinq plus deux et trois vaut cinq moins deux, ce qui montre que a au carre moins b au carre egale a plus b fois a moins b.</desc>

              <!-- ECHELLE COMMUNE aux trois vignettes : 22 unites SVG par unite
                   de longueur. a = 5 -> 110, b = 2 -> 44, a-b = 3 -> 66,
                   a+b = 7 -> 154. Marge 10, gouttiere 26, d'ou les origines
                   x = 10, 146 et 282, et une largeur totale de 446 : le viewBox
                   EPOUSE le dessin, sans bande vide (section 9).
                   Les trois vignettes partagent la MEME LIGNE DE BASE y = 160 :
                   la comparaison des aires est lisible sans mesurer (patron
                   « pas a pas »). Aires controlees par calcul : 21 aux trois
                   etapes (21 = 25-4 = 6+15 = 7x3). -->

              <!-- VIGNETTE 1 : le carre a x a, ampute du carre b x b. Le contour
                   de l'equerre passe par (10,50) (76,50) (76,94) (120,94)
                   (120,160) (10,160) : le decrochement est bien a 66 = (a-b)*22
                   du bord gauche et a 44 = b*22 du bord haut. -->
              <text class="annotation-label" x="65" y="20" text-anchor="middle">on retire un carré</text>
              <path d="M 10 50 L 76 50 L 76 94 L 120 94 L 120 160 L 10 160 Z"
                    fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)" class="frame-line"></path>
              <rect x="76" y="50" width="44" height="44" fill="none"
                    stroke="color-mix(in srgb, var(--text-muted) 40%, transparent)" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="98" y="76" text-anchor="middle">retiré</text>
              <text class="annotation-label" x="45" y="128" text-anchor="middle">21</text>
              <text class="label-soft" x="65" y="178" text-anchor="middle">25 moins 4</text>

              <!-- VIGNETTE 2 : la meme equerre, coupee. Le trait de coupe est a
                   y = 94, c'est-a-dire a la hauteur du bas du petit carre : la
                   bande basse mesure a sur (a-b) = 5 sur 3 (aire 15), la bande
                   haute (a-b) sur b = 3 sur 2 (aire 6). Somme 21. -->
              <text class="annotation-label" x="201" y="20" text-anchor="middle">on la coupe en deux</text>
              <rect x="146" y="50" width="66" height="44" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" class="frame-line"></rect>
              <rect x="146" y="94" width="110" height="66" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" class="frame-line"></rect>
              <text class="tick-label" x="179" y="77" text-anchor="middle">6</text>
              <text class="annotation-label" x="201" y="132" text-anchor="middle">15</text>
              <text class="label-soft" x="201" y="178" text-anchor="middle">6 plus 15</text>

              <!-- VIGNETTE 3 : les deux bandes bout a bout. La bande de 6 est
                   posee A DROITE de la bande de 15, sur la meme hauteur de 66 :
                   elle occupe alors 44 de large (b) sur 66 de haut (a-b), soit
                   toujours 2 sur 3. Largeur totale 110 + 44 = 154 = (a+b)*22,
                   hauteur 66 = (a-b)*22. Fin du dessin a x = 436, marge droite
                   de 10 : rien ne sort du viewBox. -->
              <text class="annotation-label" x="359" y="20" text-anchor="middle">recollées</text>
              <rect x="282" y="94" width="110" height="66" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" class="frame-line"></rect>
              <rect x="392" y="94" width="44" height="66" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" class="frame-line"></rect>
              <text class="annotation-label" x="337" y="132" text-anchor="middle">15</text>
              <text class="tick-label" x="414" y="132" text-anchor="middle">6</text>
              <text class="label-soft" x="359" y="178" text-anchor="middle">7 sur 3, soit 21</text>
            </svg>
          `,
          notes: [
            'Le grand carré vaut $a^2 = 25$, le petit $b^2 = 4$ : l\'équerre qui reste a donc une aire de $21$.',
            'La coupe produit une bande de $a \\times (a-b) = 5 \\times 3 = 15$ et une bande de $(a-b) \\times b = 3 \\times 2 = 6$. Total : $21$, rien ne s\'est perdu.',
            'Recollées, ces deux bandes forment un rectangle de largeur $a + b = 7$ et de hauteur $a - b = 3$, d\'aire $7 \\times 3 = 21$.',
            'Ce que la figure démontre : $a^2 - b^2 = (a+b)(a-b)$, et ce, sans faire aucun calcul algébrique. L\'aire $21$ se retrouve aux trois étapes.'
          ],
          reading: 'Suis l\'aire $21$ d\'une vignette à l\'autre : c\'est toujours la même surface, simplement redécoupée. La troisième vignette est la forme dont les côtés portent les noms de l\'identité.',
          caption: 'De $a^2 - b^2$ à $(a+b)(a-b)$ : l\'équerre découpée puis recollée en rectangle, avec $a = 5$ et $b = 2$.'
        },
        {
          theme: 'maths',
          kicker: 'La limite de l\'identité',
          title: 'Une différence de carrés se factorise, une somme non',
          description: 'L\'identité $a^2 - b^2 = (a+b)(a-b)$ marche si bien qu\'on l\'applique aussi au cas $a^2 + b^2$, par symétrie. Or <strong>rien ne factorise une somme de deux carrés</strong>, et il n\'existe aucune identité « remarquable » pour elle.',
          svg: `
            <svg viewBox="0 0 380 168" role="img" aria-labelledby="ident-somme-title ident-somme-desc">
              <title id="ident-somme-title">Difference de carres et somme de carres</title>
              <desc id="ident-somme-desc">Deux encadres de meme taille. Celui du haut, en teinte d accent, montre la difference x au carre moins neuf, qui se factorise en x plus trois fois x moins trois ; le developpement redonne bien x au carre moins neuf. Celui du bas, en teinte faible et borde de tirets, montre la somme x au carre plus neuf : la factorisation x plus trois fois x plus trois y est barree, car son developpement donne x au carre plus six x plus neuf, avec un terme en six x qui n existe pas dans l expression de depart.</desc>

              <!-- LE CAS QUI MARCHE EN HAUT, en teinte d'accent : l'oeil lit le
                   haut d'abord (patron « piege »). -->
              <rect x="14" y="12" width="352" height="64" rx="10"
                    fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
              <text class="annotation-label" x="28" y="34">une différence de carrés : elle se factorise</text>
              <text class="annotation-label" x="28" y="56">x² − 9 = (x + 3)(x − 3)</text>
              <text class="tick-label" x="28" y="70">on redéveloppe : x² − 3x + 3x − 9 = x² − 9</text>

              <!-- LE CAS QUI NE MARCHE PAS EN DESSOUS, en teinte faible et en
                   trait tirete. -->
              <rect x="14" y="90" width="352" height="64" rx="10" fill="none"
                    stroke="color-mix(in srgb, var(--text-muted) 36%, transparent)"
                    stroke-dasharray="6 4"></rect>
              <text class="label-soft" x="28" y="112">une somme de carrés : aucune identité ne la factorise</text>
              <text class="label-soft" x="28" y="134">x² + 9 n est pas (x + 3)(x + 3)</text>
              <text class="label-soft" x="28" y="148">on redéveloppe : x² + 3x + 3x + 9 = x² + 6x + 9, il reste 6x</text>
            </svg>
          `,
          notes: [
            'Dans le cas de la <strong>différence</strong>, les deux termes croisés $-3x$ et $+3x$ s\'annulent : c\'est exactement ce qui fait fonctionner l\'identité.',
            'Dans le cas de la <strong>somme</strong>, les deux termes croisés valent tous les deux $+3x$ et s\'ajoutent : il reste $6x$, qui n\'était pas dans l\'expression de départ.',
            'C\'est la raison profonde, et elle tient en une phrase : l\'identité 3 ne marche que parce que le signe moins fait disparaître le terme en $x$.',
            '<strong>À retenir</strong> : $x^2 - 9$ se factorise, $x^2 + 9$ non. Devant une somme de deux carrés, la bonne réponse est « elle ne se factorise pas », et c\'est une réponse complète.'
          ],
          reading: 'Compare les deux dernières lignes : c\'est le même redéveloppement dans les deux cas, et seul le signe change. En haut il annule le terme en $x$, en bas il le double.',
          caption: 'La différence de deux carrés se factorise, la somme de deux carrés ne se factorise pas.'
        }
      ],
      recap: [
        '<strong>Ne jamais oublier $2ab$</strong> : $(a+b)^2 = a^2 + \\boldsymbol{2ab} + b^2$. L\'erreur $(a+b)^2 = a^2 + b^2$ est la plus fréquente en algèbre.',
        '<strong>$(a+b)(a-b) = a^2 - b^2$</strong> : identité idéale pour le calcul mental ($99 \\times 101 = 10000 - 1$) et pour factoriser une différence de deux carrés.',
        '<strong>$(a+b)^2 \\neq a^2 + b^2$</strong> : vérifier systématiquement avec des nombres simples quand on hésite (par exemple $a = 3$, $b = 4$).',
        '<strong>Factoriser</strong> : repérer un carré parfait ou une différence de carrés permet de revenir à un produit, utile pour résoudre des équations.'
      ],
      piege: 'Piège classique : $(a+b)^2 \\neq a^2 + b^2$. Il ne faut pas oublier le terme $2ab$ au milieu ! $(3+4)^2 = 49 \\neq 9 + 16 = 25$.'
    },
    quiz: [
      {
        q: 'Un élève développe $(3 + 4)^2 = 3^2 + 4^2 = 9 + 16 = 25$. Où est l\'erreur ?',
        options: [
          'Il a oublié le terme $2 \\times 3 \\times 4 = 24$ : le résultat correct est $9 + 24 + 16 = 49$',
          'Il a mal calculé $3^2$ et $4^2$',
          'Il n\'y a pas d\'erreur, $(3+4)^2 = 25$',
          'Il fallait calculer $(3+4)^2 = 7^2 = 49$, ce qui confirme que son résultat est faux'
        ],
        answer: 0,
        correction: '$(3+4)^2 = 7^2 = 49$, mais l\'élève a écrit $3^2 + 4^2 = 25$. Il a omis le terme croisé $2ab = 2 \\times 3 \\times 4 = 24$. La formule complète est $(a+b)^2 = a^2 + 2ab + b^2 = 9 + 24 + 16 = 49$. C\'est l\'erreur la plus classique des identités remarquables.'
      },
      {
        q: 'Factorise $x^2 - 9$.',
        options: ['$(x-3)^2$', '$(x+3)(x-3)$', '$(x-9)(x+1)$', 'Impossible'],
        answer: 1,
        correction: '$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$ (différence de deux carrés).'
      },
      {
        q: 'Quel est le résultat de $(2x - 3)^2$ ?',
        options: ['$4x^2 + 9$', '$4x^2 - 9$', '$4x^2 - 12x + 9$', '$4x^2 + 12x + 9$'],
        answer: 2,
        correction: '$(2x-3)^2 = (2x)^2 - 2 \\times 2x \\times 3 + 3^2 = 4x^2 - 12x + 9$.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : une seule tâche — « aire d'un rectangle de côtés $(a+b)$ et
         $(a-b)$ » — habillée de six décors tirés par pick(). Mesure à 40
         tirages : 6 moules d'énoncé, mais **1 seule tâche distincte**. Six
         métiers différents pour la même soustraction de deux carrés.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'aire'      : la tâche historique, conservée, car elle donne du
                           sens géométrique à $a^2 - b^2$ ;
           - 'mental'    : calculer $97 \times 103$ ou $98^2$ de tête, ce que
                           l'identité rend possible et rien d'autre ;
           - 'developper': développer $(mx + p)^2$ et rendre UN coefficient,
                           là où se perd le double produit ;
           - 'factoriser': reconnaître une différence de carrés et rendre la
                           valeur de $b$, donc lire l'identité à l'envers ;
           - 'carreparfait' : reconnaître un trinôme comme carré parfait, ce
                           qui demande de contrôler le double produit AVANT de
                           conclure — l'erreur 2 de la fiche professeur ;
           - 'difference': évaluer $A = (x+c)^2 - (x-c)^2$ pour un $x$ donné,
                           en passant par la factorisation $4cx$ plutôt que par
                           deux développements ;
           - 'gain'      : comparer l'aire du carré de côté $a$ à celle du
                           rectangle $(a+b)(a-b)$, c'est-à-dire trouver $b^2$ :
                           le rapport entre les deux identités.

         Chaque tâche garde ses propres contextes variés par pick(). Aucune
         valeur à décimale n'est produite : toutes les réponses sont entières,
         donc aucune interpolation n'a besoin de fr() ici — c'est vérifié par
         scripts/check-decimal-notation.js. */
      generate() {
        const tache = pick(['aire', 'aire', 'mental', 'developper', 'factoriser', 'carreparfait', 'difference', 'gain']);

        if (tache === 'aire') {
          const a = rand(5, 12), b = rand(1, a - 1);
          const val = a * a - b * b;
          const ctx = pick([
            { qui: 'Un jardinier trace un <strong>potager rectangulaire</strong>', quoi: 'ce potager' },
            { qui: 'Un menuisier construit une <strong>terrasse</strong> rectangulaire', quoi: 'cette terrasse' },
            { qui: 'Un agriculteur délimite une <strong>parcelle rectangulaire</strong>', quoi: 'cette parcelle' },
            { qui: 'Un technicien installe un <strong>panneau solaire</strong> rectangulaire', quoi: 'ce panneau' },
            { qui: 'Un paysagiste creuse une <strong>piscine rectangulaire</strong>', quoi: 'cette piscine' }
          ]);
          return {
            statement: `${ctx.qui} de longueur $(${a}+${b})$ m et de largeur $(${a}-${b})$ m.<br/><br/>` +
              `Sans développer le produit, calcule l'<strong>aire</strong> de ${ctx.quoi}, en m², grâce à l'identité $(a+b)(a-b) = a^2 - b^2$.`,
            answer: val,
            tolerance: 0,
            unit: 'm²',
            figure: figureRectangle(a + b, a - b, { unite: 'm' }),
            hint: `Identifie $a = ${a}$ et $b = ${b}$.<br/><br/>L'aire vaut alors $a^2 - b^2 = ${a}^2 - ${b}^2$, sans aucun développement à écrire.`,
            solution: [
              `Les deux côtés ont la forme $(a+b)$ et $(a-b)$ avec $a = ${a}$ et $b = ${b}$.`,
              `L'identité donne directement $(${a}+${b})(${a}-${b}) = ${a}^2 - ${b}^2$.`,
              `$= ${a * a} - ${b * b} = ${val}$ m².`
            ]
          };
        }

        if (tache === 'mental') {
          /* Le calcul mental est la raison d'être historique de ces identités.
             Deux variantes : un produit somme fois différence, et un carré
             proche d'une puissance de dix. Les deux se font de tête. */
          const forme = pick(['produit', 'carre']);
          if (forme === 'produit') {
            const b = pick([1, 2, 3, 4, 5, 6, 7]);
            const val = 10000 - b * b;
            const ctx = pick([
              'Sans calculatrice et sans poser la multiplication',
              'De tête, en moins de dix secondes',
              'En une seule ligne de calcul'
            ]);
            return {
              statement: `${ctx}, calcule <strong>$${100 - b} \\times ${100 + b}$</strong>.<br/><br/>` +
                `Indication : ces deux nombres sont placés symétriquement autour de $100$.`,
              answer: val,
              tolerance: 0,
              unit: '',
              hint: `Écris $${100 - b} = 100 - ${b}$ et $${100 + b} = 100 + ${b}$.<br/><br/>Tu reconnais alors $(a-b)(a+b)$, avec $a = 100$.`,
              solution: [
                `$${100 - b} \\times ${100 + b} = (100 - ${b})(100 + ${b})$.`,
                `C'est la troisième identité, $(a-b)(a+b) = a^2 - b^2$, avec $a = 100$ et $b = ${b}$.`,
                `$= 100^2 - ${b}^2 = 10\\,000 - ${b * b} = ${val}$.`
              ]
            };
          }
          const b = pick([1, 2, 3, 4, 6, 7]);
          const sens = pick(['moins', 'plus']);
          const n = sens === 'moins' ? 100 - b : 100 + b;
          const val = n * n;
          return {
            statement: `Sans calculatrice, calcule <strong>$${n}^2$</strong>.<br/><br/>` +
              `Indication : $${n} = 100 ${sens === 'moins' ? '-' : '+'} ${b}$.`,
            answer: val,
            tolerance: 0,
            unit: '',
            hint: `Applique $(a ${sens === 'moins' ? '-' : '+'} b)^2 = a^2 ${sens === 'moins' ? '-' : '+'} 2ab + b^2$ avec $a = 100$ et $b = ${b}$.<br/><br/>N'oublie pas le double produit $2ab$ : c'est lui qui fait tout le travail.`,
            solution: [
              `$${n}^2 = (100 ${sens === 'moins' ? '-' : '+'} ${b})^2$.`,
              `$= 100^2 ${sens === 'moins' ? '-' : '+'} 2 \\times 100 \\times ${b} + ${b}^2 = 10\\,000 ${sens === 'moins' ? '-' : '+'} ${200 * b} + ${b * b}$.`,
              `$= ${val}$.<br/><br/>Contrôle : sans le double produit on aurait trouvé $${10000 + b * b}$, un résultat ${sens === 'moins' ? 'plus grand' : 'plus petit'} que $${val}$ — le signe que le terme central avait été oublié.`
            ]
          };
        }

        if (tache === 'developper') {
          /* On ne demande QU'UN coefficient, pas l'expression entière : c'est
             la seule façon de poser une question à réponse numérique sur un
             développement, et le coefficient demandé est justement celui du
             double produit, le terme que l'élève oublie. */
          const m = rand(2, 6), p = rand(2, 9);
          const signe = pick(['+', '-']);
          const coef = (signe === '+' ? 2 : -2) * m * p;
          const ctx = pick([
            'Un exercice de brevet demande de développer',
            'Pour simplifier une expression, tu dois développer',
            'Avant de résoudre une équation, il faut développer'
          ]);
          return {
            statement: `${ctx} l'expression $(${m}x ${signe} ${p})^2$.<br/><br/>` +
              `Une fois le développement écrit sous la forme $\\alpha x^2 + \\beta x + \\gamma$, quelle est la valeur du coefficient <strong>$\\beta$</strong>, celui du terme en $x$ ?`,
            answer: coef,
            tolerance: 0,
            unit: '',
            hint: `Pose $a = ${m}x$ et $b = ${p}$.<br/><br/>Le terme en $x$ vient du double produit $${signe === '+' ? '' : '-'}2ab$, donc de $2 \\times ${m}x \\times ${p}$.`,
            solution: [
              `On identifie $a = ${m}x$ et $b = ${p}$, puis on applique $(a ${signe} b)^2 = a^2 ${signe} 2ab + b^2$.`,
              `$a^2 = ${m * m}x^2$, le double produit vaut $2 \\times ${m}x \\times ${p} = ${2 * m * p}x$, et $b^2 = ${p * p}$.`,
              `Donc $(${m}x ${signe} ${p})^2 = ${m * m}x^2 ${signe} ${2 * m * p}x + ${p * p}$, et le coefficient cherché est $\\beta = ${coef}$.`
            ]
          };
        }

        if (tache === 'factoriser') {
          /* Lire l'identité À L'ENVERS : partir d'une somme et retrouver le
             produit. C'est l'opération dont le brevet a besoin pour résoudre
             une équation-produit, et elle demande de reconnaître un carré. */
          const m = pick([1, 2, 3, 4, 5, 6]);
          const b = rand(2, 12);
          const carre = b * b;
          const ctx = pick([
            'Pour résoudre une équation, tu commences par factoriser',
            'Un exercice demande de factoriser',
            'Avant de simplifier une fraction, il faut factoriser'
          ]);
          const expr = m === 1 ? `x^2 - ${carre}` : `${m * m}x^2 - ${carre}`;
          const gauche = m === 1 ? 'x' : `${m}x`;
          return {
            statement: `${ctx} l'expression $${expr}$.<br/><br/>` +
              `Elle s'écrit sous la forme $(${gauche} + b)(${gauche} - b)$.<br/><br/>Quelle est la valeur de <strong>$b$</strong> ?`,
            answer: b,
            tolerance: 0,
            unit: '',
            hint: `Une différence de deux carrés se factorise en $(a+b)(a-b)$.<br/><br/>Ici $a = ${gauche}$, puisque $${gauche === 'x' ? 'x' : m + 'x'}$ au carré vaut $${m === 1 ? '' : m * m}x^2$. Reste à trouver le nombre dont le carré vaut $${carre}$.`,
            solution: [
              `L'expression est une <strong>différence de deux carrés</strong> : $${expr} = (${gauche})^2 - ${b}^2$.`,
              `En effet $(${gauche})^2 = ${m === 1 ? 'x^2' : m * m + 'x^2'}$ et $${b}^2 = ${carre}$.`,
              `L'identité $a^2 - b^2 = (a+b)(a-b)$ donne $${expr} = (${gauche} + ${b})(${gauche} - ${b})$, donc $b = ${b}$.`
            ]
          };
        }

        if (tache === 'carreparfait') {
          /* RECONNAÎTRE, pas appliquer. L'élève reçoit un trinôme et doit dire
             s'il est ou non un carré parfait : la seule manière de trancher
             est de contrôler le double produit, ce qui est exactement le geste
             qui manque quand l'erreur classique se produit. Une fois sur deux
             le trinôme est truqué, avec un terme central faux d'aussi peu que
             possible pour que l'oeil ne puisse pas décider. */
          const m = pick([1, 2, 3]);
          const p = rand(2, 8);
          const juste = Math.random() > 0.5;
          const central = juste ? 2 * m * p : 2 * m * p + pick([-2, 2, -4, 4]);
          const gauche = m === 1 ? 'x' : `${m}x`;
          const expr = `${m === 1 ? '' : m * m}x^2 + ${central}x + ${p * p}`;
          const ctx = pick([
            'Un camarade affirme que cette expression est le carré d\'une somme',
            'Sur une copie, cette expression est factorisée en un carré',
            'Un logiciel de calcul propose de factoriser cette expression en un carré'
          ]);
          return {
            statement: `${ctx} :<br/><br/>$${expr}$, factorisée en $(${gauche} + ${p})^2$.<br/><br/>` +
              `Cette factorisation est-elle correcte ? Réponds par $1$ pour oui, $0$ pour non.`,
            answer: juste ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Développe $(${gauche} + ${p})^2$ et compare les <strong>trois</strong> termes, pas seulement le premier et le dernier.<br/><br/>Le terme du milieu doit valoir $2 \\times ${gauche} \\times ${p}$.`,
            solution: [
              `On développe le carré proposé : $(${gauche} + ${p})^2 = ${m === 1 ? '' : m * m}x^2 + ${2 * m * p}x + ${p * p}$.`,
              `Les termes extrêmes concordent dans les deux cas : $${m === 1 ? '' : m * m}x^2$ et $${p * p}$. C'est le <strong>double produit</strong> qui décide.`,
              juste
                ? `Le terme du milieu proposé vaut $${central}x$, et le double produit vaut bien $2 \\times ${m} \\times ${p} = ${2 * m * p}$. La factorisation est correcte : réponse $1$.`
                : `Le terme du milieu proposé vaut $${central}x$, alors que le double produit vaut $2 \\times ${m} \\times ${p} = ${2 * m * p}$. Ce n'est donc pas un carré parfait : réponse $0$.<br/><br/>L'écart est petit, et c'est bien pour cela qu'on ne peut pas trancher à l'œil : seul le calcul du double produit le voit.`
            ]
          };
        }

        if (tache === 'difference') {
          /* $(x+c)^2 - (x-c)^2 = 4cx$. Deux développements donnent la réponse,
             mais l'identité la donne en une ligne : c'est une tâche où la
             méthode astucieuse se voit, parce qu'elle est spectaculairement
             plus courte. */
          const c = rand(2, 9);
          const x = rand(2, 12);
          const val = 4 * c * x;
          const ctx = pick([
            { d: 'Un carré de côté $x$ cm voit un côté allongé de $' + c + '$ cm ; un autre carré de même côté voit un côté raccourci de $' + c + '$ cm.', q: 'la différence entre les aires des deux rectangles obtenus' },
            { d: 'Deux plaques carrées de côté $x$ cm sont retaillées : la première gagne $' + c + '$ cm sur chaque côté, la seconde en perd $' + c + '$ sur chaque côté.', q: 'de combien l\'aire de la première dépasse celle de la seconde' }
          ]);
          return {
            statement: `${ctx.d}<br/><br/>On pose $A = (x + ${c})^2 - (x - ${c})^2$, qui mesure ${ctx.q}.<br/><br/>` +
              `Calcule la valeur de <strong>$A$</strong> pour $x = ${x}$.`,
            answer: val,
            tolerance: 0,
            unit: '',
            hint: `Tu peux développer les deux carrés, mais il y a beaucoup plus rapide.<br/><br/>$A$ est une <strong>différence de deux carrés</strong> : $A = [(x+${c}) + (x-${c})] \\times [(x+${c}) - (x-${c})]$.`,
            solution: [
              `$A$ est une différence de deux carrés, avec $a = x + ${c}$ et $b = x - ${c}$ : $A = (a+b)(a-b)$.`,
              `$a + b = 2x$ et $a - b = ${2 * c}$, donc $A = 2x \\times ${2 * c} = ${4 * c}x$.<br/><br/>Les $x^2$ se sont éliminés : $A$ ne dépend plus que de $x$, au premier degré.`,
              `Pour $x = ${x}$ : $A = ${4 * c} \\times ${x} = ${val}$.`
            ]
          };
        }

        /* tache === 'gain' : comparer le carré de côté $a$ au rectangle
           $(a+b)(a-b)$. La différence vaut TOUJOURS $b^2$, quel que soit $a$,
           et c'est ce fait-là qui surprend. L'élève doit relier les deux
           identités du chapitre plutôt que d'en appliquer une. */
        const a = rand(6, 15), b = rand(1, 5);
        const ctx = pick([
          { d: 'Un éleveur possède un enclos <strong>carré</strong> de $' + a + '$ m de côté. Il le remplace par un enclos rectangulaire obtenu en allongeant un côté de $' + b + '$ m et en raccourcissant l\'autre de $' + b + '$ m.', q: 'Combien de mètres carrés a-t-il <strong>perdus</strong> dans l\'opération ?' },
          { d: 'Une plaque <strong>carrée</strong> de $' + a + '$ cm de côté est retaillée en un rectangle : un côté gagne $' + b + '$ cm, l\'autre en perd $' + b + '$.', q: 'Quelle aire, en cm², la plaque a-t-elle <strong>perdue</strong> ?' },
          { d: 'Un champ <strong>carré</strong> de $' + a + '$ m de côté est redécoupé en un champ rectangulaire dont un côté est allongé de $' + b + '$ m et l\'autre raccourci de $' + b + '$ m.', q: 'Quelle surface, en m², le propriétaire a-t-il <strong>perdue</strong> ?' }
        ]);
        return {
          statement: `${ctx.d}<br/><br/>Le périmètre n'a pas changé.<br/><br/>${ctx.q}`,
          answer: b * b,
          tolerance: 0,
          unit: '',
          hint: `L'aire du carré vaut $${a}^2$. Celle du rectangle vaut $(${a}+${b})(${a}-${b})$.<br/><br/>L'identité te donne la seconde sans la calculer : $(a+b)(a-b) = a^2 - b^2$.`,
          solution: [
            `Aire du carré : $${a}^2 = ${a * a}$.`,
            `Aire du rectangle : $(${a}+${b})(${a}-${b}) = ${a}^2 - ${b}^2 = ${a * a} - ${b * b} = ${a * a - b * b}$.`,
            `La perte vaut $${a * a} - ${a * a - b * b} = ${b * b}$, c'est-à-dire $${b}^2$.<br/><br/>Remarque : la perte ne dépend <strong>pas</strong> de $${a}$. Avec un carré de n'importe quel côté, allonger d'un côté et raccourcir de l'autre de la même longueur fait toujours perdre $b^2$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un carré de côté $x$ cm subit une modification : on agrandit un côté de $3$ cm et on réduit l\'autre de $3$ cm, formant un rectangle.',
      tasks: [
        'Exprimer l\'aire du rectangle en fonction de $x$.',
        'Utiliser une identité remarquable pour simplifier.',
        'Si $x = 10$ cm, comparer l\'aire du carré original et celle du rectangle.'
      ],
      solutions: [
        'Aire rectangle $= (x+3)(x-3)$.',
        '$(x+3)(x-3) = x^2 - 9$.',
        'Carré : $10^2 = 100$ cm². Rectangle : $10^2 - 9 = 91$ cm². Le rectangle est plus petit de $9$ cm².'
      ],
      finalAnswer: 'L\'aire du rectangle est $x^2 - 9$ cm², toujours $9$ cm² de moins que le carré.'
    },

    evaluation: {
      title: 'Évaluation — Identités remarquables',
      duration: '25 min',
      questions: [
        {
          statement: 'Développer $(3x + 5)^2$. Le coefficient du terme en $x$ est :',
          type: 'numeric',
          answer: 30,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(3x + 5)^2 = (3x)^2 + 2 \\times 3x \\times 5 + 5^2 = 9x^2 + 30x + 25$. Le coefficient du terme en $x$ est $30$.'
        },
        {
          statement: 'Factoriser $x^2 - 16$.',
          type: 'multiple-choice',
          options: ['$(x - 4)^2$', '$(x + 4)(x - 4)$', '$(x - 8)(x + 2)$', '$(x + 16)(x - 1)$'],
          answer: 1,
          points: 2,
          correction: '$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$ (troisième identité remarquable : $a^2 - b^2 = (a+b)(a-b)$).'
        },
        /* Q3 RÉÉCRITE le 2026-09-13. Elle demandait « calcule $97^2$ avec
           l'indication $97 = 100 - 3$ » : l'indication faisait tout le travail
           de reconnaissance, et il ne restait qu'une application de formule —
           une TROISIÈME question de calcul dans une évaluation qui n'en
           comptait que cinq.

           Elle demande maintenant de CONCLURE : partant d'un fait établi sur
           un exemple, l'élève doit dire ce qui est vrai en général, et c'est
           l'algèbre seule qui tranche puisqu'aucun exemple ne peut prouver un
           « toujours ». C'est exactement « raisonner » au sens du référentiel,
           et c'est ce que le brevet appelle « justifier ». La bonne réponse
           impose de voir que $(a+b)(a-b) = a^2 - b^2$ retire toujours $b^2$,
           quel que soit $a$ — ce que la tâche 'gain' du générateur entraîne. */
        {
          statement: 'Youssef part d\'un carré de côté $12$ cm. Il allonge un côté de $2$ cm et raccourcit l\'autre de $2$ cm : il obtient un rectangle de $14$ cm sur $10$ cm, d\'aire $140$ cm², alors que le carré avait une aire de $144$ cm². Il a donc perdu $4$ cm².<br/><br/>' +
            'Il refait l\'expérience avec un carré de côté $20$ cm, toujours en ajoutant et en retirant $2$ cm : il perd encore $4$ cm².<br/><br/>' +
            'Que peut-on affirmer <strong>avec certitude</strong> ?',
          type: 'multiple-choice',
          options: [
            'Pour un carré de n\'importe quel côté, ajouter $2$ cm d\'un côté et en retirer $2$ de l\'autre fait toujours perdre $4$ cm², car $(a+2)(a-2) = a^2 - 4$.',
            'Rien de sûr : deux exemples ne suffisent pas, il faudrait en essayer beaucoup d\'autres avant de conclure.',
            'La perte est toujours de $4$ cm² tant que le côté du carré reste inférieur à $20$ cm.',
            'La perte augmente avec le côté du carré, mais si lentement qu\'elle est restée à $4$ cm² sur ces deux essais.'
          ],
          answer: 0,
          points: 2,
          correction: 'Les deux essais ne <strong>prouvent</strong> rien à eux seuls — c\'est l\'algèbre qui prouve, et elle le fait en une ligne.<br/><br/>' +
            'Si le carré a pour côté $a$, le rectangle mesure $(a+2)$ sur $(a-2)$, donc son aire vaut $(a+2)(a-2)$.<br/><br/>' +
            'La troisième identité remarquable donne $(a+2)(a-2) = a^2 - 2^2 = a^2 - 4$.<br/><br/>' +
            'La perte vaut donc $a^2 - (a^2 - 4) = 4$ cm², et la lettre $a$ a disparu : <strong>le résultat ne dépend pas du côté du carré</strong>. Les deux essais de Youssef n\'étaient pas une preuve, ils étaient une piste ; l\'identité, elle, vaut pour tous les carrés d\'un coup.'
        },
        /* Q4 RÉÉCRITE le 2026-09-13. Elle demandait de développer
           $(4x-1)(4x+1)$ : la forme $(a+b)(a-b)$ était affichée telle quelle,
           il n'y avait rien à chercher. La nouvelle version cache l'identité
           derrière une écriture qui ne lui ressemble pas — l'élève doit
           d'abord remarquer que $x^4$ est le carré de $x^2$, puis que le
           facteur obtenu se factorise ENCORE. Rien dans l'énoncé ne signale
           cette seconde étape : c'est ce qui en fait « chercher ». */
        {
          statement: 'On veut factoriser <strong>complètement</strong> l\'expression $x^4 - 16$, c\'est-à-dire aller jusqu\'au moment où plus aucun facteur ne peut être factorisé.<br/><br/>' +
            'Quelle est la factorisation complète ?',
          type: 'multiple-choice',
          options: [
            '$(x^2 + 4)(x + 2)(x - 2)$',
            '$(x^2 + 4)(x^2 - 4)$',
            '$(x^2 - 4)^2$',
            '$(x + 2)(x - 2)$'
          ],
          answer: 0,
          points: 2,
          correction: 'Le point à repérer est que $x^4$ est le <strong>carré</strong> de $x^2$ : $x^4 = (x^2)^2$. Et $16 = 4^2$.<br/><br/>' +
            'L\'expression est donc une différence de deux carrés : $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)$.<br/><br/>' +
            'C\'est la réponse b, et beaucoup s\'arrêtent là. Or le second facteur est <strong>lui aussi</strong> une différence de deux carrés : $x^2 - 4 = x^2 - 2^2 = (x + 2)(x - 2)$.<br/><br/>' +
            'D\'où la factorisation complète : $x^4 - 16 = (x^2 + 4)(x + 2)(x - 2)$.<br/><br/>' +
            'Le facteur $x^2 + 4$, lui, est une <strong>somme</strong> de deux carrés : aucune des trois identités ne la factorise, et on s\'arrête.'
        },
        /* Q5 RÉÉCRITE le 2026-09-13. Elle demandait la valeur simplifiée de
           $A = (x+3)^2 - (x-3)^2$ : un calcul de plus, et le QUATRIÈME de
           l'évaluation. Elle demande maintenant de juger le raisonnement
           CHIFFRÉ d'une élève nommée et de dire quelle affirmation explique le
           mieux pourquoi il échoue — produire une explication, pas un nombre.
           C'est « communiquer ». L'erreur soumise au jugement est l'oubli du
           double produit, c'est-à-dire l'erreur 1 de la fiche professeur, et
           l'option correcte nomme à la fois la cause ET le contrôle qui
           l'aurait évitée. */
        {
          statement: 'Nora doit calculer $(x + 5)^2$ pour $x = 3$.<br/><br/>' +
            'Elle écrit : « $(x+5)^2 = x^2 + 5^2 = 9 + 25 = 34$. »<br/><br/>' +
            'Son résultat est faux : la bonne valeur est $64$.<br/><br/>' +
            'Quelle affirmation explique le mieux pourquoi son calcul échoue ?',
          type: 'multiple-choice',
          options: [
            'Elle a oublié le double produit $2 \\times x \\times 5 = 30$ : $(x+5)^2 = x^2 + 10x + 25$. Elle aurait pu s\'en apercevoir en calculant d\'abord $x + 5 = 8$, puis $8^2 = 64$.',
            'Elle s\'est trompée dans le calcul de $3^2$, qui vaut $6$ et non $9$.',
            'Elle ne pouvait pas élever une somme au carré : il fallait d\'abord factoriser $x + 5$.',
            'Elle a bien appliqué l\'identité, mais elle aurait dû trouver $x^2 - 10x + 25$ à cause du signe.'
          ],
          answer: 0,
          points: 2,
          correction: 'Chacun des deux carrés que Nora a calculés est juste : $3^2 = 9$ et $5^2 = 25$. C\'est l\'<strong>égalité de départ</strong> qui est fausse.<br/><br/>' +
            '$(a+b)^2$ ne vaut pas $a^2 + b^2$ : il manque le <strong>double produit</strong> $2ab$. Ici $2 \\times 3 \\times 5 = 30$, et $9 + 30 + 25 = 64$, la bonne valeur.<br/><br/>' +
            '<strong>Le contrôle qui aurait suffi</strong> : quand on connaît la valeur de $x$, on peut toujours calculer la parenthèse d\'abord. $x + 5 = 8$, donc $(x+5)^2 = 8^2 = 64$. Un seul calcul, aucune formule, et l\'écart avec $34$ saute aux yeux.<br/><br/>' +
            'Cette vérification par un exemple numérique ne remplace pas l\'identité, mais elle détecte l\'oubli du double produit à tous les coups.'
        }
      ]
    }
  }
);
