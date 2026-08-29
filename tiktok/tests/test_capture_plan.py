# -*- coding: utf-8 -*-
"""Contrat du plan de capture multi-segments (pipeline/capture.py).

Les videos de modules ne filment qu'une bascule : le cours, puis les
exercices. Une interview, elle, suit le fil des questions et passe par
quatre ou cinq endroits du site. Le decoupage est calcule ici, en
Python, et screencast.js se contente de l'executer : c'est la seule
facon de le tester sans lancer un navigateur.

Les bornes sont exprimees en fraction de la video (0 a 1) parce que le
texte est ecrit avant de connaitre la duree exacte de la voix off — on
sait qu'une reponse occupe le premier tiers, pas qu'elle dure 18,4 s.
"""

import pytest

from pipeline.capture import plan_segments


def test_deux_etapes_partagent_la_duree_a_la_borne_demandee():
    etapes = [
        {"url": "https://exemple.fr/a", "jusqu_a": 0.25},
        {"url": "https://exemple.fr/b"},
    ]

    segments = plan_segments(etapes, duree=40.0)

    assert segments[0] == {"url": "https://exemple.fr/a", "debut": 0.0, "fin": 10.0}
    assert segments[1] == {"url": "https://exemple.fr/b", "debut": 10.0, "fin": 40.0}


def test_la_derniere_etape_va_jusqu_a_la_fin_meme_si_elle_annonce_une_borne():
    """Un `jusqu_a` sur la derniere etape est une coquille frequente.

    L'ignorer plutot que refuser evite de perdre un rendu de plusieurs
    minutes pour une borne en trop.
    """
    etapes = [
        {"url": "https://exemple.fr/a", "jusqu_a": 0.5},
        {"url": "https://exemple.fr/b", "jusqu_a": 0.9},
    ]

    assert plan_segments(etapes, duree=10.0)[-1]["fin"] == 10.0


def test_une_seule_etape_couvre_toute_la_video():
    segments = plan_segments([{"url": "https://exemple.fr/a"}], duree=12.5)

    assert segments == [{"url": "https://exemple.fr/a", "debut": 0.0, "fin": 12.5}]


def test_des_bornes_qui_reculent_sont_refusees():
    etapes = [
        {"url": "a", "jusqu_a": 0.6},
        {"url": "b", "jusqu_a": 0.3},
        {"url": "c"},
    ]

    with pytest.raises(ValueError):
        plan_segments(etapes, duree=10.0)


def test_une_borne_hors_de_l_intervalle_est_refusee():
    with pytest.raises(ValueError):
        plan_segments([{"url": "a", "jusqu_a": 1.4}, {"url": "b"}], duree=10.0)


def test_une_etape_intermediaire_sans_borne_est_refusee():
    """Seule la derniere etape peut se passer de `jusqu_a` : ailleurs,
    l'absence de borne veut dire qu'on ne sait pas quand basculer."""
    with pytest.raises(ValueError):
        plan_segments([{"url": "a"}, {"url": "b"}], duree=10.0)


def test_un_plan_vide_est_refuse():
    with pytest.raises(ValueError):
        plan_segments([], duree=10.0)
