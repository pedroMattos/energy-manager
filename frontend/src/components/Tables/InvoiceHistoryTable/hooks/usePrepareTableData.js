import moment from "moment"
import { useMemo } from "react"

function usePrepareTableData(data) {
  const tableData = useMemo(() => {
    return data.map((row) => {
      return {
        instalationNumber: row.instalation_number,
        totalPrice: `R$ ${row.total_invoice_price}`,
        month: row.reference_month,
        dueDate: moment(parseInt(row.invoice_due_date)).format('DD/MM/YYYY'),
        kWh: row.kwh,
        icms: `R$ ${row.icms_price ?? 0}`,
        hfp: `R$ ${row.hfp_price ?? 0}`,
        compensated: `R$ ${row.compensated_price ?? 0}`
      }
    })
  }, [data])

  return tableData
}

export default usePrepareTableData
