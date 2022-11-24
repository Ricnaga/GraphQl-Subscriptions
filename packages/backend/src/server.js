const express = require("express");
const { createServer } = require("http");
const { createApolloServer } = require("./config/apolloServer");

const appExpress = express();
const httpServer = createServer(appExpress);

createApolloServer(appExpress, httpServer);

httpServer.listen(process.env.PORT, () =>
  console.log(`GRAPHQL -> http://localhost:${process.env.PORT}/graphql`)
);
