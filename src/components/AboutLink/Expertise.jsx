import React from 'react';
import ExpertiseCard from './ExpertiseCard';

const expertiseData = [
    { number: 1, title: 'APP DESIGN', description: "Craft intuitive navigation..." },
    { number: 2, title: 'WEB DESIGN', description: "Polish animations and microinteractions..." },
    { number: 3, title: 'FRAMER', description: "The process involves building..." },
    { number: 4, title: 'UX STRATEGY', description: "Design experiences with the user in mind..." },
    { number: 5, title: 'MOTION DESIGN', description: "Create engaging transitions..." },
];

const ExpertiseSection = () => (
    <>
        <section className="mb-4 md:px-4">
            <h1 className="text-[32px] sm:text-[48px] md:text-[72px] leading-none font-bold tracking-tight md:text-left">
                MY<br />EXPERTISE
            </h1>
        </section>
        <section className="max-w-9xl mx-auto md:px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {expertiseData.map(({ number, title, description }, index) => {
                const colSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
                return (
                    <ExpertiseCard
                        key={number}
                        number={number}
                        title={title}
                        description={description}
                        colSpan={colSpan}
                    />
                );
            })}
        </section>
    </>
);

export default ExpertiseSection;
