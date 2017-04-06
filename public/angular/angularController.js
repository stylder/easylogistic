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
        console.log(newLanguage);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null) {
            $scope.languages.splice(rowNo, 1);
            console.log(rowNo);
        }
    };

    $http.get(API_URL + "tipo_unidad")
        .then(function (response) {
            console.log(response);
            $scope.tipo_unidades = response.data;
        });



    $scope.contact = {};
    $scope.contact.id = 'new';

    $scope.upload = upload;
    $scope.setFileName = setFileName;
    $scope.image_root = '/images/';



    function setFileName(flow_files) {
        $scope.image = $scope.image_root + flow_files[0].name;
    }

    function upload(files, event, flow) {
        angular.forEach(files, function (v, i) {
            files[i].flowObj.opts.query._token = vm.token;
        });
        flow.upload();
    }


});

app.controller('operadoresController', function ($scope, $http, API_URL) {
    $http.get(API_URL + "estados")
        .then(function (response) {
            console.log(response);
            $scope.estados = response.data;
        });

    $http.get(API_URL + "tipo_unidad")
        .then(function (response) {
            console.log(response);
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


app.config(function FlowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        speedSmoothingFactor: 0.2,
        maxChunkRetries: 10,
        simultaneousUploads: 10
    };
});



