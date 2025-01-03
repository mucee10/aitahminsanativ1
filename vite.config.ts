import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      timeout: 60000,
      overlay: true,
      protocol: 'ws',
      host: 'localhost',
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
