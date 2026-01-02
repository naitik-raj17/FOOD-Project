const express = require('express');
const authController = require("../controllers/auth.controller")
const router = express.Router();


router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)


router.post('/food-partner/register',authController.registerFoodPartner)
router.post('/food-partner/login',authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)

router.post('/delivery-partner/register',authController.registerDeliveryBoy);
router.post('/delivery-partner/login',authController.loginDeliveryBoy);
router.post('/delivery-partner/logout',authController.logoutDeliveryBoy)

module.exports=router;