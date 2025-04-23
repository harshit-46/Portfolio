import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/ContactForm');
    };

    return (
        <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6">
            <p className="text-3xl font-semibold tracking-wider mb-6 text-center">
                LET'S WORK TOGETHER
            </p>

            <button
                onClick={handleBtnClick}
                className="mb-8 px-6 py-3 bg-green-500 text-black font-medium rounded hover:bg-green-400 transition"
            >
                Contact Now
            </button>

            <div className="mb-10">
                <img
                    src="/your-image.jpg" // replace with a real image path or leave blank
                    alt="Contact illustration"
                    className="w-40 h-40 object-cover rounded-full border border-gray-700"
                />
            </div>

            <ul className="flex gap-8 text-sm">
                <li>
                    <a
                        href="https://www.instagram.com/_harshit.25/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        INSTAGRAM
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/harshithere/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        LINKEDIN
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/harshit-46"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        GITHUB
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
