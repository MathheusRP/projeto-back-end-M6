import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

export const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if (isNaN(Number(req.params.id))) {
        return res.status(401).json({ message: 'O id do usuario não é um número valido' })
    }

    const findUser = await userRepository.findOne({
        where: {
            id: Number(req.params.id)
        }
    })

    if (!findUser) {
        throw new AppError('User not found', 404)
    }

    return next()
}