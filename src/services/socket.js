import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000', {
  autoConnect: false,
  withCredentials: true
});

// Add authorization token if available
const token = localStorage.getItem('token');
if (token) {
  socket.auth = { token };
}

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;