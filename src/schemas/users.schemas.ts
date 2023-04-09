import { z } from 'zod'
import { hashSync } from 'bcrypt'
import { contactListSchema, contactsReturnSchema } from './contacts.schemas'

export const userSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().min(10).max(60),
    password: z.string().min(3).max(25).transform((pass) => {
        return hashSync(pass, 5)
    }),
    phone_number: z.string().max(15),
    is_admin: z.boolean().optional().default(false),
})

export const userUpdateSchema = userSchema.partial()

export const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({ password: true })

export const returnListUserSchema = returnUserSchema.array()

export const myContactsSchema = returnUserSchema.extend({
    contact: contactsReturnSchema.array()

})