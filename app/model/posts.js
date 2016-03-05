var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Comments = require('./comments');
var User = require('./users');


var PostSchema = new Schema({
  title: String,
  link: String,
  description: String,
  upvotes: {type: Number, default: 0},
  createdBy: { type: Date, default: Date.now },
  comments : [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  author : { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', PostSchema);