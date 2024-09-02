"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter";

export default function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Hi",
        },
        {
            text: "there,",
        },
        {
            text: "I",
        },
        {
            text: "am",
        },
        {
            text: "Harshit Gupta.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}