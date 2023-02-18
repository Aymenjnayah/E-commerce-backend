const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
        index:true,
    },
    description:{
        type:String,
        required:true,
      
    },
    category: {
        //relation entre category and subCategory
        type: mongoose.Types.ObjectId,
        ref: "category",
        required: true,
      },
      product: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Product"
        },
      ],
});

//Export the model
module.exports = mongoose.model('SubCategory', userSchema);