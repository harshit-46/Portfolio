"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter";

export default function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Welcome",
        },
        {
            text: "to",
        },
        {
            text: "my",
        },
        {
            text: "Portfolio.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}