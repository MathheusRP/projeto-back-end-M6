import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const ensureIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user.is_admin) {
        throw new AppError('you are not an admin', 403)
    }

    return next()
}