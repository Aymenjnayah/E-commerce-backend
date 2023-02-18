const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true,
       index : true
    },
    ref:{
        type:String,
        required:true
       
    },
    qte:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true
    },
    orders: [
        {
          type: mongoose.Types.ObjectId,
          ref: "orders",
        },
      ],
      galleries: [
        {
          type: mongoose.Types.ObjectId,
          ref: "gelleries",
        },
      ],
      subCategory: 
        {
          type: mongoose.Types.ObjectId,
          ref: "subcategories",
        },
      
      provider:
        {
          type: mongoose.Types.ObjectId,
          ref: "providers",
        },
      
});

//Export the model
module.exports = mongoose.model('Product', userSchema);