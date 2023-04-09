import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { loginSchema } from "../schemas/login.schemas";

export const loginRouter: Router = Router()

loginRouter.post('', ensureDataIsValidMiddleware(loginSchema), loginController)