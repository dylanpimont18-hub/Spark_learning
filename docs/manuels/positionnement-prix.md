# Positionnement prix — manuels PDF

> **Document de travail interne.** Trois registres sont séparés dans tout le
> document :
> **FAIT** = compté dans le fichier livré · **MARCHÉ** = sourcé, avec URL ·
> **RECOMMANDATION** = jugement, discutable.
>
> Ouvrage de référence : `college-maths-6e`, éditions du 2026-09-11
> (élève 84 p., prof 152 p.). Chiffres établis le **2026-09-12**.
>
> Voir `argumentaire-edition-professeur.md` pour le détail du différentiel
> élève/prof et la procédure de recomptage (§7 de ce document-là).

---

## Résumé pour décider vite

- **FAIT** : l'édition prof 6e est un vrai produit distinct (+81 % de pages,
  ×2,25 d'énoncés). L'édition élève 6e, elle, est **maigre** : 84 pages,
  120 énoncés, dont 31 pages de cours.
- **MARCHÉ** : le manuel élève 6e d'éditeur est un quasi-monoprix à
  **24,90–25,90 €** pour ~310 pages. Le livre du professeur est **gratuit en
  numérique** chez la plupart des éditeurs, pour qui a une adresse académique.
- **RECOMMANDATION** : élève **12 €**, professeur **29 €**. Et surtout :
  **ne pas lancer l'édition élève 6e seule à ce volume** — la vendre en
  complément ou dans le volume de cycle.
- **RECOMMANDATION, la plus importante** : le défaut 24 est réel. **Le volume
  d'exercices doit augmenter avant qu'un prix enseignant soit confortable.**
  Le levier n°1 (L1 ci-dessous) est de porter la banque de 15 à 30 énoncés par
  chapitre — le pipeline la génère déjà, c'est un paramètre, pas une réécriture.

---

## 1. FAIT — état des lieux du volume

Compté dans les `.tex` générés et leurs `.toc` (pages réelles de compilation).
Méthode et commandes de recomptage : `argumentaire-edition-professeur.md`, §7.

### 1.1 Répartition des pages, édition professeur (152 p.)

| Poste | Pages | % du PDF |
|---|---:|---:|
| Exercices, quiz, problèmes (énoncés **et** corrigés) | **66** | 43,4 % |
| Cours (Découvrir, Définitions, Méthode, Schéma, Points clés) | **31** | 20,4 % |
| Évaluations + grilles de compétences | **23** | 15,1 % |
| Erreurs fréquentes et remédiation | **14** | 9,2 % |
| Index des notions | 12 | 7,9 % |
| Grille de suivi de classe | 2 | 1,3 % |
| Formulaire | 2 | 1,3 % |
| Réponses aux exercices | 1 | 0,7 % |
| Liminaires + progression annuelle (pagination romaine) | ~6 | — |

### 1.2 Répartition des pages, édition élève (84 p.)

| Poste | Pages | % du PDF |
|---|---:|---:|
| Cours | **26** | 31,0 % |
| Exercices, quiz, problèmes | **24** | 28,6 % |
| Évaluations | **22** | 26,2 % |
| Index des notions | 8 | 9,5 % |
| Formulaire | 2 | 2,4 % |
| Réponses aux exercices | 1 | 1,2 % |

⚠️ **Le constat qui fait mal, et qui est juste** : dans l'édition élève,
**24 pages seulement** sont des exercices, contre 26 de cours et 22
d'évaluation. Un élève qui achète ce PDF pour s'entraîner reçoit à peu près
autant de contrôles que d'exercices. **Ce n'est pas le bon équilibre pour un
produit vendu à des familles.**

Précision méthodologique : l'index occupe 12 pages (prof) et 8 (élève) parce
qu'il est en fin d'ouvrage et absorbe les pages de fin jusqu'à la quatrième de
couverture. Le contenu d'index réel est de 55 entrées dans les deux éditions —
donc **1 à 2 pages utiles**, le reste étant des pages de fin. La correction ne
change pas la conclusion.

### 1.3 Inventaire des énoncés

| Type | Élève | Prof |
|---|---:|---:|
| Exercices principaux | 30 | 30 |
| Banque d'exercices supplémentaires | 0 | **150** |
| Questions de quiz | 30 | 30 |
| Questions d'évaluation | 50 | 50 |
| Problèmes de synthèse | 10 | 10 |
| **Total** | **120** | **270** |
| dont corrigés rédigés en place | 0 | **190** |

