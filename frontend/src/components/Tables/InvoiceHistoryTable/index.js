import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function createData(instalationNumber, totalPrice, month, dueDate, kWh, icms, hfp, compensated) {
  return { instalationNumber, totalPrice, month, dueDate, kWh, icms, hfp, compensated };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function InvoiceHistoryTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.instalationNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.instalationNumber}
              </TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.dueDate}</TableCell>
              <TableCell align="right">{row.kWh}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  )
}

export default InvoiceHistoryTable
