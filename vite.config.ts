import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => ({
  define: {
    isDev: command === 'serve', // window.isDev = true
  },
  plugins: [
    Unocss(),
    react(),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',
    }),
  ],
  server: {
    host: true,
    port: 8888,
    open: 'http://localhost:8888',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // 设置绝对路径src
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets'),
    },
  },
}))
