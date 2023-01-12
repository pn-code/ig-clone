import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    username: String,
    avatar: String,
    comment: String,
    date: Date,
});

const PostSchema = new mongoose.Schema({
    username: String,
    avatar: String,
    caption: String,
    date: Date,
    image: String,
    likes: Number,
    comments: [commentSchema],
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
