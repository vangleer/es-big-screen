import { ref, onMounted, Ref } from 'vue'
import Sortable from 'sortablejs'

export const useSortable = (listRef: Ref<any[]>) => {

	const containerRef = ref()

	onMounted(() => {
		Sortable.create(containerRef.value!, {
			swapThreshold: 1,
			animation: 150,
			onUpdate(e) {
				console.log('onUpdate', e, e.oldIndex, e.newIndex)
				const item = listRef.value[e.oldIndex]
				listRef.value.splice(e.oldIndex, 1)
				listRef.value.splice(e.newIndex, 0, item)
			}
		})
	})

	return {
		containerRef
	}
}
