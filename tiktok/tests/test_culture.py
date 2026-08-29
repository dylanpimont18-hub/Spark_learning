# -*- coding: utf-8 -*-
"""Contrat de pipeline/culture.py — la ligne « maths × vie réelle ».

Différence de fond avec la ligne des modules : là-bas le contenu source
est déjà relu, ici TOUT est inventé. Le fait comme le calcul sortent du
modèle, donc rien ne fait autorité et les deux doivent être contrôlés.

Le risque propre à cette ligne est la donnée périssable : un prix, un
nombre d'abonnés, un classement. Exact au moment de l'écriture, faux
trois mois plus tard, et la vidéo reste en ligne.
"""

import json
from types import SimpleNamespace

import pytest

from pipeline.scripts import assembler
from pipeline.culture import (
    SYSTEME_CALCULS,
    SYSTEME_FAITS,
    SYSTEME_REDACTION,
    ecrire,
    produire,
    rattacher_module,
    verifier_calculs,
    verifier_faits,
)

SEUIL = 9.0


class FauxClient:
    """Client minimal qui débite des réponses préparées.

    Retient la consigne système et la température de chaque appel : ce
    sont eux qui distinguent une rédaction d'une vérification.
    """

    def __init__(self, *reponses):
        self.reponses = list(reponses)
        self.appels = []
        self.chat = self
        self.completions = self

    def create(self, messages=None, temperature=None, **_):
        self.appels.append({"messages": messages, "temperature": temperature})
        contenu = self.reponses.pop(0) if self.reponses else "{}"
        return SimpleNamespace(
            choices=[SimpleNamespace(message=SimpleNamespace(content=contenu))])

    def redactions(self):
        """Les seuls appels d'écriture, vérifications écartées.

        Reconnues à « hook », qui n'apparaît que dans la consigne de
        rédaction — la consigne système, elle, porte le nom du
        narrateur et n'est donc pas comparable à sa forme brute.
        """
        return [a for a in self.appels if "hook" in a["messages"][0]["content"]]


def script_valide():
    return {
        "hook": "Tu ouvres dix paquets et la carte rare n'est toujours pas là.",
        "body": "Imaginons que chaque paquet ait une chance sur dix de la contenir. "
                "Beaucoup pensent qu'en dix paquets on l'a forcément. C'est le piège "
                "classique : chaque tirage est indépendant du précédent, donc les "
                "chances ne s'additionnent pas du tout, elles se combinent entre elles.",
        "cta": "Les probabilités expliquées pas à pas, c'est sur Spark Learning, en accès libre.",
        "titre": "Pourquoi dix paquets ne garantissent rien",
        "hashtags": ["maths", "probabilites", "cartes", "lycee"],
    }


def script_parle(**remplacements):
    """Le script tel que les vérificateurs le reçoivent : assemblé, donc
    porteur du full_text qui sera réellement dit par la voix."""
    return assembler(dict(script_valide(), **remplacements))


def redaction(**remplacements):
    return json.dumps(dict(script_valide(), **remplacements), ensure_ascii=False)


def choix(sujet="les cartes à collectionner", notion="probabilités"):
    return ('{{"sujet": "{}", "notion": "{}", "pourquoi": "ils en achètent"}}'
            .format(sujet, notion))


RIEN_A_SIGNALER = '{"erreurs": []}'
FAIT_PERISSABLE = ('{"erreurs": [{"extrait": "un paquet coûte quatre euros", '
                   '"probleme": "un prix est une donnée périssable"}]}')


def catalogue_minimal():
    """Extrait du catalogue réel, forme des URL comprise : c'est elle
    qui permet de déduire la page d'exercices de la page de cours."""
    return [
        {"id": "2nde-probabilites", "titre": "Probabilités",
         "url": "/module/2nde-probabilites/cours"},
        {"id": "5e-probabilites", "titre": "Premières probabilités",
         "url": "/module/5e-probabilites/cours"},
        {"id": "6e-fractions", "titre": "Fractions", "url": "/module/6e-fractions/cours"},
        {"id": "4e-pythagore", "titre": "Théorème de Pythagore",
         "url": "/module/4e-pythagore/cours"},
    ]


