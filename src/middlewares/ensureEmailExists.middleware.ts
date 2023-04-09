import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

export const ensureEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if (!req.body.email) {
        return next()
    }

    const findEmail = await userRepository.findOne({
        where: {
            email: req.body.email
        }
    })

    if (findEmail != null) {
        throw new AppError('The email is already being used', 401)
    }

    return next()
}