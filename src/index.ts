import WebSocket from 'ws';
import dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = Number(process.env.PORT) || 8181;

const ws = new WebSocket.Server({ port: HTTP_PORT }, () => {
  console.log(`⚡️[server]: Websocket server is running at http://localhost:${HTTP_PORT}`);
});

ws.on('connection', () => {
  console.log('User connected to server...');
});
