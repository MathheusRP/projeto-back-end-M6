import { UserInterface, UserReturnInterface } from "../../interfaces/users.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { returnUserSchema } from "../../schemas/users.schemas";

export const createUserService = async (userData: UserInterface): Promise<UserReturnInterface> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}