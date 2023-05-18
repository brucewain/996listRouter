import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react'
import { resolve } from "path";
import eslint from "vite-plugin-eslint";
import refreshUtils from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";


const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/

export default defineConfig({
  root,
  plugins: [
    refreshUtils(),
    eslint(),
    svgr({
      exportAsDefault: true,
      jsxRuntime: "automatic",
      svgrOptions: {
        // svgr options
        jsxRuntime: "automatic",
        prettier: 'boolean',
       

      },
    }),
  ],
  
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "src/About/index.html"),
        contact: resolve(root, "contact", "src/Contact/index.html"),
      },
    },
  },
});


