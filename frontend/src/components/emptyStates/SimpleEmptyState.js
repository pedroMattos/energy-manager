import { EmptyStateIcon, EmptyStateText, EmptyStateWrapper } from "./styles"

function SimpleEmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyStateText>Nenhum dado de fatura encontrado</EmptyStateText>
      <EmptyStateIcon />
    </EmptyStateWrapper>
  )
}

export default SimpleEmptyState
