var app = angular.module('app');

app.controller('uneteController', function MyCtrl($scope, $http, API_URL, ngNotify) {

    ngNotify.addTheme('notificaciones', 'notificaciones');

    ngNotify.config({
        theme: 'notificaciones'
    });


    $scope.notificacion = function () {
        ngNotify.set('Operador ' +'agregado correctamente','success');
    };

    $scope.datos_operador = {
        terminos:false
    };

    $http.get(API_URL + "estados")
        .then(function success(response) {
            $scope.estados = response.data;
        });


    $scope.cambioEstado = function () {
        $http.get(API_URL + "municipios/" + $scope.datos_operador.estado)
            .then(function (response) {
                $scope.municipios = [];
                $scope.municipios = response.data;
            });
    };


    $scope.agregarOperador = function () {
        if ($scope.terminos) {
            $http.post(API_URL + "agregar_unidades/", $scope.datos_operador)
                .then(function (response) {
                    ngNotify.set('Operador ' + response.data.nombre + ' ' + response.data.apellidos + 'agregado correctamente','success');
                });
        } else {
            ngNotify.set('Para poder registrarse en la familia EasyLogistic necesita que acepte los términos  y condiciones');
        }
    };



    $scope.change = function () {
        $scope.datos_operador.terminos = true;
        console.log($scope.datos_operador.terminos);
    };
});