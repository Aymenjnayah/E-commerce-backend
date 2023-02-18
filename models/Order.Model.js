const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    ref:{
        type:String,
        required:true,
       
        index:true,
    },
    description:{
        type:String,
        required:true,
       
    },
    qte_total:{
        type:String,
        required:true,
       
    },
    price_total:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:"0",
    }
,
deleveries: [
    {
      type: mongoose.Types.ObjectId,
      ref: "deleveries",
    },
  ],
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
  ],
  customers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
  ],
});