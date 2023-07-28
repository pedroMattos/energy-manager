import { render, screen } from '@testing-library/react';
import InvoiceHistoryTable from '../components/Tables/InvoiceHistoryTable';

const dataTable = [{
  id: 1,
  contract_number: "7202788969",
  instalation_number: "3004298116",
  reference_month: "1672542000000",
  invoice_due_date: "1675652400000",
  kwh: 100,
  kwh_unit: 0.74860466,
  kwh_price: 74.84,
  icms: 954,
  icms_unit: 0.68383414,
  icms_price: 652.36,
  hfp: 954,
  hfp_unit: 0.65313,
  hfp_price: -623.08,
  compensated_kwh: null,
  compensated_kwh_unit: null,
  compensated_kwh_price: null,
  public_energy_contribution: 35.92,
  total_invoice_price: 140.04
}]

test('Testa se os dados exibidos estão corretamente formatados', () => {
  render(<InvoiceHistoryTable dataTable={dataTable} />)

  // Verifique se os dados são exibidos corretamente na tabela
  const instalationNumber = screen.getByText('3004298116');
  expect(instalationNumber).toBeInTheDocument();

  const valorTotalCell = screen.getByText('R$ 140.04');
  expect(valorTotalCell).toBeInTheDocument();

  const vencimentoCell = screen.getByText('06/02/2023');
  expect(vencimentoCell).toBeInTheDocument();

  const kwhCell = screen.getByText('100');
  expect(kwhCell).toBeInTheDocument();

  const icmsCell = screen.getByText('R$ 652.36');
  expect(icmsCell).toBeInTheDocument();

  const hfpCell = screen.getByText('R$ -623.08');
  expect(hfpCell).toBeInTheDocument();

  const compensadaCell = screen.getByText('R$ 0');
  expect(compensadaCell).toBeInTheDocument();
})
