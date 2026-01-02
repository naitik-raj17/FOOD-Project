const userModel = require("../models/user.model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const foodPartnerModel = require("../models/foodpartner.model");
const DeliveryModel = require('../models/deliveryboy.model');

async function registerUser(req,res){
    try {
        const{fullName,email,password,mobile} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const isUserAlreadyExists = await userModel.findOne({
            email
        })
        if(isUserAlreadyExists){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        if(password.length<6){
            return res.status(400).json({
                message: "password must be at least 6 characters."
            })
        }
        if(mobile.length<10){
            return res.status(400).json({
                message:"mobile no must be at least 10 digits."
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await userModel.create({
            fullName,
            email,
            mobile,
            password: hashedPassword
        })

        const token = await jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET,{
            expiresIn: "7d"
        })
        res.cookie("token",token,{
            secure: false,
            sameSite:"strict",
            maxAge: 77*24*60*60*1000,
            httpOnly:true
        })
        res.status(201).json({
            message: "User registered successfully",
            user:{
                _id: user._id,
                email: user.email,
                fullName: user.fullName
            }
        })
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function loginUser(req,res){
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        const user = await userModel.findOne({
            email
        })
        if(!user){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = await jwt.sign({
            id: user._id,    
        }, process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
            message: "User logged in successfully",
            user:{
                _id:user._id,
                email: user.email,
                fullName: user.fullName

            }
        })
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}



function logoutUser(req,res){
    try{res.clearCookie("token");
    res.status(200).json({
        message:"User logged out successfully"
    });}
    catch(err){
        return res.status(500).json(`logout error ${error}`)
    }
}

async function registerFoodPartner(req,res){
    try {
        const {businessName,name,email,phone,password} = req.body;
        
        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const isAccountAlreadyExists = await foodPartnerModel.findOne({
            email
        })

        if(isAccountAlreadyExists){
            return res.status(400).json({
                message:"Food partner account already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const foodPartner = await foodPartnerModel.create({
            name,
            email,
            password: hashedPassword,
            businessName,
            phone
        })

        const token = jwt.sign({
            id: foodPartner._id,
        }, process.env.JWT_SECRET)
        res.cookie("token",token)
        res.status(201).json({
            message: "Food Partner registered successfully",
            foodPartner:{
                _id: foodPartner._id,
                email: foodPartner.email,
                name: foodPartner.name,
                businessName: foodPartner.businessName,
                phone: foodPartner.phone
            }
        })
    } catch (error) {
        console.error('Error in registerFoodPartner:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function loginFoodPartner(req,res) {
    try {
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        const foodPartner = await foodPartnerModel.findOne({
            email
        })
        if(!foodPartner){
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password,foodPartner.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }
        const token = jwt.sign({
            id: foodPartner._id,
        }, process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
            message: "Food partner logged in successfully",
            foodPartner:{
                _id: foodPartner._id,
                email: foodPartner.email,
                name: foodPartner.name
            }
        })
    } catch (error) {
        console.error('Error in loginFoodPartner:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"Food partner logged out successfully"
    });
}


async function registerDeliveryBoy(req,res){
    try {
        const{fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const isDeliveryBoyAlreadyExists = await userModel.findOne({
            email
        })
        if(isDeliveryBoyAlreadyExists){
            return res.status(400).json({
                message: "DeliveryBoy already exists"
            })
        }
        if(password.length<6){
            return res.status(400).json({
                message: "password must be at least 6 characters."
            })
        }
        if(mobile.length<10){
            return res.status(400).json({
                message:"mobile no must be at least 10 digits."
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const DeliveryBoy = await userModel.create({
            fullName,
            email,
            mobile,
            password: hashedPassword
        })

        const token = await jwt.sign({
            id: DeliveryBoy._id,
        }, process.env.JWT_SECRET,{
            expiresIn: "7d"
        })
        res.cookie("token",token,{
            secure: false,
            sameSite:"strict",
            maxAge: 77*24*60*60*1000,
            httpOnly:true
        })
        res.status(201).json({
            message: "User registered successfully",
            DeliveryBoy:{
                _id: DeliveryBoy._id,
                email: user.email,
                fullName: user.fullName
            }
        })
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function loginDeliveryBoy(req,res){
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        const DeliveryBoy = await userModel.findOne({
            email
        })
        if(!DeliveryBoy){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = await jwt.sign({
            id: DeliveryBoy._id,    
        }, process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
            message: "User logged in successfully",
            user:{
                _id:DeliveryBoy._id,
                email: user.email,
                fullName: user.fullName

            }
        })
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}



function logoutDeliveryBoy(req,res){
    try{res.clearCookie("token");
    res.status(200).json({
        message:"DeliveryBoy logged out successfully"
    });}
    catch(err){
        return res.status(500).json(`logout error ${error}`)
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner,
    registerDeliveryBoy,
    loginDeliveryBoy,
    logoutDeliveryBoy
}