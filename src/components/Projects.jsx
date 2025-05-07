import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Portfolio Website',
            description: 'A modern personal portfolio built with React and Tailwind CSS.',
            tech: ['React', 'Tailwind', 'Framer Motion'],
            link: '#',
        },
        {
            title: 'NewsMonkey',
            description: 'A news app using NewsAPI that shows categorized and real-time news.',
            tech: ['React', 'Bootstrap', 'NewsAPI'],
            link: '#',
        },
        {
            title: 'Snake Game',
            description: 'Classic Snake game recreated with HTML, CSS, and JavaScript.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
        },
        {
            title: 'Portfolio Website',
            description: 'A modern personal portfolio built with React and Tailwind CSS.',
            tech: ['React', 'Tailwind', 'Framer Motion'],
            link: '#',
        },
        {
            title: 'NewsMonkey',
            description: 'A news app using NewsAPI that shows categorized and real-time news.',
            tech: ['React', 'Bootstrap', 'NewsAPI'],
            link: '#',
        },
        {
            title: 'Snake Game',
            description: 'Classic Snake game recreated with HTML, CSS, and JavaScript.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
        }
    ];

    return (
        <div className="min-h-screen w-full bg-black text-white px-4 md:px-20 py-24">
            <h1 className="text-5xl font-bold text-center mb-12">Selected Work</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-green-400 transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-green-900/40 border border-green-400 rounded text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            className="inline-block text-sm text-green-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
