import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { Entity1 } from "./Entity1";
import { Entity3 } from "./Entity3";
import { GenericEntity } from "./GenericEntity";

@Entity()
export class Entity2 extends GenericEntity {

    @ManyToOne(type => Entity1)
    @Index()
    parentEntity: Entity1;

    @OneToMany(type => Entity3, entity => entity.parentEntity)
    subEntities: Entity3[];

}
