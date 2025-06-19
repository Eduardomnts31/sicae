import db from "../database/db.js";
import { DataTypes } from "sequelize";

const asistencias = db.define('asistencia', {
    id_asistencia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:{
        type: DataTypes.INTEGER
    },
    ip_usuario:{
        type: DataTypes.STRING
    },
    huella:{
        type: DataTypes.STRING
    },
    fecha_alistado:{
        type: DataTypes.DATE
    },
    hora:{
        type: DataTypes.TIME
    },
    estado:{
        type: DataTypes.STRING
    }
},{
    tableName: 'asistencia',
    timestamps:false
});

export default asistencias;