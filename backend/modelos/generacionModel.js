import db from "../database/db.js";

import { DataTypes } from "sequelize";

const generaciones = db.define('generaciones', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    anio:{
    type: DataTypes.STRING
  },
    descripcion: {
    type: DataTypes.STRING
  }

},{
    tableName: 'generaciones',      
    timestamps: false 
});

export default generaciones;

