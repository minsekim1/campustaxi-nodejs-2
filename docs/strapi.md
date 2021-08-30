# [실행법](https://strapi.io/blog/how-to-build-a-real-time-chat-forum-using-strapi-socket-io-react-and-mongo-db)

## Start and test Strapi Server
(nodejs 안에서 실행)
npm run develop  
또는  
npm run server  

## 최초 실행 파일
/config/functions/bootstrap.js
```
module.exports = () => {
    var io = require('socket.io')(strapi.server, {
        cors: {
          origin: "http://localhost:7862",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true
        }
    });

    io.on('connection', function(socket) {
          socket.on('join', ({ username, room }) => {
              console.log("user connected");
              console.log("username is ", username);
              console.log("room is...", room)
          })
      });
  };
```

## [REST API 만들기](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#routing)
