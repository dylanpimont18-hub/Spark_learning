# Rapport — suite du module de devoir en classe

27 novembre 2026. Références : [CAHIER-DES-CHARGES.md](CAHIER-DES-CHARGES.md), [RAPPORT-MVP-2-4.md](RAPPORT-MVP-2-4.md).

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

## 2. Ce qui est fait

> Section mise à jour en fin de mission (voir plus bas).
