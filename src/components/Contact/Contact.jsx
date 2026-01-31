//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the Contact component for the personal React project.

import React from "react";
import "./Contact.css";

function Contact()
{
  const contacts = [
    { label: "GitHub", value: "github.com/mcckyle", href: "https://www.github.com/mcckyle", },
    { label: "LinkedIn", value: "linkedin.com/in/kylemccolgan", href: "https://www.linkedin.com/in/kylemccolgan/", },
    { label: "Location", value: "South Saint Louis, Missouri, USA", },
    { label: "Resume", value: "View PDF", href: "/Kyle-McColgan-Resume-January-2026.pdf", },
  ];

  return (
      <section
        id="contact"
        className="section-content"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>

        <address className="contact-list">
          <ul>
            {contacts.map((item, i) => (
              <li key={i} className="contact-item">
                <span className="contact-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
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
      </section>
    );
}

export default Contact;
