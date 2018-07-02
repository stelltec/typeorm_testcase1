import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity5 } from "./Entity5";
import { Entity7 } from "./Entity7";

@Entity()
export class Entity6 extends GenericEntity {

    @ManyToOne(type => Entity5)
    @Index()
    parentEntity: Entity5;

    @OneToMany(type => Entity7, entity => entity.parentEntity)
    subEntities: Entity7[];

}
