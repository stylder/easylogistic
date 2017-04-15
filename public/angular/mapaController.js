var app = angular.module('app');



app.controller('mapaController', function ($scope, $http, API_URL, NgMap, $q) {
    $key = "AIzaSyA5DLwPPVAz88_k0yO2nmFe7T9k1urQs84";
    $mapas = [];
    $scope.locaciones = [];

    $http.get(API_URL + "mapa")
        .then(function success(response) {
            $mapas = response.data;
            var prom = [];
            $mapas.forEach(function (obj, i) {
                prom.push(getLatLgt(obj.estado, obj.municipio), function (latlgt) {
                    $scope.locaciones.push(latlgt);
                });

            });

            $q.all(prom).then(function () {
                NgMap.getMap().then(function (map) {
                    $scope.map = map;
                    $scope.initMarkerClusterer();
                });
            });

        });


    getLatLgt = function (estado, municipio, callback) {
        return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + estado + ", " + municipio)
            .then(function success(response) {

                var latLgt = (response.data.results[0].geometry.location);
                var elemento = {name: estado + ", " + municipio, pos: [latLgt.lat, latLgt.lng]}
                $scope.locaciones.push(elemento);
                return (elemento);
            });

    };


    $scope.initMarkerClusterer = function () {
        var markers = $scope.locaciones.map(function (city) {
            return $scope.createMarkerForCity(city);
        });
        var mcOptions = {imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'};
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