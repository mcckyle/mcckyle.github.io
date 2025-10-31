//Filename: App.jsx
//Author: Kyle McColgan
//Date: 29 October 2025
//Description: This file contains the root component for the personal React website.

import React from "react";

import Header from "./components/Header/Header.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Dedication from "./components/Dedication/Dedication.jsx";
import Mission from "./components/Mission/Mission.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import History from "./components/History/History.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  const sections = [
    Contact,
    Dedication,
    Mission,
    AboutMe,
    Skills,
    Projects,
    History,
  ];

  return (
    <div className="app">
      <Header />
      <main id="main-content" className="site-main">
        {sections.map((Section, index) => (
          <section key={index} style={{ "--i": index + 1 }}>
            <Section />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
