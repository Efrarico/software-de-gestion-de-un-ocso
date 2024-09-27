import {Entity, PrimaryGeneratedColumn, Column} from"typeorm";

@Entity()
export class Location {
@PrimaryGeneratedColumn('increment')
locationId: number;
@Column('text')
locationName: string;
@Column('array')
locationLating: number[];

}
