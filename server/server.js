const express = require('express');
const path = require('path');
const db = require('./config/connections');
const { authMiddleware } = require('./utils/auth');

//import ApolloServer
const { ApolloServer } = require('apollo-server-express');

//imprt typeDefs and resolvers 
const { typeDefs, resolvers } = require('./schemas');


const app = express();
const PORT = process.env.PORT || 3001;

//create a new apollo server and pass in our schema data 
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: authMiddleware
});

//integrate Apollo server with Express application as middleware
server.applyMiddleware({app});

//exntended was true 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//if we make a GET request to any location on the server that doesn't have an explicit route defined, respond with the production-ready React front-end code.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

  });
});