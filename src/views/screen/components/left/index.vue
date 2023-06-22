<template>
	<div ref="containerRef">
		<component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="es-screen-left-item"
			:name="item.name"
		>
			<Left1 />
		</component>
	</div>
</template>

<script setup lang='ts'>
import { shallowRef } from 'vue'
import { useSortable } from '@/utils/useSortable'

import Left1 from './Left1.vue'
import Left2 from './Left2.vue'
const components = shallowRef([
	{ name: 'left1', component: Left1 },
	{ name: 'left2', component: Left2 }
])

const { containerRef } = useSortable(components)
</script>

<style lang='scss' scoped>
.es-screen-left-item {
	width: 100%;
	height: 400px;
	margin-top: 20px;
	background-color: var(--es-screen-bg);
	padding: 16px;
	&[name=left1] {
		height: 500px;
	}
}
</style>
