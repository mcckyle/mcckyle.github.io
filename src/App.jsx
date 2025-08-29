//Filename: App.jsx
//Author: Kyle McColgan
//Date: 27 August 2025
//Description: This file contains the React root component for my personal website.

import React from 'react';

import Header from './components/Header';
import Contact from './components/Contact';
import Dedication from './components/Dedication';
import Mission from './components/Mission';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import History from './components/History';
import Footer from './components/Footer';

import './App.css';

function App()
{
  return (
    <div className="app">
        <Header />
        <main>
          <Contact />
          <Dedication />
          <Mission />
          <AboutMe />
          <Skills />
          <Projects />
          <History />
        </main>
        <Footer />
    </div>
  );
}

export default App;
