import InvoiceBarGraph from "../../graphs/InvoiceBarGraph"
import { CardGraphBody, CardGraphTitle, CardGraphWrapper } from "./styles"

function GraphCard({ title }) {
  return (
    <CardGraphWrapper>
      <CardGraphTitle><p>{title}</p></CardGraphTitle>
      <CardGraphBody>
        <InvoiceBarGraph />
      </CardGraphBody>
    </CardGraphWrapper>
  )
}

export default GraphCard
