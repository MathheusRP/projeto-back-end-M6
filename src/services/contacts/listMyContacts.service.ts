import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { myContactsSchema } from "../../schemas/users.schemas";

export const listMyContactsService = async (userId: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            contact: true
        }
    })

    const myContacts = myContactsSchema.parse(user)

    return myContacts
}
