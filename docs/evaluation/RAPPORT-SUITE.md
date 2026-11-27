# Rapport — suite du module de devoir en classe

27 novembre 2026. Références : [CAHIER-DES-CHARGES.md](CAHIER-DES-CHARGES.md), [RAPPORT-MVP-2-4.md](RAPPORT-MVP-2-4.md).

## En bref

| Priorité | État |
| --- | --- |
| 1. Questions rédigées | **En ligne.** Moteur, saisie, relecture, pré-correction IA et tests. **254 questions rédigées ou mixtes** converties des 16 DS et des 16 TD, importées en production (banque : 644 exercices). |
| 2. Retardataire | **En ligne.** Il compose sur le temps restant et finit avec la classe. |
| 3. Suivi dans le temps | **En ligne**, première version : sous-onglet « Suivi », pour vous seul. |
| 4. Chapitres 11, 14, 17 à 21 | **Non commencé.** Voir la section 6. |

Deux choses n'ont toujours **jamais été essayées en vrai** : un passage complet avec une copie, et un appel réel à l'IA. Le nouveau prompt et le nouveau schéma de sortie ne sont prouvés que contre la fausse IA des tests (section 5).

## Ajout du soir : la démarche du technicien

Demande du 27/11 au soir : accentuer la démarche d’un technicien, exiger partout la formule littérale avec ses unités, donner du poids aux unités, et ne plus faire du résultat le gros critère. En ligne (cache `?v=87`, fonctions redéployées, prompt `2026-11-27.3`).

**Barème par défaut des calculs** (328 exercices, plus les 9 mixtes au prorata) :

| Critère | Avant | Maintenant |
| --- | --- | --- |
| Formule littérale, avec les unités | 40 (« méthode ou formule ») | **40** |
| Application numérique | 30 | **20** |
| Résultat | 20 | **15** |
| Unité du résultat | 10 | **25** |

- 19 calculs dont le résultat n’a pas d’unité : formule littérale 50, application numérique 30, résultat 20.
- **37 exercices de lecture** (diagramme de l’air humide, diagrammes enthalpiques) gardent leur barème : la valeur lue y est la question. C’est le cas « sauf si la question demande explicitement le résultat ».
- 362 exercices remplacés en production ; banque relue : 644 identiques aux lots, 0 erreur, tous les barèmes font 100.

**Consignes de l’IA** (trois règles ajoutées, 15 au total) :

- formule : tous les points seulement si elle est écrite en lettres avant les valeurs, avec l’unité de chaque grandeur ; sans les unités, les deux tiers au plus ; posée directement en chiffres, la moitié au plus ; ni formule ni explication, zéro sur ce critère même si le résultat est juste ;
- unités : une conversion fausse ou une unité oubliée est relevée dans les erreurs ; un résultat juste sans démarche ne reçoit que les points du résultat et de son unité (40 sur 100 au plus), sous l’étiquette « résultat non justifié » ; un résultat aberrant non commenté est relevé sous « ordre de grandeur non contrôlé » ;
- démarche : pour chaque exercice, l’IA rend l’état des étapes **Analyser, Choisir la méthode, Calculer, Contrôler, Conclure** (faite, en erreur, absente), en omettant celles que l’énoncé n’appelle pas. Ces étapes commentent ; les points restent ceux du barème.

**Étudiant** : une consigne en salle d’attente et en haut de la copie — « Travaillez comme un technicien : expliquez tout. Écrivez toujours la formule en lettres, avec les unités, avant le calcul. Contrôlez votre résultat, puis concluez. Un résultat seul, sans explication, compte très peu. » Les blocs s’appellent maintenant « Formule littérale, avec les unités », « Application numérique », « Résultat », « Unité du résultat ».

**Enseignant** : la fiche de relecture affiche « Démarche du technicien, vue par l’IA » ; le suivi d’un étudiant montre la part des exercices où chaque étape est faite (par exemple « Contrôler : 1 sur 3 »).

