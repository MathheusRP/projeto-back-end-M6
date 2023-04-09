import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
    ManyToOne
} from 'typeorm'
import { User } from './user.entity'

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone_number: string

    @CreateDateColumn()
    createdAt: string

    @ManyToOne(() => User, { cascade: true })
    user: User
}