import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Employee } from "src/employees/entities/employee.entity";
import {OneToMany, JoinColumn,OneToOne,Entity, PrimaryGeneratedColumn, Column, ManyToOne} from"typeorm";

@Entity()
export class Location {
@PrimaryGeneratedColumn('increment')
locationId: number;
@Column('text')
locationName: string;
@Column('text')
locationAdress: string;
@Column('simple-array')
locationLating: number[];

@OneToOne(() => Manager)
@JoinColumn({
    name: "managerId"
})
manager: Manager;
@ManyToOne(() => Region, (region) => region.locations)
@JoinColumn({
    name: "regionId"
})
region: "regionId"

@OneToMany(() => Employee, (employee) => employee.location)
employees: Employee[];
}
