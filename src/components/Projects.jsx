import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import projectList from './ProjectData';

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

const useInView = (threshold = 0.6) => {
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

const Projects = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { ref: headingRef, inView } = useInView(0.6);
    const scrollDir = useScrollDirection();
    const { projectId } = useParams();

    const headingClasses = `transform transition-all duration-700 ease-smooth ${inView
            ? 'opacity-100 translate-y-0'
            : scrollDir === 'down'
                ? 'opacity-0 -translate-y-10'
                : 'opacity-0 translate-y-10'
        }`;

    return (
        <div className="min-h-screen px-4 md:px-10 py-24 relative bg-black">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 max-w-7xl mx-auto">
                <h1
                    ref={headingRef}
                    className={`${headingClasses} text-[44px] sm:text-[64px] md:text-[96px] leading-none font-bold tracking-tight text-center md:text-left bg-gradient-to-br from-yellow-400 to-yellow-300 bg-clip-text text-transparent`}
                >
                    FEATURED
                    <br />
                    WORK
                </h1>
                <p className="hidden md:block text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-8 md:mt-0 text-gray-400">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft seamless experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="block cursor-pointer"
                        onClick={() =>
                            navigate(`/projects/${project.id}`, {
                                state: { backgroundLocation: location },
                            })
                        }
                    >
                        <div className="group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] rounded-lg border transition-all duration-500 bg-gradient-to-br from-[#1b1b1b] to-[#222] border-gray-800 shadow-xl">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-500">
                                            {project.title}
                                        </h2>
                                        <p className="font-medium text-gray-400 mb-2">{project.type}</p>
                                        <p className="text-sm text-gray-400/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="ml-4 font-semibold px-3 py-1 rounded-full text-sm border border-gray-700 bg-[#1c1c1c] text-yellow-400">
                                        {project.year}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-yellow-400 to-yellow-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;





/*

// Made by copilot almost same 
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import projectList from './ProjectData';

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

const useInView = (threshold = 0.6) => {
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

const Projects = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { projectId } = useParams();
    const { ref: headingRef, inView } = useInView(0.6);
    const scrollDir = useScrollDirection();

    const headingClasses = `transform transition-all duration-700 ease-smooth ${inView
            ? 'opacity-100 translate-y-0'
            : scrollDir === 'down'
                ? 'opacity-0 -translate-y-10'
                : 'opacity-0 translate-y-10'
        }`;

    return (
        <div className="min-h-screen px-4 md:px-10 py-24 relative bg-black">
            <div className="text-center mb-20 max-w-5xl mx-auto">
                <h1
                    ref={headingRef}
                    className={`${headingClasses} text-[48px] sm:text-[72px] md:text-[96px] leading-tight font-extrabold tracking-tight bg-gradient-to-br from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent`}
                >
                    PROJECTS
                    <br className="md:hidden" />
                    works
                </h1>
                <p className="text-lg md:text-xl leading-relaxed font-medium mt-6 text-gray-400">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft seamless experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="block cursor-pointer"
                        onClick={() =>
                            navigate(`/projects/${project.id}`, {
                                state: { backgroundLocation: location },
                            })
                        }
                    >
                        <div className="group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] rounded-xl border transition-all duration-500 bg-gradient-to-br from-[#1a1a1a] to-[#222] border-gray-800 shadow-xl">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-500">
                                            {project.title}
                                        </h2>
                                        <p className="font-medium text-gray-400 mb-2">{project.type}</p>
                                        <p className="text-sm text-gray-400/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="ml-4 font-semibold px-3 py-1 rounded-full text-sm border border-gray-700 bg-[#1c1c1c] text-yellow-400">
                                        {project.year}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;


*/