// Post Controller

(function(){
	'use strict';
	angular.module('hackernews').controller('PostCtrl', PostCtrl);

	PostCtrl.$inject = ['$scope', '$q', 'PostService', '$stateParams', 'CommentService'];

	function PostCtrl($scope, $q, PostService, $stateParams, CommentService){
		// console.log($stateParams.id);
		PostService.get({id: $stateParams.id}).$promise.then(function(result){
			$scope.post = result;
		})

		$scope.addComment = function(authorid, postid, comment){
			console.log(authorid);
			CommentService.postComment(authorid, postid, comment).success(function(){
				console.log("success");
			})
		}
	}
})();