<template>
	<div id="mapContainer"></div>
</template>

<script setup lang='ts'>
import { onMounted, shallowRef } from 'vue'
import '@amap/amap-jsapi-types'
import AMapLoader from '@amap/amap-jsapi-loader'

const map = shallowRef<AMap.Map | null>(null)

function initMap() {
  AMapLoader.load({
		key: '1e7166f6d0b8f7f9be02f4f0f0944a26', // 申请好的Web端开发者Key，首次调用 load 时必填
		version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
		plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
	}).then((MyAMap: typeof AMap)=>{
		map.value = new MyAMap.Map('mapContainer',{
			mapStyle: 'amap://styles/darkblue'
		})
	}).catch(e=>{
		console.log(e);
	})
}

onMounted(() => {
	initMap()
})

defineExpose({
	map
})
</script>

<style lang='scss'>
#mapContainer {
	width: 100%;
	height: 100%;
}
.amap-logo, .amap-copyright {
	opacity: 0;
}
</style>
