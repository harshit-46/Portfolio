import React from "react";
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = ({ scrollToSection, refs }) => {
    return (
        <header className="navbar-main">
            <nav className="navbar border-b border-stone-800 flex items-center justify-between p-4">
                <button onClick={() => scrollToSection(refs.welcomeRef)} aria-label="Go to Welcome">
                    <img src={AppLogo} height="80" width="80" alt="App logo"/>
                </button>
                <div className="nav-head">
                    <ul className="links flex space-x-4">
                        <li><button onClick={() => scrollToSection(refs.homeRef)} className="cursor-pointer">Home</button></li>
                        <li><button onClick={() => scrollToSection(refs.skillsRef)} className="cursor-pointer">Skills</button></li>
                        <li><button onClick={() => scrollToSection(refs.educationRef)} className="cursor-pointer">Education</button></li>
                        <li><button onClick={() => scrollToSection(refs.projectsRef)} className="cursor-pointer">Projects</button></li>
                        <li><button onClick={() => scrollToSection(refs.contactRef)} className="cursor-pointer">Contact</button></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <img src={githubLogo} height="32" width="32" alt="GitHub Logo"/>
                </a>
            </nav>
        </header>
    );
};

export default Header;