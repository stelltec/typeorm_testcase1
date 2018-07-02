import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity10 } from "./Entity10";
import { Entity12 } from "./Entity12";

@Entity()
export class Entity11 extends GenericEntity {

    @ManyToOne(type => Entity10)
    @Index()
    parentEntity: Entity10;


    @OneToMany(type => Entity12, entity => entity.parentEntity, { cascade: true })
    subEntities: Entity12[];

}
