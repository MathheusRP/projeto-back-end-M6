import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { UserListReturnInterface } from "../../interfaces/users.interface"
import { returnListUserSchema } from "../../schemas/users.schemas"

export const listUserService = async (): Promise<UserListReturnInterface> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const users: Array<User> = await userRepository.find(
        {
            withDeleted: true
        }
    )

    const listUsers = returnListUserSchema.parse(users)

    return listUsers
} 