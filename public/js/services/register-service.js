// Post service

(function(){
	'use strict';

	angular
	.module('hackernews')
	.factory('RegisterService', RegisterService);

	RegisterService.$inject = ['$http'];

	function RegisterService($http) {
		var service = {}

		service.register = function(registermodel){
			return $http.post('/api/register', registermodel);
		}
		
		return service;
	}

})();