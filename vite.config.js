import { copyFile } from 'node:fs/promises'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages has no SPA routing, so a refresh on /<repo>/projects would 404.
// Shipping a copy of index.html as 404.html lets the app load and route it.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  apply: 'build',
  closeBundle: () => copyFile('dist/index.html', 'dist/404.html'),
})

// https://vite.dev/config/
export default defineConfig({
  // On GitHub Pages the site lives under /<repo-name>/; the deploy workflow
  // passes that path in. Locally it runs from the root.
  base: process.env.BASE_PATH || '/',
  plugins: [react(), spaFallback()],
})
