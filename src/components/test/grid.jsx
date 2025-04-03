import React from "react";

export function HeroSection() {
    return (
        <div className="h-[100vh] w-full bg-black -mt-20 border-2 border-red-700">
            <div className="flex h-fit pt-32 font-bold">
                <h1 className="Home text-white ml-6 text-[190px] leading-none select-none cursor-pointer">HARSHIT</h1>
                <h1 className="homevid ml-4 text-[190px] leading-none select-none text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif cursor-pointer">GUPTA</h1>
            </div>
            <div className="text-white">
                <p className="inline-block border-2 border-yellow-600">Hi, I am frontend web developer dedicated to <br />creating user-friendly digital experiences.</p>
            </div>
        </div>
    );
}