angular.module('app').controller('Navbar',
    ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
        $scope.search = function(term) {
            $timeout(function() {
                $location.path('/search/results').search('q', term);
            });
        };
    }]
);