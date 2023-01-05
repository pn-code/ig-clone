import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  username: String,
  title: String,
  text: String,
  date: Date,
  image: File,
  likes: Number
})

module.exports = mongoose.model('Post', PostSchema, "igPost")