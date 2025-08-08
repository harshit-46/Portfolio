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
import { toast } from 'react-hot-toast';
import "../assets/CSS/contactform.css";

const word1 = 'connect';

const socials = [
    { icon: <IoLogoInstagram />, link: "https://www.instagram.com/_harshit.25/" },
    { icon: <BsTwitterX />, link: "https://x.com/harshit__25" },
    { icon: <TfiLinkedin />, link: "https://www.linkedin.com/in/harshithere/" },
    { icon: <FiGithub />, link: "https://github.com/harshit-46" }
];

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { name, email, subject, message } = form;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading('Sending message...');

        try {
            const res = await fetch('https://portfolio-m869.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            toast.dismiss(loadingToast);

            if (res.ok) {
                toast.success('Message sent successfully!');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                toast.error(data?.message || 'Failed to send message. Try again.');
            }
        } catch (error) {
            console.error(error);
            toast.dismiss(loadingToast);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
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
                <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl">
                    Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond within 24 hours.
                </p>
            </div>

            <div className="bg-black border relative">
                <h2 className="text-5xl md:text-8xl font-semibold text-white pl-4 md:pl-32 pt-16 text-left" id="contact">
                    CONTACT ME
                </h2>
                <span className="absolute left-36 sm:left-36 top-18 flex flex-wrap">
                    <span className="under-head text-[#ff0000] text-6xl sm:text-9xl pr-4 flex">
                        {word1.split("").map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </span>
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
                                {socials.map(({ icon, link }, i) => (
                                    <a key={i} href={link} target="_blank" rel="noreferrer" className="p-3 border border-gray-600 rounded-md hover:bg-green-400 hover:text-black transition text-2xl">
                                        {icon}
                                    </a>
                                ))}
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
                                            value={name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                            placeholder="Steve Milner"
                                            autoComplete="name"
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
                                            value={email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 pr-12 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                            placeholder="hello@websitename.com"
                                            autoComplete="email"
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
                                        value={subject}
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
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={handleChange}
                                    rows="9"
                                    required
                                    className="w-full p-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Write your message"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 bg-green-500 text-black font-semibold py-3 px-8 rounded-md hover:bg-green-400 transition w-fit flex items-center gap-2 disabled:opacity-60"
                            >
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <AiOutlineMail className="text-xl" />
                            </button>
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
