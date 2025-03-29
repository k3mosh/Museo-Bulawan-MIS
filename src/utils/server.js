import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'msb_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.listen(5000, () => console.log('Server running on port 5000'));
