import { defineConfig } from "vite";
import { resolve } from "path";
import eslint from "vite-plugin-eslint";
import refreshUtils from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';


const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [
    // reactRefresh(),
    // react(),
    refreshUtils(),
    eslint(),
    svgr({
      exportAsDefault: true,
      jsxRuntime: "automatic",
      svgrOptions: {
        jsxRuntime: "automatic",
        prettier: true,
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
  server: {
    publicDir: "public",
    
  },
});
