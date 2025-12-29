const foodModel = require('../models/food.model');
const { v4: uuid } = require("uuid")
const storageService = require('../services/storage.services');
const Like = require('../models/like.model');


async function createFood(req, res) {
    try {
        
        
        console.log(req.foodPartner);
        console.log(req.body);
        console.log(req.file);

        if (!req.file) {
            return res.status(400).json({ message: "No video file uploaded or invalid file type" });
        }

        const { name, description } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Food name is required" });
        }

        const extension = req.file.originalname.split('.').pop();
        const fileName = `${uuid()}.${extension}`;
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, fileName);
        console.log(fileUploadResult);

        const food = await foodModel.create({
            name,
            video: fileUploadResult.url,
            description,
            foodPartner: req.foodPartner._id
        });

        res.status(201).json({
            message: "Food item created successfully",
            food: {
                _id: food._id,
                name: food.name,
                video: food.video,
                description: food.description,
                // foodPartner: food.foodPartner
            }
        });
    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({ message: "Error creating food item" });
    }
}

async function getFoodItems(req, res) {
    try {
        const foodItems = await foodModel.find({}).select('name video description foodPartner');

        res.status(200).json({
            message: "Food items fetched successfully",
            foodItems
        });
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({ message: "Error fetching food items" });
    }
}

async function likeFood(req,res){
    const {foodId} = req.body;
    const user = req.user;
    
    const isAlreadyLiked = await Like.findOne({
        user: user._id,
        food: foodId
    })

    if(isAlreadyLiked){
        await Like.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId,{
            $inc: {LikesCount:-1}
        })
        return res.status(200).json({
            message: "Food unliked success"
        })
    }
    const Like = await Like.create({
        user: req.user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId,{
        $inc: {LikesCount:1 }
    })
    res.status(201).json({
        message: "Food Liked success",
        Like
    })
}
module.exports = {
    createFood,
    getFoodItems,
    likeFood
}