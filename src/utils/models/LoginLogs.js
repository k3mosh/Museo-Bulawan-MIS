import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const LoginLog = sequelize.define('LoginLog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      // Use the table name string to avoid importing User and causing a circular dependency.
      model: 'users', 
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  start: {
    type: 'TIMESTAMP', // Use TIMESTAMP type
    allowNull: false,
  },
  end: {
    type: 'TIMESTAMP', // Use TIMESTAMP type
    allowNull: true,   // Allow null so it can be set on logout
  },
}, {
  tableName: 'login_logs',
  timestamps: false,
});

// Optionally, define associations in a centralized file after all models are imported

export default LoginLog;