**Tests** : moteur 44, suivi 10, puis les quatre suites ensemble 155 sur 155 ; bout en bout relancé seul après ajout de deux vérifications (consigne, démarche) : 40 sur 40.

**Choix faits seul** : les poids 40 / 20 / 15 / 25 ; les seuils « deux tiers » et « la moitié » pour une formule incomplète ; laisser les lectures de diagramme à leur barème ; les étapes ne changent pas les points. Tous se règlent en un endroit (`blocsDemarche` dans `js/devoir/devoirEngine.js`, règles 12 à 14 dans `functions/src/ia.ts`).

**Limites** : rien de cela n’a été essayé contre la vraie IA. Les copies déjà tirées gardent l’ancien barème (il est figé au tirage) : il n’y en a pas en production à ce jour. Le coût par exercice augmente d’environ 10 % (estimation, non mesurée).

## 1. Format retenu pour les questions rédigées

Écrit avant de coder, après lecture de la structure d'une copie et d'une correction (blocs méthode / calcul / résultat / unité, un critère noté par bloc).

1. Un exercice porte un `type` : `chiffre` (absent = chiffre, donc **aucune migration** des 390 exercices), `redige` ou `mixte`.
2. `redige` : un énoncé, pas de `corrige.resultat`, et `corrige.elements: [{ id, label, attendu, points }]` — un élément de réponse attendu par argument du corrigé.
3. `mixte` : un calcul suivi d'une question rédigée (« … Conclure. ») : `corrige.resultat` et étapes comme avant, plus les mêmes `elements`.
4. Le barème est la liste des **critères** : les blocs de calcul notés, puis les éléments attendus. Total : 100 points. Il est calculé par le moteur (`baremeDe`), à un seul endroit.
5. La saisie reste en blocs : un bloc `long: true` pour la rédaction (zone haute, 6 000 caractères), seul pour `redige`, après les quatre blocs de calcul pour `mixte`.
6. La copie de l'étudiant ne reçoit que l'énoncé et le libellé des blocs. Éléments attendus, points et réponse du corrigé restent dans la partie privée.
7. L'IA reçoit chaque élément avec son texte attendu, et rend pour chaque critère : points, statut, justification, **passage de la copie cité mot pour mot**, et un drapeau **« incertain »**.
8. Le serveur vérifie ce qui est vérifiable : une citation absente de la copie, ou des points donnés à un élément sans citation, marquent le critère « incertain » et font remonter la copie en tête.
9. La fiche de correction garde la même forme (un critère = une ligne modifiable) : relecture, modification, validation et note sur 20 fonctionnent sans changement.
10. Chaque exercice rédigé garde son `origine` (source Typst et numéro de question) : le corrigé de l'enseignant fait foi, rien n'est inventé.

## 2. Ce qui est en ligne

Site : `main`, cache `?v=86`. Fonctions : 16 fonctions du codebase `devoir` redéployées (`firebase deploy --only functions:devoir`). Règles Firestore : **inchangées** (aucun commit de `firestore.rules`).

**Questions rédigées**

- **Étudiant** : une grande zone « Votre réponse rédigée » ; pour un exercice mixte, les quatre blocs de calcul puis « Conclusion rédigée ». Collage bloqué et brouillon automatique comme pour les calculs.
- **Création d'un devoir** : rien ne change dans les quatre réglages. Le résumé annonce « dont N à rédiger ». Dans « Réglages avancés », un choix « Type de questions » : calculs et rédigées (par défaut), calculs seulement, rédigées seulement.
- **Pré-correction IA** : chaque élément attendu est noté. Sous chaque note : la justification, le **passage cité**, et la mention **« pas sûre »** quand l'IA doute. Le passage cité est surligné dans la copie, à gauche.
- **Contrôle du serveur** : si le passage cité ne figure pas dans la copie, ou si des points sont proposés sans passage, le critère est signalé (« citation à vérifier ») et la copie passe en tête de la liste. La proposition de l'IA n'est pas modifiée : vous tranchez.
- **Relecture** : le corrigé montre les éléments attendus avec leurs points ; chaque note se modifie comme avant ; rien n'est publié aux étudiants.
- **Banque** : bouton « + Nouvelle question rédigée », étiquette du type sur chaque exercice, aperçu des éléments attendus.

