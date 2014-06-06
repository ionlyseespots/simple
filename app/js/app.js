var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'colorpicker.module', 'FBAngular']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/colors.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/view2', {templateUrl: 'partials/products.html', controller: 'productThemeCtrl'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);