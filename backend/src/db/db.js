// const mongoose = require('mongoose');

// function connectDB(){
//     mongoose.connect("mongodb://localhost:27017/")
//     // mongoose.connect("mongodb://127.0.0.1:27017/")
//     .then(()=>{
//         console.log("MongoDB connected");
//     })
//     .catch((err)=>{
//         console.log("MongoDB connection error:",err);
//     })
// }

// module.exports = connectDB;
const mongoose = require('mongoose');

function connectDB(){
    // Add database name and connection options
    mongoose.connect("mongodb://localhost:27017/food-view?family=4") 
   .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err.message);
    })
}

module.exports = connectDB;