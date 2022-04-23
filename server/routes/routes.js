
const express = require('express')
const Router = express.Router();

const {
    fetchBlogs,
    createBlog,
    editBlog,
    deleteBlog
} = require("../controller/blogpost");

Router.get("/", fetchBlogs);

Router.post("/", createBlog);

Router.put("/:id", editBlog);

Router.delete("/:id", deleteBlog);

module.exports = Router;
