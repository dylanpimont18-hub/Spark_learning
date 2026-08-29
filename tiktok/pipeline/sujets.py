# -*- coding: utf-8 -*-
"""Choix du sujet du jour et memoire des sujets deja sortis.

Le risque, quand le modele choisit seul de quoi parler, n'est pas la
qualite d'un sujet isole : c'est l'effondrement de la diversite. Livre
a lui-meme il revient au bout de deux semaines sur les memes trois
idees, et le compte devient monotone sans que rien ne le signale.

D'ou le partage des roles : le pipeline impose la FAMILLE par rotation
deterministe, le modele n'invente qu'a l'interieur. Aucune liste de
sujets a maintenir a la main, etalement garanti.

La memoire est calquee sur pipeline/memoire.py — un JSON indente,
lisible et corrigeable a l'oeil nu :

    {
      "les-loot-boxes-de-fortnite": {
        "sujet": "les loot boxes de Fortnite",
        "notion": "probabilites",
        "famille": "jeu-video",
        "date": "2026-08-27T08:00:00",
        "module": "2nde-probabilites",
        "brule": false
      }
    }
"""

import json
import re
import unicodedata
from datetime import date, datetime
from pathlib import Path

from pipeline.scripts import extraire_json

FAMILLES = ("jeu-video", "sport", "argent", "musique",
            "reseaux", "nourriture", "transport", "mode")

# Origine de la rotation. Le calendrier fait foi plutot qu'un compteur
# range dans la memoire : deux machines, ou une memoire effacee, doivent
# retomber sur la meme famille le meme jour.
_EPOQUE = date(1970, 1, 1)

_NON_ALPHANUMERIQUE = re.compile(r"[^a-z0-9]+")


def famille_du_jour(jour=None):
    """Famille imposee ce jour-la, par rotation sur le calendrier."""
    jour = jour or date.today()
    return FAMILLES[(jour.toordinal() - _EPOQUE.toordinal()) % len(FAMILLES)]


def famille_suivante(famille):
    """Famille d'apres, en bouclant.

    Sert quand une famille n'a plus rien a proposer, et quand un lot
    produit plus de videos qu'il n'y a de familles.
    """
    if famille not in FAMILLES:
        raise ValueError("famille inconnue : {} (valeurs : {})".format(
            famille, ", ".join(FAMILLES)))
    return FAMILLES[(FAMILLES.index(famille) + 1) % len(FAMILLES)]


def identifiant(sujet):
    """Cle stable d'un sujet, pour la memoire et le dossier de sortie.

    Passe par une normalisation sans accent ni apostrophe : « le tempo
    d'un morceau » et « le tempo d’un morceau » sont le meme sujet, et
    sans cela la liste d'exclusion laisserait passer le doublon.
    """
    sans_accent = unicodedata.normalize("NFD", sujet or "")
    sans_accent = "".join(c for c in sans_accent if unicodedata.category(c) != "Mn")
    return _NON_ALPHANUMERIQUE.sub("-", sans_accent.lower()).strip("-")


# ── Memoire ──

