// Home Controller

(function(){

	'use strict';

	 angular
	 .module('hackernews')
	 .controller('HomeCtrl', HomeController);
	 
	 HomeController.$inject = ['$scope', '$q', 'PostService', '$http'];

	 function HomeController($scope, $q, PostService, $http){
			PostService.query().$promise.then(function(result){
				$scope.posts = result;	
				console.log(result);
			})
	 }

})();