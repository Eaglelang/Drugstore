const mongoose= require('mongoose')
const userSchema= new mongoose.userSchema({
 userName: {
     type: String,
     required: true
 }
})

const user= mongoose.model('users', userSchema);
module.export= user;