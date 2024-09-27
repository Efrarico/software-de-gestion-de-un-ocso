import { Entity, Column, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class Employee {
@PrimaryGeneratedColumn('uuid')
employeeId: string;
@Column('text')
name:string;
@Column('text')
LastName:string;
@Column('text')
phoneNumber: string
@Column('text')
email: string;
@Column({
    type: 'text',
    nullable: true
})
photoUrl: string;

}