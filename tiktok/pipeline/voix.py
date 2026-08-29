# -*- coding: utf-8 -*-
"""Voix off et timings mot a mot (edge-tts, gratuit).

Deux choses sortent d'ici : le MP3, et la position exacte de chaque mot
dans ce MP3. Le second point est ce qui rend les sous-titres possibles
sans Whisper.

Le timbre enfantin est obtenu par decalage des formants : on reinterprete
l'echantillonnage plus vite (la hauteur ET les formants montent, comme
dans une cavite vocale plus petite) puis on retablit le tempo. La duree
finale est inchangee, donc les timings restent valides.
"""

import asyncio
import subprocess
from pathlib import Path

import edge_tts
import imageio_ffmpeg

import config
from pipeline.dialogue import fusionner
from pipeline.soustitres import depuis_edge_tts

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()


async def _synthetiser(texte, voix, debit, pitch, destination):
    """Ecrit le MP3 et collecte les evenements de frontiere de mot.

    boundary="WordBoundary" est indispensable : edge-tts ne renvoie que
    des frontieres de PHRASE par defaut, ce qui ne permet aucun
    sous-titrage mot a mot.
    """
    communication = edge_tts.Communicate(
        texte, voix, rate=debit, pitch=pitch, boundary="WordBoundary"
    )
    evenements = []
    with open(destination, "wb") as sortie:
        async for morceau in communication.stream():
            if morceau["type"] == "audio":
                sortie.write(morceau["data"])
            elif morceau["type"] == "WordBoundary":
                evenements.append(morceau)
    return evenements


def _decaler_formants(source, destination, facteur):
    """Rajeunit la voix sans changer sa duree.

    Le premier aresample force un taux connu : edge-tts peut livrer du
    24 kHz comme autre chose, et asetrate ne sait pas lire le taux
    d'entree.
    """
    filtre = (
        "aresample=48000,"
        "asetrate=48000*{f:.4f},"
        "aresample=44100,"
        "atempo={t:.6f}"
    ).format(f=facteur, t=1.0 / facteur)

    subprocess.run(
        [FFMPEG, "-y", "-loglevel", "error", "-i", str(source), "-af", filtre, str(destination)],
        check=True,
    )


def duree(fichier):
    """Duree d'un fichier audio, en secondes."""
    from moviepy import AudioFileClip

    with AudioFileClip(str(fichier)) as clip:
        return float(clip.duration)


def dire(texte, persona, destination):
    """Produit la voix off d'un script.

    Renvoie le chemin du MP3, les mots dates, et la duree exacte —
    duree qui pilote ensuite la longueur de la capture video.
    """
    destination = Path(destination)
    destination.parent.mkdir(parents=True, exist_ok=True)

    brut = destination.with_suffix(".brut.mp3")
    evenements = asyncio.run(_synthetiser(
        texte,
        persona["voix"],
        persona["debit"],
        persona["pitch"],
        brut,
    ))

    facteur = persona.get("formants", 1.0)
    if abs(facteur - 1.0) < 0.01:
        brut.replace(destination)
    else:
        _decaler_formants(brut, destination, facteur)
        brut.unlink(missing_ok=True)

    return {
        "audio": destination,
        "mots": depuis_edge_tts(evenements),
        "duree": duree(destination),
    }


def _coller(morceaux, silence, destination):
    """Colle N MP3 bout a bout, avec un silence entre chacun.

    Le filtre concat exige que toutes les entrees partagent format et
    frequence : edge-tts ne garantit ni l'un ni l'autre d'une voix a
    l'autre, d'ou l'aformat pose sur chaque entree. Sans lui, ffmpeg
    refuse le montage avec une erreur peu parlante.

    Les silences sont des entrees lavfi, pas des fichiers : une entree
    de filtre ne se consomme qu'une fois, il en faut donc une par
    intervalle.
    """
    entrees = []
    for rang, morceau in enumerate(morceaux):
        if rang:
            entrees += ["-f", "lavfi", "-t", "{:.3f}".format(silence),
                        "-i", "anullsrc=r=44100:cl=stereo"]
        entrees += ["-i", str(morceau)]

    nombre = len(morceaux) * 2 - 1
    normalise = "".join(
        "[{i}:a]aformat=sample_rates=44100:channel_layouts=stereo[a{i}];".format(i=i)
        for i in range(nombre)
    )
    chaine = "".join("[a{}]".format(i) for i in range(nombre))
    filtre = "{}{}concat=n={}:v=0:a=1[sortie]".format(normalise, chaine, nombre)

    subprocess.run(
        [FFMPEG, "-y", "-loglevel", "error"] + entrees
        + ["-filter_complex", filtre, "-map", "[sortie]", str(destination)],
        check=True,
    )


def dire_dialogue(repliques, destination, silence=None):
    """Produit la bande son d'une interview a deux voix.

    Chaque replique est synthetisee separement — edge-tts ne rend qu'une
    voix par appel — puis les morceaux sont colles avec un silence
    entre eux. Les timings mot a mot de chaque replique repartent de
    zero : c'est dialogue.fusionner() qui les recale sur la frise
    commune.

    Renvoie le meme contrat que dire(), enrichi de la frise des
    repliques : chaque mot sait qui le prononce.
    """
    silence = config.SILENCE_REPLIQUE if silence is None else silence
    destination = Path(destination)
    destination.parent.mkdir(parents=True, exist_ok=True)

    morceaux, pistes = [], []
    for rang, replique in enumerate(repliques):
        morceau = destination.with_name("{}-r{:02d}.mp3".format(destination.stem, rang))
        rendu = dire(replique["texte"], config.persona_locuteur(replique["locuteur"]), morceau)
        morceaux.append(morceau)
        pistes.append({
            "locuteur": replique["locuteur"],
            "mots": rendu["mots"],
            "duree": rendu["duree"],
        })

    if len(morceaux) == 1:
        morceaux[0].replace(destination)
    else:
        _coller(morceaux, silence, destination)
        for morceau in morceaux:
            morceau.unlink(missing_ok=True)

    frise = fusionner(pistes, silence=silence)
    return {
        "audio": destination,
        "mots": frise["mots"],
        "repliques": frise["repliques"],
        # La duree reelle du fichier fait foi : c'est elle qui commande
        # la longueur de la capture. La frise calculee peut en differer
        # de quelques millisecondes (arrondis d'encodage MP3).
        "duree": duree(destination),
    }
