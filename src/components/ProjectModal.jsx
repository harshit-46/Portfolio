import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import projectList from "../components/ProjectData";
import "../assets/CSS/ProjectModal.css";

const SectionHeading = ({ title, icon, className = "" }) => (
    <div className={`mb-8 pm-fade-up ${className}`}>
        <div className="flex items-center gap-4 mb-6">
            {icon && <span className="text-2xl">{icon}</span>}
            <button className="group relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-600/40 hover:border-violet-500/60 rounded-2xl px-8 py-4 transition-all duration-300">
                <span className="relative z-10 text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    {title}
                </span>
            </button>
        </div>
    </div>
);

const ContentText = ({ children, className = "" }) => (
    <div className={`text-slate-200 leading-relaxed text-lg mb-12 pm-fade-up ${className}`}>
        {children}
    </div>
);

const ProjectHeroContent = ({ project }) => (
    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="pm-fade-up delay-150">
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg border border-white/10">
                    {project.type}
                </span>
                {project.year && (
                    <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-sm text-slate-200 rounded-full text-sm font-medium border border-slate-400/30">
                        {project.year}
                    </span>
                )}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
                {project.title}
            </h1>
        </div>
    </div>
);

const ProjectHeroFallback = ({ project }) => (
    <div className="relative h-[50vh] bg-gradient-to-br from-slate-900 via-violet-900/80 to-indigo-900/80 rounded-3xl flex items-center justify-center">
        <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <span className="px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold border border-white/10">
                    {project.type}
                </span>
                {project.year && (
                    <span className="px-4 py-2 bg-slate-800/40 backdrop-blur-sm text-slate-200 rounded-full text-sm font-medium border border-slate-400/20">
                        {project.year}
                    </span>
                )}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight tracking-tight">
                {project.title}
            </h1>
        </div>
    </div>
);

const ProjectHero = ({ project, onImageError, imageError }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative overflow-hidden rounded-3xl mb-16 pm-scale-in">
            {!imageError && project.img ? (
                <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
                    <div className={`transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
                        <img
                            src={project.img}
                            alt={`${project.title} - ${project.type} project showcase`}
                            className="w-full h-full object-cover"
                            onError={onImageError}
                            onLoad={() => setImageLoaded(true)}
                            loading="lazy"
                        />
                    </div>
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 animate-pulse" />
                    )}

                    <ProjectHeroContent project={project} />
                </div>
            ) : (
                <ProjectHeroFallback project={project} />
            )}
        </div>
    );
};

const TechPill = ({ tech }) => (
    <span className="inline-block pm-fade-up">
        <div className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-slate-200 rounded-full font-semibold border border-slate-600/50 hover:border-violet-500/50 transition-all duration-300">
            {tech}
        </div>
    </span>
);

const ProjectDetails = ({ project }) => (
    <div className="mb-16 pm-fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600/40 hover:border-emerald-500/60 rounded-2xl p-6 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Status</span>
                    <span className="text-slate-100 font-bold text-lg">{project.status || "Completed"}</span>
                </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600/40 hover:border-blue-500/60 rounded-2xl p-6 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Duration</span>
                    <span className="text-slate-100 font-bold text-lg">{project.duration || "3 months"}</span>
                </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600/40 hover:border-pink-500/60 rounded-2xl p-6 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Team Size</span>
                    <span className="text-slate-100 font-bold text-lg">{project.teamSize || "Solo"}</span>
                </div>
            </div>
        </div>
    </div>
);

const ErrorModal = ({ onClose }) => (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 pm-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="error-title"
        aria-describedby="error-description"
    >
        <div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-slate-600/30 pm-scale-in"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" aria-hidden="true">❌</span>
            </div>
            <h2 id="error-title" className="text-2xl font-bold text-slate-100 mb-4">
                Project Not Found
            </h2>
            <p id="error-description" className="text-slate-300 mb-8">
                The requested project could not be found. Please check the URL or return to the main page.
            </p>
            <button
                onClick={onClose}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-2xl transition-all duration-200 font-semibold hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-500/50"
                autoFocus
            >
                Go Back
            </button>
        </div>
    </div>
);

const CloseButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-20 w-12 h-12 bg-slate-900/40 backdrop-blur-xl border border-slate-500/20 rounded-full flex items-center justify-center text-slate-200 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-500/20 group"
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
    </button>
);


const ProjectModal = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const [imageError, setImageError] = useState(false);

    const project = useMemo(() => projectList.find((p) => p.id === projectId), [projectId]);

    const closeModal = useCallback(() => {
        navigate("/", { replace: true });
    }, [navigate]);

    const handleImageError = useCallback(() => setImageError(true), []);

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
        return <ErrorModal onClose={closeModal} />;
    }

    const description = project.Modaldescription || project.description;
    const sections = [
        { title: "Overview", content: description || "A comprehensive project showcasing modern development practices." },
        { title: "Approach", content: project.approach || "This project followed a systematic approach focusing on user experience and clean architecture." },
        { title: "Key Learnings", content: project.learnings || "Enhanced understanding of modern web development practices." },
        { title: "Challenges", content: project.difficulties || "Managed complex state and improved data flow patterns." }
    ];

    return (
        <div
            className="fixed inset-0 z-50 bg-slate-950 pm-fade-in"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
        >
            <div
                ref={modalRef}
                className="relative w-full h-full overflow-hidden pm-scale-in outline-none"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
            >
                <CloseButton onClick={closeModal} />

                <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600/40 hover:scrollbar-thumb-slate-500/60 overscroll-contain">
                    <div className="min-h-full px-8 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
                        <ProjectHero
                            project={project}
                            imageError={imageError}
                            onImageError={handleImageError}
                        />

                        <div className="max-w-6xl mx-auto space-y-16">
                            <ProjectDetails project={project} />

                            {sections.map((section) => (
                                <div key={section.title}>
                                    <SectionHeading title={section.title} />
                                    <ContentText>{section.content}</ContentText>
                                </div>
                            ))}

                            {project.technologies?.length > 0 && (
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
                                <div className="flex flex-wrap gap-6 justify-center pt-8 border-t border-slate-700/60 pm-fade-up">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View live version of ${project.title}`}
                                            className="px-8 py-4 rounded-2xl text-lg font-semibold text-slate-900 bg-gradient-to-r from-white to-slate-100 hover:from-slate-50 hover:to-white hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg border border-slate-200/20"
                                        >
                                            Live Project
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View source code for ${project.title}`}
                                            className="px-8 py-4 rounded-2xl text-lg font-semibold text-slate-900 bg-gradient-to-r from-white to-slate-100 hover:from-slate-50 hover:to-white hover:shadow-slate-400/30 hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-lg border border-slate-200/20"
                                        >
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;