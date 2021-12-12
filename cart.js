const express= require (express)
const router= express.Router
const cart = require('../models/cart');

router.get('/cart', async(req, res)=>{
    const carts = await Cart.find().populate({
        path: "items.productId",
        select: "name price total"
    
    })
try{
const cartInHere= await cart.find();
res.json({message: 'Hey cool here'})
}
catch(error){
res.send({message: 'error'})
}

})

//Route for adding cart
router.post('/api/cart', (req, res)=>{
try{
    const newItem = await Cart.create(payload);
    return res.json({message: 'newItem'})
}
catch(error){
return res.json({message: 'error'})
}})
