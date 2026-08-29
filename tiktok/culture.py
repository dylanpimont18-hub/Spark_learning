# -*- coding: utf-8 -*-
"""Videos « maths x vie reelle » : une notion vue depuis ce qui interesse un ado.

Seconde ligne editoriale de la chaine. Celle des modules (main.py) part
d'un cours de js/data/ et en tire trois angles ; celle-ci part du sujet
et ne produit qu'une video. Les deux ne partagent que le moteur de
rendu, et le narrateur change : Lumen le loup, pas Sparky le renard.

    python culture.py --lot 30
    python culture.py --sujet "les loot boxes" --sans-verification
    python culture.py --famille sport
    python culture.py --etat

Le pipeline ne date rien : il fabrique un stock, et c'est le workflow
n8n qui en publie une par jour. « --lot 30 » donne donc un mois
d'avance, pas trente videos publiees le meme jour.
"""

import argparse
import contextlib
import json
import os
import sys
import time
from pathlib import Path

import config
from pipeline import (capture, catalogue, culture, livraison, montage, scripts,
                      soustitres, sujets, voix)


def _log(message):
    print(message, flush=True)


# Windows rend la zone verrouillee ILLISIBLE aux autres handles : un
# second lot ne pourrait meme pas relire le PID pour l'afficher. Le
# verrou porte donc sur l'octet 0, et le PID vit juste apres.
_OFFSET_PID = 1
_LARGEUR_PID = 20


def _prendre(fichier):
    """Pose un verrou exclusif non bloquant sur le premier octet."""
    fichier.seek(0)
    try:
        import msvcrt
    except ImportError:
        import fcntl

        fcntl.flock(fichier.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    else:
        msvcrt.locking(fichier.fileno(), msvcrt.LK_NBLCK, 1)


def _relacher(fichier):
    fichier.seek(0)
    try:
        import msvcrt
    except ImportError:
        import fcntl

        fcntl.flock(fichier.fileno(), fcntl.LOCK_UN)
    else:
        msvcrt.locking(fichier.fileno(), msvcrt.LK_UNLCK, 1)


@contextlib.contextmanager
def verrou(chemin):
    """Interdit deux lots simultanes.

    Deux lots qui tournent en meme temps ecrivent le MEME sujets.json et
    rendent dans les MEMES dossiers : le second ecrase la memoire du
    premier, et MoviePy echoue sur ses fichiers temporaires. Vu en reel
    le 2026-08-27, apres une relance de ce qu'on croyait etre un lot
    mort : deux dossiers se sont retrouves avec un MP4 mais sans
    metadonnees. La memoire les comptait faits, aucun n'etait
    publiable, et rien ne le signalait avant la publication.

    C'est un verrou de FICHIER, pas un fichier-temoin : le systeme le
    relache quand le processus meurt, donc un plantage ne laisse jamais
    un verrou fantome a supprimer a la main — ce qui serait pire que le
    probleme, personne ne pensant a nettoyer un fichier apres un crash.
    """
    chemin = Path(chemin)
    chemin.parent.mkdir(parents=True, exist_ok=True)
    if not chemin.exists():
        chemin.touch()

    # Binaire et « r+ », jamais « a+ » : en mode append toute ecriture
    # part en fin de fichier quel que soit le seek(), et le PID
    # atterrissait alors sous l'octet verrouille — illisible. En mode
    # texte, seek() ne prend d'ailleurs pas un offset d'octets.
    fichier = open(chemin, "r+b")

    fichier.seek(_OFFSET_PID)
    occupant = fichier.read(_LARGEUR_PID).decode("ascii", "replace").strip()

    try:
        _prendre(fichier)
    except OSError:
        fichier.close()
        raise RuntimeError(
            "un lot « vie réelle » tourne déjà{} — attendre qu'il finisse ou "
            "l'arrêter avant d'en relancer un (verrou : {})".format(
                " (PID " + occupant + ")" if occupant.isdigit() else "", chemin))

    try:
        # Largeur fixe : ecrire par-dessus evite un truncate() sur une
        # zone verrouillee, que Windows refuse.
        fichier.seek(_OFFSET_PID)
        fichier.write("{:<{}}".format(os.getpid(), _LARGEUR_PID).encode("ascii"))
        fichier.flush()
        yield
    finally:
        _relacher(fichier)
        fichier.close()


# La console Windows est en cp1252 : un emoji dans une legende suffirait
# a tuer le script sur un simple print.
for _flux in (sys.stdout, sys.stderr):
    try:
        _flux.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, OSError):
        pass


