import React, { useState, useEffect } from 'react';
import CursorCircle from './CursorCircle';
import ContactNavbar from './ContactNavbar';
import { LiaHeadphonesSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import BackToTopBottom from './Top';
import "../assets/CSS/contactform.css";

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setError(false);

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('Message sent successfully!');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Failed to send message. Try again.');
                setError(true);
            }
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong.');
            setError(true);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CursorCircle />
            <ContactNavbar />
            <div className="text-white bg-black text-center py-16 px-4">
                <h1 className="text-8xl md:text-9xl mb-12 pt-12 leading-tight" id='heading'>
                    <span className="block md:inline">SAY</span> <span className="block md:inline">HELLO!</span>
                </h1>

                <p className="max-w-3xl mx-auto text-stone-400 text-lg md:text-xl">
                    Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond within 24 hours.
                </p>
            </div>

            <div className="bg-black">
                <h2 className="text-5xl md:text-6xl font-semibold text-white pl-4 md:pl-32 pt-16 text-left" id="contact">
                    CONTACT ME
                </h2>
            </div>

            <div className="bg-black flex items-center justify-center px-4 md:px-8 py-16">
                <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 bg-[#111] rounded-lg p-10 flex flex-col space-y-12 text-white min-h-[500px]">
                        <div className="space-y-10">

                            <div className="flex flex-col items-start space-y-2">
                                <GrLocation className="text-5xl text-green-400" />
                                <div>
                                    <p className="font-bold text-lg mt-2">LOCATION:</p>
                                    <p className="text-gray-400">Dehradun, India</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start space-y-2">
                                <LiaHeadphonesSolid className="text-5xl text-green-400" />
                                <div>
                                    <p className="font-bold text-lg mt-2">CONTACT NUMBER:</p>
                                    <p className="text-gray-400">+91 9690424413</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start space-y-2">
                                <AiOutlineMail className="text-5xl text-green-400" />
                                <div>
                                    <p className="font-bold text-lg mt-2">EMAIL ME:</p>
                                    <p className="text-gray-400">iamharshit999@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <p className="font-bold text-lg mb-4">SOCIALS</p>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/_harshit.25/" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <IoLogoInstagram />
                                </a>
                                <a href="https://x.com/harshit__25" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <BsTwitterX />
                                </a>
                                <a href="https://www.linkedin.com/in/harshithere/" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <TfiLinkedin />
                                </a>
                                <a href="https://github.com/harshit-46" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <FiGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 bg-[#111] rounded-lg p-8 text-white">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 flex flex-col">
                                    <label className="mb-4 text-sm font-semibold text-gray-400">FULL NAME</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                            placeholder="Steve Milner"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                                            <FaRegUser />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label className="mb-4 text-sm font-semibold text-gray-400">EMAIL ADDRESS</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                            placeholder="hello@websitename.com"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                                            <MdMailOutline />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-4 text-sm font-semibold text-gray-400">SUBJECT</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Your Subject"
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                                        <FaRegUser />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-4 text-sm font-semibold text-gray-400">YOUR MESSAGE</label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows="9"
                                        required
                                        className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Write your message"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="mt-4 bg-green-500 text-black font-semibold py-3 px-8 rounded-md hover:bg-green-400 transition w-fit flex items-center gap-2">
                                <span>Send Message</span>
                                <AiOutlineMail className="text-xl" /></button>
                            {status && (
                                <p className={`text-center text-sm font-semibold mt-4 ${error ? 'text-red-400' : 'text-green-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white text-center py-16">
                <p className="py-8 text-[22px]">Have a project in mind?</p>
                <h1 className='text-8xl md:text-9xl font-bold pt-6 leading-tight' id='heading2'>
                    <span className="block md:inline">LET'S</span> <span className="block md:inline">WORK</span>
                </h1>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-xl md:text-2xl font-semibold gap-6" id='footer'>
                    <p>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
                    <div><BackToTopBottom /></div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;