import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sequelize } from './database.js';
import authRoutes from './route/authRoutes.js';
import http from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const clients = new Set();

wss.on('connection', (ws) => {
  // console.log('New client connected');
  clients.add(ws); 

  ws.on('message', (message) => {
    // console.log('Received message:', message);

    if (message.toString() === 'ping') {
      ws.send('pong');
    }
  });

  ws.on('close', (code, reason) => {
    // console.log(`Connection closed with code: ${code}, reason: ${reason}`);
    clients.delete(ws);  // Remove client from the set
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

export const broadcastUpdate = () => {
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send('refresh');
    }
  }
};

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();  
    await sequelize.sync(); 
    console.log('Database connected and models synchronized');
    
    // Start the HTTP server and WebSocket server on port 5000
    server.listen(5000, () => console.log('Server and WebSocket running on port 5000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Start the server
startServer();
