import db from "../database/db.js";

import { DataTypes } from "sequelize";

const programas = db.define('programa',{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    nombre: {type: DataTypes.STRING},
    clave: {type: DataTypes.STRING}
    
}, {
  tableName: 'programa',      // Especifica el nombre exacto de la tabla si no es plural
  timestamps: false        // en caso quq la tabla no tenga creado o actualizado como columnas
});

export default programas
