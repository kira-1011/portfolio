export interface ContactFormState {
    success: boolean
    message?: string
    error?: string  // General error (API failure, connection, etc.)
    errors?: {
        fullName?: string[]
        email?: string[]
        message?: string[]
    }
}
