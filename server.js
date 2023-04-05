require('dotenv').config();

const express = require('express');
const server = express();
server.use(express.json());

// Import routers
const AuditorRouter = require('./app/routes/AuthRouter');
const PlaylistRouter = require('./app/routes/PlaylistRouter');
server.use('/', AuditorRouter);
server.use('/', PlaylistRouter);

const expressSwagger = require('express-swagger-generator') (server);
const url = `http://${process.env.HOST}:${process.env.PORT}`;

let options = {
    swaggerDefinition : {
        info: {
            description: "Music Application API",
            title: "SpotHifi",
            version: '1.0.0'
        },
        host: url,
        basePath: '/',
        produces: ["application/json"],
        schemes: ['http', 'https']
    },
    basedir: __dirname,
    files: ['./app/**/*.js']
}

expressSwagger(options)

server.listen(process.env.PORT, ()=> {
    console.log(url)
})