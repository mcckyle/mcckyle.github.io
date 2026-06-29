//Filename: App.jsx
//Author: Kyle McColgan
//Date: 28 June 2026
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
function Section({ children, id, label, className = "" })
{
  return (
    <section
      id={id}
      aria-label={label}
      className={`section ${className}`}
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
        <Section id="mission" label="Mission"><Mission /></Section>
        <Section id="projects" label="Projects"><Projects /></Section>
        <Section id="skills" label="Skills"><Skills /></Section>
        <Section id="about" label="About Me"><AboutMe /></Section>
        <Section id="experience" label="Experience"><Experience /></Section>
        <Section id="contact" label="Contact"><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
