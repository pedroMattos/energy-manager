import { useEffect, useState } from "react"
import axios from 'axios'


function useInvoiceGraphData() {
  const contractNumber = localStorage.getItem('contractNumber')
  const [series, setSeries] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getMeditions = async () => {
    const { data } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-invoices-prices-by-due-date-order/asc/${contractNumber}`)

    setIsLoad(false)
    

    setSeries(() => data.map((seriesData) => {
      return seriesData.total_invoice_price
    }))
  }

  useEffect(() => {
    getMeditions()
  }, [])

  return { series, isLoad }
}

export default useInvoiceGraphData
