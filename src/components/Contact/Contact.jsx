//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 28 April 2026
//Description: This file contains the Contact component for the React personal project.

import React from "react";
import "./Contact.css";

function Contact()
{
  const contacts = [
    { label: "GitHub", value: "github.com/mcckyle", href: "https://www.github.com/mcckyle", },
    { label: "LinkedIn", value: "linkedin.com/in/kylemccolgan", href: "https://www.linkedin.com/in/kylemccolgan/", },
    { label: "Location", value: "South Saint Louis, Missouri, USA", },
    { label: "Resume", value: "View PDF", href: "/Kyle-McColgan-Resume-February-2026.pdf", },
  ];

  return (
    <>
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>

      <p className="section-intro">
        Find me on the following platforms:
      </p>

      <address className="contact">
        <ul className="contact-list" aria-labelledby="contact-title">
          {contacts.map((item) => (
            <li key={item.label} className="contact-entry">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  className="contact-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </address>
    </>
  );
}

export default Contact;
