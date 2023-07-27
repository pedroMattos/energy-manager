import GraphCard from "../../components/cards/graphCard";
import MeditionCard from "../../components/cards/meditionCard";
import { PageTitle } from "../styles";
import { DashboardBody, DashboardHeader, DashboardMeditions, DashboardSection } from "./styles";

function Dashboard() {
  return (
    <DashboardSection>
      <DashboardHeader>
        <PageTitle>Dashboard</PageTitle>
        <p>Contrato: xxxx</p>
      </DashboardHeader>
      <p>Último mês</p>
      <DashboardBody>
        <DashboardMeditions>
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} unit={'kWh'} />
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} unit={'R$'} />
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} unit={'R$'} />
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