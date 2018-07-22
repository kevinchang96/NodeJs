var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeController'
            })
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'contactController'
            });
    $locationProvider.html5Mode(true);
});

app.controller('homeController', function ($scope, $route, $routeParams, $location) {
    // create a message to display in our view
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
    $('.carousel').carousel({
                interval: 5000,
                pause: "hover",
                wrap: true
            })
            .on('click', '.carousel-control', handle_nav);

    var handle_nav = function(e) {
          e.preventDefault();
          var nav = $(this);
          nav.parents('.carousel').carousel(nav.data('slide'));
    };
});

app.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
