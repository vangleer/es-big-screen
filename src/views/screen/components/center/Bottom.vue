<template>
	<div class="es-center-bottom">
		<div ref="listRef" class="es-bottom-list">
			<div v-for="item in 12" class="es-bottom-item">{{ item }}</div>
		</div>
	</div>

	<div ref="listRef2" class="es-bottom-list2">
		<div v-for="item in 12" class="es-bottom-item">{{ item }}</div>
	</div>
</template>

<script setup lang='ts'>
import { useSeamlessScroll } from '@/utils/useSeamlessScroll';
import { ref } from 'vue'

const listRef = ref()
const listRef2 = ref()
useSeamlessScroll(listRef)
useSeamlessScroll(listRef2, { direction: 'vertical' })

</script>

<style lang='scss' scoped>
.es-center-bottom {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	background-color: red;
	padding: 20px;
	overflow: hidden;
	.es-bottom-list {
		position: relative;
		height: 100px;
		width: 1200px;
		overflow: hidden;
	}

	.es-bottom-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: pink;
	}
}
.es-bottom-list2 {
	position: absolute;
	top: 300px;
	width: 500px;
	height: 500px;
	background-color: blue;
	overflow: hidden;
	> div {
		position: absolute;
		width: 100%;
		height: 60px;
		background-color: red;
	}
}
</style>
