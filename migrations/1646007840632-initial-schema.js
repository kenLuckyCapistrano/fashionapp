const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class initialSchema1646007840632 {
    name = 'initialSchema1646007840632'

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
            name: 'sales',
            columns: [
                {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                },
                {
                name: 'userName',
                type: 'varchar',
                },
                {
                name: 'age',
                type: 'integer',
                },
                {
                name: 'height',
                type: 'integer',
                },
                {
                name: 'gender',
                type: 'varchar',
                },
                {
                name: 'sales',
                type: 'integer',
                },
                {
                name: 'lastPurchaseDate',
                type: 'varchar',
                },
                
            ],
            }),
        );
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "sales" ("id" integer 
        PRIMARY KEY AUTOINCREMENT NOT NULL, 
        "userName" varchar NOT NULL, 
        "age" integer NOT NULL, 
        "height" integer NOT NULL, 
        "gender" varchar NOT NULL, 
        "sales" integer NOT NULL, "
        lastPurchaseDate" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "sales"`);
    }
}
