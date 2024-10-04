import React from "react";
import '../../assets/CSS/home.css'

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex">
            <p id="dev-name" className="text-white">
                Harshit Gupta
            </p>
            <p id="dev-para">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
        </div>
    );
}