import React, { useState } from 'react';
import CursorCircle from './CursorCircle';
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
            <div className="text-white bg-black text-center py-16 px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">SAY HELLO!</h1>
                <p className="max-w-2xl mx-auto text-gray-400">
                    Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond to your inquiry within 24 hours.
                </p>
            </div>

            <div className="bg-black flex items-center justify-center px-6 py-16">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left Section (1/3) */}
                    <div className="col-span-1 bg-[#111] rounded-lg p-10 flex flex-col space-y-16 text-white min-h-[650px]">
                        {/* Location */}
                        <div className="flex flex-col items-start space-y-4">
                            <GrLocation className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">OUR OFFICE:</p>
                                <p className="text-gray-400 mt-1">Dehradun, India</p>
                            </div>
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col items-start space-y-4">
                            <LiaHeadphonesSolid className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">CONTACT NUMBER:</p>
                                <p className="text-gray-400 mt-1">+91 9690424413</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-start space-y-4">
                            <AiOutlineMail className="text-5xl text-green-400 mb-3" />
                            <div>
                                <p className="font-bold text-lg">EMAIL US:</p>
                                <p className="text-gray-400 mt-1">iamharshit999@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="font-bold text-lg">SOCIALS</p>
                            <div className="flex gap-4 pt-6">
                                <a href="#" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <IoLogoInstagram />
                                </a>
                                <a href="#" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <BsTwitterX />
                                </a>
                                <a href="#" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <TfiLinkedin />
                                </a>
                                <a href="#" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                    <FiGithub />
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Right Section (2/3) */}
                    <div className="col-span-2 bg-[#111] rounded-lg p-8 text-white">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                            {/* Full Name and Email Side-by-side */}
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

                            {/* Subject */}
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

                            {/* Message */}
                            <div className="flex flex-col">
                                <label className="mb-4 text-sm font-semibold text-gray-400">YOUR MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Write your message"
                                />
                            </div>

                            {/* Send Message Button */}
                            <button
                                type="submit"
                                className="mt-4 bg-green-500 text-black font-semibold py-3 px-8 rounded-md hover:bg-green-400 transition w-fit"
                            >
                                Send Message
                            </button>

                            {/* Status */}
                            {status && (
                                <p className={`text-center text-sm font-semibold mt-4 ${error ? 'text-red-400' : 'text-green-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="bg-black text-white text-center py-8 pt-20">
                <p className='py-8'>Have a project in mind?</p>
                <h1 className='text-9xl font-bold'>LET'S WORK</h1>
                <div>
                    <p>&copy; 2025 ALL RIGHTS RESERVED</p>
                    <p><BackToTopBottom /></p>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
