const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    foodPartner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodpartner"
    },
    LikesCount:{
        type: Number,
        default: 0
    }
},
{
    timestamps: true
})

const foodModel = mongoose.model("food",foodSchema);

module.exports= foodModel;