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

  },
  server: {
    proxy: {
    '/start': {
      target: 'http://nginx.127.0.0.1.nip.io:9000/',
      changeOrigin: true,
      xfwd: true,
      },
      '/oauth2/auth': {
      target: 'http://127.0.0.1:4180/',
      changeOrigin: true,
      xfwd: true,
      },
    '/oauth2/': {
      target: 'http://nginx.127.0.0.1.nip.io:9000/',
      changeOrigin: true,
      xfwd: true,
      },
      '/configuration': {
      target: 'http://nginx.127.0.0.1.nip.io:9000/',
      changeOrigin: true,
      xfwd: true,
      },
      '/public/login/start': {
      target: 'http://nginx.127.0.0.1.nip.io:9000/',
      changeOrigin: true,
      xfwd: true,
      },
      '/realms': {
      target: 'http://nginx.127.0.0.1.nip.io:9000/',
      changeOrigin: true,
      xfwd: true,
      },

    },



  }
});
