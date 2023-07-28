import axios from "axios";
import { useEffect, useState } from "react";

function useTableValues() {
  const [isLoad, setIsload] = useState(false)
  const [tableValues, setTableValues] = useState(null)

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/get-all-invoices')

    setIsload(true)
    setTableValues(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { tableValues, isLoad }
}

export default useTableValues