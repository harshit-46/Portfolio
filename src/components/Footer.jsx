import React from "react";
import logo from "../assets/icons/AppLogo.png";
import "../assets/CSS/footer.css";
//import sign from "../assets/icons/sign.png"
import BackToTopButton from "./Top";

const Footer = () => {
    return (
        <div className="h-96 bg-black text-white flex flex-col md:flex-row">
            <div className="border-2 w-full md:w-1/3 border-green-800">
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
            <div className="footer-links w-full md:w-2/3 border-2 border-red-800">
                
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
            <BackToTopButton/>
        </div>
    );
};

export default Footer;