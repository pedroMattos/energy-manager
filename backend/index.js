const express = require("express");
const app = express();
const pgDbConnection = require('./pgConfig')
const dataProcessing = require('./dataProcessing')

app.db = pgDbConnection

// pgDbConnection('Test').insert({ valor: 1123 }).then(() => {
//   console.log('inseriu')
// }).catch((error) => {
//   console.log('erro ao inserir', error)
// })

// pgDbConnection('Test').select('*').then((value) => {
//   console.log(value)
// })

dataProcessing('files')

app.listen(process.env.PORT, () => {
  console.log('Backend executando...')
})