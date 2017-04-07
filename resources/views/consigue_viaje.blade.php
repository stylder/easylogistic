<section class="fw-section padding-top-3x" id="viajes" style="background-image: url(img/home/38.jpg)">
    <div class="overlay" style="background-color: rgba(33, 33, 33, .78);"></div>

    <div class="container" ng-controller="operadoresController">
        <div class="row">
            <h1 class="text-light text-center">
                Consigue tu viaje
            </h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5 class="text-light">Estado Origen</h5>
                        <select ng-model="estado_origen" ng-change="cambioEstadoOrigen()">
                            <option ng-repeat="estado in estados"
                                    value=@{{estado.id_estado}}>@{{estado.estado}}
                            </option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <h5 class="text-light">Municipio Origen</h5>
                        <select ng-model="municipio_origen">
                            <option ng-repeat="municipios in municipios_origen"
                                    value=@{{municipios.id_municipio}}>@{{municipios.municipio}}</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-light">Fecha Salida</h5>
                        <input type="text" class="form-control datepicker" ng-model="fecha_salida"
                               placeholder="Fecha Salida">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <h5 class="text-light">Estado Destino</h5>
                        <select ng-model="estado_destino" ng-change="cambioEstadoDestino()">
                            <option ng-repeat="estado in estados"
                                    value=@{{estado.id_estado}}>@{{estado.estado}}
                            </option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <h5 class="text-light">Municipio Destino</h5>
                        <select ng-model="municipio_destino">
                            <option ng-repeat="municipios in municipios_destino"
                                    value=@{{municipios.id_municipio}}>@{{municipios.municipio}}</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-light">Fecha Llegada</h5>
                        <input type="text" class="form-control datepicker" ng-model="fecha_llegada"
                               placeholder="Fecha Llegada">
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-4">
                        <h5 class="text-light">Tipo Unidad</h5>
                        <select ng-model="tipo_unidad">
                            <option ng-repeat="unidad in tipo_unidades"
                                    value=@{{unidad.id}}>
                                @{{unidad.unidad}}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <h5 class="text-light">Notas Adicionales</h5>
                        <textarea class="form-control space-bottom" rows="6" ng-model="notas_adicionales"
                                  placeholder="Notas adicionales"></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-offset-5">
                        <a href="#" class="btn btn-light waves-effect waves-light btn-circle">
                            <i class="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


