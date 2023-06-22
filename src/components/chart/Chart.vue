<template>
	<div ref="chartRef" className='es-chart'></div>
</template>

<script setup lang='ts'>
import { onMounted, PropType, shallowRef, watch } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption, ECharts } from 'echarts'

const props = defineProps({
	option: {
		type: Object as PropType<EChartsOption>,
		required: true
	},
	autoresize: {
		type: Boolean
	}
})
const chartRef = shallowRef<HTMLElement | null>(null)

const chart = shallowRef<ECharts | null>(null)
function init() {
	if (props.option) {
		chart.value = echarts.init(chartRef.value!, 'chalk')
		setOption(props.option)
	}
}
function setOption(option) {
	if (!chart.value) return console.warn('')

	chart.value.setOption(option)
}

function resize() {
	chart.value.resize()
}

watch(() => props.option, () => {
	setOption(props.option)
})

onMounted(() => {
	init()
})

defineExpose({
	chart,
	setOption,
	resize
})
</script>

<style lang='scss' scoped>
.es-chart {
	width: 100%;
	height: 100%;
}
</style>

