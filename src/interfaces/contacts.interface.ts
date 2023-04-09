import { contactsSchema, contactListSchema, contactsReturnSchema } from '../schemas/contacts.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

export type ContactInterface = z.infer<typeof contactsSchema>

export type ContactReturnInterface = z.infer<typeof contactsReturnSchema>

export type ContactListInterface = z.infer<typeof contactListSchema>

export type ContactUpdateInterface = DeepPartial<ContactInterface>