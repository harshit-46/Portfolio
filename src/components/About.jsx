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

            {/* Centered Description */}
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

            {/* Expertise Heading */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-extrabold leading-none inline-block relative">
                    MY<br />
                    <span className="relative inline-block">
                        EXPERTISE
                        <span className="absolute top-0 left-0 w-10 h-10 border-2 border-white rounded-full"></span>
                    </span>
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseData.map(({ number, title, description }) => (
                    <div
                        key={number}
                        onClick={() => toggleCard(number)}
                        className="bg-zinc-900 rounded-xl p-6 relative cursor-pointer transition-all duration-300"
                    >
                        <div className="text-white text-sm font-bold mb-2">({number})</div>
                        <div className="text-2xl font-extrabold mb-2">{title}</div>
                        {openCard === number && (
                            <p className="text-zinc-400 text-base transition-opacity duration-300">
                                {description}
                            </p>
                        )}
                        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-zinc-600 rounded-full text-white text-xl">
                            {openCard === number ? '−' : '+'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

