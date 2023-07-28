import { CardBody, CardHeader } from "../styles"
import { CardValue, CardMeditionWrapper } from "./styles"

function MeditionCard({ title, icon, value, unit }) {
  return (
    <CardMeditionWrapper>
      <CardHeader><p>{title}</p></CardHeader>
      <CardBody>
        <CardValue>{value} {unit}</CardValue>
        {icon}
      </CardBody>
    </CardMeditionWrapper>
  )
}

export default MeditionCard
