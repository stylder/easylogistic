var app = angular.module('app');


app.controller('unidadesController', function ($scope, $http, API_URL) {



    $http.post(API_URL + "verificar_session")
        .then(function success(response) {
            $scope.operador = response.data;
            console.log("session", response);
        });

    
    $scope.unidades = [];

    var nuevaUnidad ={} ;

    $scope.unidades.push(nuevaUnidad);
    $scope.getUnidades = function(){
        console.log($scope.unidades);
    }

    $scope.addRow = function () {
        var nuevaUnidad ={} ;

        $scope.unidades.push(nuevaUnidad);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null && $scope.unidades.length>1) {
            $scope.unidades.splice(rowNo, 1);
        }
    };

    $scope.borrarUnidad = function (file) {
        var imagen_eliminar ={
            imagen:"images/unidades/"+file,
            licencia:$scope.operador.licencia
        };

        $http.post(API_URL + "eliminar_imagen/", imagen_eliminar)
            .then(function (response) {
                console.log("Eliminar", response);
            });
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

