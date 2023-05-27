<template>
  <div ref="boxRef" class="es-box">
		{{ store.title }}
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useScreenStore } from '@/store'
import { useResize } from '@/utils/useResize'

const store = useScreenStore()

const boxRef = ref()

useResize(boxRef)

</script>
<style lang='scss' scoped>
.es-box {
  --es-screen-width: 1920px;
  --es-screen-height: 1080px;
  position: absolute;
  user-select: none;
  top: 50%;
  left: 50%;
  width: var(--es-screen-width);
  height: var(--es-screen-height);
  margin-left: calc(var(--es-screen-width) * 0.5 - var(--es-screen-width));
  margin-top: calc(var(--es-screen-height) * 0.5 - var(--es-screen-height));
  background-size: 100% 100%;
  background-color: pink;
}
</style>
