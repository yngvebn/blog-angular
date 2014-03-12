angular.module('app').controller('Results',
    ['$scope','$location', function($scope, $location) {
            $scope.searchTerm = $location.search()['q'];
        }]
);