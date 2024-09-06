import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

// Convert import.meta.url to __dirname
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Vite configuration
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Adjust to .ts if you are using TypeScript
      name: 'vue3-datatable',
      fileName: (format) => `vue3-datatable.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  plugins: [vue()],
});
