//Filename: vite.config.js
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the Vite config file for the personal React website.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Always '/' for user/organization GitHub Pages site
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
