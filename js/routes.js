angular.module('pooshak')
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/index-44.html',
            controller: 'IndextwoController',
        })
        .when('/post/:cat', {
            templateUrl: 'pages/posts/index-2.html',
            controller: 'PostController',
        })
     
		.when('/', {
            templateUrl: 'pages/home/index-44.html',
            controller: 'IndextwoController',
		})
		.otherwise({ redirectTo: '/' });
});