# ── La consigne de rédaction ──

def test_la_consigne_interdit_les_donnees_perissables():
    """C'est LE garde-fou de cette ligne : un second appel au même
    modèle attrape l'invraisemblable, jamais le plausible-mais-périmé."""
    assert "périssable" in SYSTEME_REDACTION.lower()


def test_la_consigne_cite_ce_qui_perime_pour_ne_pas_rester_abstraite():
    for perissable in ("prix", "abonnés", "classement"):
        assert perissable in SYSTEME_REDACTION.lower(), perissable


def test_la_consigne_autorise_explicitement_les_faits_structurels():
    """Sans contre-exemple, le modèle s'interdit aussi « un match dure
    90 minutes » et n'a plus rien de concret à raconter."""
    assert "90 minutes" in SYSTEME_REDACTION


def test_la_consigne_impose_de_nommer_la_marque_dans_le_cta():
    assert "Spark Learning" in SYSTEME_REDACTION


def test_la_consigne_reprend_les_contraintes_de_prononcabilite():
    """Le texte est lu par une voix de synthèse : un symbole ou du
    LaTeX qui passe rend la vidéo inutilisable."""
    minuscules = SYSTEME_REDACTION.lower()
    assert "latex" in minuscules
    assert "virgule" in minuscules


def test_le_narrateur_est_un_loup_distinct_du_renard_de_l_autre_ligne():
    """Sparky garde la ligne des modules. Lumen est son pendant mûr,
    pas son clone : la consigne doit poser le contraste elle-même."""
    minuscules = SYSTEME_REDACTION.lower()
    assert "loup" in minuscules
    assert "renard" in minuscules


def test_le_narrateur_par_defaut_est_lumen():
    ia = FauxClient(redaction())
    ecrire(ia, "modele", "les cartes", "probabilités")
    assert "Lumen" in ia.appels[0]["messages"][0]["content"]


def test_le_ton_reste_socratique_et_jamais_punitif():
    assert "punitif" in SYSTEME_REDACTION.lower()


def test_le_correcteur_de_calculs_ne_renvoie_a_aucune_source_de_reference():
    """Contrairement à verification.SYSTEME, aucun module ne fait
    autorité ici : tout est inventé, donc tout est à recalculer. Lui
    parler d'un module lui donnerait une référence qui n'existe pas."""
    from pipeline.verification import SYSTEME as SYSTEME_DES_MODULES

    assert SYSTEME_CALCULS != SYSTEME_DES_MODULES
    assert "module" not in SYSTEME_CALCULS.lower()
    assert "JSON" in SYSTEME_CALCULS


def test_le_controleur_de_faits_ne_juge_ni_le_style_ni_la_pedagogie():
    minuscules = SYSTEME_FAITS.lower()
    assert "style" in minuscules
    assert "périssable" in minuscules


# ── Rédaction ──

def test_ecrire_rend_un_texte_parle_assemble_a_partir_des_trois_sections():
    ia = FauxClient(redaction())
    script = ecrire(ia, "modele", "les cartes", "probabilités")
    assert script["full_text"].startswith("Tu ouvres dix paquets")
    assert script["full_text"].endswith("en accès libre.")


def test_ecrire_porte_le_sujet_et_la_notion_dans_la_consigne():
    ia = FauxClient(redaction())
    ecrire(ia, "modele", "les cartes à collectionner", "probabilités")
    consigne = ia.appels[0]["messages"][-1]["content"]
    assert "les cartes à collectionner" in consigne
    assert "probabilités" in consigne


