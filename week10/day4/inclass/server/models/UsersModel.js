import { Sequelize, STRING } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    username: {
        type:DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    {
        timestamps:false,
        freezeTableName: true,
        tableName:'users'
    }
});

export default Users;
//id createdAt 