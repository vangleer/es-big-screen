<template>
	<div class="es-block">
		<Title>商家销售统计</Title>
    <div style="width: 100%;height: 90%;">
			<Chart :option="option" />
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Title from '../Title.vue'
import Chart from '@/components/chart/Chart.vue'
import allData from '@/assets/data/seller.json'
import * as echarts from 'echarts'

const barWidth = 22
const option = ref({
	grid: {
		top: '10%',
		left: '5%',
		right: '10%',
		bottom: '5%',
		containLabel: true // 距离是包含坐标轴上的文字
	},
	xAxis: {
		type: 'value',
		splitLine: { show: false },
		axisLine: { show: true },
	},
	yAxis: {
		type: 'category',
		axisTick: { show: false },
		data: allData.slice(0, 5).map((item) => {
			return item.name
		})
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'line',
			z: 0,
			lineStyle: {
				color: '#2D3443'
			}
		}
	},
	series: [
		{
			type: 'bar',
			label: {
				show: true,
				position: 'right',
			},
			barWidth: barWidth,
			roundCap: true,
			itemStyle: {
				borderWidth: 0,
				borderRadius: [0, barWidth / 2, barWidth / 2, 0],
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
					{
						offset: 0,
						color: '#5052EE'
					},
					{
						offset: 1,
						color: '#AB6EE5'
					}
				])
			},
			data: allData.slice(0, 5).map((item) => {
				return item.value
			})
		}
	]
})

</script>

<style lang='scss' scoped>
.es-block {
	width: 100%;
	height: 100%;
}
</style>
