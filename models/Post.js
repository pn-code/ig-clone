import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    username: String,
    avatar: String,
    comment: String,
    date: Date,
});

const UserSchema = new mongoose.Schema({
    uid: Number,
    username: String,
});

const PostSchema = new mongoose.Schema({
    username: String,
    avatar: String,
    caption: String,
    date: Date,
    image: String,
    likes: [UserSchema],
    comments: [CommentSchema],
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
