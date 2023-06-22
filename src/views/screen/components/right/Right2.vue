<template>
	<div class="es-block">
		<Title>库存和销量分析</Title>
    <div style="width: 100%;height: 90%;">
			<Chart :option="option" />
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Title from '../Title.vue'
import Chart from '@/components/chart/Chart.vue'
import allData from '@/assets/data/stock.json'
import * as echarts from 'echarts'

const currentIndex = ref(0)
const option = ref({
	series: getSeries()
})

function getSeries() {
	const centerArr = [
		['18%', '40%'],
		['50%', '40%'],
		['82%', '40%'],
		['34%', '75%'],
		['66%', '75%']
	]
	const colorArr = [
		['#4FF778', '#0BA82C'],
		['#E5DD45', '#E8B11C'],
		['#E8821C', '#E55445'],
		['#5052EE', '#AB6EE5'],
		['#23E5E5', '#2E72BF']
	]
	// 处理图表需要的数据
	const start = currentIndex.value * 5
	const end = (currentIndex.value + 1) * 5
	const showData = allData.slice(start, end)

	const titleFontSize = 460 / 100 * 3.6
	const innerRadius = titleFontSize * 2.8
	const outterRadius = innerRadius * 1.125

	return showData.map((item, index) => {
		return {
			type: 'pie',
			center: centerArr[index],
			radius: [outterRadius, innerRadius],
			emphasis: {
				scale: false
			},
			labelLine: {
				show: false // 隐藏指示线
			},
			data: [
				{
					name: item.name + '\n\n' + item.sales,
					value: item.sales,
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
							{
								offset: 0,
								color: colorArr[index][0]
							},
							{
								offset: 1,
								color: colorArr[index][1]
							}
						])
					},
					label: {
						position: 'center',
						color: colorArr[index][0],
						fontSize: titleFontSize / 2
					}
				},
				{
					value: item.stock,
					itemStyle: {
						color: '#333843'
					}
				}
			]
		}
	})
}

</script>

<style lang='scss' scoped>
.es-block {
	width: 100%;
	height: 100%;
}
</style>
