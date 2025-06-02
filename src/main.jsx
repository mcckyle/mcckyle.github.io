//Filename: main.jsx
//Author: Kyle McColgan
//Date: 02 June 2025
//Description: This file contains the main React component for the website.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
