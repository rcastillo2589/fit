# Personal fitness site
This project contains a client application built into fit.web and services appended with 'api'.
This project is built using fastifyjs as the server and infernojs as a front-end framework

## Setup & Run (local)
1. npm install, starting from root (server)
``` bash
cd fit.gateway.api
npm install
```
2. npm install, starting from root (client)
``` bash
cd fit.web
npm install
cd client
npm install
```
3. Run server
``` bash
node startup.js
```
4. Run client
``` bash
cd fit.web\client
npm start
```
From here you should be able to see the front-end connecting to the back-end

## Deploying to Docker
1. Create service instance
``` bash
cd fit.gateway.api
docker build -t fit-summary-api .
```
2. Create client instance
``` bash
cd fit.web\client
npm run build
cd ..
docker build -t fit-web .
```
3. Create swarm
``` bash
docker swarm init
```
4. Deploy stack
``` bash
docker stack deploy -c docker-compose.yml fitsite
```

## MongoDB in Docker
Run the following code locally in order to expose it and allow for local connections
``` bash
docker run --name fitdb -d -p 127.0.0.1:27017:27017 mongo
```