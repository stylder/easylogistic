var app = angular.module('app');


app.controller('unidadesController', function MyCtrl($scope, $http, API_URL) {


    $scope.getElementos = function()
    {
/*
        $scope.todo =[];
        for(var i in $scope.unidades)
        {
            //$scope.todo.push($scope.values[i]);

        }
*/

        console.log($scope)


    };


    $http.post(API_URL + "verificar_session")
        .then(function success(response) {
            $scope.operador = response.data;
            console.log("session", response);
        });

    $scope.unidades = [];

    $scope.unidades.push($scope.nativeLanguage);

    $scope.addRow = function () {
        var newLanguage ={unidad:{
            modelo:"jeje"
        }} ;

        $scope.unidades.push(newLanguage);
    };

    $scope.deleteRow = function (rowNo) {
        if (rowNo != null) {
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

