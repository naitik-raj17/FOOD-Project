const foodModel = require('../models/food.model');
const storageService = require('../services/storage.services');
const { v4:uuid} = require("uuid")
 
async function createFood(req, res) {
    try {
        console.log(req.foodPartner);
        console.log(req.body);
        console.log(req.file);

        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
        console.log(fileUploadResult);
        res.send("food item created");
    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).send("Error creating food item");
    }
}

module.exports = {
    createFood
}