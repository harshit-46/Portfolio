import React from "react";

export function GridBackgroundskills() {
    return (
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex -mt-2">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
