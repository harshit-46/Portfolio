import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";
import '../assets/CSS/header.css';

const Header = () => {
    return (
        <header className="navbar-main">
            <nav className="navbar border-b border-stone-800">
                <Link to="/" className="applogo" alt="App logo" aria-current="page"><img src={AppLogo} height="80" width="80"/></Link>
                <div className="nav-head">
                    <ul className="links">
                        <li><Link to="/home" className='text-white hover:text-blue-500 transition duration-200'>Home</Link></li>
                        <li><Link to="/skills" className='text-white hover:text-blue-500 transition duration-200'>Skills</Link></li>
                        <li><Link to="/education" className='text-white hover:text-blue-500 transition duration-200'>Education</Link></li>
                        <li><Link to="/projects" className='text-white hover:text-blue-500 transition duration-200'>Projects</Link></li>
                        <li><Link to="/contact" className='text-white hover:text-blue-500 transition duration-200'>Contact</Link></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" alt="Github logo" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" className="githubLogo" /></a>
            </nav>
        </header>
    );
}

export default Header;