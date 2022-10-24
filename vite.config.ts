import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: process.cwd(),
  plugins: [Unocss(), react()],
  server: {
    port: 8888,
    open: 'http://localhost:8888',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // input: {
      //     main: resolve(__dirname, "index.html"),
      //     subpage: resolve(__dirname, "subpage.html"),
      // },
    },
  },
})
