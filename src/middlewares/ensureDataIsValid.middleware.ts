import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'

export const ensureDataIsValidMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const validated = schema.parse(req.body);
        req.body = validated;
        return next();
    } catch (error) {
        return res.status(400).json({ error: 'One of the fields must be defined' })
    }

};