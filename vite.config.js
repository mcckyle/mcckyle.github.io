//Filename: vite.config.js
//Author: Kyle McColgan
//Date: 9 May 2025
//Description: Contains the Vite config file for the website.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Always '/' for user/organization GitHub Pages site
})
