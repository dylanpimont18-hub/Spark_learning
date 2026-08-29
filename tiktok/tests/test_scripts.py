# -*- coding: utf-8 -*-
"""Contrat de pipeline/scripts.py.

Tout ce qui est teste ici est pur : construction du brief envoye au
modele, recomposition du texte parle, et garde-fous appliques a sa
reponse. L'appel reseau lui-meme n'est pas teste.
"""

import pytest

from pipeline.scripts import ANGLES, assembler, construire_brief, duree_estimee, valider


def script_valide():
    return {
        "hook": "Tu fais encore cette erreur sur les fractions ?",
        "body": "Un demi plus un tiers, ce n'est pas deux cinquièmes. On ne peut additionner que des parts de même taille, donc on passe tout en sixièmes : trois sixièmes plus deux sixièmes, ça fait cinq sixièmes.",
        "cta": "La méthode complète est sur Spark Learning, lien en bio.",
    }


# ── duree_estimee ──

def test_la_duree_est_estimee_a_partir_du_nombre_de_mots():
    assert 9.0 <= duree_estimee(" ".join(["mot"] * 27)) <= 11.0


def test_un_texte_vide_dure_zero_seconde():
    assert duree_estimee("") == 0.0


# ── assembler ──

def test_le_texte_parle_est_recompose_a_partir_des_trois_sections():
    """On ne fait pas confiance au full_text du modele : on le fabrique."""
    assemble = assembler(script_valide())
    assert assemble["full_text"].startswith("Tu fais encore cette erreur")
    assert assemble["full_text"].endswith("lien en bio.")


def test_le_full_text_renvoye_par_le_modele_est_ecrase():
    depart = script_valide()
    depart["full_text"] = "un texte qui ne correspond a rien"
    assert "ne correspond a rien" not in assembler(depart)["full_text"]


# ── valider ──

def test_un_script_conforme_ne_leve_aucune_alerte():
    assert valider(assembler(script_valide())) == []


def test_une_section_manquante_est_signalee_par_son_nom():
    incomplet = script_valide()
    del incomplet["hook"]
    alertes = valider(assembler(incomplet))
    assert any("hook" in a for a in alertes)


def test_une_section_vide_est_signalee():
    vide = script_valide()
    vide["cta"] = "   "
    assert any("cta" in a for a in valider(assembler(vide)))


def test_du_latex_residuel_dans_la_reponse_est_signale():
    fautif = script_valide()
    fautif["body"] = r"on ecrit $\dfrac{1}{2}$ ici"
    assert any("prononçable" in a for a in valider(assembler(fautif)))


def test_un_script_trop_long_pour_tiktok_est_signale():
    trop_long = script_valide()
    trop_long["body"] = " ".join(["mot"] * 200)
    assert any("trop long" in a for a in valider(assembler(trop_long)))


# ── construire_brief ──

def module_exemple():
    return {
        "id": "6e-fractions",
        "titre": "Fractions",
        "sousTitre": "Nommer, simplifier, comparer",
        "tranche": "college",
        "dossier": "6e",
        "url": "/module/6e-fractions/cours",
        "motsCles": ["Numérateur", "Dénominateur"],
        "cours": {
            "intro": "Une <strong>fraction</strong> $\\dfrac{a}{b}$ represente des parts.",
            "piege": "Beaucoup additionnent les <strong>denominateurs</strong> : $\\dfrac{1}{2}+\\dfrac{1}{3}$ ne fait pas $\\dfrac{2}{5}$.",
        },
        "quiz": [{"q": "Simplifier $\\dfrac{6}{9}$ ?", "options": ["a", "b"], "answer": 0, "correction": "on divise par 3"}],
    }


def test_le_brief_porte_le_titre_du_module():
    assert "Fractions" in construire_brief(module_exemple())


def test_le_brief_contient_le_piege_classique_qui_nourrit_l_angle_erreur():
    assert "denominateurs" in construire_brief(module_exemple())


