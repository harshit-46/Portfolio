import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorCircle() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const tag = e.target.tagName.toLowerCase();
            if (["a", "button", "svg", "img"].includes(tag) || e.target.getAttribute("data-hover") === "true") {
                setHovering(true);
            }
        };

        const handleMouseOut = () => {
            setHovering(false);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    const circleSize = 40; // px

    return (
        <AnimatePresence>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999]"
                animate={{
                    x: pos.x - circleSize / 2,
                    y: pos.y - circleSize / 2,
                    scale: hovering ? 2 : 1,
                    opacity: hovering ? 0 : 1
                }}
                transition={{
                    x: { type: "tween", ease: "linear", duration: 0.05 },
                    y: { type: "tween", ease: "linear", duration: 0.05 },
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.3 }
                }}

            >
                <div
                    className="hidden md:block rounded-full border-2 border-[#bb3542] bg-transparent transition-transform duration-300"
                    style={{ width: circleSize, height: circleSize }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
