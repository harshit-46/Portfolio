{/*import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './components/Welcome';
import Home from './components/Home';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Header from "./components/Header";
import Education from "./components/Education";

function App() {
  return (
    <main>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Welcome/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/skills" element={<Tech/>}></Route>
          <Route exact path="/education" element={<Education/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App*/}


import React, { useRef } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Pass the scroll function to Header */}
      <Header scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, educationRef, projectsRef, contactRef }} />

      {/* Sections */}
      <section ref={homeRef}><Home /></section>
      <section ref={skillsRef}><Tech /></section>
      <section ref={educationRef}><Education /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={contactRef}><Contact /></section>
      <Footer scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, educationRef, projectsRef, contactRef }} />
    </main>
  );
}

export default App;
