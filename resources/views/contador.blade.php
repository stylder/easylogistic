
<h4 class="text-center">Contadores</h4>
<div class="row space-bottom-2x text-center" ng-controller="contadoresController">
    <div class="col-md-4">
        <!-- Data API:
             data-decimal="number" How many digits after decimal point.
             data-duration="number" The number of milliseconds it should take to finish counting.
        -->

        <div class="counter" data-duration="1000">
            <header class="counter-icon">
                <i class="icon-map"></i>
            </header>
            <div class="digits">@{{ contadores.municipio.municipios }}</div>
            <footer class="counter-footer">
                <p>Municipios</p>
            </footer>
        </div>
    </div><!-- .col-sm-4 -->
    <div class="col-md-4">
        <!-- Data API:
             data-decimal="number" How many digits after decimal point.
             data-duration="number" The number of milliseconds it should take to finish counting.
        -->
        <div class="counter" data-duration="1000">
            <header class="counter-icon">
                <i class="fa fa-users"></i>
            </header>
            <div class="digits">@{{ contadores.operadores }}</div>
            <footer class="counter-footer">
                <p>Operadores</p>
            </footer>
        </div>
    </div><!-- .col-sm-4 -->
    <div class="col-md-4">
        <!-- Data API:
             data-decimal="number" How many digits after decimal point.
             data-duration="number" The number of milliseconds it should take to finish counting.
        -->
        <div class="counter" data-duration="1000">
            <header class="counter-icon">
                <i class="fa fa-truck"></i>
            </header>
            <div class="digits">@{{ contadores.unidades }}</div>
            <footer class="counter-footer">
                <p>Unidades</p>
            </footer>
        </div>
    </div><!-- .col-sm-4 -->
</div><!-- .row -->