

const Post = require("../models/postModel");


exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "error while creating post",
        })
    }
};


exports.getAllPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.json({
            post,
        })
    }
    catch (error) {
        res.status(500).json({
             error:"error while fetching all pposts",
        });
    }
}