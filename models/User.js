import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  uid: Number,
  username: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)