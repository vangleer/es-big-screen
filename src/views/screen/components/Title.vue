<template>
	<div class="es-screen-title">
		<slot>
			{{ title }}
		</slot>
	</div>
</template>

<script setup lang='ts'>
defineProps({
	title: String
})
</script>

<style lang='scss' scoped>
.es-screen-title {
	position: relative;
	padding-left: 20px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 3px;
		height: 100%;
		background-color: #fff;
	}
}
</style>
