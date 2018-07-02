import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity8 } from "./Entity8";
import { Entity10 } from "./Entity10";

@Entity()
export class Entity9 extends GenericEntity {

    @ManyToOne(type => Entity8)
    @Index()
    parentEntity: Entity8;

    @OneToMany(type => Entity10, entity => entity.parentEntity)
    subEntities: Entity10[];
}
