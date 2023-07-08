<template>
	<div class="es-seamless-scroll">
		<div ref="listRef" class="es-seamless-scroll-list">
			<slot />
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useSeamlessScroll, OptionsType } from '@/utils/useSeamlessScroll'
import { PropType, ref } from 'vue'

const props = defineProps({
	width: {
		type: [String, Number]
	},
	height: {
		type: [String, Number]
	},
	option: {
		type: Object as PropType<OptionsType>,
		default: () => ({})
	}
})
const listRef = ref()
useSeamlessScroll(listRef, props.option)

</script>

<style lang='scss' scoped>
.es-seamless-scroll {
	overflow: hidden;
	width: 100%;
	height: 100%;
}
</style>
