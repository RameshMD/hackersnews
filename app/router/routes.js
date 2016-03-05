var UserModel = require('../model/users');
var CommentsModel = require('../model/comments');
var PostModel  = require('../model/posts');

module.exports = function(app){
	// Register
	app.post('/api/register', function(req, res){
		var user = new UserModel(req.body);
		user.save(function(user){
			res.json(user);
		});
		
	});

	// Login
	app.post('/api/login', function(req, res){

	});

	// Latest post
	app.get('/api/news/latest', function(req, res){

	});

	// Populat/Trending post (Most likes)
	app.get('/api/news/self', function(req, res){

	});

	// Submit new post
	app.post('/api/news', function(req, res){
		var post = new PostModel(req.body);
		post.save(function(post){
			res.json(post);
		})		
	});
	// get all lates news
	app.get('/api/news', function(req, res){
		PostModel.find({}, function(err, news){
			res.json(news);
		})
	});

	app.get('/api/news/:id', function(req, res){
		console.log("get inside");
		PostModel.findById(req.params.id)
		.populate('author', 'username')
		.populate({ path: 'comments',  populate: { path: 'author'} })
		.exec(function(err, news){	
			res.json(news);
		});
	});

	// Comment
	app.post('/api/posts/:post/comments', function(req, res){
		var commentObj = new CommentsModel(req.body);
		commentObj.save(function(comment){
			
			var post = PostModel.findOne({_id: req.params.post}, function(err, post){
				post.comments.push(commentObj._id);
				console.log(post.comments);
				post.save(function(err, post){
					res.json(comment);
				})
			});

		})
	})

}
