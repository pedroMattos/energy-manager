import moment from "moment"
import useCardData from "../../../views/Hub/hooks/useCardData"
import { CardMeditionWrapper } from "../meditionCard/styles"
import { Actions, CardBody, CardHeader } from "../styles"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function ContractCard({ contractNumber }) {
  const { invoiceCardData, isLoad } = useCardData(contractNumber)
  const navigate = useNavigate()

  const handleSelectDashBoard = () => {
    navigate('/dashboard')
    localStorage.setItem('contractNumber', contractNumber)
  }
  return (
    <CardMeditionWrapper>
      <CardHeader><p>Contrato: {contractNumber}</p></CardHeader>
      {isLoad && <CardBody $vertical>
        <p>Último vencimento: {moment(parseInt(invoiceCardData.lastDueDate)).format('DD/MM/YYYY')}</p>
        <p>Valor: R$ {invoiceCardData.lastPrice}</p>
        <p>Contagem de faturas: {invoiceCardData.invoicesCount}</p>
        <Actions>
          <Button onClick={handleSelectDashBoard} variant="contained">
            Dashboard
          </Button>
        </Actions>
      </CardBody>}
    </CardMeditionWrapper>
  )
}

export default ContractCard
