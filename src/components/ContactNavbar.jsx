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
        <div className="bg-black text-white flex items-center justify-between px-8 py-4 border-b border-white/10">

            {/* Clock Section */}
            <div className="flex items-center gap-2 text-lg font-semibold w-[120px] justify-start">
                <span className="text-gray-400">LOCAL/</span>
                <span className="w-[60px] text-center">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                </span>
            </div>


            {/* Mail Icon Section */}
            <div className="text-4xl flex items-center justify-center hover:animate-bounce transition">
                <BiMailSend />
            </div>

            {/* Go Back Button */}
            <div>
                <button
                    onClick={() => navigate('/')}
                    className="relative overflow-hidden border-2 border-white text-white font-bold px-6 py-2 rounded-full group"
                >
                    <span className="absolute inset-0 w-full h-full bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out rounded-full"></span>
                    <span className="relative group-hover:text-black transition-colors duration-300">GO BACK</span>
                </button>
            </div>

        </div>
    );
};

export default ContactNavbar;
