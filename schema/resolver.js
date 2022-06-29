const {UserList, MovieList} = require("../FakeData");
const _ = require('lodash');

const resolvers = {
Query: {
  // user query
  users:()=>{
    return UserList
  },
  user:(parent,args)=>{
    const id = args.id;
    console.log(id);
    const user= _.find(UserList,{id:Number(id)});
    return user;

  },

  // movie query
  movies: ()=>{
    return MovieList;
  },
  movie:(parent,args)=>{
    const name= args.name;
    console.log(name);
    const movie = _.find(MovieList,{name:name});
    return movie;

  },
 
},
User: {
  favouriteMovies:()=>{
    return _.filter(MovieList,(movie)=>movie.yearOfPublication>=2000 &&movie.yearOfPublication<=2010 )
  }
},

// User Mutation
Mutation:{
  createUser:(parent,args)=>{
    const user = args.input;//input:CreateUserInput
    console.log(user);
    const newId = UserList[UserList.length-1].id;
    user.id = newId+1;
    console.log(user);
    UserList.push(user)
    return user;

  }
}

}
module.exports = {resolvers};