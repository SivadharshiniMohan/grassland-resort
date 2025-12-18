import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: /src\/.*\.[jt]sx?$/,
  })],
  server: {
    port: 3001,
  },
  publicDir: 'public',
  build: {
    minify: 'esbuild',
  }
})
