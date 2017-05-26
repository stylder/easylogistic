var app = angular.module('app');


app.controller('contadoresController', function ($scope, $http, API_URL) {
    $http.get(API_URL + "contadores")
        .then(function (response) {
            $scope.contadores = response.data;
        });
});

