import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoacaoTable1714659446727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doacoes',
                columns: [
                    {
                        name: 'codigo',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'data',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'hora',
                        type: 'time',
                        isNullable: false
                    },
                    {
                        name: 'volume',
                        type: 'int',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doacoes')
    }

}
