const fs = require('fs');
const readline = require('readline');
const PDFParser = require('pdf-parse');

function readPdf(fileName) {
  const pathPdfile = './files/3004298116-01-2023.pdf'

  const dataBuffer = fs.readFileSync(pathPdfile)
  PDFParser(dataBuffer).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })
}

module.exports = readPdf;