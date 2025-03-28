import React from "react";

export function GridBackgroundskills() {
    return (
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-500 py-8">
                This is Skills.
            </p>
        </div>
    );
}
