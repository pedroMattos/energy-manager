import GraphCard from "../../components/cards/graphCard";
import MeditionCard from "../../components/cards/meditionCard";
import { PageTitle } from "../styles";
import useMeditions from "./hooks/useMeditions";
import { DashboardBody, DashboardHeader, DashboardMeditions, DashboardSection } from "./styles";

function Dashboard() {
  const { meditions, isLoad } = useMeditions()

  return (
    <DashboardSection>
      <DashboardHeader>
        <PageTitle>Dashboard</PageTitle>
        <p>Contrato: xxxx</p>
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
          <GraphCard title={'Economia de energia compensada ou injetada'} />
        </DashboardMeditions>
      </DashboardBody>
    </DashboardSection>
  )
}

export default Dashboard