
const mongoose = require('mongoose');

const BlogpostSchema = new mongoose.Schema({
    title:      { type: String, required: true },
    author:     { type: String, required: true },
    blog:       { type: String                 },
    color:      { type: String                 }
})

module.exports = BlogpostSchema