angular.module('app').config(['MappingProvider', 'Person', function(mapping, person) {
    mapping.for(person, {
        firstName: function() {
            return this.name.first;
        },
        lastName: function() {
            return this.name.last;
        }
    });
}]);