def metadonnees(resultat, duree, persona, url_base):
    """Fiche de la video, ecrite a cote du MP4.

    Les cles « legende », « hashtags » et « url » sont le contrat avec
    le workflow n8n qui publie : les renommer casserait la publication
    sans qu'aucun test du depot ne bronche.
    """
    script = resultat["script"]
    module = resultat.get("module")
    url_base = url_base.rstrip("/")
    return {
        "sujet": resultat["sujet"],
        "notion": resultat["notion"],
        "famille": resultat["famille"],
        "module": module["id"] if module else None,
        "duree": round(duree, 2),
        "legende": script.get("titre", "")[:150],
        "hashtags": script.get("hashtags", []),
        # Jamais d'URL vide : sans module rattache, la description
        # YouTube tombe sur l'accueil plutot que sur rien.
        "url": url_base + module["url"] if module else url_base,
        "texte": script["full_text"],
        "persona": persona["voix"],
    }


def rendre(resultat, persona, travail, sortie, url_base):
    """Voix, capture, montage : la chaine de rendu d'une video.

    Calquee sur main.py::produire, qui ne peut pas etre appelee ici :
    elle attend un module, or cette ligne n'en a pas forcement.

    L'ordre est contraint — la capture doit durer exactement la longueur
    de la voix off, donc voix puis capture, jamais l'inverse.
    """
    sujet_id = sujets.identifiant(resultat["sujet"])
    dossier_travail = travail / ("culture-" + sujet_id)
    dossier_travail.mkdir(parents=True, exist_ok=True)

    _log("  · voix off ({})".format(persona["voix"]))
    voix_off = voix.dire(resultat["script"]["full_text"], persona,
                         dossier_travail / "voix.mp3")
    duree = voix_off["duree"]
    _log("    {:.1f} s, {} mots datés".format(duree, len(voix_off["mots"])))

    _log("  · capture du site")
    plan = capture.filmer(*_plan_de_capture(resultat, url_base, duree,
                                            dossier_travail / "frames"))
    _log("    {} trames".format(plan["trames"]))

    _log("  · montage")
    bornes = soustitres.bornes_sections(resultat["script"], voix_off["mots"])
    destination = sortie / sujet_id / "video.mp4"
    montage.monter(
        plan["trames_fichiers"], plan["fps"], voix_off["audio"],
        voix_off["mots"], bornes, destination,
        jeu_sprites=persona["sprites"],
    )

    fiche = metadonnees(resultat, duree, persona, url_base)
    destination.with_suffix(".json").write_text(
        json.dumps(fiche, ensure_ascii=False, indent=2), encoding="utf-8")
    destination.with_suffix(".txt").write_text(
        livraison.texte_publication(fiche), encoding="utf-8")

    return destination


def _plan_de_capture(resultat, url_base, duree, frames):
    """Arguments de capture.filmer(), selon qu'un module soit rattache.

    Avec module, on filme son cours puis ses exercices comme la ligne
    existante. Sans module, l'accueil seul : basculer vers une seconde
    page n'aurait aucun sens si la premiere n'a rien a voir avec le
    sujet.
    """
    module = resultat.get("module")
    url_base = url_base.rstrip("/")
    if not module:
        return (url_base, duree, frames)

    url_cours = url_base + module["url"]
    return (url_cours, duree, frames, url_cours.replace("/cours", "/exercices"))


