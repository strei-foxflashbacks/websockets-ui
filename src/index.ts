import { WebSocketServer } from 'ws';
import { httpServer } from './http_server';
import dotenv from 'dotenv';
import messageController from './controllers/messageController';
dotenv.config();

const WS_PORT = Number(process.env.PORT) || 3000;
const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT }, () => {
  console.log(`⚡️[server]: Websocket server is running at http://localhost:${WS_PORT}`);
});

wss.on('connection', (ws) => {
  console.log('User connected to server...');
  ws.on('message', async (data) => {
    console.log('User sent: %s', data);
    await messageController(data, ws);
  });
  ws.on('close', () => {
    console.log('Websocket connection closed...');
  });
});
