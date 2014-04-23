(function () {
    function Person() {
        this.lastName = '';
        this.firstName = '';
    }

    Person.prototype = {
        get fullName() {
            return this.firstName + " " + this.lastName;
        }
    };

    angular.module('app').constant('Person', Person);
}());
