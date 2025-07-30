import type { Plugin } from 'vite'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'

function removeComments(): Plugin {
  return {
    generateBundle: (_options, bundle): void => {
      let chunks = Object.values(bundle).filter(chunk => chunk.type === 'chunk')
      for (let chunk of chunks) {
        chunk.code = chunk.code
          .replaceAll(/^[\t ]*\/\*[\s\S]*?\*\/\s*$|^[\t ]*\/\/.*$/gmu, '')
          .replaceAll(/^[\t ]*[\n\r]/gmu, '')
      }
    },
    name: 'remove-comments',
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      external: (id: string) =>
        !id.startsWith('.') &&
        !path.isAbsolute(id) &&
        id !== 'stylelint-define-config',
      output: {
        preserveModules: false,
        exports: 'auto',
      },
    },
    lib: {
      entry: path.resolve(import.meta.dirname, 'index.ts'),
      fileName: (_format, entryName) => `${entryName}.js`,
      name: '@azat-io/stylelint-config',
      formats: ['es'],
    },
    minify: false,
  },
  plugins: [
    dts({
      include: [
        path.join(import.meta.dirname, 'environment.d.ts'),
        path.join(import.meta.dirname, 'index.ts'),
      ],
    }),
    removeComments(),
  ],
})
