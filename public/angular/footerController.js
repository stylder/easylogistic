var app = angular.module('app');


app.controller('footerController', function ($scope, $rootScope, $http, API_URL, ngNotify) {


    $scope.enviarCorreo = function () {

        $http.post(API_URL + "contactanos", $scope.contacto)
            .then(function (response) {
                ngNotify.set('Se envió correo  correctamente', 'success');

            });

    };
});

