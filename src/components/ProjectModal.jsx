import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import projectList from "../components/ProjectData";

const ProjectModal = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projectList.find((p) => p.id === projectId);

    const closeModal = () => {
        navigate("/", { replace: true });
    };

    useEffect(() => {
        if (!project) return;

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
            >
                <motion.div
                    key="modal"
                    className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-xl relative"
                    initial={{ scale: 0.8, opacity: 0, y: 100 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-3 text-xl text-gray-700 hover:text-red-500"
                    >
                        &times;
                    </button>
                    <img
                        src={project.img}
                        alt={project.title}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p className="text-gray-500 mb-2">
                        {project.type} • {project.year}
                    </p>
                    <p className="text-gray-700">{project.description}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
