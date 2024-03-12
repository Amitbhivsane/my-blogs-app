const express = require("express");
const { model } = require("mongoose");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBlogIdController,
  deleteBlogController,
  userBlogController,
} = require("../controller/blogController");

//router object
const router = express.Router();

// routes
//get all blog
router.get("/all-blog", getAllBlogController);

// post create blog
router.post("/create-blog", createBlogController);

//PUT //update blog
router.put("/update-blog/:id", updateBlogController);

//Get//Single blog
router.get("/get-blog/:id", getBlogIdController);

//Delete||delete blog
router.delete("/delete-blog/:id", deleteBlogController);
//get user blog from user id
router.get("/user-blog/:id", userBlogController);

module.exports = router;
