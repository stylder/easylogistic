var app = angular.module('app');

app.controller('operadoresController', function ($scope, $http, API_URL, ngNotify) {


    $http.get(API_URL + "estados")
        .then(function success(response) {
            $scope.estados = response.data;
        });

    $http.get(API_URL + "tipo_unidad")
        .then(function (response) {
            $scope.tipo_unidades = response.data;
        });


    $scope.cambioEstadoOrigen = function () {
        $http.get(API_URL + "municipios/" + $scope.estado_origen)
            .then(function (response) {
                $scope.municipios_origen = [];
                $scope.municipios_origen = response.data;
            });
    };

    $scope.cambioEstadoDestino = function () {
        $http.get(API_URL + "municipios/" + $scope.estado_destino)
            .then(function (response) {
                $scope.municipios_destino = [];
                $scope.municipios_destino = response.data;
            });
    };

});
