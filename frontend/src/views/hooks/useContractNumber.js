import { useEffect, useState } from "react"
import axios from 'axios'


function useContractNumber() {
  const [contractNumber, setContractNumber] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getContractumber = async () => {
    const { data } = await axios.get('http://localhost:5000/get-contract-number')

    setIsLoad(false)
    setContractNumber(data.contract_number)
  }

  useEffect(() => {
    getContractumber()
  }, [])

  return { contractNumber, isLoad }
}

export default useContractNumber
