import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout"; // existing single-page with refs
import ContactForm from "./components/ContactForm"; // new separate page

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/ContactForm" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
