import axios from "axios";
import { useEffect, useState } from "react";

function useTableValues() {
  const contractNumber = localStorage.getItem('contractNumber')
  const [isLoad, setIsload] = useState(false)
  const [tableValues, setTableValues] = useState(null)

  const fetchData = async () => {
    const { data } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-all-invoices/${contractNumber}`)

    setIsload(true)
    setTableValues(data)
  }

  const handleFindInvoice = async (params, contractNumber) => {
    setIsload(false)
    setTableValues(null)
    console.log(params)
    if (params.selection === 'unit') {
      const { data } = await axios.post(`https://energy-manager-backend-production.up.railway.app/invoices-by-contract-number/${contractNumber}`)
      setIsload(true)
      setTableValues(data)
      return
    }
    const timesTampDate = new Date(params.dateValue).getTime()
    const { data } = await axios.post(`https://energy-manager-backend-production.up.railway.app/invoices-by-reference-month/${timesTampDate}/${contractNumber}`)
    setIsload(true)
    setTableValues(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { tableValues, isLoad, handleFindInvoice }
}

export default useTableValues