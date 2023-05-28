<template>
	<div class="es-screen-header">
		<div class="es-screen-header-title">{{ store.title }}</div>
	</div>
</template>

<script setup lang='ts'>
import { useScreenStore } from '@/store'

const store = useScreenStore()
</script>

<style lang='scss' scoped>
.es-screen-header {
	position: relative;
	width: 100%;
	height: 72px;
	background-image: url('@/assets/images/screen/header_blank_bg.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	&-title {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 487px;
		height: 72px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		font-weight: 500;
		letter-spacing: 7px;
		text-shadow: 0px 2px 20px rgba(222,171,155,0.6);
	}
}

</style>
