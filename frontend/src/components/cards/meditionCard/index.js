import { CardHeader, CardWrapper } from "./styles"

function MeditionCard({ title, iconName, value }) {
  return (
    <CardWrapper>
      <CardHeader><p>{title}</p></CardHeader>
    </CardWrapper>
  )
}

export default MeditionCard
