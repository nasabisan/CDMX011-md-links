const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); 
//No funciona a menos que sea asincrono

const validateUrl = (url) => {
  if (url.substr(url.length -1, url.length) ===')') {
    url = url.slice(0, -1);
  }
  fetch(url)
    .then(response => console.log(url,response.status))
    .catch(err => {
      console.log('Error: ',err.message);
    })
}

module.exports.validateUrl = validateUrl;