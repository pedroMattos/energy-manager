import axios from "axios";
import { useEffect, useState } from "react";

function useTableValues() {
  const contractNumber = localStorage.getItem('contractNumber')
  const [isLoad, setIsload] = useState(false)
  const [tableValues, setTableValues] = useState(null)

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/get-all-invoices/${contractNumber}`)

    setIsload(true)
    setTableValues(data)
  }

  const handleFindInvoice = async (params, contractNumber) => {
    setIsload(false)
    setTableValues(null)
    console.log(params)
    if (params.selection === 'unit') {
      const { data } = await axios.post(`http://localhost:5000/invoices-by-contract-number/${contractNumber}`)
      setIsload(true)
      setTableValues(data)
      return
    }
    const timesTampDate = new Date(params.dateValue).getTime()
    const { data } = await axios.post(`http://localhost:5000/invoices-by-reference-month/${timesTampDate}`)
    setIsload(true)
    setTableValues(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { tableValues, isLoad, handleFindInvoice }
}

export default useTableValues