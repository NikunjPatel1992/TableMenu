const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  // "mongodb://heroku_5qwh04fh:5i8lm8mti0phg2rl5nrmpmo13t@ds155634.mlab.com:55634/heroku_5qwh04fh"
  "mongodb://localhost/Menu-Data"
);

const user = [
  {
    name: "Jon",
    username: "Jon123",
    password: "Jon@123",
    date: new Date(Date.now())
  },  
  {
    name: "Bob",
    username: "Bob123",
    password: "Bob@123",
    date: new Date(Date.now())
  },  
  {
    name: "Tom",
    username: "Tom123",
    password: "Tom@123",
    date: new Date(Date.now())
  },
  {
    name: "Boby",
    username: "Boby123",
    password: "Boby@123",
    date: new Date(Date.now())
  },   
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(user))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const menu = [
    {
      name: "Appetizers",
      description: "Appetizers Description"
    },  
    {
      name: "Sides",
      description: "Sides Description"
    },
    {
      name: "Pizzas",
      description: "Pizzas Description"
    },
    {
      name: "Wraps",
      description: "Wraps Description"
    },
    {
      name: "Soups",
      description: "Soups Description"
    },
    {
      name: "Salads",
      description: "Salads Description"
    },  
    {
      name: "Sandwiches",
      description: "Sandwiches Description"
    },  
    {
      name: "Pasta",
      description: "Pasta Description"
    },
    {
      name: "Burger",
      description: "Burger Description"
    },
    {
      name: "Desserts",
      description: "Desserts Description"
    },
  ];

  db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menu))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });