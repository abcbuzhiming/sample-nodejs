var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ path:'/websocket',port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Hello WebSocket');
});