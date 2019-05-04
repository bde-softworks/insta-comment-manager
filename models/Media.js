const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  userId: String,
  lastName: String
});

module.exports = mongoose.model('Media', mediaSchema);
