import { ref, onMounted, onBeforeUnmount } from "vue"

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
	const { w = width, h = height, fullScreen = false, delay = 100 } = options
	const screenRef = ref()
  const scale = ref(1)
  function resize() {
    // 浏览器宽高
    const clientWidth = document.body.clientWidth
    const clientHeight = document.body.clientHeight

    // 计算缩放比例
		const scaleW = clientWidth / w
		const scaleH = clientHeight / h
    if (clientWidth / clientHeight > w / h) {
      scale.value = scaleH
    } else {
      scale.value = scaleW
    }

    // screenRef.value.style.transform = 'scale(' + scale.value + ')'
		if (fullScreen) {
			screenRef.value.style.transform = `scale(${scaleW}, ${scaleH})`
		} else {
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

/*
用来返回防抖函数的工具函数
*/
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
