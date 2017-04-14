

var app = angular.module('app', ['flow','ngMap','ngNotify']);

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

app.controller('uneteController', function MyCtrl($scope, $http, API_URL,ngNotify) {

    ngNotify.addTheme('notificaciones', 'notificaciones');

    ngNotify.config({
        theme: 'notificaciones'
    });

    $scope.notificacion = function () {
        ngNotify.set('Your notification message goes here!');

    };


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

app.controller('operadoresController', function ($scope, $http, API_URL, ngNotify) {




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


app.controller('mapaController', function ($scope, $http, API_URL,NgMap,$q) {
    $key = "AIzaSyA5DLwPPVAz88_k0yO2nmFe7T9k1urQs84";
    $mapas = [];
    $scope.locaciones = [];

    $http.get(API_URL + "mapa")
        .then(function success(response) {
            $mapas = response.data;
            console.log($mapas)

            var prom = [];
            $mapas.forEach(function (obj, i) {
                prom.push(getLatLgt(obj.estado,obj.municipio), function (latlgt) {
                    $scope.locaciones.push(latlgt);
                } );

            });

            $q.all(prom).then(function () {
                console.log("terminé", $scope.locaciones);
                    NgMap.getMap().then(function (map) {
                    $scope.map = map;
                    $scope.initMarkerClusterer();
                });
            });

        });


    getLatLgt = function(estado, municipio, callback) {
        return  $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + estado + ", " + municipio)
            .then(function success(response) {

                var latLgt = (response.data.results[0].geometry.location);
                var elemento = {  name: estado+", "+municipio, pos: [latLgt.lat,latLgt.lng]}
                console.log(elemento)
                $scope.locaciones.push(elemento);
                 return (elemento);
            });

    };


    $scope.initMarkerClusterer = function () {
        var markers = $scope.locaciones.map(function (city) {
            return $scope.createMarkerForCity(city);
        });
        var mcOptions = { imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m' };
        return new MarkerClusterer($scope.map, markers, mcOptions);
    };


    $scope.createMarkerForCity = function (city) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(city.pos[0], city.pos[1]),
            title: city.name
        });
        google.maps.event.addListener(marker, 'click', function () {
            $scope.selectedCity = city;
            $scope.map.showInfoWindow('myInfoWindow', this);
        });
        return marker;
    }


});



