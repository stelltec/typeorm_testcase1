import { Entity, OneToMany } from "typeorm";
import { Entity2 } from "./Entity2";
import { GenericEntity } from "./GenericEntity";

@Entity()
export class Entity1 extends GenericEntity {

    // Not a real parentEntity, just to make the compiler happy
    parentEntity: any;

    @OneToMany(type => Entity2, entity => entity.parentEntity)
    subEntities: Entity2[];

}
