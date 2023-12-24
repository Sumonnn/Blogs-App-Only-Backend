const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",//reference to the post model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",//reference to the post model
    }]
})


module.exports = mongoose.model('Post', postSchema);