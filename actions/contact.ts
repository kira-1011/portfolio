'use server'

import { ContactFormState } from '@/types'
import { z } from 'zod'

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
        }
    }

    try {
        // TODO: Send email or save to database
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('Form submitted:', result.data)

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
