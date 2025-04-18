import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    open: true,
  },
})
