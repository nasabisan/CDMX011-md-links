const fs = require('fs');

const fileReader = (path) => {
  const data = fs.readFileSync(path, 'utf-8');

  return data
}

module.exports = {
  fileReader
}