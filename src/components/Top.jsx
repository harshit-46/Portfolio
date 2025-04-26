export default function BackToTopBottom() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <a id="top" onClick={scrollToTop} className="inline-block cursor-pointer">GO BACK TO TOP</a>
        </div>
    );
}
