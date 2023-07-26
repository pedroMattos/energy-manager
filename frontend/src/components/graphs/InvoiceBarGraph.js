import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts'
import {
  SVGRenderer,
} from 'echarts/renderers';

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, PieChart, SVGRenderer]
);
const options = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

function InvoiceBarGraph() {
  return <ReactEChartsCore
    echarts={echarts}
    option={options}
    notMerge={true}
    lazyUpdate={true}
  />
}

export default InvoiceBarGraph


