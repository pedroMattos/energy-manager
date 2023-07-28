import { useEffect, useState } from "react"


function useContractNumber() {
  const [contractNumber, setContractNumber] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getContractumber = async () => {
    setIsLoad(false)
    setContractNumber(localStorage.getItem('contractNumber'))
  }

  useEffect(() => {
    getContractumber()
  }, [])

  return { contractNumber, isLoad }
}

export default useContractNumber
