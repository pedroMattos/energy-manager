import useContractNumber from "../hooks/useContractNumber"
import { PageHeader, PageSection, PageTitle } from "../styles"

function InvoiceHistory() {
  const { contractNumber, isLoad: isLoadContractNumber } = useContractNumber()
  return (
    <PageSection>
      <PageHeader>
        <PageTitle>Histórico de faturas</PageTitle>
        {!isLoadContractNumber && <p>Contrato: {contractNumber}</p>}
      </PageHeader>
    </PageSection>
  )
}

export default InvoiceHistory
