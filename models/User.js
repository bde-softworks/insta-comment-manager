const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  token: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('User', userSchema);
