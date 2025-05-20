import React from 'react';

const MotivationSection = () => (
    <section className="mt-28 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h1 className="text-[50px] font-bold">MOTIVATION</h1>
            </div>
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                    More than a job, web design is an outlet for your vision. You have the power to take an idea from concept
                    to reality. Your sites can tell a story, <span className="italic font-semibold">"show off a brand"</span>,
                    or change lives...
                </p>
                <p>
                    As a web designer, you get to blend art and technology to create{" "}
                    <span className="italic font-semibold">"digital experiences"</span>...
                </p>
                <figure>
                    <img src="" alt="Harshit's handwritten signature" className="w-32 pt-4" loading="lazy" />
                </figure>
            </div>
        </div>
    </section>
);

export default MotivationSection;
