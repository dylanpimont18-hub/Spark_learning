# -*- coding: utf-8 -*-
"""Videos de presentation : Sparky interroge Lumen.

Troisieme ligne de production, independante des deux autres. Format
paysage 1920x1080, destine a la page d'accueil, a YouTube et a la fiche
produit de la boutique — pas aux reseaux verticaux.

    python interview.py --sujet pourquoi
    python interview.py --sujet boutique
    python interview.py --tous
    python interview.py --sujet pourquoi --voix-seule   # ecouter avant de rendre

Deux differences avec main.py, toutes deux voulues :
  - les textes ne sont pas generes, ils sont ecrits dans interviews.py ;
  - il n'y a ni memoire de production ni depot Drive : on refait une
    video de presentation quand elle a change, pas quand elle manque.

L'ordre des etapes reste contraint par la meme regle que partout
ailleurs : la capture doit durer exactement la longueur de la voix off,
donc voix -> capture -> montage.
"""

import argparse
import json
import sys
import time
from pathlib import Path

import config
import interviews
from pipeline import capture, montage_interview, voix


def _log(message):
    print(message, flush=True)


# La console Windows est en cp1252 : un caractere accentue de trop
# suffirait a tuer le script sur un simple print.
for _flux in (sys.stdout, sys.stderr):
    try:
        _flux.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass


def produire(nom, sortie, travail, voix_seule=False):
    """Chaine complete pour une interview : voix, capture, montage."""
    sujet = interviews.sujet(nom)
    dossier_travail = Path(travail) / nom
    dossier_travail.mkdir(parents=True, exist_ok=True)

    _log("· voix off ({} répliques, deux voix)".format(len(sujet["repliques"])))
    bande = voix.dire_dialogue(sujet["repliques"], dossier_travail / "voix.mp3")
    duree = bande["duree"]
    _log("  {:.1f} s, {} mots datés".format(duree, len(bande["mots"])))

    if voix_seule:
        _log("  bande son seule : {}".format(bande["audio"]))
        return bande["audio"]

    _log("· capture du site ({} segments)".format(len(sujet["plan"])))
    tournage = capture.filmer_plan(sujet["plan"], duree, dossier_travail / "frames")
    _log("  {} trames en {}x{}".format(
        tournage["trames"], tournage["taille"][0], tournage["taille"][1]))

    _log("· montage 1920x1080")
    destination = Path(sortie) / (nom + ".mp4")
    montage_interview.monter(
        tournage["trames_fichiers"], tournage["fps"], bande["audio"],
        bande["mots"], bande["repliques"], destination,
        domaine=sujet["domaine"], poses=interviews.poses(sujet),
    )

    metadonnees = {
        "sujet": nom,
        "titre": sujet["titre"],
        "duree": round(duree, 2),
        "legende": sujet["legende"],
        "hashtags": sujet["hashtags"],
        "domaine": sujet["domaine"],
        "plan": [etape["url"] for etape in sujet["plan"]],
        "repliques": [
            {"locuteur": r["locuteur"], "texte": r["texte"]} for r in sujet["repliques"]
        ],
        "voix": {
            locuteur: config.persona_locuteur(locuteur)["voix"]
            for locuteur in config.VOIX_INTERVIEW
        },
    }
    destination.with_suffix(".json").write_text(
        json.dumps(metadonnees, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    return destination


def main(argv=None):
    analyseur = argparse.ArgumentParser(
        description="Génère les vidéos de présentation en interview (Sparky × Lumen)."
    )
    analyseur.add_argument("--sujet", choices=list(interviews.INTERVIEWS),
                           help="interview à produire")
    analyseur.add_argument("--tous", action="store_true",
                           help="produire toutes les interviews")
    analyseur.add_argument("--voix-seule", action="store_true",
                           help="synthétiser la bande son et s'arrêter là (écoute rapide)")
    analyseur.add_argument("--sortie", default=str(config.SORTIE_INTERVIEW),
                           help="dossier de sortie")
    options = analyseur.parse_args(argv)

    if not options.sujet and not options.tous:
        analyseur.error("préciser --sujet ou --tous")

    noms = list(interviews.INTERVIEWS) if options.tous else [options.sujet]
    sortie = Path(options.sortie)
    sortie.mkdir(parents=True, exist_ok=True)

    debut = time.time()
    faites = []
    for nom in noms:
        _log("\n=== {} ===".format(interviews.INTERVIEWS[nom]["titre"]))
        faites.append(produire(nom, sortie, config.TRAVAIL / "interview",
                               voix_seule=options.voix_seule))

    _log("\n{} fichier(s) en {:.0f} s".format(len(faites), time.time() - debut))
    for fichier in faites:
        _log("  " + str(fichier))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
