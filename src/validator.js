const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); 
//No funciona a menos que sea asincrono

const validator = (links) => {

  async function checkLink(link) {
    return fetch(link.href) //Modulo fetch para validar status
    .then((response) => {
      const validate = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';
      return {...link, status: response.status, ok: validate}
    })
    .catch((err) => {
      return {...link, status: 'Cannot be verified', ok: 'fail'}
    });
  }

  return new Promise((resolve, reject) => {
    resolve(Promise.all(links.map((link) => checkLink(link))))
    reject('Error')
  });
}

module.exports = {
  validator
};