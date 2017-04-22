var app = angular.module('app');


app.controller('footerController', function ($scope, $rootScope, $http, API_URL, ngNotify) {


    $scope.enviarCorreo = function () {
        ngNotify.set('Se envió correoo ' + $scope.contacto + ' correctamente', 'success');
/*        $http.post(API_URL + "enviar_correo/", {unidades: $scope.unidades})
            .then(function (response) {
                ngNotify.set('Se agregaron ' + response.data.unidades.length + ' unidades correctamente', 'success');
            });*/

    };
});

