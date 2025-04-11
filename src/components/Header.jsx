import React from "react";
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = ({ scrollToSection, refs }) => {
    return (
        <header className="navbar-main">
            <nav className="navbar flex items-center justify-between p-4">
                <button onClick={() => scrollToSection(refs.welcomeRef)} aria-label="Go to Welcome">
                    <img src={AppLogo} height="80" width="80" alt="App logo" />
                </button>
                <div className="nav-head">
                    <ul className="links flex space-x-4">
                        {[
                            { label: "Home", ref: refs.homeRef },
                            { label: "Skills", ref: refs.skillsRef },
                            { label: "Education", ref: refs.educationRef },
                            { label: "Projects", ref: refs.projectsRef },
                            { label: "Contact", ref: refs.contactRef },
                        ].map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => scrollToSection(item.ref)}
                                    className="cursor-pointer group relative text-white"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 h-0.25 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <a href="https://github.com/harshit-46" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <img src={githubLogo} height="32" width="32" alt="GitHub Logo" />
                </a>
            </nav>
        </header>
    );
};

export default Header;