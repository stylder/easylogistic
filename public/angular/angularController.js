var app = angular.module('app', ['flow', 'ngMap', 'ngNotify']);

app.constant('API_URL', 'http://localhost:8000/api/');

app.directive('selectLast', function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'angular/unidades_row.html',
        replace: true,
        controller: function ($scope) {

            $scope.config = {
                target: '/images/upload',
                testChunks: false,
                query: function (flowFile, flowChunk) {
                    // function will be called for every request
                    return {
                        model_class_path: $scope.unidad.placa , path: 'images/unidades'
                    }
                }
            };
        }
    };
});


app.directive('gallery', function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'angular/galeria.html',
        replace: true,
        controller: function ($scope, $http, API_URL) {

            $http.get(API_URL + "imagenes_unidad")
                .then(function success(response) {
                    $scope.imagenes = response.data;
                    console.log('Imagenes',response.data)
                });
        }
    };
});


app.config(function FlowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        speedSmoothingFactor: 0.2,
        maxChunkRetries: 10,
        simultaneousUploads: 10
    };
});

