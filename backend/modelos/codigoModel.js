import db from '../database/db.js';

import { DataTypes, Sequelize } from 'sequelize';

const codigo = db.define('codigo', {
    codigoDia: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    creadoDia: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    creadoPor: {
        type: DataTypes.INTEGER,
        allowNull:true

    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: "activo"
    }
}, {
  tableName: 'codigo',      
  timestamps: false       
});

export default codigo;