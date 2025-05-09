//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 9 May 2025
//Description: Contains the React component for the website projects section.

import React from 'react';

function Projects() {
    return (
        <section id="projects" aria-label="Projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>Automated Snapshot Management Script:</strong> A Bash script designed to automate and manage system snapshots using Snapper. This project enhances system reliability by creating, managing, and restoring snapshots efficiently. The system automatically transfers snapshot contents to a local host for external storage, ensuring minimal storage usage while maintaining comprehensive versioning. The script is lightweight, user-friendly, and integrates seamlessly with Linux environments.
                </li>

                <li>
                    <strong>ShowMeTasks:</strong> A full-stack to-do list application built with Java, React, and Spring Boot. ShowMeTasks provides a streamlined user experience for task management, featuring responsive design, robust backend logic, and a secure API for seamless interaction between the frontend and backend. This project emphasizes clean architecture and effective use of RESTful services.
                </li>
            </ul>
        </section>
    );
}

export default Projects;
