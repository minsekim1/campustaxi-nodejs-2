? Choose your default database client mysql
? Database name: campustaxi
? Database name: campustaxi
? Host: (127.0.0.1)
? Host: 127.0.0.1
? Port: (3306)
? Port: 3306
? Username: root
? Password: 0000
? Enable SSL connection: (y/N) N


import io from 'socket.io-client';
let STRAPI_ENDPOINT;

if (process.env.NODE_ENV !== 'production') {
    STRAPI_ENDPOINT = 'http://localhost:1337';
} else {
    STRAPI_ENDPOINT = process.env.REACT_APP_SERVER_URL
}

export const socket = io(STRAPI_ENDPOINT);