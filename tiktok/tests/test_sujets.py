# -*- coding: utf-8 -*-
"""Contrat de pipeline/sujets.py.

Le risque de cette ligne éditoriale n'est pas la qualité d'un sujet
isolé : c'est l'effondrement de la diversité au bout de deux semaines.
D'où deux garde-fous testés ici — la famille imposée par rotation, et
la liste d'exclusion qui empêche un sujet de revenir.
"""

from datetime import date
from types import SimpleNamespace

import pytest

from pipeline.sujets import (
    FAMILLES,
    choisir,
    charger,
    deja_sortis,
    famille_du_jour,
    famille_suivante,
    identifiant,
    noter,
    sauver,
)


class FauxClient:
    """Client minimal qui débite des réponses préparées.

    Garde la trace des messages envoyés : c'est le seul moyen de
    vérifier que la famille imposée et la liste d'exclusion partent
    réellement au modèle.
    """

    def __init__(self, *reponses):
        self.reponses = list(reponses)
        self.appels = []
        self.chat = self
        self.completions = self

    def create(self, messages=None, **_):
        self.appels.append({"messages": messages})
        contenu = self.reponses.pop(0) if self.reponses else "{}"
        return SimpleNamespace(
            choices=[SimpleNamespace(message=SimpleNamespace(content=contenu))])


def reponse(sujet, notion="probabilités", pourquoi="ça leur parle"):
    return ('{{"sujet": "{}", "notion": "{}", "pourquoi": "{}"}}'
            .format(sujet, notion, pourquoi))


def memoire_de(*entrees):
    """Mémoire construite à la main : (sujet, date) ou (sujet, date, brule)."""
    memoire = {}
    for entree in entrees:
        sujet, jour = entree[0], entree[1]
        brule = entree[2] if len(entree) > 2 else False
        noter(memoire, sujet, "une notion", "sport", brule=brule, horodatage=jour)
    return memoire


# ── Rotation des familles ──

def test_deux_appels_le_meme_jour_donnent_la_meme_famille():
    """Sans déterminisme, deux lancements du même jour se contrediraient."""
    assert famille_du_jour(date(2026, 8, 27)) == famille_du_jour(date(2026, 8, 27))


def test_huit_jours_consecutifs_donnent_huit_familles_distinctes():
    """C'est tout l'intérêt de la rotation : aucune famille deux fois
    tant que le tour n'est pas bouclé."""
    familles = {famille_du_jour(date.fromordinal(date(2026, 8, 27).toordinal() + n))
                for n in range(len(FAMILLES))}
    assert len(familles) == len(FAMILLES)


def test_la_rotation_reboucle_apres_un_tour_complet():
    depart = date(2026, 8, 27)
    plus_tard = date.fromordinal(depart.toordinal() + len(FAMILLES))
    assert famille_du_jour(depart) == famille_du_jour(plus_tard)


def test_la_famille_suivante_boucle_sur_la_premiere():
    """Un lot de trente vidéos doit continuer de tourner après la
    dernière famille, pas s'arrêter là."""
    assert famille_suivante(FAMILLES[-1]) == FAMILLES[0]


def test_une_famille_inconnue_est_refusee_en_le_disant():
    with pytest.raises(ValueError, match="jardinage"):
        famille_suivante("jardinage")


# ── Identifiant de sujet ──

def test_un_sujet_devient_un_identifiant_lisible_sans_accent():
    assert identifiant("Les loot boxes de Fortnite") == "les-loot-boxes-de-fortnite"


def test_deux_ecritures_du_meme_sujet_donnent_le_meme_identifiant():
    """« Le tempo d'un morceau » et « le tempo d’un morceau » sont le
    même sujet : sans cela, la liste d'exclusion laisserait passer un
    doublon à une apostrophe près."""
    assert identifiant("Le tempo d'un morceau") == identifiant("le tempo d’un morceau")


# ── Mémoire ──

def test_un_fichier_absent_donne_une_memoire_vide_sans_lever(tmp_path):
    assert charger(tmp_path / "jamais-ecrit.json") == {}


def test_sauver_puis_recharger_conserve_l_etat(tmp_path):
    fichier = tmp_path / "sujets.json"
    memoire = memoire_de(("les loot boxes", "2026-08-27T08:00:00"))
    sauver(memoire, fichier)
    assert charger(fichier) == memoire


def test_noter_conserve_le_sujet_la_notion_et_la_famille():
    memoire = {}
    noter(memoire, "les loot boxes", "probabilités", "jeu-video")
    entree = memoire["les-loot-boxes"]
    assert entree["sujet"] == "les loot boxes"
    assert entree["notion"] == "probabilités"
    assert entree["famille"] == "jeu-video"


def test_noter_ecrit_dans_la_memoire_recue():
    """L'abandon d'un sujet doit survivre à un produire() qui rend None :
    la marque ne peut pas voyager par la valeur de retour."""
    memoire = {}
    noter(memoire, "les loot boxes", "probabilités", "jeu-video", brule=True)
    assert memoire["les-loot-boxes"]["brule"] is True


