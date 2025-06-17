import db from "../database/db.js";

import { DataTypes } from "sequelize";

const usuarios = db.define('usuarios', {
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true},
    nombre: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.INTEGER
    },
    contraseña: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    programa:{
        type:DataTypes.INTEGER
    },
    generacion: {
        type: DataTypes.INTEGER
    },
    rol:{
        type: DataTypes.INTEGER
    },
    estado: {
    type: DataTypes.STRING,
    defaultValue: ""
  }

}, {
    tableName: 'usuarios',
    timestamps: false
});

export default usuarios;