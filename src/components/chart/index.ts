import Chart from './Chart.vue'
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core'

// Import bar charts, all suffixed with Chart
import {
	BarChart,
} from 'echarts/charts'

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features'

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers'
import { App } from 'vue'

export const install = (app: App) => {
	app.component('v-chart', Chart)
}

// Register the required components
echarts.use([
	BarChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer
])

export default {
	install
}
