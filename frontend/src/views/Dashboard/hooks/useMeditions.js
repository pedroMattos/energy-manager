import { useEffect, useState } from "react"
import axios from 'axios'
import EnergyIcon from '@mui/icons-material/EnergySavingsLeaf'
import MoneyIcon from '@mui/icons-material/MonetizationOn'
import SaveMoneyIcon from '@mui/icons-material/Wallet'


function useMeditions() {
  const contractNumber = localStorage.getItem('contractNumber')
  const [meditions, setMeditions] = useState(null)
  const [isLoad, setIsLoad] = useState(true)

  const getMeditions = async () => {
    const { data: kwh } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-most-recent-kWh/${contractNumber}`)
    const { data: invoicePrice } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-most-recent-invoice-price/${contractNumber}`)
    const { data: moneySave } = await axios.get(`https://energy-manager-backend-production.up.railway.app/get-most-recent-money-save/${contractNumber}`)

    setIsLoad(false)
    setMeditions([mountKWh(kwh), mountInvoicePrice(invoicePrice), mountMoneySave(moneySave)])
  }

  const mountKWh = (value) => ({
    value: value.kwh,
    title: 'Consumo de energia (kWh)',
    unit: 'kWh',
    icon: <EnergyIcon />
  })

  const mountInvoicePrice = (value) => ({
    value: value.total_invoice_price,
    title: 'Valor total (R$)',
    unit: 'R$',
    icon: <MoneyIcon />
  })

  const mountMoneySave = (value) => ({
    value: (value.hfp_price ?? value.compensated_kwh_price) * -1,
    title: 'Economia (R$)',
    unit: 'R$',
    icon: <SaveMoneyIcon />
  })

  useEffect(() => {
    getMeditions()
  }, [])

  return { meditions, isLoad }
}

export default useMeditions