def test_un_script_dont_le_cta_oublie_la_marque_est_refuse():
    """Un CTA qui ne nomme pas le site ne ramène personne : c'est sa
    seule raison d'exister."""
    ia = FauxClient(redaction(cta="Va voir le cours complet, tu comprendras tout de suite."))
    with pytest.raises(ValueError, match="cta"):
        ecrire(ia, "modele", "les cartes", "probabilités")


def test_un_script_imprononcable_est_refuse():
    ia = FauxClient(redaction(body="La probabilité vaut $\\dfrac{1}{10}$ à chaque tirage, "
                                   "et cela ne change jamais quel que soit le nombre de "
                                   "paquets déjà ouverts avant celui que tu ouvres là."))
    with pytest.raises(ValueError):
        ecrire(ia, "modele", "les cartes", "probabilités")


def test_une_reponse_illisible_est_refusee_en_le_disant():
    ia = FauxClient("je préfère ne pas répondre")
    with pytest.raises(ValueError, match="JSON"):
        ecrire(ia, "modele", "les cartes", "probabilités")


def test_les_reproches_recus_repartent_dans_la_consigne():
    ia = FauxClient(redaction())
    ecrire(ia, "modele", "les cartes", "probabilités",
           reproches=["un prix est une donnée périssable"])
    assert "donnée périssable" in ia.appels[0]["messages"][-1]["content"]


# ── Vérificateurs ──

def test_un_script_juge_correct_ne_remonte_aucun_probleme():
    assert verifier_faits(script_parle(), FauxClient(RIEN_A_SIGNALER), "modele") == []
    assert verifier_calculs(script_parle(), FauxClient(RIEN_A_SIGNALER), "modele") == []


def test_une_affirmation_perissable_est_remontee_avec_son_extrait():
    problemes = verifier_faits(script_parle(), FauxClient(FAIT_PERISSABLE), "modele")
    assert len(problemes) == 1
    assert "quatre euros" in problemes[0]
    assert "périssable" in problemes[0]


def test_une_reponse_illisible_du_verificateur_remonte_un_probleme():
    """Un vérificateur muet ne doit JAMAIS valoir « rien à signaler » :
    mieux vaut regénérer que publier non vérifié."""
    problemes = verifier_faits(script_parle(), FauxClient("je ne sais pas"), "modele")
    assert len(problemes) == 1
    assert "vérification impossible" in problemes[0]


def test_une_reponse_vide_du_verificateur_remonte_un_probleme():
    assert verifier_calculs(script_parle(), FauxClient(""), "modele") != []


def test_une_reponse_sans_champ_erreurs_remonte_un_probleme():
    problemes = verifier_calculs(script_parle(), FauxClient('{"resultat": "ok"}'), "modele")
    assert problemes != []


def test_la_verification_ne_varie_pas_d_un_appel_a_l_autre():
    ia = FauxClient(RIEN_A_SIGNALER)
    verifier_faits(script_parle(), ia, "modele")
    assert ia.appels[0]["temperature"] == 0


def test_le_verificateur_recoit_le_texte_a_controler():
    ia = FauxClient(RIEN_A_SIGNALER)
    verifier_calculs(script_parle(), ia, "modele")
    assert "dix paquets" in ia.appels[0]["messages"][-1]["content"]


# ── Rattachement du module ──

def test_le_meilleur_module_au_dessus_du_seuil_est_rattache():
    module = rattacher_module(catalogue_minimal(), "les cartes à collectionner",
                              "probabilités", SEUIL)
    assert module["id"] == "2nde-probabilites"


def test_une_notion_absente_du_catalogue_ne_rattache_rien():
    """Aucun module n'est un cas normal, pas une erreur : la vidéo sort
    quand même, sa description tombe sur la page d'accueil."""
    assert rattacher_module(catalogue_minimal(), "un morceau de rap",
                            "solfège", SEUIL) is None


def test_un_seuil_trop_haut_ne_rattache_rien():
    assert rattacher_module(catalogue_minimal(), "les cartes", "probabilités", 500) is None


