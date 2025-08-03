import React, { useState } from "react";
import AppLogo from "../assets/icons/AppLogo.png";
import '../assets/CSS/header.css';

const Header = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "HOME", ref: refs.homeRef },
        { label: "PROJECT", ref: refs.projectsRef },
        { label: "ABOUT", ref: refs.aboutRef },
        { label: "SERVICES", ref: refs.servicesRef },
    ];

    const handleClick = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar-main bg-black z-50 sticky top-0">
            <nav className="navbar flex items-center justify-between p-4 px-6 md:px-10">
                <button onClick={() => scrollToSection(refs.homeRef)} aria-label="Go to Home">
                    <img src={AppLogo} height="80" width="80" alt="App logo" />
                </button>

                <div className="nav-head hidden md:flex items-center">
                    <ul className="links flex space-x-2 mr-8">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleClick(item.ref)}
                                    className="cursor-pointer text-white text-sm hover:text-gray-300 transition-colors duration-300"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    
                    <button
                        onClick={() => handleClick(refs.contactRef)}
                        className="bg-white cursor-pointer text-black px-6 py-2 text-sm font-medium rounded-2xl hover:bg-gray-200 transition-colors duration-300"
                    >
                        CONTACT
                    </button>
                </div>

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
                            className="pb-2"
                        >
                            <button
                                onClick={() => handleClick(item.ref)}
                                className="text-white text-sm w-full text-left hover:text-gray-300 transition-colors duration-300"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                    <li className="border-b border-white/20 pb-2">
                        <button
                            onClick={() => handleClick(refs.contactRef)}
                            className="text-white text-sm w-full text-left hover:text-gray-300 transition-colors duration-300"
                        >
                            CONTACT
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;