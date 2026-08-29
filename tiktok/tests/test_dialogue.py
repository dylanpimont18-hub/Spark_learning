# -*- coding: utf-8 -*-
"""Contrat de pipeline/dialogue.py.

Une interview, ce sont N repliques dites par deux voix differentes.
edge-tts ne sait rendre qu'une voix a la fois : chaque replique est donc
synthetisee separement, avec ses propres timings mot a mot repartant de
zero. Tout le travail est de recoller ces frises bout a bout sans perdre
la synchronisation, et de garder trace de qui parle a chaque instant —
c'est ce qui pilote la mascotte qui rebondit et la couleur du
sous-titre.
"""

import pytest

from pipeline.dialogue import fusionner, grouper_repliques, locuteur_a


def mot(texte, debut, fin):
    return {"texte": texte, "debut": debut, "fin": fin}


def piste(locuteur, mots, duree):
    return {"locuteur": locuteur, "mots": mots, "duree": duree}


# ── fusionner ──

def test_les_mots_de_la_seconde_replique_sont_decales_par_la_premiere():
    pistes = [
        piste("sparky", [mot("pourquoi", 0.0, 0.8)], 1.0),
        piste("lumen", [mot("parce", 0.0, 0.4)], 1.0),
    ]

    resultat = fusionner(pistes, silence=0.25)

    assert resultat["mots"][1]["debut"] == 1.25
    assert resultat["mots"][1]["fin"] == 1.65


def test_chaque_mot_porte_le_locuteur_de_sa_replique():
    pistes = [
        piste("sparky", [mot("pourquoi", 0.0, 0.8)], 1.0),
        piste("lumen", [mot("parce", 0.0, 0.4)], 1.0),
    ]

    resultat = fusionner(pistes, silence=0.25)

    assert [m["locuteur"] for m in resultat["mots"]] == ["sparky", "lumen"]


def test_la_duree_totale_intercale_un_silence_entre_les_repliques():
    pistes = [
        piste("sparky", [mot("a", 0.0, 0.5)], 2.0),
        piste("lumen", [mot("b", 0.0, 0.5)], 3.0),
        piste("sparky", [mot("c", 0.0, 0.5)], 1.0),
    ]

    # 2 + 3 + 1 de parole, et deux silences entre les trois repliques.
    assert fusionner(pistes, silence=0.25)["duree"] == 6.5


def test_chaque_replique_connait_son_intervalle():
    pistes = [
        piste("sparky", [mot("a", 0.0, 0.5)], 2.0),
        piste("lumen", [mot("b", 0.0, 0.5)], 3.0),
    ]

    repliques = fusionner(pistes, silence=0.25)["repliques"]

    assert repliques[0] == {"locuteur": "sparky", "debut": 0.0, "fin": 2.0}
    assert repliques[1] == {"locuteur": "lumen", "debut": 2.25, "fin": 5.25}


def test_une_replique_muette_avance_quand_meme_la_frise():
    """Un temps de respiration n'a pas de mot, mais occupe la timeline.

    Sans ca, la replique suivante serait datee trop tot et tout le
    sous-titrage deriverait a partir de la.
    """
    pistes = [
        piste("sparky", [mot("a", 0.0, 0.5)], 1.0),
        piste("lumen", [], 0.8),
        piste("sparky", [mot("c", 0.0, 0.5)], 1.0),
    ]

    resultat = fusionner(pistes, silence=0.25)

    assert resultat["mots"][1]["debut"] == 2.3
    assert resultat["duree"] == 3.3


def test_une_seule_replique_ne_produit_aucun_silence():
    pistes = [piste("lumen", [mot("seul", 0.0, 0.5)], 2.0)]

    assert fusionner(pistes, silence=0.25)["duree"] == 2.0


def test_fusionner_refuse_une_liste_vide():
    with pytest.raises(ValueError):
        fusionner([], silence=0.25)


# ── locuteur_a ──

def test_locuteur_a_rend_celui_qui_parle_a_cet_instant():
    repliques = [
        {"locuteur": "sparky", "debut": 0.0, "fin": 2.0},
        {"locuteur": "lumen", "debut": 2.25, "fin": 5.25},
    ]

    assert locuteur_a(repliques, 1.0) == "sparky"
    assert locuteur_a(repliques, 3.0) == "lumen"


def test_pendant_un_silence_c_est_le_locuteur_suivant_qui_est_actif():
    """Le silence appartient a celui qui va parler : la mascotte se
    tourne vers lui avant qu'il ouvre la bouche, comme dans une vraie
    interview."""
    repliques = [
        {"locuteur": "sparky", "debut": 0.0, "fin": 2.0},
        {"locuteur": "lumen", "debut": 2.25, "fin": 5.25},
    ]

    assert locuteur_a(repliques, 2.1) == "lumen"


def test_apres_la_derniere_replique_le_dernier_locuteur_reste_actif():
    repliques = [{"locuteur": "lumen", "debut": 0.0, "fin": 2.0}]

    assert locuteur_a(repliques, 9.0) == "lumen"


# ── grouper_repliques ──

def parle(locuteur, texte, debut, fin):
    return {"texte": texte, "debut": debut, "fin": fin, "locuteur": locuteur}


def test_un_pave_de_sous_titre_ne_melange_jamais_deux_locuteurs():
    """Sans cette coupure, la fin de la question et le debut de la
    reponse tomberaient dans le meme pave, affiche d'une seule couleur.
    """
    mots = [
        parle("sparky", "pourquoi", 0.0, 0.4),
        parle("lumen", "parce", 0.5, 0.9),
        parle("lumen", "que", 0.9, 1.2),
    ]

    groupes = grouper_repliques(mots, max_mots=3)

    assert [g["locuteur"] for g in groupes] == ["sparky", "lumen"]
    assert [len(g["mots"]) for g in groupes] == [1, 2]


def test_les_groupes_restent_dans_l_ordre_du_temps():
    mots = [
        parle("sparky", "a", 0.0, 0.3),
        parle("lumen", "b", 0.4, 0.7),
        parle("sparky", "c", 0.8, 1.1),
    ]

    groupes = grouper_repliques(mots, max_mots=3)

    assert [g["debut"] for g in groupes] == [0.0, 0.4, 0.8]


def test_une_longue_replique_se_decoupe_toujours_en_plusieurs_paves():
    mots = [parle("lumen", str(i), i * 0.3, i * 0.3 + 0.3) for i in range(5)]

    groupes = grouper_repliques(mots, max_mots=2)

    assert [len(g["mots"]) for g in groupes] == [2, 2, 1]
    assert all(g["locuteur"] == "lumen" for g in groupes)


def test_grouper_repliques_sans_mot_rend_une_liste_vide():
    assert grouper_repliques([]) == []
