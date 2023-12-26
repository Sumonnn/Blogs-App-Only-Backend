//import model
const Like = require('../models/likeModel');
const Post = require('../models/postModel');

// like a post 

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post,
            user,
        })
        const savedLiked = await like.save();

        //updated the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLiked._id } }, { new: true }).populate('likes').exec();

        res.json({
            post: updatedPost
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error While Likeing post!",
        })
    }
}


//unlike post 
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        //find and delete the like collection mein se
        await Like.findOneAndDelete({ post: post, _id: like });

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: like } }, { new: true })

        res.json({
            post: updatedPost,
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error While unLike post",
        })
    }
}