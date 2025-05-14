import React from 'react';
import signature from '../assets/icons/Signature.png';
import profileImg from '../assets/icons/Profile.jpg';
import '../assets/CSS/about.css';

const About = () => {
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

    return (
        <main className="bg-black text-white px-4">
            {/* Intro Header */}
            <h1 className="text-center font-bold tracking-tight mb-16">
                <span className="block text-[40px] sm:text-[60px] md:text-[100px] leading-[1]">
                    MORE ABOUT
                </span>
                <span className="block text-[40px] sm:text-[60px] md:text-[100px] leading-[1.2] mt-[-16px]">
                    HARSHIT©
                </span>
            </h1>

            {/* Profile Section */}
            <section className="flex justify-center mb-20">
                <figure className="overflow-hidden rounded-[50%/35%] w-60 h-80 md:w-[488px] md:h-[659px] border-2 border-white-600">
                    <img
                        src={profileImg}
                        alt="Harshit's profile picture"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </section>

            {/* Bio Section */}
            <section className="text-center text-white max-w-5xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-8" id="section-heading">
                    I'M A CREATIVE FRONTEND DEVELOPER BASED IN INDIA.<br />
                    MY PASSION FOR BOLD INTERFACES, ELEGANT TYPOGRAPHY, AND USER-CENTRIC DESIGN SHINES THROUGH MY WORK.
                </h2>
                <p className="text-white text-lg md:text-xl font-semibold leading-relaxed text-center max-w-4xl mx-auto px-4">
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
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            Download Resume
                        </span>
                    </a>
                </div>
            </section>


            {/* EXPERTISE SECTION */}
            <section className="mb-4 md:px-4">
                <h1 className="text-[44px] sm:text-[64px] md:text-[96px] leading-none font-bold tracking-tight md:text-left">
                    MY<br />EXPERTISE
                </h1>
            </section>

            <section className="max-w-9xl mx-auto md:px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                {expertiseData.map(({ number, title, description }, index) => {
                    const colSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

                    return (
                        <article
                            key={number}
                            className={`relative ${colSpan} bg-[#0a0a0a] text-white rounded-xl p-6 lg:p-8 border border-[#1c1c1c] hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px]`}
                        >
                            {/* Plus icon hidden on mobile */}
                            <div className="absolute top-5 right-5 hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-white/80 text-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
                                +
                            </div>



                            <div className='mt-16'>
                                <div className="text-white text-sm font-semibold mb-2">({number})</div>
                                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4">{title}</h3>
                                <p className="text-white/60 text-[15px] leading-relaxed font-medium">{description}</p>
                            </div>
                        </article>
                    );
                })}
            </section>


            {/* Motivation Section */}
            <section className="mt-28 px-4">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-[50px] font-bold">MOTIVATION</h1>
                    </div>
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
                        <figure>
                            <img
                                src={signature}
                                alt="Harshit's handwritten signature"
                                className="w-32 pt-4"
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
