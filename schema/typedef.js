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
 }




`
module.exports= {typeDefs}