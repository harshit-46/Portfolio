import React from 'react';
import logo from '../assets/icons/AppLogo.png';
import '../assets/CSS/footer.css'

const Footer = () => {
    return (
    <div className='h-80 bg-black text-white flex'>
        <div className='border-t w-1/3 border-stone-800'>
            <img src={logo} height="90px" width="90px" className='ml-32 mt-16'/>
            <div id="foot-para" className='text-stone-500'>
                Developed by
                <a 
                href="https://www.linkedin.com/in/harshithere/" 
                className='text-blue-500 hover:text-white transition duration-200'
                target='_blank'
                rel="noopener noreferrer">
                &nbsp;Harshit Gupta
                </a>
            </div>
        </div>
        <div className='w-2/3 border-t border-stone-800 pl-12'>
            hello
        </div>
    </div>
    )
}

export default Footer