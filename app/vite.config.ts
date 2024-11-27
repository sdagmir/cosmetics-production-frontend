import { defineConfig } from 'vite'
import {VitePWA} from "vite-plugin-pwa"
import react from '@vitejs/plugin-react'
import mkcert from'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
      mkcert(),
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Cosmetic Production",
          short_name: "Cosmetics",
          start_url: "/cosmetics-production-frontend",
          display: "standalone",
          background_color: "#fdfdfd",
          theme_color: "#4caf50",
          orientation: "portrait-primary",
          icons: [
            {
              src: "logo192.png",
              type: "image/png",
              sizes: "192x192"
            },
            {
              src: "logo512.png",
              type: "image/png",
              sizes: "512x512",
              purpose: 'any',
            }
          ],
        },
      })],
    base: "/cosmetics-production-frontend",
    server: {
        port: 3000,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
          },
        proxy: {
            "/api": {
                target: "http://192.168.124.80:8000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            "/web-img": {
                target: "http://192.168.124.80:9000",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});