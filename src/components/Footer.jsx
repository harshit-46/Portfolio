/*

import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import BackToTopBotton from './Top';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
                <div className="text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Harshit. All rights reserved.</p>
                    <p className="text-xs mt-1">Built with ❤️ by Harshit Gupta</p>
                </div>
                <div className="flex gap-5">
                    <a href="https://www.instagram.com/_harshit.25/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <IoLogoInstagram size={24} />
                    </a>
                    <a href="https://x.com/harshit__25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <BsTwitterX size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/harshithere/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <TfiLinkedin size={22} />
                    </a>
                    <a href="https://github.com/harshit-46" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FiGithub size={24} />
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <BackToTopBotton/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


*/


import React from 'react';
import signature from '../assets/icons/sign.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 flex flex-col items-center space-y-8">

            {/* Signature Image */}
            <div className="w-48">
                <img
                    src={signature}
                    alt="Harshit Signature"
                    className="w-full object-contain"
                />
            </div>

            {/* Small Footer Text */}
            <p className="text-gray-400 text-sm tracking-wide">
                © 2025 Harshit. All Rights Reserved.
            </p>

        </footer>
    );
};

export default Footer;
