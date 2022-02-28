const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1646007840632 {
    name = 'initialSchema1646007840632'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sales" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userName" varchar NOT NULL, "age" integer NOT NULL, "height" integer NOT NULL, "gender" varchar NOT NULL, "sales" integer NOT NULL, "lastPurchaseDate" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "sales"`);
    }
}
