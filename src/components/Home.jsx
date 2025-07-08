import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Code, Zap } from "lucide-react";
import CountUp from 'react-countup';
import '../assets/CSS/home.css';
import myPhoto from '../assets/icons/Profile.jpg';

const Home = () => {
    const [isStraight, setIsStraight] = useState(false);
    const [bubbles, setBubbles] = useState([]);
    const [streaks, setStreaks] = useState([]);
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate();

    const handleOnClick = () => {
        setIsStraight(!isStraight);
    };

    const handleBtnClick = () => {
        navigate('/ContactForm');
    };

    useEffect(() => {
        setIsVisible(true);

        const colors = [
            "bg-purple-400", "bg-pink-400", "bg-blue-400", "bg-cyan-400",
            "bg-green-400", "bg-yellow-400", "bg-red-400", "bg-indigo-400",
            "bg-orange-400", "bg-teal-400", "bg-violet-400", "bg-rose-400",
        ];
        const sizes = ["w-1 h-1", "w-2 h-2", "w-3 h-3", "w-1.5 h-1.5"];
        const opacities = ["opacity-20", "opacity-30", "opacity-40", "opacity-50"];

        const generatedBubbles = [...Array(50)].map((_, i) => ({
            key: i,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: sizes[Math.floor(Math.random() * sizes.length)],
            opacity: opacities[Math.floor(Math.random() * opacities.length)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`
        }));

        const generatedStreaks = [...Array(6)].map((_, i) => ({
            key: i,
            width: `${200 + Math.random() * 300}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            rotation: `${Math.random() * 360}deg`
        }));

        setBubbles(generatedBubbles);
        setStreaks(generatedStreaks);
    }, []);


    return (
        <main className="min-h-screen w-full bg-black pt-28 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
                {bubbles.map(bubble => (
                    <div
                        key={bubble.key}
                        className={`absolute ${bubble.size} ${bubble.color} ${bubble.opacity} rounded-full drifting`}
                        style={{
                            left: bubble.left,
                            top: bubble.top,
                            animationDelay: bubble.animationDelay,
                            filter: "blur(0.5px)",
                        }}
                    />

                ))}
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {streaks.map(streak => (
                    <div
                        key={streak.key}
                        className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent streaking"
                        style={{
                            width: streak.width,
                            left: streak.left,
                            top: streak.top,
                            animationDelay: streak.animationDelay,
                            transform: `rotate(${streak.rotation})`,
                            "--rotation": streak.rotation, 
                        }}
                    />

                ))}
            </div>

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
                    <div className="absolute -top-16 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                        <Code className="w-6 h-6 text-white" />
                    </div>
                    <div
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div
                        className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce"
                        style={{ animationDelay: "1s" }}
                    >
                        <Zap className="w-5 h-5 text-white" />
                    </div>
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