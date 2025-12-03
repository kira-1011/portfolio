'use server'

import { ContactFormState } from '@/types'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Server-side schema (not exported to avoid boundary issues)
const contactSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(5, 'Message must be at least 5 characters'),
})

export async function submitContactForm(
    initialState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const result = contactSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        message: formData.get('message'),
    })

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
            data: {
                fullName: formData.get('fullName') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
            },
        }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['kirubel.s.tadesse@gmail.com'],
            replyTo: result.data.email,
            subject: `New Contact Form Message from ${result.data.fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <hr style="border: 1px solid #eee;" />
                    <p><strong>Name:</strong> ${result.data.fullName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${result.data.email}">${result.data.email}</a></p>
                    <h3 style="color: #333;">Message:</h3>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${result.data.message.replace(/\n/g, '<br>')}</p>
                    <hr style="border: 1px solid #eee;" />
                    <p style="color: #888; font-size: 12px;">This message was sent from your portfolio contact form.</p>
                </div>
            `,
        })

        if (error) {
            console.error('Resend error:', error)
            return {
                success: false,
                data: result.data,
                error: 'Failed to send message. Please try again later.',
            }
        }

        console.log('Email sent successfully:', data)
        return {
            success: true,
            data: result.data,
            message: 'Thank you for your message! I will get back to you soon.',
        }
    } catch (error) {
        console.error('Form submission error:', error)
        return {
            success: false,
            data: result.data,
            error: 'Something went wrong. Please try again later.',
        }
    }
}
