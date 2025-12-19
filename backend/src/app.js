// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cors = require('cors');


const app= express();
app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// CORS configuration for frontend communication
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200);
//     }
//     next();
// });


app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

module.exports = app;
