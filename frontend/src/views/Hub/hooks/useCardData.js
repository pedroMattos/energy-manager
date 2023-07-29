import axios from "axios"
import { useEffect, useState } from "react"

function useCardData(contractNumber) {
  const [invoiceCardData, setInvoiceCardData] = useState(null)
  const [isLoad, setisLoad] = useState(false)

  const getCardData = async () => {
    const { data: invoices } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-invoices-prices-by-due-date-order/asc/${contractNumber}`)

    const lastInvoice = invoices.at(-1)
    const lastPrice = lastInvoice.total_invoice_price
    const lastDueDate = lastInvoice.invoice_due_date
    const invoicesCount = invoices.length
    setisLoad(true)

    setInvoiceCardData({
      lastPrice,
      lastDueDate,
      invoicesCount
    })
  }

  useEffect(() => {
    getCardData()
  }, [])

  return { invoiceCardData, isLoad }
}

export default useCardData
