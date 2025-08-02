import React, { useRef } from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Header from "./Header";
import Footer from "./Footer";
import CursorCircle from "./CursorCircle";

const HomeLayout = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <CursorCircle />
            <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, servicesRef, projectsRef, contactRef }} />
            <div>
                <section ref={homeRef}><Home /></section>
                <section ref={projectsRef}><Projects /></section>
                <section ref={aboutRef}><About /></section>
                <section ref={servicesRef}><Services /></section>
                <section ref={contactRef}><Contact /></section>
            </div>
            <Footer />
        </>
    );
};

export default HomeLayout;