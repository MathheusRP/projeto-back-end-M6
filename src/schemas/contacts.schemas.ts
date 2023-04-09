import { z } from 'zod'

export const contactsSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.string().min(10).max(60),
    phone_number: z.string().max(15),
})

export const contactUpdateSchema = contactsSchema.partial()

export const contactsReturnSchema = contactsSchema.extend({
    id: z.number(),
    createdAt: z.date()
})

export const contactListSchema = contactsReturnSchema.array()