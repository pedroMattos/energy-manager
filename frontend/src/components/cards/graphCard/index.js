import InvoiceBarGraph from "../../graphs/InvoiceBarGraph"
import MoneySaveGraph from "../../graphs/MoneySaveGraph"
import { CardGraphBody, CardGraphTitle, CardGraphWrapper } from "./styles"

function GraphCard({ title, graph }) {

  const component = () => {
    switch (graph) {
      case 'money-save':
        
        return <MoneySaveGraph />
      default:

        return <InvoiceBarGraph />
    }
  }

  return (
    <CardGraphWrapper>
      <CardGraphTitle><p>{title}</p></CardGraphTitle>
      <CardGraphBody>
        {component()}
      </CardGraphBody>
    </CardGraphWrapper>
  )
}

export default GraphCard
