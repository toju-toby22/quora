const mongoose=require('mongoose');///import Mongoose
const Schema=mongoose.Schema;//Connect with the schema from mongoose
const msg= "Field is required"


const postSchema=new Schema({
    //  postImage:{
    //     type:String,
    //     required:[true, 'banner field is required']
    // },

     textId:{
        type:String,
        required:[true, 'Text field is required']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }

    // headtextId:{
    //     type:String,
    //     required:[true, 'Text field is required']
    // },
});//create e T

const postModel=mongoose.model('postModel', postSchema);
module.exports=postModel;