import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
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
        <main className="min-h-screen w-full bg-black pt-24 overflow-hidden relative">
            <div className="flex justify-center items-center space-x-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_3px_rgba(34,197,94,0.6)]" />
                <p className="text-white/70 font-semibold">AVAILABLE FOR FREELANCE</p>
            </div>

            <header className="font-bold leading-none flex flex-col md:flex-row justify-center gap-x-16 items-center text-center md:text-left">
                <h1
                    id="name1"
                    className="text-white text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] p-0 m-0 select-none cursor-pointer"
                >
                    HARSHIT
                </h1>
                <h1
                    id="name2"
                    className="text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif p-0 m-0 select-none cursor-pointer"
                >
                    GUPTA
                </h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center px-4 pb-12 mt-8">
                <div className="order-1 md:order-none text-white text-center md:text-left">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <span className="text-4xl font-bold text-purple-400">
                                <CountUp end={15} duration={2} />+
                            </span>
                            <span className="text-sm text-white mt-1">Projects Completed</span>
                        </div>
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <span className="text-4xl font-bold text-blue-400">
                                <CountUp end={10} duration={2} />+
                            </span>
                            <span className="text-sm text-white mt-1">Technologies</span>
                        </div>
                        <div>
                            <button>Download Resume</button>
                        </div>
                    </div>
                </div>

                <div
                    onClick={handleOnClick}
                    className={`order-2 md:order-none cursor-pointer transform transition duration-500 ${isStraight ? 'rotate-0' : 'rotate-6'
                        } md:hover:rotate-0 mt-4 md:mt-0`}
                >
                    <img
                        src={myPhoto}
                        alt="Harshit Gupta - Full Stack Developer"
                        className="w-80 h-100 object-cover rounded-2xl border-4 border-white/30 shadow-lg md:-mt-16"
                    />
                </div>

                <div className="order-3 md:order-none text-white text-center md:text-left max-w-md mt-6 md:mt-0 px-2">
                    <p className="text-lg md:text-xl font-medium leading-relaxed">
                        Hi, I'm Harshit, a skilled Full-Stack developer dedicated to creating user-friendly digital experiences.
                    </p>
                    <button
                        className="mt-6 px-6 py-2 bg-white text-black font-semibold cursor-pointer hover:bg-gray-200 transition"
                        onClick={handleBtnClick}
                    >
                        Let's Talk
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;