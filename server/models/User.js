const mongoose = require("mongoose")

var Schema = new mongoose.Schema({
  _id: String,
  createdAt: String,
  updatedAt: String,
  email: String,
  password: String,
  hash: String
})

module.exports = mongoose.model("User", Schema)
