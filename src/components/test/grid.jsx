import React from "react";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Hi there!
                I am Harshit Gupta frontend developer
            </p>
        </div>
    );
}