def test_le_brief_est_deja_nettoye_de_son_balisage_et_de_son_latex():
    brief = construire_brief(module_exemple())
    assert "<strong>" not in brief
    assert "\\dfrac" not in brief


# ── ANGLES ──

def test_les_trois_angles_editoriaux_sont_definis():
    assert set(ANGLES) == {"erreur", "piege-quiz", "notion"}


# ── extraire_json : tolerance au bavardage du modele ──

def test_une_reponse_en_json_nu_est_lue():
    from pipeline.scripts import extraire_json
    assert extraire_json('{"hook": "ok"}') == {"hook": "ok"}


def test_le_json_emballe_dans_une_barriere_de_code_est_lu():
    from pipeline.scripts import extraire_json
    reponse = '```json\n{"hook": "ok"}\n```'
    assert extraire_json(reponse) == {"hook": "ok"}


def test_le_bavardage_autour_du_json_est_ignore():
    from pipeline.scripts import extraire_json
    reponse = 'Voici les scripts demandés :\n{"hook": "ok"}\nBonne publication !'
    assert extraire_json(reponse) == {"hook": "ok"}


def test_une_reponse_sans_json_leve_une_erreur_explicite():
    from pipeline.scripts import extraire_json
    with pytest.raises(ValueError, match="JSON"):
        extraire_json("je ne peux pas répondre à cette demande")


# ── duree plancher ──

def test_un_script_trop_court_pour_tenir_un_propos_est_signale():
    court = script_valide()
    court["body"] = "voilà"
    court["cta"] = "bye"
    assert any("trop court" in a for a in valider(assembler(court)))


# ── Le CTA doit nommer la marque ──

def test_un_cta_qui_ne_nomme_pas_le_site_est_signale():
    """Sans le nom, la video ne ramene personne : c'est le seul but du CTA."""
    muet = script_valide()
    muet["cta"] = "Revois les simplifications sur le module fractions en sixième."
    assert any("cta" in a and "site" in a for a in valider(assembler(muet)))


def test_le_nom_du_site_est_reconnu_avec_ou_sans_espace():
    for formulation in ("sur Spark Learning", "sur sparklearning point fr", "sur sparklearning.fr"):
        script = script_valide()
        script["cta"] = "Le cours complet est " + formulation + ", lien en bio."
        assert valider(assembler(script)) == [], formulation


# ── Robustesse : une réponse illisible doit être relancée ──

class FauxClient:
    """Client minimal qui débite des réponses préparées."""

    def __init__(self, reponses):
        self.reponses = list(reponses)
        self.appels = 0
        self.chat = self
        self.completions = self

    def create(self, **_):
        from types import SimpleNamespace
        self.appels += 1
        contenu = self.reponses.pop(0)
        return SimpleNamespace(
            choices=[SimpleNamespace(message=SimpleNamespace(content=contenu))])


def reponse_valide():
    import json as _json
    s = script_valide()
    return _json.dumps({"erreur": dict(s, titre="T", hashtags=["a"])}, ensure_ascii=False)


def test_une_reponse_sans_json_est_relancee_au_lieu_de_tout_arreter():
    """Un lot de nuit ne doit pas mourir sur une réponse bavarde."""
    from pipeline.scripts import generer
    client = FauxClient(["Je ne peux pas répondre à cette demande.", reponse_valide()])
    resultats = generer(module_exemple(), client, "m", angles=["erreur"],
                        verifier_calcul=False)
    assert "erreur" in resultats
    assert client.appels == 2


def test_l_echec_persistant_de_lecture_leve_une_erreur_explicite():
    from pipeline.scripts import generer
    client = FauxClient(["bavardage", "encore du bavardage"])
    with pytest.raises(ValueError, match="JSON"):
        generer(module_exemple(), client, "m", angles=["erreur"], verifier_calcul=False)
