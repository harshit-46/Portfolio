import React, { useRef } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorCircle from "./components/CursorCircle";

function App() {
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
      <CursorCircle/>
      <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, educationRef, projectsRef, contactRef }} />
      <div>
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><Tech /></section>
        <section ref={educationRef}><Education /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactRef}><Contact /></section>
      </div>
      <Footer scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, educationRef, projectsRef, contactRef }} />
    </>
  );
}

export default App;