//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 31 October 2026
//Description: This file contains the Contact component for the React personal project.

import React from "react";
import "./Contact.css";

const CONTACTS = Object.freeze([
  { id: "github", label: "GitHub", value: "github.com/mcckyle", href: "https://www.github.com/mcckyle", newTab: true, },
  { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/kylemccolgan", href: "https://www.linkedin.com/in/kylemccolgan/", newTab: true, },
  { id: "location", label: "Location", value: "South Saint Louis, Missouri, USA", },
  { id: "resume", label: "Resume", value: "View PDF", href: "/Kyle-McColgan-Resume-May-2026.pdf", newTab: true, },
]);

function Contact()
{
  return (
    <>
      <header className="section-header">
        <h2 id="contact-title">
          Contact
        </h2>

        <p className="section-intro">
          Connect with me or explore my professional background.
        </p>
      </header>

      <address className="contact">
        <ul className="contact-list" aria-labelledby="contact-title">
          {CONTACTS.map((item) => (
            <li key={item.id} className="contact-entry surface-card">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  className="contact-link"
                  href={item.href}
                  {...(item.newTab && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <span>{item.value}</span>
                  {item.newTab && (
                    <span aria-hidden="true">↗</span>
                  )}
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
