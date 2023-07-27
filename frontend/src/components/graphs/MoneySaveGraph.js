import ReactECharts from 'echarts-for-react';
import { useEffect } from 'react';
import useMoneySaveGraphData from './hooks/useMoneySaveGraphData';
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
    { data: [], type: 'bar', name: 'HFP Injetado' },
    { data: [], type: 'bar', name: 'Energia compensada' }
  ]
}

function MoneySaveGraph() {
  const { series, isLoad } = useMoneySaveGraphData()

  useEffect(() => {
    if (!isLoad) {
      options.series.at(0).data = series.hfp
      options.series.at(1).data = series.compensated
    }
    console.log(options)

  }, [isLoad, series])

  return (
    <>
      {!isLoad && <ReactECharts option={options} />}
    </>
  )
}

export default MoneySaveGraph


