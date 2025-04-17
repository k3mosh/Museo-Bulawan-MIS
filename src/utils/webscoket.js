let socketRef = null
let isConnectedRef = { current: false }

export const connectWebSocket = (onRefreshCallback) => {
  if (isConnectedRef.current) return

  const socket = new WebSocket('ws://localhost:5000/')

  socket.onopen = () => {
    console.log('Connected to WebSocket')
    socket.send('ping')
    isConnectedRef.current = true
  }

  socket.onmessage = (event) => {
    if (event.data === 'refresh' && typeof onRefreshCallback === 'function') {
      onRefreshCallback()
    }
  }

  socket.onerror = (err) => {
    console.error('WebSocket error:', err)
  }

  socket.onclose = (event) => {
    console.log('Disconnected from WebSocket', event)
    isConnectedRef.current = false
    if (event.code !== 1000) {
      setTimeout(() => {
        console.log('Attempting to reconnect to WebSocket...')
        connectWebSocket(onRefreshCallback)
      }, 5000)
    }
  }

  socketRef = socket
}

export const sendMessage = (msg) => {
  if (socketRef && isConnectedRef.current) {
    socketRef.send(msg)
  }
}

export const closeWebSocket = () => {
  if (socketRef) {
    socketRef.close(1000, 'Manual disconnect')
    isConnectedRef.current = false
    socketRef = null
  }
}
