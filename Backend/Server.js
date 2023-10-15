const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { ApolloServer} = require('apollo-server-express');
const schema = require('./schema');

const server = new ApolloServer({schema});
const app = express();
const PORT = process.env.DEV_PORT;


const startServer = async () => {
    await server.start();
};

startServer()
.then(() => {
    console.log("Serveur demarré");

    server.applyMiddleware({app});
    app.listen(PORT,() => {
        console.log("Listening ... ");
    })
})
.catch((err) => {
    console.log("Echec du démarrage : " + err)
})