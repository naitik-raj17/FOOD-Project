const mongoose = require('mongoose');

function connectDB(){
    if(!process.env.MONGODB_URI){
        console.error("MONGODB_URI is not defined in environment variables");
        process.exit(1);
    }
    // Add database name and connection options
    mongoose.connect(process.env.MONGODB_URI) 
   .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    })
}

module.exports = connectDB;