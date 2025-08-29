

const express = require("express");

const router = express.Router();

//import Controller

// const {dummyLink} = require("../controller/likeController");
const {createComment} = require("../controller/commentController")
const {createPost,getAllPosts} = require("../controller/postController");

const {createLike,unlikePost} = require("../controller/likeController");

//create mapping
// router.get("/dummyRoute",dummyLink);

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",createLike);
router.post("/likes/unlike",unlikePost);

//export


module.exports = router;