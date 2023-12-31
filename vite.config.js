import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/30NOVEMBER/',
  server: {
    // ...
    serve: {
      // Mengizinkan akses ke berkas atau direktori tertentu
      allow: ['file.txt', 'public/'],
    },
  },
})
