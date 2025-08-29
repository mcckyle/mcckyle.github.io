//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 28 August 2025
//Description: Contains the React component for the website contact header section.

import React from 'react';
import profilePic from '/images/kdm-ocean-01.png';

function Header()
{
    return (
        <header className="site-header">
            <div className="header-text">
                <h1>Kyle D. McColgan</h1>
                <h2>Technology Professional</h2>
            </div>
            <img className="header-img" src={profilePic} alt="Kyle at the beach." />
        </header>
    );
}

export default Header;
