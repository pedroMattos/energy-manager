import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import usePrepareTableData from "./hooks/usePrepareTableData";
import SimpleEmptyState from "../../emptyStates/SimpleEmptyState";

function InvoiceHistoryTable({ dataTable }) {
  const data = usePrepareTableData(dataTable)

  if (!dataTable.length) return (<SimpleEmptyState />)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Número de instalação</TableCell>
            <TableCell align="right">Valor total (R$)</TableCell>
            <TableCell align="right">Mês</TableCell>
            <TableCell align="right">Vencimento</TableCell>
            <TableCell align="right">kWh (R$)</TableCell>
            <TableCell align="right">ICMS (R$)</TableCell>
            <TableCell align="right">HFP (R$)</TableCell>
            <TableCell align="right">Compensada (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.instalationNumber}
              </TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.dueDate}</TableCell>
              <TableCell align="right">{row.kWh}</TableCell>
              <TableCell align="right">{row.icms}</TableCell>
              <TableCell align="right">{row.hfp}</TableCell>
              <TableCell align="right">{row.compensated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  )
}

export default InvoiceHistoryTable
