// import * as fs from 'fs';
// import * as path from 'path';
// import * as http from 'http';

// export const httpServer = http.createServer((req, res) => {
//   const __dirname = path.resolve(path.dirname(''));
//   const file_path =
//     __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
//   fs.readFile(file_path, function (err, data) {
//     if (err) {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//       return;
//     }
//     res.writeHead(200);
//     res.end(data);
//   });
// });

import WebSocket from 'ws';

const HTTP_PORT = 8181;

const ws = new WebSocket.Server({ port: HTTP_PORT }, () => {
  console.log(`⚡️[server]: Websocket server is running at http://localhost:${HTTP_PORT}`);
});

ws.on('connection', () => {
  console.log('User connected to server...');
});
