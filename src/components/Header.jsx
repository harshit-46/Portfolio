import React from 'react';
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

export default Header;