def test_c_est_la_notion_qui_fait_le_pont_vers_le_module():
    """catalogue._score exige que plus de la moitié des mots de la
    requête tombent dans le titre du module. Un sujet de quatre mots
    ne peut donc jamais rien rattacher : c'est la notion qui compte."""
    assert rattacher_module(catalogue_minimal(), "la portée d'un tir en diagonale",
                            "théorème de Pythagore", SEUIL)["id"] == "4e-pythagore"


def test_un_catalogue_vide_ne_rattache_rien():
    assert rattacher_module([], "les cartes", "probabilités", SEUIL) is None


# ── Orchestration ──

def test_un_script_propre_sort_du_premier_coup():
    memoire = {}
    ia = FauxClient(choix(), redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    resultat = produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)
    assert resultat["sujet"] == "les cartes à collectionner"
    assert resultat["notion"] == "probabilités"
    assert resultat["module"]["id"] == "2nde-probabilites"
    assert len(ia.redactions()) == 1


def test_un_sujet_produit_est_note_en_memoire_et_non_brule():
    memoire = {}
    ia = FauxClient(choix(), redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)
    assert memoire["les-cartes-a-collectionner"]["brule"] is False
    assert memoire["les-cartes-a-collectionner"]["module"] == "2nde-probabilites"


def test_les_reproches_sont_reinjectes_dans_la_seconde_redaction():
    """Renvoyer les reproches coûte un appel ; relancer à l'aveugle
    coûte le même appel avec moins de chances d'aboutir."""
    ia = FauxClient(choix(), redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER,
                    redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", {}, catalogue_minimal(), seuil=SEUIL)
    secondes = ia.redactions()[1]["messages"][-1]["content"]
    assert "périssable" in secondes


def test_les_deux_verificateurs_passent_avant_toute_reprise():
    """Corriger un reproche pour découvrir l'autre au tour suivant
    coûterait une tentative entière."""
    ia = FauxClient(choix(), redaction(), FAIT_PERISSABLE, FAIT_PERISSABLE,
                    redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", {}, catalogue_minimal(), seuil=SEUIL)
    secondes = ia.redactions()[1]["messages"][-1]["content"]
    assert secondes.count("périssable") >= 2


def test_deux_tentatives_infructueuses_abandonnent_le_sujet():
    memoire = {}
    ia = FauxClient(choix(), redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER,
                    redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER)
    assert produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(),
                    seuil=SEUIL) is None
    assert len(ia.redactions()) == 2


def test_un_sujet_abandonne_est_marque_brule():
    """Sans la marque, le sujet ressortirait au tour suivant et
    échouerait de la même façon, pour le même prix."""
    memoire = {}
    ia = FauxClient(choix(), redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER,
                    redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)
    assert memoire["les-cartes-a-collectionner"]["brule"] is True


def test_un_sujet_deja_en_memoire_part_dans_les_exclusions():
    memoire = {}
    from pipeline.sujets import noter
    noter(memoire, "les loot boxes", "probabilités", "jeu-video")
    ia = FauxClient(choix(), redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)
    assert "les loot boxes" in ia.appels[0]["messages"][-1]["content"]


def test_sans_verification_aucun_controle_n_est_paye():
    """Mode debug : on veut voir une vidéo sortir, pas payer deux
    appels de contrôle à chaque essai."""
    ia = FauxClient(choix(), redaction())
    resultat = produire(ia, "modele", "jeu-video", {}, catalogue_minimal(),
                        seuil=SEUIL, verifier=False)
    assert resultat is not None
    assert len(ia.appels) == 2


def test_une_famille_sans_sujet_neuf_remonte_une_erreur_de_recherche():
    """LookupError et non None : l'appelant doit pouvoir passer à la
    famille suivante, ce qui n'est pas la même chose qu'un abandon."""
    memoire = {}
    from pipeline.sujets import noter
    noter(memoire, "les cartes à collectionner", "probabilités", "jeu-video")
    ia = FauxClient(choix(), choix())
    with pytest.raises(LookupError):
        produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)


