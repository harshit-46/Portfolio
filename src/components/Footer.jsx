import React from 'react';
import logo from '../assets/icons/AppLogo.png';
import '../assets/CSS/footer.css'

const Footer = () => {
    return (
    <div className='h-80 bg-[#1C1C1C] text-white flex'>
        <div className='border-t w-1/3 border-stone-800'>
            <img src={logo} height="90px" width="90px" className='ml-32 mt-16'/>
            <div id="foot-para" className='text-stone-400'>
                Developed by
                <a 
                href="https://www.linkedin.com/in/harshithere/" 
                className='text-[#52a8ff] hover:text-purple-400 transition duration-200'
                target='_blank'
                rel="noopener noreferrer">
                &nbsp;Harshit Gupta
                </a>
                <p className='copyright pt-20'>Copyright &#169; 2025. All rights reserved.</p>
            </div>
        </div>
        <div className='w-2/3 border-t border-stone-800 pl-12'>
            
        </div>
    </div>
    )
}

export default Footer