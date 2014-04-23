angular.module('app').provider('Mapping', [
    function() {
        'use strict';
        
        var maps = [];

        function getMapFor(item) {
            for (var i = maps.length - 1; i >= 0; i--) {
                var map = maps[i]
                if (item === map.ctor) {
                    return map.mapping;
                }
            };
        }

        this.for = function (ctor, mapping) {
            maps.push({ ctor: ctor, mapping: mapping });
        }
        
        this.$get = function () {
            return function (ctor) {
                var mapping = getMapFor(ctor);
                return mapping;
            }
        }
    }
]);