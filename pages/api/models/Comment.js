import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  userId: { type: ObjectId, ref: "User"},
  username: String,
  text: String,
  date: Date,
  post: { type: ObjectId , ref: "Post"}
})

module.exports = mongoose.model('Comment', CommentSchema, "igComment")