import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/musab-portfolio/",
  plugins: [
    react(),

    // Add Gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    // Add Brotli compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),

    // Add bundle visualizer (generates stats.html)
    visualizer({
      open: false, // Set to true to auto-open in browser
      gzipSize: true,
      brotliSize: true,
      filename: "./dist/stats.html",
    }),

    // Add PWA support with Service Worker (Optimized)
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "**/*.{png,jpg,jpeg,svg,ico,gif,PNG,webp,avif}",
        "**/*.{gltf,glb,bin}",
      ],
      manifest: {
        name: "3D Portfolio - Musab Abu Bshara",
        short_name: "Portfolio",
        description:
          "Interactive 3D portfolio showcasing web development projects",
        theme_color: "#050816",
        background_color: "#050816",
        display: "standalone",
        start_url: "/musab-portfolio/",
        scope: "/musab-portfolio/",
        icons: [
          {
            src: "/musab-portfolio/musab.jpg",
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: "/musab-portfolio/musab.jpg",
            sizes: "512x512",
            type: "image/jpeg",
          },
        ],
      },
      workbox: {
        // Increase file size limit to 15MB for optimized caching
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15 MB

        // Precache critical files only - small assets for fast initial load
        globPatterns: [
          "**/*.{js,css,html,ico,woff,woff2}",
          "**/*.{png,jpg,jpeg,svg,webp,avif}",
        ],

        // Exclude large files from precache (runtime caching instead)
        globIgnores: [
          "**/devicons/**", // Exclude all devicon files (6.75 MB)
          "**/desktop_pc/scene*.{gltf,bin}", // 14+ MB
          "**/planet/scene*.{gltf,bin}", // 2+ MB
          "**/stats.html", // Build analyzer
          "**/*.gz", // Compressed versions
          "**/*.br", // Compressed versions
          // Exclude original large PNGs (use optimized AVIF/WebP instead)
          "**/kasper-landing-*.PNG", // 3+ MB
          "**/thuraa-landing-*.PNG", // 1+ MB
          "**/leon-landing-*.PNG", // 668 KB
          "**/sc-*.png",
          "**/kh-*.png",
          "**/md-*.png",
          "**/ls-*.png",
          "**/ft-*.png",
          "**/g-*.png",
        ],

        // Skip waiting and claim clients immediately
        skipWaiting: true,
        clientsClaim: true,

        // Runtime caching strategies (optimized)
        runtimeCaching: [
          // Google Fonts CSS
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          // Google Fonts Files
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Images - prioritize AVIF/WebP
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif|PNG)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "image-assets",
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 60 * 60 * 24 * 90, // 90 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // 3D Models - cache on first load
          {
            urlPattern: /\.(?:gltf|glb|bin)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "3d-models",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 180, // 180 days (6 months)
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // EmailJS API - network first with fallback
          {
            urlPattern: /^https:\/\/api\.emailjs\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "emailjs-api",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 5, // 5 minutes
              },
            },
          },
          // Navigation requests - network first with cache fallback
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
              networkTimeoutSeconds: 3,
            },
          },
        ],
      },
    }),
  ],

  build: {
    // Enable source maps for better debugging (hidden in production)
    sourcemap: "hidden", // Generates .map files but doesn't reference them in JS files

    // Enable minification with Terser
    minify: "terser",

    // Terser options for aggressive compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
      format: {
        comments: false, // Remove all comments
      },
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],

          // Animation libraries
          animation: ["framer-motion"],

          // React and routing
          "react-vendor": ["react", "react-dom", "react-router-dom"],

          // Email and forms
          utils: ["@emailjs/browser"],
        },
        // Consistent naming for cache stability
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
    ],
  },

  // Include uppercase .PNG imports as assets so Vite's import analysis won't try to parse them as JS
  assetsInclude: ["**/*.PNG", "**/*.png"],
});
