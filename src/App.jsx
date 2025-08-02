import { Routes, Route, useLocation } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import ContactForm from "./components/ContactForm";
import ProjectModal from "./components/ProjectModal";

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/projects/:projectId" element={<ProjectModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;