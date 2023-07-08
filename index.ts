import WebSocket from 'ws';

const HTTP_PORT = 8181;

const ws = new WebSocket.Server({ port: HTTP_PORT }, () => {
  console.log(`⚡️[server]: Websocket server is running at http://localhost:${HTTP_PORT}`);
});

ws.on('connection', () => {
  console.log('User connected to server...');
});
