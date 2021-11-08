const { linksExtractor } = require('./linksExtractor');
const { validator } = require('./validator');
const { getFiles } = require('./getFiles');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  let arrayLinks = [];
  const filesPathArray = getFiles(path);

  if (!filesPathArray.length) {
    reject(new Error('There are not any markdown files in the provided directory and subdirectories'));
  }

  arrayLinks = linksExtractor(filesPathArray);

  if (!arrayLinks.length) {
    reject(new Error('Markdown files does not have any links'));
  }

  if (options && options.validate) {
    resolve(validator(arrayLinks));
  } else {
    resolve(arrayLinks);
  }
});

module.exports = {
  mdLinks,
};
