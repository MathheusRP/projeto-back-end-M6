import { z } from 'zod'
import { loginSchema } from '../schemas/login.schemas'

export type loginInterface = z.infer<typeof loginSchema>