// websocket.js - Client-side improvements

let socketRef = null;
let isConnectedRef = { current: false };
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;
const baseReconnectDelay = 1000;

export const connectWebSocket = (onRefreshCallback) => {
  if (isConnectedRef.current && socketRef) {
    console.log('WebSocket already connected');
    return;
  }

  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found, unable to connect to WebSocket');
    return;
  }

  // Close existing connection if any
  if (socketRef) {
    socketRef.close();
  }

  const socket = new WebSocket(`ws://${window.location.hostname}:5000/?token=${token}`);

  socket.onopen = () => {
    console.log('WebSocket connected successfully');
    isConnectedRef.current = true;
    reconnectAttempts = 0;
    socketRef = socket;
    socket.send('ping'); // Initial ping
  };

  socket.onmessage = (event) => {
    console.log('WebSocket message received:', event.data);
    if (event.data === 'refresh' && typeof onRefreshCallback === 'function') {
      onRefreshCallback();
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
    isConnectedRef.current = false;
  };

  socket.onclose = (event) => {
    console.log('WebSocket closed:', event.code, event.reason);
    isConnectedRef.current = false;
    
    if (event.code !== 1000 && reconnectAttempts < maxReconnectAttempts) {
      const delay = baseReconnectDelay * Math.pow(2, reconnectAttempts);
      reconnectAttempts++;
      
      console.log(`Reconnecting in ${delay}ms (attempt ${reconnectAttempts})`);
      setTimeout(() => connectWebSocket(onRefreshCallback), delay);
    }
  };
};

export const closeWebSocket = () => {
  if (socketRef) {
    socketRef.close(1000, 'Manual disconnect');
    socketRef = null;
    isConnectedRef.current = false;
  }
};

// Ensure single connection per client
let connectionPromise = null;
export const ensureWebSocketConnection = (onRefreshCallback) => {
  if (!connectionPromise) {
    connectionPromise = new Promise((resolve) => {
      connectWebSocket(() => {
        onRefreshCallback();
        resolve();
      });
    }).finally(() => {
      connectionPromise = null;
    });
  }
  return connectionPromise;
};