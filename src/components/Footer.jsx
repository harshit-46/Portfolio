import React from 'react';
import logo from '../assets/icons/AppLogo.png';
import '../assets/CSS/footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white h-80 border-t border-stone-800 '>
            <img src={logo} height="90px" width="90px" className='ml-32 mt-16'/>
            <div id="foot-para" className='text-stone-500'>Developed by <a href="https://www.linkedin.com/in/harshithere/" id="foot-link" target='_blank'>Harshit Gupta</a></div>
            <div id="links" className='border-2 border-red-500'>
                <a href="https://drive.google.com/file/d/1_6PuQCpMIhatcA7hvkGFp-wTSXBNbBO0/view" target='_blank'>Resume</a>
                <a href="https://www.linkedin.com/in/harshithere/" target='_blank'>Linkedin</a>
                <a href="https://www.instagram.com/_harshit.25/" target='_blank'>Instagram</a>
                <a href="https://x.com/harshit__25" target='_blank'>Twitter</a>
                <a href="https://github.com/harshit-46" target='_blank'>Github</a>
            </div>
        </div>
    )
}

export default Footer