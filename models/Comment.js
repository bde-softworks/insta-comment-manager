const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  mediaId: String,
  posterId: String
});

module.exports = mongoose.model('Comment', commentSchema);
