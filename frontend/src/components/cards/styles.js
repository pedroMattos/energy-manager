import { styled } from "styled-components";

export const CardHeader = styled.div`
  padding: 16px;
  user-select: none;
  ${({ $withouBorder }) => $withouBorder ? 'boder-bottom: 0px;' : 'border-bottom: 1px solid #D9D9D9;'}
  ${({ $center }) => $center ? `
  p {
    text-align: center;
  }
  ` : ''}
`

export const CardWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  max-width: 320px;
  width: 100%;
  height: 220px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  @media (max-width: 800px) {
    max-width: 600px;
  }
`

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 10px;
`

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  gap: 30px;
  svg {
    width: 80px;
    height: 100px;
  }
  user-select: none;
  ${({ $customWidth }) => $customWidth ? `width: ${$customWidth};` : ''}
  ${({ $vertical }) => $vertical ? `
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  padding: 10px;
  gap: 0;
  ` : ''}
`