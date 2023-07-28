import GraphCard from "../../components/cards/graphCard";
import MeditionCard from "../../components/cards/meditionCard";
import { PageHeader, PageSection, PageTitle } from "../styles";
import useMeditions from "./hooks/useMeditions";
import { DashboardMeditions } from "./styles";
import HistoryEmptyState from "../../components/emptyStates/SimpleEmptyState";
import useContractNumber from "../hooks/useContractNumber";

function Dashboard() {
  const { meditions, isLoad } = useMeditions()
  const { contractNumber, isLoad: isLoadContractNumber } = useContractNumber()

  if (!isLoad && !meditions.length) return <HistoryEmptyState />
  return (
    <PageSection>
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
        {!isLoadContractNumber && <p>Contrato: {contractNumber}</p>}
      </PageHeader>
      <p>Último mês</p>
      <div>
        <DashboardMeditions>
          {!isLoad && meditions.map((medition) => {
            return <MeditionCard
                key={medition.value}
                title={medition.title}
                value={medition.value}
                unit={medition.unit}
                icon={medition.icon}
              />
          })}
        </DashboardMeditions>
        <p>Todos os meses</p>
        <DashboardMeditions>
          <GraphCard title={'Valor da Fatura por vencimento'} />
          <GraphCard title={'Economia de energia compensada ou injetada'} graph={'money-save'} />
        </DashboardMeditions>
      </div>
    </PageSection>
  )
}

export default Dashboard