//Filename: App.jsx
//Author: Kyle McColgan
//Date: 28 September 2025
//Description: This file contains the React root component for my personal website.

import React from 'react';

import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import Dedication from './components/Dedication/Dedication.jsx';
import Mission from './components/Mission/Mission.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import History from './components/History/History.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

function App()
{
  return (
    <div className="app">
      <Header />
      <main className="site-main">
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
