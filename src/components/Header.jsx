// NOTE: Have to center links of a Navbar vertically.

import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";
import '../assets/CSS/header.css';

const Header = () => {
    return (
        <div className="bg-black border-b border-stone-800 sticky top-0 z-50 ${isScrolled ? 'bg-opacity-60 shadow-md' : ''}`}"> {/* bg-opacity-60 shadow-md navbar ${isScrolled ? 'scrolled' : ''}`} */}
            <nav id="navbar" className="max-w-7xl mx-auto py-2 flex items-center justify-between h-14">
                <Link to="/" className="flex-shrink-0" aria-current="page"><img src={AppLogo} height="80" width="80" className="ml-2 sm:ml-0" /></Link>
                <div id="nav-head" className="hidden sm:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/home" className="text-xl font-normal text-stone-400 px-3 py-2 rounded hover:text-white">Home</Link></li>
                        <li><Link to="/skills" className="text-xl font-normal text-stone-400 px-3 py-2 rounded hover:text-white">Skills</Link></li>
                        <li><Link to="/education" className="text-xl font-normal text-stone-400 px-3 py-2 rounded hover:text-white">Education</Link></li>
                        <li><Link to="/projects" className="text-xl font-normal text-stone-400 px-3 py-2 rounded hover:text-white">Projects</Link></li>
                        <li><Link to="/contact" className="text-xl font-normal text-stone-400 px-3 py-2 rounded hover:text-white">Contact Me</Link></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" target="_blank" rel="noreferrer"><img src={githubLogo} alt="" height="32" width="32" className="ml-4 sm:ml-2" /></a>
            </nav>
        </div>
    );
}

export default Header;