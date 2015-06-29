angular.module('pooshak')
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/pages/home/index.html',
            controller: 'IndexController',
        })
        .when('/post/:cat', {
            templateUrl: 'pages/posts/index-2.html',
            controller: 'PostController',
        })
        .when('/post_detail', {
            templateUrl: 'pages/post_detail/index.html',
            controller: 'PostdetailController',         
        })
        .when('/myprofile', {
            templateUrl: 'pages/myprofile/index.html',
            controller: 'MyprofileController',
        })
		.when('/', {
            templateUrl: 'pages/home/index.html',
            controller: 'IndexController',
		})
        .when('/android-down', {
            templateUrl: 'pages/home/index-42.html',
            controller: 'IndexoneController',
		})
        .when('/android-up', {
            templateUrl: 'pages/home/index-44.html',
             controller: 'IndextwoController',
		})
		.otherwise({ redirectTo: '/' });
});