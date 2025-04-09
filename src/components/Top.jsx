export default function BackToTopBottom() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a id="top" onClick={scrollToTop}>Go Back To Top</a>
    );
}
