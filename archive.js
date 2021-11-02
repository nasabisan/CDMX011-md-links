const fs = require('fs');
const mdLinks = require('./index');

let option = {validate:false};

const getRoute = (route) => {
  // 
  const regex = /\[(.+)\]\((.+)\)/g;

  let data = fs.readFileSync(route, 'utf-8') 
  let matchLinks = data.match(regex);
  console.log(typeof(regex))
    //Debo sacarle al objeto el value correspondiente al URL
  return matchLinks;
}

module.exports.getRoute = getRoute;