import { userSchema, returnUserSchema, returnListUserSchema } from "../schemas/users.schemas";
import { z } from 'zod'
import { DeepPartial } from "typeorm";

export type UserInterface = z.infer<typeof userSchema>

export type UserReturnInterface = z.infer<typeof returnUserSchema>

export type UserListReturnInterface = z.infer<typeof returnListUserSchema>

export type UserUpdateInterface = DeepPartial<UserInterface>

// export type UserUpdateInterface = z.infer<typeof userUpdateSchema>