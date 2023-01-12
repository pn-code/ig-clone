import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  username: String,
  avatar: String,
  comment: String,
  date: Date,
})

module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);