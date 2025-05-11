import React from 'react';
import project1 from '../assets/icons/sign.png'; 

const projectList = [
    {
        title: 'Portfolio Website',
        type: 'Web Design',
        year: '2024',
        img: project1,
    },
    {
        title: 'NewsMonkey',
        type: 'News App',
        year: '2023',
        img: project1,
    },
    {
        title: 'Snake Game',
        type: 'Mini Game',
        year: '2022',
        img: project1,
    }
];

const Projects = () => {
    return (
        <div className="bg-black text-white px-4 md:px-20 py-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                <h1 className="text-5xl font-bold">FEATURED <br /> WORK</h1>
                <p className="mt-6 md:mt-0 max-w-xl text-gray-400 text-lg">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft clear experiences out of nothing but ones and zeroes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projectList.map((project, index) => (
                    <div key={index} className="group relative rounded-xl border border-gray-600 overflow-hidden bg-[#111] hover:shadow-xl transition-shadow">
                        <img src={project.img} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 flex justify-between items-end">
                            <div>
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-400">{project.type}</p>
                            </div>
                            <div className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
                                {project.year}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;