
var myApp = angular.module('myApp',[]);

myApp.directive('selectLast', function () {
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


myApp.controller('MyCtrl',MyCtrl);


function MyCtrl($scope) {
    $scope.languages = [];

    $scope.languages.push($scope.nativeLanguage);

    $scope.addRow = function(){
        var newLanguage = {
            level: $scope.level,
            name: $scope.name,
            remark: $scope.remark
        };
        $scope.languages.push(newLanguage);
        console.log(newLanguage);
    };

    $scope.deleteRow = function(rowNo) {
        if (rowNo != null){
            $scope.languages.splice(rowNo, 1);
            console.log(rowNo);
        }


    };


}