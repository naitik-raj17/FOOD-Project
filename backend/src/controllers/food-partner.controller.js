const foodPartnerModel = require('../models/foodpartner.model');

async function getFoodPartnerById(req,res){
    const foodPartnerId = req.params.id;

    const foodPartner = await foodPartnerModel.findById(foodPartnerId);

    if(!foodPartner){
        return res.status(404).json({
            message: "Food Partner not found"
        });
    }

    return res.status(200).json({
        message: "Food Partner retreived successfully"
        ,foodPartner
    });

}

module.exports={
    getFoodPartnerById
}
