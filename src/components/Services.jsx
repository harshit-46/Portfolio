import React, { useState, useRef } from 'react';
import '../assets/CSS/services.css';

const Services = () => {
    const word1 = "expertise";


    const [hoveredItem, setHoveredItem] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Brand Strategy and Identity",
            description: "Crafting bold, memorable brand identities that resonate.",
            price: "$199.00",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "UI/UX & Web Design",
            description: "Designing intuitive, engaging digital experiences.",
            price: "$299.00",
            image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Web & App Development",
            description: "Building scalable, high-performance websites and apps.",
            price: "$399.00",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Ecommerce Solutions",
            description: "Creating seamless, conversion-focused online stores.",
            price: "$599.00",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        }
    ];

    const handleMouseEnter = (service) => {
        setHoveredItem(service);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setMousePosition({ x: 0, y: 0 });
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) * 0.05;
        const moveY = (y - rect.height / 2) * 0.05;
        setMousePosition({ x: moveX, y: moveY });
    }

    return (
        <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
            <div className="px-8 relative z-10">
                {/* Main Title */}
                <h1 className="ser-pax text-white text-4xl sm:text-6xl md:text-8xl font-bold">
                    SERVICES
                </h1>
                {/* Animated Word - "expertise" */}
                <span className="absolute left-15 top-7 flex flex-wrap">
                    <span className="ser-pro text-[#ff0000] text-5xl sm:text-8xl pr-4 flex">
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
                </span>
            </div>

            <div className="bg-black text-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
                    <div className="space-y-0">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                ref={containerRef}
                                className={`
                relative flex flex-col lg:flex-row lg:justify-between lg:items-center 
                py-12 lg:py-16 border-b border-gray-800 cursor-pointer
                transition-all duration-300 ease-out group
                hover:bg-white/[0.02] hover:pl-5
                `}
                                onMouseEnter={() => handleMouseEnter(service)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                {/* Glowing sweep effect */}
                                <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:w-full" />

                                <div className="flex-1 space-y-4 lg:space-y-6 relative z-10">
                                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight transition-all duration-300">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg lg:text-xl max-w-lg leading-relaxed transition-all duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-6 lg:mt-0 relative z-10">
                                    <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                                        <span className="text-lg font-medium">Starting at {service.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hover Photo */}
                    {hoveredItem && (
                        <div
                            className={`
                fixed top-1/2 right-16 lg:right-24 xl:right-32 
                w-80 lg:w-96 h-60 lg:h-72 rounded-2xl overflow-hidden
                transition-all duration-500 ease-out z-50
                shadow-2xl shadow-black/50
                ${hoveredItem ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
            `}
                            style={{
                                transform: `translateY(-50%) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
                            }}
                        >
                            <img
                                src={hoveredItem.image}
                                alt={hoveredItem.title}
                                className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    )}

                    {/* Mobile-only images */}
                    <div className="lg:hidden mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div key={`mobile-${service.id}`} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white font-bold text-lg">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</h3>
                                    <p className="text-gray-300 text-sm mt-1">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;