import { styled } from "styled-components";

export const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #D9D9D9;
`

export const CardWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  max-width: 320px;
  width: 100%;
  height: 220px;
  @media (max-width: 800px) {
    max-width: 600px;
  }
`

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`