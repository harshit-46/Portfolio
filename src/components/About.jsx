/*


import { useState, useEffect } from 'react';
import { Plus, Download, ArrowRight, Sparkles, Code, Palette, Target, Zap } from "lucide-react";
import signature from '../assets/icons/Signature.png';
import '../assets/CSS/about.css';

const expertiseData = [
    {
        number: 1,
        title: 'APP DESIGN',
        description: "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
        icon: <Code className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        number: 2,
        title: 'WEB DESIGN',
        description: 'Polish animations and microinteractions that add delight. Every detail matters when sculpting a web experience.',
        icon: <Palette className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-500'
    },
    {
        number: 3,
        title: 'FRAMER',
        description: 'Building virtual 3D models and materials, setting lighting, and rendering stunning final experiences.',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'from-green-500 to-emerald-500'
    },
    {
        number: 4,
        title: 'UX STRATEGY',
        description: 'Design experiences with the user in mind, backed by research and behavioral insights to boost engagement.',
        icon: <Target className="w-6 h-6" />,
        color: 'from-orange-500 to-red-500'
    },
    {
        number: 5,
        title: 'MOTION DESIGN',
        description: 'Create engaging transitions and animations to guide the user and enhance interactive storytelling.',
        icon: <Zap className="w-6 h-6" />,
        color: 'from-indigo-500 to-purple-500'
    },
];

export default function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <main className="bg-black text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-blackrounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x / 10,
                        top: mousePosition.y / 10,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h1 className={`text-center font-bold tracking-tight mb-20 sm:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                        ABOUT ME
                    </span>
                </h1>

                <section className={`text-center max-w-6xl mx-auto mb-28 sm:mb-40 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="backdrop-blur-sm bg-black rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            I'M A CREATIVE FRONTEND DEVELOPER BASED IN INDIA.<br />
                            MY PASSION FOR BOLD INTERFACES, ELEGANT TYPOGRAPHY, AND USER-CENTRIC DESIGN SHINES THROUGH MY WORK.
                        </h2>
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 max-w-4xl mx-auto">
                            I specialize in modern web technologies like React, Tailwind CSS, and various web frameworks to bring ideas to life. My approach merges
                            function and design to create intuitive, elegant digital experiences. I enjoy experimenting with <span className="italic font-semibold text-cyan-400 relative">
                                "unexpected solutions"
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                            </span> and believe great design tells a story and solves a problem at the same time.
                        </p>
                        <div className="mt-10">
                            <a
                                href="https://drive.google.com/file/d/1Bobdd2gRXL6-r2sMy2zhQFp4Vi_tYjze/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm md:text-lg px-8 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform"
                            >
                                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                Download Resume
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className={`mb-28 sm:mb-40 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-6xl sm:text-7xl md:text-8xl leading-none font-bold tracking-tight text-left mb-12 text-white">
                        MY<br />EXPERTISE
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                        {expertiseData.map(({ number, title, description, icon, color }, index) => {
                            const colSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
                            return (
                                <div
                                    key={number}
                                    className={`relative ${colSpan} bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg text-white rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[320px] group overflow-hidden transform hover:scale-105`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className="absolute inset-0 overflow-hidden">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                style={{
                                                    left: `${20 + i * 30}%`,
                                                    top: `${10 + i * 25}%`,
                                                    animationDelay: `${i * 200}ms`
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute top-6 right-6 flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/20 text-white/60 group-hover:border-white/60 group-hover:text-white transition-all duration-300 group-hover:rotate-90 transform">
                                        <Plus className="w-6 h-6" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${color} opacity-80`}>
                                                {icon}
                                            </div>
                                            <div className="text-white/70 text-sm font-semibold">({number})</div>
                                        </div>
                                        <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                            {title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className={`mb-28 sm:mb-40 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="relative">
                            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                MOTIVATION
                            </h2>
                        </div>
                        <div className="text-lg md:text-xl leading-relaxed space-y-8 text-gray-300">
                            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                                <p className="mb-4">
                                    More than a job, web design is an outlet for your vision. You have the power to take an idea from concept
                                    to reality. Your sites can tell a story, <span className="italic font-semibold text-cyan-400 relative">
                                        "show off a brand"
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                                    </span>,
                                    or change lives. As the web expands, so do the possibilities.
                                </p>
                                <p>
                                    As a web designer, you get to blend art and technology to create <span className="italic font-semibold text-purple-400 relative">
                                        "digital experiences"
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"></span>
                                    </span>
                                    that inform, entertain, and inspire. Every day is different – one day you may be sketching site layouts,
                                    the next you're coding up responsive page templates. Web design keeps you on your toes!
                                </p>
                            </div>
                            <figure className="flex justify-center md:justify-start">
                                <div className="relative group">
                                    <img
                                        src={signature}
                                        alt="Harshit's handwritten signature"
                                        className="w-40 pt-4 filter brightness-0 invert"
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

*/



import '../assets/CSS/about.css';

export default function About() {
    const word1 = "about";
    const word2 = "me";

    return (
        <main className="bg-black text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
            <p className='pl-6 text-6xl font-bold about-link tracking-normal'>I'M A CREATIVE FULL STACK DEVELOPER <br /> BASED IN INDIA.
                    MY PASSION FOR BOLD <br /> INTERFACES, ELEGANT TYPOGRAPHY, <br /> AND USER CENTRIC DESIGN SHINES <br />THROUGH MY WORK.</p>

                {/* Red "about me" text, absolutely positioned */}
                <span className='absolute left-10 sm:left-20 top-80 sm:top-56 flex flex-wrap'>
                    <span className='about-pro text-[#ff0000] text-6xl sm:text-9xl pr-4 flex'>
                        {word1.split('').map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>

                    <span className='about-pro text-6xl sm:text-9xl text-[#ff0000] flex'>
                        {word2.split('').map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-0 animate-fade-in"
                                style={{ animationDelay: `${(word1.length + index) * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
            </div>
        </main>
    );
}
