import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import projectList from './ProjectData';
import '../assets/CSS/project.css';

const useScrollDirection = () => {
    const [direction, setDirection] = useState('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
            setDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', updateScrollDir, { passive: true });
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

    const animatedWord = useMemo(() => "works".split(""), []);

    const handleProjectClick = useCallback(
        (id) => {
            navigate(`/projects/${id}`, { state: { backgroundLocation: location } });
        },
        [navigate, location]
    );

    return (
        <div className="min-h-screen px-4 md:py-24 relative bg-black">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:px-4 mx-auto">
                <div className="relative inline-block" ref={headingRef}>
                    <h2 className="pro-pax text-white text-4xl md:text-8xl font-bold uppercase">
                        Projects
                    </h2>

                    <div className="absolute left-[6.5rem] top-[0.35rem] md:left-[10.5rem] md:top-[2rem] flex space-x-0.3">
                        {animatedWord.map((letter, index) => (
                            <span
                                key={index}
                                className={`pro-heading text-[#ff0000] text-4xl md:text-8xl inline-block transform transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: inView ? `${index * 0.1}s` : '0s',
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>

                </div>
                <p className="hidden md:block text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-8 md:mt-0 text-white">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft seamless experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto md:px-4">
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        className="block cursor-pointer"
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <div className="group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] rounded-lg transition-all duration-500 shadow-xl h-80 md:h-96">
                            <img
                                src={project.img}
                                alt={project.title || "Project image"}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed opacity-90">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;