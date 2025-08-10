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

    const handleDownload = () => {
        window.open(
            "https://drive.google.com/file/d/1Bobdd2gRXL6-r2sMy2zhQFp4Vi_tYjze/view",
            "_blank"
        );
    }

    return (
        <main className="min-h-screen w-full bg-black pt-12 overflow-hidden relative">
            <div className='flex justify-center'>
                <div className="relative inline-flex items-center px-6 py-3 rounded-full bg-[#111] text-white font-medium text-sm shadow-inner overflow-hidden group">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-white to-gray-300 blur-sm opacity-40 [animation:spin_3s_linear_infinite]"></span>
                    <span className="absolute inset-0 rounded-full bg-[#111] m-[1.5px] z-0"></span>
                    <span className="relative flex h-2 w-2 mr-2 z-10">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="relative z-10 text-base font-medium">Available For Work</span>
                </div>
            </div>

            <header className="font-bold leading-none flex flex-col md:flex-row md:mt-8 justify-center gap-x-16 items-center text-center md:text-left">
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

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center px-6 pb-12 max-w-7xl mx-auto">
                <div className="order-1 md:order-none text-white text-center md:text-left">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center transition-transform duration-300">
                            <span className="text-4xl font-bold text-purple-400">
                                <CountUp end={15} duration={2} />+
                            </span>
                            <span className="text-sm text-white/80 mt-1">Projects Completed</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform duration-300">
                            <span className="text-4xl font-bold text-blue-400">
                                <CountUp end={10} duration={2} />+
                            </span>
                            <span className="text-sm text-white/80 mt-1">Technologies</span>
                        </div>
                        <div className="col-span-2 flex justify-center mt-4">
                            <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg border border-gray-700 hover:from-gray-700 hover:to-gray-800" onClick={handleDownload}>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    onClick={handleOnClick}
                    className={`order-2 md:order-none cursor-pointer transform transition-all duration-500 ${isStraight ? 'rotate-0' : 'rotate-6'
                        } md:hover:rotate-0 mt-4 md:mt-0 hover:scale-105`}
                >
                    <img
                        src={myPhoto}
                        alt="Harshit Gupta - Full Stack Developer"
                        className="w-80 h-96 object-cover rounded-2xl border-4 border-white/20 shadow-2xl md:-mt-8"
                    />
                </div>

                <div className="order-3 md:order-none text-white text-center md:text-left max-w-md mt-6 md:mt-0 px-2">
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
                        Hi, I'm Harshit, a skilled Full-Stack developer dedicated to creating user friendly digital experiences.
                    </p>
                    <button
                        className="mt-6 px-8 py-3 bg-white text-black font-semibold cursor-pointer hover:bg-gray-100"
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