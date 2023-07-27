import '../App.css';
import InvoiceBarGraph from '../components/graphs/InvoiceBarGraph'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { useEffect, useState } from 'react';
import moment from 'moment'
import Sidebar from './Sidebar';
import { AppWrapper } from './styles';
import MeditionCard from '../components/cards/meditionCard';

function App() {
  const [value, setValue] = useState();
  useEffect(() => {
    console.log(moment(value).locale('pt-br').format('MMM/YYYY'))
  }, [value])
  return (
    <AppWrapper>
      <Sidebar />
      <MeditionCard />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker label={'Escolha o mês e ano'} views={['month', 'year']} onChange={setValue} />
      </LocalizationProvider>
      <InvoiceBarGraph />
    </AppWrapper>
  );
}

export default App;
