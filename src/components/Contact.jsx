//Filename: Contact.jsx
//Author: Kyle McColgan
//Date: 19 2025
//Description: Contains the React component for the website contact details section.

import React from 'react';

function Contact() {
    return (
        <section id="contact" aria-label="Contact Information">
            <h2>Contact Information</h2>
            <ul>
                <li><strong>GitHub:</strong> <a href="https://www.github.com/mcckyle">github.com/mcckyle</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kylemccolgan/">linkedin.com/in/kylemccolgan</a></li>
                <li><strong>Location:</strong> South Saint Louis, Missouri, United States</li>
                <li><strong>Resume/CV:</strong> <a href="/Kyle-McColgan-Resume-May-2025.pdf" target="_blank" rel="noopener noreferrer">View My Resume (PDF)</a></li>
            </ul>
        </section>
    );
}

export default Contact;
