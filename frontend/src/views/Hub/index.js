import ContractCard from "../../components/cards/contractCard"
import EmptyCard from "../../components/cards/emptyCard"
import useContracts from "../../hooks/useContracts"
import { PageTitle } from "../styles"
import { CardsContainer, HubPageWrapper } from "./styles"

function HubPage() {
  const { isLoading, contracts } = useContracts()
  return (
    <HubPageWrapper>
      <div>
        <PageTitle>Bem vindo(a) ao seu gerenciador de faturas</PageTitle>
        <p>Acesse suas faturas pela conta contrato</p>
      </div>
      <CardsContainer>
        {!isLoading && contracts?.map((contract) => <ContractCard key={contract.id} contractNumber={contract.number} />)}
        <EmptyCard />
      </CardsContainer>
    </HubPageWrapper>
  )
}

export default HubPage
