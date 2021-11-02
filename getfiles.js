
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const browseDirectories = (route, subdir = '') => {
  let arrayFiles = [];
  data = fs.readdirSync(route + '/' + subdir, {withFileTypes: true});
  data.forEach(file => {
    if (file.name === 'node_modules') {
      return;
    }
    if (file.isDirectory()) {
      arrayFiles = arrayFiles.concat(browseDirectories(route, subdir + '/' + file.name));;
    } else if (path.extname(file.name) === '.markdown' || path.extname(file.name) === '.mdown' || path.extname(file.name) === '.mkdn' || path.extname(file.name) === '.md' || path.extname(file.name) === '.mkd' || path.extname(file.name) === '.mdwn' || path.extname(file.name) === '.mdtxt' || path.extname(file.name) === '.mdtext' || path.extname(file.name) === '.text' || path.extname(file.name) === '.Rmd') {
      arrayFiles.push(subdir + '/' + file.name);
    }
  })
  return arrayFiles;
};

module.exports.browseDirectories = browseDirectories;