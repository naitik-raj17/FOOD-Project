const express = require('express');
const foodController  = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware");
const router  = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 100 * 1024 * 1024, // 100MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Only video files are allowed!'), false);
        }
    }
})

// Error handling middleware for multer
const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'File too large. Maximum size is 100MB.' });
        }
        return res.status(400).json({ message: 'File upload error: ' + err.message });
    } else if (err) {
        return res.status(400).json({ message: err.message });
    }
    next();
}

router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("mama"),
    handleMulterError,
    foodController.createFood)

router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)

module.exports = router;