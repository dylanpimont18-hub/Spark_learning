# Argumentaire — édition professeur

> **Document de travail interne.** Ce n'est pas une plaquette : il sert à écrire les
> fiches produit, pas à être publié tel quel. Les passages marqués
> ⚠️ signalent ce qu'il ne faut **pas** promettre en l'état.
>
> **Ouvrage de référence : `college-maths-6e` (édition du 2026-09-11).**
> C'est le **seul** ouvrage de la collection dont l'édition professeur est en
> version v2. Voir §6 : les 19 autres ouvrages n'ont pas encore ce contenu et
> **cet argumentaire ne s'applique pas à eux.**
>
> Tous les chiffres de ce document sont **périmables**. Ils sont regroupés en
> §7 « Chiffres à revérifier avant chaque publication », avec la commande qui
> les recompte. Ne recopiez jamais un nombre depuis la prose sans passer par §7.

Dernière vérification des chiffres : **2026-09-12**, sur
`Manuel scolaire/college-maths-6e/college-maths-6e-{prof,eleve}.tex`.

---

## 1. Positionnement

### À qui l'édition professeur s'adresse

Par ordre de pertinence commerciale décroissante :

1. **L'enseignant contractuel ou en début de carrière**, à qui on confie une 6e
   parfois quelques jours avant la rentrée. Il n'a ni progression annuelle
   éprouvée, ni banque d'évaluations, ni la connaissance des erreurs typiques
   que dix ans de copies finissent par donner. C'est **le cœur de cible** :
   c'est lui qui a le plus à gagner et le moins de ressources déjà constituées.
2. **L'enseignant de soutien, le professeur particulier, le tuteur** qui suit
   des 6e sans être devant une classe. Il n'a pas accès aux ressources
   enseignant des éditeurs, qui exigent presque toutes une adresse académique
   (voir §5, objection 1). Pour lui, l'offre gratuite du marché est
   **fermée**.
3. **Le parent en instruction en famille (IEF)**, même raison d'accès, plus un
   besoin réel de progression et d'attendus officiels.
4. **Le titulaire expérimenté**, en dernier. Il a déjà sa progression, ses
   évaluations et ses réflexes de remédiation, et il obtient le livre du
   professeur de son éditeur gratuitement. ⚠️ **Ne pas construire la fiche
   produit pour lui** : il est la cible la plus dure et la plus prompte à
   demander un remboursement.

### Le problème que ça résout

Un enseignant n'achète pas des pages, il achète **du temps qu'il ne repassera
pas à refabriquer chaque année la même chose** : la progression, les
évaluations avec leur barème, les exercices supplémentaires pour un groupe qui
va trop vite, et le repérage des erreurs récurrentes.

Le différentiel de l'édition professeur est intégralement construit sur cet
axe. Ce n'est pas « le livre avec les réponses » — c'est précisément ce que
l'édition professeur v1 était, et c'est pour ça qu'elle ne justifiait aucun
prix supérieur.

### Ce qui n'est PAS dans l'édition professeur

À dire explicitement sur la fiche produit. Un enseignant qui découvre l'absence
après l'achat demande un remboursement ; un enseignant prévenu ne l'achète pas
ou l'achète en connaissance de cause. Les deux valent mieux.

- Pas de **déroulé de séance minute par minute** (hors périmètre assumé).
- Pas d'**évaluation en version B** — une seule version par chapitre, donc pas
  de sujet de rattrapage ni de dispositif anti-copiage.
