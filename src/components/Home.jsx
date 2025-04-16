import React from 'react';

const Home = () => {
    return (
        <div className="h-[100vh] w-full bg-black pt-28">
            <div className="flex justify-center items-center space-x-2 md:mt-0 mb-4">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_3px_rgba(34,197,94,0.6)]"></span>
                <p className="text-white/70 font-semibold">AVAILABLE FOR FREELANCE</p>
            </div>

            <div className="font-bold leading-none flex flex-col md:flex-row justify-evenly items-center text-center md:text-left">
                <span className="-ml-0 md:-ml-4 text-white text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] p-0 m-0 select-none cursor-pointer">
                    HARSHIT
                </span>
                <span className="text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif p-0 m-0 select-none cursor-pointer">
                    GUPTA
                </span>
            </div>
        </div>
    );
};

export default Home;