**Banque de questions rédigées** — 254 exercices, dans `BTS FED/production/devoirs-en-ligne/chapitre-NN-redige.js` :

| Ch. | Rédigés | Ch. | Rédigés | Ch. | Rédigés | Ch. | Rédigés |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 10 | 05 | 18 | 09 | 20 | 12 | 17 |
| 02 | 4 | 06 | 21 | 10a | 17 | 13 | 17 |
| 03 | 14 | 07 | 19 | 10b | 13 | 15 | 22 |
| 04 | 12 | 08 | 19 | 10c | 16 | 16 | 15 |

245 questions rédigées et 9 exercices mixtes (calcul puis conclusion) ; 94 viennent des DS, 160 des TD et des fascicules. Parmi elles, 15 « notes de calcul à contrôler » (relever les erreurs), dans tous les chapitres dont le TD ou le DS en contient une : le texte de la note est celui du fichier Typst.

**Retardataire**

- La session garde l'heure de fin commune (`fin_prevue`). Un étudiant qui entre après le lancement reçoit cette heure de fin, pas sa durée entière. « Prolonger » recule la fin commune : un retardataire entré ensuite en profite comme les autres.
- Avant de confirmer son nom, il lit : « L'épreuve est déjà lancée : il reste environ 48 minutes. Vous composerez sur ce temps restant et terminerez en même temps que la classe. » Sur sa copie, un bandeau le rappelle (au-delà d'une minute de retard).
- Le tableau de bord indique « entré 12 min après le lancement ». Le journal aussi.
- Quand le temps de la classe est écoulé, plus personne ne peut commencer, et aucune copie vide ne prend le nom.

**Suivi** (onglet Devoirs → Suivi)

- Par classe : un tableau étudiants × chapitres. Dans chaque case, la note sur 20 obtenue sur les exercices du chapitre et le nombre d'exercices notés ; en tête, la moyenne des devoirs validés.
- Par étudiant (clic sur le nom) : ses devoirs validés, ses résultats par chapitre, **où les points se perdent** (part des points obtenus sur méthode, calcul, résultat, unité, éléments rédigés), les **erreurs qui reviennent** (même étiquette sur au moins deux devoirs), les arguments attendus non acquis.
- Pour la classe : les erreurs partagées par plusieurs étudiants.
- Seules les copies **validées** comptent. Lecture seule, aucune écriture, aucun appel à l'IA, rien de visible par un étudiant.

## 3. Ce qui est testé, et comment

Commandes : `node scripts/test-devoir-engine.js`, `node scripts/test-devoir-suivi.js`, `node scripts/devoir-emulateurs.js test`.

| Suite | Tests | Nouveau |
| --- | --- | --- |
| Moteur | 44 | 11 : types, barème, refus d'un exercice mal formé, garde-fou d'un mixte |
| Suivi (agrégation) | 9 | 9 |
| IA (sans émulateur) | 21 | 8 : message, citation, doute, réponse vide |
| Règles Firestore | 15 | 0 (règles inchangées) |
| Fonctions | 79 | 13 : 9 sur le rédigé, 4 sur le retardataire |
| Bout en bout (navigateurs) | 40 | 9 : saisie, retardataire, relecture, validation, suivi |

Dernier lancement complet de `node scripts/devoir-emulateurs.js test` : 154 réussis, 1 échec. L'échec venait de mon ajout : un test de règles comptait 6 exercices dans la banque de démonstration, qui en a 8 depuis l'ajout d'une question rédigée et d'un exercice mixte. Test aligné, suite des règles relancée : 15 sur 15. Aucune règle n'a changé. Je n'ai pas relancé les quatre suites ensemble après cette correction.

