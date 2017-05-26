<!DOCTYPE html>
<html ng-app="myApp">

<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Angular Form elements cloning</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="{{asset('js/angular.min.js')}}"></script>
    <script src="{{asset('angular/hello.js')}}"></script>

</head>

<body ng-controller="MyCtrl">
<div style="padding: 10px;">
    <h2>Languages</h2>
    <br/>
    <div style="width: 90%; display: inline-block; border: 1px silver dotted;">
        <div class="row">
            <div class="col-xs-3">
                <select class="form-control" ng-init="nativeLanguage.level = 'Native'" data-ng-model="nativeLanguage.level" tooltip="Level">
                    <option value="Native" ng-selected="true">Native</option>
                    <option value="Level">Level</option>
                    <option value="proficient">Proficient</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="beginner">Beginner</option>
                </select>
            </div>
            <div class="col-xs-4">
                <select class="form-control" data-ng-model="nativeLanguage.name" tooltip="Language">
                    <option value="">Language</option>
                    <option value="EN">English</option>
                    <option value="IT">Italian</option>
                    <option value="DE">German</option>
                    <option value="FR">French</option>
                </select>
            </div>
            <div class="col-xs-3">
                <input type="text" data-ng-model="nativeLanguage.remark" class="form-control" placeholder="Remark" tooltip="Remark">
            </div>
            <div class="col-xs-2">

            </div>
        </div>
        <div select-last ng-repeat='language in languages' >

        </div>
    </div>
    <a class="btn" style="margin-bottom: 27px;" href="#" tooltip="Add" ng-click='addRow()'>
        <i class="glyphicon glyphicon-plus"></i>
    </a>
    <pre>@{{1+2}}</pre>

    <pre>@{{nativeLanguage | json}}</pre>
    <pre>@{{languages | json}}</pre>
</div>
</body>

</html>