import React from "react";
import '../../assets/CSS/home.css';

export function GridBackgroundDemo() {
    return (
        <div className="h-[100vh] w-full bg-black flex">
            <div className="flex h-fit w-fit mt-28">
                <h1 className="Home text-white border-2 border-red-600">HARSHIT</h1>
                <h1 className="homevid ml-4 border-2 border-red-600">GUPTA</h1>
            </div>
        </div>
    );
}