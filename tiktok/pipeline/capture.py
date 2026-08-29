# -*- coding: utf-8 -*-
"""Capture animee du site, pilotee depuis Python.

Le travail reel est fait par tools/screencast.js : Puppeteer est deja
une dependance du depot (scripts/prerender.js), autant s'en servir
plutot que d'ajouter un pilote de navigateur cote Python.
"""

import json
import shutil
import subprocess
from pathlib import Path

import config


def plan_segments(etapes, duree):
    """Convertit des etapes {url, jusqu_a} en segments dates en secondes.

    Les bornes sont donnees en fraction de la video parce que le plan de
    tournage est ecrit avant que la voix off existe : on sait qu'une
    reponse occupe le premier tiers, pas qu'elle dure 18,4 secondes.

    Le calcul est fait ici plutot que dans screencast.js pour qu'il soit
    testable sans lancer un navigateur.
    """
    if not etapes:
        raise ValueError("un plan de capture a besoin d'au moins une etape")

    segments = []
    precedente = 0.0

    for rang, etape in enumerate(etapes):
        derniere = rang == len(etapes) - 1
        if derniere:
            # Un `jusqu_a` sur la derniere etape est une coquille
            # frequente : l'ignorer coute moins cher que de perdre un
            # rendu de plusieurs minutes.
            fraction = 1.0
        else:
            if "jusqu_a" not in etape:
                raise ValueError(
                    "etape {} sans `jusqu_a` : seule la derniere peut s'en passer".format(rang)
                )
            fraction = float(etape["jusqu_a"])
            if not 0.0 < fraction <= 1.0:
                raise ValueError("`jusqu_a` hors de ]0, 1] : {}".format(fraction))
            if fraction <= precedente:
                raise ValueError(
                    "bornes non croissantes : {} apres {}".format(fraction, precedente)
                )

        segments.append({
            "url": etape["url"],
            "debut": round(precedente * duree, 3),
            "fin": round(fraction * duree, 3),
        })
        precedente = fraction

    return segments


def filmer_plan(etapes, duree, sortie, fps=None):
    """Filme plusieurs endroits du site en un seul passage.

    Sert aux interviews : le plan suit le fil des questions. Le
    navigateur est ouvert en viewport bureau, pas mobile — une video
    paysage montre le site tel qu'on le voit sur un ecran.
    """
    fps = fps or config.FPS_CAPTURE
    sortie = Path(sortie)
    sortie.mkdir(parents=True, exist_ok=True)

    segments = plan_segments(etapes, duree)
    fichier_plan = sortie.parent / (sortie.name + "-plan.json")
    fichier_plan.write_text(json.dumps(segments, ensure_ascii=False), encoding="utf-8")

    node = shutil.which("node")
    if not node:
        raise RuntimeError("node introuvable dans le PATH — requis pour la capture Puppeteer")

    commande = [
        node, str(config.RACINE / "tools" / "screencast.js"),
        "--plan", str(fichier_plan),
        "--duree", "{:.3f}".format(duree),
        "--fps", str(fps),
        "--sortie", str(sortie),
        "--vw", str(config.INTERVIEW_VIEWPORT[0]),
        "--vh", str(config.INTERVIEW_VIEWPORT[1]),
        "--echelle", "{:.4f}".format(config.ECHELLE_ECRAN),
        "--bureau",
    ]

    resultat = subprocess.run(
        commande, cwd=str(config.PROJET), capture_output=True, text=True, encoding="utf-8"
    )
    if resultat.returncode != 0:
        raise RuntimeError("capture échouée : " + (resultat.stderr or "").strip())

    ligne = [l for l in resultat.stdout.strip().splitlines() if l.startswith("{")]
    if not ligne:
        raise RuntimeError("capture sans compte-rendu : " + resultat.stdout[-400:])

    rapport = json.loads(ligne[-1])
    rapport["trames_fichiers"] = sorted(str(p) for p in sortie.glob("f-*.jpg"))
    return rapport


def filmer(url, duree, sortie, url2=None, bascule=0.72, fps=None):
    """Filme le site pendant exactement `duree` secondes.

    La duree vient de l'audio deja synthetise : c'est la voix qui
    commande la longueur du plan, jamais l'inverse.
    """
    fps = fps or config.FPS_CAPTURE
    sortie = Path(sortie)

    node = shutil.which("node")
    if not node:
        raise RuntimeError("node introuvable dans le PATH — requis pour la capture Puppeteer")

    commande = [
        node, str(config.RACINE / "tools" / "screencast.js"),
        "--url", url,
        "--duree", "{:.3f}".format(duree),
        "--fps", str(fps),
        "--sortie", str(sortie),
        # Capture a la taille exacte de la fenetre du mockup : le montage
        # n'a alors plus une seule image a redimensionner.
        "--echelle", "{:.4f}".format(config.ECHELLE_CAPTURE),
    ]
    if url2:
        commande += ["--url2", url2, "--bascule", "{:.3f}".format(bascule)]

    resultat = subprocess.run(
        commande, cwd=str(config.PROJET), capture_output=True, text=True, encoding="utf-8"
    )
    if resultat.returncode != 0:
        raise RuntimeError("capture échouée : " + (resultat.stderr or "").strip())

    ligne = [l for l in resultat.stdout.strip().splitlines() if l.startswith("{")]
    if not ligne:
        raise RuntimeError("capture sans compte-rendu : " + resultat.stdout[-400:])

    rapport = json.loads(ligne[-1])
    rapport["trames_fichiers"] = sorted(str(p) for p in sortie.glob("f-*.jpg"))
    return rapport