- Pas de **calendrier** dans la progression : l'ordre et les prérequis, oui ;
  les semaines, non (décision du 2026-09-08 — un calendrier se périme chaque
  année et dépend de l'établissement).
- Pas de **fichiers modifiables** : c'est un PDF, pas du .docx.
- Pas de **manuel élève en licence de classe** : l'achat de l'édition
  professeur ne donne pas le droit de distribuer l'édition élève aux élèves.

---

## 2. Le différentiel élève / prof, chiffré

**Faits comptés le 2026-09-12** dans les deux `.tex` générés (méthode de
comptage en §7).

### 2.1 Vue d'ensemble

| | Édition élève | Édition professeur | Écart |
|---|---:|---:|---:|
| Pages PDF | **84** | **152** | **+68 p. (+81 %)** |
| Chapitres de cours | 10 | 10 | — |
| Énoncés au total | **120** | **270** | **+150 (×2,25)** |
| Énoncés corrigés en place | 0 | **190** | +190 |
| Fiches « Erreurs fréquentes » | 0 | **40** | +40 |
| Encadrés « Pour l'enseignant » | 0 | **10** | +10 |
| Progression annuelle | non | **oui** (10 chapitres) | — |
| Grille de suivi de classe | non | **oui** (26 élèves × 6 comp.) | — |
| Compétence par question d'évaluation | non | **oui** (50 questions) | — |
| Grilles de compétences par chapitre | 0 | **10** | +10 |

### 2.2 Le détail des énoncés

| Type d'énoncé | Élève | Prof | Corrigés dans l'édition prof |
|---|---:|---:|---:|
| Exercices principaux | 30 | 30 | **30** |
| Banque d'exercices supplémentaires | **0** | **150** | **150** |
| Questions de quiz | 30 | 30 | réponses en fin d'ouvrage |
| Questions d'évaluation notées | 50 | 50 | barème + compétence |
| Problèmes de synthèse | 10 | 10 | **10** |
| **Total** | **120** | **270** | **190 corrigés rédigés** |

La **banque d'exercices supplémentaires** est le poste le plus lourd :
**15 énoncés inédits par chapitre**, groupés par type de tâche, absents de
l'édition élève, **tous corrigés**. C'est ce qui permet de donner du travail
sans redonner ce que l'élève a déjà dans son livre.

Les 190 corrigés ne sont pas des résultats : ils sont **rédigés en étapes**,
**2,9 étapes en moyenne** par corrigé (542 étapes comptées au total), avec la
réponse finale isolée. C'est utilisable pour corriger au tableau, pas seulement
pour vérifier.

### 2.3 Le budget de pages de l'édition professeur

Reconstitué depuis le fichier `.toc` (pages réelles de la compilation) :

| Poste | Pages | Part des 152 p. |
|---|---:|---:|
| Exercices, quiz, problèmes (énoncés + corrigés) | **66** | 43,4 % |
| Cours (Découvrir, Définitions, Méthode, Schéma, Points clés) | **31** | 20,4 % |
| Évaluations + grilles de compétences | **23** | 15,1 % |
| Erreurs fréquentes et remédiation | **14** | 9,2 % |
| Index des notions | 12 | 7,9 % |
| Grille de suivi de classe | 2 | 1,3 % |
| Formulaire | 2 | 1,3 % |
| Réponses aux exercices | 1 | 0,7 % |
| Progression annuelle + liminaires (pagination romaine) | ~6 | — |

**Lecture honnête** : sur 152 pages, **environ 103 pages** relèvent de
l'appareil de travail (exercices, corrigés, évaluations, erreurs), contre
**31 pages de cours**. C'est le bon ratio pour un outil enseignant. Mais
c'est aussi ce qui fait que le volume total reste modeste face au marché —
voir `positionnement-prix.md`.

### 2.4 Les sept contenus exclusifs, un par un

Repris de la spécification `docs/superpowers/specs/2026-09-07-edition-professeur-v2-design.md`
et **vérifiés dans le PDF généré**.

1. **Banque d'exercices supplémentaires** — 150 énoncés (15/chapitre), tous
   corrigés, groupés par type de tâche, avec un rappel de la notion visée.
   *Vérifié : `\subsection*{Banque d'exercices supplémentaires}` × 10,
   `\textbf{Supplément` × 150.*
2. **Erreurs fréquentes et remédiation** — 40 fiches (4/chapitre en moyenne),
   chacune en quatre entrées fixes : ce que l'élève écrit, d'où ça vient, par
   quoi y répondre, **et l'exercice du livre qui sert de remédiation**. Ce
   renvoi est ce qui la rend utilisable en classe plutôt que documentaire.
   *Vérifié : `\begin{sperreur}` × 40, absent de l'édition élève.*
3. **Tous les exercices corrigés en place** — 190 corrigés, sous l'énoncé et
   non en fin d'ouvrage. *Vérifié : `\begin{spcorrige}` × 190 (prof) contre 0
   (élève).*
4. **Une compétence officielle par question d'évaluation** — les 50 questions
   d'évaluation portent chacune une compétence du référentiel
   (chercher, modéliser, représenter, raisonner, calculer, communiquer),
   totalisée dans une grille sous chaque évaluation. ⚠️ Les compétences sont
   fixées par matière dans le pipeline et refusées à la validation si elles
   sortent du référentiel — c'est un point de sérieux à mentionner.
   *Vérifié : 50 titres de question portant une étiquette de compétence,
   `\subsection*{Grille de compétences}` × 10.*
5. **Progression annuelle en tête d'ouvrage** — un tableau : numéro d'ordre,
   chapitre, ce sur quoi il s'appuie (prérequis internes, renvois « ch. 4 »,
   « ch. 6, ch. 7, ch. 8 »), et les attendus de fin d'année du programme
   officiel. **Sans calendrier**, assumé et expliqué dans le livre.
   *Vérifié : `\chapter*{Progression annuelle}`, tableau des 10 chapitres.*
