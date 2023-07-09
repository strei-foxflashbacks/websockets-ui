import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import messageController from './controllers/messageController';
dotenv.config();

const HTTP_PORT = Number(process.env.PORT) || 3000;

const wss = new WebSocketServer({ port: HTTP_PORT }, () => {
  console.log(`⚡️[server]: Websocket server is running at http://localhost:${HTTP_PORT}`);
});

wss.on('connection', (ws) => {
  console.log('User connected to server...');
  ws.on('message', async (data) => {
    console.log('User sent: %s', data);
    messageController(data);
  });
  ws.on('close', () => {
    console.log('Websocket connection closed...');
  });
});
