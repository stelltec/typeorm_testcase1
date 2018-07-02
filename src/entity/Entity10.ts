import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Entity9 } from "./Entity9";
import { Entity11 } from "./Entity11";

@Entity()
export class Entity10 extends GenericEntity {

    @ManyToOne(type => Entity9)
    @Index()
    parentEntity: Entity9;

    @OneToMany(type => Entity11, entity => entity.parentEntity, { cascade: true })
    subEntities: Entity11[];

}
