import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';
import Credential from './Credential.js'; 

const Log = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  action: {
    type: DataTypes.ENUM('create', 'update', 'delete', 'soft_delete'),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  modelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  details: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'credentials', 
      key: 'id',
    },
    onDelete: 'CASCADE', 
  },
}, {
  tableName: 'logs',
  timestamps: true,
  updatedAt: false,
});

// Set up associations
Credential.hasMany(Log, { foreignKey: 'userId' });
Log.belongsTo(Credential, { foreignKey: 'userId' });

export default Log;
