import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components': path.resolve(__dirname, './src/Components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      },
  }
});