def _deposer_sur_drive(video, sujet_id):
    """Copie les livrables sur le Drive, si Drive est la.

    Un depot impossible ne doit jamais faire echouer un rendu qui a
    coute plusieurs minutes : on signale et on continue.
    """
    dossier = livraison.dossier_drive_detecte(config.DOSSIER_DRIVE)
    if not dossier:
        _log("· Drive non détecté — vidéo disponible en local uniquement")
        return

    fichiers = [f for f in (video, video.with_suffix(".json"), video.with_suffix(".txt"))
                if f.exists()]
    try:
        copies = livraison.deposer_livrables(
            fichiers, dossier, config.DOSSIER_DRIVE_CIBLE_CULTURE, sujet_id)
        _log("· déposé sur Drive : {} fichiers dans {}/{}".format(
            len(copies), config.DOSSIER_DRIVE_CIBLE_CULTURE, sujet_id))
    except OSError as erreur:
        _log("· dépôt Drive impossible : {}".format(erreur))


def _ecrire_un_sujet(client_ia, options, memoire, modules, famille):
    """Choix, redaction et controles d'un sujet, famille par famille.

    Une famille epuisee n'est pas un echec : on passe a la suivante.
    On ne fait qu'un tour complet, apres quoi c'est la memoire elle-meme
    qui est saturee et il faut la purger.
    """
    for _ in range(len(sujets.FAMILLES)):
        try:
            resultat = culture.produire(
                client_ia, options.modele, famille, memoire, modules,
                sujet=options.sujet,
                verifier=not options.sans_verification,
            )
        except LookupError as erreur:
            _log("  · {} — famille suivante".format(erreur))
            famille = sujets.famille_suivante(famille)
            continue

        return resultat, famille

    raise LookupError("aucune famille n'a de sujet neuf à proposer — "
                      "purger ou raccourcir {}".format(config.MEMOIRE_SUJETS))


def _afficher_etat(memoire):
    """Ce qui a deja ete produit, sans rien fabriquer."""
    brules = [e for e in memoire.values() if e.get("brule")]
    rattaches = [e for e in memoire.values() if e.get("module")]

    _log("Sujets     : {} traités, dont {} abandonnés".format(len(memoire), len(brules)))
    _log("Rattachés  : {} vidéos pointent un module (lien YouTube)".format(len(rattaches)))
    _log("Famille du jour : {}".format(sujets.famille_du_jour()))

    if memoire:
        _log("")
        _log("{:<12} {:<38} {}".format("FAMILLE", "SUJET", "NOTION"))
        _log("─" * 78)
        for entree in sorted(memoire.values(), key=lambda e: e.get("date") or "",
                             reverse=True)[:15]:
            _log("{:<12} {:<38} {}{}".format(
                (entree.get("famille") or "")[:11],
                (entree.get("sujet") or "")[:37],
                (entree.get("notion") or "")[:24],
                "  (abandonné)" if entree.get("brule") else ""))
            # Le motif de l'abandon, sinon un calendrier troué reste
            # inexplicable une fois la console fermée.
            for reproche in (entree.get("reproches") or [])[:2]:
                _log("{:<12} └─ {}".format("", reproche[:60]))

    par_famille = {}
    for entree in memoire.values():
        par_famille[entree.get("famille")] = par_famille.get(entree.get("famille"), 0) + 1
    if par_famille:
        _log("")
        _log("Répartition : " + ", ".join(
            "{} {}".format(f, n) for f, n in sorted(par_famille.items())))
    return 0


