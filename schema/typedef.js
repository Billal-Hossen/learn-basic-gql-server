const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {

    users: [User!]!
    user(id:ID!): User!

    movies: [Movie!]!
    movie(name:String!): Movie!
   
}
type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favouriteMovies:[Movie]

 }

 enum Nationality {
      USA
      UK
      India
      Uganda
      Pakistan
 }

 type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
 },

 input CreateUserInput{
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality=India
 }
 input UpdateUserInput{
    id:ID!
    newUserName:String!
 }

 type Mutation{
    createUser(input:CreateUserInput!):User!
    updateUserName(input:UpdateUserInput!): User!
    deleteUser(id:ID!):User
 }




`
module.exports= {typeDefs}