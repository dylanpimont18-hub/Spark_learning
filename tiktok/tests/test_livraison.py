# -*- coding: utf-8 -*-
"""Contrat de pipeline/livraison.py.

La publication se fait à la main depuis le téléphone : le rôle de ce
module est donc de déposer sur le Drive tout ce qu'il faut pour publier
sans revenir sur l'ordinateur — la vidéo, et une légende prête à coller.
"""

import pytest

from pipeline.livraison import deposer, texte_publication


def meta():
    return {
        "module": "6e-fractions",
        "titre_module": "Fractions",
        "angle": "erreur",
        "legende": "L'erreur sur les fractions que tout le monde fait",
        "hashtags": ["maths", "fractions", "college"],
        "url": "https://sparklearning.fr/module/6e-fractions/cours",
        "duree": 22.18,
    }


# ── texte_publication ──

def test_la_legende_ouvre_le_texte_a_coller():
    assert texte_publication(meta()).startswith("L'erreur sur les fractions")


def test_les_hashtags_sont_prefixes_et_sur_une_seule_ligne():
    lignes = texte_publication(meta()).splitlines()
    ligne_tags = [l for l in lignes if l.startswith("#")]
    assert ligne_tags == ["#maths #fractions #college"]


def test_l_url_du_module_est_rappelee_pour_la_bio():
    assert "sparklearning.fr/module/6e-fractions/cours" in texte_publication(meta())


def test_un_script_sans_hashtag_ne_produit_pas_de_ligne_vide_de_tags():
    sans = meta()
    sans["hashtags"] = []
    assert "#" not in texte_publication(sans)


# ── deposer ──

def test_les_fichiers_sont_copies_dans_un_sous_dossier_au_nom_du_module(tmp_path):
    drive = tmp_path / "drive"
    drive.mkdir()
    video = tmp_path / "erreur.mp4"
    video.write_bytes(b"video")

    copies = deposer([video], drive, "6e-fractions")

    assert (drive / "6e-fractions" / "erreur.mp4").read_bytes() == b"video"
    assert copies == [drive / "6e-fractions" / "erreur.mp4"]


def test_un_second_depot_ecrase_la_version_precedente(tmp_path):
    """Regenerer une video doit remplacer l'ancienne, pas en accumuler."""
    drive = tmp_path / "drive"
    drive.mkdir()
    video = tmp_path / "erreur.mp4"

    video.write_bytes(b"v1")
    deposer([video], drive, "6e-fractions")
    video.write_bytes(b"v2")
    deposer([video], drive, "6e-fractions")

    assert (drive / "6e-fractions" / "erreur.mp4").read_bytes() == b"v2"


def test_un_drive_absent_est_signale_en_nommant_le_chemin_attendu(tmp_path):
    """Google Drive pour ordinateur peut ne pas etre installe ou pas
    encore synchronise : le message doit dire ou l'on cherchait."""
    manquant = tmp_path / "pas-de-drive"
    with pytest.raises(FileNotFoundError, match="pas-de-drive"):
        deposer([tmp_path / "x.mp4"], manquant, "6e-fractions")


# ── Légende envoyée à l'API, distincte de celle lue par un humain ──

def test_la_legende_api_ne_contient_pas_la_consigne_de_mise_en_bio():
    """« Lien à mettre en bio » s'adresse à Dylan, pas aux spectateurs :
    publiée telle quelle, elle apparaîtrait dans les 30 légendes."""
    from pipeline.livraison import legende_api
    assert "bio" not in legende_api(meta()).lower()


def test_la_legende_api_garde_l_accroche_et_les_hashtags():
    from pipeline.livraison import legende_api
    texte = legende_api(meta())
    assert texte.startswith("L'erreur sur les fractions")
    assert "#maths" in texte


def test_la_legende_humaine_garde_la_consigne_elle():
    """Celle du fichier .txt, lue sur le téléphone, doit la conserver."""
    assert "bio" in texte_publication(meta()).lower()


def test_le_dossier_cible_est_cree_meme_sur_plusieurs_niveaux(tmp_path):
    """Le garde-fou « Drive absent » doit viser la racine montée, pas le
    sous-dossier de destination — sinon le premier dépôt échoue toujours,
    puisque ce dossier n'existe pas encore."""
    drive = tmp_path / "Mon Drive"
    drive.mkdir()
    video = tmp_path / "erreur.mp4"
    video.write_bytes(b"video")

    copies = deposer([video], drive, "TikTok Spark Learning/6e-fractions")

    attendu = drive / "TikTok Spark Learning" / "6e-fractions" / "erreur.mp4"
    assert attendu.exists()
    assert copies == [attendu]


def test_les_livrables_d_un_module_atterrissent_sous_racine_cible_module(tmp_path):
    """Le bug réel était ici : on passait <drive>/<cible> comme racine à
    vérifier, donc le tout premier dépôt échouait — ce dossier n'existe
    pas encore. C'est la RACINE montée par Drive qu'il faut vérifier."""
    from pipeline.livraison import deposer_livrables
    drive = tmp_path / "Mon Drive"
    drive.mkdir()
    video = tmp_path / "erreur.mp4"
    video.write_bytes(b"v")

    copies = deposer_livrables([video], drive, "TikTok Spark Learning", "3e-systemes")

    assert copies == [drive / "TikTok Spark Learning" / "3e-systemes" / "erreur.mp4"]
