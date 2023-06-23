import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'production' ? '/es-big-screen' : '',
		resolve: {
			alias: {
				'@': pathResolve('src')
			}
		},
		server: {
			port: 3006
		}
  }
})
