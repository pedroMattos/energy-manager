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
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} />
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} />
          <MeditionCard title={'Consumo de energia (kWh)'} value={100} />
        </DashboardMeditions>
      </DashboardBody>
    </DashboardSection>
  )
}

export default Dashboard