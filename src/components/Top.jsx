export default function BackToTopBottom() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="border-2 border-red-600">
            <a id="top" onClick={scrollToTop} className="inline-block border-2 border-amber-400">Go Back To Top</a>
        </div>
    );
}
