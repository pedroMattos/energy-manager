import { useEffect, useState } from "react"
import axios from 'axios'


function useInvoiceGraphData() {
  const [series, setSeries] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getMeditions = async () => {
    const { data } = await axios.get('http://localhost:5000/get-invoices-prices-by-due-date-order/asc')

    console.log(data)

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
