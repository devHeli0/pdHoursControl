import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true, // Generate source maps for debugging
  },
  plugins: [
    react(), // Use the Vite plugin for React
  ],
  // Development server options
  server: {
    host: true, // Use the default host
    port: 3001,
  },
})
