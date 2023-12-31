import { useEffect, useState } from "react"
import axios from 'axios'


function useMoneySaveGraphData() {
  const contractNumber = localStorage.getItem('contractNumber')
  const [series, setSeries] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getMoneySave = async () => {
    const { data } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-money-save-by-date-order/asc/${contractNumber}`)

    setIsLoad(false)
    setSeries(() => prepareMoneySave(data))
  }

  const prepareMoneySave = (data) => {
    const hfp = []
    const compensated = []

    data.forEach(seriesData => {
      if (seriesData.hfp_price === null) hfp.push(0)
      else hfp.push(seriesData.hfp_price * -1)
      if (seriesData.compensated_kwh_price === null) compensated.push(0)
      else compensated.push(seriesData.compensated_kwh_price * -1)
    });

    return {
      hfp,
      compensated
    }
  }

  useEffect(() => {
    getMoneySave()
  }, [])

  return { series, isLoad }
}

export default useMoneySaveGraphData
