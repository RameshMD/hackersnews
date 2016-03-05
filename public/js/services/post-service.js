// Post service

(function(){
	'use strict';

	angular
	.module('hackernews')
	.factory('PostService', PostService);

	PostService.$inject = ['$resource'];

	function PostService($resource) {
		return $resource( "/api/news/:id", { id: '@id' },
		{
			'update': { method:'PUT' }
		});
	}

})();