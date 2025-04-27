import React, { useState } from 'react';
import CursorCircle from './CursorCircle';
import ContactNavbar from './ContactNavbar';
import "../assets/CSS/contactform.css"
import { LiaHeadphonesSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import BackToTopBottom from './Top';

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

    return (
        <>
            <CursorCircle />
            <ContactNavbar/>
            <div className="text-white bg-black text-center py-16 px-4">
                <h1 className="text-9xl mb-12 pt-12" id='heading'>SAY HELLO!</h1>
                <p className="max-w-3xl mx-auto text-stone-400">
                    Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond to your inquiry within 24 hours.
                </p>
            </div>

            <h1 className="text-6xl text-white font-semibold bg-black pl-32 pt-16 pb-4" id='contact'>CONTACT ME</h1>
            <div className="bg-black flex items-center justify-center px-6 py-16">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div className="col-span-1 bg-[#111] rounded-lg p-10 flex flex-col space-y-12 text-white min-h-[500px]">

                        <div className="flex flex-col items-start space-y-4">
                            <GrLocation className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">OUR OFFICE:</p>
                                <p className="text-gray-400 mt-1">Dehradun, India</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start space-y-4">
                            <LiaHeadphonesSolid className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">CONTACT NUMBER:</p>
                                <p className="text-gray-400 mt-1">+91 9690424413</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start space-y-4">
                            <AiOutlineMail className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">EMAIL US:</p>
                                <p className="text-gray-400 mt-1">iamharshit999@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-lg">SOCIALS</p>
                            <div className="flex gap-4 pt-6">
                                <a href="https://www.instagram.com/_harshit.25/" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl" target='_blank'>
                                    <IoLogoInstagram />
                                </a>
                                <a href="https://x.com/harshit__25" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl" target='_blank'>
                                    <BsTwitterX />
                                </a>
                                <a href="https://www.linkedin.com/in/harshithere/" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl" target='_blank'>
                                    <TfiLinkedin />
                                </a>
                                <a href="https://github.com/harshit-46" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl" target='_blank'>
                                    <FiGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#111] rounded-lg p-8 text-white">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 flex flex-col">
                                    <label className="mb-4 text-sm font-semibold text-gray-400">FULL NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Steve Milner"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <label className="mb-4 text-sm font-semibold text-gray-400">EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="hello@websitename.com"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-4 text-sm font-semibold text-gray-400">SUBJECT</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Your Subject"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-4 text-sm font-semibold text-gray-400">YOUR MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="8"
                                    required
                                    className="p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Write your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-6 bg-green-500 text-black font-semibold py-3 px-8 rounded-md cursor-pointer hover:bg-green-400 transition w-fit"
                            >
                                Send Message
                            </button>

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
                <p className='py-8 text-[22px]'>Have a project in mind?</p>
                <h1 className='text-9xl font-bold pt-6' id='heading2'>LET'S WORK</h1>
                <div className='mt-20 flex justify-between px-12 text-2xl font-semibold' id='footer'>
                    <p>&copy; 2025 ALL RIGHTS RESERVED</p>
                    <p><BackToTopBottom /></p>
                </div>
            </div>
        </>
    );
};

export default ContactForm;