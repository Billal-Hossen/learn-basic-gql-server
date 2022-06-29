# learn-basic-gql-server

 query GetAllUser{
   users{
     id
     name
     userName
     age
     nationality
     friends {
       name
    }
   }
 }


 query getUser($userId: ID!){
   user(id: $userId) {
     name
     age
     friends {
      name
     }
     favouriteMovies {
       id
       name
       yearOfPublication
     }
   }
 }

 query GetAllMovies{
   movies {
     id
     name
     yearOfPublication
   }
 }
 
 
 query getMovie($name: String!){
   movie(name: $name) {
     name
     yearOfPublication
     isInTheaters
    
   }
 }


 mutation CreateUser($input: CreateUserInput!){
   createUser(input: $input) {
     name
     userName
     age
     nationality
   }
 }

 mutation UpdateUser($input: UpdateUserInput!){
   updateUserName(input: $input) {
     name
     id
   }
 }
 }
   
   
   
   mutation DeleteUser($deleteUserId: ID!){
     deleteUser(id: $deleteUserId) {
       id
     }
   }
