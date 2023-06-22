import { defineStore } from 'pinia'

export const useScreenStore = defineStore({
	id: 'screen',
	state: () => {
		return {
			title: '大屏可视化'
		}
	}
})
