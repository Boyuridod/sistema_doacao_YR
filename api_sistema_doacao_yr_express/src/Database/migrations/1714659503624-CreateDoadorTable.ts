import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDoadorTable1714659503624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'doadores',
                columns: [
                    {
                        name: 'codigo',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '60', 
                        isNullable: false
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '11', 
                        isNullable: false
                    },
                    {
                        name: 'contato',
                        type: 'varchar',
                        length: '14', 
                        isNullable: false
                    },
                    {
                        name: 'tipoSanguineo',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'fatorRH',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'tipoRhCorretos',
                        type: 'boolean'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doadores')
    }
}
