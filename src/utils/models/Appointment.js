// models/Appointment.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js'; // Adjust if necessary
import Visitor from './Visitors.js';         // Make sure the file name is correct

const Appointment = sequelize.define('Appointment', {
  appointment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  visitor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Visitor,
      key: 'visitor_id'
    },
    onDelete: 'CASCADE'
  },
  purpose_of_visit: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  population_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 // must be at least 1
    }
  },
  preferred_date: {
    type: DataTypes.DATEONLY, // Only store date part
    allowNull: false
  },
  preferred_time: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  creation_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  additional_notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'appointment',
  timestamps: false
});

// Relationship
Visitor.hasMany(Appointment, { foreignKey: 'visitor_id' });
Appointment.belongsTo(Visitor, { foreignKey: 'visitor_id' });

export default Appointment;
