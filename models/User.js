import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String
})

module.exports = mongoose.model('User', UserSchema, "igUser")