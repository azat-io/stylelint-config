import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      external: id =>
        !id.startsWith('.') &&
        !path.isAbsolute(id) &&
        id !== 'eslint-define-config',
    },
    lib: {
      entry: path.join(__dirname, 'index.js'),
      fileName: 'index',
      formats: ['cjs'],
    },
  },
})
