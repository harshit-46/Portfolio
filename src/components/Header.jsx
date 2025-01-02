import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from "../assets/icons/github.png";
import AppLogo from "../assets/icons/AppLogo.png";
import '../assets/CSS/header.css';

const Header = () => {
    return (
        <div className="navbar-main">
            <nav className="navbar">
                <Link to="/" className="applogo" aria-current="page"><img src={AppLogo} height="80" width="80"/></Link>
                <div className="nav-head">
                    <ul className="links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" target="_blank" rel="noreferrer"><img src={githubLogo} alt="" height="32" width="32" className="githubLogo" /></a>
            </nav>
        </div>
    );
}

export default Header;