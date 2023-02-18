const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var catSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
        index:true,
    },
    description:{
        type:String,
        required:true,
       
    },
    subCategories: [
        {
          type: mongoose.Types.ObjectId,
          ref: "SubCategory",
        },
      ],
});

//Export the model
module.exports = mongoose.model('category', catSchema);