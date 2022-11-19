import { Sequelize } from "sequelize";

const db = new Sequelize('czasopisma_naukowe', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;