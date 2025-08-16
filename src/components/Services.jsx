/*

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imgs2 from '../assets/icons/p2.avif';
import imgs3 from '../assets/icons/p3.avif';
import imgs4 from '../assets/icons/p4.avif';
import imgs5 from '../assets/icons/p5.avif';
import imgs1 from '../assets/icons/p1.jpg';
import '../assets/CSS/services.css';
import signature from '../assets/icons/Signature.png';

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

const Services = () => {
    const word1 = "expertise";
    const word2 = "discipline";
    const [hoveredItem, setHoveredItem] = useState(null);
    const navigate = useNavigate();

    const { ref: expertiseRef, inView: expertiseInView } = useInView(0.6);
    const { ref: disciplineRef, inView: disciplineInView } = useInView(0.6);

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Building scalable, high-performance websites.",
            image: imgs4, technologies: ["React", "Node.js", "MongoDB", "Next.js"]
        },
        {
            id: 2,
            title: "UI/UX & Web Design",
            description: "Designing intuitive, engaging digital experiences.",
            image: imgs2, technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing"]
        },
        {
            id: 3,
            title: "Software Development",
            description: "Developing custom software solutions to address specific business challenges.",
            image: imgs5, technologies: ["Python", "Java", "Docker", "Kubernetes"]
        },
        {
            id: 4,
            title: "Ecommerce Solutions",
            description: "Creating seamless, conversion-focused online stores that drive sales and growth.",
            image: imgs3, technologies: ["Shopify", "Stripe", "PayPal", "Magento"]
        },
        {
            id: 5,
            title: "Machine Learning & AI Solutions",
            description: "Developing applications that leverage machine learning and artificial intelligence.",
            image: imgs1, technologies: ["PyTorch", "OpenAI", "Scikit-learn", "Pandas"]
        }
    ];

    const handleServiceClick = (service) => {
        navigate('/ContactForm', { state: { service: service.title } });
    };

    return (
        <div className='min-h-screen bg-black pt-20 relative overflow-hidden'>
            <div className="px-4 md:px-8 relative z-10" ref={expertiseRef}>
                <h1 className="ser-pax text-white text-5xl sm:text-6xl md:text-8xl font-bold">
                    SERVICES
                </h1>
                <span className="absolute left-8 md:left-15 top-4 md:top-7 flex flex-wrap">
                    <span className="ser-pro text-[#ff0000] text-5xl sm:text-8xl pr-4 flex">
                        {word1.split('').map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block transform transition-all duration-500 ease-out
                                ${expertiseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
            </div>

            <div className="bg-black text-white py-8 px-4 sm:px-8 relative">
                <div className='border-b border-gray-800 md:pt-8'></div>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-800 py-8 transition-all duration-500 cursor-pointer overflow-visible"
                        onMouseEnter={() => setHoveredItem(service.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handleServiceClick(service)}
                    >
                        <div className="flex-1 lg:flex-none lg:w-1/4 mb-4 lg:mb-0">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                                {service.title}
                            </h2>
                        </div>
                        <div className="flex-1 lg:w-1/4 mb-4 lg:mb-0 lg:px-8">
                            <p className="text-base font-semibold sm:text-lg text-white leading-relaxed p-4">
                                {service.description}
                            </p>
                        </div>
                        <div className="hidden lg:block lg:w-1/3 px-4 relative overflow-visible">
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 overflow-visible">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className={`w-68 h-68 object-cover rounded-2xl shadow-2xl transition-all duration-500 ease-out transform 
                                    ${hoveredItem === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="flex-1 lg:flex-none lg:w-1/6 flex justify-start lg:justify-end">
                            <div className="grid grid-cols-2 gap-2 max-w-xs justify-start lg:justify-end">
                                {service.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs font-bold px-3 py-1.5 bg-gray-800 text-white rounded-full group-hover:bg-white group-hover:text-black text-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-20 md:px-8 px-4">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="relative" ref={disciplineRef}>
                        <h2 className="text-5xl md:text-8xl tracking-tighter text-white sm:text-6xl font-bold">
                            MOTIVATION
                        </h2>
                        <span className="absolute left-4 md:left-15 top-4 md:top-10 flex flex-wrap">
                            <span className="ser-pro text-[#ff0000] text-5xl sm:text-8xl pr-4 flex">
                                {word2.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block transform transition-all duration-500 ease-out
                                        ${disciplineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                        style={{ transitionDelay: `${index * 0.1}s` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </div>
                    <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white">
                        <div className="md:mt-32 md:mr-12">
                            <p className="mb-4 text-2xl font-medium">
                                More than a job, web design is an outlet for your vision. You have the power to take an idea from concept
                                to reality. Your sites can tell a story, "show off a brand" or change lives. As the web expands, so do the possibilities.
                            </p>
                            <p className='font-medium text-2xl'>
                                As a developer, you get to blend art and technology to create
                                "digital experiences" that inform, entertain, and inspire. Every day is different one day you may be sketching site layouts, the next you're coding up responsive page templates. Web design keeps you on your toes!
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
    );
};

export default Services;

*/



