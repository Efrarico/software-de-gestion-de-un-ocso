import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Employee } from "src/employees/entities/employee.entity";
import {OneToMany, JoinColumn,OneToOne,Entity, PrimaryGeneratedColumn, Column, ManyToOne} from"typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Location {
@PrimaryGeneratedColumn('increment')
locationId: number;

@ApiProperty({
    default: "OCSO Juriquilla"
})
@Column('text')
locationName: string;

@ApiProperty({
    default: "Av.tal, S/N, 76521"
})
@Column('text')
locationAddress: string;

@ApiProperty({
    default: [12 ,12]
})
@Column('simple-array')
locationLatLng: number[];

@OneToOne(() => Manager, {
    eager: true,
})
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
