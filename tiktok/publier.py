# -*- coding: utf-8 -*-
"""Programmation des publications TikTok des vidéos déjà rendues.

    python publier.py                      # aperçu du calendrier, n'envoie rien
    python publier.py --envoyer            # programme réellement
    python publier.py --depart 2026-08-28  # décaler le premier jour
    python publier.py --jours 5            # ne programmer que 5 jours

L'aperçu est le mode par défaut : programmer trente publications est
irréversible depuis ici, il faut pouvoir relire le plan avant.
"""

import argparse
import json
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

import config
from pipeline import memoire, publication


def _log(message):
    print(message, flush=True)


for _flux in (sys.stdout, sys.stderr):
    try:
        _flux.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, OSError):
        pass


def modules_complets(memoire_faite, angles, exclure=None):
    """Modules dont TOUS les angles demandés sont rendus.

    Un module à moitié fait casserait la structure de l'expérience : on
    ne peut pas comparer trois angles quand il n'en existe que deux.

    `exclure` écarte nommément un module dont des vidéos sont déjà
    sorties hors calendrier — les republier fausserait la mesure.
    """
    ecartes = set(exclure or ())
    complets = []
    for module_id, produits in sorted(memoire_faite.items()):
        if module_id in ecartes:
            continue
        if set(angles).issubset(produits):
            complets.append(module_id)
    return complets


def fichiers(memoire_faite, module_id, angle):
    """Vidéo et métadonnées d'un angle produit.

    La légende publiée vient du JSON, pas du .txt : ce dernier contient
    la consigne « lien à mettre en bio », qui s'adresse à celui qui
    publie et n'a rien à faire sous la vidéo.
    """
    video = Path(memoire_faite[module_id][angle]["fichier"])
    return video, video.with_suffix(".json")


def metadonnees(chemin_json):
    return json.loads(chemin_json.read_text(encoding="utf-8"))


