angular.module('app').controller('Results',
    ['$scope','$location','PeopleSearch', function($scope, $location, peopleSearch) {
        $scope.searchTerm = $location.search()['q'];
        $scope.results = peopleSearch.search($scope.searchTerm);
    }]
);