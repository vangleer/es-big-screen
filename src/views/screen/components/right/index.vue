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
import { shallowRef } from 'vue'
import { useSortable } from '@/utils/useSortable'
import Right1 from './Right1.vue'
import Right2 from './Right2.vue'
import Right3 from './Right3.vue'
const components = shallowRef([
	{ name: 'right1', component: Right1 },
	{ name: 'right2', component: Right2 },
	{ name: 'right3', component: Right3 }
])

const { containerRef } = useSortable(components)
</script>

<style lang='scss' scoped>
.es-screen-right-item {
	width: 100%;
	height: 320px;
	background-color: var(--es-block-bg);
	padding: 16px;
	& + & {
		margin-top: 20px;
	}
}
</style>
