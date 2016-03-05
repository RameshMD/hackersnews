var UserModel = require('../model/users');
var CommentsModel = require('../model/comments');
var PostsModel = require('../model/posts');

module.exports = function(app){

	app.post('/api/register', function(req, res){
		console.log(req.body);
		UserModel.findOne({email: req.body.email}, function(err, user){
			if(err){
				console.log("DB Error");
				res.send(err)
			}
			if(user){
				console.log("Email already present");
				res.send(user)
			}else{
				UserModel.create({
					username: req.body.username,
					email: req.body.email,
					password: req.body.password
				}, function(err, user){
					if(err){
						console.log("User not created Error");
						res.send(err)
					}else{
						console.log("user created");
						res.send(user)
					}

				})
			}
		});
	});

	app.post('/api/login', function(req, res){
		UserModel.findOne({email: req.body.email}, function(err, user){
			if(err)  res.send({status: false, msg: 'Issue with server'});
			console.log(user);
			if(!user){
				res.send({status: false, msg: 'User not found'});
			}else{
				if(user.password === req.body.password){
					res.send({status: true, msg: 'Logged in', user: user});
				}else{
					res.send({status: false, msg: 'Password not matched'});
				}
			}
		});
	});

	app.post('/api/post/news', function(req, res){
		PostsModel.create({
			title: req.body.title,
			link: req.body.url,
			description: req.body.desc,
			author: req.body._id
		}, function(err, post){
			console.log('create res');
			if (err){
				res.send(err)
				console.log(' server error');
			}
			res.send(post)
			console.log(post);
		})
	});

	app.post('/api/post/self', function(req, res){
		console.log(req.body);
		PostsModel.find({ author: req.body.userId }, function(err, posts){
			if(err){res.send(err)};
			res.json(posts);
		});
	});

	app.post('/api/post', function(req, res){
		console.log(req.body);
		PostsModel.findById(req.body.userId.postId, function(err, post) {
				if (err){res.send(err);}
				console.log(post);
				res.json(post);
		});
	});
}