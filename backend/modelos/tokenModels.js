import db from "../database/db.js";
import { DataTypes, Sequelize } from 'sequelize';

const blackList = db.define('blacktokens',{
    idToken: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true},
    tokenChar: {type: DataTypes.STRING},
    fechaToken: {type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
    tokenExp: {type: DataTypes.DATE, allowNull: false},
    estado: {type: DataTypes.STRING, defaultValue: "Activo"}    
}, {
    tableName: "blacktokens",
    timestamps: false
})


export default blackList;