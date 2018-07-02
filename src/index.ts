import "reflect-metadata";
import { createConnection, getConnection, getRepository } from "typeorm";
import { Timer } from "./timer";
import { Entity1 } from "./entity/Entity1";
import { Entity2 } from "./entity/Entity2";
import { Entity3 } from "./entity/Entity3";
import { Entity4 } from "./entity/Entity4";
import { Entity5 } from "./entity/Entity5";
import { Entity7 } from "./entity/Entity7";
import { Entity6 } from "./entity/Entity6";
import { Entity8 } from "./entity/Entity8";
import { Entity9 } from "./entity/Entity9";
import { Entity10 } from "./entity/Entity10";
import { Entity11 } from "./entity/Entity11";
import { Entity12 } from "./entity/Entity12";
import { Entity13 } from "./entity/Entity13";

const ENTITIES = [
    { EntityConstructor: Entity1, nChildren: 20 },
    { EntityConstructor: Entity2, nChildren: 1 },
    { EntityConstructor: Entity3, nChildren: 2 },
    { EntityConstructor: Entity4, nChildren: 16 },
    { EntityConstructor: Entity5, nChildren: 1 },
    { EntityConstructor: Entity6, nChildren: 1 },
    { EntityConstructor: Entity7, nChildren: 2 },
    { EntityConstructor: Entity8, nChildren: 2 },
    { EntityConstructor: Entity9, nChildren: 1 },
    { EntityConstructor: Entity10, nChildren: 1 },
    { EntityConstructor: Entity11, nChildren: 1 },
    { EntityConstructor: Entity12, nChildren: 2 },
    { EntityConstructor: Entity13, nChildren: 0 }
];

async function createEntityNode(level: number, parentEntity: any): Promise<any> {

    const conn = await getConnection();

    console.log(`${"  ".repeat(level)}Creating level=${level} parentEntityId=${parentEntity ? parentEntity.id : null}`);

    const e = new ENTITIES[level].EntityConstructor;
    e.field0 = `level:${level}`;
    e.field1 = `test_test_test_test_test_test_`;
    e.field2 = "";
    e.field3 = "";

    if (level !== 0 && parentEntity !== null) {
        e.parentEntity = parentEntity;
    }
    const res = await conn.manager.save(e);

    if (level + 1 < ENTITIES.length) {
        const promises = [];
        for (let i = 0; i < ENTITIES[level].nChildren; i++) {
            promises.push(createEntityNode(level + 1, res));
        }
        await Promise.all(promises);
    }

}


function sameComplexityTreeBuild(level: number, parentEntity: any): any {

    const e = new ENTITIES[level].EntityConstructor;
    e.field0 = `level:${level}`;
    e.field1 = `test_test_test_test_test_test_`;
    e.field2 = "";
    e.field3 = "";


    if (level !== 0 && parentEntity !== null) {
        e.parentEntity = parentEntity;
    }

    if (level + 1 < ENTITIES.length) {
        const sub = [];
        for (let i = 0; i < ENTITIES[level].nChildren; i++) {
            const subEntity = sameComplexityTreeBuild(level + 1, e);
            sub.push(subEntity);
        }
        e.subEntities = sub;
    }

    return e;

}


(async () => {

    const connection = await createConnection();

    try {

        console.log("############################################## Create DB objects");
        await createEntityNode(0, null);

        console.log("\n\n############################################## Query the DB");

        const query = getRepository(Entity1)
            .createQueryBuilder("e1")
            .leftJoinAndSelect("e1.subEntities", "e2")
            .leftJoinAndSelect("e2.subEntities", "e3")
            .leftJoinAndSelect("e3.subEntities", "e4")
            .leftJoinAndSelect("e4.subEntities", "e5")
            .leftJoinAndSelect("e5.subEntities", "e6")
            .leftJoinAndSelect("e6.subEntities", "e7")
            .leftJoinAndSelect("e7.subEntities", "e8")
            .leftJoinAndSelect("e8.subEntities", "e9")
            .leftJoinAndSelect("e9.subEntities", "e10")
            .leftJoinAndSelect("e10.subEntities", "e11")
            .leftJoinAndSelect("e11.subEntities", "e12")
            .leftJoinAndSelect("e12.subEntities", "e13");

        console.log("query: ", query.getSql());


        for (let nTest = 0; nTest < 5; nTest++) {

            console.log(`\n>>>>>>>> Test n.${nTest}`);
            const t0 = new Timer("Raw query");
            const raw = await connection.createQueryRunner().query(query.getSql());
            t0.stop();
            console.log("N. of rows returned: ", raw.length);
            const t1 = new Timer("Query with hydration");
            const res = await query.getMany();
            t1.stop();

        }

        console.log("\n\n############################################## Same complexity tree build:");

        for (let nTest = 0; nTest < 5; nTest++) {
            console.log(`\n>>>>>>>> Test n.${nTest}`);
            const ts = new Timer("Manual tree build");
            const e = sameComplexityTreeBuild(0, null);
            ts.stop();
        }


    } catch (e) {
        console.error("Exception: ", e);
    }

    await connection.close();

})();
