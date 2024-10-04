import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    userId: string;
    @Column('text')
    useerEmail: string;
    @Column('text')
    userPassword: string;
  userEmail: any;
  @Column('simple-array', {
    default: "Employee"
  })
  userRoles: string[];
}