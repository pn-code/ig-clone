import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  username: String,
  caption: String,
  date: Date,
  image: String,
  likes: Number,
  comments: Number
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)