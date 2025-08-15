import React, { useState, useEffect, useRef } from "react";
import {
    SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiPython,
    SiHtml5, SiCss3, SiCplusplus, SiFigma, SiFramer, SiTrello, SiPandas,
    SiNumpy, SiScikitlearn,
} from "react-icons/si";
import "../assets/CSS/about.css";

export default function About() {
    const word1 = "about";
    const word2 = "me";
    const [inView, setInView] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.6 }
        );
        if (headingRef.current) observer.observe(headingRef.current);
        return () => {
            if (headingRef.current) observer.unobserve(headingRef.current);
        };
    }, []);

    const techStack = [
        { name: "Figma", icon: <SiFigma size={32} style={{ color: "#F24E1E" }} /> },
        { name: "Framer", icon: <SiFramer size={32} style={{ color: "#0055FF" }} /> },
        { name: "HTML", icon: <SiHtml5 size={32} style={{ color: "#E34F26" }} /> },
        { name: "React", icon: <SiReact size={32} style={{ color: "#61DAFB" }} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={32} style={{ color: "#06B6D4" }} /> },
        { name: "JavaScript", icon: <SiJavascript size={32} style={{ color: "#F7DF1E" }} /> },
        { name: "MongoDB", icon: <SiMongodb size={32} style={{ color: "#47A248" }} /> },
        { name: "Express", icon: <SiExpress size={32} style={{ color: "#000000" }} /> },
        { name: "Python", icon: <SiPython size={32} style={{ color: "#3776AB" }} /> },
        { name: "CSS", icon: <SiCss3 size={32} style={{ color: "#1572B6" }} /> },
        { name: "C++", icon: <SiCplusplus size={32} style={{ color: "#00599C" }} /> },
        { name: "Trello", icon: <SiTrello size={32} style={{ color: "#0079BF" }} /> },
        { name: "Pandas", icon: <SiPandas size={32} style={{ color: "#150458" }} /> },
        { name: "Numpy", icon: <SiNumpy size={32} style={{ color: "#013243" }} /> },
        { name: "Scikit Learn", icon: <SiScikitlearn size={32} style={{ color: "#F7931E" }} /> },
    ];

    return (
        <main className="bg-black text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <p className="md:pl-6 text-3xl md:text-6xl font-bold about-link tracking-normal">
                    I'M A CREATIVE FULL STACK DEVELOPER <br /> BASED IN INDIA. MY PASSION
                    FOR BOLD <br /> INTERFACES, ELEGANT TYPOGRAPHY, <br /> AND USER
                    CENTRIC DESIGN SHINES <br /> THROUGH MY WORK.
                </p>

                <span
                    ref={headingRef}
                    className="absolute left-10 sm:left-20 top-72 sm:top-56 flex flex-wrap"
                >
                    <span className="about-pro text-[#ff0000] text-6xl sm:text-9xl pr-4 flex">
                        {word1.split("").map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block transform transition-all duration-700 ease-out
                                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>

                    <span className="about-pro text-6xl sm:text-9xl text-[#ff0000] flex">
                        {word2.split("").map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block transform transition-all duration-700 ease-out
                                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: `${(word1.length + index) * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
            </div>

            <div className="about-write max-w-4xl mx-auto md:mt-16 px-6 py-10 text-white text-xl space-y-6">
                <p className="font-semibold text-3xl text-center">
                    Hi 👋, I'm <span className="text-pink-400">Harshit</span> — a web developer and an AI enthusiast.
                </p>

                <p className="leading-relaxed text-center">
                    I specialize in building modern, interactive web applications using
                    <span className="text-white font-medium"> React</span>,
                    <span className="text-white font-medium"> Tailwind CSS</span>, and a wide range of frontend tools and frameworks.
                    Whether it's a portfolio website, a dynamic web app, or a creative UI concept, I love turning ideas into elegant
                    digital solutions that work seamlessly and look beautiful.
                </p>

                <p className="leading-relaxed text-center">
                    I'm currently pursuing a <span className="text-pink-400 font-medium">B.Tech in Computer Science</span> with a
                    specialization in <span className="text-pink-400 font-medium">Artificial Intelligence</span> and
                    <span className="text-pink-400 font-medium"> Data Science</span>. This background not only fuels my interest in
                    smart systems and data-driven technologies but also empowers me to create meaningful applications that solve
                    real-world problems.
                </p>

                <p className="leading-relaxed text-center">
                    Outside development, I'm deeply interested in machine learning and AI, love solving DSA problems, and enjoy creating
                    smooth UX experiences that users actually love.
                </p>

                <p className="leading-relaxed text-center">
                    As I continue to grow, I'm excited to work on projects that blend code, creativity, and intelligence pushing the
                    boundaries of what's possible with modern technology.
                </p>
            </div>



            <div className="relative max-w-6xl mx-auto mt-24 px-4">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    My Tech Stack
                </h2>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="overflow-hidden group p-4">
                        <div className="flex w-max space-x-8 animate-scroll-horizontal group-hover:[animation-play-state:paused]">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center flex-shrink-0 w-24"
                                >
                                    <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <div className="text-3xl text-black">{tech.icon}</div>
                                    </div>
                                    <span className="mt-2 text-sm text-white">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}