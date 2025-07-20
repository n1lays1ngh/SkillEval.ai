import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // ⚠️ ADD THIS 'server' BLOCK FOR LOCAL DEVELOPMENT PROXYING
  server: {
    proxy: {
      '/api': { // Any requests from your React app starting with /api
        target: 'http://127.0.0.1:8000', // Your local FastAPI server
        changeOrigin: true, // Needed for virtual hosts
        // No 'rewrite' is necessary here because your FastAPI routes
        // already include the '/api' prefix (e.g., @app.post("/api/analyze-profile")).
        // Vite will correctly forward '/api/analyze-profile' to 'http://127.0.0.1:8000/api/analyze-profile'.
      },
    },
  },
})