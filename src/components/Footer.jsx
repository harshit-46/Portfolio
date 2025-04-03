import React from "react";
import logo from "../assets/icons/AppLogo.png";
import "../assets/CSS/footer.css";

const Footer = ({ scrollToSection, refs }) => {
    return (
        <div className="h-96 bg-[#1C1C1C] text-white flex flex-col md:flex-row">
            <div className="border-t w-full md:w-1/3 border-stone-800">
                <img src={logo} height="90px" width="90px" className="ml-32 mt-16" alt="App Logo" />
                <div id="foot-para" className="text-[#78716C] mt-2">
                    Developed by
                    <a
                        href="https://www.linkedin.com/in/harshithere/"
                        className="text-[#52a8ff] hover:text-purple-400 transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Harshit Gupta's LinkedIn Profile"
                    >
                        &nbsp;Harshit Gupta
                    </a>
                    <p className="copyright pt-36 text-[#A3A3A3]">
                        Copyright &#169; {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="footer-links w-full md:w-2/3 border-t border-stone-800">
                <div className="flex flex-col items-start float-left mt-14 pl-44">
                    <h4 id="Main-section" className="mb-4 text-stone-500">USEFUL LINKS</h4>
                    <button onClick={() => scrollToSection(refs.homeRef)} className="text-[#A3A3A3] hover:text-white transition duration-200">
                        Home
                    </button>
                    <button onClick={() => scrollToSection(refs.skillsRef)} className="text-[#A3A3A3] hover:text-white transition duration-200">
                        Skills
                    </button>
                    <button onClick={() => scrollToSection(refs.educationRef)} className="text-[#A3A3A3] hover:text-white transition duration-200">
                        Education
                    </button>
                    <button onClick={() => scrollToSection(refs.projectsRef)} className="text-[#A3A3A3] hover:text-white transition duration-200">
                        Projects
                    </button>
                    <button onClick={() => scrollToSection(refs.contactRef)} className="text-[#A3A3A3] hover:text-white transition duration-200">
                        Contact
                    </button>
                </div>
                <div className="flex flex-col items-start pl-44 mt-14">
                    <h4 id="social-section" className="mb-4 text-stone-500">FOLLOW ME</h4>
                    <a href="https://github.com/harshit-46" className="text-[#A3A3A3] hover:text-white transition duration-200" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a href="https://x.com/harshit__25" className="text-[#A3A3A3] hover:text-white transition duration-200" target="_blank" rel="noopener noreferrer">
                        X (Twitter)
                    </a>
                    <a href="https://www.linkedin.com/in/harshithere/" className="text-[#A3A3A3] hover:text-white transition duration-200" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/_harshit.25/" className="text-[#A3A3A3] hover:text-white transition duration-200" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
