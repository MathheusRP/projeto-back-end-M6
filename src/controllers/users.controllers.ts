import { Request, Response } from "express";
import { UserInterface, UserUpdateInterface } from "../interfaces/users.interface";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { listUserService } from "../services/user/listUsers.service";
import { updateUserService } from "../services/user/updateUser.service";
import { getUserByIdService } from "../services/user/getUserById.service";

export const CreateUserController = async (req: Request, res: Response) => {
    const userData: UserInterface = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const listUserController = async (req: Request, res: Response) => {
    const listUser = await listUserService()

    return res.status(200).json(listUser)
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const user = await getUserByIdService(Number(req.params.id))

    return res.status(200).json(user)
}

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(Number(req.params.id))

    return res.status(204).send()
}

export const updateUserController = async (req: Request, res: Response) => {
    const userData = req.body
    const userId = Number(req.params.id)

    const user = await updateUserService(userData, userId)

    return res.status(200).json(user)
}
