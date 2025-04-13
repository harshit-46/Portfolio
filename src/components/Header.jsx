/*

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
                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />

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

*/

import React, { useState } from "react";
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", ref: refs.homeRef },
        { label: "Skills", ref: refs.skillsRef },
        { label: "Education", ref: refs.educationRef },
        { label: "Projects", ref: refs.projectsRef },
        { label: "Contact", ref: refs.contactRef },
    ];

    const handleClick = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar-main bg-black sticky top-0 z-50">
            <nav className="navbar flex items-center justify-between p-4 px-6 md:px-10">
                {/* Logo */}
                <button onClick={() => scrollToSection(refs.welcomeRef)} aria-label="Go to Welcome">
                    <img src={AppLogo} height="80" width="80" alt="App logo" />
                </button>

                {/* Desktop Navigation */}
                <div className="nav-head hidden md:flex">
                    <ul className="links flex space-x-4">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleClick(item.ref)}
                                    className="cursor-pointer group relative text-white"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 h-0.25 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* GitHub Icon (desktop only) */}
                <a
                    href="https://github.com/harshit-46"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hidden md:block"
                >
                    <img src={githubLogo} height="32" width="32" alt="GitHub Logo" />
                </a>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        // Close icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-black px-6 pb-4">
                    <ul className="space-y-4">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleClick(item.ref)}
                                    className="block text-white text-base"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://github.com/harshit-46"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white"
                            >
                                <img
                                    src={githubLogo}
                                    height="28"
                                    width="28"
                                    alt="GitHub Logo"
                                    className="inline-block mr-2"
                                />
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;

