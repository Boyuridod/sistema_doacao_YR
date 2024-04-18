import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3600,
    username: "username",
    password: "password",
    database: "database_name",
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})