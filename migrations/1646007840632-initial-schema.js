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

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "sales"`);
    }
}
