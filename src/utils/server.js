import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sequelize } from './database.js';
import authRoutes from './route/authRoutes.js';
import http from 'http';
import { WebSocketServer } from 'ws';
import jwt from 'jsonwebtoken';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const JWT_SECRET = process.env.JWT_SECRET || 'hachsinail';

/// server.js - WebSocket Server Improvements

// Change the clients Map to track multiple connections per user
const userConnections = new Map(); // userId -> Set of WebSockets

wss.on('connection', (ws, req) => {
  const token = new URL(req.url, `ws://${req.headers.host}`).searchParams.get('token');
  
  if (!token) {
    ws.close(1008, 'Unauthorized: No token provided');
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id;
    
    console.log(`New client connected for user ${userId}`);
    
    // Initialize user's connection set if not exists
    if (!userConnections.has(userId)) {
      userConnections.set(userId, new Set());
    }
    
    // Add this connection to the user's set
    userConnections.get(userId).add(ws);

    ws.on('message', (message) => {
      console.log(`Received message from user ${userId}:`, message.toString());
      if (message.toString() === 'ping') {
        ws.send('pong');
      }
    });

    ws.on('close', () => {
      console.log(`Connection closed for user ${userId}`);
      if (userConnections.has(userId)) {
        userConnections.get(userId).delete(ws);
        // Clean up if no more connections
        if (userConnections.get(userId).size === 0) {
          userConnections.delete(userId);
        }
      }
    });

    ws.on('error', (error) => {
      console.error(`WebSocket error for user ${userId}:`, error);
      if (userConnections.has(userId)) {
        userConnections.get(userId).delete(ws);
      }
    });

    // Send initial ping
    ws.send('ping');

  } catch (err) {
    console.error('WebSocket authentication error:', err);
    ws.close(1008, 'Unauthorized: Invalid token');
  }
});

// Improved broadcast functions
export const broadcastUpdate = () => {
  const message = 'refresh';
  let totalSent = 0;
  
  userConnections.forEach((connections, userId) => {
    connections.forEach(ws => {
      if (ws.readyState === ws.OPEN) {
        ws.send(message);
        totalSent++;
      }
    });
  });
  
  console.log(`Broadcasted update to ${totalSent} connections across ${userConnections.size} users`);
};

export const broadcastToUser = (userId, message = 'refresh') => {
  if (!userConnections.has(userId)) {
    console.log(`No active connections for user ${userId}`);
    return;
  }

  let sentCount = 0;
  userConnections.get(userId).forEach(ws => {
    if (ws.readyState === ws.OPEN) {
      ws.send(message);
      sentCount++;
    }
  });
  
  console.log(`Sent update to ${sentCount}/${userConnections.get(userId).size} connections for user ${userId}`);
};

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.get('/api/auth/currentUser', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  // `req.user` might be set by your auth middleware
  return res.json({ id: req.user.id});
});


const startServer = async () => {
  try {
    await sequelize.authenticate();  
    await sequelize.sync(); 
    console.log('Database connected and models synchronized');
    
    server.listen(5000, () => console.log('Server and WebSocket running on port 5000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();