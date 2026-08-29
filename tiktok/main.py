# -*- coding: utf-8 -*-
"""Generation de videos TikTok pour Spark Learning.

Un module de js/data/ donne trois videos : la meme notion sous trois
angles editoriaux. Chaque video sort avec son MP4 et son JSON de
metadonnees (legende, hashtags, URL), pret pour une publication
manuelle ou automatisee plus tard.

    python main.py --module "les fractions"
    python main.py --aleatoire --tranche college
    python main.py --module 3e-thales --angles erreur
    python main.py --module 3e-thales --persona enfantine

Perimetre : college et lycee. Le BTS est exclu (config.TRANCHES_ACTIVES).

L'ordre des etapes est contraint : la capture video doit durer
exactement la longueur de la voix off, donc IA -> voix -> capture ->
montage, jamais l'inverse.
"""

import argparse
import json
import shutil
import subprocess
import sys
import time
from pathlib import Path

import config
from pipeline import capture, catalogue, livraison, memoire, montage, scripts, soustitres, voix


def _log(message):
    print(message, flush=True)


# La console Windows est en cp1252 : un emoji dans une legende TikTok
# suffirait a tuer le script sur un simple print. On force l'UTF-8, et
# on remplace ce qui ne passe pas plutot que de lever.
for _flux in (sys.stdout, sys.stderr):
    try:
        _flux.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, OSError):
        pass


def rafraichir_catalogue(force=False):
    """Regenere catalogue.json s'il manque ou s'il a pris du retard.

    Le catalogue est un derive de js/data/ : le laisser vieillir
    reviendrait a filmer un site qui ne dit plus la meme chose que la
    voix off.
    """
    loader = config.PROJET / "js" / "loader.js"
    a_jour = (
        config.CATALOGUE.exists()
        and config.CATALOGUE.stat().st_mtime >= loader.stat().st_mtime
    )
    if a_jour and not force:
        return

    node = shutil.which("node")
    if not node:
        raise RuntimeError("node introuvable — requis pour exporter le catalogue")

    _log("· export du catalogue depuis js/data/")
    resultat = subprocess.run(
        [node, str(config.RACINE / "tools" / "export-modules.js")],
        cwd=str(config.PROJET), capture_output=True, text=True, encoding="utf-8",
    )
    if resultat.returncode != 0:
        raise RuntimeError("export du catalogue échoué : " + (resultat.stderr or "").strip())
    _log("  " + resultat.stdout.strip().splitlines()[0])


