const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
    },
    mobile:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const DeliveryModel = mongoose.model("DeliveryModel",DeliverySchema);
module.exports = DeliveryModel;