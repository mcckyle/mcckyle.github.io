//Filename: main.jsx
//Author: Kyle McColgan
//Date: 27 August 2025
//Description: This file contains the main React component for my personal website.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles.css';
import './index.css';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
