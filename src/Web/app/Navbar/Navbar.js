angular.module('app').controller('Navbar',
    ['$scope', '$location',  function($scope, $location) {
        $scope.search = function(term) {
            $location.path('/search/results').search('q', term);
        };
    }]
);