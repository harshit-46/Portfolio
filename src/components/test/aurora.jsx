import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-bg";
import FloatingDockDemo from "../test/dockbar";
import HeartImg from '/src/assets/icons/heart.png';

function AuroraBackgroundDemo() {
    return (
        <>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold text-white text-center mt-48">
                        Welcome to my Portfolio
                    </div>
                    <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
                        Do checkout my social handles.
                    </div>
                </motion.div>
                <FloatingDockDemo/>
                <p className="para mb-10 font-playfair-display font-normal">Made with <img src={HeartImg} height="35px" width="35px" className="inline-block"/> by Harshit Gupta</p>
            </AuroraBackground>
        </>
    );
}

export default AuroraBackgroundDemo;