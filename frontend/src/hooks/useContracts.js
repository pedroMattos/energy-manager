import axios from "axios"
import { useEffect, useState } from "react"

function useContracts() {
  const [isLoading, setIsLoading] = useState(true)
  const [contracts, setContracts] = useState([])
  const getContracts = async () => {
    const { data } = await axios.get('http://localhost:5000/contracts')
    setIsLoading(false)

    setContracts(data)
  }
  useEffect(() => {
    getContracts()
  }, [])

  return { isLoading, contracts }
}

export default useContracts
