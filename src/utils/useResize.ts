import { ref, Ref, onMounted, onBeforeUnmount } from "vue"

// 默认适配宽高
export const width = 1920
export const height = 1080

export const useResize = (boxRef: Ref<HTMLElement>, w: number = width, h: number = height) => {
  const scale = ref(1)
  function resize() {
    // 浏览器宽高
    const ww = window.innerWidth
    const wh = window.innerHeight

    // 计算缩放比例
    if (ww / wh > w / h) {
      scale.value = wh / h
    } else {
      scale.value = ww / w
    }
    boxRef.value.style.transform = 'scale(' + scale.value + ')'
  }

  onMounted(() => {
    resize()

    window.addEventListener('resize', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    scale
  }
}