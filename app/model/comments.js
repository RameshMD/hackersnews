var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = require('./users');
var Post = require('./posts');

var CommentSchema = new Schema({
  description: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  updated: { type: Date, default: Date.now },
  upvotes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = mongoose.model('Comments', CommentSchema);