import React from 'react';
import logo from '../assets/icons/AppLogo.png';
import '../assets/CSS/footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white h-72 border-t border-stone-800 '>
            <img src={logo} height="90px" width="90px" className='ml-32 mt-16'/>
            <div id="foot-para" className='text-stone-500'>Developed by <a href="https://www.linkedin.com/in/harshithere/" id="foot-link" target='_blank'>Harshit Gupta</a></div>
        </div>
    )
}

export default Footer