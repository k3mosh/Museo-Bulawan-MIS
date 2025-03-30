import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('msb_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};
