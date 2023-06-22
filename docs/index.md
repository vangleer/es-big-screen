# es-big-screen 大屏可视化 (demo版)

基于 vue3 + echarts + amap(高德地图) + pinia 开发的大屏可视化项目，支持拖拽布局

<p align="center">
	<a href="https://www.npmjs.com/package/vue" target="_blank">
		<img src="https://img.shields.io/badge/vuejs-vue3.x-green" alt="vue">
	</a>
	<a href="https://www.npmjs.com/package/typescript" target="_blank">
		<img src="https://img.shields.io/badge/typescript-%3E4.0.0-blue" alt="typescript">
	</a>
</p>
<p>&nbsp;</p>


## 主要功能

- 大屏适配
- echarts 组件封装
- 拖拽布局
- 地图组件封装

## 大屏的适配

大屏适配常用的方案有 `rem + vw/vh` 和 `scale`

rem + vw/vh方案是一种结合使用rem（相对于根元素字体大小的单位）和vw/vh（视窗宽度/高度的单位）来实现大屏的适配。它的优点是灵活性高、兼容性好、适应性强，但需要进行计算，可能存在误差问题，且代码复杂度较高。

另一种是scale方案，它通过改变页面根元素的缩放比例来实现大屏适配。它的优点是实现简单，不需要进行计算，且适用范围广，但可能会存在像素失真问题。

这里我们使用 scale 缩放这种方式来实现

```typescript
// src/utiles/useResize.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 默认适配宽高
export const width = 1920
export const height = 1080

type ResizeType = {
	w?: number
	h?: number
	fullScreen?: boolean
	delay?: number
}

export const useResize = (options: ResizeType = {}) => {
	const {
		w = width,
		h = height,
		fullScreen = false,
		delay = 100
	} = options
	// 缩放元素
	const screenRef = ref()
  const scale = ref(1)
  function resize() {
    // 浏览器宽高
    const clientWidth = document.body.clientWidth
    const clientHeight = document.body.clientHeight

    // 计算宽高缩放比例
		const scaleW = clientWidth / w
		const scaleH = clientHeight / h

    if (clientWidth / clientHeight > w / h) {
			// 如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度和设计稿高度之比
      scale.value = scaleH
    } else {
			// 如果浏览器的宽高比小于设计稿的宽高比，就取浏览器宽度和设计稿宽度之比
      scale.value = scaleW
    }

		if (fullScreen) {
			// 如果不在乎缩放失真的情况，可以设置全屏
			screenRef.value.style.transform = `scale(${scaleW}, ${scaleH})`
		} else {
			// 否则选择适配比例缩放
			screenRef.value.style.transform = 'scale(' + scale.value + ')'
		}
  }

	const resizeDelay = debounce(resize, delay)
  onMounted(() => {
		if (screenRef.value) {
			resize()
    	window.addEventListener('resize', resizeDelay)
		}
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeDelay)
  })

  return {
    scale,
		screenRef
  }
}
```

核心代码在resize函数中

- 首先要确定我们的设计稿尺寸，默认是 `1920 x 1080`
- 分别计算浏览器和设计图宽高比
- 如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度:设计稿高度，否则取浏览器宽度:设计稿宽度
- 如果想全屏缩放，就分别使用宽高比进行缩放
- 处于性能考虑，useResize中使用了防抖，实现如下

```typescript
function debounce(callback, delay) {
	let timerId
	return function (event) {
		// 如果上次事件还没有真正处理, 清除
		if (timerId) {
			clearTimeout(timerId)
		}

		// 发事件发生指定事件后才调用处理事件的回调函数
		// 启动定时器, 只是准备真正处理
		timerId = setTimeout(() => {
			// 正在处理事件
			callback.call(null, event)
			// 删除准备处理的标记
			timerId = null
		}, delay)
	}
}
```

### 使用就非常简单了

将 `useResize` 返回的 screenRef 赋值需要缩放的元素即可

```html

<template>
	<div ref="screenRef"></div>
</template>

<script setup lang='ts'>
import { useResize } from '@/utils/useResize'
const { screenRef } = useResize()
</script>

```

## echarts 组件封装

### 安装依赖

```sh
yarn add echarts
```

### 封装Char组件
