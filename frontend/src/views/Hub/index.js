import ContractCard from "../../components/cards/contractCard"
import useContracts from "../../hooks/useContracts"
import { PageTitle } from "../styles"
import { HubPageWrapper } from "./styles"

function HubPage() {
  const { isLoading, contracts } = useContracts()
  return (
    <HubPageWrapper>
      <div>
        <PageTitle>Bem vindo(a) ao seu gerenciador de faturas</PageTitle>
        <p>Acesse suas faturas pela conta contrato</p>
      </div>
      <div>
        {!isLoading && contracts?.map((contract) => <ContractCard key={contract.id} contractNumber={contract.number} />)}
      </div>
    </HubPageWrapper>
  )
}

export default HubPage
