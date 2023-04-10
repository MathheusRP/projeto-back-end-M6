import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createContactsController, deleteContactController, listMyContacts, updateContactController } from "../controllers/contacts.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactsSchema, contactUpdateSchema } from "../schemas/contacts.schemas";
import { contactYupSchema } from "../schemas/contactsYup.schema";

export const contacsRoutes: Router = Router()

contacsRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(contactsSchema), createContactsController)

contacsRoutes.get('', ensureTokenIsValidMiddleware, listMyContacts)

contacsRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(contactUpdateSchema), updateContactController)

contacsRoutes.delete('/:id', ensureTokenIsValidMiddleware, deleteContactController)