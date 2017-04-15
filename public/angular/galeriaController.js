var app = angular.module('app');

app.controller('galeriaController', function ($scope, $http, API_URL) {
    $http.get(API_URL + "imagenes_unidad")
        .then(function success(response) {
            console.log("Imagenes",response.data)
            $scope.slides = response.data;

            
        });
});


