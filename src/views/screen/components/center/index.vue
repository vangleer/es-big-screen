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
	animation: slide 1.5s;
}

@keyframes slide {
  0% {
    transform: translateY(218px);
		opacity: 0;
  }
  100% {
    transform: translateX(0);
		opacity: 1;
  }
}
</style>
