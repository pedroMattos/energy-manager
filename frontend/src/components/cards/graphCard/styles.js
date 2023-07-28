import { styled } from "styled-components";
import { CardBody, CardHeader, CardWrapper } from "../styles";

export const CardGraphWrapper = styled(CardWrapper)`
  max-width: 490px;
  height: 400px;
  @media (max-width: 800px) {
    max-width: 600px;
  }
  .echarts-for-react {
    min-width: 400px;
  }
`

export const CardGraphTitle = styled(CardHeader)`
  text-align: center;
`

export const CardGraphBody = styled(CardBody)`
  margin-top: 0;
`