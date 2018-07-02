import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity11 } from "./Entity11";
import { Entity13 } from "./Entity13";

@Entity()
export class Entity12 extends GenericEntity {

    @ManyToOne(type => Entity11)
    @Index()
    parentEntity: Entity11;

    @OneToMany(type => Entity13, entity => entity.parentEntity)
    subEntities: Entity13[];

}
