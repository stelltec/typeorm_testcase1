import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity7 } from "./Entity7";
import { Entity9 } from "./Entity9";

@Entity()
export class Entity8 extends GenericEntity {

    @ManyToOne(type => Entity7)
    @Index()
    parentEntity: Entity7;

    @OneToMany(type => Entity9, entity => entity.parentEntity)
    subEntities: Entity9[];
}
