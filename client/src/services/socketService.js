import connectToSocketIOServer from 'socket.io-client';
console.log("New socket created")
export const socket = connectToSocketIOServer('http://localhost:8080');
