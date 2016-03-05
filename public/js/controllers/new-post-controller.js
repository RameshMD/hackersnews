// Home Controller

(function(){
		'use strict';
		angular
		.module('hackernews')
		.controller('NewPostCtrl', NewPostCtrl);

		NewPostCtrl.$inject = ['$scope', '$q', 'PostService'];

		function NewPostCtrl($scope, $q, PostService){
			$scope.submitNews = function(postData){
				postData.author = '56da71ee9e1113fb1cd7e618';
				PostService.save(postData, function(data){
					console.log(data);
				}, function(err){
					console.log(err);
				});
			}
		}
})();