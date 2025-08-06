/*


import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiMongodb,
    SiExpress,
    SiPython,
    SiHtml5,
    SiCss3,
    SiCplusplus,
    SiFigma,
    SiFramer,
    SiTrello,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
} from "react-icons/si";
import '../assets/CSS/about.css';

export default function About() {
    const word1 = "about";
    const word2 = "me";

    const techStack = [
        { name: "Figma", icon: <SiFigma size={32} style={{ color: '#F24E1E' }} /> },
        { name: "Framer", icon: <SiFramer size={32} style={{ color: '#0055FF' }} /> },
        { name: "HTML", icon: <SiHtml5 size={32} style={{ color: '#E34F26' }} /> },
        { name: "React", icon: <SiReact size={32} style={{ color: '#61DAFB' }} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} /> },
        { name: "JavaScript", icon: <SiJavascript size={32} style={{ color: '#F7DF1E' }} /> },
        { name: "MongoDB", icon: <SiMongodb size={32} style={{ color: '#47A248' }} /> },
        { name: "Express", icon: <SiExpress size={32} style={{ color: '#000000' }} /> },
        { name: "Python", icon: <SiPython size={32} style={{ color: '#3776AB' }} /> },
        { name: "CSS", icon: <SiCss3 size={32} style={{ color: '#1572B6' }} /> },
        { name: "C++", icon: <SiCplusplus size={32} style={{ color: '#00599C' }} /> },
        { name: "Trello", icon: <SiTrello size={32} style={{ color: '#0079BF' }} /> },
        { name: "Pandas", icon: <SiPandas size={32} style={{ color: '#150458' }} /> },
        { name: "Numpy", icon: <SiNumpy size={32} style={{ color: '#013243' }} /> },
        { name: "Scikit Learn", icon: <SiScikitlearn size={32} style={{ color: '#F7931E' }} /> },
    ];

    return (
        <main className="bg-black text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <p className="pl-6 text-6xl font-bold about-link tracking-normal">
                    I'M A CREATIVE FULL STACK DEVELOPER <br /> BASED IN INDIA.
                    MY PASSION FOR BOLD <br /> INTERFACES, ELEGANT TYPOGRAPHY, <br /> AND USER CENTRIC DESIGN SHINES <br /> THROUGH MY WORK.
                </p>

                <span className="absolute left-10 sm:left-20 top-80 sm:top-56 flex flex-wrap">
                    <span className="about-pro text-[#ff0000] text-6xl sm:text-9xl pr-4 flex">
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

                    <span className="about-pro text-6xl sm:text-9xl text-[#ff0000] flex">
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

            <div className="max-w-3xl mx-auto pt-12 space-y-4 text-lg font-medium leading-relaxed px-4">
                <p>
                    Hi 👋, I am Harshit. I specialize in modern web technologies like React, Tailwind CSS, and various web frameworks to bring ideas to life. My approach merges function and design to create intuitive, elegant digital experiences.
                </p>
                <p>
                    Currently pursuing my B.Tech in Computer Science with a focus on AI and Data Science, I enjoy blending algorithms with creativity to solve real-world problems.
                </p>
                <p>
                    I believe technology should be accessible and intelligent. My mission is to build intuitive tools that make life easier and smarter.
                </p>
                <p>
                    Outside coding, I’m deeply interested in design, love solving DSA problems, and enjoy creating smooth UX experiences that users actually love.
                </p>
            </div>


            <div className="relative max-w-6xl mx-auto mt-24 px-4">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    My Tech Stack
                </h2>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

                    <div className="overflow-hidden group">
                        <div className="flex w-max space-x-6 animate-scroll-horizontal group-hover:[animation-play-state:paused]">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-md transition duration-300 hover:scale-105"
                                >
                                    <div className="text-3xl text-black">{tech.icon}</div>

                                    <div className="absolute bottom-[-2rem] text-sm text-white bg-blue-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        {tech.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}


*/

import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiMongodb,
    SiExpress,
    SiPython,
    SiHtml5,
    SiCss3,
    SiCplusplus,
    SiFigma,
    SiFramer,
    SiTrello,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
} from "react-icons/si";
import '../assets/CSS/about.css';

export default function About() {
    const word1 = "about";
    const word2 = "me";

    const techStack = [
        { name: "Figma", icon: <SiFigma size={32} style={{ color: '#F24E1E' }} /> },
        { name: "Framer", icon: <SiFramer size={32} style={{ color: '#0055FF' }} /> },
        { name: "HTML", icon: <SiHtml5 size={32} style={{ color: '#E34F26' }} /> },
        { name: "React", icon: <SiReact size={32} style={{ color: '#61DAFB' }} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} /> },
        { name: "JavaScript", icon: <SiJavascript size={32} style={{ color: '#F7DF1E' }} /> },
        { name: "MongoDB", icon: <SiMongodb size={32} style={{ color: '#47A248' }} /> },
        { name: "Express", icon: <SiExpress size={32} style={{ color: '#000000' }} /> },
        { name: "Python", icon: <SiPython size={32} style={{ color: '#3776AB' }} /> },
        { name: "CSS", icon: <SiCss3 size={32} style={{ color: '#1572B6' }} /> },
        { name: "C++", icon: <SiCplusplus size={32} style={{ color: '#00599C' }} /> },
        { name: "Trello", icon: <SiTrello size={32} style={{ color: '#0079BF' }} /> },
        { name: "Pandas", icon: <SiPandas size={32} style={{ color: '#150458' }} /> },
        { name: "Numpy", icon: <SiNumpy size={32} style={{ color: '#013243' }} /> },
        { name: "Scikit Learn", icon: <SiScikitlearn size={32} style={{ color: '#F7931E' }} /> },
    ];

    return (
        <main className="bg-black text-white min-h-screen py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <p className="pl-6 text-6xl font-bold about-link tracking-normal">
                    I'M A CREATIVE FULL STACK DEVELOPER <br /> BASED IN INDIA.
                    MY PASSION FOR BOLD <br /> INTERFACES, ELEGANT TYPOGRAPHY, <br /> AND USER CENTRIC DESIGN SHINES <br /> THROUGH MY WORK.
                </p>
                <span className="absolute left-10 sm:left-20 top-80 sm:top-56 flex flex-wrap">
                    <span className="about-pro text-[#ff0000] text-6xl sm:text-9xl pr-4 flex">
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
                    <span className="about-pro text-6xl sm:text-9xl text-[#ff0000] flex">
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
            <div className="max-w-3xl mx-auto pt-12 space-y-4 text-lg font-medium leading-relaxed px-4">
                <p>
                    Hi 👋, I am Harshit. I specialize in modern web technologies like React, Tailwind CSS, and various web frameworks to bring ideas to life. My approach merges function and design to create intuitive, elegant digital experiences.
                </p>
                <p>
                    Currently pursuing my B.Tech in Computer Science with a focus on AI and Data Science, I enjoy blending algorithms with creativity to solve real-world problems.
                </p>
                <p>
                    I believe technology should be accessible and intelligent. My mission is to build intuitive tools that make life easier and smarter.
                </p>
                <p>
                    Outside coding, I'm deeply interested in design, love solving DSA problems, and enjoy creating smooth UX experiences that users actually love.
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
                                        <div className="text-3xl text-black">
                                            {tech.icon}
                                        </div>
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