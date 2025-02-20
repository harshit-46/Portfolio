{/*import React from 'react';
import { NavLink } from 'react-router-dom';
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = () => {
    return (
        <header className="navbar-main">
            <nav className="navbar border-b border-stone-800">
                <NavLink to="/" className="applogo" alt="App logo" aria-current="page"><img src={AppLogo} height="80" width="80"/></NavLink>
                <div className="nav-head">
                    <ul className="links">
                        <li><NavLink to="/home" className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#52a8ff] transition duration-200'
                                        : 'text-gray-300 hover:text-white transition duration-200'
                                }>Home</NavLink></li>
                        <li><NavLink to="/skills" className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#52a8ff] transition duration-200'
                                        : 'text-gray-300 hover:text-white transition duration-200'
                                }>Skills</NavLink></li>
                        <li><NavLink to="/education" className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#52a8ff] transition duration-200'
                                        : 'text-gray-300 hover:text-white transition duration-200'
                                }>Education</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#52a8ff] transition duration-200'
                                        : 'text-gray-300 hover:text-white transition duration-200'
                                }>Projects</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) =>
                                    isActive
                                        ? 'text-[#52a8ff] transition duration-200'
                                        : 'text-gray-300 hover:text-white transition duration-200'
                                }>Contact</NavLink></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" alt="Github logo" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" className="githubLogo" /></a>
            </nav>
        </header>
    );
}

export default Header;*/}


import React from "react";
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = ({ scrollToSection, refs }) => {
    return (
        <header className="navbar-main">
            <nav className="navbar border-b border-stone-800 flex items-center justify-between p-4">
                {/* App Logo */}
                <button onClick={() => scrollToSection(refs.welcomeRef)} aria-label="Go to Welcome">
                    <img src={AppLogo} height="80" width="80" alt="App logo" loading="lazy" />
                </button>

                {/* Navigation Links */}
                <div className="nav-head">
                    <ul className="links flex space-x-4">
                        <li><button onClick={() => scrollToSection(refs.homeRef)}>Home</button></li>
                        <li><button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button></li>
                        <li><button onClick={() => scrollToSection(refs.educationRef)}>Education</button></li>
                        <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
                        <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
                    </ul>
                </div>

                {/* GitHub Link */}
                <a href="https://github.com/harshit-46" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <img src={githubLogo} height="32" width="32" alt="GitHub Logo" className="githubLogo" loading="lazy" />
                </a>
            </nav>
        </header>
    );
};

export default Header;
