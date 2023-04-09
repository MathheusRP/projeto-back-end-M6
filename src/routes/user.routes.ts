import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { CreateUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controllers";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { getUserByIdController } from "../controllers/users.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";

export const userRoutes: Router = Router()

userRoutes.post('',
    ensureDataIsValidMiddleware(userSchema),
    ensureEmailExistsMiddleware,
    CreateUserController
)

userRoutes.get('',
    ensureTokenIsValidMiddleware,
    ensureIsAdminMiddleware,
    listUserController
)

userRoutes.get('/:id',
    ensureTokenIsValidMiddleware,
    ensureIsAdminMiddleware,
    ensureUserExistsMiddleware,
    getUserByIdController
)

userRoutes.delete('/:id',
    ensureTokenIsValidMiddleware,
    ensureIsAdminMiddleware,
    ensureUserExistsMiddleware,
    deleteUserController
)

userRoutes.patch('/:id',
    ensureTokenIsValidMiddleware,
    ensureIsAdminMiddleware,
    ensureDataIsValidMiddleware(userUpdateSchema),
    ensureUserExistsMiddleware,
    ensureEmailExistsMiddleware,
    updateUserController
)

