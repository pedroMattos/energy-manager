import { CardBody, CardHeader } from "../styles"
import AddNewIcon from '@mui/icons-material/Add'
import { EmptyCardWrapper } from "./styles"

function EmptyCard({ contractNumber }) {
  return (
    <EmptyCardWrapper>
      <CardHeader $withouBorder $center><p>Adicionar nova conta contrato</p></CardHeader>
      <CardBody $customWidth={'300px'}><AddNewIcon /></CardBody>
    </EmptyCardWrapper>
  )
}

export default EmptyCard
