angular.module('app').config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search/results', {
            controller: 'Results',
            templateUrl: '/app/Search/Results.html'
        });
        $routeProvider.when('/', {
            controller: 'Home',
            templateUrl: '/app/Home/Home.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);