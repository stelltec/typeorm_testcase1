import { Column, PrimaryGeneratedColumn } from "typeorm";

export class GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", nullable: true})
    field0: string;

    @Column({type: "text", nullable: true})
    field1: string;

    @Column({type: "text", nullable: true})
    field2: string;

    @Column({type: "text", nullable: true})
    field3: string;
}
