const fs = require('fs');

const fileReader = (path) => fs.readFileSync(path, 'utf-8');

const readFile = (data, filePath) => {
  const regex = /\[([^\[]+)\](\((https?:\/\/[^()]+)\)$)/gm;
  const newData = [];

  const matches = data.match(regex);
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;

  if (!matches) return newData;

  for (let i = 0; i < matches.length; i += 1) {
    const match = singleMatch.exec(matches[i]);
    newData.push({ text: match[1], href: match[2], file: filePath });
  }

  return newData;
};

const linksExtractor = (files) => {
  let linksArray = [];

  files.forEach((filePath) => {
    const data = fileReader(filePath);
    const links = readFile(data, filePath);
    linksArray = [...linksArray, ...links];
  });

  return linksArray;
};

module.exports = {
  linksExtractor,
};
