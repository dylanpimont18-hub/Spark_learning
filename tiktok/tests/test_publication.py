# -*- coding: utf-8 -*-
"""Contrat de pipeline/publication.py.

Deux choses se jouent ici, et les deux sont irréversibles une fois
envoyées : le calendrier (une rotation ratée rend l'expérience
ininterprétable) et le format de la requête (un `scheduled_date` mal
formé publie 30 vidéos immédiatement au lieu de les programmer).
"""

from datetime import date, datetime

import pytest

from pipeline.publication import ANGLES_ORDRE, CRENEAUX, calendrier, parametres


def modules():
    return ["6e-fractions", "3e-thales", "1re-derivation"]


def plan(jours=3):
    return calendrier(modules()[:jours], date(2026, 8, 27))


# ── calendrier ──

def test_un_module_par_jour():
    jours = {p["jour"] for p in plan()}
    assert jours == {1, 2, 3}


def test_les_trois_angles_d_un_module_passent_le_meme_jour():
    """C'est ce qui neutralise l'effet « sujet » : à l'intérieur d'un
    jour, les écarts ne viennent que de l'angle."""
    premier = [p for p in plan() if p["jour"] == 1]
    assert {p["angle"] for p in premier} == set(ANGLES_ORDRE)
    assert {p["module"] for p in premier} == {"6e-fractions"}


def test_chaque_jour_remplit_les_trois_creneaux():
    premier = [p["creneau"] for p in plan() if p["jour"] == 1]
    assert sorted(premier) == sorted(CRENEAUX)


def test_l_angle_change_de_creneau_chaque_jour():
    """Sans rotation, l'angle et l'heure sont confondus et l'analyse
    ne peut pas les séparer."""
    creneaux_erreur = [p["creneau"] for p in plan() if p["angle"] == "erreur"]
    assert len(set(creneaux_erreur)) == 3


def test_sur_un_cycle_complet_chaque_angle_voit_chaque_creneau():
    couples = {(p["angle"], p["creneau"]) for p in plan()}
    assert len(couples) == 9


def test_la_publication_commence_au_jour_de_depart():
    premier = min(plan(), key=lambda p: p["quand"])
    assert premier["quand"].date() == date(2026, 8, 27)


def test_les_heures_correspondent_aux_creneaux_demandes():
    horaires = {p["quand"].strftime("%H:%M") for p in plan()}
    assert horaires == set(CRENEAUX)


def test_autant_de_creneaux_que_d_angles_sinon_on_refuse():
    """Deux créneaux pour trois angles laisserait une vidéo sans heure."""
    with pytest.raises(ValueError, match="créneaux"):
        calendrier(modules(), date(2026, 8, 27), creneaux=("12:30", "18:00"))


def test_le_calendrier_est_trie_chronologiquement():
    instants = [p["quand"] for p in plan()]
    assert instants == sorted(instants)


# ── parametres ──

def ligne():
    return {
        "module": "6e-fractions",
        "angle": "erreur",
        "jour": 1,
        "creneau": "18:00",
        "quand": datetime(2026, 8, 27, 18, 0),
    }


def meta():
    return {
        "legende": "Pourquoi la variance utilise des carrés et pas des valeurs absolues",
        "hashtags": ["variance", "maths", "lycee"],
        "url": "https://sparklearning.fr/module/2nde-statistiques/cours",
        "titre_module": "Statistiques descriptives",
    }


def test_la_date_programmee_part_en_utc_explicite():
    """L'API attend de l'ISO-8601. 18 h à Paris en août, c'est 16 h UTC."""
    p = parametres(ligne(), meta(), "SparkLearning")
    assert p["scheduled_date"] == "2026-08-27T16:00:00Z"


def test_la_plateforme_visee_est_tiktok():
    assert parametres(ligne(), meta(), "u")["platform[]"] == "tiktok"


def test_la_publication_est_directe_et_publique():
    p = parametres(ligne(), meta(), "u")
    assert p["post_mode"] == "DIRECT_POST"
    assert p["privacy_level"] == "PUBLIC_TO_EVERYONE"


def test_le_profil_est_transmis():
    assert parametres(ligne(), meta(), "SparkLearning")["user"] == "SparkLearning"


def test_le_contenu_est_declare_genere_par_ia_par_defaut():
    """TikTok sanctionne le contenu IA non déclaré."""
    assert parametres(ligne(), meta(), "u")["is_aigc"] == "true"


def test_la_declaration_ia_reste_desactivable():
    assert parametres(ligne(), meta(), "u", aigc=False)["is_aigc"] == "false"


def test_la_legende_trop_longue_est_coupee_a_la_limite_tiktok():
    long = meta()
    long["legende"] = "x" * 3000
    assert len(parametres(ligne(), long, "u")["title"]) == 2200


# ── YouTube Shorts ──

def yt():
    return parametres(ligne(), meta(), "u", plateformes=("tiktok", "youtube"))


def test_les_deux_plateformes_partent_dans_le_meme_appel():
    assert yt()["platform[]"] == ["tiktok", "youtube"]


def test_le_titre_youtube_respecte_la_limite_de_cent_caracteres():
    trop = meta()
    trop["legende"] = "x" * 200
    p = parametres(ligne(), trop, "u", plateformes=("youtube",))
    assert len(p["youtube_title"]) == 100


def test_la_description_youtube_porte_le_lien_cliquable_du_module():
    """Sur YouTube le lien est cliquable, contrairement à TikTok :
    c'est le seul endroit de la chaîne où le CTA amène vraiment du trafic."""
    assert "https://sparklearning.fr/module/2nde-statistiques/cours" in yt()["youtube_description"]


def test_la_video_youtube_est_publique_et_en_categorie_education():
    p = yt()
    assert p["privacyStatus"] == "public"
    assert p["categoryId"] == "27"


def test_le_media_synthetique_est_declare_aussi_cote_youtube():
    assert yt()["containsSyntheticMedia"] == "true"


def test_le_contenu_n_est_pas_declare_destine_aux_enfants():
    """« Made for kids » couperait commentaires et notifications et
    réduirait fortement la portée. Le contenu vise des collégiens et
    lycéens, pas des moins de 13 ans."""
    assert yt()["selfDeclaredMadeForKids"] == "false"


def test_la_langue_est_annoncee_en_francais():
    p = yt()
    assert p["defaultLanguage"] == "fr"
    assert p["defaultAudioLanguage"] == "fr"


def test_sans_youtube_aucun_parametre_youtube_ne_traine():
    p = parametres(ligne(), meta(), "u", plateformes=("tiktok",))
    assert not [c for c in p if c.startswith("youtube") or c == "privacyStatus"]


# ── Repli silencieux en brouillon ──

def test_le_repli_en_brouillon_est_autorise_par_defaut():
    """Comportement d'Upload-Post : plafond atteint → brouillon plutôt
    qu'échec. Mieux vaut une vidéo en brouillon que rien."""
    assert "disable_inbox_fallback" not in parametres(ligne(), meta(), "u")


def test_on_peut_exiger_un_echec_plutot_qu_un_brouillon_muet():
    """Un repli silencieux est indétectable : la vidéo semble partie,
    elle dort en brouillon. Pouvoir forcer l'erreur permet de savoir."""
    p = parametres(ligne(), meta(), "u", repli_brouillon=False)
    assert p["disable_inbox_fallback"] == "true"


def test_le_reglage_ne_concerne_que_tiktok():
    p = parametres(ligne(), meta(), "u", plateformes=("youtube",), repli_brouillon=False)
    assert "disable_inbox_fallback" not in p
