import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity12 } from "./Entity12";

@Entity()
export class Entity13 extends GenericEntity {

    @ManyToOne(type => Entity12)
    @Index()
    parentEntity: Entity12;

    // This is not a real subEntities property, it's just to make the compiler happy
    subEntities: any[];

}
