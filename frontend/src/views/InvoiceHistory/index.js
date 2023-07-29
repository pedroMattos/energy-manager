import { FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material"
import useContractNumber from "../hooks/useContractNumber"
import { PageHeader, PageSection, PageTitle } from "../styles"
import { GroupBySelectors, GroupTitle, SearchField, SelectField } from "./styles"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { useState } from "react"
import moment from "moment"
import Search from '@mui/icons-material/Search'
import InvoiceHistoryTable from "../../components/Tables/InvoiceHistoryTable"
import useTableValues from "./hooks/useTableValues"

function InvoiceHistory() {
  const { contractNumber, isLoad: isLoadContractNumber } = useContractNumber()
  const { tableValues, isLoad, handleFindInvoice } = useTableValues()
  const [dateValue, setDateValue] = useState(null)
  const [selection, setSelection] = useState('unit')

  const handleDateChange = (value) => setDateValue(moment(value).locale('pt-br').format('MMM/YYYY'))
  const handleChangeSelection = (value) => setSelection(value.target.value)
  return (
    <PageSection>
      <PageHeader>
        <PageTitle>Histórico de faturas</PageTitle>
        {!isLoadContractNumber && <p>Contrato: {contractNumber}</p>}
      </PageHeader>
      <GroupBySelectors>
        <GroupTitle>Buscar Por</GroupTitle>
        <FormControl fullWidth>
          <SelectField
            labelId="simple-select-label"
            value={selection}
            onChange={handleChangeSelection}
          >
            <MenuItem value={'unit'}>Unidade Consumidora</MenuItem>
            <MenuItem value={'month'}>Mês e ano</MenuItem>
          </SelectField>
        </FormControl>
        {selection === 'month' && <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker label={'Escolha o mês e ano'} views={['month', 'year']} onChange={handleDateChange} />
        </LocalizationProvider>}
        <IconButton onClick={() => handleFindInvoice({ dateValue, selection }, contractNumber)} aria-label="search" color="primary">
          <Search />
        </IconButton>
      </GroupBySelectors>
      <GroupBySelectors>
        <GroupTitle>Filtrar na tabela</GroupTitle>
        <SearchField id="outlined-basic" placeholder="Buscar" variant="outlined" />
      </GroupBySelectors>
      {isLoad && <InvoiceHistoryTable dataTable={tableValues} />}
    </PageSection>
  )
}

export default InvoiceHistory
