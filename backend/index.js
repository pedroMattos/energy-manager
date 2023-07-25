const express = require("express");
require("dotenv").config();
const api = require('./api')
const app = express();
require('./migrations/createTableInvoiceAndSartProcess')()

api.getInvoiceData().then((data) => {
  console.log(data)
})


app.listen(process.env.PORT, () => {
  console.log('Backend executando...', process.env.PORT)
})