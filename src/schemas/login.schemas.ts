import z from 'zod'

export const loginSchema = z.object({
    email: z.string().min(10).max(60),
    password: z.string().min(3).max(25),
})