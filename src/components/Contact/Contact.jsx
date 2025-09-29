//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 28 September 2025
//Description: This file contains the React component for the personal React project contact details section.

import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" aria-label="Contact Information">
            <h2>Contact</h2>
            <address className="contact-list">
              <ul>
                <li>
                  <span className="contact-label">GitHub:</span>
                  <a
                    href="https://www.github.com/mcckyle"
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    github.com/mcckyle
                  </a>
                </li>
                <li>
                  <span className="contact-label">LinkedIn:</span>
                    <a
                      href="https://www.linkedin.com/in/kylemccolgan/"
                      target="_blank"
                      rel="noopener noreferrer me"
                    >
                      linkedin.com/in/kylemccolgan
                    </a>
                </li>
                <li>
                  <span className="contact-label">Location:</span>
                  South Saint Louis, Missouri, USA
                </li>
                <li>
                  <span className="contact-label">Resume / CV:</span>
                  <a
                    href="/Kyle-McColgan-Resume-May-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF (opens in a new tab).
                  </a>
                </li>
              </ul>
            </address>
        </section>
    );
}

export default Contact;
