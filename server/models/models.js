const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:          { type: "String",    required: true },
    author:         { type: "String",    required: true },
    color:          { type: "String"                    },
    blog:           { type: "String"                    }
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;