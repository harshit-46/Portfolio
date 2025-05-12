/*

import React, { useState } from 'react';
import '../assets/CSS/about.css';

const expertiseData = [
    {
        number: 1,
        title: 'APP DESIGN',
        description:
            "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    },
    {
        number: 2,
        title: 'WEB DESIGN',
        description:
            'Polish animations and microinteractions that add delight. Every detail matters when sculpting an web.',
    },
    {
        number: 3,
        title: 'FRAMER',
        description:
            'The process involves building virtual 3D models and materials, setting lighting, and then rendering the final images.',
    },
    {
        number: 4,
        title: 'UX STRATEGY',
        description:
            'Design experiences with the user in mind, backed by research and behavioral insights to boost engagement.',
    },
    {
        number: 5,
        title: 'MOTION DESIGN',
        description:
            'Create engaging transitions and animations to guide the user and enhance interactive storytelling.',
    },
];

const About = () => {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (number) => {
        setOpenCard(openCard === number ? null : number);
    };

    return (
        <div className="bg-black text-white px-4 md:px-20 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-[100px] font-bold leading-tight tracking-tight">
                    MORE ABOUT<br />HARSHIT<span className="text-8xl ml-1">©</span>
                </h1>
            </div>

            <div className="flex justify-center mb-12">
                <div className="overflow-hidden rounded-[50%/35%] w-60 h-80 md:w-[488px] md:h-[619px] border-2 border-gray-600">
                    <img
                        src="/your-image.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-20">
                <p className="mb-6">
                    I'm a creative frontend developer with a love for clean code and bold design. With a foundation in modern web technologies like React and Tailwind CSS, I bring ideas to life with a balance of functionality and aesthetic.
                </p>
                <p className="mb-6">
                    My work combines logic and beauty, always aiming for experiences that feel intuitive. Whether it's building a portfolio, a dashboard, or a fun project like a game, I enjoy solving design problems with elegant interfaces.
                </p>
                <p>
                    Outside of tech, I find inspiration in photography and motion graphics—anything that tells a story visually.
                </p>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-6xl font-extrabold leading-none inline-block relative">
                    MY<br />
                    <span className="relative inline-block">
                        EXPERTISE
                        <span className="absolute top-0 left-0 w-10 h-10"></span>
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseData.map(({ number, title, description }) => (
                    <div
                        key={number}
                        className="relative bg-[#111111] text-white rounded-2xl p-6 lg:p-8 hover:shadow-[0_0_0_1px_#ffffff1a] transition-all duration-300"
                    >
                        <div className="text-sm font-semibold text-gray-400 mb-3">({number})</div>
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase mb-4">
                            {title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                            {description}
                        </p>
                        <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center border border-white/20 rounded-full text-white text-xl hover:bg-white hover:text-black transition">
                            +
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default About;

*/


import React, { useState } from 'react';
import '../assets/CSS/about.css';
import signature from '../assets/icons/Signature.png';

const expertiseData = [
    {
        number: 1,
        title: 'APP DESIGN',
        description:
            "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    },
    {
        number: 2,
        title: 'WEB DESIGN',
        description:
            'Polish animations and microinteractions that add delight. Every detail matters when sculpting an web.',
    },
    {
        number: 3,
        title: 'FRAMER',
        description:
            'The process involves building virtual 3D models and materials, setting lighting, and then rendering the final images.',
    },
    {
        number: 4,
        title: 'UX STRATEGY',
        description:
            'Design experiences with the user in mind, backed by research and behavioral insights to boost engagement.',
    },
    {
        number: 5,
        title: 'MOTION DESIGN',
        description:
            'Create engaging transitions and animations to guide the user and enhance interactive storytelling.',
    },
];

const About = () => {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (number) => {
        setOpenCard(openCard === number ? null : number);
    };

    return (
        <div className="bg-black text-white px-4 md:px-20 py-24">
            {/* Centered Heading */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-[100px] font-bold leading-tight tracking-tight">
                    MORE ABOUT<br />HARSHIT<span className="text-8xl ml-1">©</span>
                </h1>
            </div>

            {/* Centered Image */}
            <div className="flex justify-center mb-12">
                <div className="overflow-hidden rounded-[50%/35%] w-60 h-80 md:w-[488px] md:h-[619px] border-2 border-gray-600">
                    <img
                        src="/your-image.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="text-center text-white max-w-4xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                    I'M A CREATIVE FRONTEND DEVELOPER BASED IN INDIA.<br />
                    MY PASSION FOR BOLD INTERFACES, CLEAN CODE, AND USER-CENTRIC DESIGN SHINES THROUGH MY WORK.
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed px-4">
                    I specialize in modern web technologies like React and Tailwind CSS to bring ideas to life. My approach merges
                    function and design to create intuitive, elegant digital experiences. I enjoy experimenting with{" "}
                    <span className="italic font-semibold text-white">unexpected solutions</span> and believe great design tells a story
                    and solves a problem at the same time.
                </p>

                <div className="mt-10">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block bg-white text-black font-bold py-3 px-6 rounded-full shadow hover:bg-gray-200 transition"
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>


            {/* Expertise Heading */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-extrabold leading-none inline-block relative">
                    MY<br />
                    <span className="relative inline-block">
                        EXPERTISE
                        <span className="absolute top-0 left-0 w-10 h-10"></span>
                    </span>
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseData.map(({ number, title, description }) => (
                    <div
                        key={number}
                        className="relative bg-[#0a0a0a] text-white rounded-xl p-6 lg:p-8 border border-[#1c1c1c] hover:shadow-md transition-all duration-300"
                    >
                        {/* Plus Icon */}
                        <div className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white/70 text-lg hover:bg-white hover:text-black transition">
                            +
                        </div>

                        {/* Index */}
                        <div className="text-white/60 text-sm font-semibold mb-2">({number})</div>

                        {/* Title */}
                        <h3 className="text-2xl font-extrabold tracking-tight uppercase mb-4">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 text-base leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Motivation Section */}
            <div className="mt-28 px-4 md:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Heading */}
                    <div>
                        <h2 className="text-5xl font-extrabold">MOTIVATION</h2>
                    </div>

                    {/* Text Content */}
                    <div className="text-white text-lg md:text-xl leading-relaxed space-y-6">
                        <p>
                            More than a job, web design is an outlet for your vision. You have the power to take an idea from concept
                            to reality. Your sites can tell a story, <span className="italic font-semibold">"show off a brand"</span>,
                            or change lives. As the web expands, so do the possibilities. You also have the flexibility to work
                            remotely or in a fun agency setting. And nothing beats the rush of seeing your live sites in action.
                        </p>

                        <p>
                            As a web designer, you get to blend art and technology to create{" "}
                            <span className="italic font-semibold">"digital experiences"</span> that inform, entertain, and inspire.
                            Every day is different – one day you may be sketching site layouts on paper, the next you're coding up
                            responsive page templates. Web design keeps you on your toes!
                        </p>

                        {/* Signature */}
                        <img
                            src={signature}
                            alt="Signature"
                            className="w-32 pt-4"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
