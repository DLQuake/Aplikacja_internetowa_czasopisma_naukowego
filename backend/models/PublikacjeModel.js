import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Uzytkownik from "./UzytkownikModel.js";

const { DataTypes } = Sequelize;

const Publikacje = db.define('publikacje', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tytul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    opis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 255]
        }
    },
    plik: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    uzytkownikId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

Uzytkownik.hasMany(Publikacje);
Publikacje.belongsTo(Uzytkownik, { foreignKey: "uzytkownikId" })

export default Publikacje;