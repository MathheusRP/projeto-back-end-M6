import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { UserReturnInterface, UserUpdateInterface } from "../../interfaces/users.interface"
import { returnUserSchema } from "../../schemas/users.schemas"

export const updateUserService = async (userData: UserUpdateInterface, userId: number): Promise<UserReturnInterface> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const oldUserData = await userRepository.findOneBy({
        id: Number(userId)
    })

    const user = userRepository.create({
        ...oldUserData,
        ...userData
    })
    await userRepository.save(user)

    const updateUser = returnUserSchema.parse(user)

    return updateUser
}