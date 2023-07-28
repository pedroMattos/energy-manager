import { CardMeditionWrapper } from "../meditionCard/styles"
import { CardBody, CardHeader } from "../styles"

function ContractCard({ contractNumber, date, value, invoiceCount }) {
  return (
    <CardMeditionWrapper>
      <CardHeader><p>Contrato: {contractNumber}</p></CardHeader>
      <CardBody $vertical>
        <p>Última fatura em: {date}</p>
        <p>Valor: {value}</p>
        <p>Contagem de faturas: {invoiceCount}</p>
      </CardBody>
    </CardMeditionWrapper>
  )
}

export default ContractCard