def produire(module, angle, script, persona, travail, sortie, url_base):
    """Chaine complete pour une video : voix, capture, montage."""
    base = "{}-{}".format(module["id"], angle)
    dossier_travail = travail / base
    dossier_travail.mkdir(parents=True, exist_ok=True)

    _log("  · voix off ({})".format(persona["voix"]))
    voix_off = voix.dire(script["full_text"], persona, dossier_travail / "voix.mp3")
    duree = voix_off["duree"]
    _log("    {:.1f} s, {} mots datés".format(duree, len(voix_off["mots"])))

    _log("  · capture du site")
    url_cours = url_base + module["url"]
    url_exercices = url_cours.replace("/cours", "/exercices")
    plan = capture.filmer(
        url_cours, duree, dossier_travail / "frames",
        url2=url_exercices, bascule=0.72,
    )
    _log("    {} trames".format(plan["trames"]))

    _log("  · montage")
    bornes = soustitres.bornes_sections(script, voix_off["mots"])
    destination = sortie / module["id"] / (angle + ".mp4")
    montage.monter(
        plan["trames_fichiers"], plan["fps"], voix_off["audio"],
        voix_off["mots"], bornes, destination,
        jeu_sprites=persona["sprites"],
    )

    metadonnees = {
        "module": module["id"],
        "titre_module": module["titre"],
        "angle": angle,
        "libelle_angle": script.get("libelle", ""),
        "duree": round(duree, 2),
        "legende": script.get("titre", "")[:150],
        "hashtags": script.get("hashtags", []),
        "url": url_cours,
        "texte": script["full_text"],
        "persona": persona["voix"],
    }
    destination.with_suffix(".json").write_text(
        json.dumps(metadonnees, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    # Legende prete a coller : la publication se fait au telephone, il ne
    # faut pas avoir a rouvrir le JSON pour retrouver les hashtags.
    legende = destination.with_suffix(".txt")
    legende.write_text(livraison.texte_publication(metadonnees), encoding="utf-8")

    return destination


def _deposer_sur_drive(videos, sous_dossier):
    """Copie les livrables sur le Drive, si Drive est la.

    Un depot impossible ne doit jamais faire echouer un rendu qui a
    coute plusieurs minutes : on signale et on continue.
    """
    if not videos:
        return

    dossier = livraison.dossier_drive_detecte(config.DOSSIER_DRIVE)
    if not dossier:
        _log("· Drive non détecté — vidéos disponibles en local uniquement")
        _log("  (installer Google Drive pour ordinateur, ou renseigner "
             "DOSSIER_DRIVE dans tiktok/.env)")
        return

    fichiers = []
    for video in videos:
        fichiers += [video, video.with_suffix(".json"), video.with_suffix(".txt")]

    try:
        copies = livraison.deposer_livrables(
            [f for f in fichiers if f.exists()],
            dossier,
            config.DOSSIER_DRIVE_CIBLE,
            sous_dossier,
        )
        _log("· déposé sur Drive : {} fichiers dans {}/{}".format(
            len(copies), config.DOSSIER_DRIVE_CIBLE, sous_dossier))
    except OSError as erreur:
        _log("· dépôt Drive impossible : {}".format(erreur))


def main(argv=None):
    analyseur = argparse.ArgumentParser(
        description="Genere des videos TikTok a partir des modules Spark Learning."
    )
    analyseur.add_argument("--module", help="identifiant ou libellé approximatif du module")
    analyseur.add_argument("--aleatoire", action="store_true", help="tirer un module au hasard")
    analyseur.add_argument("--tranche", choices=list(config.TRANCHES_ACTIVES),
                           help="restreindre le tirage à une tranche de niveau")
    analyseur.add_argument("--matiere", help="restreindre le tirage à une matière (maths, physique, si)")
    analyseur.add_argument("--angles", nargs="+", choices=list(scripts.ANGLES),
                           help="angles à produire (défaut : les trois)")
    analyseur.add_argument("--persona", choices=list(config.PERSONAS),
                           help="forcer une voix au lieu de celle de la tranche")
    analyseur.add_argument("--modele", default=config.MAMMOUTH_MODELE, help="modèle Mammouth")
    analyseur.add_argument("--url", default=config.SITE_URL, help="site à filmer")
    analyseur.add_argument("--graine", type=int, help="rend le tirage aléatoire reproductible")
    analyseur.add_argument("--sortie", default=str(config.SORTIE), help="dossier de sortie")
    analyseur.add_argument("--reexporter", action="store_true", help="forcer l'export du catalogue")
    analyseur.add_argument("--scripts-seuls", action="store_true",
                           help="écrire les scripts et s'arrêter là, sans produire de vidéo")
    analyseur.add_argument("--lot", type=int, default=1, metavar="N",
                           help="traiter N modules d'affilée (production par lots de nuit)")
    analyseur.add_argument("--refaire", action="store_true",
                           help="ignorer la mémoire de production et régénérer même si déjà fait")
    analyseur.add_argument("--sans-verification", action="store_true",
                           help="désactiver la passe de vérification arithmétique (déconseillé)")
    analyseur.add_argument("--etat", action="store_true",
                           help="afficher l'avancement de la production et s'arrêter")
    analyseur.add_argument("--deposer-tout", action="store_true",
                           help="(re)déposer sur Drive tout ce que la mémoire connaît")
    options = analyseur.parse_args(argv)

    debut = time.time()
    rafraichir_catalogue(force=options.reexporter)
    # Filtre le perimetre une bonne fois : la memoire, l'affichage et
    # le tirage doivent tous compter les memes modules.
    modules = catalogue.dans_perimetre(catalogue.charger(config.CATALOGUE))
    angles = options.angles or list(scripts.ANGLES)
    memoire_faite = memoire.charger(config.MEMOIRE)

    if options.etat:
        return _afficher_etat(modules, memoire_faite, angles)

    if options.deposer_tout:
        return _deposer_tout(memoire_faite)

    if not options.module and not options.aleatoire and not options.tranche and not options.matiere:
        analyseur.error("préciser --module, ou --aleatoire (éventuellement avec --tranche/--matiere)")

    sortie = Path(options.sortie)
    total_produites = 0
    echecs_modules = []

    for rang in range(max(1, options.lot)):
        # La memoire est relue a chaque tour : le module qu'on vient de
        # produire ne doit pas ressortir au tour suivant.
        disponibles = modules if options.refaire else memoire.reste_a_faire(
            modules, memoire_faite, angles)

        if not disponibles:
            _log("Tous les modules du périmètre ont déjà leurs {} angle(s).".format(len(angles)))
            break

        try:
            module = catalogue.choisir(
                disponibles,
                identifiant=options.module,
                tranche=options.tranche,
                matiere=options.matiere,
                graine=(options.graine + rang) if options.graine is not None else None,
            )
        except LookupError as erreur:
            if rang == 0:
                raise
            _log("Plus rien à traiter : {}".format(erreur))
            break

        if options.lot > 1:
            _log("")
            _log("── {}/{} ──".format(rang + 1, options.lot))

        # Un module qui echoue ne doit pas emporter le lot : sur une
        # production de nuit, on perdrait tous les modules suivants
        # pendant que personne ne regarde.
        try:
            produites, memoire_faite = _traiter(
                module, angles, options, sortie, memoire_faite)
            total_produites += len(produites)
        except Exception as erreur:
            produites = []
            _log("  MODULE ABANDONNÉ ({}) : {}".format(module["id"], erreur))
            echecs_modules.append(module["id"])

        if options.scripts_seuls:
            break

        # Un module explicitement nomme ne se repete pas sur un lot.
        if options.module:
            break

    if not options.scripts_seuls:
        _log("")
        if echecs_modules:
            _log("{} module(s) abandonné(s) : {}".format(
                len(echecs_modules), ", ".join(echecs_modules)))
            _log("Relancer la commande les reprendra (ils ne sont pas en mémoire).")
        _log("{} vidéo(s) au total en {:.0f} s".format(total_produites, time.time() - debut))
    return 0 if total_produites or options.scripts_seuls else 1


def _deposer_tout(memoire_faite):
    """Resynchronise le Drive avec tout ce qui a ete produit.

    Utile apres une interruption, ou quand le depot a echoue pendant que
    le rendu tournait. Un fichier deja present est simplement ecrase.
    """
    racine = livraison.dossier_drive_detecte(config.DOSSIER_DRIVE)
    if not racine:
        _log("Drive non détecté — rien à déposer.")
        return 1

    total, modules_traites = 0, 0
    for module_id, angles_produits in sorted(memoire_faite.items()):
        fichiers = []
        for info in angles_produits.values():
            video = Path(info["fichier"])
            fichiers += [f for f in (video, video.with_suffix(".json"),
                                     video.with_suffix(".txt")) if f.exists()]
        if not fichiers:
            continue
        copies = livraison.deposer_livrables(
            fichiers, racine, config.DOSSIER_DRIVE_CIBLE, module_id)
        total += len(copies)
        modules_traites += 1
        _log("  {} : {} fichiers".format(module_id, len(copies)))

    _log("{} fichiers déposés pour {} modules dans {}/{}".format(
        total, modules_traites, racine, config.DOSSIER_DRIVE_CIBLE))
    return 0


def _afficher_etat(modules, memoire_faite, angles):
    """Avancement de la production, sans rien fabriquer."""
    restants = memoire.reste_a_faire(modules, memoire_faite, angles)
    faits = len(modules) - len(restants)
    videos = sum(len(memoire.angles_produits(memoire_faite, m["id"])) for m in modules)

    _log("Périmètre  : {} modules ({})".format(len(modules), ", ".join(config.TRANCHES_ACTIVES)))
    _log("Angles     : {}".format(", ".join(angles)))
    _log("Terminés   : {} modules".format(faits))
    _log("À faire    : {} modules".format(len(restants)))
    _log("Vidéos     : {} produites / {} possibles".format(videos, len(modules) * len(angles)))
    if restants:
        apercu = ", ".join(m["id"] for m in restants[:5])
        _log("Prochains  : {}{}".format(apercu, " ..." if len(restants) > 5 else ""))
    return 0


def _traiter(module, angles, options, sortie, memoire_faite):
    """Produit un module : scripts, puis videos, puis memoire."""
    persona = config.persona_pour(module["tranche"], options.persona)
    manquants = [a for a in angles
                 if options.refaire or a not in memoire.angles_produits(memoire_faite, module["id"])]

    _log("Module : {} ({} · {})".format(module["titre"], module["dossier"], module["tranche"]))
    _log("Persona : {} / {}".format(persona["voix"], persona["sprites"]))
    _log("Angles : {}".format(", ".join(manquants)))

    _log("· écriture des scripts ({}{})".format(
        options.modele, "" if options.sans_verification else " + vérification"))
    ecrits = scripts.generer(
        module, scripts.client(), options.modele,
        angles=manquants, mascotte=config.MASCOTTE,
        verifier_calcul=not options.sans_verification,
    )
    for cle, script in ecrits.items():
        _log("  [{}] {:.0f} s — {}".format(
            cle, scripts.duree_estimee(script["full_text"]), script["hook"]))

    if options.scripts_seuls:
        cible = sortie / module["id"] / "scripts.json"
        cible.parent.mkdir(parents=True, exist_ok=True)
        cible.write_text(json.dumps(ecrits, ensure_ascii=False, indent=2), encoding="utf-8")
        _log("Scripts écrits : {}".format(cible))
        return [], memoire_faite

    produites = []
    for cle, script in ecrits.items():
        _log("[{}] {}".format(cle, script.get("libelle", "")))
        try:
            chemin = produire(module, cle, script, persona,
                              config.TRAVAIL, sortie, options.url.rstrip("/"))
            produites.append(chemin)
            # Enregistre angle par angle : un plantage au troisieme ne
            # doit pas faire refaire les deux premiers.
            memoire_faite = memoire.enregistrer(memoire_faite, module["id"], cle, chemin)
            memoire.sauver(memoire_faite, config.MEMOIRE)
        except Exception as erreur:
            _log("  ÉCHEC : {}".format(erreur))

    for chemin in produites:
        _log("✓ {}".format(chemin))

    _deposer_sur_drive(produites, module["id"])
    return produites, memoire_faite


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (RuntimeError, LookupError, ValueError, FileNotFoundError) as erreur:
        # Ces erreurs sont des messages destines a l'utilisateur
        # (clé absente, module introuvable, réponse du modèle refusée) :
        # une trace Python n'apporterait rien.
        print("\nArrêt : {}".format(erreur), file=sys.stderr)
        sys.exit(1)
