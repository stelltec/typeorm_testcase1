import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity6 } from "./Entity6";
import { Entity8 } from "./Entity8";

@Entity()
export class Entity7 extends GenericEntity {

    @ManyToOne(type => Entity6)
    @Index()
    parentEntity: Entity6;

    @OneToMany(type => Entity8, entity => entity.parentEntity)
    subEntities: Entity8[];

}
