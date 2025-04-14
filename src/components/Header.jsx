import React, { useState } from "react";
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";

const Header = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "HOME", ref: refs.homeRef },
        { label: "SKILLS", ref: refs.skillsRef },
        { label: "EDUCATION", ref: refs.educationRef },
        { label: "PROJECTS", ref: refs.projectsRef },
        { label: "CONTACT", ref: refs.contactRef },
    ];

    const handleClick = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false);  // Close the menu when clicking a nav link
    };

    return (
        <header className="navbar-main bg-black z-50">
            <nav className="navbar flex items-center justify-between p-4 px-6 md:px-10 border-b border-white/10">
                <button onClick={() => scrollToSection(refs.homeRef)} aria-label="Go to Home">
                    <img src={AppLogo} height="80" width="80" alt="App logo" />
                </button>

                <div className="nav-head hidden md:flex">
                    <ul className="links flex space-x-4">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleClick(item.ref)}
                                    className="cursor-pointer group relative text-white"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <a
                    href="https://github.com/harshit-46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block"
                >
                    <img src={githubLogo} height="32" width="32" alt="GitHub Logo" />
                </a>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-[72%] bg-black z-50 px-6 pt-4 pb-6 flex flex-col items-start space-y-6 shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button (X) */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="self-end text-white"
                    aria-label="Close Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <ul className="space-y-4 w-full">
                    {navLinks.map((item) => (
                        <li
                            key={item.label}
                            className="border-b border-white/20 last:border-b-0 pb-2"
                        >
                            <button
                                onClick={() => handleClick(item.ref)}
                                className="text-white text-base w-full text-left"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
