const mongoose= require('mongoose');
const productSchema=  new mongoose.Schema({

name: {
    type: String,
    required: true,
},
description: {
    type: String,
    required: true
},
image: {
    type: String,
    required: true
},
price:{
type: Number
}
})
const product = mongoose.model('Product', ProductSchema);
module.exports = product;
