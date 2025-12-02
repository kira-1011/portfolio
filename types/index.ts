export interface ContactFormState {
    success: boolean
    data?: ContactFormData
    message?: string
    error?: string  // General error (API failure, connection, etc.)
    errors?: {
        fullName?: string[]
        email?: string[]
        message?: string[]
    }
}

export interface ContactFormData {
    fullName: string
    email: string
    message: string
}