


//import 

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//bussiness logic

exports.createComment = async (req, res) => {
    try {
        //fetch data from body

        const { post, user, body } = req.body;
        //create comment
        const comment = new Comment({
            post, user, body
        });
        //save somment in database

        const savedComment = await comment.save();

        //find post by id add the new comment in the comment array
        //push->update   pull-delete
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")
        //populate the comment array commentdocuments
        .exec()
        res.json({
            post:updatedPost,
        })
    }
    catch (error) { 
        return res.status(500).json({
            error:"error while creating comment",
        });
    }
};