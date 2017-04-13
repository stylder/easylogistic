<section class="fw-section padding-top-3x padding-bottom-2x" id="operador">
    <div class="container" ng-controller="uneteController">
        <h2 class="block-title text-right">
            Unete a la flotilla
            <small>Es gratis.</small>
        </h2>

        <div class="row">

            <div class="col-md-5">
                <img src="img/home/39.jpg" alt="">
            </div>

            <div class="col-md-7">
                <h4 class="block-title text-center">
                    Datos Operador
                </h4>

                <div class="row">
                    <div class="col-md-6">
                        <h5 class="">Nombre</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>

                    <div class="col-md-6">
                        <h5 class="">Apellidos</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6">
                        <h5 class="">Correo</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>

                    <div class="col-md-6">
                        <h5 class="">Teléfono</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                </div>



                <div class="row">
                    <div class="col-md-6">
                        <h5 class="">No. Licencia</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>

                    <div class="col-md-6">
                        <h5 class="">No. Seguro</h5>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                </div>



                <div class="row">
                    @include('terminos_condiciones')
                </div>


                <div class="row">



                    <div class="col-sm-7">
                        <label class="checkbox checkbox-inline" ng-click="change()">
                            <input type="checkbox" ng-model="terminos" ng-change="change()" >
                            Acepto términos y condiciones
                        </label>
                    </div>
                    <div class="col-sm-5">

                        <a href="#" class="btn btn-3d btn-primary btn-block btn-sm"  ng-disabled="!terminos">Registrarme</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
