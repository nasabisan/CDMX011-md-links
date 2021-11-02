const linksExtractor = (file, path) => {

  const regex = /\[([^\[]+)\](\((https?:\/\/[^()]+)\)$)/gm
  let newData = [];
  
  const matches = file.match(regex)
  const singleMatch = /\[([^\[]+)\]\((.*)\)/

  for (let i = 0; i < matches.length; i++) {
    let text = singleMatch.exec(matches[i])
    newData.push({text:text[1], href: text[2], file: path})
  }

  return newData;
}

module.exports = {
  linksExtractor
}