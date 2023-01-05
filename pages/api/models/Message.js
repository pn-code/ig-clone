import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  username: String,
  recipient: String,
  date: Date,
  text: String,
  image: File
})

module.exports = mongoose.model('Message', MessageSchema, "igMessage")