const { ApolloServer } = require("apollo-server-express");
const { schema } = require("../Schema");
const { graphQLContext } = require("./graphQLContext");
const {
  createSubscriptionServer,
  destroySubscriptionServer,
} = require("./subscriptionServer");

// No GraphQl toda request é POST
//Toda request bate no mesmo endpoint que por convenção fica (/graphql)

// Query => Obter informações como se fosse o (GET)
// Mutation => Manipular informações como se fosse (POST, PUT, PATCH, DELETE)
// Scalar Types => String, Int, Boolean, ID

function createApolloServer(app, httpSv) {
  const { subscriptionServer, pubSub } = createSubscriptionServer(
    schema,
    httpSv
  );

  const instanceOfApolloServer = new ApolloServer({
    schema,
    context: graphQLContext(pubSub),
    plugins: [destroySubscriptionServer(subscriptionServer)],
  });

  instanceOfApolloServer
    .start()
    .then(() => instanceOfApolloServer.applyMiddleware({ app }));
}

module.exports = { createApolloServer };
