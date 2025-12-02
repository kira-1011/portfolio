'use client';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here (e.g., send to API)
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Say Something</h2>
                <p className="text-gray-500 mb-12">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-3">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-3">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 font-medium"
                    >
                        Submit
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </section>
    );
}
