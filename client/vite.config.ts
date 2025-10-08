import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     proxy: {
      '/api': {
        //Running on IIS Epress:
        target: 'https://localhost:44330',
        //If running https Kestrel:
        //target: 'https://localhost:7299',
        changeOrigin: true, 
        secure: false,                    
      }
    }
  }
})
