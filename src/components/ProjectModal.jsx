import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import projectList from "../components/ProjectData";

const ProjectModal = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const project = projectList.find((p) => p.id === projectId);

    const closeModal = () => {
        navigate("/", { replace: true });
    };

    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Handle body scroll and focus management
    useEffect(() => {
        if (!project) return;

        document.body.style.overflow = "hidden";
        
        if (modalRef.current) {
            modalRef.current.focus();
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    // If project not found, show error state
    if (!project) {
        return (
            <AnimatePresence>
                <motion.div
                    className="fixed inset-4 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        className="bg-zinc-800 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
                        initial={{ scale: 0.8, opacity: 0, y: 100 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 100 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">Project Not Found</h2>
                        <p className="text-gray-300 mb-6">The requested project could not be found.</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                        >
                            Go Back
                        </button>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="fixed inset-4 z-50 bg-black bg-opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <motion.div
                    ref={modalRef}
                    key="modal"
                    className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl shadow-2xl relative focus:outline-none overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                    tabIndex={-1}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 z-10 text-3xl text-gray-400 hover:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 rounded-full w-12 h-12 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    
                    {/* Scrollable Content */}
                    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-600">
                        <div className="p-8 lg:p-12">
                            {/* Project Image */}
                            {project.img && (
                                <div className="mb-8 relative">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                                </div>
                            )}

                            {/* Project Header */}
                            <div className="mb-8">
                                <h1 
                                    id="modal-title" 
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                                >
                                    {project.title}
                                </h1>
                                
                                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        {project.type}
                                    </span>
                                    <span className="text-lg font-medium">{project.year}</span>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                {/* Left Column */}
                                <div className="space-y-8">
                                    {/* Project Description */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-600 pb-2">
                                            Project Overview
                                        </h2>
                                        <div className="text-gray-300 leading-relaxed text-lg">
                                            {typeof project.description === 'string' ? (
                                                <p>{project.Modaldescription}</p>
                                            ) : (
                                                project.description
                                            )}
                                        </div>
                                    </section>

                                    {/* Project Approach */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-600 pb-2">
                                            Approach & Process
                                        </h2>
                                        <div className="text-gray-300 leading-relaxed text-lg">
                                            {project.approach ? (
                                                typeof project.approach === 'string' ? (
                                                    <p>{project.approach}</p>
                                                ) : (
                                                    project.approach
                                                )
                                            ) : (
                                                <p className="text-gray-400 italic">
                                                    This project followed a systematic approach focusing on user experience, 
                                                    clean code architecture, and modern development practices.
                                                </p>
                                            )}
                                        </div>
                                    </section>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-8">
                                    {/* What I Learned */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-600 pb-2">
                                            Key Learnings
                                        </h2>
                                        <div className="text-gray-300 leading-relaxed text-lg">
                                            {project.learnings ? (
                                                typeof project.learnings === 'string' ? (
                                                    <p>{project.learnings}</p>
                                                ) : (
                                                    project.learnings
                                                )
                                            ) : (
                                                <div className="space-y-3">
                                                    <p>• Enhanced understanding of modern web development practices</p>
                                                    <p>• Improved skills in user interface design and user experience</p>
                                                    <p>• Gained experience with project architecture and code organization</p>
                                                    <p>• Developed problem-solving abilities through technical challenges</p>
                                                </div>
                                            )}
                                        </div>
                                    </section>

                                    {/* Difficulties Faced */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-600 pb-2">
                                            Challenges & Solutions
                                        </h2>
                                        <div className="text-gray-300 leading-relaxed text-lg">
                                            {project.difficulties ? (
                                                typeof project.difficulties === 'string' ? (
                                                    <p>{project.difficulties}</p>
                                                ) : (
                                                    project.difficulties
                                                )
                                            ) : (
                                                <div className="space-y-3">
                                                    <p>• <span className="text-red-400 font-medium">Challenge:</span> Complex state management</p>
                                                    <p>• <span className="text-green-400 font-medium">Solution:</span> Implemented efficient data flow patterns</p>
                                                    <p>• <span className="text-red-400 font-medium">Challenge:</span> Performance optimization</p>
                                                    <p>• <span className="text-green-400 font-medium">Solution:</span> Applied best practices for code efficiency</p>
                                                </div>
                                            )}
                                        </div>
                                    </section>
                                </div>
                            </div>

                            {/* Technologies Used */}
                            {project.technologies && (
                                <section className="mt-12">
                                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-zinc-600 pb-2">
                                        Technologies & Tools
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Project Links */}
                            {(project.liveUrl || project.githubUrl) && (
                                <section className="mt-12 pt-8 border-t border-zinc-600">
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                                            >
                                                🚀 View Live Project
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                                            >
                                                📂 View Source Code
                                            </a>
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;