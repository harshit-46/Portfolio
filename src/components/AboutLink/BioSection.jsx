import React from 'react';

const BioSection = () => (
    <section className="text-center text-white max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-8" id="section-heading">
            I'M A CREATIVE FRONTEND DEVELOPER BASED IN INDIA.<br />
            MY PASSION FOR BOLD INTERFACES, ELEGANT TYPOGRAPHY, AND USER-CENTRIC DESIGN SHINES THROUGH MY WORK.
        </h2>
        <p className="text-white text-lg md:text-xl font-semibold leading-relaxed px-4">
            I specialize in modern web technologies like React, Tailwind CSS, and various web frameworks to bring ideas to life. My approach merges
            function and design to create intuitive, elegant digital experiences. I enjoy experimenting with{" "}
            <span className="italic font-semibold text-white">"unexpected solutions"</span> and believe great design tells a story
            and solves a problem at the same time.
        </p>
        <div className="mt-10">
            <a
                href="https://drive.google.com/file/d/1Bobdd2gRXL6-r2sMy2zhQFp4Vi_tYjze/view"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center overflow-hidden border-2 border-white bg-white text-black font-bold text-sm md:text-lg px-6 py-2 rounded-full group uppercase"
            >
                <span className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out rounded-full z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download Resume</span>
            </a>
        </div>
    </section>
);

export default BioSection;
