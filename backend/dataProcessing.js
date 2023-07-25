const fs = require('fs');
const readline = require('readline');
const PDFParser = require('pdf-parse');

function startDataProcessing(folderName) {
  console.log(folderName)
  const files = fs.readdirSync(`./${folderName}`)
  files.forEach((file) => {
    readPdf(`./${folderName}/${file}`)
  })
}

function readPdf(pathPdfile) {
  const dataBuffer = fs.readFileSync(pathPdfile)
  PDFParser(dataBuffer).then((data) => {
    const txtName = new Date().getTime()
    const scrapPath = `./scraps/${txtName}.txt`
    fs.writeFileSync(scrapPath, data.text)
    const scrapTxtSreadStream = fs.createReadStream(scrapPath)
    readline.createInterface({
      input: scrapTxtSreadStream,
      terminal: false
    }).on('line', (line) => {
      getContractNumber(line)
      getReferenceMonth(line)
      getInvoiceDueDate(line)
      getKwhOrInjectEnergy(line)
      getKwhOrInjectEnergy(line, false)
      publicEnergyContribuition(line)
      totalInvoicePrice(line)
    })
  }).catch((error) => {
    console.log(error)
  })
}

function getContractNumber(line) {
  // Match busca pelo número a partir dos espaços em branco até o próximo espaço em branco
  const contractNumberMatch = /^(\s{2}\d+)/gm
  const matches = line.match(contractNumberMatch)
  if (matches?.length) {
    const contractNumber = matches.at(0).trim()
    console.log('Nº do contrato:', contractNumber)
    return contractNumber
  }
}

function getReferenceMonth(line) {
  // Match busca pelos 4 espaços em branco no inicio, logo após pelo mês abreviado
  const referenceMonth = /^(\s{4}[A-Z]{3})/gm
  const matches = line.match(referenceMonth)
  if (matches?.length) {
    const month = matches.at(0).trim()
    console.log('Mês de referência:', month)

    return month
  }
}

function getInvoiceDueDate(line) {
  // Busca pelo inicio da linha que começa por 008 passando por caracteres ou não, até chegar
  // na data de vencimento, até os caracteres "R$" com lookahead positivo não incluindo
  const invoiceDueDateLinePattern = /^008.*?(\d{2}\/\d{2}\/\d{4})(?=R\$)/gm
  // Encontra a data
  const datePattern = /\d{2}\/\d{2}\/\d{4}(?=R\$)/
  const matches = line.match(invoiceDueDateLinePattern)
  if(matches?.length) {
    const dateMatch = line.match(datePattern)
    const invoiceDueDate = dateMatch.at(0)
    console.log('Data de vencimento:', invoiceDueDate)

    return invoiceDueDate
  }
}

function getKwhOrInjectEnergy(line, kwh = true) {
  // Após a frase energia eletrica, achar o numero do kwh até o final da linha
  const linePattern =  kwh ? /Energia ElétricakWh.*?(\d+).*$/gm : /Energia injetada HFPkWh.*?(\d+).*$/gm
  const matches = line.match(linePattern)
  if (matches?.length) {
    // Encontra os valores, buscando tanto por decimais quanto por numeros inteiros separados por
    // "," ou ".", até espaços em branco terminando no fim da linha
    const valuesPattern = /(?:\b|(?<=\s))-?\d{1,3}(?:\.\d{3})*(?:,\d+)?(?=\s|$)/g
    const valuesMatch = line.match(valuesPattern)
    const values = {
      quantity: valuesMatch.at(0),
      unitPrice: valuesMatch.at(1),
      price: valuesMatch.at(2)
    }
    console.log('Seus valores:', values)

    return values
  }
}

function publicEnergyContribuition(line) {
  // Busca a linha que começa com Contrib
  const contributionPattern = /Contrib.*?(\d+).*$/gm
  const matches = line.match(contributionPattern)
  if (matches?.length) {
    // Busca caaracteres alfanumericos de 1 a 3 digitos após . ou , globalmente até o fim da linha 
    const publicEnergyContribuitionPattern = /\b\d{1,3}(?:\.\d{3})*(?:,\d+)?\b/g
    const publicEnergyContribuitionMatch = line.match(publicEnergyContribuitionPattern)
    const contribuition = publicEnergyContribuitionMatch.at(0)

    console.log('Contribuição de ilum publica:', contribuition)

    return contribuition
  }
}

function totalInvoicePrice(line) {
  const totalInvoicePriceLinePattern = /TOTAL.*?(\d+).*$/gm
  const matches = line.match(totalInvoicePriceLinePattern)
  if (matches?.length) {
    const totalInvoicePricePattern = /\b\d{1,3}(?:\.\d{3})*(?:,\d+)?\b/g
    const totalInvoicePriceMatch = line.match(totalInvoicePricePattern)
    const totalInvoice = totalInvoicePriceMatch.at(0)

    console.log('Valor total da fatura:', totalInvoice)

    return totalInvoice
  }
}

module.exports = startDataProcessing;