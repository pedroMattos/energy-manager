import GraphCard from "../../components/cards/graphCard";
import MeditionCard from "../../components/cards/meditionCard";
import { PageTitle } from "../styles";
import useContractNumber from "./hooks/useContractNumber";
import useMeditions from "./hooks/useMeditions";
import { DashboardBody, DashboardHeader, DashboardMeditions, DashboardSection } from "./styles";

function Dashboard() {
  const { meditions, isLoad } = useMeditions()
  const { contractNumber, isLoad: isLoadContractNumber } = useContractNumber()

  return (
    <DashboardSection>
      <DashboardHeader>
        <PageTitle>Dashboard</PageTitle>
        {!isLoadContractNumber && <p>Contrato: {contractNumber}</p>}
      </DashboardHeader>
      <p>Último mês</p>
      <DashboardBody>
        <DashboardMeditions>
          {!isLoad && meditions.map((medition) => {
            return <MeditionCard key={medition.value} title={medition.title} value={medition.value} unit={medition.unit} />
          })}
        </DashboardMeditions>
        <p>Todos os meses</p>
        <DashboardMeditions>
          <GraphCard title={'Valor da Fatura por vencimento'} />
          <GraphCard title={'Economia de energia compensada ou injetada'} graph={'money-save'} />
        </DashboardMeditions>
      </DashboardBody>
    </DashboardSection>
  )
}

export default Dashboard