const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    url_photo:{
        type:String,
        required:true,
        
        index:true,
    },
    products: [
        {
          type: mongoose.Types.ObjectId,
          ref: "products",
        },
      ],
});

//Export the model
module.exports = mongoose.model('Gallery', userSchema);