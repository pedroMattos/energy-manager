const pgDbConnection = require('../pgConfig')

async function createTableInvoiceIfNotExists() {
  pgDbConnection.schema.withSchema('public').hasTable('invoice').then((exists) => {
    if (exists) return
    return pgDbConnection.schema.withSchema('public').createTable('invoice', (table) => {
      table.increments()
      table.bigint('contract_number')
      table.string('reference_month')
      table.bigint('invoice_due_date')
      table.integer('kwh')
      table.float('kwh_unit')
      table.float('kwh_price')
      table.float('icms')
      table.float('icms_unit')
      table.float('icms_price')
      table.float('hfp')
      table.float('hfp_unit')
      table.float('hfp_price')
      table.float('public_energy_contribution')
      table.float('total_invoice_price')
    })
  }).catch((error) => {
    console.error(error)
  })
}

module.exports = createTableInvoiceIfNotExists