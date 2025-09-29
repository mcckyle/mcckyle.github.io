//Filename: main.jsx
//Author: Kyle McColgan
//Date: 28 September 2025
//Description: This file contains the main React component for the personal React project.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles.css';
import './index.css';
import './App.css';

//Dynamic theme loading...
const month = new Date().getMonth(); //0 = January, 11 = December, etc.
import (`./themes/${month}.css`);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