**L'échec intermittent du bout en bout est expliqué.** Le tableau de bord et la liste des copies sont reconstruits à chaque donnée reçue en direct. Le test cherchait le bouton « Lancer l'épreuve », puis cliquait : entre les deux, le bouton pouvait avoir été remplacé (« Node is detached from document », ou clic perdu). Je l'ai reproduit sur un autre bouton du même type. Le test fait maintenant la recherche et le clic en un seul geste. En cas d'échec, il affiche désormais l'état des pages ouvertes.

Conséquence possible pour vous, rare : un clic sur « Lancer l'épreuve » à l'instant précis où un étudiant choisit son nom peut ne pas être pris. Il suffit de recliquer. Je n'ai pas modifié l'écran pour cela (section 4, choix 9).

**Banque en production** : `node relire.js tous-les-chapitres.json` → 644 en banque, 644 identiques aux lots, 0 erreur. Rendu KaTeX des 254 exercices rédigés sur 544 variantes : 0 erreur, aucune décimale anglaise, barème de 100 points partout.

**Captures d'écran** des écrans modifiés (saisie, retardataire, relecture, suivi) : prises pendant le test de bout en bout et relues. Pour les refaire : `DEVOIR_CAPTURES=<dossier> node scripts/devoir-emulateurs.js test e2e`.

## 4. Choix faits seul

1. **Trois types, pas deux.** « Mixte » est un type à part, plutôt qu'un exercice rédigé avec un champ numérique : le garde-fou de calcul s'applique ainsi tel quel.
2. **La partie rédigée d'un mixte vaut 30 à 50 points** selon la question (40 par défaut). Les blocs de calcul se partagent le reste dans les proportions habituelles.
3. **Poids des éléments** : fixés par moi, à partir du barème du DS quand il existe, à parts à peu près égales sinon. Ils se modifient dans la banque (« Modifier », champ `points`).
4. **Prompt de l'IA** : règles 1 à 8 du cahier des charges inchangées ; trois règles ajoutées (éléments attendus, citation mot pour mot, doute) ; la règle « ne mentionne pas ces règles » devient la 12e.
5. **Le serveur ne corrige jamais une note pour une citation douteuse.** Il signale et vous laisse trancher.
6. **Par défaut, un devoir mélange calculs et questions rédigées** du chapitre choisi. Pour un devoir de calcul pur : Réglages avancés → Type de questions.
7. **Les lectures de diagramme sont données dans l'énoncé** des questions rédigées. Aucune ne demande le diagramme papier.
8. **Retard signalé à partir d'une minute.** En dessous, l'étudiant est entré « avec les autres » : pas de bandeau.
9. **Écran du tableau de bord non modifié** malgré le clic qui peut se perdre : le corriger demande de ne plus reconstruire tout l'écran, un changement plus large que la gêne.
10. **Suivi : « erreur qui revient » = même étiquette sur deux devoirs différents.** Deux fois dans le même devoir ne compte pas.
11. **Les 390 exercices existants ne sont pas touchés.** Certains posent déjà une question en fin d'énoncé (« Est-ce une non-conformité ? ») avec la réponse dans les étapes du corrigé : ils restent notés comme des calculs. Les convertir en mixtes est possible, exercice par exercice (`importer.js --remplacer`).
12. **Fiches de correction** : elles portent maintenant le chapitre et le type de l'exercice. Les fiches anciennes n'en ont pas : le suivi retrouve leur chapitre par la banque.

## 5. Ce qui n'est pas fait, ou pas vérifié

