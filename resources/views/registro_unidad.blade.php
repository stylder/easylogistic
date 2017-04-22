<section class="fw-section padding-top-3x padding-bottom-2x" ID="unidades" ng-controller="unidadesController">
    <div class="container " disabled="true">

        <h2 class="block-title text-center">
            Registra tus unidades
            <small>Las unidades serán registradas a nombre de: @{{ operador.nombre }} @{{ operador.apellidos}}</small>
        </h2>


        <h2 class="block-title text-center" ng-show="operador.licencia">
            Para registrar las unidades primero registrate como operador
        </h2>


        <div ng-hide="operador.licencia">
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
                    <div class="col-md-2">
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


            <div class="row ">

                @{{unidades}}

                <div select-last ng-repeat='unidad in unidades' data-ng-model="unidad"></div>

                <div class="row padding-top-2x">
                    <div class="col-md-9"></div>
                    <div class="col-md-2">
                        <a href="#"
                           class="btn btn-default btn-rounded waves-effect waves-light btn-divided btn-icon-left"
                           ng-click="agregarUnidades()">
                            <i class="fa fa-truck"></i>Guardar Unidades
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
