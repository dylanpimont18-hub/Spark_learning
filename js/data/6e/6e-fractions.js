/* =========================================================
   Spark Learning – data/6e/6e-fractions.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-fractions',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Fractions',
    subtitle: 'Nommer, simplifier, comparer',
    keywords: ['Numérateur', 'Dénominateur', 'Simplification', 'Fraction irréductible', 'Comparaison'],
    // 2026-09-12 : ce champ annoncait « Fraction massique, fraction volumique,
    // rapport de grandeurs en chimie » — un reliquat de generation, sans rapport
    // avec la sixieme (la fraction massique est une notion de lycee). Le manuel
    // l'imprimait sous « Prolongement possible ». Remplace par le prolongement
    // reel du cursus : l'egalite de fractions devient, en cinquieme, le
    // coefficient de proportionnalite.
    physics: 'La proportionnalité en cinquième : un tableau de proportionnalité n\'est rien d\'autre qu\'une suite de fractions égales, et le coefficient joue le rôle du facteur d\'amplification. Les pourcentages et les échelles de carte en découlent directement.',

    cours: {
      /* « Decouvrir » reecrit le 2026-09-13. L'ancienne version posait la
         notation a/b des sa premiere phrase : c'etait le pire cas du corpus.
         Entree retenue : le partage qui NE TOMBE PAS JUSTE (3 gateaux pour 4).
         Aucun entier ne repond, donc la fraction n'est pas un objet qu'on
         presente mais le seul moyen d'ecrire la reponse. Regle generalisable
         aux autres manuels : si l'on peut repondre a la question d'entree sans
         la notion du chapitre, la question est mal choisie. */
      intro: 'Quatre amis veulent se partager trois gâteaux identiques, sans rien jeter et sans que personne soit lésé. Chacun aura moins d\'un gâteau entier, c\'est certain — mais combien, exactement ?<br/><br/>' +
        'Essaie de répondre avec les nombres que tu connais déjà : $0$ est trop peu, $1$ est trop. Aucun nombre entier ne convient. Le partage ne « tombe pas juste », et pourtant la part de chacun existe bel et bien : on peut la découper, la poser sur une assiette, la comparer à celle du voisin.<br/><br/>' +
        'Il faut donc un nouveau type de nombre pour écrire ce résultat. Coupons chaque gâteau en quatre parts égales : cela fait $12$ parts, que l\'on distribue une à une. Chacun repart avec <strong>trois parts sur les quatre</strong> d\'un gâteau.<br/><br/>' +
        'C\'est exactement ce qu\'écrit une <strong>fraction</strong> : $\\dfrac{3}{4}$ se lit « trois quarts », soit $3$ parts d\'un tout découpé en $4$. Le nombre du bas dit en combien de parts on a coupé, celui du haut combien on en prend. Une seule écriture, et le partage impossible devient un résultat exact.<br/><br/>' +
        'Ce petit outil sert bien au-delà des gâteaux : une <strong>remise de $\\dfrac{1}{4}$</strong> sur un prix, une <strong>échelle de carte</strong>, la part d\'un terrain. Dès que l\'on partage ou que l\'on compare deux grandeurs, la fraction est là.',

      definitions: [
        { term: 'Fraction', def: 'Écriture $\\dfrac{a}{b}$ où $a$ est le numérateur et $b$ le dénominateur ($b \\neq 0$). Elle représente $a$ parts sur $b$.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun autre que $1$ : on ne peut plus la simplifier.' },
        { term: 'Diviseur commun', def: 'Nombre qui divise à la fois le numérateur et le dénominateur. Par exemple $3$ divise $6$ et $9$ : c\'est un diviseur commun de $\\dfrac{6}{9}$.' },
        { term: 'Fractions égales', def: '$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$ pour tout $k \\neq 0$. Multiplier ou diviser les deux termes par un même nombre ne change pas la valeur.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Simplifier</strong> : chercher un diviseur commun au numérateur et au dénominateur, diviser les deux par ce nombre, puis recommencer tant qu\'on en trouve un.<br/><br/><em>Exemple :</em> $\\dfrac{18}{24}$ — les deux sont pairs, on divise par $2$ : $\\dfrac{9}{12}$.<br/><br/>Les deux sont dans la table de $3$, on divise par $3$ : $\\dfrac{3}{4}$.<br/><br/>Vérifie : $3$ et $4$ n\'ont plus de diviseur commun → <strong>irréductible</strong> ✓',
          '<strong>Comparer</strong> : mettre les deux fractions au même dénominateur. Le plus simple est de multiplier les dénominateurs entre eux.<br/><br/><em>Exemple :</em> comparer $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ → dénominateur commun $3 \\times 5 = 15$.<br/><br/>On amplifie : $\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$.<br/><br/>Comme $10 > 9$, on conclut <strong>$\\dfrac{2}{3} > \\dfrac{3}{5}$</strong>.',
          '<strong>Convertir en décimal</strong> : poser la division du numérateur par le dénominateur. <em>Exemple :</em> $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Certaines divisions <strong>tombent juste</strong> et donnent une valeur exacte ; d\'autres ne s\'arrêtent jamais et se répètent indéfiniment : $\\dfrac{1}{3} = 0{,}333\\ldots$ On arrondit alors au rang demandé.',
          '<strong>Prendre une fraction d\'une quantité</strong> : partager d\'abord en autant de parts égales que le dénominateur, puis prendre autant de parts que le numérateur.<br/><br/><em>Exemple :</em> $\\dfrac{3}{4}$ de $28$ billes → une part vaut $28 \\div 4 = 7$ billes, et $3$ parts valent $3 \\times 7 = 21$ billes.'
        ]
      },
      example: {
        statement: 'Simplifier $\\dfrac{42}{56}$ et donner sa valeur décimale.',
        steps: [
          'Les deux nombres sont pairs : on divise par $2$. $\\dfrac{42}{56} = \\dfrac{21}{28}$.',
          'Les deux sont maintenant dans la table de $7$ : on divise par $7$. $\\dfrac{21}{28} = \\dfrac{3}{4}$.',
          'Vérification : $3$ et $4$ n\'ont plus aucun diviseur commun → irréductible ✓',
          'Valeur décimale : $3 \\div 4 = 0{,}75$.'
        ],
        answer: '$\\dfrac{42}{56} = \\dfrac{3}{4} = 0{,}75$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Équivalence de fractions',
        title: 'Trois façons de colorier la même moitié',
        description: 'Un disque, une bande de $6$ parts et une grille de $100$ cases : dans chaque cas, exactement la moitié est coloriée, donc $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.',
        svg: `
          <svg viewBox="0 0 400 205" role="img" aria-labelledby="fractions-diagram-title fractions-diagram-desc">
            <title id="fractions-diagram-title">Equivalence de fractions 1/2, 3/6 et 50/100</title>
            <desc id="fractions-diagram-desc">Un disque coupe en 2 parts avec une moitie coloree, une bande coupee en 6 parts avec 3 parts colorees, et une grille de 100 cases avec 50 cases colorees : les trois figures representent la meme proportion.</desc>
            <circle class="frame-line" cx="70" cy="100" r="54" fill="none"></circle>
            <path d="M70 46 A54 54 0 0 0 70 154 Z" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></path>
            <line class="grid-line" x1="70" y1="46" x2="70" y2="154"></line>
            <text class="annotation-label" x="70" y="188" text-anchor="middle" font-size="20">1/2</text>
            <text x="140" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="160" y="70" width="120" height="60" fill="none"></rect>
            <rect x="160" y="70" width="60" height="60" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="180" y1="70" x2="180" y2="130"></line>
            <line class="grid-line" x1="200" y1="70" x2="200" y2="130"></line>
            <line class="grid-line" x1="220" y1="70" x2="220" y2="130"></line>
            <line class="grid-line" x1="240" y1="70" x2="240" y2="130"></line>
            <line class="grid-line" x1="260" y1="70" x2="260" y2="130"></line>
            <text class="annotation-label" x="220" y="188" text-anchor="middle" font-size="20">3/6</text>
            <text x="296" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="312" y="60" width="80" height="80" fill="none"></rect>
            <rect x="312" y="60" width="80" height="40" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="320" y1="60" x2="320" y2="140"></line>
            <line class="grid-line" x1="328" y1="60" x2="328" y2="140"></line>
            <line class="grid-line" x1="336" y1="60" x2="336" y2="140"></line>
            <line class="grid-line" x1="344" y1="60" x2="344" y2="140"></line>
            <line class="grid-line" x1="352" y1="60" x2="352" y2="140"></line>
            <line class="grid-line" x1="360" y1="60" x2="360" y2="140"></line>
            <line class="grid-line" x1="368" y1="60" x2="368" y2="140"></line>
            <line class="grid-line" x1="376" y1="60" x2="376" y2="140"></line>
            <line class="grid-line" x1="384" y1="60" x2="384" y2="140"></line>
            <line class="grid-line" x1="312" y1="68" x2="392" y2="68"></line>
            <line class="grid-line" x1="312" y1="76" x2="392" y2="76"></line>
            <line class="grid-line" x1="312" y1="84" x2="392" y2="84"></line>
            <line class="grid-line" x1="312" y1="92" x2="392" y2="92"></line>
            <line class="grid-line" x1="312" y1="100" x2="392" y2="100"></line>
            <line class="grid-line" x1="312" y1="108" x2="392" y2="108"></line>
            <line class="grid-line" x1="312" y1="116" x2="392" y2="116"></line>
            <line class="grid-line" x1="312" y1="124" x2="392" y2="124"></line>
            <line class="grid-line" x1="312" y1="132" x2="392" y2="132"></line>
            <text class="annotation-label" x="352" y="188" text-anchor="middle" font-size="20">50/100</text>
          </svg>
        `,
        notes: [
          'Le disque est coupé en $2$ parts égales, la bande en $6$ parts égales, la grille en $100$ cases égales : dans chaque figure, on colorie exactement la moitié de la surface.',
          'On passe de $\\dfrac{1}{2}$ à $\\dfrac{3}{6}$ en multipliant numérateur et dénominateur par $3$, et de $\\dfrac{1}{2}$ à $\\dfrac{50}{100}$ en multipliant par $50$ : c\'est la propriété $\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$.',
          'Pour retrouver la forme la plus simple $\\dfrac{1}{2}$ à partir de $\\dfrac{50}{100}$, on divise les deux termes par un même diviseur commun, ici $50$.'
        ],
        reading: 'Compte les parts coloriées et le nombre total de parts dans chaque figure : le rapport colorié/total reste toujours $1$ sur $2$.',
        caption: 'Trois représentations visuelles de la même fraction : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.'
      },
      /* Schemas secondaires (2026-09-12). La figure principale montre que trois
         ecritures differentes designent la meme moitie : elle installe la notion
         d'egalite de fractions, mais elle la CONSTATE sans donner le geste qui
         permet de passer de l'une a l'autre. Les trois figures ci-dessous
         apportent chacune un geste que le chapitre demande ensuite dans ses
         exercices : amplifier ou simplifier, mettre au meme denominateur pour
         comparer, et lire une fraction comme une division — le pont vers le
         chapitre des decimaux, ou 3/4 doit devenir 0,75. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Amplifier, simplifier',
          title: 'La même part, découpée trois fois plus fin',
          description: 'Amplifier une fraction ne change <strong>rien à la quantité</strong> : on découpe seulement les mêmes parts en morceaux plus petits, et on en compte donc davantage. C\'est pourquoi $\\dfrac{3}{4} = \\dfrac{6}{8} = \\dfrac{9}{12}$.',
          svg: `
            <svg viewBox="0 0 400 208" role="img" aria-labelledby="fractions-amplifier-title fractions-amplifier-desc">
              <title id="fractions-amplifier-title">Trois barres identiques decoupees en 4, 8 puis 12 parts avec la meme portion coloree</title>
              <desc id="fractions-amplifier-desc">Trois barres rectangulaires de meme longueur sont empilees les unes sous les autres. La premiere barre est decoupee en 4 parts egales et 3 de ces parts sont colorees : elle represente trois quarts. La deuxieme barre est decoupee en 8 parts egales et 6 sont colorees : elle represente six huitiemes. La troisieme barre est decoupee en 12 parts egales et 9 sont colorees : elle represente neuf douziemes. Dans les trois cas la zone coloree se termine exactement a la meme abscisse, marquee par un trait vertical qui traverse les trois barres. La longueur coloree est donc identique partout : seul le nombre de traits de decoupe change. On lit ainsi que trois quarts, six huitiemes et neuf douziemes sont trois ecritures de la meme quantite.</desc>

              <text class="tick-label" x="200" y="14" text-anchor="middle">Trois découpes de la même barre, la part coloriée ne bouge pas</text>

              <!-- MEME LONGUEUR, MEME ORIGINE pour les trois barres : c'est la
                   condition pour que l'egalite se lise sans calcul. Toute
                   difference de largeur ferait partie de la demonstration. -->
              <rect class="frame-line" x="60" y="26" width="288" height="36" fill="none"></rect>
              <rect x="60" y="26" width="216" height="36" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <line class="grid-line" x1="132" y1="26" x2="132" y2="62"></line>
              <line class="grid-line" x1="204" y1="26" x2="204" y2="62"></line>
              <line class="grid-line" x1="276" y1="26" x2="276" y2="62"></line>
              <text class="annotation-label" x="30" y="50" text-anchor="middle" font-size="15">3/4</text>

              <rect class="frame-line" x="60" y="82" width="288" height="36" fill="none"></rect>
              <rect x="60" y="82" width="216" height="36" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <line class="grid-line" x1="96" y1="82" x2="96" y2="118"></line>
              <line class="grid-line" x1="132" y1="82" x2="132" y2="118"></line>
              <line class="grid-line" x1="168" y1="82" x2="168" y2="118"></line>
              <line class="grid-line" x1="204" y1="82" x2="204" y2="118"></line>
              <line class="grid-line" x1="240" y1="82" x2="240" y2="118"></line>
              <line class="grid-line" x1="276" y1="82" x2="276" y2="118"></line>
              <line class="grid-line" x1="312" y1="82" x2="312" y2="118"></line>
              <text class="annotation-label" x="30" y="106" text-anchor="middle" font-size="15">6/8</text>

              <rect class="frame-line" x="60" y="138" width="288" height="36" fill="none"></rect>
              <rect x="60" y="138" width="216" height="36" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <line class="grid-line" x1="84" y1="138" x2="84" y2="174"></line>
              <line class="grid-line" x1="108" y1="138" x2="108" y2="174"></line>
              <line class="grid-line" x1="132" y1="138" x2="132" y2="174"></line>
              <line class="grid-line" x1="156" y1="138" x2="156" y2="174"></line>
              <line class="grid-line" x1="180" y1="138" x2="180" y2="174"></line>
              <line class="grid-line" x1="204" y1="138" x2="204" y2="174"></line>
              <line class="grid-line" x1="228" y1="138" x2="228" y2="174"></line>
              <line class="grid-line" x1="252" y1="138" x2="252" y2="174"></line>
              <line class="grid-line" x1="276" y1="138" x2="276" y2="174"></line>
              <line class="grid-line" x1="300" y1="138" x2="300" y2="174"></line>
              <line class="grid-line" x1="324" y1="138" x2="324" y2="174"></line>
              <text class="annotation-label" x="30" y="162" text-anchor="middle" font-size="15">9/12</text>

              <!-- LE TRAIT DE VERIFICATION : la frontiere du colorie traverse les
                   trois barres d'un seul trait. C'est lui qui prouve l'egalite ;
                   sans lui, le lecteur devrait recompter les parts. -->
              <line class="guide-line" x1="276" y1="20" x2="276" y2="182"></line>
              <text class="label-soft" x="200" y="198" text-anchor="middle">la frontière du colorié tombe au même endroit sur les trois barres</text>
            </svg>
          `,
          notes: [
            'De $\\dfrac{3}{4}$ à $\\dfrac{6}{8}$, on coupe chaque part en deux : il y a deux fois plus de parts au total et deux fois plus de parts coloriées. On a multiplié les deux termes par $2$.',
            'De $\\dfrac{3}{4}$ à $\\dfrac{9}{12}$, on coupe chaque part en trois : c\'est la même opération avec $3$. En général, $\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$.',
            'Lue à l\'envers, la figure donne la <strong>simplification</strong> : en regroupant les parts de la dernière barre par $3$, on revient à $\\dfrac{3}{4}$, qui est la forme irréductible.'
          ],
          reading: 'Ne compare pas les nombres écrits à gauche, compare les longueurs coloriées. Elles sont identiques : c\'est le seul argument dont tu as besoin. Le numérateur et le dénominateur grandissent tous les deux, et c\'est précisément parce qu\'ils grandissent <strong>ensemble</strong> que la valeur ne change pas.',
          caption: 'Amplification par $2$ puis par $3$ : $\\dfrac{3}{4} = \\dfrac{6}{8} = \\dfrac{9}{12}$.'
        },
        {
          theme: 'maths',
          kicker: 'Comparer deux fractions',
          title: 'Mettre $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ au même dénominateur',
          description: 'On ne peut pas comparer des parts qui n\'ont pas la même taille. Amplifier les deux fractions jusqu\'à un <strong>dénominateur commun</strong> découpe les deux barres de la même façon : il ne reste plus qu\'à compter.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="fractions-comparer-title fractions-comparer-desc">
              <title id="fractions-comparer-title">Deux barres de meme longueur decoupees en quinziemes pour comparer 2/3 et 3/5</title>
              <desc id="fractions-comparer-desc">Deux barres rectangulaires de longueur totale identique sont posees l une au dessus de l autre. La barre du haut represente deux tiers : elle est decoupee en 3 grandes parts dont 2 sont colorees, et un decoupage plus fin en 15 parts montre que cela fait 10 quinziemes. La barre du bas represente trois cinquiemes : elle est decoupee en 5 grandes parts dont 3 sont colorees, et le meme decoupage en 15 parts montre que cela fait 9 quinziemes. Les deux zones colorees commencent au meme bord gauche. La zone coloree de la barre du haut depasse celle de la barre du bas de exactement une part sur quinze. On conclut que dix quinziemes est superieur a neuf quinziemes, donc que deux tiers est superieur a trois cinquiemes.</desc>

              <text class="tick-label" x="200" y="14" text-anchor="middle">Même longueur totale, même découpage : les parts deviennent comparables</text>

              <!-- BARRE DU HAUT : 2/3 = 10/15. Le decoupage fin en 15 est en
                   grid-line, le decoupage d'origine en 3 reste en guide-line :
                   la hierarchie dit lequel des deux est le raisonnement. -->
              <text class="annotation-label" x="26" y="52" text-anchor="middle" font-size="15">2/3</text>
              <rect class="frame-line" x="52" y="30" width="300" height="38" fill="none"></rect>
              <rect x="52" y="30" width="200" height="38" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <line class="grid-line" x1="72" y1="30" x2="72" y2="68"></line>
              <line class="grid-line" x1="92" y1="30" x2="92" y2="68"></line>
              <line class="grid-line" x1="112" y1="30" x2="112" y2="68"></line>
              <line class="grid-line" x1="132" y1="30" x2="132" y2="68"></line>
              <line class="grid-line" x1="172" y1="30" x2="172" y2="68"></line>
              <line class="grid-line" x1="192" y1="30" x2="192" y2="68"></line>
              <line class="grid-line" x1="212" y1="30" x2="212" y2="68"></line>
              <line class="grid-line" x1="232" y1="30" x2="232" y2="68"></line>
              <line class="grid-line" x1="272" y1="30" x2="272" y2="68"></line>
              <line class="grid-line" x1="292" y1="30" x2="292" y2="68"></line>
              <line class="grid-line" x1="312" y1="30" x2="312" y2="68"></line>
              <line class="grid-line" x1="332" y1="30" x2="332" y2="68"></line>
              <line class="guide-line" x1="152" y1="26" x2="152" y2="72"></line>
              <line class="guide-line" x1="252" y1="26" x2="252" y2="72"></line>
              <text class="tick-label" x="366" y="53">10/15</text>

              <!-- BARRE DU BAS : 3/5 = 9/15, meme origine et meme largeur totale. -->
              <text class="annotation-label" x="26" y="122" text-anchor="middle" font-size="15">3/5</text>
              <rect class="frame-line" x="52" y="100" width="300" height="38" fill="none"></rect>
              <rect x="52" y="100" width="180" height="38" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)" stroke="none"></rect>
              <line class="grid-line" x1="72" y1="100" x2="72" y2="138"></line>
              <line class="grid-line" x1="92" y1="100" x2="92" y2="138"></line>
              <line class="grid-line" x1="132" y1="100" x2="132" y2="138"></line>
              <line class="grid-line" x1="152" y1="100" x2="152" y2="138"></line>
              <line class="grid-line" x1="192" y1="100" x2="192" y2="138"></line>
              <line class="grid-line" x1="212" y1="100" x2="212" y2="138"></line>
              <line class="grid-line" x1="252" y1="100" x2="252" y2="138"></line>
              <line class="grid-line" x1="272" y1="100" x2="272" y2="138"></line>
              <line class="grid-line" x1="312" y1="100" x2="312" y2="138"></line>
              <line class="grid-line" x1="332" y1="100" x2="332" y2="138"></line>
              <line class="guide-line" x1="112" y1="96" x2="112" y2="142"></line>
              <line class="guide-line" x1="172" y1="96" x2="172" y2="142"></line>
              <line class="guide-line" x1="232" y1="96" x2="232" y2="142"></line>
              <line class="guide-line" x1="292" y1="96" x2="292" y2="142"></line>
              <text class="tick-label" x="366" y="123">9/15</text>

              <!-- L'ECART, materialise entre les deux frontieres de coloriage :
                   une part sur quinze, et c'est tout le resultat de la figure. -->
              <line class="guide-line" x1="232" y1="68" x2="232" y2="100"></line>
              <line class="guide-line" x1="252" y1="68" x2="252" y2="100"></line>
              <text class="label-soft" x="242" y="160" text-anchor="middle">une part de plus</text>

              <text class="annotation-label" x="200" y="188" text-anchor="middle">10/15 &gt; 9/15, donc 2/3 &gt; 3/5</text>
            </svg>
          `,
          notes: [
            'Le dénominateur commun choisi est $15$, car $15$ est dans la table de $3$ et dans celle de $5$ : $3 \\times 5 = 15$.',
            'On amplifie chaque fraction pour l\'y amener : $\\dfrac{2}{3} = \\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3}{5} = \\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$.',
            'Une fois les dénominateurs identiques, la comparaison se fait sur les seuls numérateurs : $10 > 9$, donc $\\dfrac{2}{3} > \\dfrac{3}{5}$. L\'écart visible vaut exactement $\\dfrac{1}{15}$.'
          ],
          reading: 'Les deux barres ont volontairement la même longueur totale : c\'est ce qui autorise à comparer les longueurs coloriées. Si les barres avaient des tailles différentes, une plus grande zone coloriée ne prouverait plus rien — c\'est l\'erreur classique quand on compare des fractions de deux gâteaux de tailles différentes.',
          caption: 'Comparaison de $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ ramenées à $\\dfrac{10}{15}$ et $\\dfrac{9}{15}$.'
        },
        {
          theme: 'maths',
          kicker: 'Fraction et division',
          title: 'La barre de fraction est un signe de division',
          description: 'Écrire $\\dfrac{3}{4}$, c\'est écrire $3 \\div 4$ : partager <strong>trois</strong> unités entre <strong>quatre</strong> personnes. Chacune reçoit moins qu\'une unité entière, et exactement $0{,}75$.',
          svg: `
            <svg viewBox="0 0 400 214" role="img" aria-labelledby="fractions-division-title fractions-division-desc">
              <title id="fractions-division-title">Partage de trois galettes entre quatre personnes</title>
              <desc id="fractions-division-desc">En haut, trois disques identiques representent trois galettes a partager. Chaque disque est coupe en quatre quarts par deux traits perpendiculaires, ce qui donne douze quarts au total. En bas, quatre parts sont dessinees cote a cote : ce sont les parts recues par les quatre personnes. Chaque part est un assemblage de trois quarts, dont les deux traits de coupe restent visibles ; elle n est pas une galette entamee, car ses trois quarts proviennent de trois galettes differentes. Chaque personne recoit trois quarts de galette, soit trois des douze quarts disponibles. On verifie que quatre fois trois quarts redonne bien les douze quarts de depart. Une derniere ligne rappelle que trois divise par quatre vaut 0,75, donc que chaque personne recoit exactement trois quarts d une galette, c est-a-dire moins qu une galette complete.</desc>

              <text class="tick-label" x="200" y="14" text-anchor="middle">3 galettes à partager entre 4 personnes</text>

              <!-- LES TROIS UNITES, chacune deja coupee en quarts : le decoupage
                   en 4 vient du DIVISEUR, pas d'un choix graphique. C'est ce que
                   la figure doit rendre evident avant tout calcul. -->
              <circle class="frame-line" cx="86" cy="66" r="32" fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))"></circle>
              <line class="grid-line" x1="54" y1="66" x2="118" y2="66"></line>
              <line class="grid-line" x1="86" y1="34" x2="86" y2="98"></line>

              <circle class="frame-line" cx="172" cy="66" r="32" fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))"></circle>
              <line class="grid-line" x1="140" y1="66" x2="204" y2="66"></line>
              <line class="grid-line" x1="172" y1="34" x2="172" y2="98"></line>

              <circle class="frame-line" cx="258" cy="66" r="32" fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))"></circle>
              <line class="grid-line" x1="226" y1="66" x2="290" y2="66"></line>
              <line class="grid-line" x1="258" y1="34" x2="258" y2="98"></line>

              <text class="tick-label" x="322" y="70">12 quarts</text>

              <!-- LES QUATRE PARTS RECUES, au MEME RAYON que les galettes du
                   haut (r = 32) et sur une meme ligne de base. Chaque part est
                   dessinee comme ce qu'elle EST : trois quarts assembles, les
                   deux traits de coupe visibles a l'interieur. Pas de cercle
                   autour.
                   Deux corrections du 2026-09-12, dans cet ordre :
                   1. Les parts etaient tracees a r = 24 quand les galettes du
                      haut sont a r = 32, sous un commentaire qui affirmait
                      pourtant « a la meme echelle ». Les trois quarts colories
                      ne pesaient alors que 56 % de leur valeur : un eleve qui
                      COMPTE les quarts ne retrouvait pas les 12 annonces.
                   2. Meme au bon rayon, chaque part restait inscrite dans un
                      CERCLE COMPLET dont un quart demeurait blanc. Le bas
                      montrait donc quatre disques la ou l'on ne partage que
                      trois galettes, et suggerait que chacun recoit une galette
                      entamee. Or personne ne recoit une galette a laquelle il
                      manque un quart : chacun recoit trois quarts decoupes dans
                      trois galettes DIFFERENTES. Le cercle vide contredisait
                      l'enonce qu'il illustre. -->
              <!-- Les deux traits de coupe pointent vers l'interieur de la part
                   (a droite et vers le bas), et non vers le quart absent : ils
                   disent « cette part est faite de 3 morceaux », pas « il en
                   manque un ». -->
              <line class="guide-line" x1="30" y1="112" x2="370" y2="112"></line>

              <path class="frame-line" d="M42 156 L42 124 A32 32 0 1 1 10 156 Z" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></path>
              <line class="grid-line" x1="42" y1="156" x2="74" y2="156"></line>
              <line class="grid-line" x1="42" y1="156" x2="42" y2="188"></line>

              <path class="frame-line" d="M147 156 L147 124 A32 32 0 1 1 115 156 Z" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></path>
              <line class="grid-line" x1="147" y1="156" x2="179" y2="156"></line>
              <line class="grid-line" x1="147" y1="156" x2="147" y2="188"></line>

              <path class="frame-line" d="M253 156 L253 124 A32 32 0 1 1 221 156 Z" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></path>
              <line class="grid-line" x1="253" y1="156" x2="285" y2="156"></line>
              <line class="grid-line" x1="253" y1="156" x2="253" y2="188"></line>

              <path class="frame-line" d="M358 156 L358 124 A32 32 0 1 1 326 156 Z" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></path>
              <line class="grid-line" x1="358" y1="156" x2="390" y2="156"></line>
              <line class="grid-line" x1="358" y1="156" x2="358" y2="188"></line>

              <text class="label-soft" x="200" y="208" text-anchor="middle">chacun reçoit 3 quarts : 3 ÷ 4 = 0,75</text>
            </svg>
          `,
          notes: [
            'Les $3$ galettes coupées en quarts donnent $3 \\times 4 = 12$ quarts. Partagés entre $4$ personnes, cela fait $12 \\div 4 = 3$ quarts chacun, c\'est-à-dire $\\dfrac{3}{4}$ de galette.',
            'La barre de fraction se lit donc comme une division : $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Une fraction est un nombre, pas seulement un dessin de parts.',
            'Vérification par le sens inverse : $4 \\times \\dfrac{3}{4} = 3$, on retrouve bien les trois galettes du départ.'
          ],
          reading: 'Le numérateur dit <strong>combien on partage</strong>, le dénominateur dit <strong>entre combien</strong>. Quand le numérateur est plus petit que le dénominateur, chacun reçoit moins qu\'une unité entière et la fraction est donc inférieure à $1$ : ici $0{,}75 < 1$.',
          caption: 'Partage de $3$ unités entre $4$ personnes : $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$.'
        }
      ],
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ (simplification par $k$)',
        '$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$ (amplification par $n$)',
        'Pour comparer : même dénominateur, puis on compare les numérateurs'
      ],
      recap: [
        'Une fraction $\\dfrac{a}{b}$ est irréductible quand $a$ et $b$ n\'ont plus aucun diviseur commun autre que $1$.',
        'Pour simplifier, on divise numérateur et dénominateur par un même diviseur commun, autant de fois que possible.',
        'Pour comparer, on met les deux fractions au même dénominateur, puis on compare les numérateurs.',
        'On ne simplifie JAMAIS par addition/soustraction, seulement par multiplication/division.'
      ],
      piege: 'Erreur fréquente : simplifier $\\dfrac{a + k}{b + k}$ en divisant par $k$. IMPOSSIBLE ! On ne peut simplifier qu\'en multipliant ou divisant numérateur ET dénominateur par un même facteur. $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓ mais $\\dfrac{6+3}{9+3} \\neq \\dfrac{2}{3}$ ✗.'
    },

    quiz: [
      {
        q: 'Quelle est la forme irréductible de $\\dfrac{24}{36}$ ?',
        options: ['$\\dfrac{4}{6}$', '$\\dfrac{2}{3}$', '$\\dfrac{6}{9}$', '$\\dfrac{12}{18}$'],
        answer: 1,
        correction: '$24$ et $36$ sont tous deux divisibles par $12$ : $\\dfrac{24}{36} = \\dfrac{24 \\div 12}{36 \\div 12} = \\dfrac{2}{3}$. C\'est la seule des quatre qu\'on ne peut plus simplifier.'
      },
      {
        q: 'Laquelle de ces simplifications est <strong>incorrecte</strong> ?',
        options: ['$\\dfrac{12}{18} = \\dfrac{2}{3}$', '$\\dfrac{15}{25} = \\dfrac{3}{5}$', '$\\dfrac{6+4}{9+4} = \\dfrac{6}{9}$', '$\\dfrac{8}{12} = \\dfrac{2}{3}$'],
        answer: 2,
        correction: 'On ne peut pas simplifier une fraction en ajoutant (ou soustrayant) la même valeur au numérateur et au dénominateur ! $\\dfrac{6+4}{9+4} = \\dfrac{10}{13} \\neq \\dfrac{6}{9}$. Pour simplifier, on ne peut que multiplier ou diviser numérateur ET dénominateur par un même facteur : $\\dfrac{6}{9} = \\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$ ✓.'
      },
      {
        q: 'Dans une classe de $30$ élèves, $18$ sont demi-pensionnaires. Quelle fraction irréductible représente leur part ?',
        options: ['$\\dfrac{3}{5}$', '$\\dfrac{18}{30}$', '$\\dfrac{9}{15}$', '$\\dfrac{2}{3}$'],
        answer: 0,
        correction: '$\\dfrac{18}{30}$ : les deux sont divisibles par $6$, donc $\\dfrac{18 \\div 6}{30 \\div 6} = \\dfrac{3}{5}$. $\\dfrac{18}{30}$ et $\\dfrac{9}{15}$ sont justes mais pas encore simplifiées.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
        // Quatre TACHES distinctes, et non quatre habillages de la meme tache.
        // Avant le 2026-09-08, generate() ne savait que « simplifier puis
        // convertir » et pick() ne changeait que la phrase d'introduction :
        // le manuel, qui appelle generate() en boucle (3 tirages en edition
        // eleve, 6 en edition professeur), imprimait trois fois le meme
        // exercice avec un chimiste, un cuisinier puis un cartographe.
        // Chaque variante reste au programme de sixieme et rend un nombre.
        const variante = pick(['simplifier', 'comparer', 'completer', 'partager']);

        // Un couple irreductible a/b, socle commun aux quatre variantes.
        let a = rand(2, 9), b = rand(2, 9), essais = 0;
        while ((pgcd(a, b) !== 1 || a === b) && essais < 20) { b = rand(2, 9); essais++; }
        const k = rand(2, 6);
        const num = k * a, den = k * b;

        if (variante === 'simplifier') {
          // L'enonce demande un arrondi au MILLIEME : arrondir a 4 decimales
          // faisait repondre 0,2857 a une question qui attend 0,286 — enonce et
          // corrige se contredisaient (audit du 2026-08-16).
          // Une proportion, une recette ou une echelle sont des parts d'un
          // tout : on range petit < grand pour que le decor reste coherent
          // avec la fraction (2026-10-13 : on tirait des « proportions » de 28/24).
          const [petit, grand] = a < b ? [a, b] : [b, a];
          const numS = k * petit, denS = k * grand;
          const val = parseFloat((petit / grand).toFixed(3));
          const decor = pick([
            'Simplifie la fraction',
            'Un chimiste note une proportion : simplifie la fraction',
            'En cuisine, une recette impose une proportion : simplifie la fraction',
            'Un cartographe relève une échelle : simplifie la fraction'
          ]);
          return {
            statement: `${decor} $\\dfrac{${numS}}{${denS}}$ et donne sa valeur décimale arrondie au millième.`,
            answer: val,
            tolerance: 0.001,
            unit: '',
            hint: `La fraction n'est pas irréductible : $${numS}$ et $${denS}$ ont un diviseur commun. Essaie de diviser les deux par $${k}$.`,
            solution: [
              `Cherchons un diviseur commun à $${numS}$ et $${denS}$.`,
              `On observe : $${numS} = ${k} \\times ${petit}$ et $${denS} = ${k} \\times ${grand}$.`,
              `On divise numérateur et dénominateur par $${k}$ : $\\dfrac{${numS}}{${denS}} = \\dfrac{${petit}}{${grand}}$.`,
              `Vérification : $${petit}$ et $${grand}$ n'ont plus de diviseur commun → la fraction $\\dfrac{${petit}}{${grand}}$ est irréductible ✓`,
              `Valeur décimale arrondie au millième : $${petit} \\div ${grand} \\approx ${fr(val)}$`
            ]
          };
        }

        if (variante === 'comparer') {
          // Deux fractions de denominateurs differents, l'un multiple de
          // l'autre : c'est exactement l'attendu de sixieme (comparer quand un
          // denominateur est un multiple de l'autre). La reponse est le
          // numerateur de la plus grande, qui sert de valeur de controle : la
          // reponse attendue a l'ecrit est une phrase, mais le site corrige un
          // nombre (2026-09-12, defaut 5 de l'audit).
          const d = rand(3, 6);
          const m = rand(2, 4);
          const grandD = d * m;
          let p = rand(1, d - 1);                 // p/d
          let q = rand(1, grandD - 1);            // q/grandD
          // On evite l'egalite (question sans reponse) ET les numerateurs
          // egaux (la valeur de controle ne distinguerait plus les fractions).
          let garde = 0;
          while ((p * grandD === q * d || p === q) && garde < 20) { q = rand(1, grandD - 1); garde++; }
          const pAmplifie = p * m;
          const premiereGagne = pAmplifie > q;
          const gagnante = premiereGagne ? `\\dfrac{${p}}{${d}}` : `\\dfrac{${q}}{${grandD}}`;
          const reponse = premiereGagne ? p : q;
          const decor = pick([
            'Deux élèves ont mangé une part de tarte',
            'Deux bouteilles sont remplies',
            'Deux terrains sont occupés'
          ]);
          return {
            statement: `${decor} : la première vaut $\\dfrac{${p}}{${d}}$, la seconde $\\dfrac{${q}}{${grandD}}$. ` +
              `Laquelle est la plus grande ?<br/><br/>Écris une <strong>phrase de conclusion</strong> qui le dit, puis reporte ci-dessous le numérateur de cette fraction pour vérifier ta réponse.`,
            answer: reponse,
            tolerance: 0,
            unit: '',
            hint: `On ne peut pas comparer des ${d}èmes et des ${grandD}èmes directement. Remarque que $${grandD} = ${d} \\times ${m}$ : amplifie la première fraction par $${m}$.`,
            solution: [
              `Les deux fractions n'ont pas le même dénominateur : on ne peut pas comparer les numérateurs tels quels.`,
              `Comme $${grandD} = ${d} \\times ${m}$, on amplifie la première : $\\dfrac{${p}}{${d}} = \\dfrac{${p} \\times ${m}}{${d} \\times ${m}} = \\dfrac{${pAmplifie}}{${grandD}}$.`,
              `Les deux fractions sont maintenant en ${grandD}èmes : on compare $${pAmplifie}$ et $${q}$.`,
              `$${pAmplifie} ${premiereGagne ? '>' : '<'} ${q}$, donc la plus grande est $${gagnante}$.`,
              // La phrase de conclusion est ce qu'on attend a l'ecrit ; le numero
              // n'en est que la trace verifiable. On dit les deux, dans cet ordre.
              `Phrase de conclusion attendue : « la plus grande est $${gagnante}$ ». C'est cette phrase qu'on écrit sur la copie, pas un nombre isolé.`,
              `Contrôle : le numérateur de cette fraction vaut $${reponse}$ — c'est la valeur à reporter dans la case de vérification.`
            ]
          };
        }

        if (variante === 'completer') {
          // Egalite de fractions a trou : l'eleve retrouve le facteur
          // d'amplification, puis le terme manquant. Tache inverse de la
          // simplification, sur la meme propriete.
          const trouEnHaut = pick([true, false]);
          const manquant = trouEnHaut ? num : den;
          const visible = trouEnHaut
            ? `\\dfrac{\\ldots}{${den}}`
            : `\\dfrac{${num}}{\\ldots}`;
          return {
            statement: `Complète l'égalité $\\dfrac{${a}}{${b}} = ${visible}$. Quel nombre remplace les pointillés ?`,
            answer: manquant,
            tolerance: 0,
            unit: '',
            hint: `Compare les deux ${trouEnHaut ? 'dénominateurs' : 'numérateurs'} : par combien a-t-on multiplié $${trouEnHaut ? b : a}$ pour obtenir $${trouEnHaut ? den : num}$ ?`,
            solution: [
              `Une fraction ne change pas de valeur quand on multiplie ses deux termes par un même nombre.`,
              `On regarde le terme connu : $${trouEnHaut ? b : a} \\times ${k} = ${trouEnHaut ? den : num}$, donc le facteur est $${k}$.`,
              `On applique le même facteur à l'autre terme : $${trouEnHaut ? a : b} \\times ${k} = ${manquant}$.`,
              `L'égalité complète s'écrit $\\dfrac{${a}}{${b}} = \\dfrac{${num}}{${den}}$.`,
              `Le nombre cherché est $${manquant}$.`
            ]
          };
        }

        // « partager » : prendre une fraction d'une quantite, le sens premier
        // de la fraction au programme de sixieme (fraction d'une grandeur).
        const parts = rand(3, 8);
        const prises = rand(1, parts - 1);
        const parPart = rand(3, 12);
        const total = parts * parPart;
        const resultat = prises * parPart;
        const objet = pick([
          { n: 'billes', v: 'contient' },
          { n: 'photos', v: 'contient' },
          { n: 'gommes', v: 'contient' }
        ]);
        return {
          statement: `Un sac ${objet.v} $${total}$ ${objet.n}. On en prend $\\dfrac{${prises}}{${parts}}$. ` +
            `Combien de ${objet.n} cela fait-il ?`,
          answer: resultat,
          tolerance: 0,
          unit: '',
          hint: `Prendre $\\dfrac{${prises}}{${parts}}$, c'est partager en $${parts}$ parts égales, puis en prendre $${prises}$. Commence par une seule part.`,
          solution: [
            `On partage d'abord le tout en $${parts}$ parts égales : $${total} \\div ${parts} = ${parPart}$.`,
            `Une part vaut donc $${parPart}$ ${objet.n}.`,
            `On en prend $${prises}$ : $${parPart} \\times ${prises} = ${resultat}$.`,
            `Vérification : $\\dfrac{${prises}}{${parts}}$ de $${total}$, c'est bien $${resultat}$ ${objet.n}.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un collège compte $250$ élèves au total. Parmi eux, $45$ sont inscrits à l\'association sportive.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Simplifier la fraction $\\dfrac{45}{250}$ pour exprimer sous forme irréductible la part des élèves inscrits.',
        '(Étape 3 de la méthode) Convertir cette fraction en nombre décimal, puis exprimer le pourcentage d\'élèves inscrits.',
        'Réflexion : si le collège doublait ET son nombre d\'inscrits ET son effectif total, la part des inscrits changerait-elle ? Justifie avec la propriété d\'amplification vue en cours.'
      ],
      solutions: [
        'Part des inscrits : $\\dfrac{45}{250}$. Les deux nombres sont divisibles par $5$ : $\\dfrac{45 \\div 5}{250 \\div 5} = \\dfrac{9}{50}$.',
        '$\\dfrac{9}{50} = 9 \\div 50 = 0{,}18$, soit $0{,}18 \\times 100 = 18\\%$ des élèves.',
        'Non. $\\dfrac{90}{500} = \\dfrac{9}{50} = 0{,}18$. Multiplier numérateur et dénominateur par le même facteur ne change pas la fraction.'
      ],
      finalAnswer: '$\\dfrac{45}{250} = \\dfrac{9}{50} = 18\\%$'
    },

    evaluation: {
      title: 'Évaluation — Fractions',
      duration: '20 min',
      questions: [
        {
          statement: 'Simplifie la fraction $\\dfrac{36}{48}$ et donne le numérateur de la fraction irréductible.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$36$ et $48$ sont tous deux divisibles par $12$. On divise : $\\dfrac{36}{48} = \\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$. Le numérateur est $3$.'
        },
        {
          statement: 'Quelle fraction est égale à $\\dfrac{5}{8}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{10}{24}$', '$\\dfrac{15}{24}$', '$\\dfrac{20}{40}$', '$\\dfrac{25}{35}$'],
          answer: 1,
          points: 2,
          correction: 'On amplifie $\\dfrac{5}{8}$ par $3$ : $\\dfrac{5 \\times 3}{8 \\times 3} = \\dfrac{15}{24}$. Vérification : $\\dfrac{15}{24} = \\dfrac{15 \\div 3}{24 \\div 3} = \\dfrac{5}{8}$ ✓.'
        },
        {
          // L'enonce demandait de comparer PUIS de donner 3 x 9 : l'eleve etait
          // note sur 27, pas sur la comparaison. La question porte desormais sur
          // ce qu'elle pretend evaluer (audit du 2026-08-16).
          //
          // La consigne imposait ensuite le PRODUIT EN CROIX, qui est une notion
          // de cycle 4 : la note prof du chapitre le dit elle-meme (« formalisee
          // au cycle 4 : ce chapitre les anticipe »). Anticiper une notion dans
          // le cours est legitime, l'EXIGER dans le devoir note ne l'est pas —
          // un eleve qui ne maitrise que le programme de son annee y perdait
          // 2 points. La question demande desormais le meme raisonnement par la
          // mise au meme denominateur, qui est au programme de sixieme. Memes
          // fractions, meme bareme, meme competence (audit du 2026-09-12).
          statement: 'Compare $\\dfrac{3}{7}$ et $\\dfrac{5}{9}$ en les mettant au même dénominateur.',
          type: 'multiple-choice',
          options: ['$\\dfrac{3}{7} < \\dfrac{5}{9}$', '$\\dfrac{3}{7} > \\dfrac{5}{9}$', '$\\dfrac{3}{7} = \\dfrac{5}{9}$', 'On ne peut pas comparer deux fractions de dénominateurs différents'],
          answer: 0,
          points: 2,
          correction: 'Le dénominateur commun le plus simple est $7 \\times 9 = 63$.<br/><br/>On amplifie chaque fraction : $\\dfrac{3}{7} = \\dfrac{3 \\times 9}{7 \\times 9} = \\dfrac{27}{63}$ et $\\dfrac{5}{9} = \\dfrac{5 \\times 7}{9 \\times 7} = \\dfrac{35}{63}$.<br/><br/>Les deux fractions comptent maintenant des <strong>soixante-troisièmes</strong> : on peut comparer les numérateurs. Comme $27 < 35$, on conclut $\\dfrac{3}{7} < \\dfrac{5}{9}$.'
        },
        {
          statement: 'Convertis $\\dfrac{7}{4}$ en nombre décimal.',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{7}{4} = 7 \\div 4 = 1{,}75$. Le numérateur est plus grand que le dénominateur ($7 > 4$), donc le résultat est supérieur à $1$.'
        },
        {
          // Competence « communiquer » (2026-09-12). L'ancienne version demandait de
          // reperer la simplification juste : l'eleve pouvait la trouver a la
          // calculatrice sans rien formuler. Elle demande desormais de choisir la
          // phrase qui explique correctement POURQUOI une simplification par addition
          // est impossible. Les options portent toutes sur le meme contre-exemple :
          // seule la redaction les separe.
          statement: 'Un camarade écrit $\\dfrac{8+4}{12+4} = \\dfrac{8}{12}$ et affirme avoir simplifié.<br/><br/>Quelle réponse lui explique le mieux pourquoi c\'est impossible ?',
          type: 'multiple-choice',
          options: ['« C\'est interdit : on n\'a pas le droit de simplifier une addition. »', '« Calcule les deux : $\\dfrac{8+4}{12+4} = \\dfrac{12}{16} = 0{,}75$ alors que $\\dfrac{8}{12} \\approx 0{,}67$. Deux valeurs différentes, donc l\'égalité est fausse : seules la multiplication et la division conservent un quotient. »', '« Ton erreur est d\'avoir choisi $4$ : il fallait prendre un diviseur commun à $8$ et $12$. »', '« Ce n\'est pas la bonne réponse, recommence. »'],
          answer: 1,
          points: 2,
          correction: 'Les quatre réponses concluent bien que l\'égalité est fausse : c\'est la <strong>qualité de l\'explication</strong> qui les départage.<br/><br/>La première se contente d\'invoquer une interdiction, sans dire pourquoi elle existe : le camarade la retiendra comme une règle arbitraire.<br/><br/>La troisième nomme une raison inexacte — $4$ divise bien $8$ et $12$ ; le problème n\'est pas le nombre choisi, mais l\'opération.<br/><br/>La quatrième n\'explique rien du tout.<br/><br/>Seule la deuxième apporte un <strong>contre-exemple chiffré</strong> : $\\dfrac{8+4}{12+4} = \\dfrac{12}{16} = 0{,}75$ tandis que $\\dfrac{8}{12} \\approx 0{,}67$. Deux valeurs différentes, donc deux fractions différentes : la démonstration est complète, et elle rappelle au passage que seules la multiplication et la division conservent un quotient.'
        }
      ]
    }
  });
