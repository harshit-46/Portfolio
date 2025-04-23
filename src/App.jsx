import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout"; 
import ContactForm from "./components/ContactForm"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/ContactForm" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
