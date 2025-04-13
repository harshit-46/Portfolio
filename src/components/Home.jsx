import React from 'react';

const Home = () => {
    return (
        <div className="h-[100vh] w-full bg-black pt-48">
            <div className="font-bold leading-none flex justify-evenly">
                <span className="-ml-4 text-white text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] p-0 m-0 select-none cursor-pointer">
                    HARSHIT
                </span>
                <span className="text-[80px] md:text-[120px] lg:text-[190px] tracking-[-0.01em] text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif p-0 m-0 select-none cursor-pointer">
                    GUPTA
                </span>
            </div>
        </div>
    )
}

export default Home