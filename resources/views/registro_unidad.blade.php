<section class="fw-section padding-top-3x padding-bottom-2x"  ID="unidades">
    <div class="container " ng-controller="unidadesController">
        <h2 class="block-title text-center">
            Registra tus unidades
            <small>Las unidades serán registradas a nombre de: @{{ operador.nombre }} @{{ operador.apellidos}}</small>
        </h2>

        <div class="row">
            <div class="row text-center hidden-xs hidden-sm">
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
