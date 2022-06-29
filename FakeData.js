const UserList= [
      {
        id: 1,
        name: "Masum Billal",
        userName: "Masum",
        age: 23,
        nationality: "USA",
        friends:[
          {
            id: 2,
            name: "Mustafiz ",
            userName: "Fizz",
            age: 23,
            nationality: "UK"
          },
          {
            id: 3,
            name: "Mizanur Rahman",
            userName: "Mizanur",
            age: 23,
            nationality: "India"
          },
          {
            id: 4,
            name: "Abdul Alim",
            userName: "Shohan",
            age: 23,
            nationality: "Uganda"
          },
          {
            id: 5,
            name: "Najuya Siam",
            userName: "Siam",
            age: 23,
            nationality: "Pakistan"
          },
        ]
      },
      {
        id: 2,
        name: "Mustafiz ",
        userName: "Fizz",
        age: 23,
        nationality: "UK"
      },
      {
        id: 3,
        name: "Mizanur Rahman",
        userName: "Mizanur",
        age: 23,
        nationality: "India"
      },
      {
        id: 4,
        name: "Abdul Alim",
        userName: "Shohan",
        age: 23,
        nationality: "Uganda"
      },
      {
        id: 5,
        name: "Najuya Siam",
        userName: "Siam",
        age: 23,
        nationality: "Pakistan"
      },
]

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];

module.exports = {UserList,MovieList};