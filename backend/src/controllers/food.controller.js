const foodModel = require('../models/food.model');
const storageService = require('../services/storage.services');
const { v4: uuid } = require("uuid")

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
                description: food.description
            }
        });
    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({ message: "Error creating food item" });
    }
}

async function getFoodItems(req,res){
    const foodItems = await foodModel.find({})

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

module.exports = {
    createFood,
    getFoodItems
}