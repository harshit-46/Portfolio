import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import projectList from "./ProjectData";
import "../assets/CSS/project.css";

const useScrollDirection = () => {
    const [direction, setDirection] = useState("down");
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
                ticking.current = false;
                return;
            }
            setDirection(currentScrollY > lastScrollY.current ? "down" : "up");
            lastScrollY.current = currentScrollY;
            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(updateScrollDir);
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return direction;
};

const useInView = (threshold = 0.6) => {
    const [inView, setInView] = useState(false);
    const observerRef = useRef(null);

    const ref = useCallback(
        (node) => {
            if (!node) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(
                ([entry]) => setInView(entry.isIntersecting),
                { threshold }
            );
            observerRef.current.observe(node);
        },
        [threshold]
    );

    useEffect(() => {
        return () => observerRef.current?.disconnect();
    }, []);

    return { ref, inView };
};

const AnimatedWord = ({ word, inView }) => (
    <>
        {word.split("").map((letter, index) => (
            <span
                key={index}
                className={`pro-heading text-[#ff0000] text-6xl md:text-8xl inline-block transform transition-all duration-500 ease-out ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                    transitionDelay: inView ? `${index * 0.1}s` : "0s",
                }}
            >
                {letter}
            </span>
        ))}
    </>
);

const Projects = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { projectId } = useParams();

    const { ref: headingRef, inView } = useInView(0.6);
    const scrollDir = useScrollDirection();

    const headingClasses = `transform transition-all duration-700 ease-smooth will-change-transform will-change-opacity ${
        inView
            ? "opacity-100 translate-y-0"
            : scrollDir === "down"
            ? "opacity-0 -translate-y-10"
            : "opacity-0 translate-y-10"
    }`;

    const circleRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (circleRef.current) {
            circleRef.current.style.left = `${x}px`;
            circleRef.current.style.top = `${y}px`;
            circleRef.current.style.transform = "translate(-50%, -50%)";
        }
    }, []);

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
                    <h2 className="pro-pax text-white text-5xl md:text-8xl font-bold uppercase">
                        Projects
                    </h2>

                    <div className="absolute left-10 top-2 md:left-[10.5rem] md:top-[2rem] flex">
                        <AnimatedWord word="works" inView={inView} />
                    </div>
                </div>
                <p className="hidden md:block text-lg md:text-xl leading-relaxed font-medium max-w-xl mt-8 md:mt-0 text-white">
                    My creative spirit comes alive in the digital realm. With nimble
                    fingers flying across the keyboard, I craft seamless experiences out
                    of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto md:px-4">
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        className="block cursor-pointer"
                        onClick={handleProjectClick.bind(null, project.id)}
                    >
                        <div
                            className="group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] rounded-lg transition-all duration-500 shadow-xl h-80 md:h-96 will-change-transform"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={project.img}
                                alt={project.title || "Project image"}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth will-change-transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            {hoveredId === project.id && (
                                <div
                                    ref={circleRef}
                                    className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#bb3542] backdrop-blur-md flex items-center justify-center pointer-events-none transition-transform duration-75 ease-out"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">
                                    {project.title}
                                </h2>
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