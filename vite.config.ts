import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite' // Import plugin baru

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan ini di sini
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})