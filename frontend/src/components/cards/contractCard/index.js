import moment from "moment"
import useCardData from "../../../views/Hub/hooks/useCardData"
import { CardMeditionWrapper } from "../meditionCard/styles"
import { CardBody, CardHeader } from "../styles"

function ContractCard({ contractNumber, date, value, invoiceCount }) {
  const { invoiceCardData, isLoad } = useCardData(contractNumber)

  return (
    <CardMeditionWrapper>
      <CardHeader><p>Contrato: {contractNumber}</p></CardHeader>
      {isLoad && <CardBody $vertical>
        <p>Último vencimento: {moment(parseInt(invoiceCardData.lastDueDate)).format('DD/MM/YYYY')}</p>
        <p>Valor: R$ {invoiceCardData.lastPrice}</p>
        <p>Contagem de faturas: {invoiceCardData.invoicesCount}</p>
      </CardBody>}
    </CardMeditionWrapper>
  )
}

export default ContractCard
