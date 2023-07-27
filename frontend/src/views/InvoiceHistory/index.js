import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import useContractNumber from "../hooks/useContractNumber"
import { PageHeader, PageSection, PageTitle } from "../styles"
import { GroupBySelectors } from "./styles"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { useState } from "react"
import moment from "moment"
import InvoiceHistoryTable from "../../components/Tables/InvoiceHistoryTable"

function InvoiceHistory() {
  const { contractNumber, isLoad: isLoadContractNumber } = useContractNumber()
  const [dateValue, setDateValue] = useState(null)

  const handleDateChange = (value) => setDateValue(moment(value).locale('pt-br').format('MMM/YYYY'))
  return (
    <PageSection>
      <PageHeader>
        <PageTitle>Histórico de faturas</PageTitle>
        {!isLoadContractNumber && <p>Contrato: {contractNumber}</p>}
      </PageHeader>
      <GroupBySelectors>
        <p>Agrupar Por</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Selecione</InputLabel>
          <Select
            labelId="simple-select-label"
            label="Selecione"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Unidade Consumidora</MenuItem>
            <MenuItem value={20}>Mês e ano</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker label={'Escolha o mês e ano'} views={['month', 'year']} onChange={handleDateChange} />
        </LocalizationProvider>
      </GroupBySelectors>
      <InvoiceHistoryTable />
    </PageSection>
  )
}

export default InvoiceHistory
