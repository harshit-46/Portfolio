import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import projectList from "../components/ProjectData";
import "../assets/CSS/ProjectModal.css";

const ANIMATION_VARIANTS = {
    backdrop: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    },
    modal: {
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
    },
    content: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    },
    stagger: {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    }
};

const SectionHeading = ({ title, icon, className = "" }) => (
    <motion.div
        className={`mb-8 ${className}`}
        variants={ANIMATION_VARIANTS.content}
    >
        <div className="flex items-center gap-4 mb-6">
            {icon && (
                <span className="text-2xl" aria-hidden="true">
                    {icon}
                </span>
            )}
            <button className="group relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border border-slate-600 hover:border-slate-500 rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/25 focus:outline-none focus:ring-4 focus:ring-slate-500/50">
                <span className="relative z-10 text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {title}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>
    </motion.div>
);

const ContentText = ({ children, className = "" }) => (
    <motion.div
        className={`text-gray-200 leading-relaxed text-lg mb-12 ${className}`}
        variants={ANIMATION_VARIANTS.content}
    >
        {children}
    </motion.div>
);

const ProjectHero = ({ project, onImageError, imageError }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    return (
        <motion.div
            className="relative overflow-hidden rounded-3xl mb-16"
            variants={ANIMATION_VARIANTS.content}
        >
            {!imageError && project.img ? (
                <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
                    <div className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <img
                            src={project.img}
                            alt={`${project.title} - ${project.type} project showcase`}
                            className="w-full h-full object-cover"
                            onError={onImageError}
                            onLoad={handleImageLoad}
                            loading="lazy"
                        />
                    </div>

                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />

                    <ProjectHeroContent project={project} />
                </div>
            ) : (
                <ProjectHeroFallback project={project} />
            )}
        </motion.div>
    );
};

const ProjectHeroContent = ({ project }) => (
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
);

const ProjectHeroFallback = ({ project }) => (
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
);

const TechPill = ({ tech }) => (
    <motion.span
        variants={ANIMATION_VARIANTS.content}
        className="inline-block"
    >
        <div className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 border border-indigo-500/30">
            {tech}
        </div>
    </motion.span>
);

const ActionButton = ({ href, children, variant = "primary", icon, ...props }) => {
    const baseClasses = "group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center gap-3 no-underline";

    const variantStyles = {
        primary: "bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg hover:shadow-emerald-500/25 focus:ring-emerald-500",
        secondary: "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-lg hover:shadow-gray-500/25 focus:ring-gray-500"
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${variantStyles[variant]}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {icon && (
                <span className="text-xl" aria-hidden="true">
                    {icon}
                </span>
            )}
            {children}
        </motion.a>
    );
};

const ProjectDetails = ({ project }) => (
    <motion.div
        className="mb-16"
        variants={ANIMATION_VARIANTS.content}
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:border-slate-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Status</span>
                    <span className="text-white font-bold text-lg">{project.status || "Completed"}</span>
                </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:border-slate-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Duration</span>
                    <span className="text-white font-bold text-lg">{project.duration || "3 months"}</span>
                </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:border-slate-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Team Size</span>
                    <span className="text-white font-bold text-lg">{project.teamSize || "Solo"}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const ErrorModal = ({ onClose }) => (
    <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        variants={ANIMATION_VARIANTS.backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="error-title"
        aria-describedby="error-description"
    >
        <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-white/10"
            variants={ANIMATION_VARIANTS.modal}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" aria-hidden="true">❌</span>
            </div>
            <h2 id="error-title" className="text-2xl font-bold text-white mb-4">
                Project Not Found
            </h2>
            <p id="error-description" className="text-gray-300 mb-8">
                The requested project could not be found. Please check the URL or return to the main page.
            </p>
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

const CloseButton = ({ onClick }) => (
    <motion.button
        onClick={onClick}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-20 w-12 h-12 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close project details"
    >
        <svg
            className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </motion.button>
);

const ProjectModal = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const [imageError, setImageError] = useState(false);

    // Memoize project lookup
    const project = useMemo(() =>
        projectList.find((p) => p.id === projectId),
        [projectId]
    );

    const closeModal = useCallback(() => {
        navigate("/", { replace: true });
    }, [navigate]);

    const handleImageError = useCallback(() => {
        setImageError(true);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeModal]);

    useEffect(() => {
        if (!project) return;

        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        modalRef.current?.focus();

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [project]);

    if (!project) {
        return (
            <AnimatePresence mode="wait">
                <ErrorModal onClose={closeModal} />
            </AnimatePresence>
        );
    }

    const description = project.Modaldescription || project.description;
    const sections = [
        { title: "Overview", content: description || "A comprehensive project showcasing modern development practices." },
        { title: "Approach", content: project.approach || "This project followed a systematic approach focusing on user experience and clean architecture." },
        { title: "Key Learnings", content: project.learnings || "Enhanced understanding of modern web development practices." },
        { title: "Challenges", content: project.difficulties || "Managed complex state and improved data flow patterns." }
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
                variants={ANIMATION_VARIANTS.backdrop}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
            >
                <motion.div
                    ref={modalRef}
                    className="relative w-full h-full overflow-hidden"
                    variants={ANIMATION_VARIANTS.modal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    tabIndex={-1}
                >
                    <CloseButton onClick={closeModal} />

                    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40 overscroll-contain">
                        <div className="min-h-full px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
                            <ProjectHero
                                project={project}
                                imageError={imageError}
                                onImageError={handleImageError}
                            />

                            <motion.div
                                className="max-w-6xl mx-auto space-y-16"
                                variants={ANIMATION_VARIANTS.stagger}
                                initial="hidden"
                                animate="visible"
                            >
                                <ProjectDetails project={project} />

                                {sections.map((section) => (
                                    <div key={section.title}>
                                        <SectionHeading title={section.title} />
                                        <ContentText>{section.content}</ContentText>
                                    </div>
                                ))}

                                {project.technologies && project.technologies.length > 0 && (
                                    <div>
                                        <SectionHeading title="Technologies" />
                                        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                                            {project.technologies.map((tech) => (
                                                <TechPill key={tech} tech={tech} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {(project.liveUrl || project.githubUrl) && (
                                    <motion.div
                                        className="flex flex-wrap gap-6 justify-center pt-8 border-t border-slate-700"
                                        variants={ANIMATION_VARIANTS.content}
                                    >
                                        {project.liveUrl && (
                                            <ActionButton
                                                href={project.liveUrl}
                                                variant="primary"
                                                aria-label={`View live version of ${project.title}`}
                                            >
                                                View Live Project
                                            </ActionButton>
                                        )}
                                        {project.githubUrl && (
                                            <ActionButton
                                                href={project.githubUrl}
                                                variant="secondary"
                                                aria-label={`View source code for ${project.title}`}
                                            >
                                                View Source Code
                                            </ActionButton>
                                        )}
                                    </motion.div>
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