**Par chapitre** : l'élève reçoit **3 exercices**, 3 questions de quiz,
1 problème et 1 évaluation de 5 questions. **Trois exercices d'entraînement
par chapitre est très en dessous de tout manuel du marché.**

### 1.4 Le reste de la collection

**FAIT.** Écart de pages prof/élève par ouvrage, depuis les `etat-*.json` :

| Ouvrage | Élève | Prof | Écart |
|---|---:|---:|---:|
| **college-maths-6e** | 84 | **152** | **+81 %** |
| lycee-maths-tle | 119 | 143 | +20 % |
| lycee-maths-2nde | 139 | 167 | +20 % |
| lycee-physique-1re | 121 | 145 | +20 % |
| bts-si | 85 | 101 | +19 % |
| college-maths-3e | 125 | 145 | +16 % |
| bts-maths | 335 | 393 | +17 % |
| college-maths (cycle) | 439 | 489 | +11 % |
| college-maths-4e | 119 | 131 | +10 % |
| college-maths-5e | 133 | 145 | **+9 %** |

Il existe **10 fiches prof**, toutes en 6e (`js/data/prof/6e/`). ⚠️ **Aucun
autre ouvrage ne peut être vendu en « édition professeur » au sens de
l'argumentaire.** Pour les autres, l'édition prof est le livre élève plus les
corrigés : +9 à +20 %.

---

## 2. MARCHÉ — ce que pratique le marché français

Recherche menée le **2026-09-12**. Prix TTC sauf mention (TVA 5,5 % sur le
livre). ⚠️ signale un prix venant d'un revendeur tiers ou d'une source non
confirmée par l'éditeur.

### 2.1 Manuel élève 6e, éditeurs classiques (éditions 2025)

