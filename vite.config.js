import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Place les dépendances dans un chunk séparé
          }
          if (id.includes('src/components')) {
            return 'components'; // Place les composants dans un autre chunk
          }
        },
      },
    },
  },
})
