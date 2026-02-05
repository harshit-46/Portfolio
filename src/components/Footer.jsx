import React from 'react';
import BackToTopBottom from './Top';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="flex flex-col space-y-6">
                <p className="text-[55px] font-semibold sm:text-[100px] md:text-[150px] lg:text-[200px] text-center leading-none break-words"
                    role="presentation"
                >
                    &#58; &#40; &#41; &#123; &#58; &#124; &#58; &amp; &#125; &#59; &#58;
                </p>
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center md:px-12 text-xl md:text-2xl font-semibold gap-6" id='footer'>
                    <p>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
                    <div><BackToTopBottom /></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;