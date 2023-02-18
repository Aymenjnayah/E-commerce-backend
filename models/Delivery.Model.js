const mongoose = require('mongoose'); // Erase if already required
//todo heritage
const UserModel = require("./User.Model")

// Declare the Schema of the Mongo model
var deliverySchema = new mongoose.Schema({
   
    adress:{
        type:String,
        required:true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }]

 
    
});

//todo heritage
UserModel.discriminator("Delivery", deliverySchema)

//Export the model
module.exports = mongoose.model('Delivery');