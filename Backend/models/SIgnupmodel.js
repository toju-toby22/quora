const mongoose=require('mongoose');///import Mongoose
const Schema=mongoose.Schema;//Connect with the schema from mongoose


const signUpSchema=new Schema({
     name:{
        type:String,
        required:[true]
    },

    email:{
        type:String,
        required:[true]
    },
    password:{
        type:String,
        required:[true]
    },
    role: {
        type: String,
        default: 'user'
    },
});//create e T

const signUpModel=mongoose.model('signUpModel', signUpSchema);
module.exports=signUpModel;