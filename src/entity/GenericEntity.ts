import { Column, PrimaryGeneratedColumn } from "typeorm";

export class GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    field0: string;

    @Column()
    field1: string;

    @Column()
    field2: string;

    @Column()
    field3: string;
}
