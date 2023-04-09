import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors/appError";
import { ContactUpdateInterface } from "../../interfaces/contacts.interface";
import { contactsReturnSchema } from "../../schemas/contacts.schemas";

export const updateContactService = async (contactId: number, ownerId: number, contactData: ContactUpdateInterface) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if (oldContact?.user.id != ownerId) {
        throw new AppError('This contact does not exist or does not belong to your account', 401)
    }

    const contact = contactRepository.create({
        ...oldContact,
        ...contactData
    })

    await contactRepository.save(contact)

    const contactReturn = contactsReturnSchema.parse(contact)

    return contactReturn

}