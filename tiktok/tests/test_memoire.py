# -*- coding: utf-8 -*-
"""Contrat de pipeline/memoire.py.

Sans mémoire, le tirage automatique ressort au jour 40 un module traité
au jour 3. C'est la brique qui rend une cadence quotidienne — ou une
production par lots de nuit — réellement utilisable.
"""

from pipeline.memoire import (
    angles_produits,
    charger,
    enregistrer,
    produits,
    reste_a_faire,
    sauver,
)

ANGLES = ["erreur", "piege-quiz", "notion"]


def corpus():
    return [
        {"id": "6e-fractions", "titre": "Fractions"},
        {"id": "3e-thales", "titre": "Thalès"},
        {"id": "1re-derivation", "titre": "La Dérivation"},
    ]


# ── État de départ ──

def test_une_memoire_vide_ne_connait_aucun_module():
    assert produits({}) == set()


def test_un_fichier_absent_donne_une_memoire_vide_sans_lever(tmp_path):
    """Le premier lancement ne doit pas exiger d'initialisation."""
    assert charger(tmp_path / "jamais-ecrit.json") == {}


# ── Enregistrement ──

def test_un_module_enregistre_devient_connu():
    memoire = enregistrer({}, "6e-fractions", "erreur", "sortie/erreur.mp4")
    assert produits(memoire) == {"6e-fractions"}


def test_deux_angles_du_meme_module_s_accumulent():
    memoire = enregistrer({}, "6e-fractions", "erreur", "a.mp4")
    memoire = enregistrer(memoire, "6e-fractions", "notion", "b.mp4")
    assert angles_produits(memoire, "6e-fractions") == {"erreur", "notion"}


def test_reproduire_le_meme_angle_ne_cree_pas_de_doublon():
    memoire = enregistrer({}, "6e-fractions", "erreur", "a.mp4")
    memoire = enregistrer(memoire, "6e-fractions", "erreur", "a-refait.mp4")
    assert angles_produits(memoire, "6e-fractions") == {"erreur"}


def test_la_date_de_production_est_conservee():
    memoire = enregistrer({}, "6e-fractions", "erreur", "a.mp4", horodatage="2026-08-26T08:00:00")
    assert memoire["6e-fractions"]["erreur"]["date"] == "2026-08-26T08:00:00"


# ── Ce qu'il reste à faire ──

def test_un_module_complet_sort_de_la_liste_a_faire():
    memoire = {}
    for angle in ANGLES:
        memoire = enregistrer(memoire, "6e-fractions", angle, angle + ".mp4")
    restants = [m["id"] for m in reste_a_faire(corpus(), memoire, ANGLES)]
    assert "6e-fractions" not in restants


def test_un_module_auquel_il_manque_un_angle_reste_a_faire():
    memoire = enregistrer({}, "6e-fractions", "erreur", "a.mp4")
    restants = [m["id"] for m in reste_a_faire(corpus(), memoire, ANGLES)]
    assert "6e-fractions" in restants


def test_ne_demander_qu_un_angle_ne_juge_que_celui_la():
    """Produire les 149 modules sur le seul angle « erreur » doit être
    possible sans que les autres angles bloquent la liste."""
    memoire = enregistrer({}, "6e-fractions", "erreur", "a.mp4")
    restants = [m["id"] for m in reste_a_faire(corpus(), memoire, ["erreur"])]
    assert "6e-fractions" not in restants


def test_une_memoire_vide_laisse_tout_le_corpus_a_faire():
    assert len(reste_a_faire(corpus(), {}, ANGLES)) == 3


# ── Persistance ──

def test_sauver_puis_recharger_conserve_l_etat(tmp_path):
    fichier = tmp_path / "production.json"
    memoire = enregistrer({}, "3e-thales", "notion", "x.mp4", horodatage="2026-08-26T08:00:00")
    sauver(memoire, fichier)
    assert charger(fichier) == memoire


def test_le_fichier_est_lisible_a_l_oeil_nu(tmp_path):
    """On doit pouvoir l'ouvrir pour comprendre ou corriger à la main."""
    fichier = tmp_path / "production.json"
    sauver(enregistrer({}, "3e-thales", "notion", "x.mp4"), fichier)
    contenu = fichier.read_text(encoding="utf-8")
    assert "\n" in contenu and "3e-thales" in contenu
