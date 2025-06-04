import db from "../database/db.js"; //importamos la base de datos desde esa ruta

import { DataTypes } from "sequelize";

const roles = db.define('roles',{
    id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_rol: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'roles',      // Especifica el nombre exacto de la tabla si no es plural
  timestamps: false        // Si tu tabla no tiene columnas createdAt / updatedAt
});

export default roles;