import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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

export default App