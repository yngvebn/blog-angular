angular.module('app').controller('Home',['$scope', function($scope) {
        $scope.showTextValue = function() {
            alert('The value of $scope.text is: ' + $scope.text);
        };
    }]
);