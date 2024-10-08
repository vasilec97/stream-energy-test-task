import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
/// <reference types="vite-plugin-svgr/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
