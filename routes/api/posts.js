const express = require("express");
const router = express.Router();

const Posts = require("../../models/Posts");

// @routes POST api/posts
// @desc get a post
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();

    if (!posts) throw Error("No Items");

    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @routes POST api/posts
// @desc Create a post
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();

    if (!post) throw Error("Somthing went wrong while saving the post");

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
