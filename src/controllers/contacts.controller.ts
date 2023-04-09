import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContacts.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listMyContactsService } from "../services/contacts/listMyContacts.service";
import { updateContactService } from "../services/contacts/updateContacts.service";


export const createContactsController = async (req: Request, res: Response) => {
    const userId = req.user.id
    const contactData = req.body

    const newContact = await createContactService(contactData, userId)
    return res.status(201).json(newContact)
}

export const listMyContacts = async (req: Request, res: Response) => {
    const userId = req.user.id
    const myContacts = await listMyContactsService(userId)
    return res.status(200).json(myContacts)
}

export const updateContactController = async (req: Request, res: Response) => {
    const ownerId = req.user.id
    const contactId = Number(req.params.id)
    const contactData = req.body

    const contact = await updateContactService(contactId, ownerId, contactData)

    return res.status(200).json(contact)
}

export const deleteContactController = async (req: Request, res: Response) => {
    const ownerId = req.user.id
    const contactId = Number(req.params.id)

    await deleteContactService(contactId, ownerId)

    return res.status(204).json({})
}