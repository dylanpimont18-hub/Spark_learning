# -*- coding: utf-8 -*-
"""Interview a deux voix : recollage des repliques en une seule frise.

edge-tts ne synthetise qu'une voix par appel. Une interview est donc
faite de N fichiers audio independants, chacun avec ses propres timings
mot a mot repartant de zero. Ce module les recolle : il decale les
offsets, attache un locuteur a chaque mot, et rend la frise des
repliques.

Ce sont ces deux sorties qui pilotent tout le reste du montage — quelle
mascotte rebondit, de quelle couleur est le sous-titre, quel tiers
inferieur est affiche.

Rien ici ne touche a l'audio : la fusion des MP3 est faite par voix.py,
qui appelle ffmpeg. Separer les deux permet de tester toute la logique
de synchronisation sans synthetiser une seule seconde de son.
"""

from pipeline.soustitres import grouper


def fusionner(pistes, silence=0.25):
    """Assemble N repliques deja synthetisees en une frise unique.

    Chaque piste est un dictionnaire {locuteur, mots, duree} tel que le
    rend voix.dire(). Le silence est intercale ENTRE les repliques, pas
    apres la derniere : une interview ne finit pas sur un blanc.
    """
    if not pistes:
        raise ValueError("un dialogue a besoin d'au moins une replique")

    mots = []
    repliques = []
    curseur = 0.0

    for rang, piste in enumerate(pistes):
        if rang:
            curseur = round(curseur + silence, 3)

        debut = curseur
        for source in piste["mots"]:
            mots.append({
                "texte": source["texte"],
                "debut": round(debut + source["debut"], 3),
                "fin": round(debut + source["fin"], 3),
                "locuteur": piste["locuteur"],
            })

        curseur = round(debut + piste["duree"], 3)
        repliques.append({
            "locuteur": piste["locuteur"],
            "debut": debut,
            "fin": curseur,
        })

    return {"mots": mots, "duree": curseur, "repliques": repliques}


def locuteur_a(repliques, instant):
    """Qui parle a cet instant.

    Un silence appartient a celui qui va parler, pas a celui qui vient
    de finir : la mascotte se tourne vers son interlocuteur avant qu'il
    ouvre la bouche, comme dans une vraie interview. Apres la derniere
    replique, le dernier locuteur reste actif — sinon la mascotte se
    figerait pendant le carton de fin.
    """
    for replique in repliques:
        if instant <= replique["fin"]:
            return replique["locuteur"]
    return repliques[-1]["locuteur"]


def grouper_repliques(mots, **reglages):
    """Regroupe les mots en paves de sous-titres, sans jamais melanger
    deux locuteurs dans le meme pave.

    grouper() ne connait que le rythme de la voix : il fermerait un pave
    sur une respiration, pas sur un changement d'interlocuteur. Or un
    pave est affiche d'une seule couleur — celle de celui qui parle.
    On decoupe donc d'abord par locuteur, puis on applique le decoupage
    habituel a l'interieur de chaque tour de parole.
    """
    groupes = []
    tour = []

    def vider():
        if not tour:
            return
        for groupe in grouper(tour, **reglages):
            groupe["locuteur"] = tour[0]["locuteur"]
            groupes.append(groupe)
        tour.clear()

    for mot in mots:
        if tour and mot["locuteur"] != tour[0]["locuteur"]:
            vider()
        tour.append(mot)
    vider()

    return groupes
