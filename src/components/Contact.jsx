import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/ContactForm');
    };

    return (
        <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-12 space-y-16">

            <div className="text-center space-y-4">
                <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                    LET'S WORK
                    <br />
                    TOGETHER
                </h1>

                <button
                onClick={handleBtnClick}
                        className="relative overflow-hidden border-2 border-white bg-white text-black font-bold px-5 md:px-8 py-2 rounded-full group text-sm md:text-base"
                    >
                        <span className="absolute inset-0 w-full h-full bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out rounded-full z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            CONTACT NOW
                        </span>
                    </button>
            </div>

            <div className="max-w-3xl text-center space-y-8">
                <p className="font-bold text-lg md:text-2xl leading-relaxed">
                    BASED IN INDIA, I AM AN INNOVATIVE DEVELOPER AND DESIGN ENTHUSIAST.
                    MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY,
                    AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.
                </p>

                <div className="flex justify-center items-center gap-10 text-white text-sm md:text-lg font-semibold">
                    <a href="https://www.instagram.com/_harshit.25/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-400 transition">
                        INSTAGRAM <MdOutlineArrowOutward className='text-2xl'/>
                    </a>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-400 transition">
                        LINKEDIN <MdOutlineArrowOutward className='text-2xl'/>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-400 transition">
                        TWITTER <MdOutlineArrowOutward className='text-2xl'/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Contact;



/*

import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/icons/contact.avif';

const Contact = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/ContactForm')
    }
    return (
        <section
            className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
            aria-label="Contact Section"
        >
            <div
                className="absolute inset-0 bg-cover bg-center rounded-4xl m-4"
                style={{ backgroundImage: `url(${background})` }}
            />

            <div className="relative z-30 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                    CONNECT WITH ME FOR
                    <br />
                    <span className=" bg-clip-text text-transparent">
                        CREATIVE COLLABORATION!
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Reach out and let's bring your ideas to life! I'm here to collaborate and create digital magic.
                </p>

                <button
                    className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    onClick={handleNavigate}
                >
                    CONTACT ME
                </button>
            </div>
        </section>
    );
};

export default Contact;


*/