<template>
	<div ref="containerRef">
		<component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="es-screen-left-item"
		>
			{{ item.name }}
		</component>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useSortable } from '@/utils/useSortable'
const components = ref([
	{ name: 'left1', component: 'div' },
	{ name: 'left2', component: 'div' },
	{ name: 'left3', component: 'div' }
])

const { containerRef } = useSortable(components)
</script>

<style lang='scss' scoped>
.es-screen-left-item {
	width: 100%;
	height: 300px;
	margin-top: 20px;
	background-color: var(--es-screen-bg);
}
</style>
