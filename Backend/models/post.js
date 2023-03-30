const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    textId: {
        type: String
    },
    img: {
        type: String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},{
    timeStamps: true
})

module.exports = mongoose.model('post', postSchema)