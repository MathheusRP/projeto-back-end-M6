import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { loginInterface } from "../../interfaces/loginInterface";
import 'dotenv/config'

export const loginService = async (loginData: loginInterface): Promise<string> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if (!user) {
        throw new AppError('Wrong email or password', 400)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if (!passwordMatch) {
        throw new AppError('Wrong email or password', 400)
    }

    const token: string = jwt.sign(
        {
            is_admin: user.is_admin
        },

        process.env.SECRET_KEY!,

        {
            expiresIn: '4h',
            subject: String(user.id)
        }
    )
    return token

}