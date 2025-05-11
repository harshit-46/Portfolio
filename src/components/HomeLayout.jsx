import React, { useRef } from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Footer from "./Footer";
import CursorCircle from "./CursorCircle";

const HomeLayout = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <CursorCircle />
            <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, educationRef, projectsRef, contactRef }} />
            <div>
                <section ref={homeRef}><Home /></section>
                <section ref={projectsRef}><Projects /></section>
                <section ref={aboutRef}><About /></section>
                <section ref={educationRef}><Education /></section>
                <section ref={contactRef}><Contact /></section>
            </div>
            <Footer />
        </>
    );
};

export default HomeLayout;