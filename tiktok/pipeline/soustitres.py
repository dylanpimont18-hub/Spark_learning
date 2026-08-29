# -*- coding: utf-8 -*-
"""Sous-titres mot a mot, cales sur la voix.

edge-tts emet un evenement WordBoundary par mot prononce, avec sa
position exacte dans l'audio. On s'en sert directement : pas de
transcription Whisper, donc pas de derive de synchronisation, pas de
modele a telecharger et pas une seconde de GPU.
"""

# Les offsets edge-tts sont en unites de 100 ns (convention Windows).
_TICKS_PAR_SECONDE = 10_000_000

_PONCTUATION_FORTE = (".", "!", "?", "…", ":")


def depuis_edge_tts(evenements):
    """Convertit les evenements bruts en mots dates en secondes."""
    mots = []
    for e in evenements:
        if e.get("type") != "WordBoundary":
            continue
        debut = e["offset"] / _TICKS_PAR_SECONDE
        mots.append({
            "texte": e["text"],
            "debut": round(debut, 3),
            "fin": round(debut + e["duration"] / _TICKS_PAR_SECONDE, 3),
        })
    return mots


def grouper(mots, max_mots=3, max_duree=1.6, silence_max=0.35):
    """Regroupe les mots en pavés de sous-titres.

    Trois raisons de fermer un pave : il est plein, il dure trop
    longtemps pour rester lisible, ou la voix marque une frontiere
    (ponctuation forte, respiration). Suivre la voix plutot qu'un
    decoupage regulier est ce qui rend le sous-titrage naturel.
    """
    groupes = []
    courant = []

    def fermer():
        if courant:
            groupes.append({
                "debut": courant[0]["debut"],
                "fin": courant[-1]["fin"],
                "mots": list(courant),
            })
            courant.clear()

    for mot in mots:
        if courant:
            silence = mot["debut"] - courant[-1]["fin"]
            trop_long = mot["fin"] - courant[0]["debut"] > max_duree
            if len(courant) >= max_mots or silence > silence_max or trop_long:
                fermer()
        courant.append(mot)
        if mot["texte"].rstrip().endswith(_PONCTUATION_FORTE):
            fermer()

    fermer()
    return groupes


def bornes_sections(script, mots):
    """Date le debut et la fin de chaque section du script.

    edge-tts ne sait rien de nos sections : il rend une suite de mots.
    On retrouve les frontieres en comptant les mots de chaque section,
    ce qui suppose que la voix a bien dit hook + body + cta dans cet
    ordre — garanti par scripts.assembler().

    Sert a savoir quelle pose de la mascotte afficher quand.
    """
    bornes = {}
    curseur = 0
    for cle in ("hook", "body", "cta"):
        nombre = len((script.get(cle) or "").split())
        tranche = mots[curseur:curseur + nombre]
        if tranche:
            debut = 0.0 if cle == "hook" else tranche[0]["debut"]
            bornes[cle] = (debut, tranche[-1]["fin"])
        else:
            # Section vide : un intervalle de duree nulle, place la ou
            # on en etait, pour ne pas trouer la frise temporelle.
            instant = mots[curseur - 1]["fin"] if curseur and curseur <= len(mots) else 0.0
            bornes[cle] = (instant, instant)
        curseur += nombre
    return bornes


def mot_actif(groupe, instant):
    """Index du mot prononce a cet instant, -1 avant le premier.

    Sert au surlignage : le pave entier est affiche, seul le mot en
    cours change de couleur.
    """
    actif = -1
    for i, mot in enumerate(groupe["mots"]):
        if instant >= mot["debut"]:
            actif = i
    return actif
