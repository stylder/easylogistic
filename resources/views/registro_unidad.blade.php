<section class="fw-section padding-top-3x padding-bottom-2x" ID="unidades" ng-controller="unidadesController">
    <div class="container " disabled="true">
        <section class="fw-section next-to-footer padding-top-3x padding-bottom-2x" ng-hide="operador.licencia">
            <div class="container">
                <div class="row padding-bottom">
                    <div class="col-md-8 col-md-offset-2 box-shadow padding-top padding-bottom sr-scaleUp">
                        <h2 class="text-center">Registro de unidades</h2>
                        <h3 class="text-center">Para registrar unidades primero necesitas darte de alta como
                            conductor</h3>
                        <hr>

                        <div class="row">
                            <h5>Si ya te registraste puedes agregar más unidades al volver a poner tu licencia de conducir</h5>
                            <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Licencia" ng-model="licencia">
                            </div>
                            <div class="col-md-6" ng-click="actualizarlicencia()">
                                <button type="submit" class="btn btn-primary btn-block btn-sm waves-effect waves-light">Actualizar</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <img class="img-responsive" src="img/home/39.jpg" alt="">
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div ng-show="operador.licencia">
            <h2 class="block-title text-center">
                Registra tus unidades
                <small>Las unidades serán registradas a nombre
                    de: @{{ operador.nombre }} @{{ operador.apellidos}}</small>
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
