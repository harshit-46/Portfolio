import React, { useEffect, useState } from 'react';
import { BiMailSend } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const ContactNavbar = () => {
    const [time, setTime] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black text-white flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/10">

            <div className="flex items-center gap-2 font-semibold">
                <span className="text-gray-400 hidden md:inline text-sm md:text-lg">LOCAL/</span>
                <span className="text-base md:text-xl text-center w-20">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                </span>
            </div>

            <div className="text-3xl md:text-4xl hover:animate-bounce transition-all duration-500">
                <BiMailSend />
            </div>

            <div>
                <button
                    onClick={() => navigate('/')}
                    className="relative overflow-hidden border-2 border-white text-white font-bold px-5 md:px-8 py-2 rounded-full group text-sm md:text-base"
                >
                    <span className="absolute inset-0 w-full h-full bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out rounded-full"></span>
                    <span className="relative group-hover:text-black transition-colors duration-300">GO BACK</span>
                </button>
            </div>

        </div>
    );
};

export default ContactNavbar;
