const fs = require('fs');
const path = require('path');

const getFiles = (route) => {
  let arrayFiles = [];

  const absolutePath = (path.isAbsolute(route) ? route : path.resolve(route));

  if (fs.lstatSync(absolutePath).isFile()) {
    if (path.extname(absolutePath) === '.markdown' || path.extname(absolutePath) === '.mdown' || path.extname(absolutePath) === '.mkdn' || path.extname(absolutePath) === '.md' || path.extname(absolutePath) === '.mkd' || path.extname(absolutePath) === '.mdwn' || path.extname(absolutePath) === '.mdtxt' || path.extname(absolutePath) === '.mdtext' || path.extname(absolutePath) === '.text' || path.extname(absolutePath) === '.Rmd') {
      arrayFiles.push(absolutePath);
    }
  } else {
    const data = fs.readdirSync(absolutePath);
    data.forEach((file) => {
      if (file === 'node_modules') {
        return;
      }
      arrayFiles = arrayFiles.concat(getFiles(path.join(absolutePath, file)));
    });
  }

  return arrayFiles;
};

module.exports.getFiles = getFiles;
