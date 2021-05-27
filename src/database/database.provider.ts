import { Sequelize } from 'sequelize-typescript';
import entites from 'src/modules/entites';
import { config } from '../constants/config';
const  { database } = config

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: database.host || "localhost",
                port: database.port || 3306,
                username: database.username || "root",
                password: database.password || "1234",
                database: database.dbname || "starealdb"
            })
            sequelize.addModels(entites as any)
            await sequelize.sync()
            return sequelize
    }
  },
]