import React from 'react';
import '../assets/CSS/home.css';
import myPhoto from '../assets/icons/Profile.jpg';

const Home = () => {
    return (
        <div className="h-[100vh] w-full bg-black pt-28">
            <div className="flex justify-center items-center space-x-2 md:mt-0 mb-4">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_3px_rgba(34,197,94,0.6)]"></span>
                <p className="text-white/70 font-semibold">AVAILABLE FOR FREELANCE</p>
            </div>

            <div className="font-bold leading-none flex flex-col md:flex-row justify-center gap-x-16 items-center text-center md:text-left">
                <span className="-ml-0 md:-ml-4 text-white text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] p-0 m-0 select-none cursor-pointer" id='name1'>
                    HARSHIT
                </span>
                <span className="text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif p-0 m-0 select-none cursor-pointer" id='name2'>
                    GUPTA
                </span>
            </div>
            <div className="flex justify-center -mt-8">
                <img
                    src={myPhoto}
                    alt="Harshit Gupta"
                    className="w-80 h-100 object-cover rounded-2xl shadow-lg border-2 border-white transform rotate-7 hover:rotate-0 transition duration-500 ease-in-out"
                />
                <p className='text-white'>
                    Hi, I am Harshit a passionate web developer dedicated to creating user-friendly digital experience.
                </p>
            </div>

        </div>
    );
};

export default Home;
