<template>
	<div ref="containerRef">
		<component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="es-screen-right-item"
		>
			{{ item.name }}
		</component>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useSortable } from '@/utils/useSortable'
const components = ref([
	{ name: 'right1', component: 'div' },
	{ name: 'right2', component: 'div' },
	{ name: 'right3', component: 'div' }
])

const { containerRef } = useSortable(components)
</script>

<style lang='scss' scoped>
.es-screen-right-item {
	width: 100%;
	height: 300px;
	margin-top: 20px;
	background-color: var(--es-screen-bg);
}
</style>
