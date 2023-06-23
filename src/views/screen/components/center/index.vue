<template>
	<div class="es-center">
		<Map />
		<!-- <AMap /> -->
	</div>
</template>

<script setup lang='ts'>
import Map from './Map.vue'
import AMap from './AMap.vue'
</script>

<style lang='scss' scoped>
.es-center {
	width: 100%;
	height: 1000px;
	padding: 0 16px;
}
</style>
