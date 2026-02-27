//Filename: App.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
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
        <section className="section"><Mission /></section>
        <section className="section"><Projects /></section>
        <section className="section"><Skills /></section>
        <section className="section"><AboutMe /></section>
        <section className="section"><Experience /></section>
        <section className="section"><Contact /></section>
      </main>

      <Footer />
    </>
  );
}

export default App;
