var path = require('path');
var fs = require('fs');
var { execFile } = require('child_process');

function buildTectonicArgs(texFilePath) {
  return ['--outfmt', 'pdf', '--keep-logs', texFilePath];
}

function compileTex(options) {
  var texFilePath = path.join(options.workDir, options.texFilename);
  var args = buildTectonicArgs(texFilePath);

  return new Promise(function (resolve) {
    execFile(options.tectonicPath, args, { cwd: options.workDir, timeout: 5 * 60 * 1000 }, function (err, stdout, stderr) {
      if (err) {
        resolve({ success: false, pdfPath: null, errorLog: (stderr || '') + '\n' + (stdout || '') });
        return;
      }
      var pdfPath = texFilePath.replace(/\.tex$/, '.pdf');
      resolve({ success: fs.existsSync(pdfPath), pdfPath: fs.existsSync(pdfPath) ? pdfPath : null, errorLog: null });
    });
  });
}

module.exports = { buildTectonicArgs: buildTectonicArgs, compileTex: compileTex };
