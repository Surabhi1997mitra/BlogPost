
const Blog = require("../models/models");

exports.fetchBlogs = async(request, response) => {
    Blog.find()
        .then((blog) => response.json(blog))
        .catch((err) =>
            response.status(404).json({ message: "Blog not found", error: err.message })
        );
};

exports.createBlog = (request, response) => {
    Blog.create(request.body)
        .then((data) => response.json({ message: "Blog added successfully", data }))
        .catch((err) =>
            response.status(400).json({ message: "Failed to add blog", error: err.message })
        );
};

exports.editBlog = (request, response) => {
    Blog.findByIdAndUpdate(request.params.id, request.body)
        .then((data) => response.json({ message: "updated successfully", data }))
        .catch((err) =>
            response.status(400).json({ message: "Failed to update blog", error: err.message })
        );
};

exports.deleteBlog = (request, response) => {
    Blog.findByIdAndRemove(request.params.id, request.body)
        .then((data) =>
            response.json({ message: "blog deleted successfully", data })
        )
        .catch((err) =>
            response.status(404).json({ message: "book not found", error: err.message })
        );
};