import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import projectList from "../components/ProjectData";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const modalVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3
        }
    },
    exit: { scale: 0.95, opacity: 0, y: 20 }
};

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const SectionHeading = ({ title, icon, className = "" }) => (
    <motion.div
        className={`flex items-center gap-3 mb-6 ${className}`}
        variants={contentVariants}
    >
        {icon && <span className="text-2xl">{icon}</span>}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
        </h2>
    </motion.div>
);

const ContentText = ({ children, className = "" }) => (
    <motion.div
        className={`text-gray-200 leading-relaxed text-lg mb-8 ${className}`}
        variants={contentVariants}
    >
        {children}
    </motion.div>
);

const ProjectHero = ({ project, onImageError, imageError }) => (
    <motion.div
        className="relative overflow-hidden rounded-3xl mb-16"
        variants={contentVariants}
    >
        {!imageError && project.img ? (
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <img
                    src={project.img}
                    alt={`${project.title} - ${project.type} project`}
                    className="w-full h-full object-cover"
                    onError={onImageError}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                                {project.type}
                            </span>
                            {project.year && (
                                <span className="px-4 py-2 bg-black/30 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                                    {project.year}
                                </span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                            {project.title}
                        </h1>
                    </motion.div>
                </div>
            </div>
        ) : (
            <div className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                        <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                            {project.type}
                        </span>
                        {project.year && (
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                                {project.year}
                            </span>
                        )}
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                        {project.title}
                    </h1>
                </div>
            </div>
        )}
    </motion.div>
);

const TechPill = ({ tech, index }) => (
    <motion.span
        variants={contentVariants}
        className="group relative overflow-hidden"
    >
        <div className="px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium hover:from-indigo-500/40 hover:to-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
            {tech}
        </div>
    </motion.span>
);

const ActionButton = ({ href, children, variant = "primary", icon }) => {
    const baseClasses = "group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center gap-3";
    const variants = {
        primary: "bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg hover:shadow-emerald-500/25 focus:ring-emerald-500",
        secondary: "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-lg hover:shadow-gray-500/25 focus:ring-gray-500"
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${variants[variant]}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {icon && <span className="text-xl">{icon}</span>}
            {children}
        </motion.a>
    );
};

const ErrorModal = ({ onClose }) => (
    <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
    >
        <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-white/10"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
            <p className="text-gray-300 mb-8">The requested project could not be found.</p>
            <button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-200 font-semibold hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                autoFocus
            >
                Go Back
            </button>
        </motion.div>
    </motion.div>
);

const ProjectModal = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const [imageError, setImageError] = useState(false);

    const project = useMemo(() =>
        projectList.find((p) => p.id === projectId),
        [projectId]
    );

    const closeModal = useCallback(() => {
        navigate("/", { replace: true });
    }, [navigate]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeModal]);

    useEffect(() => {
        if (!project) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        modalRef.current?.focus();
        return () => { document.body.style.overflow = originalOverflow; };
    }, [project]);

    if (!project) {
        return (
            <AnimatePresence mode="wait">
                <ErrorModal onClose={closeModal} />
            </AnimatePresence>
        );
    }

    const description = project.Modaldescription || project.description;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeModal}
            >
                <motion.div
                    ref={modalRef}
                    className="relative w-full h-full overflow-hidden"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    tabIndex={-1}
                >
                    <motion.button
                        onClick={closeModal}
                        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-20 w-12 h-12 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Close project details"
                    >
                        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>

                    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40 overscroll-contain">
                        <div className="min-h-full px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
                            <ProjectHero project={project} imageError={imageError} onImageError={() => setImageError(true)} />

                            <motion.div
                                className="max-w-4xl mx-auto space-y-12"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <div>
                                    <SectionHeading title="Overview" />
                                    <ContentText>{description || "A comprehensive project showcasing modern development practices."}</ContentText>
                                </div>

                                <div>
                                    <SectionHeading title="Approach" />
                                    <ContentText>{project.approach || "This project followed a systematic approach focusing on user experience and clean architecture."}</ContentText>
                                </div>

                                <div>
                                    <SectionHeading title="Key Learnings" />
                                    <ContentText>{project.learnings || "Enhanced understanding of modern web development practices."}</ContentText>
                                </div>

                                <div>
                                    <SectionHeading title="Challenges" />
                                    <ContentText>{project.difficulties || "Managed complex state and improved data flow patterns."}</ContentText>
                                </div>

                                {project.technologies && (
                                    <div>
                                        <SectionHeading title="Technologies" />
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {project.technologies.map((tech, i) => (
                                                <TechPill key={tech} tech={tech} index={i} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {(project.liveUrl || project.githubUrl) && (
                                    <div className="flex flex-wrap gap-6 justify-center pt-8">
                                        {project.liveUrl && (
                                            <ActionButton href={project.liveUrl} variant="primary">View Live Project</ActionButton>
                                        )}
                                        {project.githubUrl && (
                                            <ActionButton href={project.githubUrl} variant="secondary">View Source Code</ActionButton>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;