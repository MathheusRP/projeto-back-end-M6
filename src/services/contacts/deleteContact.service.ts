import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors/appError";

export const deleteContactService = async (contactId: number, ownerId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if (findContact?.user.id != ownerId) {
        throw new AppError('This contact does not exist or does not belong to your account', 401)
    }

    await contactRepository.remove(findContact)

}