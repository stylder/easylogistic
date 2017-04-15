var app = angular.module('app', ['flow', 'ngMap', 'ngNotify']);

app.constant('API_URL', 'http://localhost:8000/api/');

app.directive('selectLast', function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'angular/unidades_row.html',
        link: function(scope, element, attrs) {
            scope.unidad = attrs.unidad;
        },

        replace: true
    };
});


app.config(function FlowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        speedSmoothingFactor: 0.2,
        maxChunkRetries: 10,
        simultaneousUploads: 10
    };
});



