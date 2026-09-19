#!/usr/bin/env node
'use strict';

/**
 * Prepare le televersement des pages d'apercu vers Shopify.
 *
 * Le theme reconnait une page d'apercu a son NOM DE FICHIER (`-extrait-NN`) :
 * c'est donc le nom, et non un reglage de section, qui fait entrer l'image
 * dans la liseuse et incremente le compteur « N pages ». Ce script se contente
 * de lister ce qu'il y a a envoyer, avec le texte alternatif de chaque page ;
 * l'envoi lui-meme passe par le MCP Shopify de la session, deja authentifie.
 *
 * Usage : node scripts/shopify-televerser-extraits.js
 */

const fs = require('fs');
const path = require('path');

const EXTRAITS = path.join(__dirname, '..', 'build', 'extraits');

// Le texte alternatif est lu par les lecteurs d'ecran et indexe : il dit de
// quel ouvrage vient la page, pas « image 3 ».
const LIBELLES = {
  'MATH-3E-PROF': 'Mathématiques Troisième, édition professeur',
  'MATH-COLLEGE-PROF': 'Mathématiques Collège, édition professeur',
  'MATH-2NDE-PROF': 'Mathématiques Seconde, édition professeur',
  'MATH-6E-PROF': 'Mathématiques Sixième, édition professeur',
  'MATH-PREP-PROF': 'Mathématiques Remise à niveau, édition professeur',
  'PHYS-4E-PROF': 'Physique-Chimie Quatrième, édition professeur',
  'MATH-LYCEE-PROF': 'Mathématiques Lycée, édition professeur',
};

const PRODUITS = {
  'MATH-3E-PROF': 'gid://shopify/Product/16085322301820',
  'MATH-COLLEGE-PROF': 'gid://shopify/Product/16085322400124',
  'MATH-2NDE-PROF': 'gid://shopify/Product/16088108728700',
  'MATH-6E-PROF': 'gid://shopify/Product/16085321941372',
  'MATH-PREP-PROF': 'gid://shopify/Product/16088109187452',
  'PHYS-4E-PROF': 'gid://shopify/Product/16088109384060',
  'MATH-LYCEE-PROF': 'gid://shopify/Product/16088109023612',
};

function main() {
  const fichiers = fs.readdirSync(EXTRAITS).filter(f => f.endsWith('.png')).sort();
  const parSku = new Map();

  for (const fichier of fichiers) {
    const m = fichier.match(/^(.+)-extrait-(\d+)\.png$/);
    if (!m) continue;
    const [, sku, rang] = m;
    if (!parSku.has(sku)) parSku.set(sku, []);
    parSku.get(sku).push({
      fichier,
      chemin: path.join(EXTRAITS, fichier),
      alt: `Page d'aperçu ${Number(rang)} — ${LIBELLES[sku] || sku}`,
      octets: fs.statSync(path.join(EXTRAITS, fichier)).size,
    });
  }

  const plan = [];
  for (const [sku, pages] of parSku) {
    plan.push({ sku, produit: PRODUITS[sku], pages });
    const poids = pages.reduce((s, p) => s + p.octets, 0);
    console.log(`${sku.padEnd(20)} ${String(pages.length).padStart(2)} pages  ${(poids / 1048576).toFixed(1)} Mo`);
  }

  const sortie = path.join(EXTRAITS, 'plan.json');
  fs.writeFileSync(sortie, JSON.stringify(plan, null, 2));
  console.log(`\nPlan ecrit : ${sortie}`);
}

if (require.main === module) main();