import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imgs2 from '../assets/icons/p2.avif';
import imgs3 from '../assets/icons/p3.avif';
import imgs4 from '../assets/icons/p4.avif';
import imgs5 from '../assets/icons/p5.avif';
import imgs1 from '../assets/icons/p1.jpg';
import '../assets/CSS/services.css';
import signature from '../assets/icons/Signature.png';

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

const Services = () => {
    const word1 = "expertise";
    const word2 = "discipline";
    const [hoveredItem, setHoveredItem] = useState(null);
    const navigate = useNavigate();

    const { ref: expertiseRef, inView: expertiseInView } = useInView(0.6);
    const { ref: disciplineRef, inView: disciplineInView } = useInView(0.6);

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Building scalable, high-performance websites.",
            image: imgs4, technologies: ["React", "Node.js", "MongoDB", "Next.js"]
        },
        {
            id: 2,
            title: "UI/UX & Web Design",
            description: "Designing intuitive, engaging digital experiences.",
            image: imgs2, technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing"]
        },
        {
            id: 3,
            title: "Software Development",
            description: "Developing custom software solutions to address specific business challenges.",
            image: imgs5, technologies: ["Python", "Java", "Docker", "Kubernetes"]
        },
        {
            id: 4,
            title: "Ecommerce Solutions",
            description: "Creating seamless, conversion-focused online stores that drive sales and growth.",
            image: imgs3, technologies: ["Shopify", "Stripe", "PayPal", "Magento"]
        },
        {
            id: 5,
            title: "Machine Learning & AI Solutions",
            description: "Developing applications that leverage machine learning and artificial intelligence.",
            image: imgs1, technologies: ["PyTorch", "OpenAI", "Scikit-learn", "Pandas"]
        }
    ];

    const handleServiceClick = (service) => {
        navigate('/ContactForm', { state: { service: service.title } });
    };

    return (
        <div className='min-h-screen bg-black pt-20 relative overflow-hidden'>
            <div className="px-4 md:px-8 relative z-10" ref={expertiseRef}>
                <h1 className="ser-pax text-white text-5xl sm:text-6xl md:text-8xl font-bold">
                    SERVICES
                </h1>
                <span className="absolute left-8 md:left-15 top-4 md:top-7 flex flex-wrap">
                    <span className="ser-pro text-[#ff0000] text-5xl sm:text-8xl pr-4 flex">
                        {word1.split('').map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block transform transition-all duration-500 ease-out
                                ${expertiseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
            </div>

            <div className="bg-black text-white py-8 px-4 sm:px-8 relative">
                <div className='border-b border-gray-800 md:pt-8'></div>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative flex flex-col lg:flex-row justify-between items-center lg:items-center border-b border-gray-800 py-8 transition-all duration-500 cursor-pointer overflow-visible"
                        onMouseEnter={() => setHoveredItem(service.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handleServiceClick(service)}
                    >
                        <div className="flex-1 lg:flex-none lg:w-1/4 mb-4 lg:mb-0 order-1 lg:order-1 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                                {service.title}
                            </h2>
                        </div>

                        <div className="flex-1 lg:w-1/4 mb-4 lg:mb-0 lg:px-8 order-2 lg:order-2 text-center lg:text-left">
                            <p className="text-base font-semibold sm:text-lg text-white leading-relaxed p-4">
                                {service.description}
                            </p>
                        </div>

                        <div className=" lg:w-1/3 px-4 order-3 lg:order-3 flex justify-center lg:block relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className={`object-cover h-44 w-56 md:h-64 md:w-56 rounded-2xl shadow-2xl transition-all duration-500 ease-out transform ${hoveredItem === service.id
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-100 lg:opacity-0 lg:scale-0'} lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10`}
                                loading="lazy"
                            />
                        </div>

                        <div className="flex-1 lg:flex-none lg:w-1/6 flex justify-center lg:justify-end order-4 lg:order-4 mt-4 lg:mt-0 relative lg:z-20">
                            <div className="grid grid-cols-2 gap-2 max-w-xs justify-center lg:justify-end">
                                {service.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs font-bold px-3 py-1.5 bg-gray-800 text-white rounded-full group-hover:bg-white group-hover:text-black text-center"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-8 md:mt-16 md:px-8 px-4">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="relative" ref={disciplineRef}>
                        <h2 className="text-5xl md:text-8xl tracking-tighter text-white sm:text-6xl font-bold">
                            MOTIVATION
                        </h2>
                        <span className="absolute left-4 md:left-15 top-4 md:top-10 flex flex-wrap">
                            <span className="ser-pro text-[#ff0000] text-5xl sm:text-8xl pr-4 flex">
                                {word2.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block transform transition-all duration-500 ease-out
                                        ${disciplineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                        style={{ transitionDelay: `${index * 0.1}s` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </div>
                    <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white">
                        <div className="md:mt-32 md:mr-12">
                            <p className="mb-4 text-2xl font-medium">
                                More than a job, web design is an outlet for your vision. You have the power to take an idea from concept
                                to reality. Your sites can tell a story, "show off a brand" or change lives. As the web expands, so do the possibilities.
                            </p>
                            <p className='font-medium text-2xl'>
                                As a developer, you get to blend art and technology to create
                                "digital experiences" that inform, entertain, and inspire. Every day is different one day you may be sketching site layouts, the next you're coding up responsive page templates. Web design keeps you on your toes!
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
    );
};

export default Services;