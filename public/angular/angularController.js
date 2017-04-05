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

app.controller('operadoresController', function ($scope, $http, API_URL) {
    $http.get(API_URL + "estados")
        .then(function (response) {
            console.log(response);
            $scope.estados = response.data;
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


app.controller("ImagenesController", function MainController($http, $scope) {

    var vm = this;
    vm.contact = {};
    vm.contact.id = 'new';
    vm.token = false;
    vm.upload = upload;
    vm.setFileName = setFileName;
    vm.image_root = '/images/contacts/';

    activate();

    ////
    function activate() {
        getToken();
    }

    function setFileName(flow_files) {
        vm.image = vm.image_root + flow_files[0].name;
    }

    function upload(files, event, flow) {
        angular.forEach(files, function (v, i) {
            files[i].flowObj.opts.query._token = vm.token;
        });


        flow.upload();
    }

    function getToken() {
        $http.get('/auth/token').then(
            successGettingToken,
            errorGettingToken
        );
    }

    function successGettingToken(response) {
        vm.token = response.data;
    }

    function errorGettingToken(response) {
        console.log("Error");
        console.log(response);
    }
});

app.config(function FlowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        speedSmoothingFactor: 0.2,
        maxChunkRetries: 10,
        simultaneousUploads: 10
    };
});



