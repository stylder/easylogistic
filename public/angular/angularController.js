var app = angular.module('app', []);

app.constant('API_URL', 'http://localhost:8000/api/v1/');

app.directive('selectLast', function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'angular/unidades_row.html',
        /*scope: {
         level: '=',
         name: '=',
         remark: '='
         },*/
        replace: true
    };
});


app.controller('unidadesController', function MyCtrl($scope) {
    $scope.languages = [];

    $scope.languages.push($scope.nativeLanguage);

    $scope.addRow = function () {
        var newLanguage = {
            level: $scope.level,
            name: $scope.name,
            remark: $scope.remark
        };
        $scope.languages.push(newLanguage);
        console.log(newLanguage);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null) {
            $scope.languages.splice(rowNo, 1);
            console.log(rowNo);
        }


    };
});

app.controller('operadoresController', function ($scope,$http,API_URL) {
    $http.get(API_URL+"estados")
        .then(function(response) {
            console.log(response);
            $scope.estados = response.data;
        });



    $scope.cambioEstadoOrigen = function(){
        $http.get(API_URL+"municipios/"+$scope.estado_origen)
            .then(function(response) {
                $scope.municipios_origen=[];
                $scope.municipios_origen= response.data;
            });
    }

    $scope.cambioEstadoDestino = function(){
        $http.get(API_URL+"municipios/"+$scope.estado_destino)
            .then(function(response) {
                $scope.municipios_destino=[];
                $scope.municipios_destino= response.data;
            });
    }

});



