angular.module('hackernews', ['ui.router', 'ngResource']);

angular.module('hackernews').config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/register',
		templateUrl: 'partials/register.html',
		controller: 'RegisterCtrl'
	})
	.state('newpost', {
		url: '/newpost',
		templateUrl: 'partials/newpost.html',
		controller: 'NewPostCtrl'
	})
	.state('latest', {
		url: '/latestpost',
		templateUrl: 'partials/latestpost.html',
		controller: 'LatestPostCtrl'
	})
	.state('myposts', {
		url: '/myposts',
		templateUrl: 'partials/myposts.html',
		controller: 'MypostsCtrl'
	})
	.state('post/:id', {
		url: '/post/:id',
		templateUrl: 'partials/post.html',
		controller: 'PostCtrl'
	});
})