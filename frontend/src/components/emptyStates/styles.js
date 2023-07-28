import { styled } from "styled-components";
import SearchOff from '@mui/icons-material/SearchOff'

export const EmptyStateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const EmptyStateText = styled.p`
  font-size: 28px;
  font-weight: 700;
`

export const EmptyStateIcon = styled(SearchOff)`
  width: 100px !important;
  height: 100px !important;
`