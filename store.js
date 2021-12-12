const express= require('express');
const app= require('express');
const bodyParser= require('body-Parser')
require('dotenv/config')
const mongoose= require('mongoose')
const morgan= require(morgan)
const path= require('path')
//using mongoClient driver
const MongoClient= require('mongodb').MongoClient;
//Using the db that is url encoded
require('dotenv').config();

//specifying the connection url
const url= 'mongodb://localhost/drugstoredb'

//Importing routes
const productRoute= require('./route/post')
const cartRoute= require('./route/cart')

//use bodyParser
app.use(bodyParser.json());
//Use morgan to log on all application route
app.use(morgan('combined'))
//use the passed route
app.use('/product', productRoute)
app.use('/cart', cartRoute)

//middleware for using the file path instantiated in the multer-file
app.use('/files', express.static("files"));

//Middleware for error handling
app.use(req, res=>{
    const error= new Error('Not found in the server');
error.status(404);
next('error')
})

app.use(error, req, res, next=>{
    res.status(error.status||500)
    res.json({
        error: {
            message: error.message
        }
    })
})

//express middleware
app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}))

//Connecting to the mongo database
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true}, ()=>{
console.log('Connect to the database')
})

//route to get your endpoint
app.get('/', (req, res)=>{
    res.send({
        message: 'The right drug store is here for your shopping'
    })
})


const port= process.env.PORT||3000;
app.listen(port, (req, res)=>{
    console.log(`listening at the ${port}`)
})