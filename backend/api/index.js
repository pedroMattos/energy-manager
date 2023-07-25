const pgDbConnection = require('../pgConfig')
require("dotenv").config()

function setInvoiceData(data) {
  // console.log(data)
  pgDbConnection('invoice').insert({
    contract_number: data.get('contractNumber'),
    reference_month: data.get('referenceMonth'),
    invoice_due_date: new Date(data.get('invoiceDueDate')).getTime(),
    kwh: data.get('kwh'),
    kwh_unit: data.get('kwhUnit'),
    kwh_price: data.get('kwhPrice'),
    icms: data.get('icms'),
    icms_unit: data.get('icmsUnit'),
    icms_price: data.get('icmsPrice'),
    hfp: data.get('hfp'),
    hfp_unit: data.get('hfpUnit'),
    hfp_price: data.get('hfpPrice'),
    public_energy_contribution: data.get('publicEnergyContribution'),
    total_invoice_price: data.get('totalInvoicePrice')
  }).then(() => {
    console.log('Dados de fatura inseridos na tabela invoice')
  }).catch((error) => {
    console.error('Houve um erro ao tentar inserir os dados:', error)
  })
}

function getInvoiceData() {
  return pgDbConnection('invoice').select('*')
}

module.exports = {
  setInvoiceData,
  getInvoiceData
}
