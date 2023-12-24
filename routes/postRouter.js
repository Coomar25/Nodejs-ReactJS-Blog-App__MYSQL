import express from "express";
import {
  createBlogPost,
  getPostWithUser,
  updateBlogPost,
  deleteBlogPost,
  toggleFeatureStatus,
  getFeaturedPosts,
  toggleUserLikes,
  addFavouritePost,
  getPostBySlug,
} from "../controller/postController.js";
import { addCommentToPost } from "../controller/commentController.js";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/addpost", createBlogPost);
router.get("/getpostwithuser/:postid", getPostWithUser);
router.put("/updatepost/:postid", updateBlogPost);
router.delete("/deletepost/:postid", deleteBlogPost);
router.put("/togglepostfeatures/:postid", toggleFeatureStatus);
router.get("/getfeaturespost", getFeaturedPosts);
router.put("/likeorreaction/:postId/:userId", toggleUserLikes);
router.post("/addcomment/:postId/:userId", addCommentToPost);
router.get("/:tagsOrCategories/:slug", getPostBySlug);

// category

router.post("/addcategory", createCategory);
router.put("/updatecategory/:categoryId", updateCategory);
router.delete("/deletecategory/:categoryId", deleteCategory);
router.get("/getallcategories", getAllCategories);

// favourite post

router.post("/addfavourite/:postId/:userId", addFavouritePost);

export { router as postRouter };
