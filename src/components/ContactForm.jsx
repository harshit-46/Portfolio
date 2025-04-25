import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
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
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
            <div className="max-w-xl w-full space-y-6">
                <h2 className="text-3xl font-bold text-green-400">Let's Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm text-gray-300">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm text-gray-300">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-500 hover:bg-green-400 text-black font-medium rounded transition"
                    >
                        Send Message
                    </button>
                </form>

                {status && (
                    <p className="text-sm mt-2 text-center text-green-300">{status}</p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
