<template>
	<div ref="containerRef">
		<button @click="handleChange">修改</button>
		<component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="es-screen-left-item"
		>
			{{ item.name }}
			<div style="width: 100%;height: 220px;">
				<Chart :option="chartOption" />
			</div>
		</component>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useSortable } from '@/utils/useSortable'

import Chart from '@/components/chart/Chart.vue'
const components = ref([
	{ name: 'left1', component: 'div' },
	{ name: 'left2', component: 'div' },
	{ name: 'left3', component: 'div' }
])
function handleChange() {
	chartOption.title.text = '123465'
}
const chartOption = {
	title: {
		text: '柱状图',
		left: 'center',
	},
	tooltip: {
    trigger: 'item'
  },
  grid: {
    top: '15%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    axisTick: {
      show: false
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
	series: [
		{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: 'bar'
		}
	]
}

const { containerRef } = useSortable(components)
</script>

<style lang='scss' scoped>
.es-screen-left-item {
	width: 100%;
	height: 300px;
	margin-top: 20px;
	background-color: var(--es-screen-bg);
}
</style>
