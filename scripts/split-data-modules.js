const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const root = path.resolve(__dirname, '..');
const monolithics = ['5e.js','6e.js','lycee-1re.js','lycee-2nde.js','lycee-tle.js','si-1re.js','si-2nde.js','si-bts.js','si-tle.js'];
const summary = {};
for (const name of monolithics) {
  const filePath = path.join(root, 'js', 'data', name);
  if (!fs.existsSync(filePath)) {
    console.error('MISSING', filePath);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const ast = acorn.parse(content, { ecmaVersion: 'latest', sourceType: 'script' });
  const exprStmt = ast.body.find(node => {
    if (node.type !== 'ExpressionStatement') return false;
    const expr = node.expression;
    if (!expr || expr.type !== 'CallExpression') return false;
    const callee = expr.callee;
    if (!callee || callee.type !== 'MemberExpression') return false;
    if (!callee.object || callee.object.type !== 'MemberExpression') return false;
    if (callee.object.object.type !== 'Identifier' || callee.object.object.name !== 'window') return false;
    if (callee.object.property.type !== 'Identifier' || callee.object.property.name !== 'MODULES') return false;
    if (callee.property.type !== 'Identifier' || callee.property.name !== 'push') return false;
    return true;
  });
  const call = exprStmt ? exprStmt.expression : null;
  if (!call) {
    console.error('NO CALL found in', name);
    continue;
  }
  const args = call.arguments;
  const dir = path.join(root, 'js', 'data', name.replace('.js', ''));
  fs.mkdirSync(dir, { recursive: true });
  const moduleFiles = [];
  args.forEach((arg, idx) => {
    if (arg.type !== 'ObjectExpression') return;
    let id = null;
    for (const prop of arg.properties) {
      if (!prop || !prop.key) continue;
      const keyName = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value;
      if (keyName === 'id' && prop.value.type === 'Literal' && typeof prop.value.value === 'string') {
        id = prop.value.value;
      }
    }
    const fileName = id ? `${id}.js` : `module-${idx+1}.js`;
    const filePathOut = path.join(dir, fileName);
    const snippet = content.slice(arg.start, arg.end);
    const fileText = `/* =========================================================\n   Spark Learning – data/${name.replace('.js', '')}/${fileName}\n   Extrait de ${name} (découpage automatique)\n   ========================================================= */\n\nwindow.MODULES.push(${snippet});\n`;
    fs.writeFileSync(filePathOut, fileText, 'utf8');
    moduleFiles.push(fileName);
  });
  const indexPath = path.join(dir, 'index.js');
  const indexLines = [
    '/* =========================================================',
    `   Spark Learning – data/${name.replace('.js', '')}/index.js`,
    '   Point d’entrée agrégateur pour ce niveau',
    '   ========================================================= */',
    '// Ce fichier est intentionnellement vide.',
    '// Les modules de ce niveau sont chargés individuellement par js/loader.js.',
    ''
  ];
  fs.writeFileSync(indexPath, indexLines.join('\n'), 'utf8');
  summary[name] = moduleFiles;
}
console.log(JSON.stringify(summary, null, 2));
