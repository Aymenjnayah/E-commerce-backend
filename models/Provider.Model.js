const mongoose = require('mongoose'); // Erase if already required
//todo heritage
const UserModel = require("./User.Model")

// Declare the Schema of the Mongo model
var providerSchema = new mongoose.Schema({
   
    company:{
        type:String,
        required:true
    },
    
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products"
    }]
 
    
});

//todo heritage
UserModel.discriminator("Provider", providerSchema)


//Export the model //todo heritage
module.exports = mongoose.model('Provider');