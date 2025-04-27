export default function BackToTopBottom() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className="relative inline-block group cursor-pointer text-white"
            >
                GO BACK TO TOP
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
        </div>
    );
}
