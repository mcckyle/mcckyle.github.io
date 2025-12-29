//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the React component for the personal React project contact details section.

import React from "react";
import "./Contact.css";

function Contact()
{
  const contacts = [
    { label: "GitHub", value: "github.com/mcckyle", href: "https://www.github.com/mcckyle", },
    { label: "LinkedIn", value: "linkedin.com/in/kylemccolgan", href: "https://www.linkedin.com/in/kylemccolgan/", },
    { label: "Location", value: "South Saint Louis, Missouri, USA", },
    { label: "Resume", value: "View PDF", href: "/Kyle-McColgan-Resume-May-2025.pdf", },
  ];

  return (
      <div
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
      </div>
    );
}

export default Contact;
