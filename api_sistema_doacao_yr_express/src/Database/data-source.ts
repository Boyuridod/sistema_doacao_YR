import "reflect-metadata"
import { DataSource } from "typeorm"
import Doacao from '../Models/Doacao/Doacao'
import Doador from '../Models/Doador/Doador'
import {CreateDoacaoTable1714659446727} from './migrations/1714659446727-CreateDoacaoTable'
import {CreateDoadorTable1714659503624} from './migrations/1714659503624-CreateDoadorTable'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Doacao, Doador],
    migrations: [],
    subscribers: [],
})