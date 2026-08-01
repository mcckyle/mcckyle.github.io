//Filename: App.jsx
//Author: Kyle McColgan
//Date: 26 July 2026
//Description: This file contains the App component for the personal React website.

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

/* Pure Layout Primitive. */
function Section({ children, id, ariaLabel, className = "" })
{
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`section${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}

function App()
{
  return (
    <div className="app-shell">
      <Header />

      <main id="main-content" className="site-main">
        <Section id="mission" ariaLabel="Mission"><Mission /></Section>
        <Section id="projects" ariaLabel="Projects"><Projects /></Section>
        <Section id="skills" ariaLabel="Skills"><Skills /></Section>
        <Section id="about" ariaLabel="About Me"><AboutMe /></Section>
        <Section id="experience" ariaLabel="Experience"><Experience /></Section>
        <Section id="contact" ariaLabel="Contact"><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
