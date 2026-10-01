//Filename: App.jsx
//Author: Kyle McColgan
//Date: 29 September 2026
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

/* Pure Layout Primitive with Automatic Accessibility Mapping. */
function Section({ children, id, headingId, className = "" })
{
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      className={classes}
      aria-labelledby={headingId} //Links the landmark to the child's heading.
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
        <Section id="mission" headingId="mission-title"><Mission /></Section>
        <Section id="projects" headingId="projects-title"><Projects /></Section>
        <Section id="skills" headingId="skills-title"><Skills /></Section>
        <Section id="about" headingId="about-title"><AboutMe /></Section>
        <Section id="experience" headingId="experience-title"><Experience /></Section>
        <Section id="contact" headingId="contact-title"><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
