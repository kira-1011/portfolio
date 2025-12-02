'use client';

import { ArrowRight, Loader2 } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { submitContactForm } from '@/actions/contact';
import { ContactFormState } from '@/types';
import { toast } from 'sonner';

const initialState: ContactFormState = {
    success: false,
};

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    useEffect(() => {
        if (state.success) {
            toast.success(state.message);
        }
        if (state.error) {
            toast.error(state.error);
        }
    }, [state.success, state.message, state.error]);    

    return (
        <section id="contact" className="flex flex-col justify-center">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
                <p className="text-gray-500 mb-12">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                <form action={formAction} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-3">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                                state.errors?.fullName
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-purple-600 focus:ring-purple-600'
                            }`}
                        />
                        {state.errors?.fullName && (
                            <p className="mt-2 text-sm text-red-500" aria-live="polite">
                                {state.errors.fullName[0]}
                            </p>
                        )}
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
                            required
                            placeholder="Enter your email"
                            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                                state.errors?.email
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-purple-600 focus:ring-purple-600'
                            }`}
                        />
                        {state.errors?.email && (
                            <p className="mt-2 text-sm text-red-500" aria-live="polite">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Enter your message"
                            rows={6}
                            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-1 transition-colors ${
                                state.errors?.message
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 focus:border-purple-600 focus:ring-purple-600'
                            }`}
                        />
                        {state.errors?.message && (
                            <p className="mt-2 text-sm text-red-500" aria-live="polite">
                                {state.errors.message[0]}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="flex items-center gap-2 px-6 py-2 group border border-gray-300 text-gray-500 rounded-sm hover:cursor-pointer hover:border-purple-600 hover:text-purple-600 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Submit
                                <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform duration-300' />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
