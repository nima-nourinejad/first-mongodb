// const mongoose = require('mongoose');

// // MongoDB Atlas connection string
// const uri = "mongodb+srv://nima:123@cluster0.gpkfp.mongodb.net/?retryWrites=true&w=majority";

// // Connect to MongoDB using Mongoose
// mongoose.connect(uri)
//   .then(() => {
//     console.log("Successfully connected to MongoDB via Mongoose!");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });


const mongoose = require('mongoose');

// MongoDB Atlas connection string with a specified database
const uri = "mongodb+srv://nima:123@cluster0.gpkfp.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
  .then(() => {
    console.log("Successfully connected to MongoDB via Mongoose!");
    
    // Define 'db' as the name of the database
    const db = mongoose.connection.db; // Access the database object
    console.log("Connected to database:", db.databaseName);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// You can also add event listeners for connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from the database');
});
