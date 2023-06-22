<template>
	<div class="es-block">
		<Title>热销商品的占比</Title>
    <div style="width: 100%;height: 90%;">
			<Chart :option="option" />
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Title from '../Title.vue'
import Chart from '@/components/chart/Chart.vue'
import allData from '@/assets/data/hot.json'

const currentIndex = ref(0)
const option = ref({
	grid: {
		containLabel: false,
	},
	legend: {
		bottom: '0%',
		icon: 'circle',
		data: allData[currentIndex.value].children.map(item => {
			return item.name
		}),
		textStyle: {
			color: '#aaa'
		}
	},
	tooltip: {
		show: true,
		formatter: arg => {
			// console.log(arg)
			const thirdCategory = arg.data.children
			// 计算出所有三级分类的数值总和
			let total = 0
			thirdCategory.forEach(item => {
				total += item.value
			})
			let retStr = ''
			thirdCategory.forEach(item => {
				retStr += `
				${item.name}:${Number(item.value / total * 100) + '%'}
				<br/>
				`
			})
			return retStr
		}
	},
	series: [
		{
			type: 'pie',
			label: {
				show: false
			},
			emphasis: {
				label: {
					show: true
				},
				labelLine: {
					show: false
				}
			},
			data: allData[currentIndex.value].children.map(item => {
        return {
          name: item.name,
          value: item.value,
          children: item.children // 新增加children的原因是为了在tooltip中的formatter的回调函数中,来拿到这个二级分类下的三级分类数据
        }
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
