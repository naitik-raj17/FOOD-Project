// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

// Validate required environment variables
if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables");
    process.exit(1);
}

connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})