const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { ApolloServer} = require('apollo-server-express');
const schema = require('./schema');

const app = express();
const PORT = process.env.DEV_PORT;


const startServer = async (server) => {
    await server.start();
};

app.get('/graphql',(req,res)=> {
    const server = new ApolloServer({schema,context : {res}})
    startServer(server)
    .then(() => {
        server.applyMiddleware({app});
        console.log("Serveur appolo demarré")})
    .catch(() => {console.log("Echec demarrage appolo")})
})

app.listen(PORT,() => {
    console.log("Listening ... ");
})