import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { UserReturnInterface } from "../../interfaces/users.interface";
import { Repository } from "typeorm";
import { returnUserSchema } from "../../schemas/users.schemas";

export const getUserByIdService = async (userId: number): Promise<UserReturnInterface> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    const user = returnUserSchema.parse(findUser)

    return user
}