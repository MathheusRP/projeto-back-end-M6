import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
} from 'typeorm'
import { Contact } from './contact';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 40 })
    name: string;

    @Column({ length: 60, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 15, unique: true })
    phone_number: string

    @Column({ type: 'boolean', nullable: true })
    is_admin?: boolean | undefined | null

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]

}