def test_un_sujet_impose_est_respecte():
    ia = FauxClient('{"notion": "probabilités", "pourquoi": "les tirages"}',
                    redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    resultat = produire(ia, "modele", "jeu-video", {}, catalogue_minimal(),
                        seuil=SEUIL, sujet="le loot d'un boss")
    assert resultat["sujet"] == "le loot d'un boss"


# ── Contrat avec le workflow n8n ──

def test_le_json_de_sortie_porte_les_trois_cles_attendues_par_n8n():
    """n8n lit « legende », « hashtags » et « url ». Les renommer
    casserait la publication sans qu'aucun test du dépôt ne bronche."""
    from culture import metadonnees

    fiche = metadonnees(resultat_type(), duree=24.1, persona={"voix": "fr-FR-RemyMultilingualNeural"},
                        url_base="https://sparklearning.fr")
    for cle in ("legende", "hashtags", "url"):
        assert cle in fiche, cle


def test_le_json_de_sortie_identifie_la_ligne_editoriale():
    from culture import metadonnees

    fiche = metadonnees(resultat_type(), duree=24.1, persona={"voix": "x"},
                        url_base="https://sparklearning.fr")
    assert fiche["sujet"] == "les cartes à collectionner"
    assert fiche["notion"] == "probabilités"
    assert fiche["famille"] == "jeu-video"


def test_l_url_pointe_le_module_rattache():
    from culture import metadonnees

    fiche = metadonnees(resultat_type(), duree=24.1, persona={"voix": "x"},
                        url_base="https://sparklearning.fr")
    assert fiche["url"] == "https://sparklearning.fr/module/2nde-probabilites/cours"


def test_sans_module_rattache_l_url_tombe_sur_l_accueil():
    """Jamais d'URL vide : la description YouTube doit mener quelque
    part, même quand aucun module ne correspond."""
    from culture import metadonnees

    fiche = metadonnees(resultat_type(module=None), duree=24.1, persona={"voix": "x"},
                        url_base="https://sparklearning.fr")
    assert fiche["url"] == "https://sparklearning.fr"


def resultat_type(module=True):
    return {
        "sujet": "les cartes à collectionner",
        "notion": "probabilités",
        "famille": "jeu-video",
        "pourquoi": "ils en achètent",
        "script": dict(script_valide(), full_text="Tu ouvres dix paquets."),
        "module": catalogue_minimal()[0] if module else None,
    }


# ── Ce que la ligne de commande décide seule ──

def test_avec_module_on_filme_son_cours_puis_ses_exercices():
    """Même traitement que la ligne existante : le fond montre la page
    vers laquelle le lien envoie."""
    from culture import _plan_de_capture

    plan = _plan_de_capture(resultat_type(), "https://sparklearning.fr", 20.0, "frames")
    assert plan[0] == "https://sparklearning.fr/module/2nde-probabilites/cours"
    assert plan[-1].endswith("/exercices")


def test_sans_module_on_filme_l_accueil_sans_bascule():
    """Basculer vers une seconde page n'aurait aucun sens si la
    première n'a déjà rien à voir avec le sujet."""
    from culture import _plan_de_capture

    plan = _plan_de_capture(resultat_type(module=None), "https://sparklearning.fr/",
                            20.0, "frames")
    assert plan == ("https://sparklearning.fr", 20.0, "frames")


def test_une_famille_epuisee_fait_passer_a_la_suivante():
    """Une famille sans sujet neuf ne doit pas coûter le tour : on
    change de famille, on ne rend pas la main."""
    from types import SimpleNamespace

    from culture import _ecrire_un_sujet

    memoire = {}
    from pipeline.sujets import noter
    noter(memoire, "les cartes à collectionner", "probabilités", "jeu-video")

    # Deux refus dans « jeu-video », puis un sujet neuf dans « sport ».
    ia = FauxClient(choix(), choix(),
                    choix("le tir à trois points"), redaction(),
                    RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    options = SimpleNamespace(modele="modele", sujet=None, sans_verification=False)

    resultat, famille = _ecrire_un_sujet(ia, options, memoire,
                                         catalogue_minimal(), "jeu-video")
    assert resultat["sujet"] == "le tir à trois points"
    assert famille == "sport"


def test_toutes_les_familles_epuisees_remontent_une_erreur_lisible():
    """Message destiné à l'utilisateur : __main__ l'affiche sans trace
    Python, il doit dire quoi faire."""
    from types import SimpleNamespace

    from culture import _ecrire_un_sujet

    memoire = {}
    from pipeline.sujets import noter
    noter(memoire, "les cartes à collectionner", "probabilités", "jeu-video")

    ia = FauxClient(*[choix() for _ in range(32)])
    options = SimpleNamespace(modele="modele", sujet=None, sans_verification=False)

    with pytest.raises(LookupError, match="purger"):
        _ecrire_un_sujet(ia, options, memoire, catalogue_minimal(), "jeu-video")


# ── Un seul lot à la fois ──

def test_un_second_lot_est_refuse_pendant_qu_un_premier_tourne(tmp_path):
    """Vécu le 2026-08-27 : deux lots lancés en parallèle ont écrasé
    mutuellement sujets.json et se sont disputé les fichiers temporaires
    de MoviePy, laissant deux dossiers avec un MP4 mais sans
    métadonnées — invisibles jusqu'à la publication."""
    from culture import verrou

    fichier = tmp_path / "lot.lock"
    with verrou(fichier):
        with pytest.raises(RuntimeError, match="déjà"):
            with verrou(fichier):
                pass


def test_le_verrou_est_libere_quand_le_lot_se_termine(tmp_path):
    from culture import verrou

    fichier = tmp_path / "lot.lock"
    with verrou(fichier):
        pass
    with verrou(fichier):
        pass


def test_le_verrou_est_libere_meme_si_le_lot_leve(tmp_path):
    """Un lot qui plante ne doit pas condamner tous les suivants."""
    from culture import verrou

    fichier = tmp_path / "lot.lock"
    try:
        with verrou(fichier):
            raise ValueError("rendu impossible")
    except ValueError:
        pass
    with verrou(fichier):
        pass


def test_le_verrou_nomme_le_processus_qui_le_detient(tmp_path):
    """Sans le PID, le message n'est pas actionnable : l'utilisateur n'a
    aucun moyen de retrouver le lot à arrêter. Le PID doit vivre HORS de
    l'octet verrouillé, que Windows rend illisible aux autres."""
    import os

    from culture import verrou

    fichier = tmp_path / "lot.lock"
    with verrou(fichier):
        with pytest.raises(RuntimeError, match=r"PID {}\b".format(os.getpid())):
            with verrou(fichier):
                pass


# ── Pourquoi un sujet a été abandonné ──

def test_un_sujet_brule_conserve_les_reproches_qui_l_ont_fait_tomber():
    """Sans eux, un lot de nuit rend un calendrier troué et aucune piste :
    on ne sait pas si la consigne est trop stricte ou le sujet mauvais."""
    memoire = {}
    ia = FauxClient(choix(), redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER,
                    redaction(), FAIT_PERISSABLE, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)

    reproches = memoire["les-cartes-a-collectionner"]["reproches"]
    assert reproches, "les reproches doivent être conservés"
    assert any("périssable" in r for r in reproches)


def test_un_sujet_produit_ne_traine_aucun_reproche():
    memoire = {}
    ia = FauxClient(choix(), redaction(), RIEN_A_SIGNALER, RIEN_A_SIGNALER)
    produire(ia, "modele", "jeu-video", memoire, catalogue_minimal(), seuil=SEUIL)
    assert memoire["les-cartes-a-collectionner"].get("reproches") == []
