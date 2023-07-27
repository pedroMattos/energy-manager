import { styled } from "styled-components";
import { CardWrapper } from "../styles";

export const CardMeditionWrapper = styled(CardWrapper)`
  max-width: 320px;
  height: 220px;
  @media (max-width: 800px) {
    max-width: 600px;
  }
`

export const CardValue = styled.p`
  font-size: 32px;
  font-weight: 700;
`