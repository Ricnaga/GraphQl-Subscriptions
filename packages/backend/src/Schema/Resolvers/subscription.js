const {
  USER_ADDED_TOPIC,
} = require("../../Services/Subscriptions/Topics");

const Subscription = {
  //criação do canal
  userAdded: {
    // nome do canal criado
    subscribe: (_, __, { pubSub }) =>
      pubSub.asyncIterator([USER_ADDED_TOPIC]),
  },
};

module.exports = { Subscription };
