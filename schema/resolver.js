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
}

}
module.exports = {resolvers};