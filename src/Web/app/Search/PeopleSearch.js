angular.module('app').factory('PeopleSearch', ['People', function (people) {
    function search(term) {
        return _.filter(people, function (person) {
            return person.name.first.indexOf(term) > -1 ||
             person.name.last.indexOf(term) > -1
        });
    }

    return {
        search: search
    }
}]);