const express = require("express");
require("dotenv").config();
const api = require('./api')
const app = express();
const createTableInvoiceIfNotExists = require('./migrations/createTableInvoice')
const dataProcessing = require('./dataProcessing')

// createTableInvoiceIfNotExists()
dataProcessing(process.env.FILES_FOLDER_NAME)
api.getInvoiceData().then((data) => {
  console.log(data)
})

app.listen(process.env.PORT, () => {
  console.log('Backend executando...', process.env.PORT)
})