# ── Liste d'exclusion ──

def test_une_memoire_vide_n_exclut_rien():
    assert deja_sortis({}) == []


def test_une_memoire_plus_courte_que_la_limite_est_rendue_entierement():
    memoire = memoire_de(("sujet a", "2026-08-25T08:00:00"),
                         ("sujet b", "2026-08-26T08:00:00"))
    assert set(deja_sortis(memoire, limite=60)) == {"sujet a", "sujet b"}


def test_les_sujets_sont_rendus_du_plus_recent_au_plus_ancien():
    memoire = memoire_de(("ancien", "2026-08-01T08:00:00"),
                         ("recent", "2026-08-27T08:00:00"))
    assert deja_sortis(memoire) == ["recent", "ancien"]


def test_une_memoire_plus_longue_que_la_limite_est_tronquee_aux_plus_recents():
    memoire = memoire_de(*[("sujet {}".format(n), "2026-08-{:02d}T08:00:00".format(n + 1))
                           for n in range(10)])
    exclus = deja_sortis(memoire, limite=3)
    assert exclus == ["sujet 9", "sujet 8", "sujet 7"]


def test_un_sujet_brule_reste_dans_les_exclusions():
    """Un sujet qui a résisté aux vérificateurs ne doit pas revenir :
    il échouerait de la même façon et coûterait les mêmes appels."""
    memoire = memoire_de(("sujet brûlé", "2026-08-27T08:00:00", True))
    assert deja_sortis(memoire) == ["sujet brûlé"]


# ── Choix du sujet ──

def test_choisir_rend_le_sujet_la_notion_et_la_justification():
    ia = FauxClient(reponse("les loot boxes de Fortnite", "probabilités", "ils en ouvrent"))
    choix = choisir(ia, "modele", "jeu-video", exclusions=[])
    assert choix["sujet"] == "les loot boxes de Fortnite"
    assert choix["notion"] == "probabilités"
    assert choix["pourquoi"] == "ils en ouvrent"


def test_la_famille_imposee_part_bien_au_modele():
    """C'est le pipeline qui impose la famille, pas le modèle : si elle
    ne part pas dans la consigne, la diversité n'est plus garantie."""
    ia = FauxClient(reponse("un sujet"))
    choisir(ia, "modele", "jeu-video", exclusions=[])
    assert "jeu-video" in ia.appels[0]["messages"][-1]["content"]


def test_les_exclusions_partent_bien_au_modele():
    ia = FauxClient(reponse("un sujet"))
    choisir(ia, "modele", "sport", exclusions=["le tir à trois points"])
    assert "le tir à trois points" in ia.appels[0]["messages"][-1]["content"]


def test_un_sujet_deja_sorti_est_rejete_et_l_appel_refait():
    ia = FauxClient(reponse("les loot boxes"), reponse("le craft d'une épée"))
    choix = choisir(ia, "modele", "jeu-video", exclusions=["les loot boxes"])
    assert choix["sujet"] == "le craft d'une épée"
    assert len(ia.appels) == 2


def test_un_sujet_deja_sorti_a_l_orthographe_pres_est_rejete_aussi():
    ia = FauxClient(reponse("Les Loot Boxes"), reponse("le craft d'une épée"))
    choix = choisir(ia, "modele", "jeu-video", exclusions=["les loot boxes"])
    assert choix["sujet"] == "le craft d'une épée"


def test_a_l_epuisement_des_tentatives_la_famille_est_abandonnee():
    """LookupError et non ValueError : l'appelant doit pouvoir passer à
    la famille suivante plutôt que de perdre le lot."""
    ia = FauxClient(reponse("les loot boxes"), reponse("les loot boxes"))
    with pytest.raises(LookupError):
        choisir(ia, "modele", "jeu-video", exclusions=["les loot boxes"], tentatives=2)


def test_une_reponse_illisible_ne_passe_pas_pour_un_sujet():
    ia = FauxClient("je ne peux pas répondre", reponse("le craft d'une épée"))
    choix = choisir(ia, "modele", "jeu-video", exclusions=[])
    assert choix["sujet"] == "le craft d'une épée"


def test_une_reponse_sans_notion_est_refusee():
    """Sans notion, il n'y a pas de maths dans la vidéo : c'est tout
    l'objet de cette ligne éditoriale."""
    ia = FauxClient('{"sujet": "les loot boxes", "pourquoi": "ça leur parle"}',
                reponse("le craft d'une épée"))
    choix = choisir(ia, "modele", "jeu-video", exclusions=[])
    assert choix["sujet"] == "le craft d'une épée"


def test_un_sujet_impose_court_circuite_le_choix_mais_pas_la_notion():
    """« --sujet » sert à tester une idée précise ; il faut quand même
    que le modèle dise quelle notion elle illustre."""
    ia = FauxClient('{"notion": "probabilités", "pourquoi": "les tirages"}')
    choix = choisir(ia, "modele", "jeu-video", exclusions=[],
                    sujet_impose="les cartes à collectionner")
    assert choix["sujet"] == "les cartes à collectionner"
    assert choix["notion"] == "probabilités"
