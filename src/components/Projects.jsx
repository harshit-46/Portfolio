import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

    const headingClasses = `transform transition-all duration-700 ease-smooth ${
        inView
            ? 'opacity-100 translate-y-0'
            : scrollDir === 'down'
            ? 'opacity-0 -translate-y-10'
            : 'opacity-0 translate-y-10'
    }`;

    return (
        <div
            style={{
                background: 'linear-gradient(145deg, hsl(220, 13%, 9%), hsl(220, 13%, 11%))',
            }}
            className="min-h-screen px-4 md:px-10 py-24 relative"
        >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 max-w-7xl mx-auto">
                <h1
                    ref={headingRef}
                    className={`${headingClasses} text-[44px] sm:text-[64px] md:text-[96px] leading-none font-bold tracking-tight text-center md:text-left`}
                    style={{
                        background: 'linear-gradient(135deg, hsl(47, 96%, 55%, 0.9), hsl(47, 96%, 45%, 0.7))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    FEATURED
                    <br />
                    WORK
                </h1>
                <p
                    className="hidden md:block text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-8 md:mt-0"
                    style={{ color: 'hsl(217.9, 10.6%, 64.9%)' }}
                >
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft seamless experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="block"
                        onClick={() =>
                            navigate(`/projects/${project.id}`, {
                                state: { backgroundLocation: location },
                            })
                        }
                    >
                        <div
                            className="group relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-[1.02] rounded-lg border transition-all duration-500"
                            style={{
                                background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                                borderColor: 'hsl(217.2, 32.6%, 20%)',
                                boxShadow: '0 25px 50px -12px hsl(220, 13%, 4%, 0.6)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 35px 60px -12px hsl(47, 96%, 55%, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 25px 50px -12px hsl(220, 13%, 4%, 0.6)';
                            }}
                        >
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
                                        <h2
                                            className="text-xl font-bold transition-colors duration-500"
                                            style={{ color: 'hsl(210, 40%, 98%)' }}
                                            onMouseEnter={(e) =>
                                                (e.target.style.color = 'hsl(47, 96%, 55%)')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.target.style.color = 'hsl(210, 40%, 98%)')
                                            }
                                        >
                                            {project.title}
                                        </h2>
                                        <p
                                            className="font-medium mb-2"
                                            style={{ color: 'hsl(217.9, 10.6%, 64.9%)' }}
                                        >
                                            {project.type}
                                        </p>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'hsl(217.9, 10.6%, 64.9%, 0.8)' }}
                                        >
                                            {project.description}
                                        </p>
                                    </div>
                                    <div
                                        className="ml-4 font-semibold px-3 py-1 rounded-full text-sm border"
                                        style={{
                                            backgroundColor: 'hsl(220, 13%, 13%)',
                                            color: 'hsl(47, 96%, 55%)',
                                            borderColor: 'hsl(217.2, 32.6%, 20%)',
                                        }}
                                    >
                                        {project.year}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{
                                    background:
                                        'linear-gradient(135deg, hsl(47, 96%, 55%, 0.9), hsl(47, 96%, 45%, 0.7))',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;