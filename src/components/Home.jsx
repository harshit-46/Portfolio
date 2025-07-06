import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/home.css';
import myPhoto from '../assets/icons/Profile.jpg';

const Home = () => {
    const [isStraight, setIsStraight] = useState(false);
    const navigate = useNavigate();

    const handleOnClick = () => {
        setIsStraight(!isStraight);
    };

    const handleBtnClick = () => {
        navigate('/ContactForm');
    };

    return (
        <div className="min-h-screen w-full bg-black pt-28">
            <div className="flex justify-center items-center space-x-2 md:mt-0 mb-4">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_3px_rgba(34,197,94,0.6)]"></span>
                <p className="text-white/70 font-semibold">AVAILABLE FOR FREELANCE</p>
            </div>
            <div className="font-bold leading-none flex flex-col md:flex-row justify-center gap-x-16 items-center text-center md:text-left">
                <span className="-ml-0 md:-ml-4 text-white text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] p-0 m-0 select-none cursor-pointer" id="name1">
                    HARSHIT
                </span>
                <span className="text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif p-0 m-0 select-none cursor-pointer" id="name2">
                    GUPTA
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center px-4 pb-12 md:px-0 md:pb-0 mt-8">
                <div className="order-1 md:order-none text-white">
                    <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 border border-white rounded bg-white text-black font-semibold">Resume</button>
                    </a>
                </div>
                <div
                    onClick={handleOnClick}
                    className={`order-2 md:order-none cursor-pointer transform transition duration-500 ${isStraight ? 'rotate-0' : 'rotate-6'
                        } md:hover:rotate-0 mt-4 md:mt-0`}
                >
                    <img
                        src={myPhoto}
                        alt="Harshit Gupta's Profile"
                        className="w-80 h-100 object-cover rounded-2xl border-2 border-white shadow-lg md:-mt-16"
                    />
                </div>
                <div className="order-3 md:order-none text-white text-center md:text-left max-w-md mt-6 md:mt-0 px-2 md:px-0">
                    <p className="text-lg md:text-xl font-medium leading-relaxed">
                        Hi, I'm <strong>Harshit</strong>, a passionate Full-Stack developer dedicated to creating user-friendly digital experiences.
                    </p>
                    <button
                        className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
                        onClick={handleBtnClick}
                    >
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
