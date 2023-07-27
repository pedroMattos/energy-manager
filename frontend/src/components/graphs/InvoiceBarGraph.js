import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts'
import {
  CanvasRenderer,
} from 'echarts/renderers';

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);
const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

function InvoiceBarGraph() {
  return <ReactEChartsCore
    echarts={echarts}
    option={options}
    lazyUpdate={true}
  />
}

export default InvoiceBarGraph


