import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import svgo from "vite-plugin-svgo"

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [
    react(),
    // svgo({
    //   svgoConfig: {
    //     plugins: [
    //       { name: "removeDimensions", active: true },
    //       { name: "removeViewBox", active: false },
    //     ],
    //   },
    // }),
  ],
})
