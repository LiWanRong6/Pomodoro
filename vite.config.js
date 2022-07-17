import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

import ViteRadar from 'vite-plugin-radar'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    ViteRadar({
      analytics: {
        id: 'G-EMT7FVLZY7'
      }
    }),
    // PWA 離線瀏覽網頁
    VitePWA({
      // 註冊方式
      // autoUpdate => 自動更新
      registerType: 'autoUpdate',
      workbox: {
        // 清除過時的快取
        cleanupOutdatedCaches: true,
        // 忽略後面的參數
        ignoreURLParametersMatching: [/^[0-9a-zA-Z]*$/],
        // 要緩存哪些檔案
        globPatterns: [
          '**/*.{js,css,html,mp3,woff,eot,ttf,woff2,ico,png,jpg,jpeg,svg,gif}**'
        ]
      },
      manifest: {
        name: 'Pomodoro',
        short_name: 'Pomodoro',
        // APP 說明
        description: '工作 25 分鐘，休息 5 分鐘',
        theme_color: '#143423',
        background_color: '#143423',
        scope: './',
        start_url: './',
        display: 'standalone',
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            size: '192x192',
            typ: 'image/png'
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './img/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './img/icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
