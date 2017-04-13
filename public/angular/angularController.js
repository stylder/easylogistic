var app = angular.module('app', ['flow']);

app.constant('API_URL', 'http://localhost:8000/api/');

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

app.controller('uneteController', function MyCtrl($scope, $http, API_URL) {


    $scope.datos_operador = {};

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
        $http.post(API_URL + "agregar_operador/",$scope.datos_operador)
            .then(function (response) {
                console.log(response)
            });
    };


    $scope.terminos = false;
    $scope.change = function () {

        $scope.terminos = !$scope.terminos;
        console.log("hello", $scope.terminos);
    };
});


app.controller('unidadesController', function MyCtrl($scope, $http, API_URL) {

    $scope.languages = [];

    $scope.languages.push($scope.nativeLanguage);

    $scope.addRow = function () {
        var newLanguage = {
            level: $scope.level,
            name: $scope.name,
            remark: $scope.remark
        };
        $scope.languages.push(newLanguage);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null) {
            $scope.languages.splice(rowNo, 1);
        }
    };

    $http.get(API_URL + "tipo_unidad")
        .then(function (response) {
            $scope.tipo_unidades = response.data;
        });


    $scope.unidad = {};
    $scope.unidad.operador = 'new';
    $scope.upload = upload;
    $scope.setFileName = setFileName;
    $scope.image_root = '/images/unidades/';


    function setFileName(flow_files) {
        $scope.image = $scope.image_root + flow_files[0].name;
    }

    function upload(files, event, flow) {
        flow.upload();
    }


});

app.controller('operadoresController', function ($scope, $http, API_URL) {


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

app.controller('galeriaController', function ($scope, $http, API_URL) {
    $http.get(API_URL + "imagenes_unidad")
        .then(function success(response) {
            $scope.imagenes = response.data;
        });
});


app.config(function FlowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        speedSmoothingFactor: 0.2,
        maxChunkRetries: 10,
        simultaneousUploads: 10
    };
});


app.controller('mapaController', function ($scope, $http, API_URL) {
    $key= "AIzaSyA5DLwPPVAz88_k0yO2nmFe7T9k1urQs84";
    $mapas = [];
    $ok=[];

    $http.get(API_URL + "mapa")
        .then(function success(response) {
            $mapas =  response.data;
            console.log($mapas)

            for (i = 0; i < $mapas.length; i++) {

                $http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+$mapas[i].estado +", " + $mapas[i].municipio)
                    .then(function success(response) {
                        console.log(response.data.results[0].geometry.location)
                        $ok.push(response.data.results[0].geometry.location)
                    });
            }

        });



});



