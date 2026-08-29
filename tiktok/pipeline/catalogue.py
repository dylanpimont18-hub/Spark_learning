# -*- coding: utf-8 -*-
"""Acces au catalogue des modules exporte depuis js/data/.

Le fichier est produit par tools/export-modules.js. On ne relit jamais
js/data/ depuis Python : le format de ces fichiers est du JavaScript
executable, pas des donnees.
"""

import json
import random
import unicodedata
from pathlib import Path

RACINE = Path(__file__).resolve().parent.parent
CATALOGUE = RACINE / "catalogue.json"


def charger(chemin=None):
    """Renvoie la liste des modules exportes."""
    chemin = Path(chemin) if chemin else CATALOGUE
    if not chemin.exists():
        raise FileNotFoundError(
            "catalogue.json absent — lancer d'abord : node tiktok/tools/export-modules.js"
        )
    with open(chemin, encoding="utf-8") as f:
        return json.load(f)["modules"]


def _normaliser(texte):
    """Minuscules sans accents : « Thalès » et « thales » doivent matcher."""
    sans_accent = unicodedata.normalize("NFD", texte or "")
    sans_accent = "".join(c for c in sans_accent if unicodedata.category(c) != "Mn")
    return sans_accent.lower()


# Mots trop frequents pour porter du sens : « les fractions » doit
# valoir « fractions », pas une demande a moitie satisfaite.
_MOTS_OUTILS = {
    "les", "le", "la", "des", "de", "du", "un", "une", "en", "sur",
    "au", "aux", "et", "pour", "avec", "dans", "sont", "est", "que",
}


def _mots_significatifs(requete):
    return [m for m in requete.split() if len(m) > 2 and m not in _MOTS_OUTILS]


def _score(module, requete):
    """Pertinence d'un module pour une requete libre, 0 = hors sujet."""
    cible = _normaliser(module.get("id", "")) + " " + _normaliser(module.get("titre", ""))
    if requete == _normaliser(module.get("id", "")):
        return 1000

    mots = _mots_significatifs(requete)
    if not mots:
        return 0

    touches = sum(1 for m in mots if m in cible)
    # Une demande a moitie satisfaite est une demande ratee : « calcul
    # quantique » ne doit pas tomber sur « calcul algebrique ». Produire
    # trois videos sur la mauvaise notion coute plus cher qu'echouer.
    if touches / len(mots) <= 0.5:
        return 0

    # Un module court qui matche vaut mieux qu'un module long qui matche autant.
    return touches * 10 - len(cible) / 100


def dans_perimetre(modules, tranches=None):
    """Modules que le tirage peut effectivement sortir.

    Expose le meme filtre que choisir() : un ecran d'avancement doit
    compter exactement ce que la production peut produire, sinon il
    annonce un total que personne n'atteindra jamais.
    """
    import config

    actives = tuple(tranches) if tranches else config.TRANCHES_ACTIVES
    return [m for m in modules if m.get("tranche") in actives]


def choisir(modules, identifiant=None, tranche=None, matiere=None, graine=None,
            tranches=None):
    """Designe un module, par identifiant ou par tirage filtre.

    L'identifiant accepte aussi bien la cle exacte (« 3e-thales ») qu'un
    libelle approximatif tape a la main (« les fractions »), parce que
    c'est ainsi qu'on appelle le script depuis la ligne de commande.

    `tranches` borne le perimetre editorial (config.TRANCHES_ACTIVES par
    defaut). Un module hors perimetre est refuse en le disant, plutot
    que d'etre remplace en silence par un autre.
    """
    import config

    actives = tuple(tranches) if tranches else config.TRANCHES_ACTIVES
    retenus = dans_perimetre(modules, actives)

    if identifiant:
        requete = _normaliser(identifiant)
        classes = sorted(
            ((_score(m, requete), m) for m in retenus),
            key=lambda p: p[0],
            reverse=True,
        )
        if classes and classes[0][0] > 0:
            return classes[0][1]

        # Le module existe-t-il, mais hors perimetre ? Le dire, sinon
        # l'utilisateur cherchera une faute de frappe qui n'existe pas.
        exclus = [m for m in modules if m.get("tranche") not in actives]
        proches = sorted(((_score(m, requete), m) for m in exclus),
                         key=lambda p: p[0], reverse=True)
        if proches and proches[0][0] > 0:
            raise LookupError(
                "« {} » correspond à {}, hors périmètre (tranche {}) — "
                "périmètre actif : {}".format(
                    identifiant, proches[0][1]["id"], proches[0][1].get("tranche"),
                    ", ".join(actives))
            )
        raise LookupError("aucun module ne correspond à « {} »".format(identifiant))

    candidats = retenus
    if tranche:
        candidats = [m for m in candidats if m.get("tranche") == tranche]
    if matiere:
        candidats = [m for m in candidats if m.get("matiere") == matiere]

    if not candidats:
        raise LookupError(
            "aucun module pour tranche={} matiere={}".format(tranche, matiere)
        )

    return random.Random(graine).choice(candidats)
