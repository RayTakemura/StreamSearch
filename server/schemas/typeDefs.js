//import the gql tagged template function 
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
    type Stream {
        _id: ID!
        streamId: String
        title: String
        image: String
        link: String
    }

    
    type User {
        _id: ID
        username: String
        email: String
        streamCount: Int
        savedStreams: [Stream]

    }

    input savedStreamInput {
        title: String
        streamId: String
        image: String
        link: String
    }

    type Query {
        me: User  
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
        saveStream(input: savedStreamInput!): User
        removeStream(streamId: ID!): User
    }
`;

//export the typeDefs 
module.exports = typeDefs;