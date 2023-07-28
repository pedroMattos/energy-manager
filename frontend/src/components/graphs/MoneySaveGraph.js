import ReactECharts from 'echarts-for-react';
import { useMemo } from 'react';
import useMoneySaveGraphData from './hooks/useMoneySaveGraphData';

function MoneySaveGraph() {
  const { series, isLoad } = useMoneySaveGraphData()

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
        { data: series.hfp, type: 'bar', name: 'HFP Injetado' },
        { data: series.compensated, type: 'bar', name: 'Energia compensada' }
      ]
    }
  }, [series, isLoad])

  return (
    <>
      {!isLoad && <ReactECharts option={options} lazyUpdate />}
    </>
  )
}

export default MoneySaveGraph


