# Directives de Développement - Spark Learning

## Stack et Architecture
- **Vanilla JS Strict** : Le projet s'exécute sans framework front-end lourd. 
- **Séparation des responsabilités** : Aucune manipulation directe du DOM ne doit avoir lieu dans js/data/ ou dans la logique métier pure (lashcards.js). Tout doit être délégué à js/render.js ou géré par événements.
- **État et Persistance** : Les modules lisent l'état via js/state.js et sauvegardent la progression des élèves via js/storage.js (objet global `Storage`).
- **Typo historique** : le fichier s'appelle `flashcards.js` (pas `lashcards.js`).

## Règle de mise à jour (MANDATORY)
Après chaque ajout d'une nouvelle matière dans docs/ ou d'un nouveau script dans js/, le fichier contenu.md doit être mis à jour immédiatement pour refléter la nouvelle architecture.
