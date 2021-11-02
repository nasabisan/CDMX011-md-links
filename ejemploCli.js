const {linksExtractor} = require('./src/linksExtractor')
const {validator} = require('./src/validator.js')
const {fileReader} = require('./src/fileReader.js')
const {stadistics} = require('./src/stadistics.js')

async function getLinkInfo () {
  if(process.argv[2]==='--validate'){
    const file = fileReader(process.argv[3])
    const linksFile = linksExtractor(file, process.argv[3])
    // const linksConsulter = linksFile.map(async link => await consulter(link))
    const linksConsulter = await validator(linksFile)
    // const results = await Promise.all(linksConsulter)
    console.log(stadistics(linksConsulter, false))
    return linksConsulter
  }
}

getLinkInfo().then(results => results.forEach(result => console.log(result.href, result.text, result.file, result.status, result.ok)))