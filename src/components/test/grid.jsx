import React from "react";
import '../../assets/CSS/home.css';

export function HeroSection() {
    return (
        <div className="h-[100vh] w-full bg-black flex">
            <div className="flex h-fit w-fit mt-24">
                <h1 className="Home text-white ml-6 text-[190px] leading-none cursor-pointer">HARSHIT</h1>
                <h1 className="homevid ml-4 text-[190px] leading-none text-transparent bg-cover bg-no-repeat bg-center bg-clip-text bg-gradient-and-gif cursor-pointer">GUPTA</h1>
            </div>
        </div>
    );
}