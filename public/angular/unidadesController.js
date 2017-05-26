var app = angular.module('app');


app.controller('unidadesController', function ($scope, $rootScope, $http, API_URL, ngNotify) {


    $rootScope.$on('eventoOperador', function (event, args) {
        $scope.operador = args.operador;
    });

    $scope.actualizarlicencia = function () {
        $http.post(API_URL + "actualizar_licencia",  {licencia:$scope.licencia})
            .then(function (response) {
                console.log(response.data);
                if (response.data.operador){
                        $rootScope.$broadcast('eventoOperador', {operador: response.data.operador});
                        ngNotify.set('Ahora puede agregar unidades a nombre de: ' + response.data.operador.nombre+ ' '+response.data.operador.apellidos, 'success');
                }
            });
    };

    $http.post(API_URL + "verificar_session")
        .then(function success(response) {
            $scope.operador = response.data;
        });


    $scope.unidades = [];

    var nuevaUnidad = {};

    $scope.unidades.push(nuevaUnidad);


    $scope.addRow = function () {
        var nuevaUnidad = {};

        $scope.unidades.push(nuevaUnidad);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null && $scope.unidades.length > 1) {
            $scope.unidades.splice(rowNo, 1);
        }
    };

    $scope.borrarUnidad = function (file) {
        var imagen_eliminar = {
            imagen: "images/unidades/" + file,
            licencia: $scope.operador.licencia
        };

        $http.post(API_URL + "eliminar_imagen/", imagen_eliminar)
            .then(function (response) {
                console.log("Eliminar", response);
            });
    };


    $scope.agregarUnidades = function () {
        $http.post(API_URL + "agregar_unidades", {unidades: $scope.unidades})
            .then(function (response) {
                ngNotify.set('Se agregaron ' + response.data.unidades.length + ' unidades correctamente', 'success');
            });

    };


    $http.get(API_URL + "tipo_unidad")
        .then(function (response) {
            $scope.tipo_unidades = response.data;
        });



    $scope.upload = upload;
    $scope.setFileName = setFileName;
    $scope.image_root = '/images/unidades/';


    $scope.$on('flow::fileAdded', function (event, $flow, flowFile) {
        //$flow.opts.query = { someParam: yourValue, otherParam: otherValue };
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    });

    function setFileName(flow_files) {
        $scope.image = $scope.image_root + flow_files[0].name;
    }

    function upload(files, event, flow) {
        flow.upload();
    }


});

