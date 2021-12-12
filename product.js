const express= require(express)
const router= express.Router;
const product = require('../models/product');
const multerInstance= require('../..config/multer')

//Getting all the drug 
router.get('/api/product', async (req, res)=>{
    try{
    const getDrug= await post.find()
res.json({message: 'Cool drug'})
}
catch(error){
    res.json({message: 'error'})
}
    //to validate the request sent from the client side
    if(req.body.name||req.body.name< 10){
res.status(400).send('The name should be minimum of 10 characters')
    }

 try{
    const GetProduct= await product.find();
res.json({message: 'we have the best stock in the world'})
 }
 catch(error){
     res.json({message: 'error'})
 }
})

//Getting a specific drug product 
router.get('/productId/:id', async(req, res)=>{
    //validating the availability of the drug product
    if(!product)res.status(404).send('The drug product with the given id was not found')
    try{
    const GetById= await product.findById(req.param.productId)
res.json({message: 'Specific drug'})    
}
catch(error){
    res.json({ message:'error'})
}
    
})

//Submitting image for a drug product
router.post("multerInstance.upload.single('image')", async (req, res)=>{
    //to validate the request sent from the client side  for getting the drug product 
    if(req.body.name||req.body.name< 10){
        res.status(400).send('The name should be minimum of 10 characters')
    }
    const product= new product({
    name: req.body.name,
    description: req.body. description,
    price: req.body.price,
    image: req.file.path
    })
    try{
    const SavedDrug= await product.saved();
    res.json({message: 'SavedDrug'})
}
    catch(error){
        res.json ({message: 'error'})
    }
}) 

module.export= router;