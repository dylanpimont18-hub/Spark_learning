// Liaison Firebase du module « devoir » : appel des Cloud Functions (europe-west1) et bascule sur
// la Firebase Emulator Suite en local. Chargé après js/auth/firebase-config.js, avant tout appel
// à firebase.initializeApp (page du site : AuthService.init ; page étudiant : DevoirEleve).
//
// Émulateurs : uniquement quand la page est servie par l'émulateur Hosting, sur le port 5055
// de localhost (node scripts/devoir-emulateurs.js). Le projet devient alors « demo-spark-devoir » :
// rien ne peut atteindre la production. En ligne, ce fichier ne change rien à la configuration.
var DevoirFirebase = {
  REGION: 'europe-west1',
  PROJET_DEMO: 'demo-spark-devoir',
  SDK_FONCTIONS: 'https://www.gstatic.com/firebasejs/10.12.2/firebase-functions-compat.js',
  EMULATEUR: (location.hostname === '127.0.0.1' || location.hostname === 'localhost') && location.port === '5055',

  _app: null,          // application Firebase utilisée (par défaut : celle du site)
  _branche: false,
  _fonctions: null,
  _sdkPromise: null,

  // Avant firebase.initializeApp : en local, pointe la configuration sur le projet de démo.
  preparer: function () {
    if (DevoirFirebase.EMULATEUR && typeof FIREBASE_CONFIG !== 'undefined') FIREBASE_CONFIG.projectId = DevoirFirebase.PROJET_DEMO;
  },

  // Juste après firebase.initializeApp, avant le premier accès à Auth ou Firestore.
  // app : application nommée de la page étudiant (identité anonyme séparée de la session du
  // site) ; absent → application par défaut du site.
  brancher: function (app) {
    if (app) DevoirFirebase._app = app;
    if (!DevoirFirebase.EMULATEUR || DevoirFirebase._branche) return;
    DevoirFirebase._branche = true;
    DevoirFirebase.app().auth().useEmulator('http://127.0.0.1:9099', { disableWarnings: true });
    DevoirFirebase.app().firestore().useEmulator('127.0.0.1', 8080);
  },

  app: function () { return DevoirFirebase._app || firebase.app(); },

  // Le SDK Functions n'est chargé que pour qui s'en sert (enseignant, page étudiant) : les
  // visiteurs du site ne le téléchargent pas.
  _chargerSdk: function () {
    if (firebase.functions) return Promise.resolve();
    if (!DevoirFirebase._sdkPromise) {
      DevoirFirebase._sdkPromise = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = DevoirFirebase.SDK_FONCTIONS;
        s.onload = function () { resolve(); };
        s.onerror = function () { DevoirFirebase._sdkPromise = null; reject(new Error('Service indisponible (réseau ?)')); };
        document.head.appendChild(s);
      });
    }
    return DevoirFirebase._sdkPromise;
  },

  // Appelle une Cloud Function et renvoie son résultat. En cas de refus, l'erreur porte
  // err.code (« functions/not-found »…) et err.message (texte en français écrit par le serveur).
  appeler: function (nom, donnees) {
    return DevoirFirebase._chargerSdk().then(function () {
      if (!DevoirFirebase._fonctions) {
        DevoirFirebase._fonctions = DevoirFirebase.app().functions(DevoirFirebase.REGION);
        if (DevoirFirebase.EMULATEUR) DevoirFirebase._fonctions.useEmulator('127.0.0.1', 5001);
      }
      return DevoirFirebase._fonctions.httpsCallable(nom)(donnees || {});
    }).then(function (r) { return r.data; });
  }
};
