const request = require('request');

async function main() {
  return await new Promise((resolve, reject) => {
    request('https://api.promasters.net.br/cotacao/v1/valores', { json: true }, (err, res, body) => {
      resolve({ valor: body.valores['USD'].valor });
    });
  })
}