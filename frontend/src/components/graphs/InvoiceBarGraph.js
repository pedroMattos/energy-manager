import ReactECharts from 'echarts-for-react';
import useGraphData from './hooks/useInvoiceGraphData';
import { useMemo } from 'react';

function InvoiceBarGraph() {
  const { series, isLoad } = useGraphData()

  const options = useMemo(() => {
    if (isLoad) return
    return {
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
        { data: series, type: 'bar' }
      ]
    }
  }, [series, isLoad])

  return (
    <>
      {!isLoad && <ReactECharts option={options} lazyUpdate />}
    </>
  )
}

export default InvoiceBarGraph


