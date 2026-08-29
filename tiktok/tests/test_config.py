# -*- coding: utf-8 -*-
"""Contrat de config.persona_pour : quelle voix pour quel public."""

import pytest

import config


def test_le_college_parle_avec_la_voix_par_defaut():
    assert config.persona_pour("college")["voix"] == config.PERSONAS["naturelle"]["voix"]


def test_le_bts_bascule_sur_la_voix_adulte():
    assert config.persona_pour("bts")["sprites"] == "adulte"


def test_une_persona_forcee_prend_le_pas_sur_la_tranche():
    assert config.persona_pour("college", "adulte")["sprites"] == "adulte"


def test_une_persona_inconnue_est_refusee_en_nommant_les_valeurs_valides():
    with pytest.raises(ValueError, match="naturelle"):
        config.persona_pour("college", "chipmunk")


def test_une_tranche_inattendue_retombe_sur_une_persona_existante():
    """Un nouveau dossier dans js/data/ ne doit pas faire planter le
    pipeline sur un KeyError avant même d'avoir écrit un script."""
    assert config.persona_pour("prepa")["voix"] in [p["voix"] for p in config.PERSONAS.values()]
