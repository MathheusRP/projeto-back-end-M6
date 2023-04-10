import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { returnUserSchema } from "../../schemas/users.schemas";
import { UserReturnInterface } from "../../interfaces/users.interface";

export const getProfileService = async (userId: number): Promise<UserReturnInterface> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const user = returnUserSchema.parse(findUser)

    return user
}