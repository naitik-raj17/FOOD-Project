const mongoose = require('mongoose');

function connectDB(){
    // Add database name and connection options
    mongoose.connect(process.env.MONGODB_URI) 
   .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err.message);
    })
}

module.exports = connectDB;