| Éditeur | Collection | Prix | Pages | Source |
|---|---|---:|---:|---|
| Nathan | Transmath 6e | 25,90 € | 312 | [nathan.fr](https://www.nathan.fr/catalogue/transmath-6e-livre-de-l-eleve-9782095052812) |
| Nathan | Panoramaths 6e | 25,90 € | 304 | [nathan.fr](https://www.nathan.fr/catalogue/panoramaths-6e-livre-de-l-eleve-9782095036737) |
| Bordas | Myriade 6e | 25,50 € ⚠️ | 319 | revendeur [librest.com](https://www.librest.com/livres/maths-6e--programme-2025_0-12541067_9782047403624.html) |
| Hatier | TAM Maths 6e | 25,10 € | 320 | [editions-hatier.fr](https://www.editions-hatier.fr/livre/tam-maths-6e-ed-2025-livre-eleve-9782401118973) |
| Hachette | Mission Indigo 6e | 24,90 € | 320 | [enseignants.hachette-education.com](https://www.enseignants.hachette-education.com/livre/mission-indigo-6e-livre-eleve-ed-2025-9782017320500/) |
| Belin | Multiples Maths 6e | 24,90 € ⚠️ | non trouvé | non confirmé sur le site éditeur |
| Génération 5 | iParcours Maths 6e | **20,90 €** | — | [generation5.fr](https://www.generation5.fr/college-mathematiques--47.php) |

**Quasi-monoprix : 24,90 – 25,90 €** chez les grands éditeurs, ~21 € chez le
discounter. **Norme de volume : 300 à 320 pages.**

### 2.2 Le livre du professeur — le fait décisif

**a) Quand il est vendu séparément (papier)**

| Éditeur | Prix | Pages | Source |
|---|---:|---:|---|
| Bordas — Myriade 6e | **25,00 €** | 162 | [editions-bordas.fr](https://www.editions-bordas.fr/ouvrage/myriade-6e-livre-du-professeur-ed-2025-9782047408056.html) |
| Nathan — Panoramaths 6e | 20,00 € ⚠️ | 126 | revendeur [librest.com](https://www.librest.com/livres/maths-6e--livre-du-professeur--programme-2025_0-12588819_9782095057558.html) |
| Magnard — Maths et tiques 6e | 9,90 € | 112 | [magnard.fr](https://www.magnard.fr/livre/9782210120440-maths-et-tiques-6e-2025-livre-du-professeur) |

**Le rapport qui compte** : Bordas vend 162 pages de contenu enseignant à
25,00 €, et 319 pages de contenu élève à 25,50 €. **Le marché paie le contenu
enseignant environ deux fois plus cher à la page.** C'est le meilleur appui
chiffré pour un différentiel de prix élève/prof.

**b) Quand il est gratuit — et c'est la pratique dominante ⚠️**

- **Lelivrescolaire.fr** : livre du professeur **entièrement gratuit**, en
  numérique, sur adresse académique ; déblocage manuel possible sur
  justificatif pour les enseignants sans adresse académique et l'IEF —
  [helpdesk.lelivrescolaire.fr](https://helpdesk.lelivrescolaire.fr/fr/article/je-souhaite-acceder-au-livre-du-professeur-gratuit-1npgcw1/)
- **Bordas** : livre du professeur, corrigés de cahiers, fiches de
  différenciation, activités « gratuitement… selon les manuels » —
  [editions-bordas.fr](https://www.editions-bordas.fr/les-ressources-gratuites-pour-le-college.html)
- **Hatier** : livre du professeur PDF « réservé aux enseignants identifiés » ;
  manuel numérique « GRATUIT pour L'ENSEIGNANT et pour LES ELEVES » —
  [editions-hatier.fr](https://www.editions-hatier.fr/livre/maths-monde-6e-livre-du-professeur-version-numerique-pdf-9782278086207)
- **Magnard** : ressources, livres du professeur et manuels numériques gratuits
  pour les enseignants inscrits (le papier reste à 9,90 €)
- **Hachette** : version numérique enseignant offerte avec le papier

**Spécimen enseignant** (manuel élève à tarif prescripteur) : Hachette Mission
Indigo 6e à **6,00 €** (contre 24,90 € public) ; Nathan à **9,00 €** avec
abonnement enseignant (contre 25,90 €).

⚠️ **Conclusion marché** : un enseignant titulaire français obtient le manuel
élève à 6–9 € et le livre du professeur **gratuitement**. Une édition
professeur payante entre frontalement en concurrence avec du gratuit — sauf
pour qui n'a pas d'adresse académique ni de manuel adopté.

### 2.3 Sésamath — le plancher du marché

Modèle associatif, licence libre (GNU FDL et CC-BY-SA), manuels numériques
gratuits sans inscription —
[manuel.sesamath.net](https://manuel.sesamath.net/?page=faq).
Papier édité par des tiers : **Cahier Sésamath 6e (2025), Magnard : 6,90 €,
176 pages** — [magnard.fr](https://www.magnard.fr/livre/9782210119369-sesamath-6e-2025-cahier-eleve).

**176 pages d'exercices pour 6,90 €** est le point de comparaison le plus
défavorable de tout ce document, et il faut le regarder en face.

Tarifs services (LaboMEP 25–95 €, manuels numériques 20 €, SACoche 50 €) :
⚠️ **source de 2013, non fiable aujourd'hui**, à ne pas citer.

### 2.4 Génération 5 — le discounter

Prix TTC — [generation5.fr](https://www.generation5.fr/college-mathematiques--47.php) :

- iParcours Maths 6e manuel : **20,90 €** · cahier d'exercices : **6,50 €** ·
  cahier-manuel : **7,60 €** · numérique Premium : **à partir de 2,00 €/an**
- Recueils et outils enseignant : Maths éco-responsables **26,90 €** ·
  Mon Labo des Maths Cycle 3 **29,00 €** · Evolu Fiches SEGPA **36,00 €** ·
  Maths en-vie **45–55 €** · AlgoPython **19,00 €** · Algoblocs **69,00 €**

**À retenir** : sur le segment « ressource enseignant hors manuel », les prix
vont de **19 € à 69 €**. C'est **là** que se situe un produit comme l'édition
professeur, pas dans le segment manuel.

### 2.5 Ressources enseignantes payantes en ligne

| Offre | Prix | Source |
|---|---|---|
| **Pass-Education** — >50 000 fiches PDF | 1 an **156 €** · 6 mois 108 € · 3 mois 84 € · pass illimité **790 €** · IEF 360–720 €/an | [pass-education.fr](https://www.pass-education.fr/pe-extranet-fr/) |
| **Kwyk** — banque d'exercices en ligne | **8 €/mois/élève** ; offre à **50 €** jusqu'à fin août ⚠️ *tarifs issus de la FAQ, pas d'une grille officielle* | [kwyk.fr](https://www.kwyk.fr/questions/apropos/) |
| **MieuxEnseigner France** — place de marché entre enseignants | fourchette **0,84 – 50,40 €**, **cœur de marché 1,20 – 6,72 €** | [mieuxenseigner.fr](https://www.mieuxenseigner.fr/boutique/) |
| **Retz** — clé USB ressources Cycle 2 | 95,00 € ; manuels numériques gratuits pour les adoptants | [editions-retz.com](https://www.editions-retz.com/format-cle-usb) |

### 2.6 PDF vendus en direct par des indépendants

**Donnée la plus faible du dossier.** Le seul proxy fiable est
MieuxEnseigner : cœur de marché **1,20 – 6,72 €**, plafond observé ~50 €.
Ce sont des **ressources unitaires** (une séquence, une évaluation), pas des
ouvrages d'année.

⚠️ **Aucune donnée trouvée** sur un indépendant vendant en France un manuel
PDF complet de niveau à 15–30 €. C'est soit un vide de marché exploitable,
soit le signe que le segment ne se vend pas. **Impossible de trancher avec les
sources réunies** — et c'est en soi une information : le produit est sans
comparable direct, donc son prix ne peut pas être calé par imitation.

### 2.7 Volume des concurrents

**Manuel élève 6e** : Hatier 320 p. · Hachette 320 p. · Bordas 319 p. ·
Nathan Transmath 312 p. · Nathan Panoramaths 304 p. → **norme 300–320 pages**.
Mission Indigo 6e compte **13 chapitres** (contre 10 ici).

**Livre du professeur** : Magnard 112 p. · Nathan 126 p. · Bordas 162 p. →
**norme 110–165 pages**.

⚠️ **Nombre d'exercices par manuel : non trouvé, chez aucun éditeur.** Aucun ne
publie ce chiffre. On ne peut donc pas affirmer « les concurrents ont N fois
plus d'exercices » — seulement que le volume de pages est 3,7 fois supérieur
(310 contre 84) et que la part exercices y est manifestement plus grande.
**Ne pas chiffrer cette comparaison en public.**

---

## 3. RECOMMANDATION — prix

### 3.1 Le raisonnement

Quatre contraintes se croisent.

1. **Le plafond mental est à 25 €** pour un manuel de 6e. C'est un prix
   *papier*, et un PDF est jugé moins cher à contenu égal (pas d'objet, pas
   d'impression). **Dépasser 25 € sur l'édition élève est exclu.**
2. **Le plancher est très bas** : Sésamath donne 176 pages d'exercices à
   6,90 €, et Génération 5 un cahier à 6,50 €. En dessous de 10 €, on entre
   dans une zone où le prix lui-même signale « fiche photocopiable », pas
   « ouvrage ».
3. **Le contenu enseignant se paie ~2× le prix à la page** (Bordas :
   25,00 € / 162 p. contre 25,50 € / 319 p.). Le différentiel de prix
   élève/prof est donc **légitime sur le marché** — mais uniquement s'il n'est
   pas déjà offert gratuitement au client visé.
4. **Le volume actuel ne soutient pas un prix haut.** 84 pages élève contre
   310 pour un manuel d'éditeur, 3 exercices d'entraînement par chapitre.
   C'est le défaut 24, et il est fondé.

### 3.2 Les prix recommandés

**`college-maths-6e`, en l'état (élève 84 p. / prof 152 p.) :**

| Édition | Prix recommandé | Fourchette acceptable | Ratio prof/élève |
|---|---:|---|---:|
| Élève | **12 €** | 9 – 14 € | — |
| Professeur | **29 €** | 24 – 34 € | **×2,4** |

**Pourquoi 12 € pour l'élève.** Le PDF fait le quart des pages d'un manuel à
25 €, mais il n'est pas quatre fois moins utile : il est ciblé, sans pages
d'appareil éditorial, avec les corrections en fin d'ouvrage et un formulaire.
12 € le place à **la moitié du manuel papier**, nettement au-dessus du cahier
Sésamath (6,90 €) qu'il dépasse en cours mais pas en exercices, et au-dessus
de la zone « fiche unitaire » (1–7 €) où il serait mal classé.
⚠️ **Mais voir §3.3 : je ne recommande pas de le lancer seul.**

**Pourquoi 29 € pour le professeur.** Trois appuis :
- il tombe dans la **fourchette « ressource enseignant » de Génération 5**
  (19–69 €, avec 26,90 € et 29,00 € comme points constatés) — c'est le bon
  segment, celui d'un outil de travail acheté une fois ;
- il vaut **moins d'un cinquième d'un an de Pass-Education (156 €)** et
  **moins qu'un mois de Kwyk pour quatre élèves** — c'est le bon ordre de
  grandeur face aux abonnements ;
- le ratio ×2,4 sur l'édition élève est cohérent avec le rapport
  page-à-page observé chez Bordas, alors même que l'édition professeur
  contient **aussi** l'intégralité de l'édition élève.

**Pourquoi pas plus haut.** À 39 € ou plus, on entre dans une comparaison
directe avec des ressources enseignantes plus lourdes (Evolu Fiches à 36 €,
Maths en-vie à 45–55 €) que 152 pages ne soutiennent pas, et on rend
l'objection « le livre du prof est gratuit chez mon éditeur » beaucoup plus
coûteuse à surmonter.

**Pourquoi pas plus bas.** En dessous de 24 €, le différentiel avec l'édition
élève devient trop faible pour être lisible, et le prix contredit le
positionnement « outil de travail professionnel ».

### 3.3 Trois décisions à prendre avant de fixer ces prix

1. ⚠️ **Ne pas lancer l'édition élève 6e seule.** 84 pages dont 24 d'exercices
   est en dessous de ce qu'un parent attend pour 12 €. Deux options : la vendre
   **en complément** (offerte ou à 5 € avec l'édition professeur, en bundle
   avec le volume de cycle), ou **attendre L1/L2** (§4). Le volume de cycle
   `college-maths` (439 p. élève) n'a pas ce problème.
2. ⚠️ **N'ouvrir l'édition professeur que sur la 6e** tant que les fiches prof
   des autres niveaux n'existent pas (§1.4). Vendre une « édition professeur »
   à +9 % de pages au prix prof serait le scénario de remboursement.
3. ⚠️ **Trancher la licence de photocopie avant la mise en vente.** Le livre
   annonce des documents « à photocopier » (grille de suivi, évaluations)
   alors que les CGV (`docs/boutique/cgv.md`) sont écrites pour un
   consommateur particulier et ne prévoient aucune licence de classe. C'est
   une incohérence produit/contrat, pas une question de prix — mais elle se
   règle avant la première vente.

### 3.4 Prix après montée en volume

**RECOMMANDATION conditionnelle.** Si L1 et L2 (§4) sont faits — banque portée
à 30 énoncés par chapitre et exercices élève portés à 8 par chapitre —
l'ouvrage passerait à environ 130 p. élève et 230 p. prof (estimation par
extrapolation de la densité actuelle, **à recompter après compilation**).
Les prix deviendraient alors :

| Édition | Prix cible après L1+L2 |
|---|---:|
| Élève | **17 €** |
| Professeur | **39 €** |

⚠️ **Ne pas afficher ces prix aujourd'hui.** Ils supposent un produit qui
n'existe pas encore. Mentionnés ici pour montrer ce que le travail de volume
rapporte : **+10 € par vente professeur**, sur un contenu que le pipeline
génère déjà.

---

## 4. RECOMMANDATION — leviers de valeur perçue

Classés par rapport impact / effort. « Effort » est une estimation, à valider
par qui touche au pipeline.

### Effort faible, impact fort — à faire avant toute mise en vente

**L0. Différencier la quatrième de couverture et l'avant-propos de l'édition
professeur.** **FAIT vérifié : ils sont aujourd'hui identiques mot pour mot à
ceux de l'édition élève.** La page qui sert d'argumentaire dans tout livre ne
dit rien du différentiel. C'est du texte de gabarit dans
`scripts/manuel/ouvrage.js`. **Impact : très fort** (c'est la première chose
que voit l'acheteur après téléchargement). **Effort : quelques heures.**

**L1. Porter la banque d'exercices de 15 à 30 énoncés par chapitre.** Le
pipeline la génère déjà, par type de tâche, avec corrigé. Passer de 150 à 300
énoncés fait basculer le total prof de 270 à 420 et ajoute ~30 pages.
**C'est le meilleur rapport valeur/effort de toute la liste** : c'est un
paramètre de génération, pas une réécriture. ⚠️ Vérifier que la phrase
« Ces 15 énoncés » se met à jour toute seule.
**Impact : fort. Effort : faible** (si le paramètre existe).

**L2. Porter les exercices de l'édition élève de 3 à 8 par chapitre.** C'est
le cœur du défaut 24 côté élève. 3 exercices par chapitre ne se défend pas
face à un cahier à 6,90 € qui en contient des dizaines. Cela porterait
l'ouvrage élève à ~130 pages avec un ratio exercices/cours enfin correct.
**Impact : très fort. Effort : moyen** (dépend d'où viennent les énoncés — si
la banque prof peut alimenter l'élève, c'est presque gratuit).

**L3. Vendre en bundle plutôt qu'à l'unité.** « Édition professeur + édition
élève » à 32 € règle en même temps le problème du volume élève (§3.3) et
augmente le panier. Aucun développement, une variante Shopify.
**Impact : moyen-fort. Effort : très faible.**

### Effort moyen, impact fort

**L4. Une deuxième version de chaque évaluation (version B).** Explicitement
hors périmètre v2, et c'est **l'objection n°5 de l'argumentaire**, sans
réponse satisfaisante aujourd'hui : les énoncés d'évaluation prof sont ceux de
l'édition élève, qui est en vente. Une version B rend les évaluations
réellement utilisables pour noter. **C'est probablement le contenu enseignant
le plus vendeur après la banque d'exercices.**
**Impact : fort. Effort : moyen.**

**L5. Étendre les fiches prof aux 39 autres chapitres de collège maths.**
Aujourd'hui : 10 fiches sur 49. Cela ne change pas la valeur du 6e, mais
ouvre la vente de l'édition professeur sur 5e, 4e, 3e et le volume de cycle —
c'est-à-dire **le chiffre d'affaires, pas le prix unitaire**.
**Impact : fort sur le CA. Effort : élevé** (production + relecture par lots).

**L6. Livrer les évaluations en fichiers séparés, prêts à photocopier.** Un
PDF d'évaluation par chapitre, une page, sans le reste du livre. C'est le
geste que l'enseignant fait de toute façon (extraire les pages) et qui
n'apparaît nulle part dans le produit. Peu de contenu nouveau, beaucoup
d'usage. ⚠️ Suppose L4 (une version B) et la licence de photocopie tranchée.
**Impact : moyen-fort. Effort : moyen.**

### Effort faible, impact moyen

**L7. Afficher le nombre d'énoncés sur la fiche produit et la couverture.**
« 270 énoncés, 190 corrigés » est un chiffre que **personne** n'affiche sur ce
marché (aucun éditeur ne publie son nombre d'exercices — §2.7). C'est un point
de différenciation gratuit, à condition que le chiffre soit exact et
recompté (argumentaire, §7).
**Impact : moyen. Effort : très faible.**

**L8. Un extrait gratuit d'un chapitre complet en édition professeur.** Le
meilleur remède à l'objection « comment je sais que c'est bon ». Un chapitre
sur dix, avec sa banque, ses erreurs fréquentes et son évaluation. Le pipeline
sait déjà compiler un chapitre seul (`--prototype`).
**Impact : moyen-fort sur la conversion. Effort : faible.**

**L9. Filigrane nominatif** (déjà noté dans `docs/boutique/README.md`). Ne crée
pas de valeur perçue mais protège le prix en dissuadant le partage. À brancher
quand le volume le justifie.
**Impact : faible à court terme. Effort : faible.**

### Ce qui n'en vaut pas la peine maintenant

- **Une version imprimée.** Décision déjà prise : format numérique uniquement.
  Ne pas rouvrir pour une question de prix.
- **Un abonnement.** Le produit est un ouvrage d'année, acheté une fois. Un
  abonnement l'oppose frontalement à Pass-Education (156 €/an, 50 000 fiches)
  et à Kwyk, sur un terrain où le catalogue est le seul argument. Perdu
  d'avance.
- **Chercher à concurrencer les 300 pages d'un éditeur.** Impossible et inutile :
  ces pages contiennent de l'appareil éditorial (photos, doubles pages
  d'ouverture, rubriques transversales) qui n'a pas de sens ici. **La cible
  n'est pas 300 pages — c'est un ratio exercices/cours défendable.**

---

## 5. La réponse franche à la question du défaut 24

**Oui, le manuel doit grossir avant de justifier confortablement un prix
enseignant.** Pas de la façon dont la question est posée, cependant.

Ce n'est **pas** un problème de nombre total de pages : 152 pages d'outil
enseignant est cohérent avec le marché (les livres du professeur d'éditeur
font 112 à 165 pages, §2.7). L'édition professeur est, en volume, dans la
norme de sa catégorie.

Le problème est ailleurs, et il est double :

1. **L'édition élève est le vrai point faible**, pas la prof. 84 pages, 3
   exercices d'entraînement par chapitre, autant de pages d'évaluation que
   d'exercices. Face à un cahier Sésamath de 176 pages à 6,90 €, elle ne tient
   pas. **C'est elle qu'il ne faut pas vendre seule aujourd'hui.**
2. **L'édition professeur, elle, est vendable dès maintenant à 29 €** — mais
   **uniquement sur la 6e**, et **uniquement après L0** (différencier la
   quatrième de couverture, qui aujourd'hui ne dit rien du produit acheté).
   Son contenu exclusif est réel, substantiel et vérifiable : 150 exercices
   supplémentaires corrigés, 40 fiches d'erreurs, une progression annuelle,
   des évaluations par compétences. Ce n'est pas du remplissage.

**L'ordre que je recommande :**

1. **L0** — différencier quatrième de couverture et avant-propos *(bloquant)*
2. **Trancher la licence de photocopie** *(bloquant)*
3. **Mettre en vente l'édition professeur 6e seule, à 29 €**, avec l'édition
   élève en bundle à 32 € plutôt qu'en produit isolé
4. **L1** — banque à 30 énoncés/chapitre
5. **L2** — exercices élève à 8/chapitre → repositionner à 17 € / 39 €
6. **L4** puis **L5** — version B, puis extension aux autres niveaux

Vendre l'édition professeur 6e maintenant est **défendable**. Vendre l'édition
élève 6e seule à 12 € **ne l'est pas encore**, et vendre une « édition
professeur » sur un autre niveau **ne l'est pas du tout**.

---

## 6. Ce que je n'ai pas pu sourcer

À ne pas combler par estimation. Si un de ces points devient décisif, il faut
le rechercher spécifiquement.

1. **Nombre d'exercices par chapitre ou par manuel, chez tous les éditeurs.**
   Aucun ne le publie. C'est la donnée qui manque le plus : elle empêche de
   chiffrer honnêtement l'écart de volume d'exercices.
2. **Prix du manuel papier 6e de Lelivrescolaire.fr** — non affiché.
3. **Prix Belin Multiples Maths 6e** — non confirmé sur le site de l'éditeur.
4. **Prix du livre du professeur chez Hatier, Hachette et Belin** — soit
   gratuit sur compte enseignant, soit non tarifé publiquement.
5. **Prix Bordas depuis le site éditeur** (page 404 ; le 25,50 € vient du
   revendeur Librest).
6. **Tarifs Jocatop, MDI, La Classe.**
7. **Commission vendeur de MieuxEnseigner** — utile si une place de marché est
   envisagée comme canal.
8. **Le marché du PDF pédagogique indépendant maths collège français** —
   quasi inexistant dans les résultats. Aucun comparable direct d'un manuel
   PDF de niveau vendu 15–30 € par un indépendant. ⚠️ **Le prix recommandé
   n'est donc calé sur aucun concurrent direct** : il est déduit du segment
   « ressource enseignant » (Génération 5) et du rapport page-à-page (Bordas).
   C'est le point le plus fragile de la §3.
9. **Tarifs Sésamath / LaboMEP / SACoche actualisés** — la source trouvée date
   de 2013, inutilisable.
10. **Tarifs Kwyk depuis une grille officielle** — les 8 €/mois/élève viennent
    de la FAQ.
11. **Élasticité au prix sur ce produit** : aucune vente réalisée à ce jour,
    donc aucune donnée. Les prix de §3.2 sont un point de départ à corriger
    aux premières ventes, pas une vérité.

---

## Sources

**Internes** — `Manuel scolaire/college-maths-6e/*.{tex,toc,json,log}` ·
`Manuel scolaire/*/etat-*.json` · `js/data/prof/` ·
`docs/manuels/PROGRESSION.md` ·
`docs/superpowers/specs/2026-09-07-edition-professeur-v2-design.md` ·
`docs/boutique/` (CGV, remboursement — aucun prix n'y figure).

**Marché** — toutes les URL sont citées en §2, consultées le **2026-09-12**.
Les prix de manuels scolaires changent à chaque rentrée : **revérifier avant
toute décision de prix prise après juin 2027.**
