angular.module('app').factory('PeopleSearch', ['People', 'Mapper', 'Person', function (people, mapper, Person) {
    function search(term) {
        var searchResults = _.filter(people, function (person) {
            return person.name.first.indexOf(term) > -1 ||
                person.name.last.indexOf(term) > -1;
        });

        return mapper.map(searchResults, Person);
    }

    return {
        search: search
    };
}]);