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
  tableName: 'programa', //asignarle el nombre de la tabla, ya que seq pluraliza la tabla en base colo la definamos arriba
  timestamps: false   //para eliminar columnas que genera sequelize 
});

export default programas
