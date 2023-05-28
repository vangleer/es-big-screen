<template>
	<div class="es-screen-container">
		<div ref="screenRef" class="es-screen">
			<Header />
		</div>
	</div>

</template>

<script setup lang='ts'>
import Header from './components/Header.vue'
import { useResize } from '@/utils/useResize'

const { screenRef } = useResize()

</script>
<style lang='scss' scoped>
.es-screen-container {
	position: relative;
	margin: 0;
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	overflow: hidden;
	background: #000;
	color: #fff;
}
.es-screen {
  --es-screen-width: 1920px;
  --es-screen-height: 1080px;
  position: absolute;
  user-select: none;
  top: 50%;
  left: 50%;
  width: var(--es-screen-width);
  height: var(--es-screen-height);
  margin-left: calc(var(--es-screen-width) * 0.5 - var(--es-screen-width));
  margin-top: calc(var(--es-screen-height) * 0.5 - var(--es-screen-height));
  background-size: 100% 100%;
}
</style>
