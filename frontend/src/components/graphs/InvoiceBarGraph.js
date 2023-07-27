import ReactECharts from 'echarts-for-react';
import useGraphData from './hooks/useGraphData';
import { useEffect } from 'react';
const options = {
  xAxis: {
    type: 'category',
    data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  series: [
    { data: [], type: 'bar' }
  ]
}

function InvoiceBarGraph() {
  const { series, isLoad } = useGraphData()

  useEffect(() => {
    if (!isLoad) options.series.at(0).data = series

  }, [isLoad, series])

  return (
    <>
      {!isLoad && <ReactECharts option={options} />}
    </>
  )
}

export default InvoiceBarGraph


