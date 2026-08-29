# -*- coding: utf-8 -*-
"""Memoire de production : ce qui a deja ete fabrique.

Le catalogue dit ce qui est possible, cette memoire dit ce qui est
fait. Sans elle, un tirage automatique refait au bout de quelques
semaines un module deja traite, sans que rien ne le signale.

Le format est un JSON indente volontairement lisible : on doit pouvoir
l'ouvrir pour comprendre l'etat, ou en retirer une ligne a la main pour
forcer la regeneration d'un angle rate.

    {
      "6e-fractions": {
        "erreur": {"date": "2026-08-26T08:00:00", "fichier": "output/..."},
        "notion": {"date": "2026-08-26T08:04:11", "fichier": "output/..."}
      }
    }
"""

import json
from datetime import datetime
from pathlib import Path


def charger(chemin):
    """Etat de production, ou une memoire vide au premier lancement."""
    chemin = Path(chemin)
    if not chemin.exists():
        return {}
    try:
        with open(chemin, encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError:
        # Un fichier corrompu ne doit pas bloquer la production : on
        # repart de zero, quitte a refaire quelques videos.
        return {}


def sauver(memoire, chemin):
    """Ecrit la memoire, en gardant le fichier lisible a l'oeil nu."""
    chemin = Path(chemin)
    chemin.parent.mkdir(parents=True, exist_ok=True)
    with open(chemin, "w", encoding="utf-8") as f:
        json.dump(memoire, f, ensure_ascii=False, indent=2, sort_keys=True)


def produits(memoire):
    """Identifiants des modules ayant au moins un angle produit."""
    return {cle for cle, angles in memoire.items() if angles}


def angles_produits(memoire, module_id):
    """Angles deja fabriques pour ce module."""
    return set(memoire.get(module_id, {}))


def enregistrer(memoire, module_id, angle, fichier, horodatage=None):
    """Note qu'un angle vient d'etre produit.

    Refaire le meme angle met simplement l'entree a jour : la memoire
    dit ce qui existe, pas combien de fois on l'a fabrique.
    """
    memoire = dict(memoire)
    entree = dict(memoire.get(module_id, {}))
    entree[angle] = {
        "date": horodatage or datetime.now().isoformat(timespec="seconds"),
        "fichier": str(fichier),
    }
    memoire[module_id] = entree
    return memoire


def reste_a_faire(modules, memoire, angles):
    """Modules auxquels il manque au moins un des angles demandes.

    Le jugement porte sur les angles DEMANDES, pas sur les trois : on
    doit pouvoir parcourir tout le catalogue sur le seul angle
    « erreur » sans que les autres bloquent la liste.
    """
    attendus = set(angles)
    return [
        module for module in modules
        if not attendus.issubset(angles_produits(memoire, module.get("id")))
    ]
