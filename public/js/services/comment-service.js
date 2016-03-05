// Comment service

(function(){
	'use strict';
	 angular
	 .module('hackernews')
	 .factory('CommentService', CommentService);
	 
	 CommentService.$inject = ['$http']

	 function CommentService($http){
	 	var service = {};

	 	service.postComment = function(authorid, postid, comment){
	 		console.log(comment);
	 		comment.author = authorid;
	 		comment.post = postid;
	 		console.log(comment);
	 		return $http.post('/api/posts/'+ postid +'/comments', comment);
	 	}

	 	return service;
	 }

})();