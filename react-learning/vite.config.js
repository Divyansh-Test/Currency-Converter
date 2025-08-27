// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: [
      '072df692-a519-4978-b99b-4fca61ab57a5-00-22k0c1soj0iq1.sisko.replit.dev'
    ]
  }
})