import React from 'react';

const HeroSection = () => (
    <>
        <h1 className="text-center font-bold tracking-tight mb-16">
            <span className="block text-[40px] sm:text-[60px] md:text-[100px] leading-[1]">MORE ABOUT</span>
            <span className="block text-[40px] sm:text-[60px] md:text-[100px] leading-[1.2] mt-[-16px]">HARSHIT©</span>
        </h1>
        <section className="flex justify-center mb-20">
            <figure className="overflow-hidden rounded-[50%/35%] w-60 h-80 md:w-[488px] md:h-[659px] border-2 border-white-600">
                <img
                    src=""
                    alt="Portrait of Harshit, creative frontend developer from India"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </figure>
        </section>
    </>
);

export default HeroSection;
