// models/AppointmentStatus.js

import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js'; // Update the path to your database instance if needed
import Appointment from './Appointment.js'; // Adjust path/file name

const AppointmentStatus = sequelize.define('AppointmentStatus', {
  status_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  appointment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Appointment,
      key: 'appointment_id'
    },
    onDelete: 'CASCADE'
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'TO_REVIEW'
  },
  // creation_date omitted since you prefer to rely on 'appointment.creation_date'
  // but you can add it if you need a timestamp for when the status was created
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'appointment_status',
  // Disable Sequelize's automatic timestamps
  timestamps: false
});

// Link back to `appointment` table
Appointment.hasOne(AppointmentStatus, { foreignKey: 'appointment_id' });
AppointmentStatus.belongsTo(Appointment, { foreignKey: 'appointment_id' });

export default AppointmentStatus;
