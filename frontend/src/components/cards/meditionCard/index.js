import { CardBody, CardHeader } from "../styles"
import { CardValue, CardMeditionWrapper } from "./styles"

function MeditionCard({ title, iconName, value, unit }) {
  return (
    <CardMeditionWrapper>
      <CardHeader><p>{title}</p></CardHeader>
      <CardBody>
        <CardValue>{value} {unit}</CardValue>
      </CardBody>
    </CardMeditionWrapper>
  )
}

export default MeditionCard
