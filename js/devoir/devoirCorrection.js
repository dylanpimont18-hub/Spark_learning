// Relecture des copies d'une session (MVP-4), dans le sous-onglet « Sessions » de l'onglet Devoirs.
// L'enseignant lance la pré-correction par l'IA (jamais automatique), relit copie par copie :
// réponse de l'étudiant à gauche, correction modifiable à droite, proposition de l'IA conservée
// à côté de chaque note. La validation calcule la note finale. Rien n'est montré à l'étudiant.
// Lecture : DevoirStore (collections réservées à l'enseignant) ; écriture : Cloud Functions.
var DevoirCorrection = {
  _zone: null,
  _session: null,
  _copies: [],
  _fiches: [],            // devoir_corrections de la session
  _prives: {},            // copieId → partie privée (valeurs, corrigé, barème, note finale)
  _copieId: null,         // copie affichée en relecture ; null → liste
  _ecoutes: [],
  _avancement: '',        // texte d'avancement de la pré-correction en cours
  _enCours: false,
  _modifie: {},           // fiches dont un champ a été touché et pas encore enregistré

  LIBELLES_COPIE: { connecte: 'en cours', en_cours: 'en cours', rendue: 'rendue', rendue_auto: 'rendue (temps écoulé)', verrouillee: 'verrouillée' },
  LIBELLES_ALERTE: { reponse_vide: 'réponse vide', illisible: 'illisible', hors_sujet: 'hors sujet', incoherence: 'incohérence', autre: 'à vérifier' },
  LIBELLES_ATTRIBUTION: { invalidee: 'exercice invalidé', remplacement_annule: 'remplacement annulé' },

  _esc: function (s) { return DevoirAdmin._esc(s); },
  _toast: function (m, t) { DevoirAdmin._toast(m, t); },
  _fr: function (x) { return String(Math.round(x * 100) / 100).replace('.', ','); },

  // ── Entrée et sortie (appelées par DevoirSessions) ───────────────────────────
  ouvrir: function (zone, session) {
    var C = DevoirCorrection;
    C.quitter();
    C._zone = zone;
    C._session = session;
    C._copies = [];
    C._fiches = [];
    C._prives = {};
    C._copieId = null;
    C._modifie = {};
    var erreur = function (err) { console.error('[DevoirCorrection] écoute :', err); C._toast('Lecture interrompue : ' + (err.message || err.code), 'error'); };
    C._ecoutes.push(DevoirStore.ecouterCopies(session.id, function (copies) { C._copies = copies; C._rafraichir(); }, erreur));
    C._ecoutes.push(DevoirStore.ecouterCorrections(session.id, function (fiches) { C._fiches = fiches; C._rafraichir(); }, erreur));
    C._chargerPrives().then(C._rafraichir);
    C._afficher();
  },

  quitter: function () {
    DevoirCorrection._ecoutes.forEach(function (stop) { stop(); });
    DevoirCorrection._ecoutes = [];
  },

  _chargerPrives: async function () {
    var C = DevoirCorrection;
    try {
      var liste = await DevoirStore.listPrives(C._session.id);
      C._prives = {};
      liste.forEach(function (p) { C._prives[p.id] = p; });
    } catch (err) { console.error('[DevoirCorrection] partie privée :', err); }
  },

  // Les données arrivent en direct ; l'écran n'est pas reconstruit pendant que l'enseignant
  // modifie une fiche, pour ne pas effacer sa saisie.
  _rafraichir: function () {
    var C = DevoirCorrection;
    if (!C._zone || !document.body.contains(C._zone)) { C.quitter(); return; }
    if (C._copieId && Object.keys(C._modifie).length) return;
    C._afficher();
  },

  _afficher: function () {
    var C = DevoirCorrection;
    if (!C._zone) return;
    C._zone.innerHTML = C._copieId ? C._htmlCopie() : C._htmlListe();
    DevoirAdmin._katex();
  },

  // Écart relevé par le serveur sur une citation (passage introuvable, points sans citation),
  // par opposition à un écart de points (note recalculée).
  _ecartCitation: function (texte) { return /passage cité/.test(texte || ''); },

  // Réponse de l'étudiant avec, surlignés, les passages que l'IA cite à l'appui de sa notation.
  // Le texte est échappé morceau par morceau : rien de ce qu'a écrit l'étudiant n'est interprété.
  _surligner: function (texte, extraits) {
    var e = DevoirCorrection._esc;
    var plages = [];
    (extraits || []).forEach(function (x) {
      var cherche = String(x || '').trim();
      if (cherche.length < 4) return;
      var i = texte.toLowerCase().indexOf(cherche.toLowerCase());
      if (i !== -1) plages.push([i, i + cherche.length]);
    });
    plages.sort(function (a, b) { return a[0] - b[0]; });
    var html = '';
    var fin = 0;
    plages.forEach(function (p) {
      if (p[0] < fin) return;   // passages qui se chevauchent : le premier suffit
      html += e(texte.slice(fin, p[0])) + '<mark class="dc-cite">' + e(texte.slice(p[0], p[1])) + '</mark>';
      fin = p[1];
    });
    return html + e(texte.slice(fin));
  },

  // ── État d'une copie ───────────────────────────────────────────────────────
  _estRendue: function (c) { return c.statut === 'rendue' || c.statut === 'rendue_auto' || c.statut === 'verrouillee'; },
  _fichesDe: function (copieId) {
    return DevoirCorrection._fiches.filter(function (f) { return f.copie_id === copieId; });
  },
  _notables: function (c) {
    return (c.attributions || []).filter(function (a) { return a.statut === 'rendue' || (c.statut === 'verrouillee' && a.statut === 'active'); });
  },

  // { code, libelle, classe, prioritaire, signalements, note }
  _etat: function (c) {
    var C = DevoirCorrection;
    var fiches = C._fichesDe(c.id);
    var correction = (C._prives[c.id] || {}).correction || null;
    var signalements = [];
    var erreurs = fiches.filter(function (f) { return f.statut === 'erreur_ia'; }).length;
    if (erreurs) signalements.push(erreurs + ' erreur' + (erreurs > 1 ? 's' : '') + ' IA');
    fiches.forEach(function (f) {
      if (!f.ia) return;
      if (f.ia.confiance < 0.6) signalements.push('confiance basse');
      (f.ia.alertes || []).forEach(function (a) { signalements.push(C.LIBELLES_ALERTE[a] || a); });
      if (f.ia.incertains) signalements.push('IA pas sûre');
      if ((f.ia.ecarts || []).some(C._ecartCitation)) signalements.push('citation à vérifier');
      if ((f.ia.ecarts || []).some(function (x) { return !C._ecartCitation(x); })) signalements.push('note recalculée');
    });
    signalements = signalements.filter(function (s, i) { return signalements.indexOf(s) === i; });
    if (!C._estRendue(c)) return { code: 'en_cours', libelle: 'copie en cours', classe: 'info', prioritaire: false, signalements: [], note: null };
    if (correction && correction.statut === 'validee') return { code: 'validee', libelle: 'validée', classe: 'ok', prioritaire: false, signalements: signalements, note: correction.note_finale };
    var notables = C._notables(c);
    var couvertes = notables.filter(function (a) { return fiches.some(function (f) { return f.id === a.id; }); }).length;
    if (!notables.length || couvertes < notables.length) return { code: 'a_faire', libelle: 'à pré-corriger', classe: 'info', prioritaire: false, signalements: signalements, note: null };
    return {
      code: 'a_relire', libelle: erreurs ? 'erreur IA — à corriger à la main' : 'pré-corrigée, à relire', classe: erreurs ? 'ko' : 'avert',
      prioritaire: fiches.some(function (f) { return f.prioritaire && f.statut !== 'validee'; }), signalements: signalements, note: null
    };
  },

  // Ordre de relecture (§6) : copies à confiance basse ou avec alerte en premier, validées en dernier.
  _ordre: function () {
    var C = DevoirCorrection;
    var poids = function (c) {
      var e = C._etat(c);
      if (e.code === 'validee') return 3;
      if (e.code === 'en_cours') return 4;
      return e.prioritaire ? 0 : (e.code === 'a_relire' ? 1 : 2);
    };
    return C._copies.slice().sort(function (a, b) { return poids(a) - poids(b) || (a.nom || '').localeCompare(b.nom || '', 'fr'); });
  },

  // ── Liste des copies ───────────────────────────────────────────────────────
  _htmlListe: function () {
    var C = DevoirCorrection;
    var e = C._esc;
    var copies = C._ordre();
    var aFaire = copies.filter(function (c) { return C._etat(c).code === 'a_faire'; });
    var validees = copies.filter(function (c) { return C._etat(c).code === 'validee'; });
    var lignes = copies.map(function (c) {
      var etat = C._etat(c);
      return '<tr class="ds-ligne" data-copie="' + e(c.id) + '">' +
        '<td>' + e(c.nom) + '</td>' +
        '<td>' + e(C.LIBELLES_COPIE[c.statut] || c.statut) + (c.changements_utilises ? ' <span class="dv-carte-meta">· ' + c.changements_utilises + ' sortie(s) de page</span>' : '') + '</td>' +
        '<td><span class="dv-etat dv-etat--' + etat.classe + '">' + e(etat.libelle) + '</span></td>' +
        '<td>' + (etat.signalements.length ? etat.signalements.map(function (s) { return '<span class="dv-etat dv-etat--avert">' + e(s) + '</span>'; }).join(' ') : '—') + '</td>' +
        '<td class="dc-note">' + (etat.note === null ? '—' : e(C._fr(etat.note)) + ' / 20') + '</td>' +
        '<td class="dv-carte-actions">' + (etat.code === 'en_cours' ? '' : '<button class="ap-save-btn" onclick="DevoirCorrection._relire(\'' + e(c.id) + '\')">Relire</button>') + '</td>' +
      '</tr>';
    }).join('');
    return '<div class="ds-direct">' +
      '<div class="ds-entete"><div>' +
        '<button class="dv-btn-lien ds-retour" onclick="DevoirSessions._retourListe()">← Sessions</button>' +
        '<h3 class="dv-h3">Correction — ' + e(C._session.titre) + '</h3>' +
        '<p class="dv-aide">' + copies.length + ' copie(s) · ' + validees.length + ' validée(s). La pré-correction par l\'IA est une proposition : vous relisez, modifiez et validez chaque copie. Les étudiants ne voient ni note ni correction.</p>' +
      '</div></div>' +
      '<div class="dv-boutons">' +
        '<button class="ap-save-btn" id="dc-lancer" onclick="DevoirCorrection._lancer(false)"' + (aFaire.length && !C._enCours ? '' : ' disabled') + '>Lancer la pré-correction IA (' + aFaire.length + ' copie' + (aFaire.length > 1 ? 's' : '') + ')</button>' +
        '<button class="dv-btn-secondaire" id="dc-sans-ia" onclick="DevoirCorrection._lancer(true)"' + (aFaire.length && !C._enCours ? '' : ' disabled') + '>Corriger sans l\'IA</button>' +
        '<span class="dv-aide" id="dc-avancement" aria-live="polite">' + e(C._avancement) + '</span>' +
      '</div>' +
      (copies.length
        ? '<table class="dv-table ds-table"><thead><tr><th>Étudiant</th><th>Copie</th><th>Correction</th><th>À regarder</th><th>Note finale</th><th></th></tr></thead><tbody>' + lignes + '</tbody></table>'
        : '<p class="dv-vide">Aucune copie dans cette session.</p>') +
    '</div>';
  },

  // Lancement manuel, copie par copie (une Cloud Function par copie, un appel au modèle par
  // exercice rendu) : l'avancement reste visible et une panne n'arrête pas les copies suivantes.
  _lancer: async function (sansIa) {
    var C = DevoirCorrection;
    var cibles = C._ordre().filter(function (c) { return C._etat(c).code === 'a_faire'; });
    if (!cibles.length || C._enCours) return;
    var exercices = cibles.reduce(function (n, c) { return n + C._notables(c).length; }, 0);
    if (!sansIa && !confirm('Lancer la pré-correction par l\'IA pour ' + cibles.length + ' copie(s), soit au plus ' + exercices + ' appel(s) au modèle ?\n\nLes réponses sont envoyées à l\'API Anthropic sous un code interne, sans le nom des étudiants.')) return;
    C._enCours = true;
    var bilan = { corrigees: 0, erreurs: 0, echecs: 0 };
    for (var i = 0; i < cibles.length; i++) {
      C._avancement = (sansIa ? 'Préparation' : 'Pré-correction') + ' : copie ' + (i + 1) + ' / ' + cibles.length + ' (' + cibles[i].nom + ')…';
      C._majAvancement();
      try {
        var r = await DevoirFirebase.appeler('runPreCorrection', { copie_id: cibles[i].id, sans_ia: !!sansIa });
        bilan.corrigees += (r.corrigees || 0) + (r.preparees || 0);
        bilan.erreurs += r.erreurs || 0;
      } catch (err) {
        console.error('[DevoirCorrection] runPreCorrection :', err);
        bilan.echecs++;
        C._avancement = 'Copie de ' + cibles[i].nom + ' : ' + (err.message || 'échec') + '.';
        if (/resource-exhausted|failed-precondition|unauthenticated|permission-denied/.test(err.code || '')) break;   // inutile d'insister
      }
    }
    C._enCours = false;
    await C._chargerPrives();
    C._avancement = sansIa
      ? bilan.corrigees + ' fiche(s) prête(s) à remplir.'
      : bilan.corrigees + ' exercice(s) pré-corrigé(s)' + (bilan.erreurs ? ', ' + bilan.erreurs + ' en erreur IA (à corriger à la main)' : '') + (bilan.echecs ? ', ' + bilan.echecs + ' copie(s) en échec : ' + C._avancement : '') + '.';
    C._toast(C._avancement, bilan.erreurs || bilan.echecs ? 'error' : 'success');
    C._afficher();
  },

  _majAvancement: function () {
    var z = document.getElementById('dc-avancement');
    if (z) z.textContent = DevoirCorrection._avancement;
    ['dc-lancer', 'dc-sans-ia'].forEach(function (id) { var b = document.getElementById(id); if (b) b.disabled = true; });
  },

  // ── Relecture d'une copie ────────────────────────────────────────────────────
  _relire: async function (copieId) {
    var C = DevoirCorrection;
    if (Object.keys(C._modifie).length && !confirm('Des modifications ne sont pas enregistrées. Les abandonner ?')) return;
    C._modifie = {};
    C._copieId = copieId;
    if (copieId && !C._prives[copieId]) {
      try { var p = await DevoirStore.lirePrive(copieId); if (p) C._prives[copieId] = p; } catch (err) { console.error(err); }
    }
    C._afficher();
    window.scrollTo(0, 0);
  },

  _htmlCopie: function () {
    var C = DevoirCorrection;
    var e = C._esc;
    var copie = C._copies.find(function (c) { return c.id === C._copieId; });
    if (!copie) return '<p class="dv-vide">Copie introuvable.</p>';
    var prive = C._prives[copie.id] || {};
    var etat = C._etat(copie);
    var ordre = C._ordre().filter(function (c) { return C._etat(c).code !== 'en_cours'; });
    var rang = ordre.findIndex(function (c) { return c.id === copie.id; });
    var precedente = ordre[rang - 1];
    var suivante = ordre[rang + 1];
    var attributions = (copie.attributions || []).slice().sort(function (a, b) { return a.rang - b.rang || (a.statut === 'invalidee' ? -1 : 1); });
    var fiches = C._fichesDe(copie.id);
    var cartes = attributions.map(function (a) {
      return C._htmlExercice(copie, a, (prive.attributions || {})[a.id] || {}, fiches.find(function (f) { return f.id === a.id; }));
    }).join('');
    var pied;
    if (etat.code === 'validee') {
      pied = '<div class="dc-validee" id="dc-note-finale">Copie validée — note finale : <strong>' + e(C._fr(etat.note)) + ' / 20</strong>' +
        '<span class="dv-aide">Modifier une fiche annule la validation : il faudra valider de nouveau.</span></div>';
    } else if (etat.code === 'a_faire') {
      pied = '<p class="dv-vide">Cette copie n\'a pas encore de fiche de correction : revenez à la liste pour lancer la pré-correction (avec ou sans IA).</p>';
    } else {
      pied = '<div class="dv-boutons dv-boutons--fin"><button class="ap-save-btn" id="dc-valider" onclick="DevoirCorrection._valider()">Valider la copie</button>' +
        '<span class="dv-aide">Enregistre vos modifications, puis calcule la note finale sur 20 (arrondie au demi-point).</span></div>';
    }
    return '<div class="ds-direct dc-copie">' +
      '<div class="dc-nav">' +
        '<button class="dv-btn-lien ds-retour" onclick="DevoirCorrection._relire(null)">← Liste des copies</button>' +
        '<span class="dc-nav-fleches">' +
          '<button class="dv-btn-secondaire" id="dc-precedente"' + (precedente ? ' onclick="DevoirCorrection._relire(\'' + e(precedente.id) + '\')"' : ' disabled') + '>← Précédente</button>' +
          '<span class="dv-aide">' + (rang + 1) + ' / ' + ordre.length + '</span>' +
          '<button class="dv-btn-secondaire" id="dc-suivante"' + (suivante ? ' onclick="DevoirCorrection._relire(\'' + e(suivante.id) + '\')"' : ' disabled') + '>Suivante →</button>' +
        '</span>' +
      '</div>' +
      '<h3 class="dv-h3">' + e(copie.nom) + ' <span class="dv-etat dv-etat--' + etat.classe + '">' + e(etat.libelle) + '</span></h3>' +
      '<p class="dv-aide">Copie ' + e(C.LIBELLES_COPIE[copie.statut] || copie.statut) +
        (copie.changements_utilises ? ' · ' + copie.changements_utilises + ' sortie(s) de page comptée(s)' : '') +
        (copie.collages_bloques ? ' · ' + copie.collages_bloques + ' collage(s) bloqué(s)' : '') + '</p>' +
      cartes + pied +
    '</div>';
  },

  _htmlExercice: function (copie, a, pa, fiche) {
    var C = DevoirCorrection;
    var e = C._esc;
    var reponses = ((copie.reponses || {})[a.id] || {}).blocs || {};
    var corrige = pa.corrige || {};
    var marque = C.LIBELLES_ATTRIBUTION[a.statut];
    // Passages cités par l'IA : surlignés dans les blocs longs (rédaction).
    var extraits = fiche && fiche.ia ? (fiche.ia.criteres || []).map(function (c) { return c.extrait_reponse; }) : [];
    var elements = corrige.elements || [];
    var gauche =
      '<div class="dc-colonne">' +
        '<div class="dc-colonne-titre">Réponse de l\'étudiant</div>' +
        // Énoncé rédigé par l'enseignant (HTML et formules), comme dans la banque : non échappé.
        '<div class="dv-enonce">' + a.enonce + '</div>' +
        (a.blocs || []).map(function (b) {
          var texte = reponses[b.id] || '';
          return '<div class="dc-bloc' + (b.long ? ' dc-bloc--long' : '') + '"><div class="dc-bloc-label">' + e(b.label) + '</div>' +
            '<div class="dc-bloc-texte' + (texte.trim() ? '' : ' dc-bloc-texte--vide') + '">' +
              (texte.trim() ? (b.long ? C._surligner(texte, extraits) : e(texte)) : 'bloc laissé vide') + '</div></div>';
        }).join('') +
        (extraits.some(function (x) { return x; }) && (a.blocs || []).some(function (b) { return b.long; })
          ? '<p class="dv-aide dc-legende"><mark class="dc-cite">Surligné</mark> : passages que l\'IA cite pour justifier sa notation.</p>' : '') +
        '<details class="dv-details dc-corrige"' + (fiche && fiche.statut !== 'validee' ? ' open' : '') + '><summary>Corrigé de référence (variante de cet étudiant)</summary>' +
          (corrige.resultat ? '<div class="dv-resultat">Résultat attendu : <strong>' + e(corrige.resultat) + ' = ' + e(corrige.valeur_affichee) + (corrige.unite ? ' ' + e(corrige.unite) : '') + '</strong></div>' : '') +
          ((corrige.etapes || []).length ? '<ol class="dv-etapes">' + corrige.etapes.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' : '') +
          (elements.length ? '<div class="dc-sous-titre">Éléments de réponse attendus</div><ul class="dc-liste dc-elements">' + elements.map(function (el) {
            // Texte du corrigé (rédigé par l'enseignant, formules comprises) : non échappé, comme les étapes.
            return '<li><strong>' + e(el.label) + '</strong> <span class="dv-carte-meta">(' + e(C._fr(el.points)) + ' pts)</span> — ' + el.attendu + '</li>';
          }).join('') + '</ul>' : '') +
          (corrige.reponse_modele ? '<div class="dc-sous-titre">Réponse rédigée du corrigé</div><p class="dc-modele">' + corrige.reponse_modele + '</p>' : '') +
        '</details>' +
      '</div>';
    return '<article class="dc-exercice' + (marque ? ' dc-exercice--ecarte' : '') + '" data-att="' + e(a.id) + '">' +
      '<div class="dc-exercice-titre">Exercice ' + e(a.rang) + ' — ' + e(a.titre) +
        (marque ? ' <span class="dv-etat dv-etat--avert">' + e(marque) + (a.motif ? ' : ' + e(a.motif) : '') + '</span>' : '') + '</div>' +
      '<div class="dc-grille">' + gauche + '<div class="dc-colonne">' + C._htmlFiche(a, fiche, pa) + '</div></div>' +
    '</article>';
  },

  _htmlFiche: function (a, fiche, pa) {
    var C = DevoirCorrection;
    var e = C._esc;
    if (!fiche) return '<div class="dc-colonne-titre">Correction</div><p class="dv-vide">Pas encore de fiche pour cet exercice.</p>';
    var ia = fiche.ia;
    var entete = '';
    if (fiche.statut === 'erreur_ia') {
      entete = '<div class="dv-msg dv-msg--erreur"><strong>Erreur IA</strong> — ' + e(fiche.erreur_ia) + ' Cet exercice est à corriger à la main.</div>';
    } else if (fiche.statut === 'non_notee') {
      entete = '<div class="dv-msg dv-msg--avert">Exercice non noté par l\'IA (écarté pendant l\'épreuve). À vous de décider s\'il compte dans la note.</div>';
    } else if (ia) {
      var signaux = [];
      if (ia.confiance < 0.6) signaux.push('confiance basse');
      (ia.alertes || []).forEach(function (x) { signaux.push(C.LIBELLES_ALERTE[x] || x); });
      if (ia.incertains) signaux.push(ia.incertains + ' critère' + (ia.incertains > 1 ? 's' : '') + ' où l\'IA n\'est pas sûre');
      var titreEcarts = (ia.ecarts || []).every(C._ecartCitation) ? 'Citations à vérifier' : 'Note recalculée par le serveur';
      entete = '<div class="dc-ia-meta">Proposition de l\'IA : <strong>' + e(C._fr(ia.note_proposee)) + ' / ' + e(C._fr(ia.note_max)) + '</strong> · confiance ' + Math.round(ia.confiance * 100) + ' %' +
        (signaux.length ? ' · ' + signaux.map(function (s) { return '<span class="dv-etat dv-etat--avert">' + e(s) + '</span>'; }).join(' ') : '') +
        '<span class="dv-carte-meta"> · ' + e(ia.modele) + ', prompt ' + e(ia.version_prompt) + '</span></div>' +
        ((ia.ecarts || []).length ? '<div class="dv-msg dv-msg--avert"><strong>' + titreEcarts + '</strong><ul>' + ia.ecarts.map(function (x) { return '<li>' + e(x) + '</li>'; }).join('') + '</ul></div>' : '');
    } else {
      entete = '<div class="dc-ia-meta">Correction à la main (sans proposition de l\'IA).</div>';
    }
    // Texte attendu de chaque élément (question rédigée), pris dans la partie privée de la copie.
    var attendus = {};
    (((pa || {}).bareme) || []).forEach(function (b) { if (b.nature === 'element') attendus[b.id] = b.attendu; });
    var criteres = fiche.finale.criteres.map(function (c) {
      var p = ia ? ia.criteres.find(function (x) { return x.critere_id === c.critere_id; }) : null;
      var element = c.nature === 'element' || attendus[c.critere_id] !== undefined;
      return '<div class="dc-critere' + (element ? ' dc-critere--element' : '') + (p && p.incertain ? ' dc-critere--incertain' : '') + '" data-critere="' + e(c.critere_id) + '">' +
        '<label class="dc-critere-label" for="dc-' + e(fiche.id) + '-' + e(c.critere_id) + '">' + (element ? '<span class="dc-puce-element">Élément attendu</span> ' : '') + e(c.label) + '</label>' +
        '<span class="dc-critere-points"><input class="dv-input dc-points" id="dc-' + e(fiche.id) + '-' + e(c.critere_id) + '" type="number" min="0" max="' + e(c.points_max) + '" step="0.5" value="' + e(c.points_obtenus) + '" data-critere="' + e(c.critere_id) + '" oninput="DevoirCorrection._touche(\'' + e(fiche.id) + '\')" /> / ' + e(c.points_max) + '</span>' +
        // Texte du corrigé : non échappé (HTML et formules de l'enseignant), comme les étapes.
        (attendus[c.critere_id] ? '<span class="dc-critere-attendu">Attendu : ' + attendus[c.critere_id] + '</span>' : '') +
        (p ? '<span class="dc-critere-ia">IA : ' + e(C._fr(p.points_obtenus)) + ' (' + e(p.statut) + ')' +
          (p.incertain ? ' <span class="dv-etat dv-etat--avert dc-incertain">pas sûre</span>' : '') + ' — ' + e(p.justification) +
          (p.extrait_reponse ? '<span class="dc-citation">Passage cité : « ' + e(p.extrait_reponse) + ' »</span>'
            : (element ? '<span class="dc-citation dc-citation--vide">Aucun passage de la copie cité pour cet élément.</span>' : '')) +
          '</span>' : '') +
      '</div>';
    }).join('');
    var etapes = ia && (ia.etapes || []).length ? '<div class="dc-sous-titre">Étapes repérées par l\'IA</div><ul class="dc-liste">' + ia.etapes.map(function (x) {
      return '<li><span class="dv-etat dv-etat--' + (x.statut === 'validee' ? 'ok' : 'ko') + '">' + e(x.statut) + '</span> ' + e(x.libelle) + (x.commentaire ? ' — ' + e(x.commentaire) : '') + '</li>';
    }).join('') + '</ul>' : '';
    var erreurs = ia && (ia.erreurs || []).length ? '<div class="dc-sous-titre">Erreurs relevées par l\'IA</div><ul class="dc-liste">' + ia.erreurs.map(function (x) {
      return '<li><strong>' + e(x.etiquette) + '</strong> (' + e(x.gravite) + (x.propagee ? ', propagée' : '') + ') — ' + e(x.description) + (x.extrait_reponse ? ' <span class="dv-carte-meta">« ' + e(x.extrait_reponse) + ' »</span>' : '') + '</li>';
    }).join('') + '</ul>' : '';
    var axes = (fiche.finale.axes_progression || []).map(function (x) { return x.axe + ' : ' + x.action_concrete; }).join('\n');
    return '<div class="dc-colonne-titre">Correction' + ((fiche.modifications || []).length ? ' <span class="dv-etat dv-etat--info">modifiée par vous</span>' : '') +
        (fiche.statut === 'validee' ? ' <span class="dv-etat dv-etat--ok">validée</span>' : '') + '</div>' +
      entete + criteres +
      '<div class="dc-total">Note de l\'exercice : <strong id="dc-total-' + e(fiche.id) + '">' + e(C._fr(fiche.finale.note)) + '</strong> / ' + e(C._fr(fiche.finale.note_max)) + '</div>' +
      etapes + erreurs +
      '<label class="dv-label">Commentaire pour l\'étudiant<textarea class="dv-textarea dc-commentaire" rows="3" oninput="DevoirCorrection._touche(\'' + e(fiche.id) + '\')">' + e(fiche.finale.commentaire_pour_etudiant) + '</textarea></label>' +
      '<label class="dv-label">Axes de progression (un par ligne, « axe : action concrète »)<textarea class="dv-textarea dc-axes" rows="2" oninput="DevoirCorrection._touche(\'' + e(fiche.id) + '\')">' + e(axes) + '</textarea></label>' +
      (ia && ia.note_pour_enseignant ? '<p class="dv-aide"><strong>Note de l\'IA pour vous :</strong> ' + e(ia.note_pour_enseignant) + '</p>' : '') +
      '<label class="ap-toggle-row"><span>Compter cet exercice dans la note finale</span><input type="checkbox" class="dc-compte"' + (fiche.compte_dans_note ? ' checked' : '') + ' onchange="DevoirCorrection._touche(\'' + e(fiche.id) + '\')" /></label>' +
      '<div class="dv-boutons"><button class="dv-btn-secondaire dc-enregistrer" onclick="DevoirCorrection._enregistrer(\'' + e(fiche.id) + '\', true)">Enregistrer mes modifications</button>' +
        '<span class="dv-aide dc-etat-fiche" aria-live="polite"></span></div>';
  },

  // Un champ de la fiche a changé : total recalculé à l'écran, fiche marquée « à enregistrer ».
  _touche: function (ficheId) {
    var C = DevoirCorrection;
    C._modifie[ficheId] = true;
    var carte = C._zone.querySelector('.dc-exercice[data-att="' + ficheId + '"]');
    if (!carte) return;
    var total = 0;
    Array.prototype.forEach.call(carte.querySelectorAll('.dc-points'), function (i) { total += parseFloat(i.value) || 0; });
    var z = document.getElementById('dc-total-' + ficheId);
    if (z) z.textContent = C._fr(total);
    var etat = carte.querySelector('.dc-etat-fiche');
    if (etat) etat.textContent = 'Modifications non enregistrées.';
  },

  _lireFiche: function (ficheId) {
    var carte = DevoirCorrection._zone.querySelector('.dc-exercice[data-att="' + ficheId + '"]');
    if (!carte) return null;
    return {
      attribution_id: ficheId,
      criteres: Array.prototype.map.call(carte.querySelectorAll('.dc-points'), function (i) {
        return { critere_id: i.getAttribute('data-critere'), points_obtenus: parseFloat(String(i.value).replace(',', '.')) || 0 };
      }),
      commentaire_pour_etudiant: carte.querySelector('.dc-commentaire').value,
      axes_progression: carte.querySelector('.dc-axes').value.split(/\r?\n/).map(function (l) {
        var k = l.indexOf(':');
        return k === -1 ? { axe: l.trim(), action_concrete: '' } : { axe: l.slice(0, k).trim(), action_concrete: l.slice(k + 1).trim() };
      }).filter(function (x) { return x.axe || x.action_concrete; }),
      compte_dans_note: carte.querySelector('.dc-compte').checked
    };
  },

  // avecRetour : affiche le résultat et reconstruit l'écran (bouton de la fiche).
  _enregistrer: async function (ficheId, avecRetour) {
    var C = DevoirCorrection;
    var donnees = C._lireFiche(ficheId);
    if (!donnees) return false;
    try {
      await DevoirFirebase.appeler('saveCorrection', donnees);
    } catch (err) {
      console.error('[DevoirCorrection] saveCorrection :', err);
      C._toast(err.message || 'Enregistrement impossible.', 'error');
      return false;
    }
    delete C._modifie[ficheId];
    if (avecRetour) {
      await C._chargerPrives();
      C._toast('Modifications enregistrées. La proposition de l\'IA est conservée à côté.', 'success');
      if (!Object.keys(C._modifie).length) C._afficher();
    }
    return true;
  },

  _valider: async function () {
    var C = DevoirCorrection;
    var bouton = document.getElementById('dc-valider');
    if (bouton) bouton.disabled = true;
    var aEnregistrer = Object.keys(C._modifie);
    for (var i = 0; i < aEnregistrer.length; i++) {
      if (!(await C._enregistrer(aEnregistrer[i], false))) { if (bouton) bouton.disabled = false; return; }
    }
    try {
      var r = await DevoirFirebase.appeler('validateCorrection', { copie_id: C._copieId });
      await C._chargerPrives();
      C._toast('Copie validée : ' + C._fr(r.note_finale) + ' / ' + r.note_sur + '.', 'success');
    } catch (err) {
      console.error('[DevoirCorrection] validateCorrection :', err);
      C._toast(err.message || 'Validation impossible.', 'error');
    }
    C._afficher();
  }
};
