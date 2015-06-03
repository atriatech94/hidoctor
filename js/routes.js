angular.module('pooshak')
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/pages/home/index.html',
            controller: 'IndexController',
        })
        .when('/post', {
            templateUrl: 'pages/posts/index.html',
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
		.otherwise({ redirectTo: '/' });
});