def main(argv=None):
    analyseur = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    analyseur.add_argument("--envoyer", action="store_true",
                           help="programmer réellement (sans ce drapeau, simple aperçu)")
    analyseur.add_argument("--depart", help="premier jour, format AAAA-MM-JJ (défaut : demain)")
    analyseur.add_argument("--jours", type=int, help="nombre de jours à programmer")
    analyseur.add_argument("--exclure", nargs="+", default=[], metavar="MODULE",
                           help="modules à écarter (déjà publiés hors calendrier)")
    analyseur.add_argument("--creneaux", nargs="+", default=list(publication.CRENEAUX),
                           help="heures de publication (autant que d'angles)")
    analyseur.add_argument("--angles", nargs="+", default=list(publication.ANGLES_ORDRE),
                           help="angles à publier")
    analyseur.add_argument("--plateformes", nargs="+", default=None,
                           choices=["tiktok", "youtube", "instagram"],
                           help="réseaux visés (défaut : ceux de PLATEFORMES dans .env)")
    analyseur.add_argument("--sans-repli-brouillon", action="store_true",
                           help="échouer bruyamment plutôt que d'atterrir en brouillon TikTok")
    analyseur.add_argument("--sans-aigc", action="store_true",
                           help="ne pas déclarer le contenu comme généré par IA (déconseillé)")
    options = analyseur.parse_args(argv)

    depart = (date.fromisoformat(options.depart) if options.depart
              else date.today() + timedelta(days=1))
    if depart < date.today():
        analyseur.error("le départ est dans le passé : {}".format(depart))

    memoire_faite = memoire.charger(config.MEMOIRE)
    complets = modules_complets(memoire_faite, options.angles, exclure=options.exclure)
    if options.jours:
        complets = complets[:options.jours]

    if not complets:
        _log("Aucun module n'a ses {} angles rendus — rien à programmer.".format(
            len(options.angles)))
        return 1

    plan = publication.calendrier(complets, depart,
                                  creneaux=tuple(options.creneaux),
                                  angles=tuple(options.angles))

    # Rien ne part si un fichier manque : mieux vaut refuser en bloc que
    # publier un calendrier troué.
    manquants = []
    for ligne in plan:
        video, meta = fichiers(memoire_faite, ligne["module"], ligne["angle"])
        if not video.exists():
            manquants.append(str(video))
        if not meta.exists():
            manquants.append(str(meta))
    if manquants:
        _log("Fichiers introuvables, envoi annulé :")
        for m in manquants[:10]:
            _log("  " + m)
        return 1

    aigc = config.DECLARER_IA and not options.sans_aigc
    plateformes = tuple(options.plateformes or config.PLATEFORMES)

    _log("Départ      : {}".format(depart.strftime("%A %d %B %Y")))
    _log("Modules     : {} ({} publications)".format(len(complets), len(plan)))
    _log("Créneaux    : {}".format(", ".join(options.creneaux)))
    _log("Profil      : {}".format(config.UPLOADPOST_USER))
    _log("Plateformes : {}".format(", ".join(plateformes)))
    _log("Déclaré IA  : {}".format("oui" if aigc else "NON"))
    _log("")
    _log("{:<12} {:<7} {:<13} {:<26} {}".format(
        "DATE", "HEURE", "ANGLE", "MODULE", "LÉGENDE"))
    _log("─" * 108)

    for ligne in plan:
        _, chemin_meta = fichiers(memoire_faite, ligne["module"], ligne["angle"])
        premiere = (metadonnees(chemin_meta).get("legende") or "").strip()
        _log("{:<12} {:<7} {:<13} {:<26} {}".format(
            ligne["quand"].strftime("%a %d/%m"),
            ligne["creneau"],
            ligne["angle"],
            ligne["module"][:25],
            premiere[:44]))

    if not options.envoyer:
        _log("")
        _log("Aperçu uniquement — rien n'a été programmé.")
        _log("Relancer avec --envoyer pour programmer ces {} publications.".format(len(plan)))
        return 0

    if not config.UPLOADPOST_API_KEY:
        _log("")
        _log("UPLOADPOST_API_KEY absente de tiktok/.env — envoi impossible.")
        return 1

    _log("")
    _log("Programmation de {} publications...".format(len(plan)))
    envoyees, echecs, journal = 0, [], []
    for ligne in plan:
        video, chemin_meta = fichiers(memoire_faite, ligne["module"], ligne["angle"])
        meta = metadonnees(chemin_meta)
        etiquette = "{} {} · {} · {}".format(
            ligne["quand"].strftime("%d/%m"), ligne["creneau"],
            ligne["angle"], ligne["module"])
        try:
            reponse = publication.envoyer(
                ligne, video, meta,
                config.UPLOADPOST_API_KEY, config.UPLOADPOST_USER,
                aigc=aigc, plateformes=plateformes,
                repli_brouillon=not options.sans_repli_brouillon,
            )
            envoyees += 1
            reference = (reponse.get("job_id") or reponse.get("id")
                         or reponse.get("request_id") or "")
            journal.append({
                "module": ligne["module"],
                "angle": ligne["angle"],
                "quand": ligne["quand"].isoformat(timespec="minutes"),
                "reponse": reponse,
            })
            _log("  ✓ {}{}".format(etiquette, "  →  " + str(reference) if reference else ""))
        except Exception as erreur:
            echecs.append((etiquette, str(erreur)))
            journal.append({
                "module": ligne["module"],
                "angle": ligne["angle"],
                "quand": ligne["quand"].isoformat(timespec="minutes"),
                "erreur": str(erreur),
            })
            _log("  ✗ {} — {}".format(etiquette, erreur))

    # Journal des envois : sans lui, un probleme sur trente publications
    # est indiagnosticable une fois la console fermee.
    if journal:
        chemin = config.RACINE / "envois.json"
        anciens = []
        if chemin.exists():
            try:
                anciens = json.loads(chemin.read_text(encoding="utf-8"))
            except json.JSONDecodeError:
                anciens = []
        chemin.write_text(
            json.dumps(anciens + journal, ensure_ascii=False, indent=2),
            encoding="utf-8")
        _log("")
        _log("Journal des envois : {}".format(chemin))

    _log("")
    _log("{} programmées, {} échecs.".format(envoyees, len(echecs)))
    return 0 if not echecs else 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (RuntimeError, LookupError, ValueError, FileNotFoundError) as erreur:
        print("\nArrêt : {}".format(erreur), file=sys.stderr)
        sys.exit(1)
