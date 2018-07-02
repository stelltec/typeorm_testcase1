import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { Entity2 } from "./Entity2";
import { GenericEntity } from "./GenericEntity";
import { Entity4 } from "./Entity4";

@Entity()
export class Entity3 extends GenericEntity {

    @ManyToOne(type => Entity2)
    @Index()
    parentEntity: Entity2;

    @OneToMany(type => Entity4, entity => entity.parentEntity)
    subEntities: Entity4[];

}
