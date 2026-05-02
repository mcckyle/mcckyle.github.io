//Filename: App.jsx
//Author: Kyle McColgan
//Date: 1 May 2026
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
function Section({ children, className = "" })
{
  return (
    <section className={`section ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}

function App()
{
  return (
    <div className="app-shell">
      <Header />

      <main id="main-content" className="site-main">
        <Section><Mission /></Section>
        <Section><Projects /></Section>
        <Section><Skills /></Section>
        <Section><AboutMe /></Section>
        <Section><Experience /></Section>
        <Section><Contact /></Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
