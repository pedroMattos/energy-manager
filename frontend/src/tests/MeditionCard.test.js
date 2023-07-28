import { render } from '@testing-library/react'
import MeditionCard from '../components/cards/meditionCard'
import EnergyIcon from '@mui/icons-material/EnergySavingsLeaf'

const params = {
  title: "Consumo de energia (kWh)",
  icon: <EnergyIcon />,
  value: 100,
  unit: "kWh"
}
test('Exibe o valor do card', () => {
  // Renderiza o componente com o valor especificado
  const { getByText } = render(<MeditionCard {...params} />)

  // Verifica se o componente exibe o valor + "kWh"
  const testValue = getByText(`${params.value} kWh`)
  expect(testValue).toBeInTheDocument()
})

test('Testa se o ícone correto está sendo exibido', () => {
  // Renderiza o componente com o valor especificado
  const { getByTestId } = render(<MeditionCard {...params} />)

    // Verifica se o ícone EnergySavingsLeafIcon está presente
    const testIcon = getByTestId('EnergySavingsLeafIcon')
    expect(testIcon).toBeInTheDocument()
})

test('Testa se o título está sendo exibido corretamente', () => {
  // Renderiza o componente com o valor especificado
  const { getByText } = render(<MeditionCard {...params} />)
  
  // Verifica se está fazendo display do titulo corretamente
  const testTitle = getByText("Consumo de energia (kWh)")
  expect(testTitle).toBeInTheDocument()
})