def _produire_le_lot(options, memoire):
    """Fabrique les videos du lot. Appelee sous verrou par main()."""
    debut = time.time()
    modules = catalogue.dans_perimetre(catalogue.charger(config.CATALOGUE))
    persona = config.persona_pour(None, "adulte")
    sortie = Path(options.sortie)
    famille = options.famille or sujets.famille_du_jour()

    client_ia = scripts.client()
    produites, abandons = [], []

    for rang in range(max(1, options.lot)):
        if options.lot > 1:
            _log("")
            _log("── {}/{} ──".format(rang + 1, options.lot))

        # Un sujet qui echoue ne doit pas emporter le lot : sur une
        # production de nuit, on perdrait tous les suivants pendant que
        # personne ne regarde.
        connus = set(memoire)
        try:
            resultat, famille = _ecrire_un_sujet(
                client_ia, options, memoire, modules, famille)
        except LookupError as erreur:
            _log("Plus rien à produire : {}".format(erreur))
            break
        except Exception as erreur:
            _log("  SUJET ABANDONNÉ : {}".format(erreur))
            abandons.append(str(erreur))
            continue
        finally:
            # La memoire est sauvee meme sur abandon : c'est elle qui
            # porte la marque « brule », sans quoi le sujet ressortirait
            # au tour suivant pour echouer pareil.
            sujets.sauver(memoire, config.MEMOIRE_SUJETS)

        if resultat is None:
            # produire() ne rend rien quand il abandonne : le sujet
            # brule est celui qu'il vient d'ajouter a la memoire.
            entree = next((memoire[c] for c in memoire if c not in connus), {})
            _log("  SUJET ABANDONNÉ : {}".format(entree.get("sujet", "?")))
            for reproche in entree.get("reproches") or ["motif non consigné"]:
                _log("    · {}".format(reproche))
            abandons.append(entree.get("sujet", "contrôles"))
            famille = sujets.famille_suivante(famille)
            continue

        _log("Sujet   : {} ({})".format(resultat["sujet"], resultat["famille"]))
        _log("Notion  : {}".format(resultat["notion"]))
        _log("Module  : {}".format(
            resultat["module"]["id"] if resultat["module"] else "aucun (lien vers l'accueil)"))
        _log("Script  : {}".format(resultat["script"]["hook"]))

        try:
            video = rendre(resultat, persona, config.TRAVAIL, sortie, options.url)
        except Exception as erreur:
            _log("  ÉCHEC DU RENDU : {}".format(erreur))
            abandons.append(str(erreur))
            famille = sujets.famille_suivante(famille)
            continue

        produites.append(video)
        _log("✓ {}".format(video))
        _deposer_sur_drive(video, sujets.identifiant(resultat["sujet"]))

        # Un lot ne doit pas s'enfermer dans une famille : sans cette
        # rotation, « --lot 30 » sortirait trente sujets de jeu video.
        famille = sujets.famille_suivante(famille)

        # Un sujet impose ne se repete pas sur un lot.
        if options.sujet:
            break

    _log("")
    if abandons:
        _log("{} sujet(s) abandonné(s) : {}".format(
            len(abandons), " ; ".join(a[:60] for a in abandons)))
    _log("{} vidéo(s) en {:.0f} s".format(len(produites), time.time() - debut))
    return 0 if produites else 1


def main(argv=None):
    analyseur = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    analyseur.add_argument("--lot", type=int, default=1, metavar="N",
                           help="produire N vidéos d'affilée (stock d'avance)")
    analyseur.add_argument("--sujet", help="forcer un sujet au lieu de le faire choisir")
    analyseur.add_argument("--famille", choices=list(sujets.FAMILLES),
                           help="forcer la famille au lieu de celle du jour")
    analyseur.add_argument("--sans-verification", action="store_true",
                           help="sauter les deux contrôles de contenu (déconseillé)")
    analyseur.add_argument("--etat", action="store_true",
                           help="afficher ce qui a déjà été produit et s'arrêter")
    analyseur.add_argument("--modele", default=config.MAMMOUTH_MODELE, help="modèle Mammouth")
    analyseur.add_argument("--url", default=config.SITE_URL, help="site à filmer")
    analyseur.add_argument("--sortie", default=str(config.SORTIE_CULTURE),
                           help="dossier de sortie")
    options = analyseur.parse_args(argv)

    memoire = sujets.charger(config.MEMOIRE_SUJETS)

    if options.etat:
        return _afficher_etat(memoire)

    # Sous verrou : deux lots simultanes ecrivent le meme sujets.json
    # et se disputent les fichiers temporaires de MoviePy.
    with verrou(config.TRAVAIL / "culture.lock"):
        return _produire_le_lot(options, memoire)


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (RuntimeError, LookupError, ValueError, FileNotFoundError) as erreur:
        # Ces erreurs sont des messages destines a l'utilisateur : une
        # trace Python n'apporterait rien.
        print("\nArrêt : {}".format(erreur), file=sys.stderr)
        sys.exit(1)
