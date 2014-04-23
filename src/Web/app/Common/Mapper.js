angular.module('app').service('Mapper', ['Mapping',
    function(mappingConfig) {
        var transformObject = function (jsonResult, constructor, mapping) {
            var model = new constructor(), dest = {};

            angular.extend(dest, jsonResult);
            for (var key in dest) {
                if (!model.hasOwnProperty(key)) {
                    delete dest[key];
                }
            }
            angular.forEach(mapping, function(mapFunc, k) {
                dest[k] = mapFunc.bind(jsonResult)();
            });
            angular.extend(model, dest);
            return model;
        };

        this.map = function (jsonResult, constructor) {
            var mapping = mappingConfig(constructor);
            console.log(mapping);
            if (angular.isArray(jsonResult)) {
                var models = [];
                angular.forEach(jsonResult, function (object) {
                    models.push(transformObject(object, constructor, mapping || {}));
                });
                return models;
            } else {
                return transformObject(jsonResult, constructor, mapping || {});
            }
        };

   }
]);