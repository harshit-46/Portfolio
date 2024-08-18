import AuroraBackgroundDemo from './components/test/aurora';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <main className='text-4xl font-bold'>
      <AuroraBackgroundDemo/>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/skills" element={<Tech/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App