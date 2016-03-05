// Register Controller

(function(){
	'use strict';
	 angular
	 .module('hackernews')
	 .controller('RegisterCtrl', RegisterController);
	 
	 RegisterController.$inject = ['$scope', '$q', 'RegisterService', '$http'];

	 function RegisterController($scope, $q, RegisterService, $http){
	 	$scope.register = function(registermodel){
	 		RegisterService.register(registermodel).success(function(result){
	 			console.log(result);
	 		})
	 	}
	 }
})();