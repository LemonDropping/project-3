const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    firstName: String
    lastName: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
  }

  type Mutation {
    addUser(
      userName: String!, 
      email: String!, 
      password: String!, 
      firstName: String!, 
      lastName: String!
      ): Auth
    login(userName: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;