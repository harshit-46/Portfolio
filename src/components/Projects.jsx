import React, { useEffect, useRef, useState } from 'react';
import project1 from '../assets/icons/p1.png';
import project2 from '../assets/icons/sign.png';
import project3 from '../assets/icons/sign.png';
import project4 from '../assets/icons/sign.png';
import project5 from '../assets/icons/sign.png';
import project6 from '../assets/icons/sign.png';

const useScrollDirection = () => {
    const [direction, setDirection] = useState('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            setDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', updateScrollDir);
        return () => window.removeEventListener('scroll', updateScrollDir);
    }, []);

    return direction;
};

const useInView = (threshold = 0.5) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return { ref, inView };
};

const projectList = [
    {
        title: 'Algoviser',
        type: 'Web Design',
        year: '2024',
        img: project1,
    },
    {
        title: 'NewsMonkey',
        type: 'News App',
        year: '2023',
        img: project2,
    },
    {
        title: 'Transpiler',
        type: 'Language to Language converter',
        year: '2022',
        img: project3,
    },
    {
        title: 'TextUtils App',
        type: 'Mini Game',
        year: '2022',
        img: project4,
    },
    {
        title: 'Chat App',
        type: 'Mini Game',
        year: '2022',
        img: project5,
    },
    {
        title: 'iNoteBook App',
        type: 'Mini Game',
        year: '2022',
        img: project6,
    }
];

const Projects = () => {
    const { ref: headingRef, inView } = useInView(0.6);
    const scrollDir = useScrollDirection();

    const headingClasses = `transform transition-all duration-700 ease-in-out ${inView
            ? 'opacity-100 translate-y-0'
            : scrollDir === 'down'
                ? 'opacity-0 -translate-y-10'
                : 'opacity-0 translate-y-10'
        }`;

    return (
        <div className="bg-black text-white px-4 md:px-10 py-24 min-h-screen border border-yellow-600">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border border-pink-600 mb-20">
                <h1
                    ref={headingRef}
                    className={`${headingClasses} text-[44px] sm:text-[64px] md:text-[96px] leading-none font-bold tracking-tight text-center md:text-left`}
                >
                    FEATURED<br />WORK
                </h1>
                <p className="hidden md:block text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft clear experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl border border-gray-600 overflow-hidden bg-[#111] hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 flex justify-between items-end">
                            <div>
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-400">{project.type}</p>
                            </div>
                            <div className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
                                {project.year}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

