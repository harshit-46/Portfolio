/*

import React, { useState } from 'react';
import CursorCircle from './CursorCircle';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

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
            }
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong.');
        }
    };

    return (
        <>
            <CursorCircle/>
            <h1 className='text-9xl font-bold'>SAY HELLO!</h1>
            <p>Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my <br /> best to respond to your inquiry within 24 hours.</p>
            <div className="min-h-screen bg-[#f9f8f6] flex items-center justify-center px-6 py-12">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">

                    <div className="bg-gray-100 p-8 flex flex-col justify-between w-full md:w-1/2">
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold">OUR OFFICE:</p>
                                <p className="text-gray-500 mt-1">Jurain, Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <p className="font-semibold">CONTACT NUMBER:</p>
                                <p className="text-gray-500 mt-1">+1234321321</p>
                            </div>
                            <div>
                                <p className="font-semibold">EMAIL US:</p>
                                <p className="text-gray-500 mt-1">websitename@mail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <a href="#" className="p-2 border rounded hover:bg-black hover:text-white transition text-sm font-medium">
                                Facebook
                            </a>
                            <a href="#" className="p-2 border rounded hover:bg-black hover:text-white transition text-sm font-medium">
                                Twitter
                            </a>
                            <a href="#" className="p-2 border rounded hover:bg-black hover:text-white transition text-sm font-medium">
                                LinkedIn
                            </a>
                            <a href="#" className="p-2 border rounded hover:bg-black hover:text-white transition text-sm font-medium">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="p-8 w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="flex-1 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="flex-1 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Write Your Message"
                                required
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                        {status && (
                            <p className="text-center text-sm text-green-500 mt-4">{status}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;

*/


import React, { useState } from 'react';
import CursorCircle from './CursorCircle';
import '../assets/CSS/contactform.css'

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

            {/* Big Heading */}
            <div className="text-white bg-black text-center py-16 px-4">
                <h1 className="text-6xl md:text-9xl font-bold mb-6">SAY HELLO!</h1>
                <p className="max-w-2xl mx-auto text-gray-300">
                    Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my
                    best to respond to your inquiry within 24 hours.
                </p>
            </div>

            {/* "CONTACT ME" small heading */}
            <div className="bg-black text-center">
                <h2 className="text-6xl font-bold text-white mb-6 inline-block px-6 py-2" id="contact">
                    CONTACT ME
                </h2>
            </div>

            {/* Contact Form Section */}
            <div className="bg-black flex items-center justify-center px-6 py-12">
                <div className="flex flex-col md:flex-row bg-[#111111] rounded-lg shadow-2xl overflow-hidden max-w-6xl w-full">

                    {/* Left Side - Contact Info */}
                    <div className="bg-[#1a1a1a] p-8 flex flex-col justify-between w-full md:w-1/2 text-white">
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-white">OUR OFFICE:</p>
                                <p className="text-gray-400 mt-1">Jurain, Dhaka Bangladesh</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">CONTACT NUMBER:</p>
                                <p className="text-gray-400 mt-1">+1234321321</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">EMAIL US:</p>
                                <p className="text-gray-400 mt-1">websitename@mail.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-8">
                            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition text-sm font-medium">Facebook</a>
                            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition text-sm font-medium">Twitter</a>
                            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition text-sm font-medium">LinkedIn</a>
                            <a href="#" className="p-2 border rounded hover:bg-white hover:text-black transition text-sm font-medium">GitHub</a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-8 w-full md:w-1/2 bg-[#111111] text-white">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="flex-1 p-3 bg-[#1f1f1f] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="flex-1 p-3 bg-[#1f1f1f] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="w-full p-3 bg-[#1f1f1f] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Write Your Message"
                                required
                                className="w-full p-3 bg-[#1f1f1f] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-black p-3 rounded font-semibold hover:bg-green-400 transition"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Status Message */}
                        {status && (
                            <p className={`text-center text-sm mt-4 ${error ? 'text-red-400' : 'text-green-400'}`}>
                                {status}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-black text-white text-center py-8">
                © 2025 Harshit. All Rights Reserved.
            </div>
        </>
    );
};

export default ContactForm;
