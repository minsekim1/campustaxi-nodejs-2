# 새 프로젝트 생성시 상세설정

? Choose your installation type Custom (manual settings)  
? Would you like to use a template? (Templates are Strapi configurations designed for a specific use case) Yes  
? Select a template E-commerce  
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
? Are you sure you want to continue with the campustaxi database: (Y/n) Y  
? Are you sure you want to continue with the campustaxi database: Yes  
```
import io from 'socket.io-client';
let STRAPI_ENDPOINT;

if (process.env.NODE_ENV !== 'production') {
    STRAPI_ENDPOINT = 'http://localhost:1337';
} else {
    STRAPI_ENDPOINT = process.env.REACT_APP_SERVER_URL
}

export const socket = io(STRAPI_ENDPOINT);
```