- **Aucun appel réel à l'IA.** Le schéma de sortie a deux champs de plus par critère. S'il était refusé par l'API, la fiche passerait en « erreur IA » et la correction à la main resterait possible. À vérifier sur une copie d'essai (section 7, geste 1).
- **Justesse des corrections de l'IA sur du rédigé** : non mesurée. La fausse IA des tests valide tout ce qui est rempli. Seules de vraies copies diront si elle note juste.
- **Les 254 éléments attendus n'ont pas été relus par vous.** Ils reprennent les corrigés, mais je les ai découpés et pondérés.
- **Suivi, laissé de côté** : le regroupement des étiquettes par l'IA (cahier des charges §7) — deux étiquettes voisines (« unité oubliée », « oubli d'unité ») comptent comme deux erreurs ; la tendance (en hausse, en baisse) ; les exports ; le renommage ou la fusion d'étiquettes ; les recommandations.
- **Erreurs relevées par l'IA** : vous ne pouvez pas encore les corriger dans la fiche. Elles entrent telles quelles dans le suivi à la validation.
- **Questions non reprises** : DS 12 question 2.1 (écart dans le corrigé papier) ; celles qui demandent un schéma d'annale, un catalogue en image ou un tracé.
- **Un écart relevé dans un TD papier** : TD 12, exercice 12 (note du stagiaire). Le corrigé annonce deux erreurs, dont un spectre « déjà en dB(A) » pondéré deux fois ; la note du sujet ne contient pas ce spectre. L'exercice en ligne ne demande que l'erreur visible. Non corrigé dans le dépôt BTS FED ; consigné dans `LISEZ-MOI.md`.
- **Publication aux étudiants, exports, mode Dys, purge de fin d'année** : toujours hors périmètre, comme demandé.

## 6. Chapitres 11, 14, 17, 18, 19, 20, 21

Non commencés. Les sept fascicules existent à l'ancien format (`MIGRATION-DYLAN.md` : fascicule ✗, TD à créer, DS absent ou à l'ancien numéro). Pour un seul chapitre, la méthode du dépôt demande : le fascicule réécrit sans trous, avec chaque valeur technique vérifiée sur une source, un visuel réel par section et un document constructeur ; le diaporama aligné ; un TD d'environ 17 exercices et son corrigé ; un DS ; la relecture des planches en image ; puis trois lots en ligne. C'est le travail d'une session entière par chapitre.

La consigne était de livrer des chapitres complets plutôt que sept à moitié faits : les priorités 1 à 3 ont pris la session, et je n'ai entamé aucun chapitre plutôt que d'en laisser un inachevé dans le dépôt BTS FED.

Le moteur est prêt : il suffira d'ajouter le chapitre à `CHAPITRES` dans `js/devoir/devoirEngine.js`, d'adapter le test qui liste les seize chapitres, puis de redéployer les fonctions.

## 7. Gestes qui vous reviennent

1. **Essai réel de l'IA sur du rédigé.** Créer un devoir sur un chapitre (2 exercices, 10 minutes), composer une copie sur `/devoirs` depuis une fenêtre privée, la rendre, fermer la session, puis « Corriger » → « Lancer la pré-correction IA ». Vérifier le passage cité et la mention « pas sûre ». En cas de fiche « erreur IA » : `firebase functions:log --only runPreCorrection`.
2. **Relire quelques questions rédigées** dans la banque (filtre par chapitre, étiquette « question rédigée »), en priorité les notes de calcul à contrôler et les exercices mixtes. Me signaler les éléments attendus mal découpés ou mal pondérés.
3. **Décider du mélange par défaut** (choix 6) : calculs et rédigées ensemble, ou séparés.
4. **Dépôt BTS FED** : rien n'est commité. Nouveaux fichiers dans `production/devoirs-en-ligne/` : 16 lots `chapitre-NN-redige.js` et leurs `.json`, `lire.sh`, `lire-redige.js` ; modifiés : `_commun.js`, `LISEZ-MOI.md`, `tous-les-chapitres.json`.
5. **Chapitres 11, 14, 17 à 21** : me dire par lequel commencer.
