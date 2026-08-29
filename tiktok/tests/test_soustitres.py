# -*- coding: utf-8 -*-
"""Contrat de pipeline/soustitres.py.

edge-tts renvoie un evenement WordBoundary par mot, avec un offset en
unites de 100 nanosecondes. On en tire des groupes de 2-3 mots cales
sur le rythme de la voix : c'est ce qui donne le sous-titrage mot a mot
sans jamais passer par une transcription.
"""

from pipeline.soustitres import depuis_edge_tts, grouper


def mot(texte, debut, fin):
    return {"texte": texte, "debut": debut, "fin": fin}


# ── depuis_edge_tts ──

def test_les_offsets_en_centaines_de_nanosecondes_deviennent_des_secondes():
    evenements = [{"type": "WordBoundary", "offset": 10_000_000, "duration": 5_000_000, "text": "bonjour"}]
    assert depuis_edge_tts(evenements) == [mot("bonjour", 1.0, 1.5)]


def test_les_evenements_qui_ne_sont_pas_des_mots_sont_ignores():
    evenements = [
        {"type": "SessionEnd", "offset": 0, "duration": 0, "text": ""},
        {"type": "WordBoundary", "offset": 0, "duration": 2_500_000, "text": "salut"},
    ]
    assert [m["texte"] for m in depuis_edge_tts(evenements)] == ["salut"]


# ── grouper ──

def test_trois_mots_courts_tiennent_dans_un_seul_groupe():
    mots = [mot("un", 0.0, 0.3), mot("deux", 0.3, 0.6), mot("trois", 0.6, 0.9)]
    groupes = grouper(mots, max_mots=3)
    assert len(groupes) == 1


def test_le_quatrieme_mot_ouvre_un_nouveau_groupe():
    mots = [mot(str(i), i * 0.3, i * 0.3 + 0.3) for i in range(4)]
    groupes = grouper(mots, max_mots=3)
    assert [len(g["mots"]) for g in groupes] == [3, 1]


def test_une_ponctuation_forte_ferme_le_groupe_meme_s_il_reste_de_la_place():
    mots = [mot("stop.", 0.0, 0.3), mot("ensuite", 0.3, 0.6)]
    groupes = grouper(mots, max_mots=3)
    assert [len(g["mots"]) for g in groupes] == [1, 1]


def test_un_silence_marque_coupe_le_groupe():
    """Un blanc dans la voix est une respiration : le sous-titre suit."""
    mots = [mot("avant", 0.0, 0.3), mot("apres", 1.5, 1.8)]
    groupes = grouper(mots, max_mots=3, silence_max=0.35)
    assert len(groupes) == 2


def test_les_bornes_du_groupe_encadrent_ses_mots():
    mots = [mot("un", 0.5, 0.8), mot("deux", 0.8, 1.2)]
    groupes = grouper(mots, max_mots=3)
    assert groupes[0]["debut"] == 0.5
    assert groupes[0]["fin"] == 1.2


def test_une_voix_sans_mot_ne_produit_aucun_groupe():
    assert grouper([]) == []


# ── bornes_sections : quelle pose de la mascotte a quel instant ──

def test_les_trois_sections_sont_datees_a_partir_des_mots():
    from pipeline.soustitres import bornes_sections
    script = {"hook": "un deux", "body": "trois quatre cinq", "cta": "six"}
    mots = [mot(t, i * 1.0, i * 1.0 + 0.8) for i, t in enumerate(
        ["un", "deux", "trois", "quatre", "cinq", "six"])]
    bornes = bornes_sections(script, mots)
    assert bornes["hook"] == (0.0, 1.8)
    assert bornes["body"] == (2.0, 4.8)
    assert bornes["cta"] == (5.0, 5.8)


def test_la_premiere_section_demarre_toujours_a_zero():
    """Le hook doit couvrir le debut de la video, meme si la voix
    met un instant a demarrer."""
    from pipeline.soustitres import bornes_sections
    script = {"hook": "salut", "body": "explication", "cta": "viens"}
    mots = [mot("salut", 0.4, 0.9), mot("explication", 1.0, 1.9), mot("viens", 2.0, 2.5)]
    assert bornes_sections(script, mots)["hook"][0] == 0.0


def test_une_section_vide_ne_casse_pas_le_decoupage():
    from pipeline.soustitres import bornes_sections
    script = {"hook": "salut", "body": "", "cta": "viens"}
    mots = [mot("salut", 0.0, 0.5), mot("viens", 0.6, 1.1)]
    bornes = bornes_sections(script, mots)
    assert bornes["body"][0] == bornes["body"][1]
