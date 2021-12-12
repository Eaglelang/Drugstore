const mongoose= require('mongoose');
const itemSchema= new mongoose.Schema({

    product_Id:{ 
type: Number
},

Quantity: {
    type: Number
},
Manufactured_By: {
type: Date,
required: true
},
total: {
    type: Number
},
timestamp: true
})

// schema for getting the cart of the drug product
const cartSchema= new Schema({
    items: [itemSchema],
    subTotal: {
        type: Number,
        default:0
    },
    timestamp: true
})
const cart = mongoose.model('cart', cartSchema);
module.exports = cart;


