//Filename: App.jsx
//Date: 21 July 2025
//Author: Kyle McColgan
//Description: This file contains the React root component for the website.

import React from 'react';
import './styles.css';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Dedication from './components/Dedication';
import Mission from './components/Mission';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
        <Header />
        <hr />
        <Contact />
        <hr />
        <Dedication />
        <hr />
        <Mission />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <History />
        <hr />
        <Footer />
    </div>
  );
}

export default App;
