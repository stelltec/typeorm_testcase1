import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity3 } from "./Entity3";
import { Entity5 } from "./Entity5";

@Entity()
export class Entity4 extends GenericEntity {

    @ManyToOne(type => Entity3)
    @Index()
    parentEntity: Entity3;


    @OneToMany(type => Entity5, entity => entity.parentEntity)
    subEntities: Entity5[];

}
