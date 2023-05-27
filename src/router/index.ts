import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Screen from '@/views/screen/index.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/screen'
	},
	{
		path: '/screen',
		component: Screen
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
