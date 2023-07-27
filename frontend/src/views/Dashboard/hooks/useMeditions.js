import { useEffect, useState } from "react"
import axios from 'axios'


function useMeditions() {
  const [meditions, setMeditions] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getMeditions = async () => {
    const { data: kwh } = await axios.get('http://localhost:5000/get-most-recent-kWh')
    const { data: invoicePrice } = await axios.get('http://localhost:5000/get-most-recent-invoice-price')
    const { data: moneySave } = await axios.get('http://localhost:5000/get-most-recent-money-save')

    setIsLoad(false)
    return setMeditions([mountKWh(kwh), mountInvoicePrice(invoicePrice), mountMoneySave(moneySave)])
  }

  const mountKWh = (value) => ({
    value: value.kwh,
    title: 'Consumo de energia (kWh)',
    unit: 'kWh'
  })

  const mountInvoicePrice = (value) => ({
    value: value.total_invoice_price,
    title: 'Valor total (R$)',
    unit: 'R$'
  })

  const mountMoneySave = (value) => ({
    value: (value.hfp_price ?? value.compensated_kwh_price) * -1,
    title: 'Economia (R$)',
    unit: 'R$'
  })

  useEffect(() => {
    getMeditions()
  }, [])

  return { meditions, isLoad }
}

export default useMeditions
