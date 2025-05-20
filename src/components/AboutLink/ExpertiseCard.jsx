import React from 'react';

const ExpertiseCard = ({ number, title, description, colSpan }) => (
    <article
        className={`relative ${colSpan} bg-[#0a0a0a] text-white rounded-xl p-6 lg:p-8 border border-[#1c1c1c] hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px]`}
    >
        <div className="absolute top-5 right-5 hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-white/80 text-4xl font-medium hover:bg-white hover:text-black transition-all duration-300 hover:rotate-45">
            +
        </div>
        <div className='mt-16'>
            <div className="text-white text-sm font-semibold mb-2">({number})</div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4">{title}</h3>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">{description}</p>
        </div>
    </article>
);

export default ExpertiseCard;
