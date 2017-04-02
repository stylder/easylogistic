<section class="fw-section padding-top-3x padding-bottom-2x" ng-app="myApp">
    <div class="container " ng-controller="MyCtrl">
        <h2 class="block-title text-center">
            Registra tus unidades
        </h2>

        <div class="row">
            <div class="row text-center panel-heading hidden-xs hidden-sm">
                <div class="col-md-2">
                    <h5 class="">Marca</h5>
                </div>

                <div class="col-md-2">
                    <h5 class="">Módelo</h5>
                </div>
                <div class="col-md-2">
                    <h5 class="">Placas</h5>
                </div>
                <div class="col-md-3">
                    <h5 class="">No.Seguro</h5>
                </div>
                <div class="col-md-2">
                    <h5 class="">Tipo</h5>
                </div>
                <div class="col-md-1">
                    <h5 class="">Acciones</h5>
                </div>
            </div>
        </div>


        <div class="row">
            <div select-last></div>
            <div select-last ng-repeat='language in languages'></div>

            <div class="row">
                <div class="col-md-1 col-md-offset-11">
                    <a class="btn btn-default btn-success" tooltip="Add" ng-click='addRow()'>
                        <i class="fa fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