def charger(chemin):
    """Sujets deja sortis, ou une memoire vide au premier lancement."""
    chemin = Path(chemin)
    if not chemin.exists():
        return {}
    try:
        with open(chemin, encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError:
        # Un fichier corrompu ne doit pas bloquer la production : au
        # pire on refait un sujet deja traite.
        return {}


def sauver(memoire, chemin):
    """Ecrit la memoire, en gardant le fichier lisible a l'oeil nu."""
    chemin = Path(chemin)
    chemin.parent.mkdir(parents=True, exist_ok=True)
    with open(chemin, "w", encoding="utf-8") as f:
        json.dump(memoire, f, ensure_ascii=False, indent=2, sort_keys=True)


def noter(memoire, sujet, notion, famille, module=None, brule=False,
          reproches=None, horodatage=None):
    """Inscrit un sujet dans la memoire RECUE, et rend son identifiant.

    Ecrit sur place, contrairement a memoire.enregistrer() qui rend une
    copie : un sujet abandonne est note par un produire() qui rend None,
    et la marque « brule » ne peut donc pas voyager par le retour.
    """
    sujet_id = identifiant(sujet)
    memoire[sujet_id] = {
        "sujet": sujet,
        "notion": notion,
        "famille": famille,
        "date": horodatage or datetime.now().isoformat(timespec="seconds"),
        "module": module,
        "brule": bool(brule),
        # Ce qui a fait tomber le sujet. Sans cette trace, un lot de nuit
        # rend un calendrier troue et aucune piste : impossible de dire
        # si la consigne est trop stricte ou le sujet mauvais.
        "reproches": list(reproches or ()),
    }
    return sujet_id


def deja_sortis(memoire, limite=60):
    """Les `limite` derniers sujets, du plus recent au plus ancien.

    Les sujets brules en font partie : un sujet qui a resiste aux
    verificateurs echouerait de la meme facon au tour suivant, et
    couterait les memes appels pour rien.
    """
    entrees = sorted(memoire.values(), key=lambda e: e.get("date") or "", reverse=True)
    return [e["sujet"] for e in entrees[:limite] if e.get("sujet")]


# ── Choix du sujet ──

SYSTEME = """Tu choisis le sujet d'une video courte pour Spark Learning, une plateforme \
educative francaise gratuite.

Le principe de la ligne : partir de quelque chose qui interesse VRAIMENT un adolescent \
francais de 12 a 18 ans, puis montrer la notion de mathematiques qui se cache derriere.

Ce qu'on attend d'un bon sujet :
- concret et quotidien, pas scolaire : on part de sa vie, pas du programme
- durable : quelque chose qui sera encore vrai dans deux ans, pas une tendance du mois
- suffisamment precis pour tenir en trente secondes de video

La notion, elle, doit etre une notion de mathematiques du programme francais de college \
ou de lycee, nommee simplement : fractions, probabilites, proportionnalite, pourcentages, \
theoreme de Pythagore, fonctions affines, statistiques, puissances, vitesse...

Tu reponds UNIQUEMENT par un objet JSON, sans texte autour et sans barriere de code :
{"sujet": "...", "notion": "...", "pourquoi": "en une phrase, ce qui accroche"}"""


def _consigne(famille, exclusions, sujet_impose=None):
    """Message utilisateur : la famille imposee, et ce qui est deja pris."""
    if sujet_impose:
        demande = ("Le sujet est impose : « {} ».\n\n"
                   "Dis quelle notion de mathematiques il permet d'illustrer le mieux. "
                   "Reponds au meme format JSON, le champ \"sujet\" repetant le sujet "
                   "impose.".format(sujet_impose))
    else:
        demande = ("Propose UN sujet de la famille « {} », et la notion de "
                   "mathematiques qu'il permet d'illustrer.".format(famille))

    morceaux = [demande]
    if exclusions:
        morceaux += [
            "",
            "Sujets deja traites — n'en propose aucun, ni une simple reformulation :",
            "\n".join("- " + s for s in exclusions),
        ]
    return "\n".join(morceaux)


def choisir(client_ia, modele, famille, exclusions, tentatives=2, sujet_impose=None):
    """Demande un sujet de cette famille, hors de la liste d'exclusion.

    Un sujet renvoye malgre l'exclusion est rejete et l'appel refait :
    le modele relit rarement sa liste du premier coup. A l'epuisement
    des tentatives on leve LookupError plutot que ValueError, pour que
    l'appelant passe a la famille suivante au lieu de perdre le lot.
    """
    deja_pris = {identifiant(s) for s in exclusions}
    messages = [
        {"role": "system", "content": SYSTEME},
        {"role": "user", "content": _consigne(famille, exclusions, sujet_impose)},
    ]

    for essai in range(tentatives):
        reponse = client_ia.chat.completions.create(
            model=modele,
            messages=messages,
            temperature=1.0,      # c'est la seule etape ou on cherche de la variete
        )
        contenu = reponse.choices[0].message.content or ""

        try:
            brut = extraire_json(contenu)
        except ValueError:
            # Un modele bavard au lieu de repondre en JSON : une seconde
            # demande suffit presque toujours.
            continue

        sujet = (sujet_impose or brut.get("sujet") or "").strip()
        notion = (brut.get("notion") or "").strip()
        # Sans notion il n'y a pas de mathematiques dans la video, donc
        # plus de raison d'exister pour cette ligne editoriale.
        if not sujet or not notion:
            continue

        if not sujet_impose and identifiant(sujet) in deja_pris:
            messages += [
                {"role": "assistant", "content": contenu},
                {"role": "user", "content":
                    "« {} » a deja ete traite. Propose un sujet nettement different, "
                    "toujours dans la famille « {} ».".format(sujet, famille)},
            ]
            continue

        return {
            "sujet": sujet,
            "notion": notion,
            "pourquoi": (brut.get("pourquoi") or "").strip(),
            "famille": famille,
        }

    raise LookupError(
        "aucun sujet neuf dans la famille « {} » après {} tentative(s)".format(
            famille, tentatives))
