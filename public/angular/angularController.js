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

app.controller('uneteController', function MyCtrl($scope,$http, API_URL) {
    $scope.familia={};

    $scope.terminos=false;
    $scope.change = function() {

        $scope.terminos=!$scope.terminos;
        console.log("hello",$scope.terminos);
    };
});



app.controller('unidadesController', function MyCtrl($scope,$http, API_URL) {

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
        .then(function success (response) {
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
        .then(function success (response) {
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