6. **Grille de suivi de classe photocopiable** — 26 lignes élèves × les 6
   compétences du référentiel, notation A / E / N, une grille par trimestre.
   *Vérifié : `\chapter{Grille de suivi des compétences}`, 26 lignes.*
7. **Encadré « Pour l'enseignant » par chapitre** — 10 encadrés : objectifs
   visés, prérequis (vocabulaire déjà rencontré, prolongements possibles),
   durée et barème de l'évaluation fournie, et **place dans le programme**
   (ce qui relève de la 6e, ce qui anticipe le cycle 4, ce qui peut être
   réservé aux élèves à l'aise). *Vérifié : `\begin{spprof}` × 10.*

---

## 4. Ce qu'il faut corriger dans le produit avant de pousser cet argumentaire

Constats faits en établissant les chiffres. Ce sont des **défauts**, pas des
arguments.

1. ⚠️ **La quatrième de couverture de l'édition professeur est identique, mot
   pour mot, à celle de l'édition élève.** Elle annonce « Cours, méthodes et
   exercices de sixième » et ne mentionne **aucun** des sept contenus
   exclusifs. Un acheteur qui ouvre le PDF n'a, sur la page qui sert
   normalement d'argumentaire, aucune confirmation d'avoir acheté la bonne
   édition. À corriger dans le pipeline (`scripts/manuel/ouvrage.js`) —
   **hors périmètre de ce document, mais bloquant pour la vente.**
2. ⚠️ **L'avant-propos est lui aussi identique** entre les deux éditions.
3. ⚠️ **Seul l'ouvrage 6e a l'édition professeur v2** (voir §6). Toute
   communication au niveau de la collection serait fausse aujourd'hui.

---

## 5. Objections prévisibles et réponses

Formulées comme un enseignant les formule vraiment. Les réponses sont à
utiliser en fiche produit, en FAQ ou en réponse à un mail — **pas à
inventer au-delà de ce qui est écrit ici.**

---

**Objection 1 — « Le livre du professeur, je l'ai gratuitement chez mon
éditeur. »**

C'est vrai, et c'est l'objection la plus forte. Lelivrescolaire, Bordas,
Hatier, Magnard et Hachette donnent le livre du professeur en numérique
(sources dans `positionnement-prix.md`, §2).

**Réponse honnête** : « Si vous êtes titulaire avec une adresse académique et
que votre établissement a adopté une collection, oui — prenez le livre du
professeur de votre éditeur, il est gratuit et il est fait pour son manuel.
Cette édition s'adresse à ceux pour qui cette porte est fermée : les
contractuels sans manuel adopté, les enseignants de soutien, les professeurs
particuliers, les familles en IEF. Presque toutes les ressources enseignant
gratuites exigent une adresse académique vérifiée. »

⚠️ **Ne jamais prétendre faire mieux que le livre du professeur d'un éditeur.**
Sur les moyens, c'est faux. L'argument est l'**accès**, pas la supériorité.

---

**Objection 2 — « 152 pages, c'est court pour une année entière. Les manuels
font 300 pages. »**

C'est vrai aussi : la norme du marché est de 300 à 320 pages pour le manuel
élève 6e (§7 de `positionnement-prix.md`).

**Réponse honnête** : « Le manuel élève d'un éditeur fait 300 pages parce
qu'il porte les images, les pages d'ouverture, les doubles pages de
découverte et les rubriques transversales. Ce livre est dense : 43 % de ses
pages sont des exercices et leurs corrigés, 15 % des évaluations. Cela dit,
le nombre d'exercices est plus faible que chez un éditeur établi — nous le
disons plutôt que de le maquiller. Si votre besoin premier est le **volume
d'exercices**, un cahier d'exercices d'éditeur à 6-8 € le complète mieux
qu'il ne le concurrence. »

Interne : c'est le défaut 24, traité dans `positionnement-prix.md`. **Tant
qu'il n'est pas corrigé, cette réponse est la seule tenable.**

---

**Objection 3 — « Un PDF à ce prix alors qu'un vrai manuel papier est à 25 € ? »**

**Réponse** : « Le manuel papier à 25 € est le livre de l'élève. Le livre du
professeur correspondant, quand il est vendu séparément, va de 9,90 € à 25 €
pour 112 à 162 pages — le contenu enseignant se paie au même prix que le
manuel élève, pour moitié moins de pages. Ce PDF fait 152 pages et contient
à la fois le cours de l'élève et l'appareil enseignant. Il est
téléchargeable immédiatement, imprimable autant de fois que vous voulez, et
il n'y a pas d'abonnement. »

---

**Objection 4 — « Comment je sais que le contenu est juste ? Vous n'êtes pas
un éditeur. »**

**Réponse** : « Le contenu vient des modules de sparklearning.fr, gratuits et
publics : vous pouvez lire le cours des dix chapitres avant d'acheter, sans
inscription. L'auteur est Dylan Pimont, enseignant, formateur et ingénieur.
Les compétences des évaluations sont celles du référentiel officiel et le
pipeline refuse toute compétence hors référentiel. »

⚠️ Ne pas revendiquer de « validation par l'Éducation nationale », de
« conformité certifiée » ni de comité de relecture : rien de tout cela
n'existe.

---

**Objection 5 — « Les évaluations, mes élèves vont trouver les corrigés en
ligne. »**

**Réponse honnête** : « Les énoncés d'évaluation de l'édition professeur sont
les mêmes que ceux de l'édition élève, qui est en vente. Il n'y a pas de
version B. Si vous notez pour de bon, servez-vous de la banque de 150
exercices supplémentaires — ceux-là ne figurent pas dans l'édition élève. »

Interne : c'est une vraie limite. La version B est explicitement hors
périmètre v2. Si elle est réclamée plusieurs fois, c'est un signal produit.

---

**Objection 6 — « Est-ce que je peux photocopier pour ma classe ? »**

⚠️ **Ne pas répondre avant d'avoir tranché.** Les conditions de vente actuelles sont écrites pour une vente à des **consommateurs
particuliers** et ne définissent pas de licence de classe. Trois questions à
régler avant la mise en vente :
- la grille de suivi et les évaluations sont **conçues pour être
  photocopiées** (le livre l'écrit) : le droit doit suivre l'usage annoncé ;
- une licence « un enseignant, ses classes » est-elle accordée ?
- l'établissement qui veut équiper plusieurs enseignants relève-t-il d'une
  autre licence et d'un autre prix ?

Tant que ce n'est pas écrit, la fiche produit ne doit rien promettre sur ce
point.

---

**Objection 7 — « Il y a la même chose pour les autres niveaux ? »**

**Réponse** : « Pas encore. L'édition professeur telle que décrite ici existe
pour la 6e. » Voir §6. ⚠️ Ne pas annoncer de date tant qu'elle n'est pas
tenue.

---

## 6. Portée : un seul ouvrage, aujourd'hui

**Fait mesuré le 2026-09-12.** Le contenu prof v2 vit dans
`js/data/prof/<niveau>/<module>.prof.js`. Il existe **10 fiches, toutes en
6e**. Les 39 autres chapitres de collège maths, et tous les chapitres de
lycée, physique, SI et BTS, n'en ont pas.

Cela se lit directement dans l'écart de pages entre éditions :

| Ouvrage | Élève | Prof | Écart |
|---|---:|---:|---:|
| **college-maths-6e** | 84 | **152** | **+81 %** |
| lycee-maths-tle | 119 | 143 | +20 % |
| lycee-maths-2nde | 139 | 167 | +20 % |
| college-maths-3e | 125 | 145 | +16 % |
| college-maths (cycle complet) | 439 | 489 | **+11 %** |
| college-maths-5e | 133 | 145 | **+9 %** |

⚠️ **Conséquence commerciale directe.** Sauf pour la 6e, « édition
professeur » désigne encore le livre élève augmenté des corrigés, soit +9 à
+20 % de pages. Vendre ces éditions-là avec l'argumentaire ci-dessus serait
un **argumentaire mensonger**, avec le risque de remboursement et
d'atteinte à la réputation que cela suppose.

**Règle** : cet argumentaire ne s'utilise que pour un ouvrage dont l'édition
professeur passe le contrôle du §7.1. Aujourd'hui : `college-maths-6e`
uniquement.

---

## 7. Chiffres à revérifier avant chaque publication

Le pipeline (`scripts/manuel/`) et les données (`js/data/`) évoluent. **Tout
nombre de ce document doit être recompté** sur le `.tex` réellement livré,
avant toute mise en ligne ou mise à jour de fiche produit.

Ce qui suit est un mode d'emploi de recomptage. **Ne modifie aucun fichier**
du pipeline : ce sont des lectures.

### 7.1 Contrôle préalable — l'ouvrage a-t-il l'édition prof v2 ?

Si la réponse est non, **cet argumentaire ne s'applique pas à cet ouvrage.**

| Contrôle | Commande | Attendu |
|---|---|---|
| Fiches prof du niveau | `ls js/data/prof/<niveau>/*.prof.js \| wc -l` | = nombre de chapitres de l'ouvrage |
| Écart de pages | comparer `"pages"` dans `etat-prof.json` et `etat-eleve.json` | **> +50 %** (v2). Entre +9 % et +20 % = v1, argumentaire invalide |
| Présence des blocs v2 | `grep -c 'begin{sperreur}'` et `grep -c 'chapter{Grille de suivi'` sur le `.tex` prof | > 0 pour les deux |

### 7.2 Les nombres cités, et comment les recompter

Toutes les commandes se lancent depuis
`Manuel scolaire/<ouvrage>/`, sur `<ouvrage>-prof.tex` et
`<ouvrage>-eleve.tex`. `grep -c -F` (chaîne littérale) est requis : les
motifs contiennent des antislashs et des accolades.

| # | Chiffre cité | Valeur au 2026-09-12 | Comment le recompter |
|---|---|---:|---|
| C1 | Pages, édition élève | **84** | `"pages"` dans `etat-eleve.json`, ou `grep 'Output written' *-eleve.log` |
| C2 | Pages, édition prof | **152** | idem sur `etat-prof.json` / `*-prof.log` |
| C3 | Exercices principaux | **30** (les deux) | `grep -c -F 'subsection*{Exercice'` |
| C4 | **Exercices supplémentaires** | **150** | `grep -c -F 'textbf{Supplément'` sur le `.tex` prof. Doit valoir 0 sur l'élève |
| C5 | Suppléments par chapitre | **15** | C4 ÷ nombre de chapitres. ⚠️ Le livre **écrit ce nombre en toutes lettres** dans le chapeau de chaque banque : vérifier qu'il concorde |
| C6 | Questions de quiz | **30** | `grep -F 'subsection*{Question' <f> \| grep -vc 'pts'` |
| C7 | Questions d'évaluation | **50** | `grep -F 'subsection*{Question' <f> \| grep -c 'pts'` |
| C8 | Problèmes de synthèse | **10** | `grep -c -F 'section{Problème de synthèse}'` |
| C9 | **Total énoncés** | **120** élève / **270** prof | C3 + C4 + C6 + C7 + C8 |
| C10 | **Corrigés en place** | **190** | `grep -c -F 'begin{spcorrige}'` (prof). Doit valoir 0 sur l'élève |
| C11 | Étapes moyennes par corrigé | **2,9** | total des `\item` dans les blocs `spcorrige` ÷ C10 |
| C12 | **Fiches d'erreurs** | **40** | `grep -c -F 'begin{sperreur}'` |
| C13 | Erreurs par chapitre | **4** en moyenne | C12 ÷ nombre de chapitres. ⚠️ La spec dit « trois ou quatre » : dire **« 4 en moyenne »**, jamais « 4 par chapitre » |
| C14 | Encadrés « Pour l'enseignant » | **10** | `grep -c -F 'begin{spprof}'` |
| C15 | Grilles de compétences par chapitre | **10** | `grep -c -F 'subsection*{Grille de compétences}'` |
| C16 | **Lignes de la grille de suivi** | **26 élèves** | compter les lignes `\rule{0pt}{5.3mm}N.` dans le bloc `chapter{Grille de suivi` ⚠️ **valeur en cours d'évolution** |
| C17 | Colonnes de la grille de suivi | **6 compétences** | compter les `\rotatebox` de l'en-tête du même tableau |
| C18 | Chapitres de l'ouvrage | **10** | `chapitres.length` dans `etat-prof.json` |
| C19 | Répartition des pages par poste | §2.3 | parser le `.toc` : chaque `\contentsline{section}{...}{page}`, l'étendue d'une section = page suivante − page courante |
| C20 | Fiches prof existantes | **10** (6e uniquement) | `find js/data/prof -name '*.prof.js' \| wc -l` |

### 7.3 Points de vigilance connus

- ⚠️ **C4 / C5 (banque d'exercices) et C16 (grille de suivi) sont les deux
  chiffres explicitement signalés comme en cours d'évolution.** Les
  recompter systématiquement, même si le reste n'a pas bougé.
- ⚠️ **C5 est écrit en dur dans le PDF** (« Ces 15 énoncés ne figurent pas
  dans l'édition élève »). Si le pipeline change le nombre d'énoncés sans
  changer cette phrase, le livre se contredit lui-même. Le vérifier
  visuellement sur une page de banque.
- ⚠️ **Le comptage se fait sur le `.tex` livré, jamais sur ce document.**
  Les valeurs de la colonne « au 2026-09-12 » sont un témoin, pas une
  source.
- Un `grep` avec motif régulier sur ces fichiers échoue silencieusement
  (antislashs, accolades, lignes très longues). **Utiliser `grep -c -F`.**
- Les nombres apparaissent à **six endroits** dans la fiche produit (§3) :
  description courte, description longue (150, 40, 190, 152), liste à puces
  (152, 270, 150, 190, 40, 10, 26). Les reprendre tous.

### 7.4 Rappel : où ces chiffres sont publiés

Une fois recomptés, à mettre à jour partout où ils sont écrits :

- la quatrième de couverture du PDF ⚠️ **quand elle aura été différenciée**
  (§4, défaut 1) ;
- ce document, §2 et §7.2.

---

## Sources internes

- `Manuel scolaire/college-maths-6e/college-maths-6e-prof.tex` (compilé le 2026-09-11)
- `Manuel scolaire/college-maths-6e/college-maths-6e-eleve.tex`
- `Manuel scolaire/college-maths-6e/college-maths-6e-{prof,eleve}.toc` — pages réelles
- `Manuel scolaire/college-maths-6e/etat-{prof,eleve}.json`
- `docs/superpowers/specs/2026-09-07-edition-professeur-v2-design.md` — périmètre v2
- `docs/manuels/PROGRESSION.md` — état de la collection

Données de marché : voir `docs/manuels/positionnement-prix.md`.
