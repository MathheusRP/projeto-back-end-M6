import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { User } from "../../entities/user.entity";
import { ContactInterface, ContactReturnInterface } from "../../interfaces/contacts.interface";
import { contactsReturnSchema } from "../../schemas/contacts.schemas";

export const createContactService = async (contactData: ContactInterface, userId: number): Promise<ContactReturnInterface> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({
        id: userId
    })

    const newContact = contactRepository.create({
        ...contactData,
        user: user!
    })
    await contactRepository.save(newContact)

    const contact = contactsReturnSchema.parse(newContact)

    return contact
}