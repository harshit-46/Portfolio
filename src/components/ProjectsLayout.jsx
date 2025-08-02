import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Projects";
import ProjectModal from "./ProjectModal";

const ProjectsLayout = () => {
    const location = useLocation();
    const backgroundLocation = location.state?.backgroundLocation;

    return (
        <>
            <Projects />
            <Routes location={backgroundLocation || location}>
                <Route path=":projectId" element={<ProjectModal />} />
            </Routes>
        </>
    );
};

export default ProjectsLayout;
