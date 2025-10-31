//Filename: main.jsx
//Author: Kyle McColgan
//Date: 21 October 2025
//Description: This file contains the main React component for the personal React project.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/utilities.css';
import './styles/animations.css';
import './App.css';

//Dynamic theme loading...
const month = new Date().getMonth(); //0 = January, 11 = December, etc.
// import (`./themes/${month}.css`);
import './themes/10.css'; //Uncomment this line for testing purposes...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
