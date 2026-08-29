# -*- coding: utf-8 -*-
"""Depot des videos sur le Drive, pour publication manuelle.

La publication se fait a la main depuis le telephone. Ce module depose
donc dans le dossier synchronise Google Drive tout ce qu'il faut pour
publier sans revenir sur l'ordinateur : la video, ses metadonnees, et
une legende prete a coller.

Pourquoi le dossier synchronise plutot que l'API Drive : aucune
credential a gerer, aucun jeton a renouveler, et le script n'a rien a
savoir de Google. Copier un fichier suffit.
"""

import shutil
from pathlib import Path


def texte_publication(metadonnees):
    """Legende prete a coller dans TikTok.

    Un seul bloc, dans l'ordre ou on le colle : accroche, hashtags,
    puis le lien a mettre en bio.
    """
    morceaux = []

    legende = (metadonnees.get("legende") or "").strip()
    if legende:
        morceaux.append(legende)

    hashtags = [t.strip().lstrip("#") for t in metadonnees.get("hashtags") or []]
    hashtags = [t for t in hashtags if t]
    if hashtags:
        morceaux.append(" ".join("#" + t for t in hashtags))

    url = metadonnees.get("url")
    if url:
        morceaux.append("Lien à mettre en bio : " + url)

    return "\n\n".join(morceaux)


def legende_api(metadonnees):
    """Legende reellement publiee sous la video.

    Distincte de texte_publication() : celle-ci s'adresse aux
    spectateurs, l'autre a la personne qui publie a la main. La consigne
    « lien a mettre en bio » n'a rien a faire dans une legende publique.
    """
    morceaux = []

    legende = (metadonnees.get("legende") or "").strip()
    if legende:
        morceaux.append(legende)

    hashtags = [t.strip().lstrip("#") for t in metadonnees.get("hashtags") or []]
    hashtags = [t for t in hashtags if t]
    if hashtags:
        morceaux.append(" ".join("#" + t for t in hashtags))

    return "\n\n".join(morceaux)


def deposer(fichiers, dossier_drive, sous_dossier):
    """Copie les fichiers dans <drive>/<sous_dossier>/.

    Ecrase une version precedente : regenerer une video doit la
    remplacer, pas empiler des doublons dans le dossier.
    """
    dossier_drive = Path(dossier_drive)
    if not dossier_drive.is_dir():
        raise FileNotFoundError(
            "dossier Drive introuvable : {} — Google Drive pour ordinateur "
            "est-il installé et synchronisé ?".format(dossier_drive)
        )

    cible = dossier_drive / sous_dossier
    cible.mkdir(parents=True, exist_ok=True)

    copies = []
    for fichier in fichiers:
        fichier = Path(fichier)
        destination = cible / fichier.name
        shutil.copy2(fichier, destination)
        copies.append(destination)
    return copies


def deposer_livrables(fichiers, dossier_drive, cible, module_id):
    """Depose les livrables d'un module sur le Drive.

    `dossier_drive` est la RACINE montee par Google Drive : c'est son
    existence qui prouve que Drive tourne. Le dossier de destination,
    lui, n'existe pas encore au premier depot — le verifier reviendrait
    a echouer systematiquement la premiere fois.
    """
    return deposer(fichiers, dossier_drive, "{}/{}".format(cible, module_id))


def dossier_drive_detecte(configure=None):
    """Trouve le dossier de synchronisation Drive, ou None.

    Google Drive pour ordinateur monte un lecteur (souvent G:) ou un
    dossier dans le profil utilisateur, selon la version et le reglage.
    On teste les emplacements usuels plutot que d'imposer une config.
    """
    if configure:
        chemin = Path(configure)
        return chemin if chemin.is_dir() else None

    for candidat in (
        Path("G:/Mon Drive"),
        Path("G:/My Drive"),
        Path.home() / "Mon Drive",
        Path.home() / "Google Drive",
    ):
        if candidat.is_dir():
            return candidat
    return None
