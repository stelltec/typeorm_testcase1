import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity4 } from "./Entity4";
import { Entity6 } from "./Entity6";

@Entity()
export class Entity5 extends GenericEntity {

    @ManyToOne(type => Entity4)
    @Index()
    parentEntity: Entity4;

    @OneToMany(type => Entity6, entity => entity.parentEntity)
    subEntities: Entity6[];

}
