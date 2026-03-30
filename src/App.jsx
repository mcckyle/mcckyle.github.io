//Filename: App.jsx
//Author: Kyle McColgan
//Date: 26 March 2026
//Description: This file contains the main App component for the personal React website.

import React from "react";

import Header from "./components/Header/Header.jsx";
import Mission from "./components/Mission/Mission.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  return (
    <>
      <Header />

      <main id="main-content" className="site-main">
        <section className="section">
          <div className="container"><Mission /></div>
        </section>
        <section className="section">
          <div className="container"><Projects /></div>
        </section>
        <section className="section">
          <div className="container"><Skills /></div>
        </section>
        <section className="section">
          <div className="container"><AboutMe /></div>
        </section>
        <section className="section">
          <div className="container"><Experience /></div>
        </section>
        <section className="section">
          <div className="container"><Contact /></div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
